import { DEFAULT_SETTINGS, GEMINI_MODELS } from './explain.js';
import { validateProfile } from './gamepad.js';
import { fromFacelets } from './saves.js';

const PREFIX = 'rubiks-solver.';
const FLAGS = new Set(['drama', 'finale', 'autoAlign', 'whiteBalance', 'swapMouseButtons']);
const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

export function exportSettings(storage = localStorage) {
  const entries = {};
  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i);
    if (key?.startsWith(PREFIX)) entries[key] = storage.getItem(key);
  }
  return JSON.stringify({ app: 'rubiks-solver', version: 1, exportedAt: new Date().toISOString(), entries }, null, 2);
}

export function importSettings(text, storage = localStorage) {
  let data;
  try { data = JSON.parse(text); }
  catch { throw new Error('The file is not valid JSON.'); }
  if (!isObject(data)) throw new Error('Expected a settings JSON object.');
  const entries = data.entries ?? data;
  if (!isObject(entries)) throw new Error('Expected a settings entries object.');
  const report = { imported: 0, skipped: 0, details: [] };
  function skip(label) {
    report.skipped++;
    report.details.push(label);
  }
  for (const [key, raw] of Object.entries(entries)) {
    if (!key.startsWith(PREFIX)) { skip('Unrecognized storage entry.'); continue; }
    const name = key.slice(PREFIX.length);
    try {
      let value;
      if (FLAGS.has(name)) {
        if (raw !== '0' && raw !== '1') throw new Error('Expected 0 or 1.');
        value = raw;
      } else if (name === 'dramaSpeed' || name === 'speed') {
        const speed = typeof raw === 'string' && raw.trim() ? Number(raw) : NaN;
        const [min, max] = name === 'speed' ? [0.5, 4] : [0.05, 1.2];
        if (!Number.isFinite(speed) || speed < min || speed > max) throw new Error('Invalid speed.');
        value = raw;
      } else if (name === 'ai') {
        const incoming = typeof raw === 'string' ? JSON.parse(raw) : raw;
        if (!isObject(incoming)) throw new Error('Expected AI settings.');
        let previous = {};
        const stored = storage.getItem(key);
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            if (isObject(parsed)) previous = parsed;
          } catch { skip('Existing AI settings were unreadable; using defaults for missing fields.'); }
        }
        const settings = { ...DEFAULT_SETTINGS, ...previous };
        let accepted = 0;
        for (const [field, setting] of Object.entries(incoming)) {
          const valid = Object.hasOwn(DEFAULT_SETTINGS, field) && typeof setting === 'string'
            && (field !== 'provider' || ['builtin', 'gemini', 'local'].includes(setting))
            && (field !== 'geminiModel' || GEMINI_MODELS.includes(setting));
          if (valid) { settings[field] = setting; accepted++; }
          else skip('Unsupported or invalid AI field.');
        }
        if (!accepted) throw new Error('No supported AI fields.');
        value = JSON.stringify(settings);
      } else if (name === 'saves') {
        const incoming = typeof raw === 'string' ? JSON.parse(raw) : raw;
        if (!Array.isArray(incoming)) throw new Error('Expected saved positions.');
        const saves = [];
        for (const entry of incoming) {
          try {
            if (!isObject(entry) || typeof entry.facelets !== 'string' || typeof entry.name !== 'string'
              || typeof entry.id !== 'string' || !entry.id || typeof entry.savedAt !== 'string'
              || !Number.isFinite(Date.parse(entry.savedAt))) throw new Error('Invalid saved position.');
            const parsed = fromFacelets(entry.facelets);
            if (entry.n !== parsed.n || saves.some((s) => s.id === entry.id)) throw new Error('Invalid size or duplicate position.');
            saves.push({ id: entry.id, name: entry.name, n: parsed.n, facelets: entry.facelets, savedAt: entry.savedAt });
          } catch { skip('Invalid saved position.'); }
        }
        if (incoming.length && !saves.length) throw new Error('No supported saved positions.');
        value = JSON.stringify(saves);
      } else if (name === 'gamepad.v1') {
        const incoming = typeof raw === 'string' ? JSON.parse(raw) : raw;
        if (!isObject(incoming) || !Array.isArray(incoming.profiles)) throw new Error('Expected gamepad profiles.');
        const profiles = [];
        for (const entry of incoming.profiles) {
          try {
            const profile = validateProfile(entry);
            if (profiles.some((p) => p.name === profile.name)) throw new Error('Duplicate name.');
            profiles.push(profile);
          } catch { skip('Invalid or duplicate gamepad profile.'); }
        }
        if (!profiles.length) throw new Error('No supported gamepad profiles.');
        if (incoming.enabled !== undefined && typeof incoming.enabled !== 'boolean') skip('Invalid gamepad enabled flag.');
        const selected = profiles.some((p) => p.name === incoming.selected) ? incoming.selected : profiles[0].name;
        value = JSON.stringify({ profiles, selected, enabled: incoming.enabled !== false });
      } else {
        skip('Unsupported app storage entry.');
        continue;
      }
      storage.setItem(key, value);
      report.imported++;
    } catch {
      skip(`Could not restore ${['ai', 'saves', 'gamepad.v1', 'dramaSpeed', 'speed', ...FLAGS].includes(name) ? name : 'entry'} (invalid data or storage unavailable).`);
    }
  }
  return report;
}
