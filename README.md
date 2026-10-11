# RubriksSolver
Learning and helping to solve a Rubiks Cube

A static Vue 3 + three.js web app that shows, solves and teaches 2x2 and 3x3 cubes.

## Goals
- [x] Research/ find existing recipies for solving 2x2 and 3x3 cubes (see [Methods](#methods))
- [x] Website, can use external libraries like threejs
- [x] Vue.js
- [x] Visual 3d representation of 2x2 or 3x3 cube that can be rotated with mouse movements
- [x] Reset to starting position
- [x] manually assign tiles for a scrambled position
- [x] Animated step by step to show solution
- [x] Learning/teaching/testing mode: The app should teach the user solving concepts
- [x] gemini API model or/and local gemma model can be attached for natural expression
- [x] Starting position should be able to be assigned from two pictures if taken if cube is facing corner and then opposite corner
- [x] Site will run statically deployed in a existing jboss deploy folder

## Run it
```powershell
npm install
npm run dev        # http://localhost:5173
npm test           # engine, solver and photo-geometry tests
npm run build      # static site in dist/
```

## The app
| Tab | What it does |
| --- | --- |
| **Set up** | 2×2 / 3×3, reset, random scramble, paint stickers (click in the 3D cube or the flat net), live validity check, import from two photos |
| **Solve** | Finds a staged solution, plays it animated (play / step / back / speed) with an explanation of each stage and step |
| **Learn** | Notation, cube anatomy, the layer-by-layer method for the selected size, "Try" buttons for every algorithm |
| **Practice** | Timed "solve it yourself" challenge with a live stage checklist and hints, plus a notation quiz |

Drag the cube to rotate it. Scroll the mouse wheel over a tile to turn the layer holding it so the tile moves up/down on screen (scroll down = down); hold `Alt` to move it left/right instead. Scrolling anywhere else zooms. Middle-slice turns are shown as the two outer layers turning the opposite way (same position, orientation kept). Keyboard: `R L U D F B` turn a face, `Shift` makes it counter-clockwise.

### Save and load positions
The **Save / load position** panel under the cube is available on every tab. You can save the current position under a name (kept in the browser's `localStorage`, loadable at any time even across 2×2/3×3), export it to a `.cube.json` file and import it again, or copy/paste it as a plain code. The code is the standard facelet string in the order U R F D L B (54 letters for a 3×3, 24 for a 2×2), e.g. a solved 3×3 is `UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB`.

### Enter a position from two photos
1. Photo 1: look straight at a corner of the cube. Photo 2: flip the cube over "like a pancake" (about the photo's horizontal axis) so the opposite corner faces the camera.
2. Drag the 7 handles on each photo until the outline follows the cube; the red dots show where colours are sampled.
3. **Read colours**, then check/fix stickers in the net. (3×3: every sticker is matched to the nearest of the six centre colours. 2×2: the 24 colours are clustered.)

### Tutor / AI ("natural expression")
The built-in tutor works offline. The **Settings** tab (also linked from the Tutor box) configures an AI provider; everything is saved automatically in the browser's `localStorage`:
- **Gemini API** – paste an API key (sent only to Google's Gemini API) and pick a model: `gemini-2.5-flash`, `gemini-3.1-flash-lite`, `gemini-3.5-flash-lite` or `gemini-3.6-flash`. **Test connection** checks the key and model.
- **Local model** – any OpenAI-compatible server (LM Studio, Ollama, llama.cpp) running Gemma, e.g. `http://localhost:1234/v1`. Browsers only accept replies from servers that allow CORS: in LM Studio turn on *Developer → Server Settings → Enable CORS*; for Ollama set `OLLAMA_ORIGINS=*`. **Test local model** tells a stopped server apart from one that is running but blocking the browser.

"Explain" rewrites the current stage/step in natural language; "Ask" answers a free-form question about it.

## Methods
Both solvers are *teachable*: they produce stages a human can learn, not an unreadable optimal string.

**3×3 – layer by layer** (white cross at the bottom, last layer on top)
1. White cross → 2. First two layers (corner + edge pairs) → 3. Yellow cross (`F R U R' U' F'`) → 4. Yellow face (Sune / Anti-Sune) → 5. Place corners (A-perm) → 6. Place edges (U-perm)

**2×2 – layer by layer** (anchored on the bottom-left-back corner since a 2×2 has no centres)
1. First layer → 2. Orient the top (Sune / Anti-Sune) → 3. Permute the top (T-perm / Y-perm)

Cross and first-layer/F2L pieces are found with a bidirectional search over only the pieces involved (so earlier stages are never undone); last-layer stages combine the classic algorithms and `U` turns with a cheapest-first search. Typical solutions are ~35 moves (2×2) and ~80 moves (3×3).
The method outlines follow the common beginner guides (e.g. Ruwix, J Perm, the speedsolving.com wiki) and Singmaster notation.

## Project layout
```
src/core/cube.js      sticker/slot model, moves, notation, validation (parity, twist, flip)
src/core/solver.js    staged solver + progress checks
src/core/lessons.js   teaching texts and algorithm library
src/core/photo.js     two-photo geometry and colour classification
src/core/saves.js     save/load: facelet string, file export/import, saved list
src/core/explain.js   built-in / Gemini / local-model tutor
src/components/       CubeView (three.js), NetEditor, PhotoImport, panels
tests/                vitest suites
scripts/deploy.ps1    copy the build into a JBoss/WildFly folder
```

## Deploying to JBoss / WildFly
The build uses only relative URLs, so it runs from any folder.
```powershell
npm run deploy -- -Target C:\jboss\standalone\deployments\rubiks.war -Marker
```
`-Marker` creates `rubiks.war.dodeploy`, which exploded deployments need. Omit it when copying into an already-deployed web folder. You can also just copy the contents of `dist/` by hand.
