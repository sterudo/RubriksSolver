// "Natural expression" layer. The built-in tutor needs nothing; Gemini (cloud) and any
// OpenAI-compatible local server (LM Studio, Ollama, llama.cpp ...) running a Gemma
// model can be attached to rephrase explanations and answer learner questions.

const STORAGE_KEY = 'rubiks-solver.ai';

export const DEFAULT_SETTINGS = {
  provider: 'builtin', // 'builtin' | 'gemini' | 'local'
  geminiKey: '',
  geminiModel: 'gemini-2.5-flash',
  localUrl: 'http://localhost:1234/v1',
  localModel: 'google/gemma-4-e4b',
};

export function loadSettings() {
  try {
    return { ...DEFAULT_SETTINGS, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function saveSettings(settings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

const SYSTEM =
  'You are a friendly Rubik\'s cube tutor. Explain in plain, encouraging language for a beginner, in at most 120 words. ' +
  'Use standard notation (R, U\', F2 ...) only where given. Never invent moves that are not in the provided data.';

async function postJson(url, headers, body, signal) {
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body), signal });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${(await res.text()).slice(0, 200)}`);
  return res.json();
}

export async function askModel(settings, prompt, signal) {
  if (settings.provider === 'gemini') {
    if (!settings.geminiKey) throw new Error('Add a Gemini API key in the Tutor settings.');
    const data = await postJson(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(settings.geminiModel)}:generateContent`,
      { 'x-goog-api-key': settings.geminiKey },
      { systemInstruction: { parts: [{ text: SYSTEM }] }, contents: [{ role: 'user', parts: [{ text: prompt }] }] },
      signal,
    );
    const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text).join('') ?? '';
    if (!text) throw new Error('Gemini returned no text.');
    return text.trim();
  }
  if (settings.provider === 'local') {
    const base = settings.localUrl.replace(/\/+$/, '');
    const data = await postJson(
      `${base}/chat/completions`,
      {},
      {
        model: settings.localModel,
        temperature: 0.4,
        stream: false,
        messages: [
          { role: 'system', content: SYSTEM },
          { role: 'user', content: prompt },
        ],
      },
      signal,
    );
    const text = data.choices?.[0]?.message?.content ?? '';
    if (!text) throw new Error('The local model returned no text.');
    return text.trim();
  }
  throw new Error('No AI provider selected.');
}

export function stepPrompt(ctx) {
  return (
    `Cube: ${ctx.n}x${ctx.n}. Stage: "${ctx.stageTitle}" – goal: ${ctx.goal}\n` +
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
