<template>
  <section v-if="needRefresh || offlineReady || error" class="pwa-status" aria-label="App installation status">
    <p v-if="error" class="status bad" role="alert">{{ error }}</p>
    <template v-else-if="needRefresh">
      <p role="status">A new version is ready. Updating reloads the app and discards unsaved work.</p>
      <button :disabled="updating" @click="applyUpdate">{{ updating ? 'Updating...' : 'Update and reload' }}</button>
      <button :disabled="updating" @click="needRefresh = false">Later</button>
    </template>
    <template v-else-if="offlineReady">
      <p role="status">Ready for offline use. AI providers still need a connection.</p>
      <button @click="offlineReady = false">Dismiss</button>
    </template>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRegisterSW } from 'virtual:pwa-register/vue';

const error = ref('');
const updating = ref(false);
const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
  onRegisterError() {
    error.value = 'Offline setup failed. Check your connection and reload to try again.';
  },
});

async function applyUpdate() {
  if (!window.confirm('Update and reload? Unsaved cube changes and gamepad drafts will be lost.')) return;
  updating.value = true;
  try {
    await updateServiceWorker(true);
  } catch {
    error.value = 'Could not update the app. Reload when you are ready to try again.';
  } finally {
    updating.value = false;
  }
}
</script>

<style scoped>
.pwa-status {
  position: fixed;
  top: 76px;
  right: 12px;
  z-index: 100;
  max-width: min(360px, calc(100vw - 24px));
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--panel);
  box-shadow: 0 4px 20px #0008;
}
p { margin: 0 0 8px; }
button { margin-right: 6px; }
</style>
