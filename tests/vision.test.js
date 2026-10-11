import { afterEach, describe, expect, it, vi } from 'vitest';
import { DEFAULT_SETTINGS } from '../src/core/explain.js';
import { alignWithAI, hexagonFromBox, parseBoundingBox, refineBox } from '../src/core/vision.js';

// Synthetic photo: gradient background, a dark "cube" rectangle with coloured tiles.
function fakePhoto({ w = 400, h = 400, cube = { x1: 120, y1: 90, x2: 300, y2: 330 }, noise = 0 } = {}) {
  const data = new Uint8ClampedArray(w * h * 4);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const o = (y * w + x) * 4;
      const t = (x + y) / (w + h);
      const inCube = x >= cube.x1 && x < cube.x2 && y >= cube.y1 && y < cube.y2;
      const j = noise ? ((x * 31 + y * 17) % (2 * noise + 1)) - noise : 0;
      const colour = inCube ? ((x + y) % 40 < 25 ? [230, 60, 40] : [25, 25, 30]) : [215 - 45 * t, 210 - 45 * t, 195 - 45 * t];
      data[o] = colour[0] + j;
      data[o + 1] = colour[1] + j;
      data[o + 2] = colour[2] + j;
      data[o + 3] = 255;
    }
  }
  return { data, width: w, height: h };
}
const to1000 = (b, w = 400, h = 400) => ({ x1: (b.x1 / w) * 1000, y1: (b.y1 / h) * 1000, x2: (b.x2 / w) * 1000, y2: (b.y2 / h) * 1000 });

describe('refineBox', () => {
  const truth = { x1: 120, y1: 90, x2: 300, y2: 330 };

  it.each([
    ['too big', { x1: 95, y1: 65, x2: 330, y2: 360 }],
    ['too small', { x1: 140, y1: 120, x2: 280, y2: 300 }],
    ['shifted', { x1: 135, y1: 105, x2: 315, y2: 345 }],
  ])('snaps a rough AI box (%s) to the real silhouette', (_, rough) => {
    const refined = refineBox(fakePhoto({ noise: 4 }), to1000(rough));
    expect(refined).not.toBeNull();
    const t = to1000(truth);
    for (const k of ['x1', 'y1', 'x2', 'y2']) expect(Math.abs(refined[k] - t[k])).toBeLessThan(12); // < 1.2 % of the photo
  });

  it('keeps the AI box (returns null) when there is nothing to tell apart', () => {
    const blank = fakePhoto({ cube: { x1: 0, y1: 0, x2: 0, y2: 0 } });
    expect(refineBox(blank, to1000({ x1: 120, y1: 90, x2: 300, y2: 330 }))).toBeNull();
  });

  it('gives up when the result would be implausible', () => {
    // the "cube" fills far more than the AI claimed
    const big = fakePhoto({ cube: { x1: 20, y1: 20, x2: 380, y2: 380 } });
    expect(refineBox(big, to1000({ x1: 150, y1: 150, x2: 250, y2: 250 }))).toBeNull();
  });
});

const bboxJson = (x1, y1, x2, y2) => JSON.stringify({ bbox: { x1, y1, x2, y2 } });

describe('parseBoundingBox', () => {
  it('reads JSON wrapped in code fences and chatter', () => {
    const text = 'Here you go:\n```json\n' + bboxJson(195, 163, 794, 837) + '\n```';
    expect(parseBoundingBox(text)).toEqual({ x1: 195, y1: 163, x2: 794, y2: 837 });
  });

  it('accepts other common key names and plain arrays', () => {
    expect(parseBoundingBox('{"bbox":{"xmin":1,"ymin":2,"xmax":30,"ymax":40}}')).toEqual({ x1: 1, y1: 2, x2: 30, y2: 40 });
    expect(parseBoundingBox('{"box":[10,20,300,400]}')).toEqual({ x1: 10, y1: 20, x2: 300, y2: 400 });
    expect(parseBoundingBox('{"x1":10,"y1":20,"x2":300,"y2":400}').x2).toBe(300);
  });

  it('puts swapped corners in order', () => {
    expect(parseBoundingBox(bboxJson(800, 700, 200, 100))).toEqual({ x1: 200, y1: 100, x2: 800, y2: 700 });
  });

  it('rejects text and incomplete answers', () => {
    expect(() => parseBoundingBox('no idea')).toThrow(/JSON/);
    expect(() => parseBoundingBox('{"bbox":{"x1":1}}')).toThrow(/bounding box/);
    expect(() => parseBoundingBox('{ nope')).toThrow(/JSON/);
  });
});

describe('hexagonFromBox', () => {
  it('builds centre + vertices: top vertex first, then clockwise', () => {
    const h = hexagonFromBox({ x1: 200, y1: 150, x2: 800, y2: 850 });
    expect(h).toEqual([
      [500, 500],
      [500, 150],
      [800, 325],
      [800, 675],
      [500, 850],
      [200, 675],
      [200, 325],
    ]);
  });

  it('rejects boxes that cannot be the cube', () => {
    expect(() => hexagonFromBox({ x1: 0.2, y1: 0.2, x2: 0.8, y2: 0.8 })).toThrow(/0-1000/);
    expect(() => hexagonFromBox({ x1: 100, y1: 100, x2: 150, y2: 160 })).toThrow(/too small/);
  });

  it('rejects very wide, very tall or off-photo boxes', () => {
    expect(() => hexagonFromBox({ x1: 0, y1: 400, x2: 1000, y2: 560 })).toThrow(/too small|shape/);
    expect(() => hexagonFromBox({ x1: 0, y1: 100, x2: 1000, y2: 300 })).toThrow(/shape/);
    expect(() => hexagonFromBox({ x1: 400, y1: 0, x2: 520, y2: 900 })).toThrow(/shape/);
    expect(() => hexagonFromBox({ x1: 600, y1: 100, x2: 1400, y2: 900 })).toThrow(/outside/);
  });
});

describe('alignWithAI', () => {
  const settings = { ...DEFAULT_SETTINGS, localUrl: 'http://localhost:1234/v1', localModel: 'gemma', geminiKey: 'KEY', geminiModel: 'gemini-2.5-flash' };
  const dataUrl = 'data:image/jpeg;base64,QUJD';
  const good = bboxJson(200, 150, 800, 850);
  const ok = (body) => ({ ok: true, status: 200, statusText: 'OK', text: async () => JSON.stringify(body) });
  const localAnswer = (text) => ok({ choices: [{ message: { content: text } }] });
  const geminiAnswer = (text) => ok({ candidates: [{ content: { parts: [{ text }] } }] });

  afterEach(() => vi.unstubAllGlobals());

  it('uses the local model first and sends the image to it', async () => {
    const fetchMock = vi.fn().mockResolvedValueOnce(ok({ data: [{ id: 'gemma' }] })).mockResolvedValueOnce(localAnswer(good));
    vi.stubGlobal('fetch', fetchMock);
    const r = await alignWithAI(settings, dataUrl);
    expect(r).toMatchObject({ source: 'local', model: 'gemma', box: { x1: 200, y2: 850 } });
    expect(r.handles).toHaveLength(7);
    const body = JSON.parse(fetchMock.mock.calls[1][1].body);
    expect(body.messages[0].content[1]).toEqual({ type: 'image_url', image_url: { url: dataUrl } });
    expect(fetchMock).toHaveBeenCalledTimes(2); // Gemini was never contacted
  });

  it('reads the answer from reasoning_content when a reasoning model leaves content empty', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(ok({ data: [] }))
      .mockResolvedValueOnce(ok({ choices: [{ message: { content: '', reasoning_content: `thinking… ${good}` } }] }));
    vi.stubGlobal('fetch', fetchMock);
    expect((await alignWithAI(settings, dataUrl)).source).toBe('local');
  });

  it('falls back to Gemini when the local server is not reachable', async () => {
    const fetchMock = vi
      .fn()
      .mockRejectedValueOnce(new TypeError('Failed to fetch')) // local /models
      .mockRejectedValueOnce(new TypeError('Failed to fetch')) // no-cors probe
      .mockResolvedValueOnce(geminiAnswer(good));
    vi.stubGlobal('fetch', fetchMock);
    const r = await alignWithAI(settings, dataUrl);
    expect(r.source).toBe('gemini');
    expect(r.notes[0]).toMatch(/^Local model: Cannot reach/);
    const [url, init] = fetchMock.mock.calls[2];
    expect(url).toContain('gemini-2.5-flash:generateContent');
    expect(JSON.parse(init.body).contents[0].parts[1].inline_data).toEqual({ mime_type: 'image/jpeg', data: 'QUJD' });
    expect(init.headers['x-goog-api-key']).toBe('KEY');
  });

  it('falls back to Gemini when the local answer is nonsense', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(ok({ data: [] }))
      .mockResolvedValueOnce(localAnswer('I see a cube.'))
      .mockResolvedValueOnce(geminiAnswer(good));
    vi.stubGlobal('fetch', fetchMock);
    expect((await alignWithAI(settings, dataUrl)).source).toBe('gemini');
  });

  it('reports every failure when no model can align the photo', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(ok({ data: [] }))
      .mockResolvedValueOnce(localAnswer('nope'))
      .mockResolvedValueOnce(geminiAnswer(bboxJson(10, 10, 20, 20)));
    vi.stubGlobal('fetch', fetchMock);
    await expect(alignWithAI(settings, dataUrl)).rejects.toThrow(/Local model: .*Gemini: .*too small/);
  });

  it('skips the local model when it is not configured, and needs at least one model', async () => {
    const fetchMock = vi.fn().mockResolvedValueOnce(geminiAnswer(good));
    vi.stubGlobal('fetch', fetchMock);
    expect((await alignWithAI({ ...settings, localUrl: '' }, dataUrl)).source).toBe('gemini');
    await expect(alignWithAI({ ...settings, localUrl: '', geminiKey: '' }, dataUrl)).rejects.toThrow(/No AI model/);
  });
});
