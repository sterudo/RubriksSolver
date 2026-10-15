<template>
  <section class="panel">
    <h2>Solve it step by step</h2>

    <div class="row">
      <button class="primary" :disabled="!validity.ok || solving || store.solving || store.editing" @click="solveNow">
        {{ solving || store.solving ? 'Solving…' : 'Find solution' }}
      </button>
      <span v-if="solved && !sol" class="status ok">Already solved!</span>
    </div>
    <ul v-if="!validity.ok" class="status bad">
      <li v-for="e in validity.errors" :key="e" v-html="e"></li>
    </ul>
    <p v-if="store.solveError" class="status bad">{{ store.solveError }}</p>

    <template v-if="sol">
      <p class="note">
        {{ sol.moves.length }} moves in {{ sol.stages.length }} stages. Use the controls to step through, or press play.
      </p>

      <div class="player">
        <button title="Back to start" :disabled="busyOrStart" @click="rewind">⏮</button>
        <button title="Previous move" :disabled="busyOrStart" @click="stepBack">◀</button>
        <button class="primary" :title="playing ? 'Pause' : 'Play'" :disabled="atEnd && !playing" @click="togglePlay">
          {{ playing ? '⏸' : '▶' }} (enter/return)
        </button>
        <button title="Next move" :disabled="atEnd || store.busy" @click="stepForward">▶| (spacebar)</button>
        <button title="Jump to end" :disabled="atEnd || store.busy" @click="fastForward">⏭</button>
       
      </div>
       <div class="bar"><div :style="{ width: `${(store.pointer / Math.max(1, total)) * 100}%` }"></div></div>
        <details>
          <summary>Playback settings</summary>
      
          <label class="speed">
              Speed
              <input v-model.number="store.speed" type="range" min="0.5" max="4" step="0.5" />
            </label>
          <label class="drama" title="While playing, the camera slowly swirls around the cube">
            <input v-model="store.drama" type="checkbox" />
            Extra drama
            <small>- slow, smooth camera rotation during playback</small>
          </label>
          <label class="drama-speed" title="Rotation speed while Extra drama is enabled">
            Rotation speed
            <input v-model.number="store.dramaSpeed" type="range" min="0.05" max="1.2" step="0.01" />
          </label>

          <label class="drama" title="When the cube is solved: 3-2-1, explosion, and the cube re-forms">
            <input v-model="store.finale" type="checkbox" />
            Extra, extra drama
            <small>- 3-2-1 countdown, then the cube explodes (and re-forms)</small>
          </label>

          <label class="fullscreen-mode">
            <input v-model="store.fullscreenOnPlay" type="checkbox" />
            Fullscreen mode
            <small>When enabled, hitting Play makes the cube go fullscreen</small>
          </label>
      </details>
     

      <div v-if="current" class="now">
        <div class="now-stage">{{ stageTitle }} <small>- {{ current.step.label }}</small></div>
        <div class="moves">
          <span
            v-for="(m, i) in current.step.moves"
            :key="i"
            class="move"
            :class="{ done: pointerInStep > i, active: pointerInStep === i }"
          >{{ m }}</span>
        </div>
      </div>
      <p v-else-if="atEnd" class="status ok">Finished - the cube is solved.</p>

      <details>
          <summary>Tutor</summary>
          <TutorBox :context="tutorContext" />

          <h3>All stages</h3>
          <ol class="stages">
            <li v-for="(stage, si) in sol.stages" :key="stage.id" :class="{ active: current && current.stageIdx === si }">
              <div class="stage-title">
                {{ lesson(stage.id).title }}
                <small>{{ stage.moves.length ? `${stage.moves.length} moves` : 'already done' }}</small>
              </div>
              <div class="goal">{{ lesson(stage.id).goal }}</div>
              <ul v-if="stage.steps.length" class="steps">
                <li v-for="(step, ti) in stage.steps" :key="ti">
                  <span class="step-label">{{ step.label }}</span>
                  <code>{{ step.moves.join(' ') }}</code>
                </li>
              </ul>
            </li>
          </ol>
      </details>
    </template>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, ref, watch, onMounted } from 'vue';
import TutorBox from './TutorBox.vue';
import { lessonFor } from '../core/lessons.js';
import { cancelFinale, computeSolution, runFinale, solved, stepBack, stepForward, store, timeline, validity } from '../store.js';

const solving = ref(false);
const playing = ref(false);

onMounted(() => {
  function handler(e) {
    // ignore when typing or with modifier keys
    const tag = e.target?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.ctrlKey || e.metaKey || e.altKey) return;
    if (store.mode !== 'solve') return;
    if (e.code === 'Space') {
      e.preventDefault();
      stepForward();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      togglePlay();
    }
  }
  window.addEventListener('keydown', handler);
  onBeforeUnmount(() => window.removeEventListener('keydown', handler));
});
// the camera effect needs to know about playback, and the checkboxes are remembered
watch(playing, (value) => (store.playing = value), { immediate: true });
watch(
  () => store.drama,
  (on) => localStorage.setItem('rubiks-solver.drama', on ? '1' : '0'),
);
watch(
  () => store.finale,
  (on) => {
    localStorage.setItem('rubiks-solver.finale', on ? '1' : '0');
    if (!on) cancelFinale();
  },
);
const sol = computed(() => store.solution);
const total = computed(() => sol.value?.moves.length ?? 0);
const atEnd = computed(() => store.pointer >= total.value);
const busyOrStart = computed(() => store.busy || store.pointer === 0);
const lesson = (id) => lessonFor(store.n, id);

// Position inside the sequence of steps, derived from the global move pointer.
const current = computed(() => {
  if (!sol.value || atEnd.value) return null;
  const item = timeline()[store.pointer];
  const stage = sol.value.stages[item.stage];
  const step = stage.steps[item.step];
  return { stageIdx: item.stage, stage, step, stepIdx: item.step };
});
const pointerInStep = computed(() => (current.value ? timeline()[store.pointer].index : 0));
const stageTitle = computed(() => (current.value ? lesson(current.value.stage.id).title : ''));

const tutorContext = computed(() => {
  const stage = current.value?.stage ?? sol.value.stages[sol.value.stages.length - 1];
  const l = lesson(stage.id);
  return {
    n: store.n,
    stageTitle: l.title,
    goal: l.goal,
    concept: l.concept,
    stepLabel: current.value?.step.label ?? '',
    moves: current.value?.step.moves ?? [],
  };
});

async function solveNow() {
  solving.value = true;
  await computeSolution();
  solving.value = false;
}

async function play() {
  playing.value = true;
  while (playing.value && store.pointer < total.value) await stepForward();
  // reached the end by itself (not paused, not rewound): the grand finale
  const finishedByItself = playing.value && store.pointer >= total.value && solved.value;
  playing.value = false;
  if (finishedByItself && store.finale) runFinale();
}
async function quickSolve() {
  store.quickSolveRequest = false;
  if (playing.value) return;
  solving.value = true;
  const result = await computeSolution();
  solving.value = false;
  if (result) play();
}
watch(() => store.quickSolveRequest, (requested) => requested && quickSolve(), { immediate: true });
function togglePlay() {
  if (playing.value) playing.value = false;
  else play();
}
async function fastForward() {
  const old = store.speed;
  store.speed = 10;
  while (store.pointer < total.value) await stepForward();
  store.speed = old;
}
async function rewind() {
  playing.value = false;
  const old = store.speed;
  store.speed = 10;
  while (store.pointer > 0) await stepBack();
  store.speed = old;
}

onBeforeUnmount(() => {
  playing.value = false;
  store.playing = false;
  cancelFinale();
});
</script>

<style scoped>
.player {
  display: flex;
  gap: 6px;
  align-items: center;
  flex-wrap: wrap;
}
.player button {
  min-width: 38px;
}
.speed {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--muted);
  margin-left: auto;
}
.speed input {
  width: 90px;
}
.drama {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: 8px;
  font-size: 13px;
  cursor: pointer;
}
.drama input {
  padding: 0;
}
.drama small {
  color: var(--muted);
}
.bar {
  height: 4px;
  background: #272b36;
  border-radius: 2px;
  margin: 10px 0;
}
.bar div {
  height: 100%;
  background: var(--accent);
  border-radius: 2px;
}
.now {
  background: #1b2030;
  border-radius: 8px;
  padding: 10px;
  margin: 8px 0;
}
.now-stage {
  font-weight: 600;
}
.now-stage small {
  font-weight: 400;
  color: var(--muted);
}
.moves {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 8px;
}
.move {
  font-family: ui-monospace, Consolas, monospace;
  font-size: 18px;
  padding: 2px 8px;
  border-radius: 6px;
  background: #272b36;
  color: var(--muted);
}
.move.done {
  opacity: 0.4;
}
.move.active {
  background: var(--accent);
  color: #0b0d12;
  font-weight: 700;
}
.stages {
  padding-left: 18px;
}
.stages > li {
  margin-bottom: 10px;
  padding: 6px 8px;
  border-radius: 8px;
}
.stages > li.active {
  background: #1b2030;
}
.stage-title {
  font-weight: 600;
}
.stage-title small {
  color: var(--muted);
  font-weight: 400;
  margin-left: 6px;
}
.goal {
  font-size: 12px;
  color: var(--muted);
}
.steps {
  list-style: none;
  padding: 0;
  margin: 6px 0 0;
  font-size: 12px;
}
.steps li {
  display: flex;
  gap: 8px;
  justify-content: space-between;
}
.step-label {
  color: #c9d0e0;
}
</style>
