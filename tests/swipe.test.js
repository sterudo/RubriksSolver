import { expect, it } from 'vitest';
import { getSpec } from '../src/core/cube.js';
import { layerTurn, swipeTurn } from '../src/core/swipe.js';

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
