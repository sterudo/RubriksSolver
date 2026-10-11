<template>
  <div class="photo-import">
    <p class="hint">
      Photo 1: look straight at one <b>corner</b> of the cube. Photo 2: flip the cube over like a pancake (about the
      photo's horizontal axis) so the <b>opposite corner</b> faces the camera. Drag the 7 handles so the lines follow the
      cube outline – the dots show where colours are read.
    </p>
    <div class="photos">
      <div v-for="p in 2" :key="p" class="photo">
        <label class="file">
          <span>{{ p === 1 ? 'Photo 1 – first corner' : 'Photo 2 – opposite corner' }}</span>
          <input type="file" accept="image/*" @change="(e) => load(p - 1, e)" />
        </label>
        <canvas
          :ref="(el) => (canvases[p - 1] = el)"
          width="420"
          height="420"
          @pointerdown="(e) => down(p - 1, e)"
          @pointermove="(e) => move(p - 1, e)"
          @pointerup="up"
          @pointerleave="up"
        ></canvas>
        <div class="ai-row">
          <button type="button" :disabled="!images[p - 1] || ai[p - 1].busy" @click="alignPhoto(p - 1)">
            {{ ai[p - 1].busy ? 'Aligning…' : '✨ Align with AI' }}
          </button>
          <span v-if="ai[p - 1].text" class="ai-msg" :class="ai[p - 1].state">{{ ai[p - 1].text }}</span>
        </div>
      </div>
    </div>
    <label class="wb">
      <input v-model="autoAlign" type="checkbox" />
      <span>
        Align the outline automatically with AI after upload
        <small>(local model first, Gemini as fallback – configure them in Settings)</small>
      </span>
    </label>
    <label class="wb">
      <input v-model="whiteBalance" type="checkbox" />
      <span>
        White balance – if a white tile is found in a photo, use it as that photo's white point
        <small>(helps with warm/cool lighting and differently lit photos)</small>
      </span>
    </label>
    <div class="actions">
      <button class="primary" :disabled="!ready" @click="read">Read colours</button>
      <span v-if="message" class="msg" :class="{ warn }">{{ message }}</span>
    </div>

    <div v-if="hue" class="hue-box">
      <div class="hue-head">
        <b>Red / orange / yellow cutoffs</b>
        <button type="button" :disabled="!manual" @click="autoCutoffs">Auto</button>
      </div>
      <canvas ref="hueCanvas" class="hue-strip" width="480" height="76"></canvas>
      <label class="slider">
        <span>Red | Orange</span>
        <input v-model.number="cutA" type="range" :min="HUE_RANGE[0]" :max="HUE_RANGE[1]" step="1" @input="onCut('a')" />
        <output>{{ cutA }}°</output>
      </label>
      <label class="slider">
        <span>Orange | Yellow</span>
        <input v-model.number="cutB" type="range" :min="HUE_RANGE[0]" :max="HUE_RANGE[1]" step="1" @input="onCut('b')" />
        <output>{{ cutB }}°</output>
      </label>
      <p class="note">
        Stickers with a hue below the first cutoff read as red, between the two as orange, above the second as yellow.
        Dots are the warm stickers; triangles are the centre stickers. The cube updates as you drag.
      </p>
    </div>
    <p v-else-if="samples" class="note">
      Red/orange/yellow cutoffs are not available here (they need three warm centre colours on a 3×3, or 12 warm
      stickers on a 2×2).
    </p>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, reactive, ref, watch } from 'vue';
import { aiSettings } from '../aiSettings.js';
import { averageColor, defaultHandles, HUE_RANGE, samplePoints, stateFromSamples } from '../core/photo.js';
import { alignWithAI, hexagonFromBox, refineBox } from '../core/vision.js';

const props = defineProps({ n: Number });
const emit = defineEmits(['import']);

const canvases = [null, null];
const images = reactive([null, null]);
const handles = reactive([defaultHandles(420, 420), defaultHandles(420, 420)]);
const message = ref('');
const warn = ref(false);
const autoAlign = ref(localStorage.getItem('rubiks-solver.autoAlign') !== '0'); // on unless switched off
watch(autoAlign, (on) => localStorage.setItem('rubiks-solver.autoAlign', on ? '1' : '0'));
const ai = reactive([
  { busy: false, state: '', text: '' },
  { busy: false, state: '', text: '' },
]);
const aiControllers = [null, null];
const whiteBalance = ref(localStorage.getItem('rubiks-solver.whiteBalance') === '1');
const samples = ref(null); // colours measured by the last "Read colours", re-classified live
const hue = ref(null); // hue info of the last classification (null = split not applicable)
const manual = ref(false); // true once a slider has been moved
const cutA = ref(0);
const cutB = ref(0);
const hueCanvas = ref(null);
const drag = ref(null);
const ready = computed(() => images[0] && images[1]);

onMounted(() => [0, 1].forEach(draw));
watch(
  () => props.n,
  () => {
    [0, 1].forEach(draw);
    samples.value = null; // measurements belong to the previous cube size
    hue.value = null;
    manual.value = false;
  },
);

function load(i, e) {
  const file = e.target.files?.[0];
  if (!file) return;
  const img = new Image();
  img.onload = async () => {
    images[i] = img;
    handles[i] = defaultHandles(420, 420); // a new photo starts from the default outline
    ai[i].state = '';
    ai[i].text = '';
    await nextTick();
    draw(i);
    if (autoAlign.value) alignPhoto(i);
  };
  img.src = URL.createObjectURL(file);
}

// Downscaled JPEG of the photo for the vision model, plus its pixels for edge refinement.
function preparePhoto(img) {
  const scale = Math.min(1, 768 / Math.max(img.width, img.height));
  const c = document.createElement('canvas');
  c.width = Math.round(img.width * scale);
  c.height = Math.round(img.height * scale);
  const ctx = c.getContext('2d');
  ctx.drawImage(img, 0, 0, c.width, c.height);
  return { dataUrl: c.toDataURL('image/jpeg', 0.85), pixels: ctx.getImageData(0, 0, c.width, c.height) };
}

async function alignPhoto(i) {
  const img = images[i];
  if (!img) return;
  aiControllers[i]?.abort();
  const controller = new AbortController();
  aiControllers[i] = controller;
  ai[i].busy = true;
  ai[i].state = '';
  ai[i].text = 'Asking the AI to find the cube…';
  try {
    const { dataUrl, pixels } = preparePhoto(img);
    const result = await alignWithAI({ ...aiSettings }, dataUrl, controller.signal);
    if (images[i] !== img) return; // a newer photo replaced this one meanwhile
    // Snap the AI's rough box to the real silhouette when the background allows it.
    const refined = refineBox(pixels, result.box);
    const handlesNorm = refined ? hexagonFromBox(refined) : result.handles;
    const { s, ox, oy } = fit(img);
    handlesNorm.forEach(([x, y], k) => {
      handles[i][k] = [ox + (x / 1000) * img.width * s, oy + (y / 1000) * img.height * s];
    });
    const who = result.source === 'local' ? 'local model' : 'Gemini';
    const fellBack = result.notes.length ? ` (${result.notes[0]})` : '';
    ai[i].state = 'ok';
    ai[i].text =
      `Aligned by ${who} ${result.model}${fellBack}` +
      (refined ? ', snapped to the cube edges.' : ' (background too busy to snap to the edges).') +
      ' The outline is a hexagon fitted to the cube – fine-tune the handles if needed.';
    draw(i);
  } catch (e) {
    if (e.kind === 'abort' || controller.signal.aborted) return;
    ai[i].state = 'bad';
    ai[i].text = `${e.message} – drag the handles by hand.`;
  } finally {
    if (aiControllers[i] === controller) ai[i].busy = false;
  }
}

// Image is drawn "contain"-fitted into the square canvas.
function fit(img) {
  const s = Math.min(420 / img.width, 420 / img.height);
  return { s, ox: (420 - img.width * s) / 2, oy: (420 - img.height * s) / 2 };
}

function draw(i) {
  const cv = canvases[i];
  if (!cv) return;
  const ctx = cv.getContext('2d');
  ctx.clearRect(0, 0, 420, 420);
  ctx.fillStyle = '#0f1116';
  ctx.fillRect(0, 0, 420, 420);
  const img = images[i];
  if (img) {
    const { s, ox, oy } = fit(img);
    ctx.drawImage(img, ox, oy, img.width * s, img.height * s);
  }
  const h = handles[i];
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#ffffff';
  ctx.beginPath();
  [1, 2, 3, 4, 5, 6].forEach((k, idx) => (idx ? ctx.lineTo(h[k][0], h[k][1]) : ctx.moveTo(h[k][0], h[k][1])));
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  [2, 4, 6].forEach((k) => {
    ctx.moveTo(h[0][0], h[0][1]);
    ctx.lineTo(h[k][0], h[k][1]);
  });
  ctx.stroke();
  ctx.fillStyle = '#ff2d55';
  for (const pt of samplePoints(i, h, props.n)) {
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = '#00e5ff';
  h.forEach(([x, y]) => {
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fill();
  });
}

const local = (i, e) => {
  const r = canvases[i].getBoundingClientRect();
  return [((e.clientX - r.left) / r.width) * 420, ((e.clientY - r.top) / r.height) * 420];
};
function down(i, e) {
  const [x, y] = local(i, e);
  let best = -1;
  let bd = 18;
  handles[i].forEach(([hx, hy], k) => {
    const d = Math.hypot(hx - x, hy - y);
    if (d < bd) {
      bd = d;
      best = k;
    }
  });
  if (best >= 0) drag.value = { i, k: best };
}
function move(i, e) {
  if (!drag.value || drag.value.i !== i) return;
  handles[i][drag.value.k] = local(i, e);
  draw(i);
}
const up = () => (drag.value = null);

function read() {
  const collected = [];
  for (let i = 0; i < 2; i++) {
    // Read from a clean copy of the photo so the overlay does not pollute the colours.
    const clean = document.createElement('canvas');
    clean.width = clean.height = 420;
    const cctx = clean.getContext('2d');
    const { s, ox, oy } = fit(images[i]);
    cctx.fillStyle = '#000';
    cctx.fillRect(0, 0, 420, 420);
    cctx.drawImage(images[i], ox, oy, images[i].width * s, images[i].height * s);
    const imageData = cctx.getImageData(0, 0, 420, 420);
    const radius = (420 * 0.38) / props.n / 5;
    for (const pt of samplePoints(i, handles[i], props.n)) {
      collected.push({ slot: pt.slot, rgb: averageColor(imageData, pt.x, pt.y, radius), photo: i });
    }
  }
  samples.value = collected;
  manual.value = false; // new measurements: start from automatic cutoffs again
  classifyNow();
}

// Re-run the classification on the stored measurements (no re-sampling needed).
function classifyNow() {
  const res = stateFromSamples(props.n, samples.value, {
    whiteBalance: whiteBalance.value,
    cutoffs: manual.value ? [cutA.value, cutB.value] : null,
  });
  hue.value = res.hue;
  if (res.hue && !manual.value) {
    cutA.value = Math.round(res.hue.auto[0]);
    cutB.value = Math.round(res.hue.auto[1]);
  }
  const missing = res.whiteBalance.map((r, i) => (r === 'no-white' ? i + 1 : 0)).filter(Boolean);
  const notes = [];
  if (whiteBalance.value) {
    notes.push(
      missing.length
        ? `No white tile found in photo ${missing.join(' and ')} – colours used as they are there.`
        : 'White balance applied to both photos.',
    );
  }
  warn.value = res.warnings.length > 0 || missing.length > 0;
  message.value = [res.warnings[0] || 'Colours imported – check them in the cube net and fix any mistakes.', ...notes].join(' ');
  emit('import', res.state);
}

function onCut(which) {
  // keep the two cutoffs in order: red | orange | yellow
  if (which === 'a') cutA.value = Math.min(cutA.value, cutB.value - 1);
  else cutB.value = Math.max(cutB.value, cutA.value + 1);
  manual.value = true;
  classifyNow();
}

function autoCutoffs() {
  manual.value = false;
  classifyNow();
}

watch(whiteBalance, (on) => {
  localStorage.setItem('rubiks-solver.whiteBalance', on ? '1' : '0');
  if (samples.value) classifyNow();
});

// --- hue strip -------------------------------------------------------------------
function drawHue() {
  const cv = hueCanvas.value;
  if (!cv || !hue.value) return;
  const ctx = cv.getContext('2d');
  const [lo, hi] = HUE_RANGE;
  const W = cv.width;
  const H = cv.height;
  const x = (h) => ((h - lo) / (hi - lo)) * W;
  for (let px = 0; px < W; px++) {
    const h = lo + (px / W) * (hi - lo);
    ctx.fillStyle = `hsl(${(h + 360) % 360} 70% 38%)`;
    ctx.fillRect(px, 0, 1, H);
  }
  // zone labels between the cutoffs
  ctx.font = '12px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  [['red', lo, cutA.value], ['orange', cutA.value, cutB.value], ['yellow', cutB.value, hi]].forEach(([label, a, b]) => {
    ctx.fillText(label, (x(a) + x(b)) / 2, 13);
  });
  // warm stickers as dots
  hue.value.points.forEach((h, i) => {
    ctx.beginPath();
    ctx.arc(x(h), 26 + ((i * 7) % 30), 3.2, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.6)';
    ctx.stroke();
  });
  // centre stickers as triangles
  hue.value.anchors.forEach((h) => {
    ctx.beginPath();
    ctx.moveTo(x(h), H - 14);
    ctx.lineTo(x(h) - 6, H - 2);
    ctx.lineTo(x(h) + 6, H - 2);
    ctx.closePath();
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.stroke();
  });
  // cutoff lines
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#0b0d12';
  [cutA.value, cutB.value].forEach((c) => {
    ctx.beginPath();
    ctx.moveTo(x(c), 0);
    ctx.lineTo(x(c), H);
    ctx.stroke();
  });
  ctx.lineWidth = 1;
}

watch([hue, cutA, cutB], drawHue, { flush: 'post' });
</script>

<style scoped>
.hint {
  font-size: 13px;
  color: var(--muted);
  margin: 0 0 8px;
}
.photos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 10px;
}
canvas {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  touch-action: none;
  cursor: grab;
  background: #0f1116;
}
.file span {
  display: block;
  font-size: 12px;
  margin-bottom: 4px;
}
.file input {
  font-size: 12px;
  max-width: 100%;
}
.actions {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.hue-box {
  margin-top: 12px;
  padding: 10px;
  background: #1b2030;
  border-radius: 8px;
}
.hue-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}
.hue-strip {
  width: 100%;
  height: auto;
  aspect-ratio: 480 / 76;
  border-radius: 6px;
  cursor: default;
}
.slider {
  display: grid;
  grid-template-columns: 110px 1fr 44px;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
  font-size: 13px;
}
.slider output {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
.slider input {
  padding: 0;
}
.ai-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  margin-top: 6px;
}
.ai-msg {
  font-size: 12px;
  color: var(--muted);
}
.ai-msg.ok {
  color: var(--ok);
}
.ai-msg.bad {
  color: var(--warn);
}
.wb {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-top: 10px;
  font-size: 13px;
  cursor: pointer;
}
.wb input {
  margin-top: 3px;
  padding: 0;
}
.wb small {
  display: block;
  color: var(--muted);
}
.msg {
  font-size: 13px;
  color: var(--ok);
}
.msg.warn {
  color: var(--warn);
}
</style>
