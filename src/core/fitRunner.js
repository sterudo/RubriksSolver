import { fitCube } from './cubefit.js';

// Fits the cube in a web worker so the page stays responsive; falls back to the main
// thread where workers are unavailable. Resolves to { handles, score, margin } (handles in
// 0-1000 image coordinates) or null.
export function fitCubeAsync(pixels, n, { box = null, signal } = {}) {
  const direct = () => {
    const r = fitCube(pixels, n, { box });
    return r && { handles: r.handles, poseHandles: r.poseHandles, score: r.score, poseScore: r.poseScore, margin: r.margin };
  };
  if (typeof Worker === 'undefined') return Promise.resolve().then(direct);
  return new Promise((resolve, reject) => {
    let worker;
    try {
      worker = new Worker(new URL('./fitWorker.js', import.meta.url), { type: 'module' });
    } catch {
      resolve(direct());
      return;
    }
    const abort = () => {
      worker.terminate();
      reject(Object.assign(new Error('aborted'), { kind: 'abort' }));
    };
    if (signal?.aborted) return abort();
    signal?.addEventListener('abort', abort, { once: true });
    worker.onmessage = (e) => {
      signal?.removeEventListener('abort', abort);
      worker.terminate();
      if (e.data.error) reject(new Error(e.data.error));
      else resolve(e.data.result);
    };
    worker.onerror = (e) => {
      signal?.removeEventListener('abort', abort);
      worker.terminate();
      // e.g. module workers unsupported: compute here instead
      try {
        resolve(direct());
      } catch (err) {
        reject(err);
      }
      e.preventDefault?.();
    };
    worker.postMessage({ id: 1, pixels: { data: pixels.data, width: pixels.width, height: pixels.height }, n, box });
  });
}
