<template>
  <div class="app">
    <header>
      <h1>🧊 Rubik's Solver</h1>
      <nav>
        <button v-for="t in tabs" :key="t.id" :class="{ on: store.mode === t.id }" @click="store.mode = t.id">
          {{ t.label }}
        </button>
      </nav>
    </header>

    <main>
      <div class="stage">
        <div class="viewport">
          <CubeView
            ref="cube"
            :n="store.n"
            :state="cubeState"
            :paintable="store.editing"
            :locked="store.busy || store.exploding"
            :drama="store.drama && store.playing"
            :rumble="store.countdown ? (4 - store.countdown) / 3 : 0"
            @paint="onPaint"
            @layerturn="(m) => turn(m)"
          />
          <div class="overlay">
            <button title="Reset camera" @click="cube?.resetView()">⟲ View</button>
            <span v-if="store.editing" class="badge">Painting: click stickers</span>
            <span v-else-if="solved" class="badge ok">Solved ✓</span>
          </div>
          <div v-if="store.countdown" :key="store.countdown" class="countdown" aria-live="assertive">
            <span>{{ store.countdown }}</span>
          </div>
        </div>
        <MovePad />
        <SaveLoad />
        <p class="keys">
          Drag to look around · wheel over a tile moves it up/down (Alt+wheel: left/right) · wheel elsewhere zooms ·
          keys R L U D F B (Shift = counter-clockwise).
        </p>
      </div>

      <aside>
        <SetupPanel v-if="store.mode === 'setup'" />
        <SolvePanel v-else-if="store.mode === 'solve'" />
        <LearnPanel v-else-if="store.mode === 'learn'" />
        <SettingsPanel v-else-if="store.mode === 'settings'" />
        <PracticePanel v-else />
      </aside>
    </main>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import CubeView from './components/CubeView.vue';
import LearnPanel from './components/LearnPanel.vue';
import MovePad from './components/MovePad.vue';
import PracticePanel from './components/PracticePanel.vue';
import SaveLoad from './components/SaveLoad.vue';
import SetupPanel from './components/SetupPanel.vue';
import SettingsPanel from './components/SettingsPanel.vue';
import SolvePanel from './components/SolvePanel.vue';
import { cubeState, paint, registerAnimator, registerExploder, solved, store, turn } from './store.js';

const tabs = [
  { id: 'setup', label: 'Set up' },
  { id: 'solve', label: 'Solve' },
  { id: 'learn', label: 'Learn' },
  { id: 'practice', label: 'Practice' },
  { id: 'settings', label: 'Settings' },
];
const cube = ref(null);

function onPaint(slot) {
  if (store.editing) paint(slot);
}

function onKey(e) {
  const tag = e.target?.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.ctrlKey || e.metaKey || e.altKey) return;
  const face = e.key.toUpperCase();
  if (!'UDLRFB'.includes(face) || face.length !== 1 || store.editing) return;
  e.preventDefault();
  turn(e.shiftKey ? `${face}'` : face);
}

onMounted(() => {
  registerAnimator((move, next, speed) => cube.value.animate(move, next, speed));
  registerExploder(() => cube.value.explode());
  window.addEventListener('keydown', onKey);
});
onBeforeUnmount(() => window.removeEventListener('keydown', onKey));
</script>
