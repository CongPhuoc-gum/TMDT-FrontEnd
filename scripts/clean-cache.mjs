import { rmSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const targets = ['.vite-cache', 'dist', 'node_modules/.vite']

for (const target of targets) {
  const path = resolve(root, target)
  if (!existsSync(path)) continue
  rmSync(path, { recursive: true, force: true })
  console.log(`removed ${target}`)
}

console.log('cache cleanup done')
