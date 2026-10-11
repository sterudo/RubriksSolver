<template>
  <section class="panel">
    <h2>Practice &amp; test</h2>

    <h3>Solve it yourself</h3>
    <p class="note">
      Scramble the cube and solve it with the move pad or keyboard (R L U D F B, hold Shift for the counter-clockwise
      turn). The checklist follows your progress.
    </p>
    <div class="row">
      <button class="primary" @click="startChallenge">{{ running || finished ? 'New challenge' : 'Start challenge' }}</button>
      <button :disabled="!running" @click="hint">Hint</button>
      <button :disabled="!running" @click="giveUp">Give up</button>
      <span v-if="running || finished" class="timer">⏱ {{ time }} · {{ store.moveCount }} moves · {{ hints }} hints</span>
    </div>

    <p v-if="finished" class="status ok">
      Solved in {{ time }} with {{ store.moveCount }} moves and {{ hints }} hint{{ hints === 1 ? '' : 's' }}. 🎉
    </p>

    <ul v-if="running || finished" class="check">
      <li v-for="p in stageProgress" :key="p.id" :class="{ done: p.done }">
        <span class="box">{{ p.done ? '✓' : '' }}</span>
        {{ lessonFor(store.n, p.id).title }}
      </li>
    </ul>

    <div v-if="hintText" class="hint-box">
      <div><b>{{ hintText.stage }}</b> – {{ hintText.goal }}</div>
      <div v-if="hintText.move" class="hint-move">
        Next move: <span class="move">{{ hintText.move }}</span>
        <small>({{ hintText.label }})</small>
      </div>
      <p class="note">{{ hintText.concept }}</p>
    </div>

    <h3>Notation quiz</h3>
    <div class="row">
      <button :class="{ primary: quizOn }" @click="toggleQuiz">{{ quizOn ? 'Stop quiz' : 'Start quiz' }}</button>
      <span v-if="quizOn">Score {{ score }} / {{ asked }} · streak {{ streak }}</span>
    </div>
    <div v-if="quizOn" class="quiz">
      <div class="target">Perform <span class="move big">{{ target }}</span></div>
      <p class="note">{{ quizFeedback }}</p>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import { invertAlg, movesFor } from '../core/cube.js';
import { lessonFor } from '../core/lessons.js';
import { solve } from '../core/solver.js';
import { cubeState, onMove, scramble, solved, stageProgress, store, turn } from '../store.js';

const running = ref(false);
const finished = ref(false);
const seconds = ref(0);
const hints = ref(0);
const hintText = ref(null);
let timer = 0;

const time = computed(() => `${Math.floor(seconds.value / 60)}:${String(seconds.value % 60).padStart(2, '0')}`);

async function startChallenge() {
  quizOff();
  await scramble();
  running.value = true;
  finished.value = false;
  seconds.value = 0;
  hints.value = 0;
  hintText.value = null;
  clearInterval(timer);
  timer = setInterval(() => seconds.value++, 1000);
}

function stop() {
  clearInterval(timer);
  running.value = false;
}

function giveUp() {
  stop();
  hintText.value = null;
}

function hint() {
  const res = solve(cubeState.value, store.n);
  if (!res.ok) {
    hintText.value = { stage: 'Hint unavailable', goal: res.error, concept: '', move: '', label: '' };
    return;
  }
  const stage = res.stages.find((s) => s.moves.length);
  if (!stage) return;
  hints.value++;
  const lesson = lessonFor(store.n, stage.id);
  hintText.value = {
    stage: lesson.title,
    goal: lesson.goal,
    concept: lesson.concept,
    move: stage.steps[0].moves[0],
    label: stage.steps[0].label,
  };
}

watch(solved, (isSolved) => {
  if (isSolved && running.value && store.moveCount > 0) {
    stop();
    finished.value = true;
    hintText.value = null;
  }
});

// Notation quiz: ask for a move, check it, then take it back so the cube stays put.
const quizOn = ref(false);
const target = ref('');
const score = ref(0);
const asked = ref(0);
const streak = ref(0);
const quizFeedback = ref('Use the move pad or keyboard.');
let undoing = false;
let unsubscribe = null;

function nextTarget() {
  const all = movesFor(3);
  target.value = all[Math.floor(Math.random() * all.length)];
}

function toggleQuiz() {
  if (quizOn.value) {
    quizOff();
    return;
  }
  stop();
  quizOn.value = true;
  score.value = asked.value = streak.value = 0;
  quizFeedback.value = 'Use the move pad or keyboard.';
  nextTarget();
  unsubscribe = onMove(async (move) => {
    if (undoing) return;
    asked.value++;
    if (move === target.value) {
      score.value++;
      streak.value++;
      quizFeedback.value = 'Correct!';
    } else {
      streak.value = 0;
      quizFeedback.value = `That was ${move}; ${target.value} was asked. Look at which face turns and which way.`;
    }
    undoing = true;
    await turn(invertAlg(move.split(' ')).join(' '));
    undoing = false;
    nextTarget();
  });
}

function quizOff() {
  quizOn.value = false;
  unsubscribe?.();
  unsubscribe = null;
}

onBeforeUnmount(() => {
  clearInterval(timer);
  quizOff();
});
</script>

<style scoped>
.timer {
  margin-left: auto;
  color: var(--muted);
  font-size: 13px;
}
.check {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 4px;
}
.check li {
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--muted);
}
.check li.done {
  color: var(--ok);
}
.box {
  width: 18px;
  height: 18px;
  border: 1px solid currentColor;
  border-radius: 4px;
  display: grid;
  place-items: center;
  font-size: 12px;
}
.hint-box {
  background: #1b2030;
  border-radius: 8px;
  padding: 10px;
  margin: 8px 0;
}
.hint-move {
  margin: 6px 0;
}
.move {
  font-family: ui-monospace, Consolas, monospace;
  background: var(--accent);
  color: #0b0d12;
  padding: 2px 8px;
  border-radius: 6px;
  font-weight: 700;
}
.move.big {
  font-size: 24px;
}
.target {
  font-size: 18px;
}
</style>
