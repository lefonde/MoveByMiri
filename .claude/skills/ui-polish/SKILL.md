---
name: ui-polish
description: Refine component styling, transitions, and UX details. Provide the component to polish.
argument-hint: Component name or file path
---

# UI Polish Pass

Refine the UX quality of: $ARGUMENTS

## Checklist
1. **Transitions**: Smooth hover/focus/active states (150-200ms ease)
2. **Loading states**: Skeleton or spinner for async content
3. **Empty states**: Meaningful empty state, not blank
4. **Error states**: Clear error messaging with recovery action
5. **Focus management**: Visible focus ring, logical tab order
6. **Micro-interactions**: Subtle feedback on user actions
7. **Responsive**: Test at mobile (375px), tablet (768px), desktop (1280px)
8. **Token compliance**: No hardcoded values, everything from `@yoga/tokens`
9. **Typography**: Proper hierarchy, line heights, truncation with ellipsis
10. **Spacing consistency**: Consistent use of spacing scale from tokens
