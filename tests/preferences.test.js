import { afterEach, expect, it, vi } from 'vitest';

afterEach(() => vi.unstubAllGlobals());
async function load(entries = {}) {
  vi.resetModules();
  const data = new Map(Object.entries(entries));
  const storage = {
    getItem: (key) => data.get(key) ?? null,
    setItem: vi.fn((key, value) => data.set(key, value)),
  };
  vi.stubGlobal('localStorage', storage);
  const { store } = await import('../src/store.js');
  return { store, storage };
}

it('loads and persists mouse swapping, playback speed and camera rotation speed', async () => {
  const { store, storage } = await load({
    'rubiks-solver.swapMouseButtons': '1', 'rubiks-solver.speed': '2.5', 'rubiks-solver.dramaSpeed': '0.8',
  });
  expect(store.swapMouseButtons).toBe(true);
  expect(store.speed).toBe(2.5);
  expect(store.dramaSpeed).toBe(0.8);
  store.swapMouseButtons = false;
  store.speed = 3;
  store.dramaSpeed = 0.6;
  expect(storage.getItem('rubiks-solver.swapMouseButtons')).toBe('0');
  expect(storage.getItem('rubiks-solver.speed')).toBe('3');
  expect(storage.getItem('rubiks-solver.dramaSpeed')).toBe('0.6');
});

it('does not persist temporary fast-forward speeds and restores invalid saved speeds to defaults', async () => {
  const { store, storage } = await load({ 'rubiks-solver.speed': '10', 'rubiks-solver.dramaSpeed': 'NaN' });
  expect(store.speed).toBe(1);
  expect(store.dramaSpeed).toBe(0.32);
  store.speed = 2;
  store.speed = 10;
  expect(storage.getItem('rubiks-solver.speed')).toBe('2');
});

it('surfaces preference storage failures', async () => {
  const { store, storage } = await load();
  storage.setItem.mockImplementation(() => { throw new Error('Full'); });
  store.speed = 2;
  expect(store.settingsError).toContain('Could not save');
});
