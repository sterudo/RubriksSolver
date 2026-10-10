// Reads a cube position from two photos: one looking at a corner (top-front-right) and
// one looking at the opposite corner (bottom-back-left), both with the same image
// layout – the cube is flipped over like a pancake about the photo's horizontal axis
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
// photo 2 – after the pancake flip – sees D (top), L (left), B (right).
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

// colours: [{slot, lab}] for all stickers of both photos -> state (Uint8Array)
export function classify(n, colors) {
  const spec = getSpec(n);
  const state = new Uint8Array(spec.slotCount);
  const warnings = [];

  if (n === 3) {
    const centres = [];
    for (const c of colors) {
      const st = spec.stickers[c.slot];
      if (spec.cubies[st.cubie].kind === 'center') centres[st.face] = c.lab;
    }
    for (const c of colors) {
      let best = 0;
      for (let f = 1; f < 6; f++) if (dist(c.lab, centres[f]) < dist(c.lab, centres[best])) best = f;
      state[c.slot] = best;
    }
    return { state, warnings };
  }

  // 2x2: balanced k-means into 6 clusters of exactly 4 stickers.
  const labs = colors.map((c) => c.lab);
  const centers = [labs[0]];
  while (centers.length < 6) {
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
    labs.forEach((l, i) => centers.forEach((c, k) => pairs.push([dist(l, c), i, k])));
    pairs.sort((a, b) => a[0] - b[0]);
    const cap = new Array(6).fill(4);
    const next = new Array(labs.length).fill(-1);
    for (const [, i, k] of pairs) {
      if (next[i] < 0 && cap[k] > 0) {
        next[i] = k;
        cap[k]--;
      }
    }
    assign = next;
    for (let k = 0; k < 6; k++) {
      const members = labs.filter((_, i) => assign[i] === k);
      centers[k] = [0, 1, 2].map((d) => members.reduce((s, l) => s + l[d], 0) / members.length);
    }
  }
  colors.forEach((c, i) => {
    state[c.slot] = assign[i];
  });
  const canon = canonical2x2(state);
  if (canon.error) {
    warnings.push(`${canon.error}. Check the result and correct stickers by hand.`);
    return { state, warnings };
  }
  return { state: canon.state, warnings };
}

export function stateFromSamples(n, samples) {
  const colors = samples.map((s) => ({ slot: s.slot, lab: rgbToLab(s.rgb) }));
  return classify(n, colors);
}
