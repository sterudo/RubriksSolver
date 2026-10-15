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
| **Solve** | Finds a staged solution, plays it animated (play / step / back / speed) with an explanation of each stage and step. Tick **Extra drama** for a slow, smooth swirl of the camera around the cube while it plays (it eases in and out, stops when you pause and gives way if you grab the cube). Tick **Extra, extra drama** for a finale: when the solution finishes playing, a 3-2-1 countdown (with a growing rumble) leads to an explosion - every small cube piece flies off in its own slightly random direction amid sparks and a flash - and then the cube re-forms, solved, as if nothing had happened. Any move, rewind or reset during the countdown cancels it. |
| **Learn** | Notation, cube anatomy, the layer-by-layer method for the selected size, "Try" buttons for every algorithm |
| **Practice** | Timed "solve it yourself" challenge with a live stage checklist and hints, plus a notation quiz |

Drag the cube to rotate it freely in every direction - there is no limit horizontally or vertically, so you can spin it over the top and underneath (the **⟲ View** button restores the default view). Scroll the mouse wheel over a tile to turn the layer holding it so the tile moves up/down on screen (scroll down = down); hold `Alt` to move it left/right instead. Scrolling anywhere else zooms. Middle-slice turns are shown as the two outer layers turning the opposite way (same position, orientation kept). Keyboard: `R L U D F B` turn a face, `Shift` makes it counter-clockwise.

### Save and load positions
The **Save / load position** panel under the cube is available on every tab. You can save the current position under a name (kept in the browser's `localStorage`, loadable at any time even across 2×2/3×3), export it to a `.cube.json` file and import it again, or copy/paste it as a plain code. The code is the standard facelet string in the order U R F D L B (54 letters for a 3×3, 24 for a 2×2), e.g. a solved 3×3 is `UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB`.

### Gamepad controls
In **Settings**, enable gamepad controls and press a button on an Xbox/XInput-style controller.
The browser Gamepad API must expose it with `standard` mapping; use HTTPS or localhost.
All standard inputs are supported: LT/RT, LB/RB, both sticks' four directions and clicks,
D-pad, A/B/X/Y, Menu/Start and View/Back (not the Xbox/Guide button).
Choose a controller when several are connected.

The bundled `src/gamepad-standard.json` maps RS to camera rotation, D-pad up/down to zoom,
LS up/down to left-face counter-clockwise/clockwise and LS right/left to front-face turns.
Hold RT to select right/back instead; hold LT for double turns (including LT+RT for right/back).
LB/RB turn top/bottom clockwise, with LT for counter-clockwise. Y/X double-turn top/bottom.
A performs the next solution move, computing a solution first if necessary; B undoes a manual
turn or steps backward through a solution. Menu starts Quick Solve; View+X scrambles and
View+Y resets to solved. Gamepad Quick Solve does not request fullscreen because browsers
may require a mouse gesture; use the mouse Quick Solve button for fullscreen.

Face actions follow the camera: front is the face most toward the viewer, right is the
remaining perpendicular face most toward screen-right, and top completes that cube frame.
Ties use fixed face order U/R/F/D/L/B. Clockwise/unprimed and counter-clockwise/prime are
viewed from outside the selected face; double turns are 180 degrees. Camera rotation moves
the view, not the cube's stored position.

Click a binding in the action table, release all controls, hold modifiers, and press the
main input last. Release and click **Confirm**, or **Cancel**. **Clear** unbinds an action.
Longer combinations suppress their shorter subsets; duplicate combinations cannot be saved.
Stick dead zone and trigger threshold are configurable. Camera/zoom repeat smoothly while
held; other actions occur once per main-input press. Release and press again to change a
modifier on a held main input. Input pauses during binding capture, text entry, and loss of
page focus; release all controls after reconnecting, switching profiles, or returning to
the page. Cube commands are ignored during animation, solving, playback, or sticker painting.
Undo does not restore scrambles, resets, painting, or imported positions.

Draft changes take effect immediately. **Save / Rename** updates the selected profile;
**Save As** creates a new uniquely named profile. Profiles and the selected profile are
stored as JSON in `localStorage` under `rubiks-solver.gamepad.v1`. **Restore default**
loads the bundled bindings into the draft. JSON file export/import and copy/paste are
available; import is validated and requires Save or Save As to persist.
To ship your own initial layout, export a profile and replace `src/gamepad-standard.json`.
Existing saved profiles remain unchanged. Browser storage is per origin and does not sync.

### Mobile cube controls
On phones and small touch screens, a fixed bottom bar keeps **Reset**, **Scramble**,
**Solve**, **Rotate**, and **Move** available while scrolling. The header keeps the logo
and name visible, with Quick Solve beside them and navigation inside a hamburger menu. The cube
display uses the full viewport width and defaults to filling the height above the bottom
bar, adapting to the browser's visible height. Solved and valid-position badges are hidden
on mobile (invalid-position errors remain visible). Reset restores a solved
position; each **Solve** press performs one computed solution move, calculating the
solution first if needed, without starting playback or forcing fullscreen.
**Rotate** (the default) uses the existing free swipe/spin view rotation and pinch zoom.
**Move** keeps the view still: start on a sticker and swipe along its row or column
to turn that layer in the finger's direction, animated at 1.5× the selected speed.
Each swipe produces one quarter turn;
swipes on empty space do nothing, and two-finger gestures do not turn layers.
On a 3×3, middle rows use the same opposite-outer-layer equivalent as mouse-wheel
turns, preserving the stored cube orientation. Rotate/Move exit sticker painting.
Mouse dragging and wheel controls are unchanged.
The mobile-only **Zoom** slider beside **View** is vertically centered with the reset
button, and stays synced with
wheel, pinch and gamepad zoom. View resets also reset the slider.
The Rotate/Move toggle below View stays synced with the bottom mode buttons.
The mobile **Height** slider at the cube frame's upper-right adjusts it from 250px
to the viewport height minus the header and bottom bar. If that available space is
less than 250px, the frame fits the available space instead. Resizing/orientation
changes update these limits. The initial mobile cube view is zoomed out to show
the cube 20% smaller than the desktop default; Reset View restores that mobile view.

### Versioning
Increment the patch version for each source commit with `npm version patch --no-git-tag-version`.
Include both `package.json` and `package-lock.json` in the commit. The About view reads
this version at build time; keep its feature list current when adding user-facing features.

### Enter a position from two photos
1. Photo 1: look straight at a corner of the cube. Photo 2: flip the cube over "like a pancake" (about the photo's horizontal axis) so the opposite corner faces the camera.
2. When a photo is uploaded the cube **outline is found automatically** (checkbox, on by default; **✨ Find the cube** re-runs it per photo). This is not an AI guess of six vertices (small models are unreliable at that) but a **model-based fit**: the cube is treated as a rigid object with equal edges and the known N×N grid, seen through a pinhole camera (position, distance, 3D rotation and focal length are the unknowns), so converging, skewed edges are explained by perspective. The fit searches every orientation and rewards poses whose sticker centres land on coloured/white patches, whose grid lines fall on the black gaps (with a sticker on both sides) and whose faces end in a dark rim - i.e. it works from the stickers and gaps outward, rejects wrong grid sizes, and penalises coloured pixels the outline leaves unexplained. A final step lets the 7 handles deviate slightly to absorb lens distortion. It runs in a web worker (a few seconds). A **local model** (e.g. Gemma in LM Studio) or **Gemini**, when configured in **Settings**, is only used as a locator: it returns the cube's bounding box, the fit is repeated inside that box, and the better of the two fits is kept. If no convincing fit is found, the AI box (or the default outline) is used and you place the handles yourself. Drag the 7 handles to fine-tune; the dots show where colours are read.
3. Optionally tick **White balance**: if a white tile is found in a photo (the brightest, least coloured tile), it becomes that photo's white point and all of the photo's colours are corrected to it. This helps with warm/cool light and with two photos lit differently. If a photo has no white tile it is read as is, and the message says so.
4. **Read colours**, then check/fix stickers in the net. (3×3: every sticker is matched to the nearest of the six centre colours. 2×2: the 24 colours are clustered.)
5. Red, orange and yellow are the colours most often confused, so after reading, a **hue strip with two sliders** appears (*Red | Orange* and *Orange | Yellow*). The cutoffs start where they fall between the measured colours (3×3: between the red, orange and yellow centres; 2×2: at the two biggest gaps between the 12 warm stickers). Drag them to move stickers between the three colours; the cube updates live, and **Auto** restores the automatic values.

### Tutor / AI ("natural expression")
The built-in tutor works offline. The **Settings** tab (also linked from the Tutor box) configures an AI provider; everything is saved automatically in the browser's `localStorage`:
- **Gemini API** - paste an API key (sent only to Google's Gemini API) and pick a model: `gemini-2.5-flash`, `gemini-3.1-flash-lite`, `gemini-3.5-flash-lite` or `gemini-3.6-flash`. **Test connection** checks the key and model.
- **Local model** - any OpenAI-compatible server (LM Studio, Ollama, llama.cpp) running Gemma, e.g. `http://localhost:1234/v1`. Browsers only accept replies from servers that allow CORS: in LM Studio turn on *Developer → Server Settings → Enable CORS*; for Ollama set `OLLAMA_ORIGINS=*`. **Test local model** tells a stopped server apart from one that is running but blocking the browser.

"Explain" rewrites the current stage/step in natural language; "Ask" answers a free-form question about it.

## Methods
Both solvers are *teachable*: they produce stages a human can learn, not an unreadable optimal string.

**3×3 - layer by layer** (white cross at the bottom, last layer on top)
1. White cross → 2. First two layers (corner + edge pairs) → 3. Yellow cross (`F R U R' U' F'`) → 4. Yellow face (Sune / Anti-Sune) → 5. Place corners (A-perm) → 6. Place edges (U-perm)

**2×2 - layer by layer** (anchored on the bottom-left-back corner since a 2×2 has no centres)
1. First layer → 2. Orient the top (Sune / Anti-Sune) → 3. Permute the top (T-perm / Y-perm)

Cross and first-layer/F2L pieces are found with a bidirectional search over only the pieces involved (so earlier stages are never undone); last-layer stages combine the classic algorithms and `U` turns with a cheapest-first search. Typical solutions are ~35 moves (2×2) and ~80 moves (3×3).
The method outlines follow the common beginner guides (e.g. Ruwix, J Perm, the speedsolving.com wiki) and Singmaster notation.

## Project layout
```
src/core/cube.js      sticker/slot model, moves, notation, validation (parity, twist, flip)
src/core/solver.js    staged solver + progress checks
src/core/lessons.js   teaching texts and algorithm library
src/core/photo.js     two-photo geometry and colour classification
src/core/cubefit.js   perspective-correct cube model fit that outlines the cube in a photo
src/core/vision.js    optional AI locator (bounding box) for the fit
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
