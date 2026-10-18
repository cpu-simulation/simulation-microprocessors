import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // the in-browser build reads the Python sources from ../cpu
    fs: { allow: [".."] }
  },
  build: {
    outDir: './dist'
  }
})
