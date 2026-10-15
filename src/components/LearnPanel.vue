<template>
  <section class="panel">
    <h2>Learn to solve</h2>

    <h3>Notation</h3>
    <ul class="notation">
      <li v-for="item in NOTATION" :key="item.move">
        <button @click="turn(item.move)">{{ item.move }}</button>
        <span>{{ item.text }}</span>
      </li>
    </ul>

    <details v-for="c in CONCEPTS" :key="c.title" class="concept">
      <summary>{{ c.title }}</summary>
      <p v-for="(p, i) in c.body" :key="i">{{ p }}</p>
    </details>

    <h3>The {{ store.n }}×{{ store.n }} method - layer by layer</h3>
    <ol class="lessons">
      <li v-for="l in STAGE_LESSONS[store.n]" :key="l.id">
        <div class="lesson-title">{{ l.title }}</div>
        <div class="goal">Goal: {{ l.goal }}</div>
        <p>{{ l.concept }}</p>
        <p v-if="l.tip" class="tip">💡 {{ l.tip }}</p>
        <div v-if="l.algorithm" class="alg">
          <code>{{ l.algorithm.join(' ') }}</code>
          <button @click="turns(l.algorithm)">Try</button>
          <button @click="turns(invertAlg(l.algorithm))">Undo</button>
        </div>
      </li>
    </ol>
    <p class="note">
      "Try" performs the algorithm on the cube shown on the left - scramble it first, or use Solve to see the stages
      happen on your own position.
    </p>
  </section>
</template>

<script setup>
import { CONCEPTS, NOTATION, STAGE_LESSONS } from '../core/lessons.js';
import { invertAlg } from '../core/cube.js';
import { store, turn, turns } from '../store.js';
</script>

<style scoped>
.notation {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 6px;
}
.notation li {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 13px;
}
.notation button {
  min-width: 40px;
  font-weight: 700;
}
.concept {
  margin: 6px 0;
  background: #1b2030;
  border-radius: 8px;
  padding: 6px 10px;
}
.concept summary {
  cursor: pointer;
  font-weight: 600;
}
.lessons {
  padding-left: 18px;
}
.lessons li {
  margin-bottom: 14px;
}
.lesson-title {
  font-weight: 700;
}
.goal {
  color: var(--accent);
  font-size: 13px;
}
.tip {
  color: var(--muted);
  font-size: 13px;
}
.alg {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}
</style>
