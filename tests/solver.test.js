import { describe, expect, it } from 'vitest';
import { applyMoves, isSolved, randomScramble, solvedState } from '../src/core/cube.js';
import { progress, solve } from '../src/core/solver.js';

function rng(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

describe('solver', () => {
  it('returns an empty solution for a solved cube', () => {
    for (const n of [2, 3]) {
      const res = solve(solvedState(n), n);
      expect(res.ok).toBe(true);
      expect(res.moves).toEqual([]);
    }
  });

  it('solves random 2x2 scrambles stage by stage', () => {
    const r = rng(11);
    for (let i = 0; i < 25; i++) {
      const state = applyMoves(solvedState(2), 2, randomScramble(2, 14, r));
      const res = solve(state, 2);
      expect(res.ok, res.error).toBe(true);
      expect(res.stages.map((s) => s.id)).toEqual(['layer', 'orient', 'permute']);
      expect(isSolved(applyMoves(state, 2, res.moves), 2)).toBe(true);
    }
  });

  it('solves random 3x3 scrambles stage by stage', () => {
    const r = rng(5);
    let worst = 0;
    for (let i = 0; i < 12; i++) {
      const state = applyMoves(solvedState(3), 3, randomScramble(3, 25, r));
      const t0 = performance.now();
      const res = solve(state, 3);
      worst = Math.max(worst, performance.now() - t0);
      expect(res.ok, res.error).toBe(true);
      expect(res.stages.map((s) => s.id)).toEqual(['cross', 'f2l', 'ollCross', 'ollFace', 'pllCorners', 'pllEdges']);
      const end = applyMoves(state, 3, res.moves);
      expect(isSolved(end, 3)).toBe(true);
      // Progress checklist agrees with the stage boundaries.
      let cur = state;
      for (const stage of res.stages) {
        cur = applyMoves(cur, 3, stage.moves);
        const done = progress(cur, 3).find((p) => p.id === stage.id);
        expect(done.done, stage.id).toBe(true);
      }
    }
    console.log(`slowest 3x3 solve: ${Math.round(worst)} ms`);
  }, 120000);

  it('rejects unsolvable positions', () => {
    const state = applyMoves(solvedState(3), 3, ['R']);
    state[0] = state[1] = 3; // break colour counts
    expect(solve(state, 3).ok).toBe(false);
  });
});
