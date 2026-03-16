# @yoga/web — Next.js App

## App Router Conventions

- Server Components by default — only add `"use client"` when the component needs hooks, event handlers, or browser APIs
- Data fetching in Server Components via `fetch` or server actions
- Route segments in `src/app/` follow file-system routing
- Loading UI: `loading.tsx` in route segments
- Error handling: `error.tsx` in route segments
- Layouts: `layout.tsx` for shared UI across sibling routes

## Data Fetching

- Prefer Server Components for data fetching (no client-side waterfalls)
- Use `fetch` with proper `cache` and `revalidate` options
- Server Actions for mutations (`"use server"`)
- API routes only when needed by external consumers

## Path Aliases

- `@/*` → `./src/*`
- `@yoga/ui` → `packages/ui`
- `@yoga/tokens` → `packages/tokens`
- `@yoga/shared` → `packages/shared`

## Key Files

- `next.config.ts` — transpilePackages for internal deps
- `src/app/layout.tsx` — root layout, metadata, global styles
- `src/app/globals.css` — Tailwind import
