import { describe, expect, it } from 'vitest';
import { applyMoves, getSpec, solvedState } from '../src/core/cube.js';
import { classify, defaultHandles, rgbToLab, samplePoints } from '../src/core/photo.js';

describe('photo import geometry', () => {
  it.each([2, 3])('the two photos cover every sticker once (%i x %i)', (n) => {
    const spec = getSpec(n);
    const h = defaultHandles(600, 600);
    const slots = [...samplePoints(0, h, n), ...samplePoints(1, h, n)].map((p) => p.slot);
    expect(slots.every((s) => s !== undefined)).toBe(true);
    expect(new Set(slots).size).toBe(spec.slotCount);
  });

  it.each([2, 3])('stickers that touch in the picture touch on the cube (%i x %i)', (n) => {
    const spec = getSpec(n);
    const h = defaultHandles(600, 600);
    const r = 600 * 0.38;
    const cell = r / n;
    for (const photo of [0, 1]) {
      const pts = samplePoints(photo, h, n);
      for (const a of pts) {
        for (const b of pts) {
          if (a.slot === b.slot) continue;
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > cell * 1.05) continue;
          const sa = spec.stickers[a.slot];
          const sb = spec.stickers[b.slot];
          if (sa.face === sb.face) continue;
          // different faces that are near in the image must share a piece
          expect(sa.cubie === sb.cubie || sameEdgeNeighbours(sa, sb)).toBe(true);
        }
      }
    }
  });

  it('classifies synthetic colours from a scrambled cube', () => {
    for (const n of [2, 3]) {
      const spec = getSpec(n);
      const truth = applyMoves(solvedState(n), n, n === 2 ? ["R", "U'", 'F2', 'R'] : ['R', 'U', "F'", 'D2', 'L']);
      const palette = [[255, 213, 0], [255, 88, 0], [0, 155, 72], [255, 255, 255], [196, 30, 58], [0, 81, 186]];
      const colors = spec.stickers.map((_, slot) => {
        const jitter = ((slot * 37) % 11) - 5;
        const rgb = palette[truth[slot]].map((c) => Math.max(0, Math.min(255, c + jitter)));
        return { slot, lab: rgbToLab(rgb) };
      });
      const { state } = classify(n, colors);
      expect(Array.from(state)).toEqual(Array.from(truth));
    }
  });
});

// Two stickers on the same face-boundary are neighbours if their cubies are adjacent along the shared edge.
function sameEdgeNeighbours(a, b) {
  const d = a.pos.map((v, i) => Math.abs(v - b.pos[i]));
  return d.reduce((s, v) => s + v, 0) <= 2;
}
