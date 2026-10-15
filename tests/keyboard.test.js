import { expect, it, vi } from 'vitest';
import { handleUndoKey } from '../src/core/keyboard.js';

function setup(overrides = {}) {
  const frame = { contains: (target) => target === frame || target?.inside === true };
  const event = { key: 'Backspace', target: frame, preventDefault: vi.fn(), ...overrides };
  return { frame, event, undo: vi.fn() };
}

it('undoes Backspace in the focused cube frame or its controls', () => {
  for (const target of [undefined, { tagName: 'BUTTON', inside: true }]) {
    const { frame, event, undo } = setup(target ? { target } : {});
    expect(handleUndoKey(event, frame, true, undo)).toBe(true);
    expect(event.preventDefault).toHaveBeenCalledOnce();
    expect(undo).toHaveBeenCalledOnce();
  }
});

it('leaves keys outside the cube, text entry, modifiers and browser navigation alone', () => {
  for (const overrides of [
    { target: { tagName: 'BUTTON' } },
    ...['INPUT', 'TEXTAREA', 'SELECT'].map((tagName) => ({ target: { tagName, inside: true } })),
    { target: { isContentEditable: true, inside: true } },
    { ctrlKey: true }, { metaKey: true }, { altKey: true },
    { key: 'BrowserBack' }, { key: 'R' },
  ]) {
    const { frame, event, undo } = setup(overrides);
    expect(handleUndoKey(event, frame, true, undo)).toBe(false);
    expect(event.preventDefault).not.toHaveBeenCalled();
    expect(undo).not.toHaveBeenCalled();
  }
});

it('consumes Backspace without undoing when disabled or held down', () => {
  for (const [enabled, repeat] of [[false, false], [true, true]]) {
    const { frame, event, undo } = setup({ repeat });
    expect(handleUndoKey(event, frame, enabled, undo)).toBe(true);
    expect(event.preventDefault).toHaveBeenCalledOnce();
    expect(undo).not.toHaveBeenCalled();
  }
});

it('ignores Backspace when the cube frame is unmounted', () => {
  const { event, undo } = setup();
  expect(handleUndoKey(event, null, true, undo)).toBe(false);
  expect(undo).not.toHaveBeenCalled();
});
