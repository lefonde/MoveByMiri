---
name: app-flow-critique
description: Audit an app flow for UX consistency, state handling, navigation, and information density. Provide the flow name or route path.
argument-hint: Flow name or route path (e.g., "settings flow", "src/app/dashboard")
---

# App Flow Critique

Audit this application flow: $ARGUMENTS

## Reference Standards

Read these before auditing:
- `rules/design-principles.md` — design quality bar
- `rules/component-patterns.md` — component conventions
- `CLAUDE.md` UX Conventions section — loading states, error boundaries, responsive-first

## Flow Audit Checklist

### Navigation
- [ ] User always knows where they are (breadcrumbs, active nav, page title)?
- [ ] Can always go back without data loss?
- [ ] No dead-end screens (every screen has a clear next action)?
- [ ] Navigation is stable (doesn't shift between pages)?

### State Handling
- [ ] Every async operation has a loading state?
- [ ] Every async operation has an error state with recovery action?
- [ ] Empty states are meaningful (with action prompt, not blank)?
- [ ] Optimistic updates where appropriate?
- [ ] Error boundaries around route segments?

### Information Density
- [ ] Clear hierarchy — primary content is visually dominant?
- [ ] Not overwhelming (too many competing elements)?
- [ ] Not too sparse (wasted space, unclear purpose)?
- [ ] Data-heavy views hold up with realistic data volume?

### Consistency
- [ ] Same patterns across similar screens (lists, forms, detail views)?
- [ ] Consistent use of `@yoga/tokens` spacing and typography?
- [ ] Action buttons in consistent positions?
- [ ] Consistent feedback patterns (toasts, inline errors, modals)?

### Accessibility
- [ ] Every action completable via keyboard only?
- [ ] Focus management in modals and dialogs?
- [ ] Form labels and error messages linked to inputs?
- [ ] Logical tab order?

### Responsive
- [ ] Usable at all breakpoints from `@yoga/tokens`?
- [ ] Touch targets at least 44x44px on mobile?
- [ ] No horizontal overflow?

## Output

1. Flow diagram description (screens → transitions → states)
2. State-by-state findings with severity (critical/moderate/minor)
3. Overall flow assessment and top 3 recommendations
