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
          <div class="viewport" ref="viewport" :style="{ height: viewportHeight + 'px' }">
          <CubeView
            ref="cube"
            :n="store.n"
            :state="cubeState"
            :paintable="store.editing"
            :locked="store.busy || store.exploding"
            :drama="store.drama && store.playing"
              :dramaSpeed="store.dramaSpeed"
              :rumble="store.countdown ? (4 - store.countdown) / 3 : 0"
              @paint="onPaint"
              @layerturn="(m) => turn(m)"
            />
            <div class="overlay">
              <button title="Reset camera" @click="cube?.resetView()">⟲ View</button>
              <span v-if="store.editing" class="badge">Painting: click stickers</span>
              <span v-else-if="solved" class="badge ok">Solved ✓</span>

              <div v-if="store.mode === 'setup'" class="validity" :class="{ ok: validity.ok }">
                <p v-if="validity.ok" class="status ok small">This position is valid and solvable.</p>
                <ul v-else class="status bad small">
                  <li v-for="e in validity.errors" :key="e">{{ e }}</li>
                </ul>
              </div>

              <button v-if="isFullscreen && showExitFullscreen" class="exit-fullscreen" @click="exitFullscreen()">
                Exit Fullscreen mode
              </button>
            </div>
            <div v-if="store.countdown" :key="store.countdown" class="countdown" aria-live="assertive">
              <span>{{ store.countdown }}</span>
            </div>

            <div class="resize-handle" @pointerdown.prevent="startResize"></div>
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
import { cubeState, paint, registerAnimator, registerExploder, solved, store, turn, validity } from './store.js';

const tabs = [
  { id: 'setup', label: 'Set up' },
  { id: 'solve', label: 'Solve' },
  { id: 'learn', label: 'Learn' },
  { id: 'practice', label: 'Practice' },
  { id: 'settings', label: 'Settings' },
];
const cube = ref(null);
const viewport = ref(null);
const viewportHeight = ref(Math.max(300, Math.min(window.innerHeight * 0.62, 640)));
const resizing = ref(false);
const isFullscreen = ref(false);
const showExitFullscreen = ref(false);

function onPaint(slot) {
  if (store.editing) paint(slot);
}

function startResize(e) {
  resizing.value = true;
  const startY = e.clientY;
  const startH = viewportHeight.value;
  function onMove(ev) {
    const dy = ev.clientY - startY;
    const newH = Math.max(300, startH + dy);
    viewportHeight.value = newH;
  }
  function onUp() {
    resizing.value = false;
    window.removeEventListener('pointermove', onMove);
    window.removeEventListener('pointerup', onUp);
  }
  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup', onUp);
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

  document.addEventListener('fullscreenchange', () => {
    isFullscreen.value = !!document.fullscreenElement;
    if (!isFullscreen.value) showExitFullscreen.value = false;
  });
});
onBeforeUnmount(() => window.removeEventListener('keydown', onKey));

// Watch for starting play to auto-enter fullscreen when enabled
watch(
  () => ({ playing: store.playing, mode: store.mode }),
  (val) => {
    if (val.mode === 'solve' && val.playing && store.fullscreenOnPlay && viewport.value?.requestFullscreen) {
      viewport.value.requestFullscreen().catch(() => {});
    }
  },
  { immediate: false },
);

// When a solution finishes (including explosion and countdown), show exit button after 2s if in fullscreen
const totalMoves = computed(() => store.solution?.moves?.length ?? 0);
watch(
  () => ({ ptr: store.pointer, sol: store.solution, exploding: store.exploding, countdown: store.countdown }),
  (s) => {
    const finished = s.sol && s.ptr >= (s.sol.moves?.length ?? 0) && !s.exploding && s.countdown === 0;
    if (finished && document.fullscreenElement === viewport.value) {
      setTimeout(() => (showExitFullscreen.value = true), 2000);
    }
  },
);

function exitFullscreen() {
  if (document.fullscreenElement) document.exitFullscreen();
}

</script>
