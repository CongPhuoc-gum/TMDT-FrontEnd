const raw = import.meta.env

function readBoolean(value, fallback) {
  if (value === undefined || value === '') return fallback
  return value === 'true' || value === '1'
}

function readNumber(value, fallback) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

/** @type {import('@/config/env').AppConfig} */
export const appConfig = {
  name: raw.VITE_APP_NAME ?? 'Kyiv LuxeBouquets',
  tagline: raw.VITE_APP_TAGLINE ?? 'Floral Atelier',
  apiBaseUrl: raw.VITE_API_BASE_URL ?? 'http://localhost:8080/api',
  apiTimeoutMs: readNumber(raw.VITE_API_TIMEOUT_MS, 15000),
  enableMockData: readBoolean(raw.VITE_ENABLE_MOCK_DATA, true),
  staffChatPath: raw.VITE_STAFF_CHAT_PATH ?? '/chat',
  customerHomePath: raw.VITE_CUSTOMER_HOME_PATH ?? '/c',
  defaultLocale: raw.VITE_DEFAULT_LOCALE ?? 'vi-VN',
  currency: raw.VITE_CURRENCY ?? 'VND',
  contactEmail: raw.VITE_CONTACT_EMAIL ?? 'studio@luxebouquets.kyiv',
  contactPhone: raw.VITE_CONTACT_PHONE ?? '+380980099777',
  isDev: raw.DEV,
  isProd: raw.PROD,
}

export default appConfig
