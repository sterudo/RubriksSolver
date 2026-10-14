<template>
  <details class="saveload">
    <summary>Save / load position</summary>

    <div class="row">
      <input v-model="name" class="grow" :placeholder="defaultName" maxlength="40" @keydown.enter="save" />
      <button class="primary" @click="save">Save</button>
    </div>
 
    <ul v-if="saves.length" class="saved">
      <li v-for="s in saves" :key="s.id">
        <span class="title" :title="s.name">{{ s.name }}</span>
        <small>{{ s.n }}×{{ s.n }} · {{ when(s.savedAt) }}</small>
        <button @click="loadSaved(s)">Load</button>
        <button title="Delete" @click="remove(s)">✕</button>
      </li>
    </ul>
    <p v-else class="note">No saved positions yet. Saves stay in this browser.</p>

    <div class="row">
      <button @click="download">Export file</button>
      <label class="file-btn">
        Import file
        <input type="file" accept=".json,.txt,application/json,text/plain" @change="importFile" />
      </label>
      <button @click="copyCode">Copy code</button>
    </div>
    <div class="row">
      <input v-model="code" class="grow" placeholder="Paste a position code (54 or 24 letters)…" @keydown.enter="loadCode" />
      <button :disabled="!code.trim()" @click="loadCode">Load code</button>
    </div>

    <p v-if="message" class="msg" :class="{ bad: isError }" role="status">{{ message }}</p>
  </details>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue';
import { exportJson, loadSaves, parseImport, persistSaves, toFacelets } from '../core/saves.js';
import { cubeState, loadPosition, store } from '../store.js';

const saves = reactive(loadSaves());
const name = ref('');
const code = ref('');
const message = ref('');
const isError = ref(false);

watch(saves, () => persistSaves([...saves]), { deep: true });

const defaultName = computed(() => `${store.n}×${store.n} position ${saves.filter((s) => s.n === store.n).length + 1}`);

function say(text, error = false) {
  message.value = text;
  isError.value = error;
}

const when = (iso) => new Date(iso).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' });

function save() {
  const title = name.value.trim() || defaultName.value;
  const facelets = toFacelets(cubeState.value, store.n);
  const existing = saves.find((s) => s.name === title && s.n === store.n);
  if (existing) {
    existing.facelets = facelets;
    existing.savedAt = new Date().toISOString();
  } else {
    saves.unshift({ id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, name: title, n: store.n, facelets, savedAt: new Date().toISOString() });
  }
  name.value = '';
  say(`${existing ? 'Updated' : 'Saved'} "${title}".`);
}

async function apply(parsed, label) {
  await loadPosition(parsed.n, parsed.state);
  say(`Loaded ${label}.`);
}

function loadSaved(s) {
  try {
    apply(parseImport(s.facelets), `"${s.name}"`);
  } catch (e) {
    say(e.message, true);
  }
}

function remove(s) {
  saves.splice(saves.indexOf(s), 1);
  say(`Deleted "${s.name}".`);
}

function download() {
  const title = name.value.trim() || defaultName.value;
  const blob = new Blob([exportJson({ name: title, n: store.n, state: cubeState.value })], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${title.replace(/[^\w\-. ]+/g, '_')}.cube.json`;
  a.click();
  URL.revokeObjectURL(url);
  say(`Exported "${title}".`);
}

async function importFile(e) {
  const file = e.target.files?.[0];
  e.target.value = ''; // allow importing the same file again
  if (!file) return;
  try {
    const parsed = parseImport(await file.text());
    await apply(parsed, parsed.name ? `"${parsed.name}"` : file.name);
  } catch (err) {
    say(err.message, true);
  }
}

async function copyCode() {
  const text = toFacelets(cubeState.value, store.n);
  try {
    await navigator.clipboard.writeText(text);
    say('Position code copied to the clipboard.');
  } catch {
    code.value = text;
    say('Clipboard not available – the code is in the box below, copy it from there.');
  }
}

function loadCode() {
  try {
    apply(parseImport(code.value), 'the pasted code');
    code.value = '';
  } catch (e) {
    say(e.message, true);
  }
}
</script>

<style scoped>
.saveload {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 8px 12px;
}
summary {
  cursor: pointer;
  font-weight: 600;
}
.grow {
  flex: 1;
  min-width: 0;
}
.saved {
  list-style: none;
  margin: 6px 0;
  padding: 0;
  max-height: 150px;
  overflow: auto;
  display: grid;
  gap: 4px;
}
.saved li {
  display: flex;
  align-items: center;
  gap: 8px;
}
.title {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
small {
  color: var(--muted);
  white-space: nowrap;
}
.file-btn {
  position: relative;
  cursor: pointer;
  background: #1b2030;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 6px 12px;
}
.file-btn:hover {
  border-color: var(--accent);
}
.file-btn input {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
  width: 100%;
}
.msg {
  margin: 6px 0 0;
  font-size: 13px;
  color: var(--ok);
}
.msg.bad {
  color: var(--bad);
}
</style>
