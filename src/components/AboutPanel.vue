<template>
  <section class="panel about">
    <h2>About Rubik's Solver</h2>
    <p class="note">Learn, teach and solve 2×2 and 3×3 Rubik's cubes right in your browser.</p>

    <dl>
      <dt>Author</dt>
      <dd>Stephan Rudolph (and GitHub Copilot)</dd>

      <dt>Source code</dt>
      <dd><a :href="REPO_URL" target="_blank" rel="noopener">sterudo/RubriksSolver</a></dd>

      <dt>Live app</dt>
      <dd><a :href="APP_URL" target="_blank" rel="noopener">{{ APP_URL }}</a></dd>

      <dt>Version</dt>
      <dd>{{ version }} <small>(built {{ buildDate }})</small></dd>
    </dl>

    <h3>Tech stack</h3>
    <ul>
      <li><strong>Vue 3</strong> – reactive UI (Composition API, single-file components)</li>
      <li><strong>three.js</strong> – interactive 3D cube, animations and explosion effects</li>
      <li><strong>Vite</strong> – dev server and static build that runs from any folder</li>
      <li><strong>Vitest</strong> – unit tests for the cube model, solver and vision code</li>
      <li>Plain JavaScript solver, no backend – everything runs locally in the browser</li>
      <li>Optional AI tutor via Gemini or a local model (LM Studio / Ollama)</li>
    </ul>

    <h3>Main features</h3>
    <ul>
      <li>2×2 and 3×3 cubes with a drag-to-rotate 3D view, layer turns by mouse, wheel or keyboard</li>
      <li>Set up any position: paint stickers on the cube or the flat net, scramble, or import from two photos</li>
      <li>Live validity check telling you whether a position is solvable</li>
      <li>Step-by-step solver that explains every stage, with play/pause, speed and keyboard control</li>
      <li>Learn lessons and Practice tests, with a built-in or AI tutor</li>
      <li>Fullscreen mode, Extra drama camera, countdown and cube explosion finale, and one-click Quick Solve</li>
      <li>Save and load positions; resizable cube frame and draggable panel divider</li>
    </ul>
  </section>
</template>

<script setup>
const REPO_URL = 'https://github.com/sterudo/RubriksSolver';
const APP_URL = 'https://sterudo.github.io/RubriksSolver/';
const version = __APP_VERSION__;
const buildDate = __BUILD_DATE__;
</script>

<style scoped>
dl {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 6px 16px;
  margin: 12px 0;
}
dt {
  color: var(--muted);
}
dd {
  margin: 0;
}
a {
  color: var(--accent);
}
ul {
  padding-left: 18px;
  margin: 6px 0;
}
li {
  margin-bottom: 4px;
}
</style>
