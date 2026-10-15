// Saving and loading cube positions.
//
// A position is written as a facelet string in the standard order U R F D L B, each
// face row-major as in the unfolded net, one letter per sticker (the face whose colour
// is there): 54 letters for a 3x3, 24 for a 2x2. Solved 3x3:
//   UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB

import { FACES, getSpec } from './cube.js';

const STORAGE_KEY = 'rubiks-solver.saves';

export function toFacelets(state, n) {
  const { faceGrid } = getSpec(n);
  return FACES.map((f) => faceGrid[f].flat().map((slot) => FACES[state[slot]]).join('')).join('');
}

export function fromFacelets(text) {
  const clean = String(text).replace(/\s+/g, '').toUpperCase();
  const n = clean.length === 54 ? 3 : clean.length === 24 ? 2 : 0;
  if (!n) throw new Error(`A position needs 54 letters (3×3) or 24 letters (2×2); this has ${clean.length}.`);
  const bad = [...clean].find((c) => !FACES.includes(c));
  if (bad) throw new Error(`"${bad}" is not a face letter - use only U, R, F, D, L, B.`);
  const { faceGrid } = getSpec(n);
  const state = new Uint8Array(getSpec(n).slotCount);
  const per = n * n;
  FACES.forEach((f, fi) => {
    faceGrid[f].flat().forEach((slot, k) => {
      state[slot] = FACES.indexOf(clean[fi * per + k]);
    });
  });
  return { n, state };
}

export function exportJson({ name, n, state }) {
  return JSON.stringify(
    { app: 'rubiks-solver', version: 1, name, n, facelets: toFacelets(state, n), savedAt: new Date().toISOString() },
    null,
    2,
  );
}

// Accepts an exported file or a bare facelet string.
export function parseImport(text) {
  const trimmed = String(text).trim();
  if (trimmed.startsWith('{')) {
    let data;
    try {
      data = JSON.parse(trimmed);
    } catch {
      throw new Error('The file is not valid JSON.');
    }
    if (typeof data.facelets !== 'string') throw new Error('The file has no cube position in it.');
    const parsed = fromFacelets(data.facelets);
    if (data.n && data.n !== parsed.n) throw new Error('The saved size does not match the stickers in the file.');
    return { ...parsed, name: typeof data.name === 'string' ? data.name : '' };
  }
  return { ...fromFacelets(trimmed), name: '' };
}

export function loadSaves() {
  try {
    const list = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(list) ? list.filter((s) => s && typeof s.facelets === 'string') : [];
  } catch {
    return [];
  }
}

export function persistSaves(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return true;
  } catch {
    return false;
  }
}
