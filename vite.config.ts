import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Served from https://<user>.github.io/Norvan/ on GitHub Pages,
// so assets must be referenced from the /Norvan/ subpath in production.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Norvan/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
