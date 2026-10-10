<template>
  <div class="tutor">
    <div class="tutor-head">
      <h3>Tutor</h3>
      <span class="pill">{{ providerLabel }}</span>
      <button class="link" @click="showSettings = !showSettings">{{ showSettings ? 'Close' : 'Settings' }}</button>
    </div>

    <div v-if="showSettings" class="settings">
      <label>
        Provider
        <select v-model="settings.provider" @change="persist">
          <option value="builtin">Built-in (no AI)</option>
          <option value="gemini">Gemini API</option>
          <option value="local">Local model (Gemma via LM Studio / Ollama)</option>
        </select>
      </label>
      <template v-if="settings.provider === 'gemini'">
        <label>
          API key
          <input v-model="settings.geminiKey" type="password" autocomplete="off" placeholder="AIza…" @change="persist" />
        </label>
        <label>
          Model
          <input v-model="settings.geminiModel" @change="persist" />
        </label>
        <p class="note">The key is stored only in this browser (localStorage) and sent directly to Google.</p>
      </template>
      <template v-if="settings.provider === 'local'">
        <label>
          OpenAI-compatible base URL
          <input v-model="settings.localUrl" placeholder="http://localhost:1234/v1" @change="persist" />
        </label>
        <label>
          Model name
          <input v-model="settings.localModel" placeholder="google/gemma-4-e4b" @change="persist" />
        </label>
        <p class="note">Enable CORS in your local server so the browser may call it.</p>
      </template>
    </div>

    <p class="answer" :class="{ ai: answerIsAi }">{{ shown }}</p>
    <p v-if="error" class="status bad">{{ error }}</p>

    <div class="ask">
      <input v-model="question" placeholder="Ask about this step…" :disabled="loading" @keydown.enter="ask(question)" />
      <button :disabled="loading || settings.provider === 'builtin'" :title="settings.provider === 'builtin' ? 'Choose an AI provider in Settings' : ''" @click="ask(question)">
        {{ loading ? '…' : 'Ask' }}
      </button>
      <button :disabled="loading || settings.provider === 'builtin'" @click="ask('')">Explain</button>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue';
import { builtinAnswer, explain, loadSettings, saveSettings } from '../core/explain.js';

const props = defineProps({ context: { type: Object, required: true } });

const settings = reactive(loadSettings());
const showSettings = ref(false);
const question = ref('');
const loading = ref(false);
const error = ref('');
const aiText = ref('');
const answerIsAi = ref(false);

const providerLabel = computed(() => ({ builtin: 'Built-in', gemini: 'Gemini', local: 'Local model' })[settings.provider]);
const shown = computed(() => (answerIsAi.value && aiText.value ? aiText.value : builtinAnswer(props.context)));

// A new step invalidates the previous AI answer.
watch(
  () => [props.context.stageTitle, props.context.stepLabel],
  () => {
    answerIsAi.value = false;
    aiText.value = '';
    error.value = '';
  },
);

function persist() {
  saveSettings({ ...settings });
}

async function ask(q) {
  loading.value = true;
  error.value = '';
  try {
    const res = await explain({ ...settings }, { ...props.context, question: q || '' });
    aiText.value = res.text;
    answerIsAi.value = res.ai;
    question.value = '';
  } catch (e) {
    error.value = e.message.includes('Failed to fetch')
      ? 'Could not reach the model (network or CORS). Check the URL/key in Settings.'
      : e.message;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.tutor-head {
  display: flex;
  align-items: center;
  gap: 8px;
}
.tutor-head h3 {
  margin: 0;
}
.link {
  margin-left: auto;
  background: none;
  border: 0;
  color: var(--accent);
  cursor: pointer;
}
.settings {
  display: grid;
  gap: 8px;
  margin: 8px 0;
}
.settings label {
  display: grid;
  gap: 2px;
  font-size: 12px;
  color: var(--muted);
}
.answer {
  white-space: pre-line;
  line-height: 1.45;
  margin: 8px 0;
}
.answer.ai {
  border-left: 3px solid var(--accent);
  padding-left: 8px;
}
.ask {
  display: flex;
  gap: 6px;
}
.ask input {
  flex: 1;
  min-width: 0;
}
</style>
