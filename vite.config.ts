import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        makingSense: resolve(__dirname, 'making-sense/index.html'),
        experiences: resolve(__dirname, 'experiences/index.html'),
        bitsAndPieces: resolve(__dirname, 'bits-and-pieces/index.html'),
      },
    },
  },
})
