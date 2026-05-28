# Kyiv LuxeBouquets — Frontend

React + Vite storefront prototype (customer, staff, admin) with editorial luxe UI.

## Setup

```bash
npm install
cp .env.example .env.local   # optional — override any value from committed `.env`
npm run dev
```

App runs at [http://localhost:5173](http://localhost:5173).

## Environment

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_APP_NAME` | Brand name | `Kyiv LuxeBouquets` |
| `VITE_APP_TAGLINE` | Short tagline | `Floral Atelier` |
| `VITE_API_BASE_URL` | REST API base | `http://localhost:8080/api` |
| `VITE_API_TIMEOUT_MS` | Fetch timeout | `15000` |
| `VITE_ENABLE_MOCK_DATA` | Use local mock catalog | `true` |
| `VITE_STAFF_CHAT_PATH` | Concierge route | `/staff/chat` |
| `VITE_DEFAULT_LOCALE` | `Intl` locale | `vi-VN` |
| `VITE_CURRENCY` | Currency code | `VND` |

Read values in code via `import { appConfig } from '@/config/env'` or `import { apiFetch } from '@/lib/api'`.

**Do not commit** `.env.local` (secrets / machine-specific URLs).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm run clean` | Remove `.vite-cache`, `dist`, `node_modules/.vite` |

If `npm run dev` fails with `EPERM` on Windows, run `npm run clean` and try again.

## Structure

- `src/pages/customer` — storefront & checkout
- `src/pages/staff` — operations console
- `src/pages/admin` — back office
- `src/components/luxe` — shared editorial UI
- `src/data/luxe-data.js` — mock catalog & helpers
- `src/config/env.js` — typed env access
