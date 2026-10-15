// Reads a cube position from two photos: one looking at a corner (top-front-right) and
// one looking at the opposite corner (bottom-back-left), both with the same image
// layout - the cube is flipped over like a pancake about the photo's horizontal axis
// between the two shots.
//
// For each photo the user marks 7 points: the corner nearest the camera (centre C) and
// the six outline vertices V0..V5 (clockwise from the top). They define three
// parallelograms (top, left, right face). Sticker centres are sampled by bilinear
// interpolation and then mapped to cube slots through 3D geometry.

import { canonical2x2, FACE_NORMALS, getSpec } from './cube.js';

// handle indices: 0 = centre, 1..6 = V0..V5 (clockwise from top)
const QUADS = [
  { name: 'top', ea: 6, eb: 2, far: 1, face: [0, 3], across: ['left', 'right'] },
  { name: 'left', ea: 4, eb: 6, far: 5, face: [2, 4], across: ['right', 'top'] },
  { name: 'right', ea: 2, eb: 4, far: 3, face: [1, 5], across: ['top', 'left'] },
];
// Which face each quad shows: photo 1 sees U (top), F (left), R (right);
// photo 2 - after the pancake flip - sees D (top), L (left), B (right).
const quadFace = (photo, name) => QUADS.find((q) => q.name === name).face[photo];

export const HANDLE_LABELS = ['Corner (centre)', 'Top', 'Upper right', 'Lower right', 'Bottom', 'Lower left', 'Upper left'];

export function defaultHandles(w, h) {
  const cx = w / 2;
  const cy = h / 2;
  const r = Math.min(w, h) * 0.38;
  const dx = r * Math.cos(Math.PI / 6);
  return [
    [cx, cy],
    [cx, cy - r],
    [cx + dx, cy - r / 2],
    [cx + dx, cy + r / 2],
    [cx, cy + r],
    [cx - dx, cy + r / 2],
    [cx - dx, cy - r / 2],
  ];
}

// Sample points of one photo: [{slot, x, y}]
export function samplePoints(photo, handles, n) {
  const spec = getSpec(n);
  const m = spec.m;
  const out = [];
  const C = handles[0];
  for (const q of QUADS) {
    const A = handles[q.ea];
    const B = handles[q.eb];
    const F = handles[q.far];
    const nX = FACE_NORMALS[quadFace(photo, q.name)];
    const nYa = FACE_NORMALS[quadFace(photo, q.across[0])];
    const nYb = FACE_NORMALS[quadFace(photo, q.across[1])];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const u = (i + 0.5) / n;
        const v = (j + 0.5) / n;
        const x = C[0] + u * (A[0] - C[0]) + v * (B[0] - C[0]) + u * v * (F[0] - A[0] - B[0] + C[0]);
        const y = C[1] + u * (A[1] - C[1]) + v * (B[1] - C[1]) + u * v * (F[1] - A[1] - B[1] + C[1]);
        const pos = [0, 1, 2].map((k) => m * (nX[k] + nYa[k] + nYb[k]) - 2 * i * nYb[k] - 2 * j * nYa[k]);
        out.push({ slot: spec.slotAt(pos, nX), x, y });
      }
    }
  }
  return out;
}

export function averageColor(imageData, x, y, radius) {
  const { data, width, height } = imageData;
  let r = 0;
  let g = 0;
  let b = 0;
  let cnt = 0;
  for (let yy = Math.max(0, Math.round(y - radius)); yy <= Math.min(height - 1, Math.round(y + radius)); yy++) {
    for (let xx = Math.max(0, Math.round(x - radius)); xx <= Math.min(width - 1, Math.round(x + radius)); xx++) {
      const o = (yy * width + xx) * 4;
      r += data[o];
      g += data[o + 1];
      b += data[o + 2];
      cnt++;
    }
  }
  return cnt ? [r / cnt, g / cnt, b / cnt] : [0, 0, 0];
}

export function rgbToLab([r, g, b]) {
  const lin = (c) => {
    c /= 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  const [R, G, B] = [lin(r), lin(g), lin(b)];
  const X = (0.4124 * R + 0.3576 * G + 0.1805 * B) / 0.95047;
  const Y = 0.2126 * R + 0.7152 * G + 0.0722 * B;
  const Z = (0.0193 * R + 0.1192 * G + 0.9505 * B) / 1.08883;
  const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  return [116 * f(Y) - 16, 500 * (f(X) - f(Y)), 200 * (f(Y) - f(Z))];
}

const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

const toLinear = (c) => {
  c /= 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};
const toSrgb = (l) => 255 * (l <= 0.0031308 ? 12.92 * l : 1.055 * l ** (1 / 2.4) - 0.055);
const median = (xs) => {
  const s = [...xs].sort((a, b) => a - b);
  return s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2;
};

// A white tile is bright and the least coloured tile in the photo. Returns its RGB (median
// of the white-ish tiles, ignoring ones in shadow) or null when no tile looks white.
export function findWhitePoint(rgbs) {
  const chroma = (lab) => Math.hypot(lab[1], lab[2]);
  const bright = rgbs.map((rgb) => ({ rgb, lab: rgbToLab(rgb) })).filter(({ lab }) => lab[0] > 60 && chroma(lab) < 50);
  if (!bright.length) return null;
  // Strong lighting tints white, but it stays far less colourful than any coloured tile.
  const least = Math.min(...bright.map((c) => chroma(c.lab)));
  const whiteish = bright.filter((c) => chroma(c.lab) <= least + 12);
  const brightest = Math.max(...whiteish.map((c) => c.lab[0]));
  const lit = whiteish.filter((c) => c.lab[0] >= brightest - 20);
  return [0, 1, 2].map((ch) => median(lit.map((c) => c.rgb[ch])));
}

// Scale each channel (in linear light) so the white point becomes neutral white.
export function applyWhitePoint(rgb, white) {
  return rgb.map((c, ch) => {
    const gain = Math.min(5, 1 / Math.max(toLinear(white[ch]), 0.02));
    return Math.max(0, Math.min(255, toSrgb(Math.min(1, toLinear(c) * gain))));
  });
}

// --- Hue helpers -----------------------------------------------------------------
// Red, orange and yellow are the hard colours to tell apart: they are close in lightness
// and chroma but sit at different hue angles. Hue (HSV degrees, with red wrapped to be
// slightly negative so red < orange < yellow) is classified with adjustable cutoffs.

export function rgbToHsv([r, g, b]) {
  const [R, G, B] = [r / 255, g / 255, b / 255];
  const max = Math.max(R, G, B);
  const min = Math.min(R, G, B);
  const d = max - min;
  let h = 0;
  if (d > 0) {
    if (max === R) h = ((G - B) / d) % 6;
    else if (max === G) h = (B - R) / d + 2;
    else h = (R - G) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  return { h: h > 300 ? h - 360 : h, s: max === 0 ? 0 : d / max, v: max };
}

export const HUE_RANGE = [-30, 90];
const isWarm = (c) => c.s > 0.4 && c.h > -40 && c.h < 80;

// Sorted warm hues -> two cutoffs at the two largest gaps (three groups: red, orange, yellow).
function gapCutoffs(hues) {
  const sorted = [...hues].sort((a, b) => a - b);
  const gaps = sorted.slice(1).map((h, i) => ({ size: h - sorted[i], mid: (h + sorted[i]) / 2 }));
  return gaps
    .sort((a, b) => b.size - a.size)
    .slice(0, 2)
    .map((g) => g.mid)
    .sort((a, b) => a - b);
}

const warmIndex = (hue, [c1, c2]) => (hue < c1 ? 0 : hue < c2 ? 1 : 2);

// colours: [{slot, lab, h, s}] for all stickers of both photos -> state (Uint8Array).
// `cutoffs` = [redOrange, orangeYellow] in hue degrees, or null to pick them automatically.
// Result.hue is null when the red/orange/yellow split does not apply to this cube.
export function classify(n, colors, cutoffs = null) {
  const spec = getSpec(n);
  const state = new Uint8Array(spec.slotCount);
  const warnings = [];

  if (n === 3) {
    const centres = [];
    const centreColor = [];
    for (const c of colors) {
      const st = spec.stickers[c.slot];
      if (spec.cubies[st.cubie].kind === 'center') {
        centres[st.face] = c.lab;
        centreColor[st.face] = c;
      }
    }
    for (const c of colors) {
      let best = 0;
      for (let f = 1; f < 6; f++) if (dist(c.lab, centres[f]) < dist(c.lab, centres[best])) best = f;
      state[c.slot] = best;
    }
    const warmFaces = [0, 1, 2, 3, 4, 5].filter((f) => isWarm(centreColor[f])).sort((a, b) => centreColor[a].h - centreColor[b].h);
    if (warmFaces.length !== 3) return { state, warnings, hue: null };
    const hs = warmFaces.map((f) => centreColor[f].h);
    const auto = [(hs[0] + hs[1]) / 2, (hs[1] + hs[2]) / 2];
    const cut = cutoffs ?? auto;
    const points = [];
    for (const c of colors) {
      if (!warmFaces.includes(state[c.slot]) || c.s < 0.25) continue;
      state[c.slot] = warmFaces[warmIndex(c.h, cut)];
      points.push(c.h);
    }
    return { state, warnings, hue: { auto, cutoffs: cut, points, anchors: hs } };
  }

  // 2x2: warm stickers are split by hue; the other 12 are clustered by colour.
  const warm = colors.filter(isWarm);
  let assign = null;
  let hue = null;
  if (warm.length === 12) {
    const auto = gapCutoffs(warm.map((c) => c.h));
    const cut = cutoffs ?? auto;
    const rest = colors.filter((c) => !isWarm(c));
    const restAssign = balancedKMeans(rest.map((c) => c.lab), 3);
    assign = new Map();
    warm.forEach((c) => assign.set(c.slot, 3 + warmIndex(c.h, cut)));
    rest.forEach((c, i) => assign.set(c.slot, restAssign[i]));
    hue = { auto, cutoffs: cut, points: warm.map((c) => c.h), anchors: [] };
  } else {
    const all = balancedKMeans(colors.map((c) => c.lab), 6);
    assign = new Map(colors.map((c, i) => [c.slot, all[i]]));
  }
  for (const [slot, k] of assign) state[slot] = k;
  const canon = canonical2x2(state);
  if (canon.error) {
    warnings.push(`${canon.error}. Check the result and correct stickers by hand.`);
    return { state, warnings, hue };
  }
  return { state: canon.state, warnings, hue };
}

// k clusters of equal size over Lab colours (k-means with capacity-limited assignment).
function balancedKMeans(labs, k) {
  const size = labs.length / k;
  const centers = [labs[0]];
  while (centers.length < k) {
    let far = 0;
    let farD = -1;
    labs.forEach((l, i) => {
      const d = Math.min(...centers.map((c) => dist(l, c)));
      if (d > farD) {
        farD = d;
        far = i;
      }
    });
    centers.push(labs[far]);
  }
  let assign = new Array(labs.length).fill(0);
  for (let iter = 0; iter < 25; iter++) {
    const pairs = [];
    labs.forEach((l, i) => centers.forEach((c, j) => pairs.push([dist(l, c), i, j])));
    pairs.sort((a, b) => a[0] - b[0]);
    const cap = new Array(k).fill(size);
    const next = new Array(labs.length).fill(-1);
    for (const [, i, j] of pairs) {
      if (next[i] < 0 && cap[j] > 0) {
        next[i] = j;
        cap[j]--;
      }
    }
    assign = next;
    for (let j = 0; j < k; j++) {
      const members = labs.filter((_, i) => assign[i] === j);
      if (members.length) centers[j] = [0, 1, 2].map((d) => members.reduce((s, l) => s + l[d], 0) / members.length);
    }
  }
  return assign;
}

export function stateFromSamples(n, samples, { whiteBalance = false, cutoffs = null } = {}) {
  const info = [null, null]; // per photo: 'applied' | 'no-white'
  let used = samples;
  if (whiteBalance) {
    used = [];
    for (const photo of [0, 1]) {
      const group = samples.filter((s) => s.photo === photo);
      const white = findWhitePoint(group.map((s) => s.rgb));
      info[photo] = white ? 'applied' : 'no-white';
      used.push(...(white ? group.map((s) => ({ ...s, rgb: applyWhitePoint(s.rgb, white) })) : group));
    }
  }
  const colors = used.map((s) => ({ slot: s.slot, lab: rgbToLab(s.rgb), ...rgbToHsv(s.rgb) }));
  return { ...classify(n, colors, cutoffs), whiteBalance: info };
}

