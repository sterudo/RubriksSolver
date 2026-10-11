// Runs the (about one second long) cube fit off the main thread.
import { fitCube } from './cubefit.js';

self.onmessage = (e) => {
  const { id, pixels, n, box } = e.data;
  try {
    const r = fitCube(pixels, n, { box });
    self.postMessage({
      id,
      result: r && { handles: r.handles, poseHandles: r.poseHandles, score: r.score, poseScore: r.poseScore, margin: r.margin },
    });
  } catch (err) {
    self.postMessage({ id, error: String(err?.message ?? err) });
  }
};
