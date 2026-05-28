import { appConfig } from '@/config/env'

export function apiUrl(path = '') {
  const base = appConfig.apiBaseUrl.replace(/\/$/, '')
  const suffix = path.startsWith('/') ? path : `/${path}`
  return `${base}${suffix}`
}

export async function apiFetch(path, options = {}) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), appConfig.apiTimeoutMs)

  try {
    const response = await fetch(apiUrl(path), {
      ...options,
      signal: options.signal ?? controller.signal,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    if (!response.ok) {
      throw new Error(`API ${response.status}: ${response.statusText}`)
    }

    if (response.status === 204) return null
    return response.json()
  } finally {
    clearTimeout(timeout)
  }
}
