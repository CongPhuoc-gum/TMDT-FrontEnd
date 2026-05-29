# Kyiv LuxeBouquets — Frontend

React + Vite storefront (customer, staff, admin).

## Quick start

```bash
npm install
npm run dev
```

- App: http://localhost:5173  
- Env: copy `.env.example` → `.env.local` to override API URL, brand name, etc.

If `npm run dev` fails with **EPERM** on Windows:

```bash
npm run dev:clean
```

Vite cache is stored in the system temp folder (not in the repo) to reduce file-lock issues.

## Project layout

```
src/
  components/
    admin/          # Admin shared UI (metrics, pager, …)
    staff/          # Staff shared UI (topbar, status pills)
    customer/       # Customer sections (home, category, product, checkout)
    luxe/           # Editorial design system
    shared/         # Cross-role primitives (page header)
    ui/             # Form controls (button, input, label)
  config/
    env.js          # VITE_* variables
    routes.js       # Path helpers
  data/
    luxe-data.js    # Mock catalog & formatters
  layouts/          # Route shells
  lib/              # api, utils
  pages/            # Route entry components only
public/
  favicon.svg
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run dev:clean` | Clear local cache folders, then dev |
| `npm run build` | Production build |
| `npm run clean` | Remove `dist`, `.vite-cache`, `node_modules/.vite` |
