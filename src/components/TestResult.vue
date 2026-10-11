<template>
  <div v-if="state.busy" class="result wait">Contacting the service…</div>
  <div v-else-if="state.result" class="result" :class="state.result.ok ? 'ok' : 'bad'" role="status">
    <div class="msg">{{ state.result.ok ? '✓' : '✗' }} {{ state.result.message }}</div>
    <div v-if="state.result.reply" class="reply">
      <span>Model response</span>
      {{ state.result.reply }}
    </div>
  </div>
</template>

<script setup>
defineProps({ state: { type: Object, required: true } });
</script>

<style scoped>
.result {
  border-radius: 8px;
  padding: 8px 10px;
  margin: 8px 0;
  font-size: 13px;
  line-height: 1.4;
  overflow-wrap: anywhere;
}
.wait {
  background: #1b2030;
  color: var(--muted);
}
.ok {
  background: rgba(76, 217, 100, 0.1);
  border: 1px solid rgba(76, 217, 100, 0.45);
  color: var(--ok);
}
.bad {
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.45);
  color: var(--bad);
}
.reply {
  margin-top: 6px;
  padding: 6px 8px;
  border-radius: 6px;
  background: #0f1116;
  color: var(--text);
  white-space: pre-wrap;
}
.reply span {
  display: block;
  font-size: 11px;
  color: var(--muted);
  margin-bottom: 2px;
}
</style>
