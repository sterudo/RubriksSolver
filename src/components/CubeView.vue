<template>
  <div ref="host" class="cube-host" :class="{ painting: paintable }"></div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { FACE_COLOR_HEX, FACE_NORMALS, FACES, getSpec } from '../core/cube.js';
import { relativeFaces } from '../core/gamepad.js';
import { layerTurn, pointerDragMode, swipeTurn } from '../core/swipe.js';

const props = defineProps({
  n: { type: Number, required: true },
  state: { type: Object, required: true },
  paintable: { type: Boolean, default: false },
  locked: { type: Boolean, default: false },
  drama: { type: Boolean, default: false },
  rumble: { type: Number, default: 0 },
  dramaSpeed: { type: Number, default: 0.32 },
  hoverColors: { type: Boolean, default: false },
  touchMode: { type: String, default: 'rotate' },
  touchLocked: { type: Boolean, default: false },
  swapMouseButtons: { type: Boolean, default: false },
});
const emit = defineEmits(['paint', 'layerturn', 'hovering', 'zoom']);

const host = ref(null);
let renderer;
let scene;
let camera;
const target = new THREE.Vector3(0, 0, 0);
const MIN_DISTANCE = 4;
const MAX_DISTANCE = 14;
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
  clearHover();
  if (cubeGroup) scene.remove(cubeGroup);
  spec = getSpec(props.n);
  cubeGroup = new THREE.Group();
  cubieGroups = [];
  stickerMeshes = new Array(spec.slotCount);
  const z = new THREE.Vector3(0, 0, 1);
  spec.cubies.forEach((cubie) => {
    const g = new THREE.Group();
    g.position.set(cubie.pos[0] / 2, cubie.pos[1] / 2, cubie.pos[2] / 2);
    g.userData.home = g.position.clone();
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
  const mobile = window.matchMedia('(hover: none) and (pointer: coarse), (max-width: 600px)').matches;
  const d = (props.n === 2 ? 4.6 : 6.2) / (mobile ? 0.8 : 1);
  camera.up.set(0, 1, 0); // free rotation can leave the camera upside down
  camera.position.set(d * 0.75, d * 0.6, d);
  camera.lookAt(target);
  spin.vx = 0;
  spin.vy = 0;
  reportZoom();
}

function resize() {
  if (!host.value || !renderer) return;
  const { clientWidth: w, clientHeight: h } = host.value;
  if (!w || !h) return;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

// --- Free rotation ---------------------------------------------------------------
// Every pointer movement is applied directly (so fast mice are not under-counted) as a
// rotation of the camera about its own right/up axes: no poles, no limit in any direction.
// A full canvas height of dragging is one full turn, as with orbit controls.
const spin = { vx: 0, vy: 0, dragging: false, lastX: 0, lastY: 0, lastT: 0 };
const pointers = new Map();
let layerSwipe = null;
let layerGesture = false;
let pinchDistance = 0;
const _q = new THREE.Quaternion();
const _right = new THREE.Vector3();
const _upAxis = new THREE.Vector3();
const _eye = new THREE.Vector3();

function rotateView(dxPx, dyPx) {
  const height = renderer.domElement.clientHeight || 1;
  const k = (2 * Math.PI) / height;
  camera.updateMatrixWorld();
  _right.setFromMatrixColumn(camera.matrixWorld, 0);
  _upAxis.setFromMatrixColumn(camera.matrixWorld, 1);
  // drag right/down: the cube follows the pointer (camera moves left/up around it)
  _q.setFromAxisAngle(_upAxis, -dxPx * k);
  _eye.copy(camera.position).sub(target).applyQuaternion(_q);
  camera.up.applyQuaternion(_q);
  _q.setFromAxisAngle(_right.applyQuaternion(_q), -dyPx * k);
  _eye.applyQuaternion(_q);
  camera.up.applyQuaternion(_q).normalize();
  camera.position.copy(target).add(_eye);
  camera.lookAt(target);
}

function zoomBy(factor) {
  _eye.copy(camera.position).sub(target);
  const distance = Math.min(MAX_DISTANCE, Math.max(MIN_DISTANCE, _eye.length() * factor));
  camera.position.copy(target).add(_eye.setLength(distance));
  reportZoom();
}

function reportZoom() {
  const distance = camera.position.distanceTo(target);
  emit('zoom', 100 * (MAX_DISTANCE - distance) / (MAX_DISTANCE - MIN_DISTANCE));
}

function setZoom(value) {
  if (!camera || !Number.isFinite(value)) return;
  const distance = MAX_DISTANCE - Math.min(100, Math.max(0, value)) * (MAX_DISTANCE - MIN_DISTANCE) / 100;
  _eye.copy(camera.position).sub(target).setLength(distance);
  camera.position.copy(target).add(_eye);
  reportZoom();
}

function onViewPointerDown(e) {
  const desktop = !window.matchMedia('(hover: none) and (pointer: coarse), (max-width: 600px)').matches;
  const mode = pointerDragMode(e.pointerType, e.button, {
    desktop, swapMouseButtons: props.swapMouseButtons, touchMode: props.touchMode, paintable: props.paintable,
  });
  if (!mode) return;
  if (desktop && e.pointerType === 'mouse' && e.button === 2) e.preventDefault();
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  renderer.domElement.setPointerCapture?.(e.pointerId);
  if (mode === 'move') {
    layerGesture = true;
    spin.dragging = false;
    spin.vx = 0;
    spin.vy = 0;
    layerSwipe = null;
    if (pointers.size === 1 && !props.locked && !props.touchLocked && !props.paintable && !animating) {
      camera.updateMatrixWorld();
      const hit = pickSticker(e.clientX, e.clientY);
      if (hit) {
        const slot = hit.object.userData.slot;
        const normalAxis = spec.stickers[slot].normal.findIndex((v) => v !== 0);
        const origin = hit.point.clone().project(camera);
        const candidates = [0, 1, 2].filter((axis) => axis !== normalAxis).map((axis) => {
          const vector = new THREE.Vector3().setComponent(axis, 1);
          const tangent = vector.cross(hit.point);
          const end = hit.point.clone().addScaledVector(tangent, 0.01).project(camera);
          return { axis, x: (end.x - origin.x) * renderer.domElement.clientWidth,
            y: -(end.y - origin.y) * renderer.domElement.clientHeight };
        });
        layerSwipe = { pointerId: e.pointerId, x: e.clientX, y: e.clientY, slot, candidates,
          speedMultiplier: e.pointerType === 'touch' ? 1.5 : 1 };
      }
    }
    return;
  }
  if (pointers.size === 1) {
    Object.assign(spin, { dragging: true, lastX: e.clientX, lastY: e.clientY, lastT: performance.now(), vx: 0, vy: 0 });
  } else if (pointers.size === 2) {
    const [a, b] = [...pointers.values()];
    pinchDistance = Math.hypot(a.x - b.x, a.y - b.y);
    spin.dragging = false;
  }
}

function onViewPointerMove(e) {
  if (!pointers.has(e.pointerId)) return;
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (layerGesture) {
    if (layerSwipe && pointers.size === 1 && layerSwipe.pointerId === e.pointerId) {
      if (props.locked || props.touchLocked || props.paintable || animating) { layerSwipe = null; return; }
      const move = swipeTurn(spec, layerSwipe.slot, layerSwipe.candidates,
        e.clientX - layerSwipe.x, e.clientY - layerSwipe.y);
      if (move) {
        const speedMultiplier = layerSwipe.speedMultiplier;
        layerSwipe = null;
        emit('layerturn', move, { speedMultiplier });
      }
    }
    return;
  }
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()];
    const d = Math.hypot(a.x - b.x, a.y - b.y);
    if (pinchDistance && d) zoomBy(pinchDistance / d);
    pinchDistance = d;
    return;
  }
  if (!spin.dragging) return;
  const dx = e.clientX - spin.lastX;
  const dy = e.clientY - spin.lastY;
  const now = performance.now();
  const dt = Math.max(1, now - spin.lastT);
  rotateView(dx, dy);
  // smoothed velocity in pixels per 16 ms frame, for inertia after release
  spin.vx = 0.6 * spin.vx + 0.4 * ((dx / dt) * 16);
  spin.vy = 0.6 * spin.vy + 0.4 * ((dy / dt) * 16);
  Object.assign(spin, { lastX: e.clientX, lastY: e.clientY, lastT: now });
}

function onViewPointerUp(e) {
  pointers.delete(e.pointerId);
  if (renderer.domElement.hasPointerCapture?.(e.pointerId)) renderer.domElement.releasePointerCapture(e.pointerId);
  layerSwipe = null;
  if (e.type === 'pointercancel') { downAt = null; spin.vx = 0; spin.vy = 0; }
  if (pointers.size === 0) {
    layerGesture = false;
    spin.dragging = false;
    // a drag that ended while standing still must not keep spinning
    if (performance.now() - spin.lastT > 80) {
      spin.vx = 0;
      spin.vy = 0;
    }
  }
}

function onViewWheel(e) {
  e.preventDefault();
  zoomBy(Math.exp(e.deltaY * 0.0006));
}

// "Extra drama": a slow, smooth swirl as if the pointer were dragged round and round the
// cube's centre. The drag direction turns steadily, so the view tumbles in a circle. The
// effect eases in and out and gives way as soon as the user takes hold of the cube.
const DRAMA_TURN = 0.55; // radians per second the drag direction revolves (~11 s per circle)
const drama = { level: 0, phase: 0, last: 0 };
let gamepadViewUntil = 0;

function updateDrama(now) {
  const dt = Math.min(0.1, (now - (drama.last || now)) / 1000);
  drama.last = now;
  const want = props.drama && !spin.dragging && pointers.size === 0 && now >= gamepadViewUntil ? 1 : 0;
  const step = dt * 0.7; // ~1.4 s to fade in or out
  drama.level += Math.max(-step, Math.min(step, want - drama.level));
  if (drama.level < 0.001) return;
  drama.phase += dt * DRAMA_TURN;
  const eased = drama.level * drama.level * (3 - 2 * drama.level);
  const height = renderer.domElement.clientHeight || 1;
  const px = ((props.dramaSpeed * height) / (2 * Math.PI)) * dt * eased; // px of "drag" this frame
  rotateView(Math.cos(drama.phase) * px, Math.sin(drama.phase) * px);
}

function loop() {
  raf = requestAnimationFrame(loop);
  if (!spin.dragging && (Math.abs(spin.vx) > 0.02 || Math.abs(spin.vy) > 0.02)) {
    rotateView(spin.vx, spin.vy);
    spin.vx *= 0.92;
    spin.vy *= 0.92;
  }
  updateDrama(performance.now());
  applyRumble(performance.now());
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

// --- Finale: rumble, explosion, re-forming ----------------------------------------
let glowTexture = null;
function glow() {
  if (!glowTexture) {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const g = c.getContext('2d');
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.25, 'rgba(255,255,255,0.6)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    glowTexture = new THREE.CanvasTexture(c);
  }
  return glowTexture;
}

// While the countdown runs the cube shakes harder and harder.
function applyRumble(now) {
  if (!cubeGroup || animating) return;
  const amp = props.rumble * 0.045;
  if (amp > 0) {
    const t = now / 1000;
    cubeGroup.position.set(Math.sin(t * 61) * amp, Math.sin(t * 73 + 1) * amp, Math.sin(t * 53 + 2) * amp);
    cubeGroup.rotation.z = Math.sin(t * 47) * amp * 0.25;
  } else if (cubeGroup.position.lengthSq() > 0 || cubeGroup.rotation.z !== 0) {
    cubeGroup.position.set(0, 0, 0);
    cubeGroup.rotation.z = 0;
  }
}

const easeOutBack = (t) => 1 + 2.70158 * (t - 1) ** 3 + 1.70158 * (t - 1) ** 2;

// The cube blows apart: every cubie flies outwards on its own slightly random path while
// sparks and a flash burst from the centre. The scene then goes quiet and the cube
// re-forms piece by piece as if nothing had happened. Resolves when it is whole again.
function explode() {
  if (animating || !cubeGroup) return Promise.resolve();
  animating = true;
  cubeGroup.position.set(0, 0, 0);
  cubeGroup.rotation.z = 0;
  const rnd = (a, b) => a + Math.random() * (b - a);

  // cubie fragments
  const pieces = cubieGroups.map((g) => {
    const dir = g.userData.home.clone();
    if (dir.lengthSq() < 0.01) dir.set(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1));
    dir.normalize().add(new THREE.Vector3(rnd(-0.4, 0.4), rnd(-0.4, 0.4), rnd(-0.4, 0.4))).normalize();
    return {
      g,
      v: dir.multiplyScalar(rnd(3.2, 7.5)),
      spin: new THREE.Vector3(rnd(-9, 9), rnd(-9, 9), rnd(-9, 9)),
      vanish: rnd(1.7, 2.2),
    };
  });

  // sparks: additive glowing points, each with its own delay, speed and lifetime
  const COUNT = 520;
  const pos = new Float32Array(COUNT * 3);
  const col = new Float32Array(COUNT * 3);
  const sparks = Array.from({ length: COUNT }, () => {
    const d = new THREE.Vector3(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1)).normalize();
    return { p: new THREE.Vector3(), v: d.multiplyScalar(rnd(2.5, 11)), delay: rnd(0, 0.35), life: rnd(0.6, 1.7) };
  });
  const sparkGeometry = new THREE.BufferGeometry();
  sparkGeometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  sparkGeometry.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const sparkMaterial = new THREE.PointsMaterial({
    size: 0.26,
    map: glow(),
    vertexColors: true,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const points = new THREE.Points(sparkGeometry, sparkMaterial);
  points.frustumCulled = false;
  scene.add(points);

  // flash
  const flashMaterial = new THREE.SpriteMaterial({ map: glow(), color: 0xffe9b0, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false });
  const flash = new THREE.Sprite(flashMaterial);
  scene.add(flash);

  const REFORM_AT = 3.0;
  const reformDelay = pieces.map(({ g }) => g.userData.home.length() * 0.14 + rnd(0, 0.06));
  const reformFrom = pieces.map(() => new THREE.Quaternion().setFromEuler(new THREE.Euler(rnd(-2, 2), rnd(-2, 2), rnd(-2, 2))));
  let reformStarted = false;
  const DONE_AT = REFORM_AT + 1.4;
  const start = performance.now();
  let last = start;

  return new Promise((resolve) => {
    const tick = (nowMs) => {
      const t = (nowMs - start) / 1000;
      const dt = Math.min(0.05, (nowMs - last) / 1000);
      last = nowMs;

      if (t < REFORM_AT) {
        // fragments: drag + a little gravity, tumbling, shrinking away at the end
        pieces.forEach((p) => {
          if (t > p.vanish) {
            p.g.visible = false;
            return;
          }
          p.v.multiplyScalar(1 - 0.3 * dt);
          p.v.y -= 2.2 * dt;
          p.g.position.addScaledVector(p.v, dt);
          p.g.rotation.x += p.spin.x * dt;
          p.g.rotation.y += p.spin.y * dt;
          p.g.rotation.z += p.spin.z * dt;
          const shrink = Math.max(0, Math.min(1, (p.vanish - t) / 0.4));
          p.g.scale.setScalar(shrink);
        });
        // sparks
        sparks.forEach((s, i) => {
          const age = t - s.delay;
          if (age < 0 || age > s.life) {
            col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = 0;
            return;
          }
          s.v.multiplyScalar(1 - 0.9 * dt);
          s.v.y -= 3.5 * dt;
          s.p.addScaledVector(s.v, dt);
          const u = age / s.life;
          const fade = (1 - u) ** 1.4;
          // white-yellow -> orange -> deep red
          const r = 1 * fade;
          const g = Math.max(0, 0.95 - 0.85 * u) * fade;
          const b = Math.max(0, 0.55 - 0.55 * u * 1.6) * fade;
          pos[i * 3] = s.p.x;
          pos[i * 3 + 1] = s.p.y;
          pos[i * 3 + 2] = s.p.z;
          col[i * 3] = r;
          col[i * 3 + 1] = g;
          col[i * 3 + 2] = b;
        });
        sparkGeometry.attributes.position.needsUpdate = true;
        sparkGeometry.attributes.color.needsUpdate = true;
        // flash and a short, hard shake at the moment of the blast
        const f = Math.min(1, t / 0.45);
        flash.scale.setScalar(2 + 14 * f);
        flashMaterial.opacity = (1 - f) ** 1.5;
        const shake = t < 0.4 ? 0.14 * (1 - t / 0.4) : 0;
        cubeGroup.position.set(rnd(-shake, shake), rnd(-shake, shake), rnd(-shake, shake));
      } else {
        if (!reformStarted) {
          // quiet moment is over: everything is gone, set the pieces up to grow back
          reformStarted = true;
          scene.remove(points);
          scene.remove(flash);
          sparkGeometry.dispose();
          sparkMaterial.dispose();
          flashMaterial.dispose();
          cubeGroup.position.set(0, 0, 0);
          pieces.forEach(({ g }) => {
            g.position.copy(g.userData.home);
            g.scale.setScalar(0.0001);
            g.visible = true;
          });
        }
        const rt = t - REFORM_AT;
        pieces.forEach(({ g }, i) => {
          const u = Math.max(0, Math.min(1, (rt - reformDelay[i]) / 0.55));
          const e = easeOutBack(u);
          g.scale.setScalar(Math.max(0.0001, e));
          g.quaternion.copy(reformFrom[i]).slerp(IDENTITY, Math.min(1, u * 1.15));
        });
      }

      if (t < DONE_AT) {
        requestAnimationFrame(tick);
        return;
      }
      // exactly as before the blast
      pieces.forEach(({ g }) => {
        g.position.copy(g.userData.home);
        g.rotation.set(0, 0, 0);
        g.quaternion.identity();
        g.scale.setScalar(1);
        g.visible = true;
      });
      cubeGroup.position.set(0, 0, 0);
      cubeGroup.rotation.z = 0;
      recolor(props.state);
      animating = false;
      resolve();
    };
    requestAnimationFrame(tick);
  });
}
const IDENTITY = new THREE.Quaternion();

const raycaster = new THREE.Raycaster();
function pickSticker(clientX, clientY) {
  const rect = renderer.domElement.getBoundingClientRect();
  const ndc = new THREE.Vector2(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  return raycaster.intersectObjects(stickerMeshes, false)[0];
}

// --- "Show all colours on hover" ------------------------------------------------------
// While painting, the hovered sticker shows all six colours as a 3x2 grid drawn on the sticker
// itself (child meshes, so it follows the cube and never steals pointer events). The grid is laid
// out along the screen's horizontal/vertical, whichever way the face is turned. The pointer's
// position on the sticker decides which cell is hovered and which colour a click paints.
const GRID = 0.8; // grid size on the 0.84 sticker
const CELL_W = GRID / 3;
const CELL_H = GRID / 2;
const RING = 0.025;
const planeGeometry = new THREE.PlaneGeometry(1, 1);
const blackMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const cellMaterials = FACE_COLOR_HEX.map((hex) => new THREE.MeshBasicMaterial({ color: hex }));
let hoverGroup = null;
let hoverKey = '';
let hovering = false;
let lastPointer = null;
const _wq = new THREE.Quaternion();
const _v = new THREE.Vector3();

function setHovering(value) {
  if (hovering === value) return;
  hovering = value;
  emit('hovering', value);
}

function clearHover() {
  hoverGroup?.parent?.remove(hoverGroup);
  hoverGroup = null;
  hoverKey = '';
  if (renderer) setHovering(false);
}

function isLockedSticker(slot) {
  return props.n === 3 && spec.cubies[spec.stickers[slot].cubie].kind === 'center';
}

// Which way the sticker's local x/y axes run on screen.
function gridLayout(mesh) {
  camera.updateMatrixWorld();
  mesh.getWorldQuaternion(_wq).invert();
  const right = _v.setFromMatrixColumn(camera.matrixWorld, 0).applyQuaternion(_wq).clone();
  const up = _v.setFromMatrixColumn(camera.matrixWorld, 1).applyQuaternion(_wq);
  const sign = (v) => (v >= 0 ? 1 : -1);
  if (Math.abs(right.x) >= Math.abs(right.y)) return { swap: false, a: sign(right.x), b: sign(up.y) };
  return { swap: true, a: sign(right.y), b: sign(up.x) };
}

// Sticker-local position (x, y) of a screen-space offset (u right, v up) from the sticker centre.
function toLocal(layout, u, v) {
  return layout.swap ? { x: layout.b * v, y: layout.a * u } : { x: layout.a * u, y: layout.b * v };
}

function cellAt(mesh, point, layout) {
  const p = mesh.worldToLocal(point.clone());
  const u = layout.swap ? layout.a * p.y : layout.a * p.x;
  const v = layout.swap ? layout.b * p.x : layout.b * p.y;
  const col = Math.min(2, Math.max(0, Math.floor((u + GRID / 2) / CELL_W)));
  const row = Math.min(1, Math.max(0, Math.floor((GRID / 2 - v) / CELL_H)));
  return row * 3 + col;
}

function addRect(group, layout, u, v, w, h, material, z) {
  const { x, y } = toLocal(layout, u, v);
  const mesh = new THREE.Mesh(planeGeometry, material);
  mesh.position.set(x, y, z);
  mesh.scale.set(layout.swap ? h : w, layout.swap ? w : h, 1);
  group.add(mesh);
}

function buildHoverGrid(mesh, layout, hoverCell) {
  hoverGroup?.parent?.remove(hoverGroup);
  hoverGroup = new THREE.Group();
  for (let c = 0; c < 6; c++) {
    const u = ((c % 3) - 1) * CELL_W;
    const v = (0.5 - Math.floor(c / 3)) * CELL_H;
    const w = CELL_W - 0.02;
    const h = CELL_H - 0.02;
    const isHover = c === hoverCell;
    if (isHover) addRect(hoverGroup, layout, u, v, w, h, blackMaterial, 0.004);
    const inset = isHover ? RING : 0;
    addRect(hoverGroup, layout, u, v, w - 2 * inset, h - 2 * inset, cellMaterials[c], 0.006);
  }
  mesh.add(hoverGroup);
}

function updateHover(clientX, clientY) {
  lastPointer = { x: clientX, y: clientY };
  if (!props.hoverColors || !props.paintable || props.locked || animating) return clearHover();
  const hit = pickSticker(clientX, clientY);
  if (!hit || isLockedSticker(hit.object.userData.slot)) return clearHover();
  const mesh = hit.object;
  const layout = gridLayout(mesh);
  const cell = cellAt(mesh, hit.point, layout);
  const key = `${mesh.userData.slot}|${cell}|${layout.swap}|${layout.a}|${layout.b}`;
  setHovering(true);
  if (key === hoverKey) return;
  hoverKey = key;
  buildHoverGrid(mesh, layout, cell);
}

function refreshHover() {
  hoverKey = '';
  if (lastPointer && renderer) updateHover(lastPointer.x, lastPointer.y);
  else clearHover();
}

// Click (not drag) on a sticker while painting.
let downAt = null;
function onPointerDown(e) {
  if (e.pointerType === 'mouse' && e.button !== 0) return;
  downAt = { x: e.clientX, y: e.clientY };
}
function onPointerUp(e) {
  if (e.type === 'pointercancel' || props.locked) { downAt = null; return; }
  if (!props.paintable || !downAt) return;
  const moved = Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y);
  downAt = null;
  if (moved > 5) return;
  const hit = pickSticker(e.clientX, e.clientY);
  if (!hit) return;
  const slot = hit.object.userData.slot;
  if (props.hoverColors) {
    if (isLockedSticker(slot)) return;
    emit('paint', slot, cellAt(hit.object, hit.point, gridLayout(hit.object)));
  } else {
    emit('paint', slot);
  }
}

// Wheel over a sticker turns the layer holding it: the sticker moves up/down on screen,
// or left/right with Alt. Scrolling down = down / right. Elsewhere the wheel zooms.
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
  return layerTurn(spec, slot, k, sigma);
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

function onHoverMove(e) {
  updateHover(e.clientX, e.clientY);
}
function onHoverLeave() {
  lastPointer = null;
  clearHover();
}

function onContextMenu(e) {
  if (!window.matchMedia('(hover: none) and (pointer: coarse), (max-width: 600px)').matches) e.preventDefault();
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
  renderer.domElement.addEventListener('pointerdown', onViewPointerDown);
  renderer.domElement.addEventListener('pointermove', onViewPointerMove);
  renderer.domElement.addEventListener('pointermove', onHoverMove);
  renderer.domElement.addEventListener('pointerleave', onHoverLeave);
  renderer.domElement.addEventListener('pointerup', onViewPointerUp);
  renderer.domElement.addEventListener('pointercancel', onViewPointerUp);
  renderer.domElement.addEventListener('wheel', onViewWheel, { passive: false });
  renderer.domElement.addEventListener('pointerdown', onPointerDown);
  renderer.domElement.addEventListener('pointerup', onPointerUp);
  renderer.domElement.addEventListener('pointercancel', onPointerUp);
  renderer.domElement.addEventListener('contextmenu', onContextMenu);
  // Capture phase on the host so a wheel over a sticker turns a layer instead of zooming.
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
watch(() => [props.hoverColors, props.paintable, props.locked], refreshHover);
watch(() => [props.touchMode, props.swapMouseButtons], () => {
  layerSwipe = null;
  spin.dragging = false;
  spin.vx = 0;
  spin.vy = 0;
});

function gamepadView(action, dt) {
  if (!camera || !renderer) return;
  gamepadViewUntil = performance.now() + 100;
  spin.vx = 0;
  spin.vy = 0;
  if (action === 'zoom-in' || action === 'zoom-out') {
    zoomBy(Math.exp((action === 'zoom-in' ? -1 : 1) * dt));
  } else {
    const pixels = renderer.domElement.clientHeight * dt / 6;
    rotateView(action === 'cube-left' ? -pixels : action === 'cube-right' ? pixels : 0,
      action === 'cube-up' ? -pixels : action === 'cube-down' ? pixels : 0);
  }
}

function viewRelativeMove(face, suffix) {
  camera.updateMatrixWorld();
  const eye = camera.position.clone().sub(target).normalize().toArray();
  const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0).toArray();
  return relativeFaces(eye, right)[face] + suffix;
}

defineExpose({ animate, resetView, explode, gamepadView, viewRelativeMove, setZoom });
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
