import { reactive } from 'vue';
import standard from './gamepad-standard.json';
import { CONTINUOUS_ACTIONS, matchingBindings, readInputs, validateProfile } from './core/gamepad.js';

const KEY = 'rubiks-solver.gamepad.v1';
const clone = (value) => JSON.parse(JSON.stringify(value));
const initialProfile = validateProfile(standard);
export const gamepad = reactive({
  enabled: true, connected: '', controllerIndex: '', controllers: [], error: '', message: '',
  profiles: [clone(initialProfile)], selected: initialProfile.name, draft: clone(initialProfile),
  capture: null, candidate: null, captureReady: false, held: [],
});

try {
  const raw = localStorage.getItem(KEY);
  if (raw) {
    const data = JSON.parse(raw);
    if (!Array.isArray(data.profiles) || !data.profiles.length) throw new Error('Invalid saved profile list.');
    const profiles = data.profiles.map(validateProfile);
    if (new Set(profiles.map((p) => p.name)).size !== profiles.length) throw new Error('Duplicate profile names.');
    gamepad.profiles = profiles;
    gamepad.selected = profiles.some((p) => p.name === data.selected) ? data.selected : profiles[0].name;
    gamepad.draft = clone(profiles.find((p) => p.name === gamepad.selected));
    gamepad.enabled = data.enabled !== false;
  }
} catch (e) {
  gamepad.error = `Could not load gamepad profiles: ${e.message}. Saved data has not been overwritten.`;
}

function persist(profiles = gamepad.profiles, selected = gamepad.selected) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ profiles, selected, enabled: gamepad.enabled }));
    gamepad.error = '';
    return true;
  } catch (e) {
    gamepad.error = `Could not save gamepad profiles: ${e.message}`;
    return false;
  }
}

export function selectProfile(name) {
  const profile = gamepad.profiles.find((p) => p.name === name);
  if (!profile) return;
  cancelCapture();
  gamepad.selected = name;
  gamepad.draft = clone(profile);
  persist();
  gamepad.message = '';
}
export function saveProfile(name, saveAs = false) {
  try {
    const profile = validateProfile({ ...clone(gamepad.draft), name });
    if (saveAs && gamepad.profiles.some((p) => p.name === profile.name)) throw new Error('That name already exists.');
    const profiles = gamepad.profiles.filter((p) => p.name !== gamepad.selected || saveAs);
    if (profiles.some((p) => p.name === profile.name)) throw new Error('That name already exists.');
    profiles.push(profile);
    if (!persist(profiles, profile.name)) return false;
    gamepad.profiles = profiles;
    gamepad.selected = profile.name;
    gamepad.draft = clone(profile);
    gamepad.message = `Saved "${profile.name}".`;
    return true;
  } catch (e) { gamepad.error = e.message; return false; }
}
export function deleteProfile() {
  if (gamepad.profiles.length <= 1) { gamepad.error = 'Keep at least one profile.'; return; }
  const profiles = gamepad.profiles.filter((p) => p.name !== gamepad.selected);
  if (!persist(profiles, profiles[0].name)) return;
  gamepad.profiles = profiles;
  selectProfile(profiles[0].name);
}
export function restoreDefault() {
  cancelCapture();
  gamepad.draft = { ...clone(initialProfile), name: gamepad.selected };
  gamepad.message = 'Default bindings restored in the draft. Click Save to keep them.';
}
export function setEnabled() { persist(); }
export function cancelCapture() {
  gamepad.capture = null;
  gamepad.candidate = null;
  gamepad.captureReady = false;
}
export function beginCapture(action) {
  cancelCapture();
  gamepad.capture = action;
  gamepad.error = '';
}

export function startGamepad(onAction) {
  let raf = 0, lastTime = performance.now(), previous = new Set(), identity = '', armed = false;
  let configuration = '';
  let captureAction = null;
  const continuousArmed = new Set();
  function poll(now) {
    raf = requestAnimationFrame(poll);
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;
    let pads;
    try { pads = navigator.getGamepads?.() || []; }
    catch (e) { gamepad.error = `Gamepad access failed: ${e.message}`; return; }
    const supported = Array.from(pads).filter((p) => p && p.mapping === 'standard');
    const controllers = supported.map((p) => ({ index: p.index, name: p.id }));
    if (JSON.stringify(controllers) !== JSON.stringify(gamepad.controllers)) gamepad.controllers = controllers;
    const pad = gamepad.controllerIndex === '' ? supported[0]
      : supported.find((p) => p.index === Number(gamepad.controllerIndex));
    gamepad.connected = pad?.id || '';
    if (!navigator.getGamepads) gamepad.message = 'This browser does not support the Gamepad API.';
    else if (!pad && Array.from(pads).some(Boolean)) gamepad.message = 'Select a connected standard-mapped Xbox-compatible controller.';
    const nextIdentity = pad ? `${pad.index}:${pad.id}` : '';
    const nextConfiguration = JSON.stringify(gamepad.draft);
    if (identity !== nextIdentity || configuration !== nextConfiguration) {
      identity = nextIdentity;
      configuration = nextConfiguration;
      armed = false;
      previous.clear();
      continuousArmed.clear();
      gamepad.captureReady = false;
      if (gamepad.capture) gamepad.candidate = null;
    }
    if (!pad) {
      if (gamepad.held.length) gamepad.held = [];
      gamepad.captureReady = false;
      return;
    }
    const active = readInputs(pad, gamepad.draft.settings, previous);
    if (gamepad.held.join(',') !== [...active].join(',')) gamepad.held = [...active];
    const focused = !document.hidden && document.hasFocus();
    if (gamepad.capture) {
      if (captureAction !== gamepad.capture || !focused) {
        gamepad.captureReady = false;
        captureAction = gamepad.capture;
      }
      if (focused && !active.size) gamepad.captureReady = true;
      if (focused && gamepad.captureReady) {
        const added = [...active].filter((i) => !previous.has(i));
        if (added.length) {
          const input = added.find((i) => !['LT', 'RT', 'LB', 'RB', 'View', 'Menu'].includes(i)) || added[added.length - 1];
          gamepad.candidate = { input, modifiers: [...active].filter((i) => i !== input) };
        }
      }
      armed = false;
      continuousArmed.clear();
      previous = active;
      return;
    }
    captureAction = null;
    const tag = document.activeElement?.tagName;
    if (!focused || !gamepad.enabled || ['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)
      || document.activeElement?.isContentEditable) {
      armed = false; continuousArmed.clear(); previous = active; return;
    }
    if (!armed) {
      if (!active.size) armed = true;
      previous = active;
      return;
    }
    const matches = matchingBindings(gamepad.draft.bindings, active);
    const matchingActions = new Set(matches.map(([a]) => a));
    for (const action of continuousArmed) {
      if (!matchingActions.has(action)) continuousArmed.delete(action);
    }
    for (const [action, binding] of matches) {
      const pressed = !previous.has(binding.input);
      if (CONTINUOUS_ACTIONS.has(action)) {
        if (pressed) continuousArmed.add(action);
        if (continuousArmed.has(action)) onAction(action, dt);
      } else if (pressed) onAction(action, dt);
    }
    previous = active;
  }
  raf = requestAnimationFrame(poll);
  return () => cancelAnimationFrame(raf);
}
