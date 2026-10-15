<template>
  <details class="movepad">
    <summary>Move Pad</summary>
    <div class="pad">
      <div v-for="f in faces" :key="f" class="group">
        <button v-for="m in [f, `${f}'`, `${f}2`]" :key="m" :disabled="store.editing" @click="turn(m)">{{ m }}</button>
      </div>
    </div>
  </details>
</template>

<script setup>
import { store, turn } from '../store.js';

const faces = ['U', 'D', 'L', 'R', 'F', 'B'];
</script>
 
<style scoped>
.movepad {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 8px 12px;
}
.pad {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 6px;
}
.group {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
button {
  padding: 4px 0;
  font-weight: 600;
}
</style>
