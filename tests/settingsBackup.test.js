import { expect, it } from 'vitest';
import standard from '../src/gamepad-standard.json';
import { solvedState } from '../src/core/cube.js';
import { DEFAULT_SETTINGS } from '../src/core/explain.js';
import { exportSettings, importSettings } from '../src/core/settingsBackup.js';
import { toFacelets } from '../src/core/saves.js';

const prefix = 'rubiks-solver.';
function storage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    get length() { return values.size; },
    key: (index) => [...values.keys()][index],
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
}
const saved = {
  id: 'saved-1', name: 'My cube', n: 3, facelets: toFacelets(solvedState(3), 3),
  savedAt: '2026-10-15T12:00:00.000Z',
};
function backup(entries) {
  return JSON.stringify({ app: 'rubiks-solver', version: 1, entries });
}

it('round-trips all persisted settings, including credentials, positions and gamepad profiles', () => {
  const entries = {
    [`${prefix}ai`]: JSON.stringify({ ...DEFAULT_SETTINGS, geminiKey: 'test-key-not-a-real-secret' }),
    [`${prefix}saves`]: JSON.stringify([saved]),
    [`${prefix}gamepad.v1`]: JSON.stringify({ profiles: [standard], selected: standard.name, enabled: false }),
    [`${prefix}drama`]: '1',
    [`${prefix}finale`]: '0',
    [`${prefix}dramaSpeed`]: '0.32',
    [`${prefix}speed`]: '2.5',
    [`${prefix}swapMouseButtons`]: '1',
    [`${prefix}autoAlign`]: '0',
    [`${prefix}whiteBalance`]: '1',
  };
  const exported = exportSettings(storage({ ...entries, unrelated: 'private-other-app' }));
  expect(JSON.parse(exported).entries).toEqual(entries);
  expect(exported).not.toContain('private-other-app');
  const target = storage();
  const report = importSettings(exported, target);
  expect(report).toEqual({ imported: 10, skipped: 0, details: [] });
  for (const [key, value] of Object.entries(entries)) expect(target.getItem(key)).toBe(value);
});

it('imports valid fields and list entries despite invalid neighbors, without exposing credentials in reports', () => {
  const target = storage({ [`${prefix}ai`]: JSON.stringify({ ...DEFAULT_SETTINGS, localModel: 'keep-me' }) });
  const report = importSettings(backup({
    [`${prefix}ai`]: { geminiKey: 'sensitive-test-value', provider: 123, unknown: 'ignore', localUrl: 'http://localhost:1234/v1' },
    [`${prefix}saves`]: [saved, null, { ...saved, id: 'bad', facelets: 'not-a-position' }],
    [`${prefix}gamepad.v1`]: { profiles: [null, standard, standard], selected: 'missing', enabled: false },
    [`${prefix}whiteBalance`]: '1',
    [`${prefix}dramaSpeed`]: 'NaN',
    [`${prefix}future`]: '{"unknown":true}',
    unrelated: 'not-app-data',
  }), target);
  expect(report.imported).toBe(4);
  expect(report.skipped).toBeGreaterThan(0);
  expect(JSON.stringify(report)).not.toContain('sensitive-test-value');
  const ai = JSON.parse(target.getItem(`${prefix}ai`));
  expect(ai.geminiKey).toBe('sensitive-test-value');
  expect(ai.provider).toBe('builtin');
  expect(ai.localModel).toBe('keep-me');
  expect(ai).not.toHaveProperty('unknown');
  expect(JSON.parse(target.getItem(`${prefix}saves`))).toEqual([saved]);
  const gamepad = JSON.parse(target.getItem(`${prefix}gamepad.v1`));
  expect(gamepad.profiles).toHaveLength(1);
  expect(gamepad.selected).toBe(standard.name);
  expect(gamepad.enabled).toBe(false);
  expect(target.getItem('unrelated')).toBeNull();
});

it('preserves absent and invalid entries and replaces explicitly empty saved-position lists', () => {
  const target = storage({
    [`${prefix}drama`]: '1', [`${prefix}finale`]: '1', [`${prefix}saves`]: JSON.stringify([saved]),
  });
  const report = importSettings(backup({
    [`${prefix}drama`]: 'invalid',
    [`${prefix}saves`]: [null],
  }), target);
  expect(report.imported).toBe(0);
  expect(target.getItem(`${prefix}drama`)).toBe('1');
  expect(target.getItem(`${prefix}finale`)).toBe('1');
  expect(JSON.parse(target.getItem(`${prefix}saves`))).toEqual([saved]);
  importSettings(backup({ [`${prefix}saves`]: '[]' }), target);
  expect(target.getItem(`${prefix}saves`)).toBe('[]');
});

it('rejects malformed JSON and non-object input before any writes', () => {
  const target = storage({ [`${prefix}drama`]: '1' });
  for (const input of ['{broken', 'null', '[]', '"text"', '{"entries":[]}']) {
    expect(() => importSettings(input, target)).toThrow();
    expect(target.length).toBe(1);
    expect(target.getItem(`${prefix}drama`)).toBe('1');
  }
});

it('continues restoring after a storage write fails and reports the failure', () => {
  const target = storage();
  const write = target.setItem;
  target.setItem = (key, value) => {
    if (key === `${prefix}drama`) throw new Error('Quota exceeded');
    write(key, value);
  };
  const report = importSettings(backup({ [`${prefix}drama`]: '1', [`${prefix}finale`]: '0' }), target);
  expect(report.imported).toBe(1);
  expect(report.skipped).toBe(1);
  expect(report.details[0]).toContain('storage unavailable');
  expect(target.getItem(`${prefix}finale`)).toBe('0');
});

it('accepts a bare storage map and reports corrupt current AI settings while restoring valid fields', () => {
  const target = storage({ [`${prefix}ai`]: '{broken' });
  const report = importSettings(JSON.stringify({
    [`${prefix}ai`]: { geminiKey: 'test-key', geminiModel: 'unsupported-future-model' },
  }), target);
  expect(report.imported).toBe(1);
  expect(report.skipped).toBe(2);
  expect(JSON.parse(target.getItem(`${prefix}ai`))).toEqual({ ...DEFAULT_SETTINGS, geminiKey: 'test-key' });
});
