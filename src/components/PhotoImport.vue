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
      </div>
    </div>
    <div class="actions">
      <button class="primary" :disabled="!ready" @click="read">Read colours</button>
      <span v-if="message" class="msg" :class="{ warn }">{{ message }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, reactive, ref, watch } from 'vue';
import { averageColor, defaultHandles, samplePoints, stateFromSamples } from '../core/photo.js';

const props = defineProps({ n: Number });
const emit = defineEmits(['import']);

const canvases = [null, null];
const images = reactive([null, null]);
const handles = reactive([defaultHandles(420, 420), defaultHandles(420, 420)]);
const message = ref('');
const warn = ref(false);
const drag = ref(null);
const ready = computed(() => images[0] && images[1]);

onMounted(() => [0, 1].forEach(draw));
watch(() => props.n, () => [0, 1].forEach(draw));

function load(i, e) {
  const file = e.target.files?.[0];
  if (!file) return;
  const img = new Image();
  img.onload = async () => {
    images[i] = img;
    await nextTick();
    draw(i);
  };
  img.src = URL.createObjectURL(file);
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
  const samples = [];
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
      samples.push({ slot: pt.slot, rgb: averageColor(imageData, pt.x, pt.y, radius) });
    }
  }
  const { state, warnings } = stateFromSamples(props.n, samples);
  warn.value = warnings.length > 0;
  message.value = warnings[0] || 'Colours imported – check them in the cube net and fix any mistakes.';
  emit('import', state);
}
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
}
.msg {
  font-size: 13px;
  color: var(--ok);
}
.msg.warn {
  color: var(--warn);
}
</style>
