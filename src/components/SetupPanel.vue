<template>
  <section class="panel">
    <h2>Set up the cube</h2>

    <div class="row">
      <span class="label">Size</span>
      <div class="seg">
        <button :class="{ on: store.n === 2 }" @click="setSize(2)">2×2</button>
        <button :class="{ on: store.n === 3 }" @click="setSize(3)">3×3</button>
      </div>
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

    <div class="row" v-if="store.editing">
      <label style="display:flex;align-items:center;gap:8px;">
        <input type="checkbox" v-model="store.showAllColorsOnHover" @change="store.showAllColorsOnHover && (store.editing = true)" />
        Show all colors on hover
        <span class="note">(click a color on the sticker to paint it)</span>
      </label>
    </div>

    <div v-if="store.editing" class="palette">
      <span
        v-for="(hex, i) in FACE_COLOR_HEX"
        :key="i"
        class="swatch-box"
        :class="{ on: !store.showAllColorsOnHover && store.brush === i }"
      >
        <button class="swatch" :style="{ background: hex }" :title="FACE_COLOR_NAMES[i]" @click="pickColor(i)"></button>
      </span>
    </div>
 
    <details class="net-editor" open>
      <summary>Outline</summary>
      <NetEditor :n="store.n" :state="cubeState" @paint="(slot) => store.editing && paint(slot)" />
    </details>

    <details class="photos">
      <summary>Import from two photos</summary>
      <PhotoImport :n="store.n" @import="(s) => setPosition(s)" />
    </details>

    <p class="note">
      Tip: the centres of a 3×3 define the colour of each face and cannot be repainted. For a 2×2, any consistent colour
      scheme works - the bottom-left-back corner is used as the reference.
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
function pickColor(i) {
  store.brush = i;
  store.showAllColorsOnHover = false;
}
async function doScramble() {
  lastScramble.value = (await scramble()).join(' ');
}
</script>
