import { afterEach, describe, expect, it, vi } from 'vitest';
import { DEFAULT_SETTINGS, testGemini, testLocal } from '../src/core/explain.js';

const json = (status, body) => ({
  ok: status >= 200 && status < 300,
  status,
  statusText: String(status),
  text: async () => JSON.stringify(body),
});

const gemini = { ...DEFAULT_SETTINGS, provider: 'gemini', geminiKey: 'KEY', geminiModel: 'gemini-2.5-flash' };
const local = { ...DEFAULT_SETTINGS, provider: 'local', localUrl: 'http://localhost:1234/v1/', localModel: 'gemma' };
const answer = (text) => json(200, { candidates: [{ content: { parts: [{ text }] } }] });
const chat = (text) => json(200, { choices: [{ message: { content: text } }] });

afterEach(() => vi.unstubAllGlobals());

describe('testGemini', () => {
  it('needs a key', async () => {
    const r = await testGemini({ ...gemini, geminiKey: ' ' });
    expect(r.ok).toBe(false);
  });

  it('succeeds and returns the model reply, calling the right URL with the key header', async () => {
    const fetchMock = vi.fn().mockResolvedValueOnce(json(200, { name: 'models/x' })).mockResolvedValueOnce(answer('OK'));
    vi.stubGlobal('fetch', fetchMock);
    const r = await testGemini(gemini);
    expect(r).toMatchObject({ ok: true, reply: 'OK' });
    expect(fetchMock.mock.calls[1][0]).toBe('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent');
    expect(fetchMock.mock.calls[1][1].headers['x-goog-api-key']).toBe('KEY');
  });

  it('reports an invalid key', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(json(400, { error: { message: 'API key not valid. Please pass a valid API key.' } })));
    const r = await testGemini(gemini);
    expect(r.ok).toBe(false);
    expect(r.message).toMatch(/API key is not valid/);
  });

  it('reports an unknown model', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(json(404, { error: { message: 'models/x is not found' } })));
    const r = await testGemini(gemini);
    expect(r.message).toMatch(/Model "gemini-2.5-flash" was not found/);
  });

  it('reports network failure', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('Failed to fetch')));
    const r = await testGemini(gemini);
    expect(r.ok).toBe(false);
    expect(r.message).toMatch(/Cannot reach/);
  });
});

describe('testLocal', () => {
  it('reports an unreachable server', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('Failed to fetch')));
    const r = await testLocal(local);
    expect(r.ok).toBe(false);
    expect(r.message).toMatch(/Cannot reach http:\/\/localhost:1234\/v1 – the server is not running/);
  });

  it('tells a running server that blocks the browser (CORS) apart from a dead one', async () => {
    // Normal request is blocked; the opaque no-cors probe still gets through.
    const fetchMock = vi.fn().mockRejectedValueOnce(new TypeError('Failed to fetch')).mockResolvedValueOnce({ type: 'opaque' });
    vi.stubGlobal('fetch', fetchMock);
    const r = await testLocal(local);
    expect(r.ok).toBe(false);
    expect(r.message).toMatch(/is running, but the browser blocked its reply/);
    expect(r.message).toMatch(/Enable CORS/);
    expect(fetchMock.mock.calls[1][1].mode).toBe('no-cors');
  });

  it('reports a model name the server does not have, listing what it has', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(json(200, { data: [{ id: 'llama' }, { id: 'phi' }] })));
    const r = await testLocal(local);
    expect(r.ok).toBe(false);
    expect(r.message).toMatch(/no model named "gemma"/);
    expect(r.message).toMatch(/llama, phi/);
  });

  it('succeeds and returns the reply', async () => {
    const fetchMock = vi.fn().mockResolvedValueOnce(json(200, { data: [{ id: 'gemma' }] })).mockResolvedValueOnce(chat('OK'));
    vi.stubGlobal('fetch', fetchMock);
    const r = await testLocal(local);
    expect(r).toMatchObject({ ok: true, reply: 'OK' });
    expect(fetchMock.mock.calls[1][0]).toBe('http://localhost:1234/v1/chat/completions');
  });

  it('falls back to the chat call when /models does not exist and reports its error', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValueOnce(json(404, { error: 'nope' })).mockResolvedValueOnce(json(404, { error: "model 'gemma' not found" })),
    );
    const r = await testLocal(local);
    expect(r.ok).toBe(false);
    expect(r.message).toMatch(/404/);
    expect(r.message).toMatch(/model 'gemma' not found/);
  });
});
