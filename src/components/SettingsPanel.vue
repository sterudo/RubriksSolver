<template>
  
  <details class="panel">
    <summary>Tutor / AI Configuration</summary>
    <p class="note">
      The built-in tutor works offline. Connect an AI model to get explanations in natural language and answers to your
      own questions. Everything is stored in this browser's localStorage and saved automatically.
    </p>

    <label class="field">
      Active provider
      <select v-model="aiSettings.provider">
        <option value="builtin">Built-in (no AI)</option>
        <option value="gemini">Gemini API</option>
        <option value="local">Local model (Gemma via LM Studio / Ollama)</option>
      </select>
    </label>

    <fieldset>
      <legend>Gemini <span v-if="aiSettings.provider === 'gemini'" class="pill">active</span></legend>
      <label class="field">
        API key
        <span class="key-row">
          <input
            v-model="aiSettings.geminiKey"
            :type="showKey ? 'text' : 'password'"
            autocomplete="off"
            spellcheck="false"
            placeholder="AIza…"
          />
          <button type="button" @click="showKey = !showKey">{{ showKey ? 'Hide' : 'Show' }}</button>
          <button type="button" :disabled="!aiSettings.geminiKey" @click="aiSettings.geminiKey = ''">Clear</button>
        </span>
      </label>
      <label class="field">
        Model
        <select v-model="aiSettings.geminiModel">
          <option v-for="m in GEMINI_MODELS" :key="m" :value="m">{{ m }}</option>
        </select>
      </label>
      <div class="row">
        <button class="primary" :disabled="gemini.busy" @click="run('gemini', testGemini)">
          {{ gemini.busy ? 'Testing…' : 'Test Gemini' }}
        </button>
      </div>
      <TestResult :state="gemini" />
      <p class="note">The key is sent only to Google's Gemini API from your browser; it is never sent anywhere else.</p>
    </fieldset>

    <fieldset>
      <legend>Local model <span v-if="aiSettings.provider === 'local'" class="pill">active</span></legend>
      <label class="field">
        OpenAI-compatible base URL
        <input v-model="aiSettings.localUrl" placeholder="http://localhost:1234/v1" />
      </label>
      <label class="field">
        Model name
        <input v-model="aiSettings.localModel" placeholder="google/gemma-4-e4b" />
      </label>
      <div class="row">
        <button class="primary" :disabled="local.busy" @click="run('local', testLocal)">
          {{ local.busy ? 'Testing…' : 'Test local model' }}
        </button>
      </div>
      <TestResult :state="local" />
      <p class="note">
        LM Studio: Developer → Server Settings → turn on <b>Enable CORS</b> (browsers refuse replies from servers without
        it, even though other apps can connect). Ollama: set <code>OLLAMA_ORIGINS=*</code>.
      </p>
    </fieldset>
    <p class="note">Saved ✓ — settings are stored automatically.</p>
  </details>
  <br>
  <GamepadSettings />

  <br>
  <details open>

    <summary>Settings backup</summary>
    <p class="note">Export all saved app settings, including AI API keys, saved cube positions,
      gamepad profiles and preferences, to one JSON file.</p>
    <p class="status bad">The file contains API keys in plain text. Keep it private and only import files you trust.</p>
    <p class="note">Import replaces matching stored settings and lists, leaves missing settings untouched,
      and skips unsupported or invalid entries. Reload afterward to apply restored settings.
      Unsaved gamepad drafts and the current unsaved cube position are not included.</p>
    <div class="row">
      <button :disabled="backupBusy" @click="exportBackup">Export all settings</button>
      <button :disabled="backupBusy" @click="backupFile.click()">Import all settings</button>
      <input ref="backupFile" type="file" accept=".json,application/json" hidden @change="importBackup" />
      <button v-if="backupImported" @click="reloadSettings">Reload to apply</button>
    </div>
    <p v-if="backupMessage" :class="['status', backupError ? 'bad' : 'ok']" role="status">{{ backupMessage }}</p>
    <details v-if="backupDetails.length">
      <summary>Skipped entries and warnings</summary>
      <ul><li v-for="(detail, index) in backupDetails" :key="index">{{ detail }}</li></ul>
    </details>
  </details>
  <br>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import { aiSettings } from '../aiSettings.js';
import { GEMINI_MODELS, testGemini, testLocal } from '../core/explain.js';
import TestResult from './TestResult.vue';
import GamepadSettings from './GamepadSettings.vue';
import { exportSettings, importSettings } from '../core/settingsBackup.js';

const backupFile = ref(null);
const backupBusy = ref(false);
const backupImported = ref(false);
const backupMessage = ref('');
const backupError = ref(false);
const backupDetails = ref([]);

function exportBackup() {
  backupDetails.value = [];
  try {
    const data = exportSettings();
    const url = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `rubiks-solver-settings-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    backupMessage.value = 'Exported all saved app settings, including API keys. Keep the file private.';
    backupError.value = false;
  } catch (e) {
    backupMessage.value = `Could not export settings: ${e.message}`;
    backupError.value = true;
  }
}

async function importBackup(event) {
  const file = event.target.files?.[0];
  event.target.value = '';
  if (!file || !window.confirm('Import this settings backup? Matching stored settings and lists will be replaced, including API keys. Reload afterward to apply.')) return;
  backupBusy.value = true;
  backupDetails.value = [];
  try {
    const report = importSettings(await file.text());
    backupImported.value ||= report.imported > 0;
    backupDetails.value = report.details;
    backupError.value = report.imported === 0;
    backupMessage.value = `Restored ${report.imported} storage entries; skipped ${report.skipped} entries or fields.`
      + (backupImported.value ? ' Reload to apply before changing other settings; unsaved work will be lost on reload.' : '');
  } catch (e) {
    backupMessage.value = `Could not import settings: ${e.message}`;
    backupError.value = true;
  } finally {
    backupBusy.value = false;
  }
}

function reloadSettings() {
  if (window.confirm('Reload to apply imported settings? Unsaved cube changes and gamepad drafts will be lost.')) window.location.reload();
}

const showKey = ref(false);
const gemini = reactive({ busy: false, result: null });
const local = reactive({ busy: false, result: null });
const boxes = { gemini, local };

// A result describes the settings it was run with, so drop it as soon as they change.
watch(
  () => [aiSettings.geminiKey, aiSettings.geminiModel],
  () => (gemini.result = null),
);
watch(
  () => [aiSettings.localUrl, aiSettings.localModel],
  () => (local.result = null),
);

async function run(which, test) {
  const box = boxes[which];
  box.busy = true;
  box.result = null;
  try {
    box.result = await test({ ...aiSettings });
  } finally {
    box.busy = false;
  }
}
</script>

<style scoped>
.field {
  display: grid;
  gap: 4px;
  margin: 10px 0;
  font-size: 12px;
  color: var(--muted);
}
.key-row {
  display: flex;
  gap: 6px;
}
.key-row input {
  flex: 1;
  min-width: 0;
}
fieldset {
  border: 1px solid var(--line);
  border-radius: 10px;
  margin: 12px 0;
  padding: 4px 12px 8px;
}
legend {
  padding: 0 6px;
  font-weight: 600;
}
</style>
