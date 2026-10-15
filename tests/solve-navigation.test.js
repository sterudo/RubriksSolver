import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { solvedState } from '../src/core/cube.js';

let state;
beforeEach(async () => {
  vi.resetModules();
  vi.stubGlobal('localStorage', { getItem: () => null });
  state = await import('../src/store.js');
});
afterEach(() => vi.unstubAllGlobals());

it('finishes painting and computes a solution when entering Solve from any other tab', async () => {
  for (const mode of ['setup', 'learn', 'practice', 'settings', 'about']) {
    await state.loadPosition(3, solvedState(3));
    state.store.mode = mode;
    state.store.editing = true;
    await state.selectMode('solve');
    expect(state.store.editing).toBe(false);
    expect(state.store.mode).toBe('solve');
    expect(state.store.solution?.ok).toBe(true);
    expect(state.store.playing).toBe(false);
    expect(state.store.pointer).toBe(0);
  }
});

it('leaves invalid positions unsolved and exposes validation errors', async () => {
  state.store.editing = true;
  state.paint(0, (state.cubeState.value[0] + 1) % 6);
  await state.selectMode('solve');
  expect(state.store.editing).toBe(false);
  expect(state.store.mode).toBe('solve');
  expect(state.validity.value.ok).toBe(false);
  expect(state.validity.value.errors.length).toBeGreaterThan(0);
  expect(state.store.solution).toBeNull();
  expect(state.store.solving).toBe(false);
});

it('preserves solution progress when the active Solve tab is clicked again', async () => {
  await state.turn('R', { animate: false });
  await state.selectMode('solve');
  await state.stepForward();
  const solution = state.store.solution;
  const pointer = state.store.pointer;
  await state.selectMode('solve');
  expect(state.store.solution).toBe(solution);
  expect(state.store.pointer).toBe(pointer);
});

it('waits for queued turns before solving and does not start if navigation changes', async () => {
  state.turn('R', { animate: false });
  await state.selectMode('solve');
  expect(state.store.solution?.ok).toBe(true);
  expect(state.store.solution.moves.length).toBeGreaterThan(0);
  await state.selectMode('setup');
  await state.reset();
  const pending = state.selectMode('solve');
  await state.selectMode('about');
  await pending;
  expect(state.store.solution).toBeNull();
});

it('does not compute during explosion or change painting when selecting other tabs', async () => {
  state.store.editing = true;
  await state.selectMode('learn');
  expect(state.store.editing).toBe(true);
  state.store.exploding = true;
  await state.selectMode('solve');
  expect(state.store.editing).toBe(false);
  expect(state.store.solution).toBeNull();
});
