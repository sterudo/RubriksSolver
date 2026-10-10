<template>
  <div class="net" :class="`n${n}`">
    <div v-for="f in layout" :key="f.name" class="face" :style="{ gridColumn: f.col, gridRow: f.row }">
      <div v-for="(row, r) in grid[f.name]" :key="r" class="nrow">
        <button
          v-for="(slot, c) in row"
          :key="c"
          class="cell"
          :class="{ locked: isCenter(slot) }"
          :style="{ background: FACE_COLOR_HEX[state[slot]] }"
          :title="`${f.name} ${r + 1},${c + 1}`"
          @click="emit('paint', slot)"
        ></button>
      </div>
      <span class="tag">{{ f.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { FACE_COLOR_HEX, getSpec } from '../core/cube.js';

const props = defineProps({ n: Number, state: Object });
const emit = defineEmits(['paint']);

const layout = [
  { name: 'U', col: 2, row: 1 },
  { name: 'L', col: 1, row: 2 },
  { name: 'F', col: 2, row: 2 },
  { name: 'R', col: 3, row: 2 },
  { name: 'B', col: 4, row: 2 },
  { name: 'D', col: 2, row: 3 },
];
const spec = computed(() => getSpec(props.n));
const grid = computed(() => spec.value.faceGrid);
const isCenter = (slot) => props.n === 3 && spec.value.cubies[spec.value.stickers[slot].cubie].kind === 'center';
</script>

<style scoped>
.net {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 6px;
  justify-content: center;
}
.face {
  position: relative;
  display: grid;
  gap: 2px;
  padding: 2px;
  background: #0f1116;
  border-radius: 6px;
}
.nrow {
  display: flex;
  gap: 2px;
}
.cell {
  width: 26px;
  height: 26px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  padding: 0;
}
.n2 .cell {
  width: 32px;
  height: 32px;
}
.cell.locked {
  cursor: not-allowed;
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.35);
}
.cell:not(.locked):hover {
  outline: 2px solid #fff;
}
.tag {
  position: absolute;
  top: -7px;
  left: 6px;
  font-size: 10px;
  background: #0f1116;
  color: #8a93a6;
  padding: 0 4px;
  border-radius: 3px;
}
</style>
