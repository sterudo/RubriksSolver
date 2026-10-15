// "Natural expression" layer. The built-in tutor needs nothing; Gemini (cloud) and any
// OpenAI-compatible local server (LM Studio, Ollama, llama.cpp ...) running a Gemma
// model can be attached to rephrase explanations and answer learner questions.

const STORAGE_KEY = 'rubiks-solver.ai';

export const GEMINI_MODELS = ['gemini-2.5-flash', 'gemini-3.1-flash-lite', 'gemini-3.5-flash-lite', 'gemini-3.6-flash'];

export const DEFAULT_SETTINGS = {
  provider: 'builtin', // 'builtin' | 'gemini' | 'local'
  geminiKey: '',
  geminiModel: GEMINI_MODELS[0],
  localUrl: 'http://localhost:1234/v1',
  localModel: 'google/gemma-4-e4b',
};

export function loadSettings() {
  let stored = {};
  try {
    stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    // corrupt entry: fall back to defaults
  }
  const settings = { ...DEFAULT_SETTINGS, ...stored };
  if (!GEMINI_MODELS.includes(settings.geminiModel)) settings.geminiModel = DEFAULT_SETTINGS.geminiModel;
  return settings;
}

export function saveSettings(settings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

const SYSTEM =
  'You are a friendly Rubik\'s cube tutor. Explain in plain, encouraging language for a beginner, in at most 120 words. ' +
  'Use standard notation (R, U\', F2 ...) only where given. Never invent moves that are not in the provided data.';

export class ApiError extends Error {
  constructor(kind, message, status = 0) {
    super(message);
    this.kind = kind; // 'network' | 'timeout' | 'http' | 'abort'
    this.status = status;
  }
}

// fetch wrapper: timeouts, readable errors, parsed JSON error bodies.
export async function request(url, { method = 'GET', headers = {}, body, signal, timeoutMs = 20000 } = {}) {
  const controller = new AbortController();
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);
  signal?.addEventListener('abort', () => controller.abort());
  let res;
  try {
    res = await fetch(url, {
      method,
      headers: body ? { 'Content-Type': 'application/json', ...headers } : headers,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });
  } catch (e) {
    if (timedOut) throw new ApiError('timeout', 'The request timed out.');
    if (e.name === 'AbortError') throw new ApiError('abort', 'Cancelled.');
    throw new ApiError('network', e.message);
  } finally {
    clearTimeout(timer);
  }
  const text = await res.text();
  let data = null;
  try {
    data = JSON.parse(text);
  } catch {
    // not JSON
  }
  if (!res.ok) {
    const msg = data?.error?.message || (typeof data?.error === 'string' ? data.error : '') || text.slice(0, 200) || res.statusText;
    throw new ApiError('http', msg, res.status);
  }
  return data;
}

export function explainGeminiError(e, model) {
  if (e.kind === 'network' || e.kind === 'timeout') {
    return 'Cannot reach generativelanguage.googleapis.com - check your internet connection, proxy or ad-blocker.';
  }
  if (e.status === 400 && /api key|API_KEY/i.test(e.message)) return `The API key is not valid. (${e.message})`;
  if (e.status === 401 || e.status === 403) return `The key was rejected or lacks permission (HTTP ${e.status}): ${e.message}`;
  if (e.status === 404) return `Model "${model}" was not found. Pick another model. (${e.message})`;
  if (e.status === 429) return `Quota or rate limit reached (HTTP 429): ${e.message}`;
  return e.status ? `Gemini returned HTTP ${e.status}: ${e.message}` : e.message;
}

// A failed fetch looks the same for "server down" and "server up but CORS blocks the reply".
// A no-cors request succeeds (opaquely) whenever something is listening, so use it to tell them apart.
export async function describeLocalNetworkFailure(base) {
  try {
    await fetch(`${base}/models`, { mode: 'no-cors', cache: 'no-store' });
  } catch {
    return `Cannot reach ${base} - the server is not running or the address/port is wrong.`;
  }
  return (
    `The server at ${base} is running, but the browser blocked its reply (CORS is disabled on the server). ` +
    'In LM Studio open Developer → Server Settings and turn on "Enable CORS", then test again.'
  );
}

export function explainLocalError(e, base) {
  if (e.kind === 'timeout') return `${base} did not answer in time.`;
  if (e.status === 404) return `The server answered 404: ${e.message}. Check the model name, and that the base URL ends with /v1.`;
  return e.status ? `The server returned HTTP ${e.status}: ${e.message}` : e.message;
}

export const geminiUrl = (model) => `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}`;
export const localBase = (s) => s.localUrl.trim().replace(/\/+$/, '');

export async function askModel(settings, prompt, signal) {
  if (settings.provider === 'gemini') {
    if (!settings.geminiKey.trim()) throw new Error('Add a Gemini API key in Settings.');
    let data;
    try {
      data = await request(`${geminiUrl(settings.geminiModel)}:generateContent`, {
        method: 'POST',
        headers: { 'x-goog-api-key': settings.geminiKey.trim() },
        body: { systemInstruction: { parts: [{ text: SYSTEM }] }, contents: [{ role: 'user', parts: [{ text: prompt }] }] },
        signal,
      });
    } catch (e) {
      throw new Error(explainGeminiError(e, settings.geminiModel));
    }
    const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join('') ?? '';
    if (!text) throw new Error('Gemini returned no text (the answer may have been blocked).');
    return text.trim();
  }
  if (settings.provider === 'local') {
    const base = localBase(settings);
    if (!base) throw new Error('Enter the local server URL in Settings.');
    let data;
    try {
      data = await request(`${base}/chat/completions`, {
        method: 'POST',
        body: {
          model: settings.localModel,
          temperature: 0.4,
          stream: false,
          messages: [
            { role: 'system', content: SYSTEM },
            { role: 'user', content: prompt },
          ],
        },
        signal,
        timeoutMs: 120000, // local models can be slow to load
      });
    } catch (e) {
      throw new Error(e.kind === 'network' ? await describeLocalNetworkFailure(base) : explainLocalError(e, base));
    }
    const text = data?.choices?.[0]?.message?.content ?? '';
    if (!text) throw new Error('The local model returned no text.');
    return text.trim();
  }
  throw new Error('No AI provider selected.');
}

const TEST_PROMPT = 'Reply with the single word OK.';

// Connection tests. Each returns { ok, message, reply? } and never throws.
export async function testGemini(settings) {
  const key = settings.geminiKey.trim();
  if (!key) return { ok: false, message: 'Enter an API key first.' };
  try {
    // Cheap metadata call: validates the key and that the model exists.
    await request(geminiUrl(settings.geminiModel), { headers: { 'x-goog-api-key': key }, timeoutMs: 15000 });
    const reply = await askModel({ ...settings, provider: 'gemini' }, TEST_PROMPT);
    return { ok: true, message: `API key accepted and model "${settings.geminiModel}" answered.`, reply };
  } catch (e) {
    return { ok: false, message: e instanceof ApiError ? explainGeminiError(e, settings.geminiModel) : e.message };
  }
}

export async function testLocal(settings) {
  const base = localBase(settings);
  if (!base) return { ok: false, message: 'Enter the server URL first (for example http://localhost:1234/v1).' };
  if (!settings.localModel.trim()) return { ok: false, message: 'Enter the model name first.' };
  let available = null;
  try {
    const list = await request(`${base}/models`, { timeoutMs: 8000 });
    available = (list?.data ?? []).map((m) => m.id).filter(Boolean);
  } catch (e) {
    if (e.kind === 'network') return { ok: false, message: await describeLocalNetworkFailure(base) };
    if (e.kind === 'timeout') return { ok: false, message: explainLocalError(e, base) };
    // Some servers have no /models endpoint; the chat request below decides.
  }
  if (available?.length && !available.includes(settings.localModel)) {
    const shown = available.slice(0, 10).join(', ') + (available.length > 10 ? ', …' : '');
    return { ok: false, message: `The server is reachable but has no model named "${settings.localModel}". Available: ${shown}` };
  }
  try {
    const reply = await askModel({ ...settings, provider: 'local' }, TEST_PROMPT);
    return { ok: true, message: `Server reachable and model "${settings.localModel}" answered.`, reply };
  } catch (e) {
    return { ok: false, message: e.message };
  }
}

export function stepPrompt(ctx) {
  return (
    `Cube: ${ctx.n}x${ctx.n}. Stage: "${ctx.stageTitle}" - goal: ${ctx.goal}\n` +
    `Lesson text: ${ctx.concept}\n` +
    (ctx.stepLabel ? `Current step: ${ctx.stepLabel}. Moves in this step: ${ctx.moves.join(' ') || 'none'}.\n` : '') +
    (ctx.question ? `Learner question: ${ctx.question}\n` : 'Explain this step in your own words and say what the learner should look for.\n')
  );
}

export function builtinAnswer(ctx) {
  const parts = [`${ctx.stageTitle}: ${ctx.goal}`, ctx.concept];
  if (ctx.stepLabel) parts.push(`Now: ${ctx.stepLabel}${ctx.moves.length ? ` (${ctx.moves.join(' ')})` : ''}.`);
  if (ctx.question) parts.push('Connect an AI model in the Tutor settings to get free-form answers to questions like this.');
  return parts.join('\n\n');
}

export async function explain(settings, ctx, signal) {
  if (settings.provider === 'builtin') return { text: builtinAnswer(ctx), ai: false };
  return { text: await askModel(settings, stepPrompt(ctx), signal), ai: true };
}
