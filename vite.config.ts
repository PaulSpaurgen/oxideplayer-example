import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['oxideplayer']  // Don't pre-bundle oxideplayer
  },
  server: {
    fs: {
      allow: ['..']  // Allow serving files from node_modules
    }
  }
})
