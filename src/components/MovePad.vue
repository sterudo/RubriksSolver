<template>
  <div class="pad">
    <div v-for="f in faces" :key="f" class="group">
      <button v-for="m in [f, `${f}'`, `${f}2`]" :key="m" :disabled="store.editing" @click="turn(m)">{{ m }}</button>
    </div>
  </div>
</template>

<script setup>
import { store, turn } from '../store.js';

const faces = ['U', 'D', 'L', 'R', 'F', 'B'];
</script>

<style scoped>
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
