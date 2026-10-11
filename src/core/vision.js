// AI locator for the cube outline in a photo.
//
// The outline itself comes from the model-based fit in cubefit.js. Vision models are good
// at finding an object but poor at pointing to six precise vertices, so the model is only
// asked for the cube's bounding box, which the fit uses as a search hint. As a last-resort
// fallback the handles can still be derived from the box (a corner-on cube is a hexagon
// filling its box). The local model is tried first, Gemini is the fallback.
// Anything that does not look like a plausible cube box is rejected.

import {
  ApiError,
  describeLocalNetworkFailure,
  explainGeminiError,
  explainLocalError,
  geminiUrl,
  localBase,
  request,
} from './explain.js';

export const ALIGN_PROMPT =
  "Find the Rubik's cube in this photo. Return its bounding box, normalised to 0-1000 " +
  '(x from the left edge, y from the top edge), as JSON only: {"bbox":{"x1":0,"y1":0,"x2":0,"y2":0}}';

const pick = (o, ...keys) => keys.map((k) => o?.[k]).find((v) => v !== undefined);

// Pulls the JSON out of whatever the model wrapped it in (code fences, chatter).
export function parseBoundingBox(text) {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start < 0 || end <= start) throw new Error('The model did not answer with JSON.');
  let data;
  try {
    data = JSON.parse(text.slice(start, end + 1));
  } catch {
    throw new Error("The model's JSON could not be read.");
  }
  const box = data.bbox ?? data.box ?? data.bounding_box ?? data.box_2d ?? data;
  let x1, y1, x2, y2;
  if (Array.isArray(box) && box.length === 4) [x1, y1, x2, y2] = box;
  else {
    x1 = pick(box, 'x1', 'xmin', 'left', 'x_min');
    y1 = pick(box, 'y1', 'ymin', 'top', 'y_min');
    x2 = pick(box, 'x2', 'xmax', 'right', 'x_max');
    y2 = pick(box, 'y2', 'ymax', 'bottom', 'y_max');
  }
  const v = [x1, y1, x2, y2].map(Number);
  if (v.some((n) => !Number.isFinite(n))) throw new Error('The model did not give a bounding box.');
  return { x1: Math.min(v[0], v[2]), y1: Math.min(v[1], v[3]), x2: Math.max(v[0], v[2]), y2: Math.max(v[1], v[3]) };
}

// Checks the box and returns the 7 handles [centre corner, V0..V5] in 0-1000 image
// coordinates (V0 = top vertex, then clockwise), or throws with the reason.
export function hexagonFromBox(box) {
  const { x1, y1, x2, y2 } = box;
  if ([x1, y1, x2, y2].every((n) => n <= 1)) throw new Error('The coordinates were not on the requested 0-1000 scale.');
  if (x1 < -50 || y1 < -50 || x2 > 1050 || y2 > 1050) throw new Error('The box lies outside the photo.');
  const w = x2 - x1;
  const h = y2 - y1;
  if (w < 120 || h < 120) throw new Error('The box is too small to be the cube.');
  if (w / h < 0.5 || w / h > 1.7) throw new Error('The box does not have the shape of a cube seen corner-on.');
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2;
  const rx = w / 2;
  const ry = h / 2;
  const clamp = (n) => Math.max(0, Math.min(1000, n));
  return [
    [cx, cy],
    [cx, cy - ry],
    [cx + rx, cy - ry / 2],
    [cx + rx, cy + ry / 2],
    [cx, cy + ry],
    [cx - rx, cy + ry / 2],
    [cx - rx, cy - ry / 2],
  ].map(([x, y]) => [clamp(x), clamp(y)]);
}

const median = (xs) => {
  const s = [...xs].sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)];
};

// Snaps the AI's rough box to the cube's real silhouette. The background colour is taken
// from a ring around the (enlarged) search region; pixels that differ from it are the
// cube. `image` is ImageData-like ({data, width, height}). Returns a refined box in
// 0-1000 coordinates, or null when the photo's background is too busy to tell
// (the caller then keeps the AI's box).
export function refineBox(image, box) {
  const { data, width: W, height: H } = image;
  const px = (v, size) => Math.round((v / 1000) * size);
  const bx1 = px(box.x1, W);
  const bx2 = px(box.x2, W);
  const by1 = px(box.y1, H);
  const by2 = px(box.y2, H);
  const clampX = (v) => Math.max(0, Math.min(W - 1, Math.round(v)));
  const clampY = (v) => Math.max(0, Math.min(H - 1, Math.round(v)));
  const mx = (bx2 - bx1) * 0.25;
  const my = (by2 - by1) * 0.25;
  const [rx1, rx2, ry1, ry2] = [clampX(bx1 - mx), clampX(bx2 + mx), clampY(by1 - my), clampY(by2 + my)];
  const rw = rx2 - rx1 + 1;
  const rh = ry2 - ry1 + 1;
  if (rw < 40 || rh < 40) return null;

  const band = Math.max(3, Math.round(Math.min(rw, rh) * 0.06));
  const at = (x, y) => {
    const o = (y * W + x) * 4;
    return [data[o], data[o + 1], data[o + 2]];
  };
  const ring = [];
  for (let y = ry1; y <= ry2; y++) {
    for (let x = rx1; x <= rx2; x++) {
      if (x - rx1 < band || rx2 - x < band || y - ry1 < band || ry2 - y < band) ring.push(at(x, y));
    }
  }
  const bg = [0, 1, 2].map((c) => median(ring.map((p) => p[c])));
  const d = (p) => Math.hypot(p[0] - bg[0], p[1] - bg[1], p[2] - bg[2]);
  const ringDist = ring.map(d).sort((a, b) => a - b);
  // tolerant of gradients/noise in the background, but never below a visible difference
  const threshold = Math.max(40, ringDist[Math.floor(ringDist.length * 0.95)] * 1.6);

  const cols = new Array(rw).fill(0);
  const rows = new Array(rh).fill(0);
  for (let y = 0; y < rh; y++) {
    for (let x = 0; x < rw; x++) {
      if (d(at(rx1 + x, ry1 + y)) > threshold) {
        cols[x]++;
        rows[y]++;
      }
    }
  }
  const extent = (sums) => {
    const cut = Math.max(...sums) * 0.04; // low, so the thin tips of the hexagon count
    const first = sums.findIndex((v) => v >= cut);
    const last = sums.length - 1 - [...sums].reverse().findIndex((v) => v >= cut);
    return first < 0 ? null : [first, last];
  };
  const ex = extent(cols);
  const ey = extent(rows);
  if (!ex || !ey) return null;
  const refined = { x1: ((rx1 + ex[0]) / W) * 1000, x2: ((rx1 + ex[1] + 1) / W) * 1000, y1: ((ry1 + ey[0]) / H) * 1000, y2: ((ry1 + ey[1] + 1) / H) * 1000 };

  // Plausibility: it must stay close to what the AI found and not swallow the whole region.
  const area = (b) => (b.x2 - b.x1) * (b.y2 - b.y1);
  const ratio = area(refined) / area(box);
  const shift = Math.hypot((refined.x1 + refined.x2 - box.x1 - box.x2) / 2, (refined.y1 + refined.y2 - box.y1 - box.y2) / 2);
  const touchesRegion = ex[0] === 0 || ey[0] === 0 || ex[1] === rw - 1 || ey[1] === rh - 1;
  if (ratio < 0.45 || ratio > 2.2 || shift > 0.25 * Math.max(box.x2 - box.x1, box.y2 - box.y1) || touchesRegion) return null;
  return refined;
}

export function hasAI(settings) {
  return targetsFor(settings).length > 0;
}

function targetsFor(settings) {
  const targets = [];
  if (settings.localUrl?.trim() && settings.localModel?.trim()) targets.push('local');
  if (settings.geminiKey?.trim()) targets.push('gemini');
  return targets;
}

async function askLocal(settings, dataUrl, signal) {
  const base = localBase(settings);
  try {
    // Cheap reachability check first, so a stopped server costs 4 s, not a long wait.
    await request(`${base}/models`, { timeoutMs: 4000, signal });
  } catch (e) {
    if (e.kind === 'network') throw new Error(await describeLocalNetworkFailure(base));
    if (e.kind === 'timeout') throw new Error(`${base} did not answer in time.`);
    // other errors (e.g. no /models route): carry on and let the chat call decide
  }
  try {
    const data = await request(`${base}/chat/completions`, {
      method: 'POST',
      signal,
      timeoutMs: 180000,
      body: {
        model: settings.localModel,
        temperature: 0,
        stream: false,
        max_tokens: 4096, // reasoning models spend many tokens thinking before they answer
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: ALIGN_PROMPT },
              { type: 'image_url', image_url: { url: dataUrl } },
            ],
          },
        ],
      },
    });
    const message = data?.choices?.[0]?.message;
    // Reasoning models may leave `content` empty and put everything in `reasoning_content`.
    return { text: message?.content || message?.reasoning_content || '', model: settings.localModel };
  } catch (e) {
    if (e instanceof ApiError) {
      const hint = /image|vision|multimodal|content/i.test(e.message) ? ' (the model may not support images)' : '';
      throw new Error(explainLocalError(e, base) + hint);
    }
    throw e;
  }
}

async function askGemini(settings, dataUrl, signal) {
  const [, mime, b64] = /^data:([^;]+);base64,(.+)$/.exec(dataUrl) ?? [];
  if (!b64) throw new Error('Could not encode the photo.');
  try {
    const data = await request(`${geminiUrl(settings.geminiModel)}:generateContent`, {
      method: 'POST',
      signal,
      timeoutMs: 60000,
      headers: { 'x-goog-api-key': settings.geminiKey.trim() },
      body: {
        contents: [{ role: 'user', parts: [{ text: ALIGN_PROMPT }, { inline_data: { mime_type: mime, data: b64 } }] }],
        generationConfig: { temperature: 0, responseMimeType: 'application/json' },
      },
    });
    return { text: data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join('') ?? '', model: settings.geminiModel };
  } catch (e) {
    if (e instanceof ApiError) throw new Error(explainGeminiError(e, settings.geminiModel));
    throw e;
  }
}

// Tries the local model first, then Gemini. Resolves to
// { handles: 7 points in 0-1000 image coordinates, source: 'local'|'gemini', model, box, notes: [] }.
export async function alignWithAI(settings, dataUrl, signal) {
  const targets = targetsFor(settings);
  if (!targets.length) {
    throw new Error('No AI model is set up. Add a local model URL or a Gemini key in Settings.');
  }
  const notes = [];
  for (const target of targets) {
    try {
      const { text, model } = await (target === 'local' ? askLocal(settings, dataUrl, signal) : askGemini(settings, dataUrl, signal));
      const box = parseBoundingBox(text);
      return { handles: hexagonFromBox(box), source: target, model, box, notes };
    } catch (e) {
      if (signal?.aborted || e.kind === 'abort') throw e;
      notes.push(`${target === 'local' ? 'Local model' : 'Gemini'}: ${e.message}`);
    }
  }
  throw new Error(notes.join(' · '));
}
