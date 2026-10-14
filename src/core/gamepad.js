import { FACES, FACE_NORMALS, OPPOSITE } from './cube.js';

export const BUTTON_INPUTS = ['A', 'B', 'X', 'Y', 'LB', 'RB', 'LT', 'RT', 'View', 'Menu', 'LS-B', 'RS-B',
  'D-Up', 'D-Down', 'D-Left', 'D-Right'];
export const INPUTS = [...BUTTON_INPUTS, ...['LS', 'RS'].flatMap((s) =>
  ['Up', 'Down', 'Left', 'Right'].map((d) => `${s}-${d}`))];
export const ACTIONS = [
  ['zoom-in', 'Zoom in'], ['zoom-out', 'Zoom out'], ['quick-solve', 'Quick Solve'],
  ['next-step', 'Next solution move'], ['undo', 'Undo'], ['scramble', 'Scramble'],
  ['reset', 'Reset to solved'], ['cube-up', 'Rotate cube up'], ['cube-down', 'Rotate cube down'],
  ['cube-left', 'Rotate cube left'], ['cube-right', 'Rotate cube right'],
  ...['front', 'back', 'left', 'right', 'top', 'bottom'].flatMap((face) => [
    [`${face}-cw`, `${face}: clockwise (unprimed)`],
    [`${face}-ccw`, `${face}: counter-clockwise (prime)`],
    [`${face}-double`, `${face}: double (180 degrees)`],
  ]),
].map(([id, label]) => ({ id, label }));
export const CONTINUOUS_ACTIONS = new Set(['zoom-in', 'zoom-out', 'cube-up', 'cube-down', 'cube-left', 'cube-right']);

export function readInputs(pad, settings, previous = new Set()) {
  const active = new Set();
  BUTTON_INPUTS.forEach((input, i) => {
    const b = pad.buttons[i];
    const threshold = i === 6 || i === 7 ? settings.triggerThreshold : 0.5;
    if (b && (b.value >= threshold || (i !== 6 && i !== 7 && b.pressed))) active.add(input);
  });
  ['LS', 'RS'].forEach((stick, i) => {
    [['Left', -(pad.axes[i * 2] || 0)], ['Right', pad.axes[i * 2] || 0],
      ['Up', -(pad.axes[i * 2 + 1] || 0)], ['Down', pad.axes[i * 2 + 1] || 0]].forEach(([dir, value]) => {
      const input = `${stick}-${dir}`;
      const threshold = settings.deadZone * (previous.has(input) ? 0.8 : 1);
      if (value >= threshold) active.add(input);
    });
  });
  return active;
}

export function matchingBindings(bindings, active) {
  const matches = Object.entries(bindings).filter(([, b]) =>
    b && active.has(b.input) && b.modifiers.every((m) => active.has(m)));
  return matches.filter(([, b]) => {
    const inputs = [b.input, ...b.modifiers];
    return !matches.some(([, other]) => {
      const superset = [other.input, ...other.modifiers];
      return superset.length > inputs.length && inputs.every((i) => superset.includes(i));
    });
  });
}

export function bindingKey(binding) {
  return binding ? [binding.input, ...binding.modifiers].sort().join('+') : '';
}

export function validateProfile(value) {
  if (!value || value.version !== 1 || typeof value.name !== 'string' || !value.name.trim()
    || value.name.length > 80 || !value.bindings || typeof value.bindings !== 'object'
    || Array.isArray(value.bindings)) throw new Error('Invalid profile: expected version 1, a name, and bindings.');
  const settings = value.settings;
  if (!settings || !Number.isFinite(settings.deadZone) || settings.deadZone < 0.15 || settings.deadZone > 0.9
    || !Number.isFinite(settings.triggerThreshold) || settings.triggerThreshold < 0.1
    || settings.triggerThreshold > 0.95) throw new Error('Invalid stick dead zone or trigger threshold.');
  const bindings = {};
  const seen = new Set();
  for (const [action, b] of Object.entries(value.bindings)) {
    if (!ACTIONS.some((a) => a.id === action)) throw new Error(`Unknown action: ${action}`);
    if (b === null) { bindings[action] = null; continue; }
    if (!b || !INPUTS.includes(b.input) || !Array.isArray(b.modifiers)
      || b.modifiers.some((m) => !INPUTS.includes(m) || m === b.input)
      || new Set(b.modifiers).size !== b.modifiers.length) throw new Error(`Invalid binding: ${action}`);
    const inputs = [b.input, ...b.modifiers];
    for (const prefix of ['LS', 'RS', 'D']) {
      for (const [a, c] of [['Up', 'Down'], ['Left', 'Right']]) {
        if (inputs.includes(`${prefix}-${a}`) && inputs.includes(`${prefix}-${c}`)) {
          throw new Error(`Opposite directions cannot be combined: ${action}`);
        }
      }
    }
    const key = bindingKey(b);
    if (seen.has(key)) throw new Error(`Duplicate combination: ${key}`);
    seen.add(key);
    bindings[action] = { input: b.input, modifiers: [...b.modifiers] };
  }
  return { version: 1, name: value.name.trim(), settings: { deadZone: settings.deadZone,
    triggerThreshold: settings.triggerThreshold }, bindings };
}

// Front is the most camera-facing normal. Right is the best screen-right normal
// perpendicular to front; top follows the right-handed cube frame.
export function relativeFaces(eye, screenRight) {
  const dot = (a, b) => a.reduce((sum, v, i) => sum + v * b[i], 0);
  const best = (candidates, direction) => candidates.reduce((a, b) =>
    dot(FACE_NORMALS[b], direction) > dot(FACE_NORMALS[a], direction) + 1e-10 ? b : a);
  const front = best([0, 1, 2, 3, 4, 5], eye);
  const right = best([0, 1, 2, 3, 4, 5].filter((i) => i !== front && i !== OPPOSITE[front]), screenRight);
  const f = FACE_NORMALS[front], r = FACE_NORMALS[right];
  const up = [f[1] * r[2] - f[2] * r[1], f[2] * r[0] - f[0] * r[2], f[0] * r[1] - f[1] * r[0]];
  const top = best([0, 1, 2, 3, 4, 5], up);
  return { front: FACES[front], back: FACES[OPPOSITE[front]], right: FACES[right],
    left: FACES[OPPOSITE[right]], top: FACES[top], bottom: FACES[OPPOSITE[top]] };
}
