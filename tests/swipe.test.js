import { expect, it } from 'vitest';
import { getSpec } from '../src/core/cube.js';
import { layerTurn, pointerDragMode, swipeTurn } from '../src/core/swipe.js';

it('maps desktop right drags to layer turns and optionally swaps left and right', () => {
  const options = { desktop: true, swapMouseButtons: false, touchMode: 'rotate', paintable: false };
  expect(pointerDragMode('mouse', 0, options)).toBe('rotate');
  expect(pointerDragMode('mouse', 2, options)).toBe('move');
  expect(pointerDragMode('mouse', 1, options)).toBeNull();
  options.swapMouseButtons = true;
  expect(pointerDragMode('mouse', 0, options)).toBe('move');
  expect(pointerDragMode('mouse', 2, options)).toBe('rotate');
  expect(pointerDragMode('mouse', 1, options)).toBeNull();
});

it('preserves touch modes, non-desktop mouse behavior and left-button painting', () => {
  for (const swapMouseButtons of [false, true]) {
    for (const touchMode of ['rotate', 'move']) {
      const options = { desktop: true, swapMouseButtons, touchMode, paintable: false };
      expect(pointerDragMode('touch', 0, options)).toBe(touchMode);
      expect(pointerDragMode('pen', 0, options)).toBe('rotate');
      expect(pointerDragMode('mouse', 0, { ...options, desktop: false })).toBe('rotate');
      expect(pointerDragMode('mouse', 1, { ...options, desktop: false })).toBe('rotate');
      expect(pointerDragMode('mouse', 2, { ...options, desktop: false })).toBe('rotate');
      expect(pointerDragMode('mouse', 0, { ...options, paintable: true })).toBe('rotate');
      expect(pointerDragMode('mouse', 1, { ...options, paintable: true })).toBeNull();
      expect(pointerDragMode('mouse', 2, { ...options, paintable: true })).toBeNull();
    }
  }
});

it('requires a deliberate swipe and chooses the closest projected tangent', () => {
  const spec = getSpec(3);
  const slot = spec.stickers.findIndex((s) => s.normal[2] === 1 && s.pos[0] === 2 && s.pos[1] === 2);
  const candidates = [{ axis: 0, x: 0, y: -1 }, { axis: 1, x: 1, y: 0 }];
  expect(swipeTurn(spec, slot, candidates, 0, -23)).toBeNull();
  expect(swipeTurn(spec, slot, candidates, 0, -24)).toBe("R'");
  expect(swipeTurn(spec, slot, candidates, 0, 30)).toBe('R');
  expect(swipeTurn(spec, slot, candidates, 30, 1)).toBe("U'");
  expect(swipeTurn(spec, slot, candidates, -30, 1)).toBe('U');
  expect(swipeTurn(spec, slot, [], 0, 30)).toBeNull();
  expect(swipeTurn(spec, slot, [{ axis: 0, x: 0, y: 0 }], 0, 30)).toBeNull();
});

it('follows screen direction after camera roll and perspective skew', () => {
  const spec = getSpec(2);
  const slot = spec.stickers.findIndex((s) => s.normal[2] === 1 && s.pos[0] === 1 && s.pos[1] === 1);
  const candidates = [{ axis: 0, x: -3, y: -1 }, { axis: 1, x: 1, y: -3 }];
  expect(swipeTurn(spec, slot, candidates, -60, -20)).toBe("R'");
  expect(swipeTurn(spec, slot, candidates, 60, 20)).toBe('R');
  expect(swipeTurn(spec, slot, candidates, 20, -60)).toBe("U'");
  expect(swipeTurn(spec, slot, candidates, -20, 60)).toBe('U');
});

it('supports every outer layer on both cube sizes and middle-layer equivalents', () => {
  for (const size of [2, 3]) {
    const spec = getSpec(size);
    for (const [axis, negative, positive] of [[0, 'L', 'R'], [1, 'D', 'U'], [2, 'B', 'F']]) {
      for (const sign of [-1, 1]) {
        const slot = spec.stickers.findIndex((s) => s.pos[axis] === sign * spec.m);
        expect(layerTurn(spec, slot, axis, 1)).toBe(sign > 0 ? `${positive}'` : negative);
        expect(layerTurn(spec, slot, axis, -1)).toBe(sign > 0 ? positive : `${negative}'`);
      }
      if (size === 3) {
        const slot = spec.stickers.findIndex((s) => s.pos[axis] === 0);
        expect(layerTurn(spec, slot, axis, 1)).toBe(`${positive} ${negative}'`);
        expect(layerTurn(spec, slot, axis, -1)).toBe(`${positive}' ${negative}`);
      }
    }
  }
});
