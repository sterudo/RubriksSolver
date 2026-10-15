// Core cube model for 2x2 and 3x3 cubes.
//
// A cube is a flat array of sticker "slots". A slot is a fixed place in space
// (cubie position + outward normal). The state stores, for each slot, the index of
// the face whose colour currently sits there (0..5 -> U R F D L B). In the solved
// 3x3 every slot holds the index of its own face.
//
// Coordinates use doubled units so 2x2 (-1,+1) and 3x3 (-2,0,+2) both step by 2.
// x points right, y up, z towards the viewer (F = +z).

export const FACES = ['U', 'R', 'F', 'D', 'L', 'B'];
export const FACE_NORMALS = [
  [0, 1, 0],
  [1, 0, 0],
  [0, 0, 1],
  [0, -1, 0],
  [-1, 0, 0],
  [0, 0, -1],
];
export const OPPOSITE = [3, 4, 5, 0, 1, 2];

// Default colour scheme (white opposite yellow, green opposite blue, red opposite
// orange) held with yellow on top / green in front, so the white cross is on the
// bottom and the last layer is on the top.
export const FACE_COLOR_NAMES = ['yellow', 'orange', 'green', 'white', 'red', 'blue'];
export const FACE_COLOR_HEX = ['#ffd500', '#ff5800', '#009b48', '#ffffff', '#c41e3a', '#0051ba'];

const key = (p, nrm) => `${p[0]},${p[1]},${p[2]}|${nrm[0]},${nrm[1]},${nrm[2]}`;
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const det = (a, b, c) => dot(a, cross(b, c));

// Clockwise quarter turn seen from outside along unit axis `a`.
function rotateCW(v, a) {
  const d = dot(a, v);
  const c = cross(a, v);
  return [-c[0] + a[0] * d, -c[1] + a[1] * d, -c[2] + a[2] * d];
}

export function invertMove(name) {
  if (name.endsWith('2')) return name;
  return name.endsWith("'") ? name[0] : `${name}'`;
}

export function parseAlg(text) {
  return text
    .replace(/[()]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .map((t) => {
      const m = /^([URFDLB])(2|2'|'|3)?$/.exec(t);
      if (!m) throw new Error(`Bad move "${t}"`);
      if (!m[2]) return m[1];
      if (m[2] === '3' || m[2] === "'") return `${m[1]}'`;
      return `${m[1]}2`;
    });
}

export function invertAlg(moves) {
  return [...moves].reverse().map(invertMove);
}

const specs = new Map();

export function getSpec(n) {
  if (!specs.has(n)) specs.set(n, buildSpec(n));
  return specs.get(n);
}

function buildSpec(n) {
  if (n !== 2 && n !== 3) throw new Error('Only 2x2 and 3x3 cubes are supported');
  const m = n - 1;
  const coords = n === 3 ? [-2, 0, 2] : [-1, 1];
  const stickers = [];
  const index = new Map();
  const cubies = [];

  for (const x of coords)
    for (const y of coords)
      for (const z of coords) {
        const pos = [x, y, z];
        const slots = [];
        for (let axis = 0; axis < 3; axis++) {
          if (Math.abs(pos[axis]) !== m) continue;
          const normal = [0, 0, 0];
          normal[axis] = Math.sign(pos[axis]);
          const face = FACE_NORMALS.findIndex((f) => f[0] === normal[0] && f[1] === normal[1] && f[2] === normal[2]);
          const slot = stickers.length;
          stickers.push({ pos, normal, face, cubie: cubies.length });
          index.set(key(pos, normal), slot);
          slots.push(slot);
        }
        if (!slots.length) continue;
        // Canonical order: primary sticker first (U/D for corners and top/bottom
        // edges, F/B for middle-layer edges); corners then continue counter-clockwise.
        const byNormal = (axis) => slots.find((s) => stickers[s].normal[axis] !== 0);
        let ordered = slots;
        if (slots.length === 3) {
          const [ys, xs, zs] = [byNormal(1), byNormal(0), byNormal(2)];
          const ccw = det(stickers[ys].normal, stickers[xs].normal, stickers[zs].normal) > 0;
          ordered = ccw ? [ys, xs, zs] : [ys, zs, xs];
        } else if (slots.length === 2) {
          const primary = byNormal(1) ?? byNormal(2);
          ordered = [primary, slots.find((s) => s !== primary)];
        }
        const kind = slots.length === 3 ? 'corner' : slots.length === 2 ? 'edge' : 'center';
        cubies.push({ pos, slots: ordered, kind });
      }

  // Permutations for every face turn. perm[i] = slot that the sticker at slot i moves to.
  const moves = {};
  FACES.forEach((faceName, f) => {
    const axis = FACE_NORMALS[f];
    const quarter = stickers.map((st, i) => {
      if (dot(st.pos, axis) !== m) return i;
      return index.get(key(rotateCW(st.pos, axis), rotateCW(st.normal, axis)));
    });
    const half = quarter.map((j) => quarter[j]);
    const three = quarter.map((j) => half[j]);
    moves[faceName] = Int16Array.from(quarter);
    moves[`${faceName}2`] = Int16Array.from(half);
    moves[`${faceName}'`] = Int16Array.from(three);
  });

  return {
    n,
    m,
    stickers,
    cubies,
    index,
    moves,
    slotCount: stickers.length,
    slotAt: (pos, normal) => index.get(key(pos, normal)),
    faceGrid: buildFaceGrid(n, m, index),
    layerOf: (face) => cubies.map((c, i) => (dot(c.pos, FACE_NORMALS[face]) === m ? i : -1)).filter((i) => i >= 0),
  };
}

// Net layout of each face (row-major [row][col] -> slot), matching the usual unfolded cube.
function buildFaceGrid(n, m, index) {
  const grid = {};
  const at = (x, y, z, f) => index.get(key([x, y, z], FACE_NORMALS[f]));
  const rows = (fn) => Array.from({ length: n }, (_, r) => Array.from({ length: n }, (_, c) => fn(r, c)));
  grid.U = rows((r, c) => at(-m + 2 * c, m, -m + 2 * r, 0));
  grid.D = rows((r, c) => at(-m + 2 * c, -m, m - 2 * r, 3));
  grid.F = rows((r, c) => at(-m + 2 * c, m - 2 * r, m, 2));
  grid.B = rows((r, c) => at(m - 2 * c, m - 2 * r, -m, 5));
  grid.R = rows((r, c) => at(m, m - 2 * r, m - 2 * c, 1));
  grid.L = rows((r, c) => at(-m, m - 2 * r, -m + 2 * c, 4));
  return grid;
}

export function movesFor(n) {
  const faces = n === 2 ? ['U', 'R', 'F'] : FACES;
  return faces.flatMap((f) => [f, `${f}2`, `${f}'`]);
}

export function solvedState(n) {
  return Uint8Array.from(getSpec(n).stickers, (s) => s.face);
}

export function applyPerm(state, perm) {
  const out = new Uint8Array(state.length);
  for (let i = 0; i < state.length; i++) out[perm[i]] = state[i];
  return out;
}

export function applyMove(state, n, move) {
  return applyPerm(state, getSpec(n).moves[move]);
}

export function applyMoves(state, n, moves) {
  const spec = getSpec(n);
  let s = state;
  for (const mv of moves) s = applyPerm(s, spec.moves[mv]);
  return s;
}

export function isSolved(state, n) {
  const { faceGrid } = getSpec(n);
  return FACES.every((f) => {
    const slots = faceGrid[f].flat();
    return slots.every((s) => state[s] === state[slots[0]]);
  });
}

export function randomScramble(n, length = n === 2 ? 11 : 22, rng = Math.random) {
  const faces = n === 2 ? [0, 1, 2] : [0, 1, 2, 3, 4, 5];
  const out = [];
  const suffix = ['', "'", '2'];
  let last = -1;
  let beforeLast = -1;
  while (out.length < length) {
    const f = faces[Math.floor(rng() * faces.length)];
    if (f === last) continue;
    if (n === 3 && OPPOSITE[f] === last && f === beforeLast) continue;
    out.push(FACES[f] + suffix[Math.floor(rng() * 3)]);
    beforeLast = last;
    last = f;
  }
  return out;
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

function parity(perm) {
  const seen = new Array(perm.length).fill(false);
  let swaps = 0;
  for (let i = 0; i < perm.length; i++) {
    if (seen[i]) continue;
    let len = 0;
    for (let j = i; !seen[j]; j = perm[j]) {
      seen[j] = true;
      len++;
    }
    swaps += len - 1;
  }
  return swaps % 2;
}

// Reads every corner/edge: which home piece it is, and its twist/flip.
export function analyzePieces(state, n) {
  const spec = getSpec(n);
  const errors = [];
  const homeByKey = new Map();
  spec.cubies.forEach((c, i) => {
    if (c.kind === 'center') return;
    const faces = c.slots.map((s) => spec.stickers[s].face);
    homeByKey.set([...faces].sort().join(), i);
  });

  const corners = [];
  const edges = [];
  const seen = new Set();
  spec.cubies.forEach((c, pos) => {
    if (c.kind === 'center') return;
    const colors = c.slots.map((s) => state[s]);
    const pieceKey = [...colors].sort().join();
    const home = homeByKey.get(pieceKey);
    const label = colors.map((x) => FACE_COLOR_NAMES[x]).join('/');
    if (home === undefined || new Set(colors).size !== colors.length) {
      errors.push(`Impossible ${c.kind} with colours ${label}`);
      return;
    }
    if (seen.has(home)) {
      errors.push(`The ${spec.cubies[home].slots.map((s) => FACE_COLOR_NAMES[spec.stickers[s].face]).join('/')} ${c.kind} appears twice`);
      return;
    }
    seen.add(home);
    const homeColors = spec.cubies[home].slots.map((s) => spec.stickers[s].face);
    if (c.kind === 'corner') {
      let twist = -1;
      for (let t = 0; t < 3; t++) {
        if (colors.every((_, k) => colors[(t + k) % 3] === homeColors[k])) twist = t;
      }
      if (twist < 0) {
        errors.push(`The corner with colours ${label} is a mirror image (impossible)`);
        return;
      }
      corners.push({ pos, home, twist });
    } else {
      edges.push({ pos, home, flip: colors[0] === homeColors[0] ? 0 : 1 });
    }
  });
  return { corners, edges, errors };
}

// A 2x2 has no centres, so the cube's orientation is fixed by the bottom-left-back
// corner. Returns the state relabelled so that corner (and its opposites) define the
// colour of every face, plus the map from original colours to face labels.
export function canonical2x2(state) {
  const spec = getSpec(2);
  const counts = new Array(6).fill(0);
  for (const c of state) counts[c]++;
  if (counts.some((x) => x !== 4)) return { error: 'Each colour must appear exactly 4 times' };
  const together = Array.from({ length: 6 }, () => new Set());
  for (const c of spec.cubies) {
    const colors = c.slots.map((s) => state[s]);
    if (new Set(colors).size !== 3) return { error: 'A corner shows the same colour twice' };
    for (const a of colors) for (const b of colors) if (a !== b) together[a].add(b);
  }
  const opposite = [];
  for (let c = 0; c < 6; c++) {
    const others = [0, 1, 2, 3, 4, 5].filter((x) => x !== c && !together[c].has(x));
    if (others.length !== 1) return { error: 'The colours are not a valid cube colouring' };
    opposite[c] = others[0];
  }
  const dlb = spec.cubies.find((c) => c.pos[0] === -1 && c.pos[1] === -1 && c.pos[2] === -1);
  const colorOnFace = (face) => state[dlb.slots.find((s) => spec.stickers[s].face === face)];
  const map = new Array(6);
  const [cD, cL, cB] = [colorOnFace(3), colorOnFace(4), colorOnFace(5)];
  map[cD] = 3;
  map[cL] = 4;
  map[cB] = 5;
  map[opposite[cD]] = 0;
  map[opposite[cL]] = 1;
  map[opposite[cB]] = 2;
  if (new Set(map).size !== 6) return { error: 'The colours are not a valid cube colouring' };
  return { state: Uint8Array.from(state, (c) => map[c]), map };
}

export function analyzeState(state, n) {

  function formatColor(name) {
    switch (name.toLowerCase()) {
      case 'white': return '<span style="color:white;font-weight:bold;">White</span>';
      case 'yellow': return '<span style="color:yellow;font-weight:bold">Yellow</span>';
      case 'red': return '<span style="color:red;font-weight:bold;">Red</span>';
      case 'orange': return '<span style="color:orange;font-weight:bold;">Orange</span>';
      case 'blue': return '<span style="color:blue;font-weight:bold;">Blue</span>';
      case 'green': return '<span style="color:green;font-weight:bold;">Green</span>';      
    }
  }

  const spec = getSpec(n);
  if (state.length !== spec.slotCount) return { ok: false, errors: ['Wrong number of stickers'] };
  const errors = [];

  if (n === 2) {
    const canon = canonical2x2(state);
    if (canon.error) return { ok: false, errors: [canon.error] };
    const { corners, errors: pieceErrors } = analyzePieces(canon.state, 2);
    errors.push(...pieceErrors);
    if (!pieceErrors.length && corners.reduce((s, c) => s + c.twist, 0) % 3 !== 0) {
      errors.push('One corner is twisted - this position cannot be solved');
    }
    return { ok: !errors.length, errors, canonical: canon };
  }

  const counts = new Array(6).fill(0);
  for (const c of state) counts[c]++;
  counts.forEach((cnt, f) => {
    if (cnt !== 9) errors.push(`${formatColor(FACE_COLOR_NAMES[f])} appears ${cnt} times (needs 9)`);
  });
  spec.cubies.forEach((c) => {
    if (c.kind === 'center' && state[c.slots[0]] !== spec.stickers[c.slots[0]].face) {
      errors.push('Centre stickers are fixed and must keep their colour');
    }
  });
  if (errors.length) return { ok: false, errors: [...new Set(errors)] };

  const { corners, edges, errors: pieceErrors } = analyzePieces(state, 3);
  if (pieceErrors.length) return { ok: false, errors: pieceErrors };
  if (corners.reduce((s, c) => s + c.twist, 0) % 3 !== 0) errors.push('One corner is twisted in place');
  if (edges.reduce((s, e) => s + e.flip, 0) % 2 !== 0) errors.push('One edge is flipped in place');

  const toIndex = (list, kind) => {
    const homes = spec.cubies.map((c, i) => (c.kind === kind ? i : -1)).filter((i) => i >= 0);
    const perm = new Array(homes.length);
    list.forEach((p) => {
      perm[homes.indexOf(p.pos)] = homes.indexOf(p.home);
    });
    return perm;
  };
  if (parity(toIndex(corners, 'corner')) !== parity(toIndex(edges, 'edge'))) {
    errors.push('Two pieces are swapped - this position cannot be solved');
  }
  return { ok: !errors.length, errors };
}
