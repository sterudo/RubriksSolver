<template>
  <details class="panel">
    <summary>Gamepad controls</summary>
    <p class="note">Xbox / XInput-style controllers using the browser's standard mapping. Press a controller button
      to connect. Menu = Start; View = Back. The Xbox/Guide button is not supported.</p>
    <label class="row"><input v-model="gamepad.enabled" type="checkbox" @change="setEnabled" /> Enable gamepad</label>
    <label class="field">Controller
      <select v-model="gamepad.controllerIndex">
        <option value="">First connected controller</option>
        <option v-for="c in gamepad.controllers" :key="c.index" :value="c.index">{{ c.name }} (#{{ c.index + 1 }})</option>
      </select>
    </label>
    <p class="note">{{ gamepad.connected || 'No standard-mapped controller connected.' }}</p>
    <label class="field">Profile
      <select :value="gamepad.selected" @change="changeProfile($event.target)">
        <option v-for="p in gamepad.profiles" :key="p.name" :value="p.name">{{ p.name }}</option>
      </select>
    </label>
    <label class="field">Profile name <input v-model="name" maxlength="80" /></label>
    <div class="row">
      <button @click="save(false)">Save / Rename</button>
      <button @click="save(true)">Save As</button>
      <button :disabled="gamepad.profiles.length < 2" @click="remove">Delete</button>
      <button @click="restoreDefault">Restore default</button>
    </div>
    <p class="note">{{ dirty ? 'Unsaved changes (currently active).' : 'Profile saved.' }}
      Save As creates a new profile with the name above.</p>
    <label class="field">Stick dead zone: {{ gamepad.draft.settings.deadZone.toFixed(2) }}
      <input v-model.number="gamepad.draft.settings.deadZone" type="range" min="0.15" max="0.9" step="0.05" />
    </label>
    <label class="field">Trigger threshold: {{ gamepad.draft.settings.triggerThreshold.toFixed(2) }}
      <input v-model.number="gamepad.draft.settings.triggerThreshold" type="range" min="0.1" max="0.95" step="0.05" />
    </label>
    <p class="note">Click a binding, release all controls, then hold modifiers and press the main input last.
      Release the combination and click Confirm. Gameplay is paused while assigning.
      Camera/zoom repeat while held; moves and commands fire once per press. Longer combinations override shorter ones.
    <br>
     RB (Right Bumper), LB (Left Bumper), RT (Right Trigger), LT (Left Trigger),
     LS (Left Stick), RS (Right Stick), LSB (Left Stick Button), RSB (Right Stick Button)
  </p>
    <p v-if="conflicts.length" class="status bad">Duplicate combinations: {{ conflicts.join(', ') }}.
      Clear or change a conflicting binding before saving.</p>      
    <table class="bindings">
      <thead><tr><th>Action</th><th>Combination</th></tr></thead>
      <tbody>
        <tr v-for="action in ACTIONS" :key="action.id">
          <td>{{ action.label }}</td>
          <td>
            <template v-if="gamepad.capture === action.id">
              <span style="min-width: 150px;
    display: inline-block;
    margin-right: 16px;">{{ gamepad.candidate ? format(gamepad.candidate) : gamepad.captureReady ? 'Press combination…' : 'Release all controls…' }}</span>
              <button :disabled="!gamepad.candidate || !!gamepad.held.length" @click="confirm" style="color:lime;">Confirm</button>
              <button @click="cancelCapture">Cancel</button>
            </template>
            <template v-else>
              <button @click="beginCapture(action.id)" style="min-width: 150px; display: inline-block;margin-right: 16px;">{{ format(gamepad.draft.bindings[action.id]) }}</button>
              <button v-if="gamepad.draft.bindings[action.id]" :aria-label="`Clear ${action.label}`" style="color: red;" 
                @click="gamepad.draft.bindings[action.id] = null" title="Clear binding for {{ action.label }}">X</button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Profile JSON</h3>
    <div class="row">
      <button @click="exportFile">Export JSON</button>
      <button @click="copyJson">Show draft JSON</button>
    </div>
    <label class="field">Import JSON file <input type="file" accept=".json,application/json" @change="importFile" /></label>
    <label class="field">Copy / paste profile JSON
      <textarea v-model="json" rows="5" spellcheck="false"></textarea>
    </label>
    <button @click="importJson(json)">Import as draft</button>
    <p class="note">Imports are validated and do not overwrite a saved profile until you choose Save or Save As.
      Exported JSON can replace <code>src/gamepad-standard.json</code>.</p>
    <p v-if="gamepad.error" class="status bad" role="alert">{{ gamepad.error }}</p>
    <p v-if="gamepad.message" class="note" role="status">{{ gamepad.message }}</p>
    </details>
</template>

<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import { ACTIONS, bindingKey, validateProfile } from '../core/gamepad.js';
import { gamepad, beginCapture, cancelCapture, deleteProfile, restoreDefault, saveProfile, selectProfile, setEnabled } from '../gamepad.js';

const name = ref(gamepad.draft.name);
const json = ref('');
watch(() => gamepad.draft, () => { name.value = gamepad.draft.name; });
const dirty = computed(() => name.value !== gamepad.selected || JSON.stringify(gamepad.draft)
  !== JSON.stringify(gamepad.profiles.find((p) => p.name === gamepad.selected)));
const conflicts = computed(() => {
  const keys = Object.values(gamepad.draft.bindings).filter(Boolean).map(bindingKey);
  return [...new Set(keys.filter((key, i) => keys.indexOf(key) !== i))];
});
const format = (b) => b ? [...b.modifiers, b.input].join(' + ') : 'Click to assign';
function confirm() {
  const binding = gamepad.candidate;
  const duplicate = Object.entries(gamepad.draft.bindings).find(([id, b]) =>
    id !== gamepad.capture && b && bindingKey(b) === bindingKey(binding));
  if (duplicate) {
    gamepad.error = `That combination is already assigned to ${ACTIONS.find((a) => a.id === duplicate[0]).label}. Clear it first.`;
    return;
  }
  gamepad.draft.bindings[gamepad.capture] = { input: binding.input, modifiers: [...binding.modifiers] };
  gamepad.error = '';
  cancelCapture();
}
function changeProfile(select) {
  if (dirty.value && !window.confirm('Discard unsaved profile changes?')) { select.value = gamepad.selected; return; }
  selectProfile(select.value);
}
function save(asNew) {
  cancelCapture();
  saveProfile(name.value, asNew);
}
function remove() {
  if (window.confirm(`Delete profile "${gamepad.selected}" and discard its draft?`)) deleteProfile();
}
function profileJson() {
  return JSON.stringify(validateProfile({ ...gamepad.draft, name: name.value }), null, 2);
}
function copyJson() {
  try { json.value = profileJson(); gamepad.error = ''; }
  catch (e) { gamepad.error = e.message; }
}
function exportFile() {
  try {
    const data = profileJson();
    const url = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `${name.value.replace(/[^a-z0-9_-]/gi, '_')}.gamepad.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    gamepad.error = '';
  } catch (e) { gamepad.error = e.message; }
}
function importJson(text) {
  try {
    const profile = validateProfile(JSON.parse(text));
    if (dirty.value && !window.confirm('Discard unsaved changes and load this draft?')) return;
    cancelCapture();
    gamepad.draft = profile;
    gamepad.error = '';
    gamepad.message = 'Imported draft. Choose Save As with a unique name to keep it as a new profile.';
  } catch (e) { gamepad.error = `Could not import profile: ${e.message}`; }
}
async function importFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  try { importJson(await file.text()); }
  catch (e) { gamepad.error = `Could not read profile: ${e.message}`; }
  event.target.value = '';
}
onBeforeUnmount(cancelCapture);
</script>

<style scoped>
.field { display: grid; gap: 4px; margin: 10px 0; }
.bindings { width: 100%; border-collapse: collapse; font-size: 12px; margin: 12px 0; }
th, td { text-align: left; padding: 6px 4px; border-bottom: 1px solid var(--line); }
td button { margin: 2px; }
textarea { width: 100%; box-sizing: border-box; font-family: monospace; }
</style>
