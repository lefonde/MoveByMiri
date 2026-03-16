---
name: design-qa
description: Comprehensive design quality check combining token compliance, spacing, typography, color, motion, and responsive behavior. Provide the component or page to audit.
argument-hint: Component name or file path
---

# Design QA

Comprehensive design quality audit of: $ARGUMENTS

## Reference

Read `packages/tokens/src/index.ts` for the authoritative token values.
Read `rules/design-principles.md` for the design quality bar.

## 1. Token Compliance

Scan all style values in the target. Every color, spacing, font-size, radius, and shadow must come from `@yoga/tokens`.

- [ ] No hardcoded color hex values (must use `colors.*`)
- [ ] No hardcoded spacing values (must use `spacing.*` or Tailwind spacing scale)
- [ ] No hardcoded font sizes (must use `fontSize.*`)
- [ ] No hardcoded border-radius (must use `radii.*`)
- [ ] No hardcoded shadows (must use `shadows.*`)
- [ ] No hardcoded transition durations (must use `transitions.*`)

Flag every magic number with file:line reference.

## 2. Spacing Rhythm

- [ ] Major sections separated by `spacing[8]` (2rem) or higher?
- [ ] Inner padding uses `spacing[3]` to `spacing[6]` (0.75rem to 1.5rem)?
- [ ] Spacing consistent within a component (no mixed values without reason)?
- [ ] Visual grouping clear — related items close, unrelated items far?

## 3. Type Hierarchy

- [ ] Max 3 font sizes per viewport section?
- [ ] Clear headline/body/caption distinction?
- [ ] Line heights from `fontSize` tuples (not custom)?
- [ ] Truncation with ellipsis where text length is unpredictable?

## 4. Color and Contrast

- [ ] 4.5:1 contrast ratio for normal text?
- [ ] 3:1 contrast ratio for large text (18px+ or 14px+ bold)?
- [ ] `colors.primary` used for action elements only?
- [ ] `colors.error`/`colors.success` used for semantics only (not decorative)?
- [ ] Don't rely on color alone to convey meaning?

## 5. Motion Consistency

- [ ] All transitions use `transitions.*` token durations?
- [ ] Only `transform` and `opacity` are animated?
- [ ] `prefers-reduced-motion` media query present for every animation?
- [ ] No more than 3 simultaneous animations on page load?

## 6. Responsive Behavior

- [ ] Tested at `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)?
- [ ] No horizontal overflow at any breakpoint?
- [ ] Content stacks logically on mobile?
- [ ] Touch targets at least 44x44px on mobile?
- [ ] Images responsive (not fixed width)?

## Output

Pass/fail per category. For each failure:
- file:line reference
- Current value vs. expected token
- Fix suggestion
