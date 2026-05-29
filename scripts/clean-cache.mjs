import { rmSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const targets = ['.vite-cache', 'dist', 'node_modules/.vite']
const rmOptions = {
  recursive: true,
  force: true,
  maxRetries: 20,
  retryDelay: 150,
}

let hasFailure = false

for (const target of targets) {
  const path = resolve(root, target)
  if (!existsSync(path)) continue
  try {
    rmSync(path, rmOptions)
    console.log(`removed ${target}`)
  } catch (error) {
    hasFailure = true
    const reason = error?.code ? `${error.code}: ${error.message}` : String(error)
    console.error(`failed to remove ${target} -> ${reason}`)
  }
}

if (hasFailure) {
  console.error('cache cleanup finished with warnings')
  process.exitCode = 1
} else {
  console.log('cache cleanup done')
}
