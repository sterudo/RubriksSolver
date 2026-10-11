import { describe, expect, it } from 'vitest';
import { applyMoves, randomScramble, solvedState } from '../src/core/cube.js';
import { exportJson, fromFacelets, parseImport, toFacelets } from '../src/core/saves.js';

describe('saving positions', () => {
  it('uses the standard facelet string for a solved cube', () => {
    expect(toFacelets(solvedState(3), 3)).toBe('UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB');
    expect(toFacelets(solvedState(2), 2)).toBe('UUUURRRRFFFFDDDDLLLLBBBB');
  });

  it('matches the well-known facelet string after R', () => {
    // After a single R move (Kociemba facelet notation).
    expect(toFacelets(applyMoves(solvedState(3), 3, ['R']), 3)).toBe('UUFUUFUUFRRRRRRRRRFFDFFDFFDDDBDDBDDBLLLLLLLLLUBBUBBUBB');
  });

  it('round-trips random positions through the string and the JSON file', () => {
    for (const n of [2, 3]) {
      for (let i = 0; i < 20; i++) {
        const state = applyMoves(solvedState(n), n, randomScramble(n, 25));
        const viaString = fromFacelets(toFacelets(state, n));
        expect(viaString.n).toBe(n);
        expect(Array.from(viaString.state)).toEqual(Array.from(state));
        const viaFile = parseImport(exportJson({ name: 'mine', n, state }));
        expect(viaFile.name).toBe('mine');
        expect(Array.from(viaFile.state)).toEqual(Array.from(state));
      }
    }
  });

  it('accepts a bare code with whitespace and lower case', () => {
    const { n, state } = parseImport(' uuuurrrr\nffffdddd llllbbbb ');
    expect(n).toBe(2);
    expect(Array.from(state)).toEqual(Array.from(solvedState(2)));
  });

  it('rejects bad input with a clear message', () => {
    expect(() => fromFacelets('UUU')).toThrow(/54 letters/);
    expect(() => fromFacelets('X'.repeat(54))).toThrow(/not a face letter/);
    expect(() => parseImport('{ nope')).toThrow(/not valid JSON/);
    expect(() => parseImport('{"a":1}')).toThrow(/no cube position/);
    expect(() => parseImport(JSON.stringify({ n: 3, facelets: 'UUUURRRRFFFFDDDDLLLLBBBB' }))).toThrow(/does not match/);
  });
});
