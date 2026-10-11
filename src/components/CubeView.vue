<template>
  <div ref="host" class="cube-host" :class="{ painting: paintable }"></div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { FACE_COLOR_HEX, FACE_NORMALS, FACES, getSpec } from '../core/cube.js';

const props = defineProps({
  n: { type: Number, required: true },
  state: { type: Object, required: true },
  paintable: { type: Boolean, default: false },
  locked: { type: Boolean, default: false },
});
const emit = defineEmits(['paint', 'layerturn']);

const host = ref(null);
let renderer;
let scene;
let camera;
let controls;
let cubeGroup;
let raf = 0;
let resizeObserver;
let cubieGroups = [];
let stickerMeshes = [];
let spec;
let animating = false;
const materials = FACE_COLOR_HEX.map(
  (hex) => new THREE.MeshStandardMaterial({ color: hex, roughness: 0.35, metalness: 0.0 }),
);
const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x15171c, roughness: 0.6 });

function roundedRect(size, radius) {
  const h = size / 2;
  const shape = new THREE.Shape();
  shape.moveTo(-h + radius, -h);
  shape.lineTo(h - radius, -h);
  shape.quadraticCurveTo(h, -h, h, -h + radius);
  shape.lineTo(h, h - radius);
  shape.quadraticCurveTo(h, h, h - radius, h);
  shape.lineTo(-h + radius, h);
  shape.quadraticCurveTo(-h, h, -h, h - radius);
  shape.lineTo(-h, -h + radius);
  shape.quadraticCurveTo(-h, -h, -h + radius, -h);
  return new THREE.ShapeGeometry(shape);
}

const stickerGeometry = roundedRect(0.84, 0.12);
const bodyGeometry = new RoundedBoxGeometry(0.98, 0.98, 0.98, 3, 0.1);

function build() {
  if (cubeGroup) scene.remove(cubeGroup);
  spec = getSpec(props.n);
  cubeGroup = new THREE.Group();
  cubieGroups = [];
  stickerMeshes = new Array(spec.slotCount);
  const z = new THREE.Vector3(0, 0, 1);
  spec.cubies.forEach((cubie) => {
    const g = new THREE.Group();
    g.position.set(cubie.pos[0] / 2, cubie.pos[1] / 2, cubie.pos[2] / 2);
    g.add(new THREE.Mesh(bodyGeometry, bodyMaterial));
    cubie.slots.forEach((slot) => {
      const st = spec.stickers[slot];
      const normal = new THREE.Vector3(...st.normal);
      const mesh = new THREE.Mesh(stickerGeometry, materials[st.face]);
      mesh.position.copy(normal).multiplyScalar(0.492);
      mesh.quaternion.setFromUnitVectors(z, normal);
      mesh.userData.slot = slot;
      g.add(mesh);
      stickerMeshes[slot] = mesh;
    });
    cubieGroups.push(g);
    cubeGroup.add(g);
  });
  scene.add(cubeGroup);
  recolor(props.state);
}

function recolor(state) {
  if (state.length !== stickerMeshes.length) return;
  for (let i = 0; i < stickerMeshes.length; i++) stickerMeshes[i].material = materials[state[i]];
}

function resetView() {
  const d = props.n === 2 ? 4.6 : 6.2;
  camera.position.set(d * 0.75, d * 0.6, d);
  controls.target.set(0, 0, 0);
  controls.update();
}

function resize() {
  if (!host.value || !renderer) return;
  const { clientWidth: w, clientHeight: h } = host.value;
  if (!w || !h) return;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

function loop() {
  raf = requestAnimationFrame(loop);
  controls.update();
  renderer.render(scene, camera);
}

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

// `move` may hold several space-separated moves on opposite faces; they turn together.
function animate(move, next, speed = 1) {
  if (animating || speed >= 10) {
    recolor(next);
    return Promise.resolve();
  }
  animating = true;
  const jobs = move.split(' ').map((part) => {
    const face = FACES.indexOf(part[0]);
    const quarters = part.endsWith('2') ? 2 : 1;
    const pivot = new THREE.Group();
    const layer = spec.layerOf(face).map((i) => cubieGroups[i]);
    cubeGroup.add(pivot);
    layer.forEach((g) => pivot.add(g));
    return {
      pivot,
      layer,
      quarters,
      axis: new THREE.Vector3(...FACE_NORMALS[face]),
      angle: (part.endsWith("'") ? 1 : -1) * quarters * (Math.PI / 2),
    };
  });
  const duration = (jobs.some((j) => j.quarters === 2) ? 420 : 280) / speed;
  const start = performance.now();
  return new Promise((resolve) => {
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      jobs.forEach((j) => j.pivot.setRotationFromAxisAngle(j.axis, j.angle * ease(t)));
      if (t < 1) {
        requestAnimationFrame(tick);
        return;
      }
      jobs.forEach((j) => {
        j.layer.forEach((g) => cubeGroup.add(g));
        cubeGroup.remove(j.pivot);
      });
      recolor(next);
      animating = false;
      resolve();
    };
    requestAnimationFrame(tick);
  });
}

const raycaster = new THREE.Raycaster();
function pickSticker(clientX, clientY) {
  const rect = renderer.domElement.getBoundingClientRect();
  const ndc = new THREE.Vector2(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  return raycaster.intersectObjects(stickerMeshes, false)[0];
}

// Click (not drag) on a sticker while painting.
let downAt = null;
function onPointerDown(e) {
  downAt = { x: e.clientX, y: e.clientY };
}
function onPointerUp(e) {
  if (!props.paintable || !downAt) return;
  const moved = Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y);
  downAt = null;
  if (moved > 5) return;
  const hit = pickSticker(e.clientX, e.clientY);
  if (hit) emit('paint', hit.object.userData.slot);
}

// Wheel over a sticker turns the layer holding it: the sticker moves up/down on screen,
// or left/right with Alt. Scrolling down = down / right. Elsewhere the wheel zooms.
const LAYER_LETTERS = [['L', 'R'], ['D', 'U'], ['B', 'F']];
let wheelAccum = 0;

function layerMoveForWheel(slot, dir, horizontal) {
  const st = spec.stickers[slot];
  const a = st.normal.findIndex((v) => v !== 0);
  const axes = [0, 1, 2].filter((k) => k !== a);
  camera.updateMatrixWorld();
  const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
  const up = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 1);
  // Turning about the axis most aligned with the screen's horizontal moves stickers vertically.
  const vertAxis = Math.abs(right.getComponent(axes[0])) >= Math.abs(right.getComponent(axes[1])) ? axes[0] : axes[1];
  const k = horizontal ? axes.find((x) => x !== vertAxis) : vertAxis;
  const axis = new THREE.Vector3();
  axis.setComponent(k, 1);
  const p = new THREE.Vector3(...st.pos).multiplyScalar(0.5).add(new THREE.Vector3(...st.normal).multiplyScalar(0.5));
  const velocity = axis.clone().cross(p); // direction of motion for a positive turn about +axis
  const towardsWanted = horizontal ? velocity.dot(right) : -velocity.dot(up);
  const sigma = (towardsWanted >= 0 ? 1 : -1) * dir; // +1 = counter-clockwise seen from +axis
  const c = spec.cubies[st.cubie].pos[k];
  const [neg, pos] = LAYER_LETTERS[k];
  if (c === spec.m) return pos + (sigma > 0 ? "'" : '');
  if (c === -spec.m) return neg + (sigma > 0 ? '' : "'");
  // Middle slice: the two outer layers turn the opposite way (same pattern, orientation kept).
  return `${pos}${sigma > 0 ? '' : "'"} ${neg}${sigma > 0 ? "'" : ''}`;
}

function onWheel(e) {
  if (props.paintable) return;
  const hit = pickSticker(e.clientX, e.clientY);
  if (!hit) return;
  e.preventDefault();
  e.stopPropagation();
  if (props.locked || animating) return;
  wheelAccum += e.deltaY || e.deltaX;
  if (Math.abs(wheelAccum) < 40) return;
  const dir = Math.sign(wheelAccum);
  wheelAccum = 0;
  emit('layerturn', layerMoveForWheel(hit.object.userData.slot, dir, e.altKey));
}

onMounted(() => {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  host.value.appendChild(renderer.domElement);
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  scene.add(new THREE.AmbientLight(0xffffff, 1.1));
  const key = new THREE.DirectionalLight(0xffffff, 2.0);
  key.position.set(5, 8, 6);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 0.8);
  fill.position.set(-6, -3, -5);
  scene.add(fill);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.minDistance = 4;
  controls.maxDistance = 14;
  renderer.domElement.addEventListener('pointerdown', onPointerDown);
  renderer.domElement.addEventListener('pointerup', onPointerUp);
  // Capture phase on the host so we run before OrbitControls' own wheel zoom.
  host.value.addEventListener('wheel', onWheel, { capture: true, passive: false });
  build();
  resetView();
  resize();
  resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host.value);
  loop();
});

onBeforeUnmount(() => {
  cancelAnimationFrame(raf);
  resizeObserver?.disconnect();
  controls?.dispose();
  renderer?.dispose();
});

watch(
  () => props.n,
  () => {
    build();
    resetView();
  },
);
watch(
  () => props.state,
  (s) => {
    if (!animating) recolor(s);
  },
);

defineExpose({ animate, resetView });
</script>

<style scoped>
.cube-host {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 320px;
  touch-action: none;
}
.cube-host :deep(canvas) {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.cube-host.painting :deep(canvas) {
  cursor: crosshair;
}
</style>
