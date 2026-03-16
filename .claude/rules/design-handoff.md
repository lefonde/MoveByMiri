# Design Handoff Format

Every design concept produced by an ideation agent MUST include all 10 sections below, in this order. This format ensures machine-parseable handoff from ideation to execution agents.

## 1. Rationale
Why this direction. What it optimizes for. What tradeoff it accepts.

## 2. Audience and Intent
Who sees this. What they should feel. What action they should take.

## 3. Visual Hierarchy
What the eye hits first, second, third. One primary focal point per viewport.

## 4. Section Anatomy
Ordered list of sections with:
- Section name and purpose
- Rough content (headline, subhead, body, CTA)
- Relative visual weight

## 5. Component Inventory
- Existing `@yoga/ui` components to reuse (by export name)
- New components needed (with prop sketch)
- Composition approach (how components nest)

## 6. Token Guidance
Reference actual exports from `packages/tokens/src/index.ts`:
- Colors: `colors.primary.500`, `colors.neutral.900`, etc.
- Spacing: `spacing[4]`, `spacing[8]`, etc.
- Typography: `fontSize.lg`, `fontFamily.sans`, etc.
- Radii: `radii.lg`, etc.
- Shadows: `shadows.md`, etc.

No magic numbers. Every value must map to a token.

## 7. Motion Guidance
- Transitions: use `transitions.fast` (150ms), `transitions.normal` (200ms), `transitions.slow` (300ms)
- Animated properties: ONLY `transform` and `opacity` — never width, height, padding, margin, top, left
- Hover/focus/pressed/disabled state transitions
- Scroll-based effects (if any)
- `prefers-reduced-motion` behavior for every animation

## 8. Responsive Notes
Behavior at each breakpoint from `@yoga/tokens`:
- `breakpoints.sm` (640px) — mobile landscape
- `breakpoints.md` (768px) — tablet
- `breakpoints.lg` (1024px) — small desktop
- `breakpoints.xl` (1280px) — desktop
- Stack order, visibility changes, layout shifts, content priority

## 9. Constraints
- What NOT to do (anti-patterns for this concept)
- Performance limits (animation count, bundle budget)
- Accessibility requirements (contrast ratios, keyboard flows)
- Content limits (max text length, image requirements)

## 10. Test Criteria
How to verify the implementation matches the intent:
- Visual checks (what to compare)
- Interaction checks (what to click/hover/tab)
- Responsive checks (which breakpoints matter most)
- Performance checks (LCP target, animation smoothness)
