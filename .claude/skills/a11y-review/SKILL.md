---
name: a11y-review
description: Accessibility audit of a component or page against WCAG 2.1 AA.
argument-hint: Component/page path or description
---

# Accessibility Review

Audit: $ARGUMENTS

## WCAG 2.1 AA Checklist
1. **Semantic HTML**: Correct heading hierarchy, landmark regions, lists
2. **Keyboard**: All interactive elements reachable and operable, no keyboard traps
3. **Focus**: Visible focus indicator, logical order, managed in modals/dialogs
4. **ARIA**: Correct roles, states, properties. Prefer native HTML over ARIA.
5. **Color contrast**: 4.5:1 normal text, 3:1 large text. Don't rely on color alone.
6. **Screen reader**: Labels for form controls, alt text for images, live regions for dynamic content
7. **Motion**: Respect `prefers-reduced-motion`, no auto-playing animations > 5s
8. **Responsive**: Usable at 200% zoom, no horizontal scroll at 320px

## Output
- Violations with WCAG criterion reference (e.g., "1.4.3 Contrast")
- Code fix for each violation
- Pass/fail summary
