# @yoga/ui — Shared UI Components

## Component Creation Pattern

1. Create `src/components/<name>/<name>.tsx`
2. Export from `src/index.ts`
3. Create Storybook story in `apps/storybook/src/stories/`

## Rules

- Presentational only — no data fetching, no app-level state, no API calls
- Props interface in same file as component
- All visual values from `@yoga/tokens` — no hardcoded colors, spacing, type
- Named exports only (no default exports)
- Every interactive element: keyboard accessible, visible focus ring, ARIA labels
- `forwardRef` for components that wrap native elements

## Dependencies

- May depend on: `@yoga/tokens`
- Must NOT depend on: `@yoga/shared`, `@yoga/web`, `next`
