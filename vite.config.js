import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname), '')

  return {
  // Avoid EPERM on Windows when node_modules/.vite is locked by AV/IDE/other dev servers
  cacheDir: path.resolve(__dirname, '.vite-cache'),
  envDir: path.resolve(__dirname),
  envPrefix: 'VITE_',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: Number(env.VITE_DEV_PORT) || 5173,
    strictPort: false,
  },
  build: {
    sourcemap: mode !== 'production',
    outDir: 'dist',
    emptyOutDir: false,
  },
  }
})
