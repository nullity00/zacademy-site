import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
      }
    }
  }
})
