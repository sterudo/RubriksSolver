import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

let module, storage, frame, pad, focused, hidden, activeElement, now, action;
beforeEach(async () => {
  vi.resetModules();
  storage = new Map();
  vi.stubGlobal('localStorage', {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
  });
  pad = { id: 'Xbox test', index: 0, mapping: 'standard',
    buttons: Array.from({ length: 16 }, () => ({ value: 0, pressed: false })), axes: [0, 0, 0, 0] };
  focused = true;
  hidden = false;
  activeElement = { tagName: 'BODY' };
  vi.stubGlobal('navigator', { getGamepads: () => [pad] });
  vi.stubGlobal('document', {
    createElement: () => ({}),
    get hidden() { return hidden; },
    hasFocus: () => focused,
    get activeElement() { return activeElement; },
  });
  vi.stubGlobal('requestAnimationFrame', (callback) => { frame = callback; return 1; });
  vi.stubGlobal('cancelAnimationFrame', vi.fn());
  module = await import('../src/gamepad.js');
  now = performance.now();
  action = vi.fn();
  module.startGamepad(action);
});
afterEach(() => vi.unstubAllGlobals());

function tick() { now += 16; frame(now); }
function button(index, value) { pad.buttons[index] = { value, pressed: value > 0.5 }; }

describe('gamepad polling', () => {
  it('fires once per press, chooses modifier chords, and never fires on modifier release', () => {
    tick();
    button(7, 1); tick();
    pad.axes[1] = -1; tick(); tick();
    expect(action.mock.calls.map(([a]) => a)).toEqual(['right-cw']);
    button(7, 0); tick();
    expect(action).toHaveBeenCalledTimes(1);
    pad.axes[1] = 0; tick();
    pad.axes[1] = -1; tick();
    expect(action.mock.calls.map(([a]) => a)).toEqual(['right-cw', 'left-ccw']);
  });
  it('repeats camera actions with bounded frame time and stops immediately on release', () => {
    tick();
    pad.axes[2] = 1;
    tick(); tick();
    expect(action.mock.calls.map(([a]) => a)).toEqual(['cube-right', 'cube-right']);
    expect(action.mock.calls[0][1]).toBeCloseTo(0.016);
    pad.axes[2] = 0; tick();
    expect(action).toHaveBeenCalledTimes(2);
  });
  it('requires neutral input on connection, focus regain, text entry and enable changes', () => {
    button(0, 1); tick();
    expect(action).not.toHaveBeenCalled();
    button(0, 0); tick(); button(0, 1); tick();
    expect(action).toHaveBeenCalledTimes(1);
    for (const suspend of [
      () => { focused = false; },
      () => { hidden = true; },
      () => { activeElement = { tagName: 'INPUT' }; },
      () => { module.gamepad.enabled = false; },
    ]) {
      suspend(); tick();
      focused = true; hidden = false; activeElement = { tagName: 'BODY' }; module.gamepad.enabled = true;
      tick();
      expect(action).toHaveBeenCalledTimes(1);
    }
    button(0, 0); tick(); button(0, 1); tick();
    expect(action).toHaveBeenCalledTimes(2);
  });
  it('captures modifiers plus the last pressed main input without dispatching gameplay', () => {
    tick();
    module.beginCapture('undo');
    tick();
    button(7, 1); tick();
    pad.axes[1] = -1; tick();
    expect(module.gamepad.candidate).toEqual({ input: 'LS-Up', modifiers: ['RT'] });
    button(7, 0); pad.axes[1] = 0; tick();
    expect(module.gamepad.candidate).toEqual({ input: 'LS-Up', modifiers: ['RT'] });
    expect(action).not.toHaveBeenCalled();
    module.cancelCapture(); tick();
    button(0, 1); tick();
    expect(action).toHaveBeenCalledWith('next-step', expect.any(Number));
  });
  it('does not fire held controls after disconnecting, changing profile or changing bindings', () => {
    tick(); button(0, 1); tick();
    expect(action).toHaveBeenCalledTimes(1);
    pad.mapping = ''; tick();
    pad.mapping = 'standard'; tick();
    module.gamepad.draft.bindings['next-step'] = { input: 'A', modifiers: ['RT'] };
    button(7, 1); tick();
    expect(action).toHaveBeenCalledTimes(1);
    button(0, 0); button(7, 0); tick();
    button(7, 1); tick(); button(0, 1); tick();
    expect(action).toHaveBeenCalledTimes(2);
  });
  it('selects only the requested connected controller', () => {
    const other = { ...pad, index: 1, id: 'Other', buttons: pad.buttons.map((b) => ({ ...b })) };
    navigator.getGamepads = () => [pad, other];
    module.gamepad.controllerIndex = 1;
    tick();
    button(0, 1); tick();
    expect(action).not.toHaveBeenCalled();
    other.buttons[0].value = 1; tick();
    expect(action).toHaveBeenCalledTimes(1);
    expect(module.gamepad.connected).toBe('Other');
  });
  it('does not capture pre-held controls on reconnect and clears a stale capture candidate', () => {
    tick();
    module.beginCapture('undo'); tick();
    button(7, 1); tick();
    expect(module.gamepad.candidate.input).toBe('RT');
    pad.mapping = ''; tick();
    pad.mapping = 'standard'; tick();
    expect(module.gamepad.candidate).toBeNull();
    expect(module.gamepad.captureReady).toBe(false);
    button(7, 0); tick();
    button(0, 1); tick();
    expect(module.gamepad.candidate).toEqual({ input: 'A', modifiers: [] });
    expect(action).not.toHaveBeenCalled();
  });
  it('does not resume a shorter continuous combination when its modifier is released', () => {
    module.gamepad.draft.bindings['cube-left'] = { input: 'RS-Right', modifiers: ['RT'] };
    tick();
    button(7, 1); tick();
    pad.axes[2] = 1; tick();
    expect(action.mock.calls.map(([a]) => a)).toEqual(['cube-left']);
    button(7, 0); tick();
    expect(action).toHaveBeenCalledTimes(1);
    pad.axes[2] = 0; tick(); pad.axes[2] = 1; tick();
    expect(action.mock.calls.map(([a]) => a)).toEqual(['cube-left', 'cube-right']);
  });
});

describe('profile persistence', () => {
  it('saves, saves as, renames, selects and deletes profiles as JSON', async () => {
    expect(module.saveProfile('Mine', true)).toBe(true);
    expect(module.gamepad.profiles.map((p) => p.name)).toEqual(['Standard', 'Mine']);
    expect(module.saveProfile('Mine', true)).toBe(false);
    expect(module.saveProfile('Renamed')).toBe(true);
    module.selectProfile('Standard');
    expect(module.gamepad.draft.name).toBe('Standard');
    module.deleteProfile();
    const data = JSON.parse(storage.get('rubiks-solver.gamepad.v1'));
    expect(data.selected).toBe('Renamed');
    expect(data.profiles.map((p) => p.name)).toEqual(['Renamed']);
    vi.resetModules();
    const reloaded = await import('../src/gamepad.js');
    expect(reloaded.gamepad.draft.name).toBe('Renamed');
  });
  it('reports invalid imports, storage failures and damaged stored data without overwriting it', async () => {
    module.gamepad.draft.settings.deadZone = 0;
    expect(module.saveProfile('Bad', true)).toBe(false);
    expect(module.gamepad.error).toMatch(/dead zone/);
    module.restoreDefault();
    localStorage.setItem = () => { throw new Error('quota exceeded'); };
    expect(module.saveProfile('Mine', true)).toBe(false);
    expect(module.gamepad.error).toMatch(/quota exceeded/);
    expect(module.gamepad.profiles).toHaveLength(1);
    storage.set('rubiks-solver.gamepad.v1', 'bad json');
    vi.resetModules();
    const reloaded = await import('../src/gamepad.js');
    expect(reloaded.gamepad.error).toMatch(/Could not load/);
    expect(storage.get('rubiks-solver.gamepad.v1')).toBe('bad json');
  });
});
