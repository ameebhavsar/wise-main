import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// test serves from ameebhavsar.github.io/wise-main/,
// so assets live under /wise-main/
// (the real redesign uses a custom domain at root, base '/' there)
export default defineConfig({
  base: '/wise-main/',
  plugins: [react()],
})
