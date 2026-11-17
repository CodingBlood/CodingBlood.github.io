import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the root of CodingBlood.github.io, so no base path.
export default defineConfig({
  plugins: [react()],
  base: '/',
  // inotify watches were silently dropping edits on this machine; polling is reliable.
  server: { watch: { usePolling: true, interval: 300 } },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ['gsap'],
          map: ['react-simple-maps', 'world-atlas/countries-110m.json'],
        },
      },
    },
  },
})
