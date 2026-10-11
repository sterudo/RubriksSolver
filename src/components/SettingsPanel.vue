<template>
  <section class="panel">
    <h2>Tutor settings</h2>
    <p class="note">
      The built-in tutor works offline. Connect an AI model to get explanations in natural language and answers to your
      own questions. Everything is stored in this browser's localStorage and saved automatically.
    </p>

    <label class="field">
      Provider
      <select v-model="aiSettings.provider">
        <option value="builtin">Built-in (no AI)</option>
        <option value="gemini">Gemini API</option>
        <option value="local">Local model (Gemma via LM Studio / Ollama)</option>
      </select>
    </label>

    <fieldset :class="{ off: aiSettings.provider !== 'gemini' }">
      <legend>Gemini</legend>
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
      <p class="note">The key is sent only to Google's Gemini API from your browser; it is never sent anywhere else.</p>
    </fieldset>

    <fieldset :class="{ off: aiSettings.provider !== 'local' }">
      <legend>Local model</legend>
      <label class="field">
        OpenAI-compatible base URL
        <input v-model="aiSettings.localUrl" placeholder="http://localhost:1234/v1" />
      </label>
      <label class="field">
        Model name
        <input v-model="aiSettings.localModel" placeholder="google/gemma-4-e4b" />
      </label>
      <p class="note">Enable CORS in your local server so the browser may call it.</p>
    </fieldset>

    <div class="row">
      <button class="primary" :disabled="testing || aiSettings.provider === 'builtin'" @click="test">
        {{ testing ? 'Testing…' : 'Test connection' }}
      </button>
      <span v-if="result" class="status" :class="result.ok ? 'ok' : 'bad'">{{ result.text }}</span>
    </div>
    <p class="note">Saved ✓ — settings are stored automatically.</p>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { aiSettings } from '../aiSettings.js';
import { askModel, GEMINI_MODELS } from '../core/explain.js';

const showKey = ref(false);
const testing = ref(false);
const result = ref(null);

async function test() {
  testing.value = true;
  result.value = null;
  try {
    const text = await askModel({ ...aiSettings }, 'Reply with the single word OK.');
    result.value = { ok: true, text: `Connected: “${text.slice(0, 40)}”` };
  } catch (e) {
    result.value = {
      ok: false,
      text: e.message.includes('Failed to fetch') ? 'Could not reach the service (network or CORS).' : e.message,
    };
  } finally {
    testing.value = false;
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
fieldset.off {
  opacity: 0.55;
}
legend {
  padding: 0 6px;
  font-weight: 600;
}
</style>
