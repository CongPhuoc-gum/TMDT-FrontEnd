/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_APP_TAGLINE: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_API_TIMEOUT_MS: string
  readonly VITE_ENABLE_MOCK_DATA: string
  readonly VITE_STAFF_CHAT_PATH: string
  readonly VITE_CUSTOMER_HOME_PATH: string
  readonly VITE_DEFAULT_LOCALE: string
  readonly VITE_CURRENCY: string
  readonly VITE_CONTACT_EMAIL: string
  readonly VITE_CONTACT_PHONE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '@/config/env' {
  export interface AppConfig {
    name: string
    tagline: string
    apiBaseUrl: string
    apiTimeoutMs: number
    enableMockData: boolean
    staffChatPath: string
    customerHomePath: string
    defaultLocale: string
    currency: string
    contactEmail: string
    contactPhone: string
    isDev: boolean
    isProd: boolean
  }
}
