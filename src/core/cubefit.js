// Model-based cube detection.
//
// A cube is modelled as a rigid 3D object with equal edges seen through a pinhole camera:
// pose = image position, distance, rotation (yaw/pitch/roll) and focal length. Perspective
// (converging, non-parallel edges) therefore comes for free. The pose is fitted by asking
// "if the cube were like this, where would the stickers and the black gaps between them be?"
// and rewarding poses whose sticker centres fall on coloured/white patches and whose grid
// lines fall on dark plastic. The N x N grid is part of the model, so it is searched from
// the inside out: wrong sizes or shifted grids do not line up with the gaps and score badly.
// The result is the outline in the handle convention used by the photo importer.

const rad = Math.PI / 180;
const CORNERS = Array.from({ length: 8 }, (_, i) => [i & 1 ? 1 : -1, i & 2 ? 1 : -1, i & 4 ? 1 : -1]);

// ---------------------------------------------------------------------------------------
// Image evidence
// ---------------------------------------------------------------------------------------

function rgbToHsv(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return { s: max === 0 ? 0 : (max - min) / max, v: max / 255 };
}

// Downscales and turns the photo into two soft maps: "sticker" (coloured or white patch)
// and "dark" (black plastic).
export function prepareMaps(image, maxSide = 360) {
  const { data, width: W0, height: H0 } = image;
  const scale = Math.min(1, maxSide / Math.max(W0, H0));
  const w = Math.max(8, Math.round(W0 * scale));
  const h = Math.max(8, Math.round(H0 * scale));
  const stick = new Float32Array(w * h);
  const dark = new Float32Array(w * h);
  for (let y = 0; y < h; y++) {
    const y0 = Math.floor((y * H0) / h);
    const y1 = Math.max(y0 + 1, Math.floor(((y + 1) * H0) / h));
    for (let x = 0; x < w; x++) {
      const x0 = Math.floor((x * W0) / w);
      const x1 = Math.max(x0 + 1, Math.floor(((x + 1) * W0) / w));
      let r = 0;
      let g = 0;
      let b = 0;
      let n = 0;
      for (let yy = y0; yy < y1; yy++) {
        for (let xx = x0; xx < x1; xx++) {
          const o = (yy * W0 + xx) * 4;
          r += data[o];
          g += data[o + 1];
          b += data[o + 2];
          n++;
        }
      }
      const { s, v } = rgbToHsv(r / n, g / n, b / n);
      const coloured = s > 0.42 && v > 0.32 ? Math.min(1, (s - 0.32) / 0.3) : 0;
      const white = s < 0.2 && v > 0.72 ? 0.9 : 0;
      stick[y * w + x] = Math.max(coloured, white);
      dark[y * w + x] = v < 0.3 ? Math.min(1, (0.34 - v) / 0.14) : 0;
    }
  }
  return { w, h, scale, stick: blur(stick, w, h), dark: blur(dark, w, h) };
}

function blur(src, w, h) {
  const out = new Float32Array(src.length);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let s = 0;
      let n = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const xx = x + dx;
          const yy = y + dy;
          if (xx < 0 || yy < 0 || xx >= w || yy >= h) continue;
          s += src[yy * w + xx];
          n++;
        }
      }
      out[y * w + x] = s / n;
    }
  }
  return out;
}

function sampleMap(map, w, h, x, y) {
  if (x < 0 || y < 0 || x > w - 1 || y > h - 1) return -1; // outside the photo
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const x1 = Math.min(w - 1, x0 + 1);
  const y1 = Math.min(h - 1, y0 + 1);
  const fx = x - x0;
  const fy = y - y0;
  return (
    map[y0 * w + x0] * (1 - fx) * (1 - fy) + map[y0 * w + x1] * fx * (1 - fy) + map[y1 * w + x0] * (1 - fx) * fy + map[y1 * w + x1] * fx * fy
  );
}

// ---------------------------------------------------------------------------------------
// Cube model
// ---------------------------------------------------------------------------------------

function rotation(yaw, pitch, roll) {
  const [cy, sy] = [Math.cos(yaw * rad), Math.sin(yaw * rad)];
  const [cp, sp] = [Math.cos(pitch * rad), Math.sin(pitch * rad)];
  const [cr, sr] = [Math.cos(roll * rad), Math.sin(roll * rad)];
  const Ry = [[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]];
  const Rx = [[1, 0, 0], [0, cp, -sp], [0, sp, cp]];
  const Rz = [[cr, -sr, 0], [sr, cr, 0], [0, 0, 1]];
  const mul = (A, B) => A.map((row) => [0, 1, 2].map((j) => row[0] * B[0][j] + row[1] * B[1][j] + row[2] * B[2][j]));
  return mul(Rz, mul(Rx, Ry));
}

// Camera-space corners of a cube with half-side 1. Image position (cx, cy) is where the
// cube's centre appears; z is its distance.
export function cubePoints(pose, W, H) {
  const R = rotation(pose.yaw, pose.pitch, pose.roll);
  const X = ((pose.cx - W / 2) / pose.f) * pose.z;
  const Y = ((pose.cy - H / 2) / pose.f) * pose.z;
  return CORNERS.map((s) => [
    R[0][0] * s[0] + R[0][1] * s[1] + R[0][2] * s[2] + X,
    R[1][0] * s[0] + R[1][1] * s[1] + R[1][2] * s[2] + Y,
    R[2][0] * s[0] + R[2][1] * s[1] + R[2][2] * s[2] + pose.z,
  ]);
}

const toImage = (v, W, H, f) => [W / 2 + (f * v[0]) / v[2], H / 2 + (f * v[1]) / v[2]];

function nearestCorner(pts) {
  let c = 0;
  for (let i = 1; i < 8; i++) if (pts[i][2] < pts[c][2]) c = i;
  return c;
}

const FACE_MASKS = [[1, 2], [1, 4], [2, 4]];
const LINE_T = [0.12, 0.3, 0.5, 0.7, 0.88];
const RIM = [0.02, 0.05, 0.08]; // positions of the dark rim inside a face border, in cells
const CELL_OFFSETS = [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]];

// How well does this pose explain the photo? 0..1 (higher is better). Three kinds of
// evidence, all structural so background clutter cannot fake them:
//   cells   - sticker centres lie on coloured/white patches
//   lines   - grid lines are dark AND have a sticker colour on both sides
//   borders - face edges have a dark rim with a sticker just inside
// Shared by the pose model (perspective projection) and the handle model (bilinear quads):
// `faceFns` are three functions at(u, v) -> image point for the three visible faces.
function scoreFaces(M, n, faceFns, tol, detail) {
  const { w: W, h: H } = M;
  const stickAt = (p) => (p ? sampleMap(M.stick, W, H, p[0], p[1]) : -1);
  const darkAt = (p) => (p ? sampleMap(M.dark, W, H, p[0], p[1]) : -1);

  let cell = 0;
  let cellN = 0;
  let line = 0;
  let lineN = 0;
  let border = 0;
  let borderN = 0;
  let outside = 0;
  let total = 0;
  const faceAreas = [];
  const quads = [];
  const add = (value, kind) => {
    total++;
    if (value < 0) {
      outside++;
      value = 0;
    }
    if (kind === 0) {
      cell += value;
      cellN++;
    } else if (kind === 1) {
      line += value;
      lineN++;
    } else {
      border += value;
      borderN++;
    }
  };

  for (const at of faceFns) {
    // projected area of the whole face (a sliver means a degenerate pose)
    const quad = [at(0, 0), at(1, 0), at(1, 1), at(0, 1)];
    if (quad.some((q) => !q)) return -1;
    quads.push(quad);
    let a2 = 0;
    for (let i = 0; i < 4; i++) {
      const p = quad[i];
      const q = quad[(i + 1) % 4];
      a2 += p[0] * q[1] - q[0] * p[1];
    }
    faceAreas.push(Math.abs(a2) / 2);
    // sticker centres
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        let acc = 0;
        let bad = false;
        for (const [du, dv] of CELL_OFFSETS) {
          const s = stickAt(at((i + 0.5) / n + (du * 0.16) / n, (j + 0.5) / n + (dv * 0.16) / n));
          if (s < 0) bad = true;
          else acc += s;
        }
        add(bad ? -1 : acc / CELL_OFFSETS.length, 0);
      }
    }
    // internal grid lines: dark (within +-tol of a cell), with stickers on both sides
    for (let k = 1; k < n; k++) {
      for (const t of LINE_T) {
        for (const dir of [0, 1]) {
          const pos = (a, b) => (dir === 0 ? at(a, b) : at(b, a));
          let d = -1;
          for (const o of [-tol, 0, tol]) d = Math.max(d, darkAt(pos(k / n + o / n, t)));
          const s1 = stickAt(pos(k / n - 0.33 / n, t));
          const s2 = stickAt(pos(k / n + 0.33 / n, t));
          add(d < 0 || s1 < 0 || s2 < 0 ? -1 : d * Math.min(s1, s2), 1);
        }
      }
    }
    // face borders: dark rim (a few % of a cell wide) with a sticker just inside
    for (const t of LINE_T) {
      for (const [bu, bv, iu, iv, du, dv] of [
        [0, t, 0.33 / n, t, 1, 0],
        [1, t, 1 - 0.33 / n, t, -1, 0],
        [t, 0, t, 0.33 / n, 0, 1],
        [t, 1, t, 1 - 0.33 / n, 0, -1],
      ]) {
        let d = -1;
        for (const r of RIM) d = Math.max(d, darkAt(at(bu + (du * r) / n, bv + (dv * r) / n)));
        const s = stickAt(at(iu, iv));
        add(d < 0 || s < 0 ? -1 : d * s, 2);
      }
    }
  }
  if (!cellN || !lineN) return -1;
  if (detail) return { cell: cell / cellN, line: line / lineN, border: border / borderN, outside, total };
  let score = 0.3 * (cell / cellN) + 0.4 * (line / lineN) + 0.3 * (border / borderN);
  score *= 1 - outside / Math.max(1, total);
  const areaRatio = Math.min(...faceAreas) / Math.max(...faceAreas);
  if (areaRatio < 0.12) score *= areaRatio / 0.12;
  return score * (0.4 + 0.6 * coverage(M, quads));
}

const inQuad = (q, x, y) => {
  let sign = 0;
  for (let i = 0; i < 4; i++) {
    const a = q[i];
    const b = q[(i + 1) % 4];
    const cr = (b[0] - a[0]) * (y - a[1]) - (b[1] - a[1]) * (x - a[0]);
    if (cr !== 0) {
      if (sign && Math.sign(cr) !== sign) return false;
      sign = Math.sign(cr);
    }
  }
  return true;
};

// Share of the sticker-coloured mass around the cube that the outline actually explains.
// A fit that is too small leaves coloured stickers outside and is penalised.
function coverage(M, quads) {
  const { w: W, h: H } = M;
  const pts = quads.flat();
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  const size = Math.max(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys));
  const pad = 0.12 * size;
  const x1 = Math.max(0, Math.min(...xs) - pad);
  const x2 = Math.min(W - 1, Math.max(...xs) + pad);
  const y1 = Math.max(0, Math.min(...ys) - pad);
  const y2 = Math.min(H - 1, Math.max(...ys) + pad);
  let inside = 0;
  let outsideMass = 0;
  const G = 22;
  for (let i = 0; i < G; i++) {
    for (let j = 0; j < G; j++) {
      const x = x1 + ((x2 - x1) * (i + 0.5)) / G;
      const y = y1 + ((y2 - y1) * (j + 0.5)) / G;
      const s = sampleMap(M.stick, W, H, x, y);
      if (quads.some((q) => inQuad(q, x, y))) inside += s;
      else outsideMass += s;
    }
  }
  return inside / Math.max(1e-6, inside + outsideMass);
}

// How well does this pose explain the photo? 0..1 (higher is better).
export function scorePose(M, n, pose, tol = 0.12, detail = false) {
  const { w: W, h: H } = M;
  const pts = cubePoints(pose, W, H);
  const c = nearestCorner(pts);
  if (pts[c][2] < 1) return -1;
  const C0 = pts[c];
  const project = (x, y, z) => {
    if (z < 0.3) return null;
    return [W / 2 + (pose.f * x) / z, H / 2 + (pose.f * y) / z];
  };
  const faceFns = FACE_MASKS.map(([ma, mb]) => {
    const A = pts[c ^ ma];
    const B = pts[c ^ mb];
    const ea = [A[0] - C0[0], A[1] - C0[1], A[2] - C0[2]];
    const eb = [B[0] - C0[0], B[1] - C0[1], B[2] - C0[2]];
    return (u, v) => project(C0[0] + ea[0] * u + eb[0] * v, C0[1] + ea[1] * u + eb[1] * v, C0[2] + ea[2] * u + eb[2] * v);
  });
  let score = scoreFaces(M, n, faceFns, tol, detail);
  if (detail || score < 0) return score;
  // plausible apparent size
  const img = pts.map((v) => (v[2] > 0.3 ? toImage(v, W, H, pose.f) : [0, 0]));
  const xs = img.map((p) => p[0]);
  const ys = img.map((p) => p[1]);
  const size = Math.max(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys)) / Math.min(W, H);
  if (size < 0.15) score *= size / 0.15;
  if (size > 1.1) score *= 1.1 / size;
  return score;
}

// Same evidence for 7 free handle points [C, V0..V5] (faces are bilinear quads, exactly
// what the colour sampler uses later).
export function scoreHandles(M, n, h, tol = 0.05) {
  const quad = (a, b, far, c) => (u, v) => [
    c[0] + u * (a[0] - c[0]) + v * (b[0] - c[0]) + u * v * (far[0] - a[0] - b[0] + c[0]),
    c[1] + u * (a[1] - c[1]) + v * (b[1] - c[1]) + u * v * (far[1] - a[1] - b[1] + c[1]),
  ];
  const [C, V0, V1, V2, V3, V4, V5] = h;
  return scoreFaces(M, n, [quad(V5, V1, V0, C), quad(V3, V5, V4, C), quad(V1, V3, V2, C)], tol, false);
}

// The outline in handle convention: [centre corner, V0..V5] in image pixels. V0 is the
// far vertex that is highest in the image, then clockwise; V1, V3, V5 are the ends of the
// three edges that meet at the centre corner.
export function poseHandles(pose, W, H) {
  const pts = cubePoints(pose, W, H);
  const c = nearestCorner(pts);
  const img = (i) => toImage(pts[i], W, H, pose.f);
  const ring = [
    { p: img(c ^ 1), far: false },
    { p: img(c ^ 3), far: true },
    { p: img(c ^ 2), far: false },
    { p: img(c ^ 6), far: true },
    { p: img(c ^ 4), far: false },
    { p: img(c ^ 5), far: true },
  ];
  // make the ring clockwise on screen (y points down)
  let area = 0;
  for (let i = 0; i < 6; i++) {
    const a = ring[i].p;
    const b = ring[(i + 1) % 6].p;
    area += a[0] * b[1] - b[0] * a[1];
  }
  if (area < 0) ring.reverse();
  const fars = ring.map((e, i) => (e.far ? i : -1)).filter((i) => i >= 0);
  const top = fars.reduce((best, i) => (ring[i].p[1] < ring[best].p[1] ? i : best), fars[0]);
  const ordered = [0, 1, 2, 3, 4, 5].map((k) => ring[(top + k) % 6].p);
  return [img(c), ...ordered];
}

// ---------------------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------------------

export function hexExtent(pose, W, H) {
  const pts = cubePoints(pose, W, H).map((v) => toImage(v, W, H, pose.f));
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  return { x1: Math.min(...xs), x2: Math.max(...xs), y1: Math.min(...ys), y2: Math.max(...ys) };
}

// Pose for a given orientation whose outline fills the box.
export function place(box, yaw, pitch, roll, f, W, H) {
  const pose = { cx: W / 2, cy: H / 2, z: 6, yaw, pitch, roll, f };
  const bcx = (box.x1 + box.x2) / 2;
  const bcy = (box.y1 + box.y2) / 2;
  for (let it = 0; it < 3; it++) {
    const e = hexExtent(pose, W, H);
    const sx = (box.x2 - box.x1) / Math.max(1e-6, e.x2 - e.x1);
    const sy = (box.y2 - box.y1) / Math.max(1e-6, e.y2 - e.y1);
    pose.z = Math.max(1.5, pose.z / Math.sqrt(sx * sy));
    const e2 = hexExtent(pose, W, H);
    pose.cx += bcx - (e2.x1 + e2.x2) / 2;
    pose.cy += bcy - (e2.y1 + e2.y2) / 2;
  }
  return pose;
}

const PARAMS = ['cx', 'cy', 'z', 'yaw', 'pitch', 'roll', 'lf'];

function refine(M, n, start, f0) {
  const W = M.w;
  const H = M.h;
  const p = { ...start, lf: Math.log(start.f / f0) };
  const poseOf = (q) => ({ ...q, f: f0 * Math.exp(q.lf) });
  const e0 = hexExtent(poseOf(p), W, H);
  const size = Math.max(e0.x2 - e0.x1, e0.y2 - e0.y1);
  const base = { cx: 0.02 * size, cy: 0.02 * size, z: 0.03 * p.z, yaw: 3, pitch: 3, roll: 3, lf: 0.05 };
  // coarse to fine: a generous tolerance first, tightening as the model converges
  const schedule = [
    { tol: 0.16, shrink: [1, 0.6, 0.35] },
    { tol: 0.09, shrink: [0.35, 0.2, 0.1] },
    { tol: 0.05, shrink: [0.1, 0.05, 0.025] },
  ];
  for (const { tol, shrink } of schedule) {
    let best = scorePose(M, n, poseOf(p), tol);
    for (const s of shrink) {
      for (let sweep = 0; sweep < 30; sweep++) {
        let improved = false;
        for (const key of PARAMS) {
          for (const dir of [1, -1]) {
            const q = { ...p, [key]: p[key] + dir * base[key] * s };
            if (key === 'pitch' && Math.abs(q.pitch) > 85) continue;
            if (key === 'lf' && (q.lf < -0.7 || q.lf > 1.6)) continue;
            if (key === 'z' && q.z < 1.5) continue;
            const sc = scorePose(M, n, poseOf(q), tol);
            if (sc > best + 1e-5) {
              best = sc;
              Object.assign(p, q);
              improved = true;
            }
          }
        }
        if (!improved) break;
      }
    }
  }
  const pose = poseOf(p);
  return { pose, score: scorePose(M, n, pose, 0.06) };
}

// image: ImageData-like. box: optional rough cube box in 0-1000 coordinates (e.g. from the
// AI). Returns { handles (0-1000 image coordinates), score, margin, pose } – or null when
// nothing cube-like was found.
export function fitCube(image, n, { box = null } = {}) {
  const M = prepareMaps(image);
  const { w: W, h: H } = M;
  const toPx = (b) => ({ x1: (b.x1 / 1000) * W, x2: (b.x2 / 1000) * W, y1: (b.y1 / 1000) * H, y2: (b.y2 / 1000) * H });
  // With a location hint use it; without one try a few plausible sizes around the centre.
  const boxes = box
    ? [toPx(box)]
    : [0.4, 0.5, 0.62, 0.76, 0.9].map((s) => {
        const half = (s * Math.min(W, H)) / 2;
        return { x1: W / 2 - half, x2: W / 2 + half, y1: H / 2 - half, y2: H / 2 + half };
      });
  const f0 = 0.8 * Math.max(W, H);

  // 1. coarse sweep over every orientation (the cube's symmetry makes 90 degrees of yaw enough)
  const coarse = [];
  for (const px of boxes) {
    for (let yaw = 0; yaw < 90; yaw += 10) {
      for (let pitch = -80; pitch <= 80; pitch += 10) {
        for (let roll = -90; roll <= 90; roll += 15) {
          for (const f of [f0, 2.8 * f0]) {
            const pose = place(px, yaw, pitch, roll, f, W, H);
            coarse.push({ pose, score: scorePose(M, n, pose, 0.16) });
          }
        }
      }
    }
  }
  coarse.sort((a, b) => b.score - a.score);
  const median = coarse[Math.floor(coarse.length / 2)].score;

  // 2. refine the best distinct candidates
  const kept = [];
  const key = (pose) => poseHandles(pose, W, H).flat();
  for (const cand of coarse.slice(0, 200)) {
    const k = key(cand.pose);
    const size = Math.max(...k.filter((_, i) => i % 2 === 0)) - Math.min(...k.filter((_, i) => i % 2 === 0));
    if (kept.every((o) => Math.max(...o.k.map((v, i) => Math.abs(v - k[i]))) > 0.05 * size)) kept.push({ ...cand, k });
    if (kept.length >= 16) break;
  }
  let best = null;
  const all = [];
  for (const cand of kept) {
    const fit = refine(M, n, cand.pose, f0);
    all.push(fit);
    if (!best || fit.score > best.score) best = fit;
  }
  if (!best || best.score <= 0) return null;
  const start = poseHandles(best.pose, W, H);
  const polished = polishHandles(M, n, start);
  const handles = polished.handles.map(([x, y]) => [(x / W) * 1000, (y / H) * 1000]);
  return { handles, poseHandles: start.map(([x, y]) => [(x / W) * 1000, (y / H) * 1000]), score: polished.score, poseScore: best.score, margin: polished.score - median, pose: best.pose, maps: M, alternatives: all };
}

// Free the 7 handles to absorb lens distortion, staying close to the perspective-correct start.
function polishHandles(M, n, start) {
  const xs = start.map((p) => p[0]);
  const size = Math.max(...xs) - Math.min(...xs);
  const limit = 0.06 * size;
  const h = start.map((p) => [...p]);
  const clamp = (i, k) => Math.max(start[i][k] - limit, Math.min(start[i][k] + limit, h[i][k]));
  let best = scoreHandles(M, n, h, 0.05);
  for (const step of [0.012, 0.006, 0.003]) {
    for (let sweep = 0; sweep < 20; sweep++) {
      let improved = false;
      for (let i = 0; i < 7; i++) {
        for (let k = 0; k < 2; k++) {
          for (const dir of [1, -1]) {
            const old = h[i][k];
            h[i][k] = old + dir * step * size;
            if (h[i][k] !== clamp(i, k)) {
              h[i][k] = old;
              continue;
            }
            const sc = scoreHandles(M, n, h, 0.05);
            if (sc > best + 1e-5) {
              best = sc;
              improved = true;
            } else h[i][k] = old;
          }
        }
      }
      if (!improved) break;
    }
  }
  return { handles: h, score: best };
}
