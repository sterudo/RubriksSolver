import { describe, expect, it } from 'vitest';
import { ACTIONS, BUTTON_INPUTS, INPUTS, bindingKey, matchingBindings, readInputs, relativeFaces,
  validateProfile } from '../src/core/gamepad.js';
import standard from '../src/gamepad-standard.json';
import { FACE_NORMALS, FACES, OPPOSITE } from '../src/core/cube.js';

const settings = { deadZone: 0.5, triggerThreshold: 0.5 };
const pad = () => ({ buttons: Array.from({ length: 16 }, () => ({ value: 0, pressed: false })), axes: [0, 0, 0, 0] });

describe('standard gamepad inputs and profiles', () => {
  it('ships a valid JSON default with a unique binding for every action', () => {
    const profile = validateProfile(standard);
    expect(Object.keys(profile.bindings).sort()).toEqual(ACTIONS.map((a) => a.id).sort());
    expect(new Set(Object.values(profile.bindings).map(bindingKey)).size).toBe(ACTIONS.length);
    expect(INPUTS).toHaveLength(24);
  });
  it('reads all 16 standard button indices including analog triggers', () => {
    BUTTON_INPUTS.forEach((name, i) => {
      const p = pad();
      p.buttons[i].value = 1;
      expect([...readInputs(p, settings)]).toEqual([name]);
    });
  });
  it('uses thresholds and stick hysteresis without drifting', () => {
    const p = pad();
    p.buttons[6] = { value: 0.49, pressed: true };
    p.axes = [-0.49, -0.49, 0.49, 0.49];
    expect(readInputs(p, settings).size).toBe(0);
    p.buttons[6].value = 0.5;
    p.buttons[7].value = 0.9;
    p.axes = [-0.5, -1, 1, 0.5];
    const active = readInputs(p, settings);
    expect([...active]).toEqual(['LT', 'RT', 'LS-Left', 'LS-Up', 'RS-Right', 'RS-Down']);
    p.axes[0] = -0.41;
    expect(readInputs(p, settings, active).has('LS-Left')).toBe(true);
    p.axes[0] = -0.39;
    expect(readInputs(p, settings, active).has('LS-Left')).toBe(false);
  });
  it('suppresses plain and shorter combinations in favor of the longest matching combination', () => {
    const bindings = standard.bindings;
    expect(matchingBindings(bindings, new Set(['LS-Up'])).map(([a]) => a)).toEqual(['left-ccw']);
    expect(matchingBindings(bindings, new Set(['LS-Up', 'RT'])).map(([a]) => a)).toEqual(['right-cw']);
    expect(matchingBindings(bindings, new Set(['LS-Up', 'RT', 'LT'])).map(([a]) => a)).toEqual(['right-double']);
    expect(matchingBindings(bindings, new Set(['View', 'X'])).map(([a]) => a)).toEqual(['scramble']);
  });
  it('allows unbound actions but rejects malformed, duplicate, impossible or unknown bindings', () => {
    const copy = () => JSON.parse(JSON.stringify(standard));
    const profile = copy();
    profile.bindings.undo = null;
    expect(validateProfile(profile).bindings.undo).toBe(null);
    for (const mutate of [
      (p) => { p.version = 2; },
      (p) => { p.name = ' '; },
      (p) => { p.settings.deadZone = 0; },
      (p) => { p.settings.triggerThreshold = 1; },
      (p) => { p.bindings.undo = p.bindings['next-step']; },
      (p) => { p.bindings.undo.modifiers = ['B']; },
      (p) => { p.bindings.undo.input = 'Guide'; },
      (p) => { p.bindings.undo.modifiers = ['RT', 'RT']; },
      (p) => { p.bindings.undo = { input: 'LS-Up', modifiers: ['LS-Down'] }; },
      (p) => { p.bindings.unknown = null; },
    ]) {
      const p = copy();
      mutate(p);
      expect(() => validateProfile(p)).toThrow();
    }
    expect(() => validateProfile(null)).toThrow();
  });
});

describe('view-relative face assignment', () => {
  const dot = (a, b) => a.reduce((sum, v, i) => sum + v * b[i], 0);
  it('agrees with a straight-on front view and resolves exact corner ties deterministically', () => {
    expect(relativeFaces([0, 0, 1], [1, 0, 0])).toEqual({
      front: 'F', back: 'B', right: 'R', left: 'L', top: 'U', bottom: 'D',
    });
    expect(relativeFaces([1, 1, 1], [1, 0, -1]).front).toBe('U');
  });
  it('gives six distinct, opposite-paired faces across every face and camera roll', () => {
    for (let f = 0; f < 6; f++) {
      for (let r = 0; r < 6; r++) {
        if (r === f || r === OPPOSITE[f]) continue;
        const faces = relativeFaces(FACE_NORMALS[f], FACE_NORMALS[r]);
        expect(faces.front).toBe(FACES[f]);
        expect(faces.right).toBe(FACES[r]);
        expect(new Set(Object.values(faces)).size).toBe(6);
        for (const [a, b] of [['front', 'back'], ['right', 'left'], ['top', 'bottom']]) {
          expect(FACES.indexOf(faces[b])).toBe(OPPOSITE[FACES.indexOf(faces[a])]);
        }
      }
    }
  });
  it('front always has the strongest facing score, including freely rolled and diagonal views', () => {
    for (let i = 1; i < 100; i++) {
      const eye = [Math.sin(i), Math.cos(i * 2), Math.sin(i * 3)];
      const right = [-eye[2], 0, eye[0]];
      const faces = relativeFaces(eye, right);
      expect(new Set(Object.values(faces)).size).toBe(6);
      const score = dot(FACE_NORMALS[FACES.indexOf(faces.front)], eye);
      expect(score).toBeCloseTo(Math.max(...FACE_NORMALS.map((n) => dot(n, eye))), 10);
    }
  });
});
