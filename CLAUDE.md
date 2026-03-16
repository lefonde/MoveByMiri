# Yoga

A web application (Next.js) with future mobile (Expo/React Native), organized as a pnpm + Turborepo monorepo.

## Architecture

```
apps/web          → Next.js 15, App Router, Tailwind CSS 4, React 19
apps/storybook    → Storybook 8, consumes @yoga/ui + @yoga/tokens
packages/ui       → Presentational components only (no data fetching, no app state)
packages/tokens   → Design tokens: colors, spacing, typography, breakpoints, radii, shadows
packages/shared   → Types, Zod validation, API SDK, auth, analytics, constants
packages/tsconfig → Shared TypeScript configurations
packages/eslint-config → Shared ESLint configurations
```

**Dependency direction**: apps → packages. Packages never depend on apps. `shared` never depends on `ui` or `tokens`.

## Commands

```bash
pnpm dev              # Start all dev servers
pnpm build            # Build all packages/apps
pnpm typecheck        # TypeScript check all packages
pnpm lint             # Lint all packages
pnpm test             # Run all tests
pnpm format           # Format all files with Prettier
pnpm format:check     # Check formatting without writing
pnpm --filter @yoga/web dev   # Start only the web app
```

## Coding Standards

- **TypeScript**: strict mode, no `any` without comment justification
- **Components**: functional, named exports, props interface co-located
- **Types**: prefer `type` over `interface` unless extending. Derive TS types from Zod schemas.
- **Validation**: Zod for all runtime validation
- **Styling**: Tailwind CSS utility classes. All values from @yoga/tokens — no magic numbers.
- **Imports order**: react → next → external libs → @yoga/* packages → relative
- **No barrel re-exports** beyond package entry points (tree-shaking)

## File Naming

- Files: `kebab-case.ts(x)`
- Components: `PascalCase` (exported name)
- Functions/variables: `camelCase`
- Types: `PascalCase`

## Testing

- Unit tests: Vitest, colocated as `*.test.ts(x)`
- E2e tests: Playwright, in `apps/web/e2e/`
- Test behavior, not implementation
- No arbitrary coverage targets

## Component Rules

- Components in `packages/ui` are presentational only
- Every component must use tokens from `@yoga/tokens` (no hardcoded colors, spacing, typography)
- Every component must be keyboard accessible
- Every interactive element needs visible focus indicator
- Every new component needs a Storybook story

## UX Conventions

- Loading states for all async operations
- Error boundaries around route segments
- Responsive-first design (mobile → desktop)
- Optimistic updates where appropriate
- Meaningful empty states (not blank)

## PR Etiquette

- One concern per PR
- Descriptive commit messages
- Run `pnpm typecheck && pnpm lint` before marking ready

## Design Workflow

### Concept Phase (Agent Team)
Run `/concept-sprint <target>` to prepare a design brief with live token and component context.
Spawn agent team: creative-director, landing-page-strategist, ux-architect, interaction-designer, design-critic.
Requires `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` in settings.
Output: design handoff document following `rules/design-handoff.md`.

### Build Phase (Subagents)
After handoff, delegate to execution subagents:
- `figma-implementer` — component implementation from Figma or handoff
- `ui-art-director` — visual polish and spacing refinement
- `interaction-polisher` — motion, transitions, microinteractions
- `storybook-maintainer` — stories for all component states

### Review Phase (Read-Only Subagents)
- `ui-reviewer` — quality, a11y, design system compliance
- `responsive-layout-reviewer` — breakpoint audit
- `visual-regression-reviewer` — screenshot comparison

### Design Skills
- `/concept-sprint` — prepare ideation brief with live context
- `/landing-page-critique` — landing page section-by-section audit
- `/app-flow-critique` — app flow UX audit
- `/design-qa` — comprehensive design quality check
- `/motion-budget` — animation performance audit
