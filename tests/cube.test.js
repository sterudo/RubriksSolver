import { describe, expect, it } from 'vitest';
import {
  analyzeState,
  applyMoves,
  getSpec,
  invertAlg,
  isSolved,
  movesFor,
  parseAlg,
  randomScramble,
  solvedState,
} from '../src/core/cube.js';

function rng(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

describe('cube model', () => {
  it('has the right sticker counts', () => {
    expect(getSpec(3).slotCount).toBe(54);
    expect(getSpec(2).slotCount).toBe(24);
  });

  it('every move has order matching its type and inverses cancel', () => {
    for (const n of [2, 3]) {
      const solved = solvedState(n);
      for (const mv of movesFor(n)) {
        const [f] = mv;
        expect(isSolved(applyMoves(solved, n, [f, f, f, f]), n)).toBe(true);
        expect(applyMoves(applyMoves(solved, n, [mv]), n, invertAlg([mv]))).toEqual(solved);
      }
    }
  });

  it('follows standard notation (R moves front column to the top)', () => {
    const spec = getSpec(3);
    const s = applyMoves(solvedState(3), 3, ['R']);
    const frontRightTop = spec.slotAt([2, 2, 2], [0, 0, 1]);
    const topRight = spec.slotAt([2, 2, 2], [0, 1, 0]);
    // After R the stickers on the U face's right column are those that were on F.
    expect(s[topRight]).toBe(2);
    expect(s[frontRightTop]).toBe(3); // D came up to F
  });

  it('known identities hold', () => {
    const sexy = parseAlg("R U R' U'");
    const six = Array.from({ length: 6 }, () => sexy).flat();
    expect(isSolved(applyMoves(solvedState(3), 3, six), 3)).toBe(true);
    const sune = parseAlg("R U R' U R U2 R'");
    expect(isSolved(applyMoves(solvedState(3), 3, [...sune, ...invertAlg(sune)]), 3)).toBe(true);
  });

  it('scrambled cubes are valid, tampering is detected', () => {
    const r = rng(7);
    for (let i = 0; i < 40; i++) {
      for (const n of [2, 3]) {
        const s = applyMoves(solvedState(n), n, randomScramble(n, 25, r));
        expect(analyzeState(s, n).ok).toBe(true);
      }
    }
    const spec = getSpec(3);
    const s = applyMoves(solvedState(3), 3, randomScramble(3, 25, r));
    const corner = spec.cubies.find((c) => c.kind === 'corner');
    const twisted = Uint8Array.from(s);
    const [a, b, c] = corner.slots.map((x) => s[x]);
    [twisted[corner.slots[0]], twisted[corner.slots[1]], twisted[corner.slots[2]]] = [b, c, a];
    expect(analyzeState(twisted, 3).ok).toBe(false);

    const swappedEdges = Uint8Array.from(solvedState(3));
    const edges = spec.cubies.filter((x) => x.kind === 'edge');
    for (let k = 0; k < 2; k++) {
      swappedEdges[edges[0].slots[k]] = solvedState(3)[edges[1].slots[k]];
      swappedEdges[edges[1].slots[k]] = solvedState(3)[edges[0].slots[k]];
    }
    expect(analyzeState(swappedEdges, 3).ok).toBe(false);
  });

  it('2x2 states stay valid after relabelling by the fixed corner', () => {
    const s = applyMoves(solvedState(2), 2, parseAlg("D L' B2 R U"));
    const res = analyzeState(s, 2);
    expect(res.ok).toBe(true);
  });
});

describe('textbook algorithms behave as the solver assumes', () => {
  const spec = getSpec(3);
  const topLayerSlots = new Set(
    spec.cubies.filter((c) => c.pos[1] === 2).flatMap((c) => c.slots),
  );
  const changed = (alg) => {
    const s = applyMoves(solvedState(3), 3, parseAlg(alg));
    return spec.stickers.map((_, i) => i).filter((i) => s[i] !== solvedState(3)[i]);
  };

  it.each([
    ["F R U R' U' F'"],
    ["R U R' U R U2 R'"],
    ["R' F R' B2 R F' R' B2 R2"],
    ["R U' R U R U R U' R' U' R2"],
  ])('%s only touches the top layer stickers or side stickers of it', (alg) => {
    // Nothing on or below the middle layer may change, except top-layer side stickers.
    for (const slot of changed(alg)) {
      const st = spec.stickers[slot];
      expect(st.pos[1] === 2).toBe(true);
      expect(topLayerSlots.has(slot)).toBe(true);
    }
  });

  it('Aa-perm only moves corners, Ua-perm only moves edges', () => {
    const cornerSlots = new Set(spec.cubies.filter((c) => c.kind === 'corner').flatMap((c) => c.slots));
    const edgeSlots = new Set(spec.cubies.filter((c) => c.kind === 'edge').flatMap((c) => c.slots));
    changed("R' F R' B2 R F' R' B2 R2").forEach((s) => expect(cornerSlots.has(s)).toBe(true));
    changed("R U' R U R U R U' R' U' R2").forEach((s) => expect(edgeSlots.has(s)).toBe(true));
  });
});
