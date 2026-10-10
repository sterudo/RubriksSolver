import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// base './' makes every asset URL relative so the build can be dropped into any
// folder (e.g. a JBoss/WildFly deployment directory) without further configuration.
export default defineConfig({
  base: './',
  plugins: [vue()],
  build: { chunkSizeWarningLimit: 900 },
  test: { environment: 'node', include: ['tests/**/*.test.js'] },
});
