// Staged, teachable solver.
//
// 3x3 (layer by layer, white cross on the bottom):
//   cross -> first two layers (F2L pairs) -> yellow cross -> yellow face -> place corners -> place edges
// 2x2 (layer by layer, anchored on the bottom-left-back corner):
//   first layer -> orient top -> place top corners
//
// Cross and F2L pieces are found with a bidirectional breadth-first search over the
// positions of just the pieces involved. The last layer uses the classic beginner
// algorithms, combined (with U turns) by a cheapest-first search.

import {
  analyzeState,
  applyPerm,
  FACE_COLOR_NAMES,
  getSpec,
  invertAlg,
  invertMove,
  parseAlg,
} from './cube.js';

const ALGS = {
  yellowCross: parseAlg("F R U R' U' F'"),
  sune: parseAlg("R U R' U R U2 R'"),
  antiSune: parseAlg("R U2 R' U' R U' R'"),
  cornerCycle: parseAlg("R' F R' B2 R F' R' B2 R2"),
  edgeCycle: parseAlg("R U' R U R U R U' R' U' R2"),
  tPerm: parseAlg("R U R' U' R' F R2 U' R' U' R U R' F'"),
  yPerm: parseAlg("F R U' R' U' R U R' F' R U R' U' R' F R F'"),
};
export const ALGORITHMS = ALGS;

const FACE_INDEX = { U: 0, R: 1, F: 2, D: 3, L: 4, B: 5 };

function moveTable(spec, names) {
  return names.map((name) => {
    const perm = spec.moves[name];
    const inv = new Int16Array(perm.length);
    perm.forEach((to, from) => {
      inv[to] = from;
    });
    return { name, perm, inv, face: FACE_INDEX[name[0]] };
  });
}

const ALL_MOVES_3 = ['U', 'U2', "U'", 'R', 'R2', "R'", 'F', 'F2', "F'", 'D', 'D2', "D'", 'L', 'L2', "L'", 'B', 'B2', "B'"];
const MOVES_RUF = ['U', 'U2', "U'", 'R', 'R2', "R'", 'F', 'F2', "F'"];

// Bidirectional BFS over the slots occupied by a few tracked stickers.
function searchTracked(table, start, goal, maxDepth) {
  const k = (arr) => arr.join(',');
  const startKey = k(start);
  const goalKey = k(goal);
  if (startKey === goalKey) return [];
  const fwd = new Map([[startKey, { prev: null, move: -1, face: -1, depth: 0 }]]);
  const bwd = new Map([[goalKey, { next: null, move: -1, face: -1, depth: 0 }]]);
  let fFront = [start];
  let bFront = [goal];
  let fDepth = 0;
  let bDepth = 0;

  const build = (meetKey) => {
    const head = [];
    for (let cur = meetKey; fwd.get(cur).prev !== null; cur = fwd.get(cur).prev) head.push(fwd.get(cur).move);
    head.reverse();
    const tail = [];
    for (let cur = meetKey; bwd.get(cur).next !== null; cur = bwd.get(cur).next) tail.push(bwd.get(cur).move);
    return [...head, ...tail].map((i) => table[i].name);
  };

  while (fDepth + bDepth < maxDepth && (fFront.length || bFront.length)) {
    const expandForward = fFront.length && (fFront.length <= bFront.length || !bFront.length);
    if (expandForward) {
      const next = [];
      for (const s of fFront) {
        const sKey = k(s);
        const node = fwd.get(sKey);
        for (let mi = 0; mi < table.length; mi++) {
          const mv = table[mi];
          if (mv.face === node.face) continue;
          const t = s.map((x) => mv.perm[x]);
          const tKey = k(t);
          if (fwd.has(tKey)) continue;
          fwd.set(tKey, { prev: sKey, move: mi, face: mv.face });
          if (bwd.has(tKey)) return build(tKey);
          next.push(t);
        }
      }
      fFront = next;
      fDepth++;
    } else {
      const next = [];
      for (const s of bFront) {
        const sKey = k(s);
        const node = bwd.get(sKey);
        for (let mi = 0; mi < table.length; mi++) {
          const mv = table[mi];
          if (mv.face === node.face) continue;
          const t = s.map((x) => mv.inv[x]);
          const tKey = k(t);
          if (bwd.has(tKey)) continue;
          bwd.set(tKey, { next: sKey, move: mi, face: mv.face });
          if (fwd.has(tKey)) return build(tKey);
          next.push(t);
        }
      }
      bFront = next;
      bDepth++;
    }
  }
  return null;
}

// Where the pieces of `homeCubie` currently sit, ordered like its home slots.
function locatePiece(spec, state, homeCubie) {
  const homeSlots = spec.cubies[homeCubie].slots;
  const homeColors = homeSlots.map((s) => spec.stickers[s].face);
  const sorted = [...homeColors].sort().join();
  for (const c of spec.cubies) {
    if (c.slots.length !== homeSlots.length) continue;
    const colors = c.slots.map((s) => state[s]);
    if ([...colors].sort().join() !== sorted) continue;
    return homeColors.map((col) => c.slots[colors.indexOf(col)]);
  }
  throw new Error('Piece not found');
}

const cubieHome = (spec, state, ci) => spec.cubies[ci].slots.every((s) => state[s] === spec.stickers[s].face);

// Solve one piece while keeping `fixed` pieces where they are. Greedy: the
// cheapest remaining target is solved next.
function solvePieces(spec, state, fixedHomes, targets, names, table, labelOf, maxDepth) {
  const steps = [];
  let current = state;
  let fixed = [...fixedHomes];
  let remaining = [...targets];
  while (remaining.length) {
    let best = null;
    for (const target of remaining) {
      if (target.cubies.every((c) => cubieHome(spec, current, c))) {
        best = { target, moves: [] };
        break;
      }
      const homeSlots = [...fixed, ...target.cubies].flatMap((c) => spec.cubies[c].slots);
      const startSlots = [
        ...fixed.flatMap((c) => spec.cubies[c].slots),
        ...target.cubies.flatMap((c) => locatePiece(spec, current, c)),
      ];
      const limit = best ? best.moves.length - 1 : maxDepth;
      if (limit < 1) continue;
      const found = searchTracked(table, startSlots, homeSlots, limit);
      if (found && (!best || found.length < best.moves.length)) best = { target, moves: found };
    }
    if (!best) throw new Error('No solution found for a piece - is the cube state valid?');
    for (const mv of best.moves) current = applyPerm(current, spec.moves[mv]);
    steps.push({ label: labelOf(best.target), moves: best.moves });
    fixed = [...fixed, ...best.target.cubies];
    remaining = remaining.filter((t) => t !== best.target);
  }
  return { state: current, steps };
}

// Cheapest-first search over "macros" (single U turns and whole algorithms).
function searchMacros(spec, state, macros, goal, maxCost = 70) {
  const keyOf = (s) => String.fromCharCode(...s);
  const buckets = [[{ state, moves: [] }]];
  const seen = new Set([keyOf(state)]);
  if (goal(state)) return [];
  for (let cost = 0; cost <= maxCost; cost++) {
    const bucket = buckets[cost];
    if (!bucket) continue;
    for (const node of bucket) {
      for (const macro of macros) {
        let s = node.state;
        for (const mv of macro.moves) s = applyPerm(s, spec.moves[mv]);
        const k = keyOf(s);
        if (seen.has(k)) continue;
        seen.add(k);
        const total = cost + macro.moves.length;
        const next = { state: s, moves: [...node.moves, macro.label] };
        if (goal(s)) return flattenMacros(next.moves, macros);
        (buckets[total] ||= []).push(next);
      }
    }
  }
  return null;
}

function flattenMacros(labels, macros) {
  const byLabel = new Map(macros.map((m) => [m.label, m]));
  return labels.map((l) => byLabel.get(l));
}

const uTurns = [
  { label: 'U', moves: ['U'] },
  { label: "U'", moves: ["U'"] },
  { label: 'U2', moves: ['U2'] },
];
const algMacro = (label, moves) => ({ label, moves, isAlg: true });

function toSteps(macroList, stepLabelFor) {
  // Collapse consecutive U turns with the following algorithm so a step reads naturally.
  const steps = [];
  let pendingU = [];
  for (const macro of macroList) {
    if (!macro.isAlg) {
      pendingU.push(...macro.moves);
      continue;
    }
    steps.push({ label: stepLabelFor(macro), moves: [...pendingU, ...macro.moves], alg: macro.label });
    pendingU = [];
  }
  if (pendingU.length) steps.push({ label: 'Turn the top layer to line it up', moves: pendingU });
  return steps;
}

const defaultNames = FACE_COLOR_NAMES;
const cap = (s) => s[0].toUpperCase() + s.slice(1);

function runMacroStage(spec, state, macros, goal, stepLabelFor) {
  const found = searchMacros(spec, state, macros, goal);
  if (!found) throw new Error('Could not finish the last layer - is the cube state valid?');
  const steps = toSteps(found, stepLabelFor);
  let current = state;
  for (const step of steps) for (const mv of step.moves) current = applyPerm(current, spec.moves[mv]);
  return { state: current, steps };
}

const flat = (steps) => steps.flatMap((s) => s.moves);

export function solve(rawState, n, options = {}) {
  const verdict = analyzeState(rawState, n);
  if (!verdict.ok) return { ok: false, error: verdict.errors.join('. ') };
  try {
    return n === 2 ? solve2(rawState, verdict.canonical, options) : solve3(rawState, options);
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

function pieceName(spec, cubie, names) {
  return spec.cubies[cubie].slots.map((s) => names[spec.stickers[s].face]).join('-');
}

function solve3(state, options) {
  const names = options.names || defaultNames;
  const spec = getSpec(3);
  const table = moveTable(spec, ALL_MOVES_3);
  const cubieAt = (x, y, z) => spec.cubies.findIndex((c) => c.pos[0] === x && c.pos[1] === y && c.pos[2] === z);
  const stages = [];
  let s = state;

  const push = (id, steps) => stages.push({ id, steps, moves: flat(steps) });

  // 1. Cross: the four bottom edges.
  const crossTargets = [[0, -2, 2], [2, -2, 0], [0, -2, -2], [-2, -2, 0]].map((p) => ({ cubies: [cubieAt(...p)] }));
  let r = solvePieces(spec, s, [], crossTargets, names, table, (t) => `${cap(pieceName(spec, t.cubies[0], names))} edge`, 9);
  s = r.state;
  push('cross', r.steps);

  // 2. First two layers: corner + edge pairs.
  const f2lTargets = [
    [[2, -2, 2], [2, 0, 2]],
    [[-2, -2, 2], [-2, 0, 2]],
    [[2, -2, -2], [2, 0, -2]],
    [[-2, -2, -2], [-2, 0, -2]],
  ].map((pair) => ({ cubies: pair.map((p) => cubieAt(...p)) }));
  const fixed = crossTargets.flatMap((t) => t.cubies);
  r = solvePieces(
    spec,
    s,
    fixed,
    f2lTargets,
    names,
    table,
    (t) => `${cap(pieceName(spec, t.cubies[0], names))} corner + ${pieceName(spec, t.cubies[1], names)} edge`,
    11,
  );
  s = r.state;
  push('f2l', r.steps);

  // 3. Last layer.
  const topCubies = spec.cubies.map((c, i) => ({ c, i })).filter(({ c }) => c.pos[1] === 2);
  const topEdges = topCubies.filter(({ c }) => c.kind === 'edge').map(({ c }) => c.slots[0]);
  const topCorners = topCubies.filter(({ c }) => c.kind === 'corner').map(({ i }) => i);
  const topFaceSlots = spec.stickers.map((st, i) => (st.face === 0 ? i : -1)).filter((i) => i >= 0);

  const crossGoal = (st) => topEdges.every((slot) => st[slot] === 0);
  const faceGoal = (st) => topFaceSlots.every((slot) => st[slot] === 0);
  const cornersGoal = (st) => topCorners.every((c) => cubieHome(spec, st, c));
  const solvedGoal = (st) => spec.stickers.every((x, i) => st[i] === x.face);

  r = runMacroStage(spec, s, [...uTurns, algMacro('yellow cross', ALGS.yellowCross)], crossGoal, () => `Make the ${names[0]} cross`);
  s = r.state;
  push('ollCross', r.steps);

  r = runMacroStage(
    spec,
    s,
    [...uTurns, algMacro('sune', ALGS.sune), algMacro('antisune', ALGS.antiSune)],
    faceGoal,
    (m) => (m.label === 'sune' ? `Sune: twist corners (${names[0]} face)` : `Anti-Sune: twist corners (${names[0]} face)`),
  );
  s = r.state;
  push('ollFace', r.steps);

  r = runMacroStage(
    spec,
    s,
    [...uTurns, algMacro('corner cycle', ALGS.cornerCycle), algMacro('corner cycle inverse', invertAlg(ALGS.cornerCycle))],
    cornersGoal,
    () => 'Cycle three corners into place',
  );
  s = r.state;
  push('pllCorners', r.steps);

  r = runMacroStage(
    spec,
    s,
    [...uTurns, algMacro('edge cycle', ALGS.edgeCycle), algMacro('edge cycle inverse', invertAlg(ALGS.edgeCycle))],
    solvedGoal,
    () => 'Cycle three edges into place',
  );
  s = r.state;
  push('pllEdges', r.steps);

  return { ok: true, n: 3, stages, moves: stages.flatMap((st) => st.moves) };
}

function solve2(rawState, canon, options) {
  const spec = getSpec(2);
  const table = moveTable(spec, MOVES_RUF);
  const labelState = canon.state; // face-labelled copy; moves are identical on the raw cube
  const rawNames = options.names || defaultNames;
  // Colour name of each face label = name of the raw colour that was relabelled to it.
  const names = [];
  canon.map.forEach((label, raw) => {
    names[label] = rawNames[raw];
  });
  const cubieAt = (x, y, z) => spec.cubies.findIndex((c) => c.pos[0] === x && c.pos[1] === y && c.pos[2] === z);
  const stages = [];
  let s = labelState;
  const push = (id, steps) => stages.push({ id, steps, moves: flat(steps) });

  const bottom = [[1, -1, 1], [-1, -1, 1], [1, -1, -1]].map((p) => ({ cubies: [cubieAt(...p)] }));
  let r = solvePieces(spec, s, [cubieAt(-1, -1, -1)], bottom, names, table, (t) => `${cap(pieceName(spec, t.cubies[0], names))} corner`, 11);
  s = r.state;
  push('layer', r.steps);

  const topFaceSlots = spec.stickers.map((st, i) => (st.face === 0 ? i : -1)).filter((i) => i >= 0);
  const faceGoal = (st) => topFaceSlots.every((slot) => st[slot] === 0);
  const solvedGoal = (st) => spec.stickers.every((x, i) => st[i] === x.face);

  r = runMacroStage(
    spec,
    s,
    [...uTurns, algMacro('sune', ALGS.sune), algMacro('antisune', ALGS.antiSune)],
    faceGoal,
    (m) => (m.label === 'sune' ? `Sune: twist top corners (${names[0]} face)` : `Anti-Sune: twist top corners (${names[0]} face)`),
  );
  s = r.state;
  push('orient', r.steps);

  r = runMacroStage(
    spec,
    s,
    [...uTurns, algMacro('swap neighbours', ALGS.tPerm), algMacro('swap diagonal', ALGS.yPerm)],
    solvedGoal,
    (m) => (m.label === 'swap neighbours' ? 'Swap two neighbouring top corners' : 'Swap two diagonal top corners'),
  );
  s = r.state;
  push('permute', r.steps);

  return { ok: true, n: 2, stages, moves: stages.flatMap((st) => st.moves) };
}

// Which stages are complete in the given state? Used for practice-mode checklists.
export function progress(state, n) {
  const spec = getSpec(n);
  const verdict = analyzeState(state, n);
  if (!verdict.ok) return [];
  const st = n === 2 ? verdict.canonical.state : state;
  const home = (c) => cubieHome(spec, st, c);
  const cubies = spec.cubies.map((c, i) => ({ c, i }));
  const where = (pred) => cubies.filter(({ c }) => pred(c)).map(({ i }) => i);
  const topFace = spec.stickers.every((x, i) => x.face !== 0 || st[i] === 0);
  const solved = spec.stickers.every((x, i) => st[i] === x.face);

  if (n === 2) {
    return [
      { id: 'layer', done: where((c) => c.pos[1] === -1).every(home) },
      { id: 'orient', done: topFace },
      { id: 'permute', done: solved },
    ];
  }
  return [
    { id: 'cross', done: where((c) => c.pos[1] === -2 && c.kind === 'edge').every(home) },
    { id: 'f2l', done: where((c) => c.pos[1] <= 0 && c.kind !== 'center').every(home) },
    {
      id: 'ollCross',
      done: where((c) => c.pos[1] === 2 && c.kind === 'edge').every((i) => st[spec.cubies[i].slots[0]] === 0),
    },
    { id: 'ollFace', done: topFace },
    { id: 'pllCorners', done: where((c) => c.pos[1] === 2 && c.kind === 'corner').every(home) },
    { id: 'pllEdges', done: solved },
  ];
}

export { invertMove };
