<template>
  <section class="panel">
    <h2>Set up the cube</h2>

    <div class="row">
      <span class="label">Size</span>
      <div class="seg">
        <button :class="{ on: store.n === 2 }" @click="setSize(2)">2×2</button>
        <button :class="{ on: store.n === 3 }" @click="setSize(3)">3×3</button>
      </div>
    </div>

    <div class="row">
      <button @click="reset">Reset to solved</button>
      <button @click="doScramble">Random scramble</button>
    </div>
    <p v-if="lastScramble" class="note">Scramble: <code>{{ lastScramble }}</code></p>

    <h3>Enter your own position</h3>
    <div class="row">
      <button :class="{ primary: store.editing }" @click="store.editing = !store.editing">
        {{ store.editing ? 'Done painting' : 'Paint stickers' }}
      </button>
      <span class="note">Pick a colour, then click stickers in the 3D cube or the net.</span>
    </div>

    <div v-if="store.editing" class="palette">
      <button
        v-for="(hex, i) in FACE_COLOR_HEX"
        :key="i"
        class="swatch"
        :class="{ on: store.brush === i }"
        :style="{ background: hex }"
        :title="FACE_COLOR_NAMES[i]"
        @click="store.brush = i"
      ></button>
    </div>

    <NetEditor :n="store.n" :state="cubeState" @paint="(slot) => store.editing && paint(slot)" />

    <p v-if="validity.ok" class="status ok">This position is valid and solvable.</p>
    <ul v-else class="status bad">
      <li v-for="e in validity.errors" :key="e">{{ e }}</li>
    </ul>

    <details class="photos">
      <summary>Import from two photos</summary>
      <PhotoImport :n="store.n" @import="(s) => setPosition(s)" />
    </details>

    <p class="note">
      Tip: the centres of a 3×3 define the colour of each face and cannot be repainted. For a 2×2, any consistent colour
      scheme works – the bottom-left-back corner is used as the reference.
    </p>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import NetEditor from './NetEditor.vue';
import PhotoImport from './PhotoImport.vue';
import { FACE_COLOR_HEX, FACE_COLOR_NAMES } from '../core/cube.js';
import { cubeState, paint, reset, scramble, setPosition, setSize, store, validity } from '../store.js';

const lastScramble = ref('');
async function doScramble() {
  lastScramble.value = (await scramble()).join(' ');
}
</script>
