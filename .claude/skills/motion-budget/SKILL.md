---
name: motion-budget
description: Audit motion and animation for performance impact. Identify layout-triggering animations and measure against performance budgets. Provide the component or page.
argument-hint: Component name or file path
---

# Motion Budget Audit

Audit animation performance of: $ARGUMENTS

## Step 1: Find All Animations

Search the target for:
- Tailwind transition classes: `transition-*`, `duration-*`, `ease-*`, `animate-*`
- Tailwind hover/focus transitions: `hover:`, `focus:`, `group-hover:`
- CSS `transition` property in any inline styles or CSS modules
- CSS `animation` / `@keyframes` declarations
- JavaScript-driven animations (framer-motion, react-spring, GSAP, requestAnimationFrame)

## Step 2: Classify Each Animation Property

For every animated CSS property found, classify it:

### Composite-only (Safe)
- `transform` (translate, scale, rotate, skew)
- `opacity`
- `filter` (blur, brightness, etc.)

### Paint-triggering (Warning)
- `color`, `background-color`
- `box-shadow`, `text-shadow`
- `border-color`, `outline-color`
- `background-image`

### Layout-triggering (Critical)
- `width`, `height`, `min-width`, `max-width`, `min-height`, `max-height`
- `padding`, `margin`
- `top`, `right`, `bottom`, `left`
- `font-size`, `line-height`
- `border-width`
- `display`, `position`, `flex`, `grid`

## Step 3: Check Duration Compliance

- [ ] All durations use `transitions.fast` (150ms), `transitions.normal` (200ms), or `transitions.slow` (300ms)?
- [ ] No custom duration values outside the token set?
- [ ] Hover/focus uses `fast` (150ms)?
- [ ] Layout changes use `normal` (200ms)?
- [ ] Dramatic reveals use `slow` (300ms)?

## Step 4: Check Reduced Motion

- [ ] Every animation has a `prefers-reduced-motion` fallback?
- [ ] Fallback disables motion entirely (not just slows it down)?

## Step 5: Page Load Budget

- [ ] No more than 3 simultaneous animations on initial page load?
- [ ] No auto-playing animations longer than 5 seconds?
- [ ] Animations below the fold are scroll-triggered (not immediate)?

## Step 6: Core Web Vitals Impact

- [ ] No animations contribute to CLS (no dimension changes after paint)?
- [ ] No animations block INP (no heavy JS-driven animation on the main thread)?
- [ ] No animations delay LCP (no render-blocking animation above the fold)?

## Output

For each finding:
- Property being animated and its classification (composite/paint/layout)
- file:line reference
- Severity (critical for layout-triggering, warning for paint-triggering, info for composite)
- Fix suggestion (typically: replace with transform/opacity equivalent)

Summary: total animation count, count by classification, pass/fail on each budget check.
