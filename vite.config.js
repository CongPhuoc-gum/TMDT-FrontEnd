import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Windows: keep Vite cache outside the repo to avoid EPERM from AV/IDE file locks
const viteCacheDir = path.join(os.tmpdir(), 'tmdt-frontend-vite')

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname), '')

  return {
    cacheDir: viteCacheDir,
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
