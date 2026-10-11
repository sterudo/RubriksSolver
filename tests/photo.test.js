import { describe, expect, it } from 'vitest';
import { applyMoves, getSpec, solvedState } from '../src/core/cube.js';
import {
  applyWhitePoint,
  classify,
  defaultHandles,
  findWhitePoint,
  rgbToHsv,
  rgbToLab,
  samplePoints,
  stateFromSamples,
} from '../src/core/photo.js';

// Two photos lit differently: photo 1 warm, photo 2 cool and darker.
const PALETTE = [[255, 213, 0], [255, 88, 0], [0, 155, 72], [255, 255, 255], [196, 30, 58], [0, 81, 186]];
const CASTS = [[1.0, 0.88, 0.62], [0.7, 0.82, 1.0]];
const EXPOSURE = [1, 0.75];

function litSamples(n, truth) {
  const h = defaultHandles(600, 600);
  return [0, 1].flatMap((photo) =>
    samplePoints(photo, h, n).map((pt) => ({
      slot: pt.slot,
      photo,
      rgb: PALETTE[truth[pt.slot]].map((c, ch) => Math.min(255, c * CASTS[photo][ch] * EXPOSURE[photo])),
    })),
  );
}

describe('red / orange / yellow cutoffs', () => {
  const scrambles = { 2: ['R', "U'", 'F2', 'R', 'U'], 3: ['R', 'U', "F'", 'D2', 'L', 'B', "U'"] };
  const truthFor = (n) => applyMoves(solvedState(n), n, scrambles[n]);
  const samplesFor = (n, truth, shade = () => 1) =>
    [0, 1].flatMap((photo) =>
      samplePoints(photo, defaultHandles(600, 600), n).map((pt) => ({
        slot: pt.slot,
        photo,
        rgb: PALETTE[truth[pt.slot]].map((c) => c * shade(truth[pt.slot])),
      })),
    );
  const count = (state, face, n) => getSpec(n).stickers.filter((s, i) => !isCentre(n, i) && state[i] === face).length;
  const isCentre = (n, slot) => n === 3 && getSpec(n).cubies[getSpec(n).stickers[slot].cubie].kind === 'center';

  it('measures hue in degrees with red slightly negative', () => {
    expect(rgbToHsv([255, 0, 0]).h).toBe(0);
    expect(rgbToHsv([255, 255, 0]).h).toBe(60);
    expect(rgbToHsv([196, 30, 58]).h).toBeLessThan(0);
  });

  it('picks the cutoffs between the red, orange and yellow centres by itself', () => {
    const res = stateFromSamples(3, samplesFor(3, truthFor(3)));
    expect(res.hue.auto[0]).toBeGreaterThan(0);
    expect(res.hue.auto[0]).toBeLessThan(res.hue.anchors[1]);
    expect(res.hue.auto[1]).toBeGreaterThan(res.hue.anchors[1]);
    expect(res.hue.auto[1]).toBeLessThan(res.hue.anchors[2]);
    expect(Array.from(res.state)).toEqual(Array.from(truthFor(3)));
  });

  it('moving a cutoff moves stickers between colours', () => {
    const n = 3;
    const truth = truthFor(n);
    const auto = stateFromSamples(n, samplesFor(n, truth));
    const orangeBefore = count(auto.state, 1, n);
    expect(orangeBefore).toBeGreaterThan(0);
    // Orange is at ~21°; a red|orange cutoff of 40° pushes every orange sticker into red.
    const pushed = stateFromSamples(n, samplesFor(n, truth), { cutoffs: [40, auto.hue.auto[1]] });
    expect(count(pushed.state, 1, n)).toBe(0);
    expect(count(pushed.state, 4, n)).toBe(count(auto.state, 4, n) + orangeBefore);
  });

  it('still separates orange from red and yellow when stickers are in shadow', () => {
    for (const n of [2, 3]) {
      const truth = truthFor(n);
      const shade = (face) => ({ 1: 0.45, 0: 0.6, 4: 0.8 })[face] ?? 1;
      const res = stateFromSamples(n, samplesFor(n, truth, shade));
      expect(Array.from(res.state)).toEqual(Array.from(truth));
    }
  });

  it('splits the warm colours of a 2x2 by hue as well', () => {
    const n = 2;
    const truth = truthFor(n);
    const auto = stateFromSamples(n, samplesFor(n, truth));
    expect(auto.hue).not.toBeNull();
    expect(Array.from(auto.state)).toEqual(Array.from(truth));
    const pushed = stateFromSamples(n, samplesFor(n, truth), { cutoffs: [40, auto.hue.auto[1]] });
    expect(pushed.hue.cutoffs[0]).toBe(40);
    expect(Array.from(pushed.state)).not.toEqual(Array.from(truth));
  });
});

describe('white balance', () => {
  it('finds the white point in a tinted photo and ignores coloured tiles', () => {
    const rgbs = PALETTE.map((c) => c.map((v, ch) => v * CASTS[0][ch]));
    const white = findWhitePoint(rgbs);
    expect(white).toEqual([255, 255 * 0.88, 255 * 0.62]);
    const neutral = applyWhitePoint(white, white);
    neutral.forEach((v) => expect(v).toBeGreaterThan(250));
    expect(findWhitePoint([[255, 213, 0], [255, 88, 0], [0, 81, 186]])).toBeNull();
  });

  it.each([2, 3])('reads differently lit photos correctly with white balance (%i x %i)', (n) => {
    const truth = applyMoves(solvedState(n), n, n === 2 ? ['R', "U'", 'F2', 'R', 'U'] : ['R', 'U', "F'", 'D2', 'L', 'B', "U'"]);
    const res = stateFromSamples(n, litSamples(n, truth), { whiteBalance: true });
    expect(res.whiteBalance).toEqual(['applied', 'applied']);
    expect(Array.from(res.state)).toEqual(Array.from(truth));
  });

  it('reports a photo without any white tile and leaves it unbalanced', () => {
    const n = 3;
    const truth = solvedState(n);
    const samples = litSamples(n, truth).filter((s) => s.photo === 1 || truth[s.slot] !== 3);
    const res = stateFromSamples(n, samples, { whiteBalance: true });
    expect(res.whiteBalance[0]).toBe('no-white');
    expect(res.whiteBalance[1]).toBe('applied');
  });

  it('is off by default', () => {
    const n = 3;
    const res = stateFromSamples(n, litSamples(n, solvedState(n)));
    expect(res.whiteBalance).toEqual([null, null]);
  });
});

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
