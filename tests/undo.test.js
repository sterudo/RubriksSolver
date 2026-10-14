import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { applyMoves, solvedState } from '../src/core/cube.js';

let store;
beforeEach(async () => {
  vi.resetModules();
  vi.stubGlobal('localStorage', { getItem: () => null });
  store = await import('../src/store.js');
});
afterEach(() => vi.unstubAllGlobals());

it('undoes manual moves in reverse order, including simultaneous slice-equivalent moves', async () => {
  await store.turn('R', { animate: false });
  await store.turn("U D'", { animate: false });
  await store.undo();
  expect(store.cubeState.value).toEqual(applyMoves(solvedState(3), 3, ['R']));
  expect(store.store.moveCount).toBe(1);
  await store.undo();
  expect(store.cubeState.value).toEqual(solvedState(3));
  expect(store.store.moveCount).toBe(0);
  await store.undo();
  expect(store.cubeState.value).toEqual(solvedState(3));
});

it('clears history after reset, scramble, imported positions and painting', async () => {
  for (const change of [
    () => store.reset(),
    () => store.scramble(),
    () => store.loadPosition(2, solvedState(2)),
    () => store.paint(0, 1),
  ]) {
    await store.loadPosition(3, solvedState(3));
    await store.turn('R', { animate: false });
    await change();
    const snapshot = Uint8Array.from(store.cubeState.value);
    await store.undo();
    expect(store.cubeState.value).toEqual(snapshot);
  }
});

it('uses solution rewind instead of manual undo while following a solution', async () => {
  await store.turn('R', { animate: false });
  store.store.solution = { stages: [{ steps: [{ moves: ["R'"] }] }], moves: ["R'"] };
  await store.stepForward();
  expect(store.store.pointer).toBe(1);
  expect(store.cubeState.value).toEqual(solvedState(3));
  await store.undo();
  expect(store.store.pointer).toBe(0);
  expect(store.cubeState.value).toEqual(applyMoves(solvedState(3), 3, ['R']));
  expect(store.store.solution).not.toBeNull();
});

it('does not accept undo during playback, animation, solving or explosion', async () => {
  await store.turn('R', { animate: false });
  for (const flag of ['playing', 'busy', 'solving', 'exploding']) {
    store.store[flag] = true;
    await store.undo();
    expect(store.cubeState.value).toEqual(applyMoves(solvedState(3), 3, ['R']));
    store.store[flag] = false;
  }
});
