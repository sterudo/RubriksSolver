import { describe, expect, it } from 'vitest';
import { fitCube } from '../src/core/cubefit.js';

// Renders an N x N x N cube (scrambled stickers, black gaps) through a pinhole camera
// with a coloured distractor in the background, and returns the pixels plus the true
// projected corners.
const PALETTE = [
  [200, 30, 30],
  [255, 140, 0],
  [250, 220, 0],
  [0, 150, 60],
  [0, 70, 200],
  [240, 240, 240],
];

function rotation(yaw, pitch, roll) {
  const [a, b, c] = [yaw, pitch, roll].map((d) => (d * Math.PI) / 180);
  const Ry = [[Math.cos(a), 0, Math.sin(a)], [0, 1, 0], [-Math.sin(a), 0, Math.cos(a)]];
  const Rx = [[1, 0, 0], [0, Math.cos(b), -Math.sin(b)], [0, Math.sin(b), Math.cos(b)]];
  const Rz = [[Math.cos(c), -Math.sin(c), 0], [Math.sin(c), Math.cos(c), 0], [0, 0, 1]];
  const mul = (A, B) => A.map((row) => [0, 1, 2].map((j) => row[0] * B[0][j] + row[1] * B[1][j] + row[2] * B[2][j]));
  return mul(Rz, mul(Rx, Ry));
}

function render({ n, W = 400, H = 400, f = 520, dist = 6.5, rot, offset = [0, 0] }) {
  const R = rotation(...rot);
  const data = new Uint8ClampedArray(W * H * 4);
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const cells = new Map();
  const colour = (face, i, j) => {
    const key = `${face}:${i}:${j}`;
    if (!cells.has(key)) cells.set(key, PALETTE[Math.floor(rnd() * 6)]);
    return cells.get(key);
  };
  const centre = [offset[0], offset[1], dist];
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      // background with a coloured distractor block
      let px = [112, 104, 96];
      if (x > 20 && x < 70 && y > 300 && y < 380) px = [230, 200, 20];
      if (x > 330 && x < 385 && y > 20 && y < 90) px = [30, 80, 200];
      // ray in the cube frame (R is orthonormal: inverse = transpose)
      const d = [(x - W / 2) / f, (y - H / 2) / f, 1];
      const o = [-centre[0], -centre[1], -centre[2]];
      const T = (v) => [0, 1, 2].map((r) => R[0][r] * v[0] + R[1][r] * v[1] + R[2][r] * v[2]);
      const od = T(d);
      const oo = T(o);
      let tNear = -Infinity;
      let tFar = Infinity;
      let axis = -1;
      for (let k = 0; k < 3; k++) {
        const t1 = (-1 - oo[k]) / od[k];
        const t2 = (1 - oo[k]) / od[k];
        const lo = Math.min(t1, t2);
        const hi = Math.max(t1, t2);
        if (lo > tNear) {
          tNear = lo;
          axis = k;
        }
        tFar = Math.min(tFar, hi);
      }
      if (tNear < tFar && tNear > 0) {
        const hit = [0, 1, 2].map((k) => oo[k] + tNear * od[k]);
        const u = axis === 0 ? 1 : 0;
        const v = axis === 2 ? 1 : 2;
        const a = ((hit[u] + 1) / 2) * n;
        const b = ((hit[v] + 1) / 2) * n;
        const fa = a - Math.floor(a);
        const fb = b - Math.floor(b);
        const gap = 0.07;
        const face = axis * 2 + (oo[axis] + tNear * od[axis] > 0 ? 1 : 0);
        px = fa < gap || fa > 1 - gap || fb < gap || fb > 1 - gap ? [18, 18, 18] : colour(face, Math.min(n - 1, Math.floor(a)), Math.min(n - 1, Math.floor(b)));
      }
      const q = (y * W + x) * 4;
      data[q] = px[0];
      data[q + 1] = px[1];
      data[q + 2] = px[2];
      data[q + 3] = 255;
    }
  }
  // true corners: image position of the 8 cube corners
  const corners = [];
  for (let i = 0; i < 8; i++) {
    const s = [i & 1 ? 1 : -1, i & 2 ? 1 : -1, i & 4 ? 1 : -1];
    const p = [0, 1, 2].map((r) => R[r][0] * s[0] + R[r][1] * s[1] + R[r][2] * s[2] + centre[r]);
    corners.push({ x: (W / 2 + (f * p[0]) / p[2]) / W * 1000, y: (H / 2 + (f * p[1]) / p[2]) / H * 1000, z: p[2] });
  }
  return { image: { data, width: W, height: H }, corners };
}

// Every returned handle must land near a true corner (the 7 visible ones), each used once.
function maxCornerError(handles, corners) {
  const nearest = corners.reduce((a, b) => (b.z < a.z ? b : a));
  const farthest = corners.reduce((a, b) => (b.z > a.z ? b : a));
  const visible = corners.filter((c) => c !== farthest);
  expect(visible).toContain(nearest);
  const used = new Set();
  let worst = 0;
  for (const [x, y] of handles) {
    let best = null;
    for (const c of visible) {
      if (used.has(c)) continue;
      const e = Math.hypot(c.x - x, c.y - y);
      if (!best || e < best.e) best = { e, c };
    }
    used.add(best.c);
    worst = Math.max(worst, best.e);
  }
  return worst;
}

describe('cube model fit', () => {
  it.each([
    [3, [35, -28, 4]],
    [3, [-50, 22, -8]],
    [2, [40, -25, 0]],
  ])('finds a cube of size %i seen at %j (blind, with a distractor in the background)', (n, rot) => {
    const { image, corners } = render({ n, rot });
    const fit = fitCube(image, n);
    expect(fit).not.toBeNull();
    expect(fit.score).toBeGreaterThan(0.3);
    expect(maxCornerError(fit.handles, corners)).toBeLessThan(40); // 4 % of the image
  }, 30000);

  it('uses a location hint', () => {
    const { image, corners } = render({ n: 3, rot: [30, -30, 0], offset: [0.3, 0.1] });
    const xs = corners.map((c) => c.x);
    const ys = corners.map((c) => c.y);
    const box = { x1: Math.min(...xs), x2: Math.max(...xs), y1: Math.min(...ys), y2: Math.max(...ys) };
    const fit = fitCube(image, 3, { box });
    expect(maxCornerError(fit.handles, corners)).toBeLessThan(40);
  }, 30000);

  it('reports a poor score when there is no cube', () => {
    const W = 200;
    const H = 200;
    const data = new Uint8ClampedArray(W * H * 4).fill(120);
    for (let i = 3; i < data.length; i += 4) data[i] = 255;
    const fit = fitCube({ data, width: W, height: H }, 3);
    expect(!fit || fit.score < 0.3).toBe(true);
  }, 30000);
});
