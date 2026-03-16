# Design Principles

Shared design taste that all agents — ideation and execution — must follow.

## Grid and Alignment
- 4px base grid via the `spacing` scale
- Align elements to the grid — no arbitrary offsets
- Consistent gutters within a layout (pick one spacing value and stick to it)

## Visual Hierarchy
- One primary action per viewport — no competing focal points
- Establish hierarchy through size, weight, color, and spacing — not decoration
- Headlines are benefit-oriented, not feature-oriented

## Color
- `colors.primary` for interactive/action elements
- `colors.neutral` for structure, text, and backgrounds
- `colors.error` and `colors.success` for semantic states only — never decorative
- 4.5:1 contrast ratio for normal text, 3:1 for large text

## Typography
- Max 3 font sizes per viewport section
- `fontFamily.sans` for all UI text, `fontFamily.mono` for code only
- Line heights from the `fontSize` tuples in `@yoga/tokens`
- Truncate with ellipsis where text length is unpredictable

## Motion
- Animate ONLY `transform` and `opacity` — never layout-triggering properties
- Durations from `transitions.fast` (150ms), `transitions.normal` (200ms), `transitions.slow` (300ms)
- Every animation must specify `prefers-reduced-motion` fallback
- No more than 3 simultaneous animations on page load
- No auto-playing animations longer than 5 seconds

## Performance
- Protect LCP: no render-blocking animations above the fold
- Protect INP: interactive elements must respond within 200ms
- Protect CLS: no animations that shift layout after initial paint
- Lazy-load below-fold images and heavy components

## Copy
- Concise, scannable, plain language
- Inverted pyramid: conclusion first, then supporting detail
- Headlines convey benefit, not feature
- CTAs are specific ("Start free trial") not vague ("Learn more")
- Avoid marketing jargon and filler words

## Spacing Rhythm
- Major sections: `spacing[8]` (2rem) or higher between them
- Inner padding: `spacing[3]` to `spacing[6]` (0.75rem to 1.5rem)
- Consistent within a component — don't mix spacing values without reason
