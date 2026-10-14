import { computed, reactive, shallowRef } from 'vue';
import {
  analyzeState,
  applyMove,
  applyMoves,
  getSpec,
  invertMove,
  isSolved,
  randomScramble,
  solvedState,
} from './core/cube.js';
import { progress, solve } from './core/solver.js';

export const store = reactive({
  n: 3,
  mode: 'setup', // setup | solve | learn | practice
  editing: false,
  brush: 0,
  speed: 1,
  playing: false, // the solution is being played automatically
  drama: localStorage.getItem('rubiks-solver.drama') === '1', // "Extra drama": slow camera swirl while playing
  dramaSpeed: parseFloat(localStorage.getItem('rubiks-solver.dramaSpeed') || '0.32'), // camera rotation speed (radians/sec)
  finale: localStorage.getItem('rubiks-solver.finale') === '1', // "Extra, extra drama": countdown + explosion at the end
  fullscreenOnPlay: false, // when true, entering play in Solve view requests fullscreen
  showAllColorsOnHover: false, // Setup: show mini palette over hovered sticker
  countdown: 0, // 3, 2, 1 while the finale countdown runs, else 0
  exploding: false, // the explosion / re-forming animation is running
  busy: false,
  solution: null, // result of solve()
  pointer: 0, // number of solution moves already performed
  solveError: '',
  moveCount: 0,
});

export const cubeState = shallowRef(solvedState(3));

let animator = null;
let exploder = null;
let queue = Promise.resolve();
const listeners = new Set();

export function registerAnimator(fn) {
  animator = fn;
}

export function registerExploder(fn) {
  exploder = fn;
}

export function onMove(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export const validity = computed(() => analyzeState(cubeState.value, store.n));
export const solved = computed(() => isSolved(cubeState.value, store.n));
export const stageProgress = computed(() => progress(cubeState.value, store.n));

// "Extra, extra drama": 3-2-1, then the cube explodes and re-forms. Anything the user does
// during the countdown (a move, a reset, a new position, rewinding ...) calls cancelFinale().
let finaleToken = 0;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function runFinale() {
  const token = ++finaleToken;
  for (const n of [3, 2, 1]) {
    if (token !== finaleToken) return;
    store.countdown = n;
    await sleep(1000);
  }
  if (token !== finaleToken) return;
  store.countdown = 0;
  store.exploding = true;
  try {
    await exploder?.();
  } finally {
    store.exploding = false;
  }
}

export function cancelFinale() {
  finaleToken++;
  store.countdown = 0;
}

function clearSolution() {
  cancelFinale();
  store.solution = null;
  store.pointer = 0;
  store.solveError = '';
}

// Replace the whole position (reset, scramble, painting, photo import).
export function setPosition(state) {
  queue = queue.then(() => {
    cubeState.value = state;
    clearSolution();
    store.moveCount = 0;
  });
  return queue;
}

// Replace the position and (if needed) the cube size in one step.
export function loadPosition(n, state) {
  queue = queue.then(() => {
    cubeState.value = state;
    store.n = n;
    store.editing = false;
    store.brush = 0;
    clearSolution();
    store.moveCount = 0;
  });
  return queue;
}

export function setSize(n) {
  return loadPosition(n, solvedState(n));
}

export function reset() {
  return setPosition(solvedState(store.n));
}

export function scramble() {
  const moves = randomScramble(store.n);
  return setPosition(applyMoves(solvedState(store.n), store.n, moves)).then(() => moves);
}

export function paint(slot, color = store.brush) {
  const spec = getSpec(store.n);
  if (spec.cubies[spec.stickers[slot].cubie].kind === 'center' && store.n === 3) return;
  const next = Uint8Array.from(cubeState.value);
  next[slot] = color;
  cubeState.value = next;
  clearSolution();
}

// Perform one move, animated. `move` may be several space-separated moves on opposite
// faces that turn together (used for middle-slice turns). `fromSolution` keeps the
// computed solution valid.
export function turn(move, { animate = true, fromSolution = false } = {}) {
  if (store.exploding) return queue; // the cube is in pieces
  queue = queue.then(async () => {
    const next = move.split(' ').reduce((s, m) => applyMove(s, store.n, m), cubeState.value);
    store.busy = true;
    try {
      if (animate && animator) await animator(move, next, store.speed);
    } finally {
      store.busy = false;
    }
    cubeState.value = next;
    if (!fromSolution) {
      clearSolution();
      store.moveCount++;
    }
    listeners.forEach((fn) => fn(move));
  });
  return queue;
}

export function turns(moves, opts) {
  moves.forEach((m) => turn(m, opts));
  return queue;
}

export async function computeSolution() {
  store.solveError = '';
  // Let the "Solving…" state paint before the (synchronous) search runs.
  await new Promise((r) => setTimeout(r, 20));
  const result = solve(cubeState.value, store.n);
  if (!result.ok) {
    store.solution = null;
    store.solveError = result.error;
    return null;
  }
  store.solution = result;
  store.pointer = 0;
  return result;
}

export function timeline() {
  const sol = store.solution;
  if (!sol) return [];
  const out = [];
  sol.stages.forEach((stage, si) => {
    stage.steps.forEach((step, ti) => {
      step.moves.forEach((move, mi) => out.push({ move, stage: si, step: ti, index: mi }));
    });
  });
  return out;
}

export async function stepForward() {
  cancelFinale();
  const tl = timeline();
  if (store.pointer >= tl.length) return;
  const item = tl[store.pointer];
  store.pointer++;
  await turn(item.move, { fromSolution: true });
}

export async function stepBack() {
  cancelFinale();
  const tl = timeline();
  if (store.pointer <= 0) return;
  store.pointer--;
  await turn(invertMove(tl[store.pointer].move), { fromSolution: true });
}
