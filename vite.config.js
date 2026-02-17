import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist' // output folder for production
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // optional if you use @ for imports
    }
  }
});
