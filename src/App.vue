<template>
  <div class="app">
    <header ref="headerEl" @keydown.esc="closeMobileMenu(true)">
      <h1>
        <a class="logo" href="https://github.com/sterudo/RubriksSolver" target="_blank" rel="noopener" title="Open the repository on GitHub">🧊 Rubik's Solver</a>
      </h1>
      <button class="quick-solve" :disabled="!canQuickSolve" title="Fullscreen, full drama, solve and play"
        @click="quickSolve(); closeMobileMenu()">
        ⚡ Quick Solve
      </button>
      <button ref="menuToggle" class="menu-toggle" aria-label="Toggle navigation"
        aria-controls="header-actions" :aria-expanded="mobileMenuOpen" @click="mobileMenuOpen = !mobileMenuOpen">
        <span aria-hidden="true">&#9776;</span>
      </button>
      <div id="header-actions" class="header-actions" :class="{ open: mobileMenuOpen }">
        <nav aria-label="Main navigation">
          <button v-for="t in tabs" :key="t.id" :class="{ on: store.mode === t.id }"
            @click="store.mode = t.id; closeMobileMenu()">
            {{ t.label }}
          </button>
        </nav>
      </div>
    </header>

    <main ref="mainEl" :style="leftWidth ? { '--left-w': leftWidth + 'px' } : null">
      <div class="stage">
          <div class="viewport" ref="viewport" :style="{
            height: viewportHeight + 'px',
            '--mobile-header-height': mobileHeaderHeight + 'px',
            '--mobile-bar-height': mobileBarHeight + 'px',
            '--touch-frame-height': mobileFrameHeight ? mobileFrameHeight + 'px' : null,
          }">
          <CubeView
            ref="cube"
            :n="store.n"
            :state="cubeState"
            :paintable="store.editing"
            :locked="store.busy || store.exploding"
            :drama="store.drama && store.playing"
            :dramaSpeed="store.dramaSpeed"
            :rumble="store.countdown ? (4 - store.countdown) / 3 : 0"
            :hoverColors="hoverColors"
            :touchMode="touchMode"
            :touchLocked="store.playing || store.solving || store.quickSolveRequest || mobilePending"
            @paint="onPaint"
            @layerturn="(m, options) => turn(m, options)"
            @hovering="(v) => (hoveringSticker = v)"
            @zoom="(value) => (zoom = value)"
          />
          <div class="overlay">
            <div class="view-controls">
              <button class="reset-view" title="Reset camera" @click="cube?.resetView()">⟲ View</button>
              <button class="touch-mode-toggle" :aria-pressed="touchMode === 'move'"
                :aria-label="`Move swipe mode ${touchMode === 'move' ? 'on' : 'off'}`"
                @click="setTouchMode(touchMode === 'rotate' ? 'move' : 'rotate')">
                {{ touchMode === 'rotate' ? 'Rotate' : 'Move' }}
              </button>
            </div>
            <label class="zoom-control">
              Zoom
              <input type="range" min="0" max="100" step="0.1" :value="zoom" aria-label="Cube zoom"
                @input="cube?.setZoom(Number($event.target.value))" />
            </label>
            <span v-if="store.editing" class="badge">Painting: click stickers</span>
            <span v-else-if="solved" class="badge ok">Solved ✓</span>
            <span v-if="hoverColors && !hoveringSticker" class="brush-chip" title="Last assigned colour">
              <i :style="{ background: FACE_COLOR_HEX[store.brush] }"></i>
            </span>

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
            <label class="frame-height-control">
              Height
              <input type="range" :min="mobileMinHeight" :max="mobileMaxHeight" step="1"
                :value="mobileFrameHeight ?? mobileMaxHeight" aria-label="Cube frame height"
                @input="setMobileFrameHeight(Number($event.target.value))" />
            </label>
            <div ref="mobileBar" class="mobile-controls" role="toolbar" aria-label="Cube touch controls">
              <button :disabled="mobileBusy" @click="mobilePosition('reset')">Reset</button>
              <button :disabled="mobileBusy" @click="mobilePosition('scramble')">Scramble</button>
              <button :disabled="!canMobileStep" title="Compute a solution if needed and perform its next move"
                @click="mobileSolve">Solve</button>
              <button :aria-pressed="touchMode === 'rotate'" :class="{ on: touchMode === 'rotate' }"
                @click="setTouchMode('rotate')">Rotate</button>
              <button :aria-pressed="touchMode === 'move'" :class="{ on: touchMode === 'move' }"
                @click="setTouchMode('move')">Move</button>
              <span class="mobile-hint" aria-live="polite">{{ touchMode === 'rotate'
                ? 'Swipe to rotate the view; pinch to zoom.'
                : 'Swipe a sticker row or column to turn it.' }}</span>
              <span v-if="mobileError" class="status bad" role="alert">{{ mobileError }}</span>
            </div>
          </div>
        <p class="keys">
          Drag to look around · wheel over a tile moves it up/down (Alt+wheel: left/right) · wheel elsewhere zooms ·
          keys R L U D F B (Shift = counter-clockwise).
        </p>  
        <MovePad />
        <SaveLoad />
        <p v-if="gamepad.connected" class="note">
          Gamepad: {{ gamepad.enabled ? gamepad.draft.name : 'disabled' }}
          <button @click="store.mode = 'settings'">Configure</button>
        </p>
        <p v-if="gamepad.error" class="status bad" role="alert">{{ gamepad.error }}</p>
        <p v-if="gamepad.message && gamepad.connected" class="note" role="status">{{ gamepad.message }}</p>
        
      </div>

      <div
        class="col-divider"
        :class="{ dragging: draggingDivider }"
        role="separator"
        aria-orientation="vertical"
        title="Drag to resize"
        @pointerdown.prevent="startDividerDrag"
      ></div>

      <aside>
        <SetupPanel v-if="store.mode === 'setup'" />
        <SolvePanel v-else-if="store.mode === 'solve'" />
        <LearnPanel v-else-if="store.mode === 'learn'" />
        <SettingsPanel v-else-if="store.mode === 'settings'" />
        <AboutPanel v-else-if="store.mode === 'about'" />
        <PracticePanel v-else />
      </aside>
    </main>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch, computed } from 'vue';
import CubeView from './components/CubeView.vue';
import AboutPanel from './components/AboutPanel.vue';
import LearnPanel from './components/LearnPanel.vue';
import MovePad from './components/MovePad.vue';
import PracticePanel from './components/PracticePanel.vue';
import SaveLoad from './components/SaveLoad.vue';
import SetupPanel from './components/SetupPanel.vue';
import SettingsPanel from './components/SettingsPanel.vue';
import SolvePanel from './components/SolvePanel.vue';
import { computeSolution, cubeState, paint, registerAnimator, registerExploder, reset, scramble,
  solved, stepForward, store, turn, undo, validity } from './store.js';
import { FACE_COLOR_HEX } from './core/cube.js';
import { CONTINUOUS_ACTIONS } from './core/gamepad.js';
import { gamepad, startGamepad } from './gamepad.js';

const tabs = [
  { id: 'setup', label: 'Set up' },
  { id: 'solve', label: 'Solve' },
  { id: 'learn', label: 'Learn' },
  { id: 'practice', label: 'Practice' },
  { id: 'settings', label: 'Settings' },
  { id: 'about', label: 'About' },
];
const cube = ref(null);
const zoom = ref(50);
const headerEl = ref(null);
const menuToggle = ref(null);
const mobileMenuOpen = ref(false);
function closeMobileMenu(restoreFocus = false) {
  if (!mobileMenuOpen.value) return;
  mobileMenuOpen.value = false;
  if (restoreFocus) menuToggle.value?.focus();
}
function onOutsideMenu(event) {
  if (!headerEl.value?.contains(event.target)) closeMobileMenu();
}
const viewport = ref(null);
const viewportHeight = ref(Math.max(300, Math.min(window.innerHeight * 0.62, 640)));
const mobileBar = ref(null);
const mobileHeaderHeight = ref(65);
const mobileBarHeight = ref(90);
const mobileFrameHeight = ref(null);
const windowHeight = ref(window.innerHeight);
const mobileMaxHeight = computed(() => Math.max(1,
  Math.floor(windowHeight.value - mobileHeaderHeight.value - mobileBarHeight.value)));
const mobileMinHeight = computed(() => Math.min(250, mobileMaxHeight.value));
function setMobileFrameHeight(height) {
  mobileFrameHeight.value = Math.min(mobileMaxHeight.value, Math.max(mobileMinHeight.value, height));
}
function onWindowResize() {
  windowHeight.value = window.innerHeight;
}
watch(mobileMaxHeight, () => {
  if (mobileFrameHeight.value !== null) setMobileFrameHeight(mobileFrameHeight.value);
});
let mobileLayoutObserver;
const resizing = ref(false);
const isFullscreen = ref(false);
const showExitFullscreen = ref(false);
const hoveringSticker = ref(false);
const touchMode = ref('rotate');
const mobilePending = ref(false);
const mobileError = ref('');
const mobileBusy = computed(() => mobilePending.value || store.busy || store.playing || store.solving
  || store.exploding || store.quickSolveRequest);
const canMobileStep = computed(() => !mobileBusy.value && validity.value.ok
  && (!store.solution || store.pointer < store.solution.moves.length));
const hoverColors = computed(() => store.mode === 'setup' && store.showAllColorsOnHover);

function setTouchMode(mode) {
  touchMode.value = mode;
  store.editing = false;
}

async function mobilePosition(action) {
  if (mobileBusy.value) return;
  mobilePending.value = true;
  mobileError.value = '';
  store.editing = false;
  try {
    await (action === 'reset' ? reset() : scramble());
  } catch (e) {
    mobileError.value = `Could not ${action}: ${e.message}`;
  } finally {
    mobilePending.value = false;
  }
}

async function nextComputedMove() {
  if (!validity.value.ok) throw new Error('Cannot solve this cube: check the position in Set up.');
  if (!store.solution) {
    const result = await computeSolution();
    if (!result) throw new Error(store.solveError || 'Could not compute a solution.');
  }
  store.mode = 'solve';
  await stepForward();
}

async function mobileSolve() {
  if (!canMobileStep.value) return;
  mobilePending.value = true;
  mobileError.value = '';
  store.editing = false;
  try {
    await nextComputedMove();
  } catch (e) {
    mobileError.value = e.message;
  } finally {
    mobilePending.value = false;
  }
}

function onPaint(slot, color) {
  if (!store.editing) return;
  if (color === undefined) return paint(slot);
  store.brush = color;
  paint(slot, color);
}

const MIN_LEFT = 300;
const MIN_RIGHT = 340;
const DIVIDER_W = 14;
const mainEl = ref(null);
const leftWidth = ref(0);
const draggingDivider = ref(false);

function startDividerDrag(e) {
  const main = mainEl.value;
  const stageEl = main.querySelector('.stage');
  const startX = e.clientX;
  const startW = stageEl.getBoundingClientRect().width;
  const cs = getComputedStyle(main);
  const maxW = main.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) - DIVIDER_W - MIN_RIGHT;
  draggingDivider.value = true;
  function onMove(ev) {
    leftWidth.value = Math.round(Math.max(MIN_LEFT, Math.min(maxW, startW + ev.clientX - startX)));
  }
  function onUp() {
    draggingDivider.value = false;
    window.removeEventListener('pointermove', onMove);
    window.removeEventListener('pointerup', onUp);
  }
  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup', onUp);
}

const canQuickSolve = computed(
  () => validity.value.ok && !store.playing && !store.busy && !store.solving && !store.exploding && !store.countdown,
);

function quickSolve(fullscreen = true) {
  if (!canQuickSolve.value) return;
  store.editing = false;
  store.drama = true;
  store.finale = true;
  store.speed = 0.5;
  store.dramaSpeed = 1.2;
  store.fullscreenOnPlay = fullscreen;
  // must run inside the click handler to count as a user gesture
  if (fullscreen) viewport.value?.requestFullscreen?.().catch(() => {});
  store.mode = 'solve';
  store.quickSolveRequest = true;
}

let stopGamepad;
let gamepadPending = false;
async function onGamepadAction(action, dt) {
  if (CONTINUOUS_ACTIONS.has(action)) {
    if (!store.exploding) cube.value?.gamepadView(action, dt);
    return;
  }
  if (gamepadPending || store.busy || store.playing || store.solving || store.exploding || store.editing
    || store.quickSolveRequest) return;
  gamepadPending = true;
  try {
    if (action === 'quick-solve') {
      if (canQuickSolve.value) {
        quickSolve(false);
        gamepad.message = 'Quick Solve started. For fullscreen, use the mouse Quick Solve button.';
      } else gamepad.error = 'Quick Solve requires a valid cube position.';
    } else if (action === 'next-step') {
      await nextComputedMove();
    } else if (action === 'undo') await undo();
    else if (action === 'scramble') await scramble();
    else if (action === 'reset') await reset();
    else {
      const [face, direction] = action.split('-');
      const suffix = direction === 'ccw' ? "'" : direction === 'double' ? '2' : '';
      await turn(cube.value.viewRelativeMove(face, suffix));
    }
  } catch (e) {
    gamepad.error = `Gamepad action failed: ${e.message}`;
  } finally {
    gamepadPending = false;
  }
}

function startResize(e) {
  resizing.value = true;
  const startY = e.clientY;
  const startH = viewport.value.getBoundingClientRect().height;
  const mobile = window.matchMedia('(hover: none) and (pointer: coarse), (max-width: 600px)').matches;
  function onMove(ev) {
    const dy = ev.clientY - startY;
    if (mobile) setMobileFrameHeight(startH + dy);
    else viewportHeight.value = Math.max(300, startH + dy);
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
  mobileLayoutObserver = new ResizeObserver(() => {
    mobileHeaderHeight.value = headerEl.value.getBoundingClientRect().height;
    mobileBarHeight.value = mobileBar.value.getBoundingClientRect().height;
  });
  mobileLayoutObserver.observe(headerEl.value);
  mobileLayoutObserver.observe(mobileBar.value);
  window.addEventListener('resize', onWindowResize);
  registerAnimator((move, next, speed) => cube.value.animate(move, next, speed));
  registerExploder(() => cube.value.explode());
  window.addEventListener('keydown', onKey);
  document.addEventListener('pointerdown', onOutsideMenu);
  stopGamepad = startGamepad(onGamepadAction);

  document.addEventListener('fullscreenchange', () => {
    isFullscreen.value = !!document.fullscreenElement;
    if (!isFullscreen.value) showExitFullscreen.value = false;
  });
});


onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey);
  document.removeEventListener('pointerdown', onOutsideMenu);
  stopGamepad?.();
  mobileLayoutObserver?.disconnect();
  window.removeEventListener('resize', onWindowResize);
});

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
