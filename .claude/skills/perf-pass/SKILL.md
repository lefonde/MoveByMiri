---
name: perf-pass
description: Performance review of a component or page. Identify and fix performance issues.
argument-hint: Component/page path or description
---

# Performance Pass

Review performance of: $ARGUMENTS

## Analysis Areas
1. **Render frequency**: Unnecessary re-renders, inline objects/arrays in props, missing memoization where justified
2. **Bundle impact**: Import sizes, tree-shaking issues, full-library imports
3. **Data fetching**: Server components where possible, no client-side waterfalls, proper caching
4. **Images**: Next.js Image component, proper sizing, lazy loading
5. **Dynamic imports**: Code-split heavy components not needed on initial render
6. **List rendering**: Virtualization for lists > 50 items
7. **CSS**: Prefer Tailwind utilities, avoid layout thrash

## Output
- List findings with severity (critical / moderate / minor)
- Provide fixes inline, not just recommendations
- Measure before/after where possible (render count, bundle size delta)
