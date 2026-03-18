# MOOV by Miri — Landing Page Design Handoff

**Sprint date:** 2026-03-17 | **Status:** Complete — ready for execution

---

## 1. Rationale

This direction optimizes for **emotional specificity over visual complexity**. The studio's physical qualities (arches, light, warmth, intimacy) do the heavy lifting; the design's job is to get out of the way and let them work.

The central insight from the design sprint: the visitor's fear is not intimidation by a big gym — it is **anonymity**. She doesn't want to be invisible, unnamed, uncounted. Every design and copy decision answers that fear directly.

Tradeoffs accepted:

- Station 1 (ARRIVAL) is wordmark-only — zero copy in first viewport on mobile. The risk is "what is this?" confusion. The mitigation is that all traffic comes from Instagram (@moovbymiri), so brand recognition exists before the page loads.
- Dark pricing section (Station 6) breaks the warm cream palette. This is intentional: it signals a shift in register from "feeling the space" to "here's the deal" — but only after the visitor has already connected with the founder.
- No word-by-word headline animation (dropped by design-critic): comprehension delay and a11y violations outweigh the visual drama.

---

## 2. Audience and Intent

**Who:** Women in Wesley Hills, NY and surrounding area. Primary referral: Instagram (@moovbymiri). Age range 25–55. Already considering a boutique fitness class, not cold traffic.

**What they feel on arrival:** "This looks like mine." Not "impressive" — _familiar_. The studio should feel like a friend's beautifully designed home, not a brand.

**What they fear:** Being a number. Being watched and judged. Showing up and not knowing anyone. Committing to something that doesn't fit.

**What action they take:** Tap "Reserve Your Spot — $25" or "Book Your First Class — $25". Low commitment (single class). The page removes uncertainty, not apathy.

**What they must NOT feel:** Pressure, urgency, transformation rhetoric, or that they need to be a certain type of person to belong here.

---

## 3. Visual Hierarchy

**Station 1 (ARRIVAL):** Eye hits MOOV at 16vw — nothing else competes. Then the orientation line beneath it. Then the micro-header top-right. One CTA bottom-center.

**Station 2 (THRESHOLD):** Arch reveals studio photo. Eye hits the arch shape first (structural), then the headline ("10 students per class." then "Miri knows your name."), then the CTA. Price float arrives last, bottom of image.

**Station 3 (INSIDE):** Three equal-weight panels. No panel dominates — the parallel structure is the message (breadth without hierarchy).

**Station 4 (THE SPACE):** Photography fills the viewport. Address and phone are small and confident — they don't need to shout.

**Station 5 (THE PERSON):** Miri's face is the focal point. Pull-quote beneath, large and italic. The quote is the only large type on this section — her voice gets full stage.

**Station 6 (THE PRICE):** Dark background. The three price numbers dominate — `fontSize.numeric` at full scale. Pre-header is small. Per-class math is smaller still. Hierarchy: number → descriptor → per-class fact.

**Station 7 (THE DOOR):** Warm olive background. Single question. Single CTA. Secondary phone link below. Nothing competes.

---

## 4. Section Anatomy

### Station 1 — ARRIVAL

- **Purpose:** Cinematic brand arrival. Establish MOOV. Give enough context to not be confusing. No sell yet.
- **Content:**
  - Wordmark: `MOOV` — `fontSize.display` (clamp 3rem→6.5rem), Cormorant Garamond italic, `colors.neutral.50`
  - Orientation: `Boutique pilates & strength. Wesley Hills, NY.` — Inter `fontSize.sm`, `colors.neutral.50` at 80% opacity
  - Micro-header (top-right): `@moovbymiri · 929-627-3163` — `fontSize.xs`, `colors.neutral.50` at 60%
  - CTA: `Book Your First Class — $25` — pill button, `colors.primary.600`, `spacing[3]` `spacing[6]` padding
- **Background:** Full-bleed studio photo with `--gradient-hero` overlay (bottom-up warm veil)
- **Visual weight:** Maximum — full viewport height

### Station 2 — THRESHOLD

- **Purpose:** The emotional decision point. She reads the headline and either stays or leaves.
- **Content:**
  - Arch reveal: SVG mask opens from center, revealing studio interior photo
  - Headline line 1: `10 students per class.` — Cormorant Garamond roman, `fontSize.display`
  - Headline line 2: `Miri knows your name.` — Cormorant Garamond italic, `fontSize.display`
  - Subhead: `Small classes. Your name remembered from day one.` — Inter `fontSize.lg`, `colors.neutral.600`
  - Price float: `From $25 · No membership required` — Inter small-caps `fontSize.xs`, `colors.neutral.50` at 50%, bottom-left of arch image
  - CTA: `Reserve Your Spot — $25` — pill button, `colors.primary.600`, `spacing[4]` `spacing[8]` padding
- **Background:** `colors.neutral.50` (#FAF8F5)
- **Visual weight:** High — dominant typographic moment

### Station 3 — INSIDE

- **Purpose:** Three disciplines, benefit-first. Not a feature list — three doors she can walk through.
- **Content (three panels):**
  - Pilates: `Control you can actually feel.` / `Mat and reformer — built from breath, not reps.`
  - Strength: `Stronger without the noise.` / `Resistance training designed for longevity. No mirrors, no metrics, no performance.`
  - Movement: `The class that earns its name.` / `Flow and sculpt sequences — for when your body needs to move, not compete.`
- **Each panel:** Arch-topped image (existing `arch-image` component) + `EyebrowLabel` (discipline name) + `Heading` (benefit headline) + `Text` (descriptor)
- **Background:** `colors.neutral.100` (#F5F0EB)
- **Visual weight:** Medium — supporting, not peak

### Station 4 — THE SPACE

- **Purpose:** Photography earns trust. The studio sells itself. Address + phone as physical proof.
- **Content:**
  - Full-bleed image gallery (existing `image-gallery` component)
  - `Wesley Hills, NY. Come see it in person.` — `fontSize.lg`, `colors.neutral.700`
  - `929-627-3163 — Miri answers.` — `fontSize.base`, `colors.neutral.500`
- **Background:** Photography-filled, minimal text overlay
- **Visual weight:** Medium-high (image dominates, text is secondary)

### Station 5 — THE PERSON

- **Purpose:** Trust before transaction. Miri's face + voice before the price section.
- **Content:**
  - Miri photo: arch-shaped (existing `arch-image`), prominent
  - Pull-quote: `I built this space for women who are done settling.` — Miri, founder
  - Typography: Cormorant Garamond italic, `fontSize.3xl`, `colors.neutral.800`
  - Spacing: `spacing[24]` top and bottom — generous breathing room
- **Background:** `colors.neutral.50`
- **Visual weight:** Medium-high — emotional anchor

### Station 6 — THE PRICE

- **Purpose:** Founder-direct pricing declarations. Confidence, not a sales table.
- **Content:**
  - Pre-header: `Simple pricing. No memberships. No contracts. Show up.` — Inter `fontSize.sm`, `colors.neutral.400`
  - `$25.` — `fontSize.numeric`, Cormorant Garamond, `colors.neutral.50`
  - `One class. No commitment.` — Inter `fontSize.base`, `colors.neutral.300`
  - `$115.` + `Five classes. Two months to use them.` + `$23/class` — same pattern
  - `$200.` + `Ten classes. Three months. Make it yours.` + `$20/class` — same pattern
  - Policy note: `Your spot is saved once payment is sent. 24-hour cancellation policy.` — `fontSize.xs`, `colors.neutral.500`
- **Background:** `colors.neutral.900` (#2A2623) — dark, focused, deliberate
- **Visual weight:** High — the only dark section. Contrast creates emphasis.
- **Framing note for execution agents:** The pricing arriving after Miri reads as _Miri's confidence, not the studio's sales pitch_. `$25. $115. $200.` should feel like "here's what it costs to work with me" — a founder's directness.

### Station 7 — THE DOOR

- **Purpose:** Final warm invitation. Two paths: book online or call directly.
- **Content:**
  - Question: `Ready to find out if it's yours?` — Cormorant Garamond italic, `fontSize['4xl']`
  - CTA: `Book Your First Class — $25` — pill button, `colors.neutral.50` text on `--gradient-olive` background
  - Secondary: `Or call Miri: 929-627-3163` — Inter `fontSize.sm`, `colors.neutral.100` at 70%
- **Background:** `--gradient-olive` (`linear-gradient(135deg, #556B2F 0%, #374520 100%)`)
- **Visual weight:** High — warm, resolved, confident close

---

## 5. Component Inventory

### Existing components to reuse (from `@yoga/ui`)

| Component           | Used in                              |
| ------------------- | ------------------------------------ |
| `arch-image`        | Stations 2, 3, 5                     |
| `button`            | Stations 1, 2, 7                     |
| `feature-card`      | Station 3 (as discipline panel base) |
| `footer`            | Below Station 7                      |
| `heading`           | Stations 2, 3, 5                     |
| `image-gallery`     | Station 4                            |
| `navbar`            | Above Station 1                      |
| `pricing-card`      | Station 6 (update treatment)         |
| `section-container` | All stations                         |
| `text`              | All stations                         |

### New components needed (in `packages/ui`)

| Component        | Props                                                          | Notes                                                |
| ---------------- | -------------------------------------------------------------- | ---------------------------------------------------- |
| `EyebrowLabel`   | `{ children, color?: 'olive' \| 'neutral' }`                   | Small-caps, tracked Inter, `fontSize.xs`             |
| `MarqueeStrip`   | `{ text, speed?: 'slow' \| 'normal' }`                         | Pure CSS `animation`, pauses on hover, `aria-hidden` |
| `DisplayHeading` | `{ children, as?: 'h1' \| 'h2', style?: 'roman' \| 'italic' }` | Uses `fontSize.display` clamp                        |

### Page-level composition (in `apps/web/src/app/page.tsx`)

| Component      | Notes                                              |
| -------------- | -------------------------------------------------- |
| `SplitSection` | Stays in `apps/web` — page-specific composition    |
| `ArchReveal`   | SVG mask wrapper — page-specific animation trigger |
| `ScrollReveal` | Pure CSS `animation-timeline: scroll()` wrapper    |

---

## 6. Token Guidance

### Typography

- Wordmark (Station 1): `fontFamily.serif`, `fontSize.display` (clamp 3rem→6.5rem), italic, `colors.neutral.50`
- Section headings: `fontFamily.serif`, `fontSize['4xl']` or `fontSize['5xl']`, `colors.neutral.900`
- Eyebrow labels: `fontFamily.sans`, `fontSize.xs`, letter-spacing wide, `colors.primary.600`
- Body text: `fontFamily.sans`, `fontSize.base` or `fontSize.lg`, `colors.neutral.600`
- Price declarations: `fontFamily.serif`, `fontSize.numeric` (clamp 3.5rem→5rem), `colors.neutral.50`
- Pull-quote (Station 5): `fontFamily.serif`, `fontSize['3xl']`, italic, `colors.neutral.800`
- Price float: `fontFamily.sans`, `fontSize.xs`, small-caps, `colors.neutral.50` at 50% opacity

### Colors

- Page background: `colors.neutral.50` (#FAF8F5)
- Alt section background: `colors.neutral.100` (#F5F0EB)
- Dark section (Station 6): `colors.neutral.900` (#2A2623)
- Primary CTA: `colors.primary.600` (#556B2F)
- Accent (decorative only — rules, icons): `colors.accent.500` (#C27E60)
- Overlay text on photography: `colors.neutral.50` (#FAF8F5)
- Price numbers on dark: `colors.neutral.50` (warm white — NOT #ffffff)
- Descriptor text on dark: `colors.neutral.300`
- Policy text on dark: `colors.neutral.500`

### Spacing rhythm

- Section vertical padding: `spacing[20]` (5rem) minimum — `spacing[24]` (6rem) preferred
- Pull-quote section: `spacing[24]` top and bottom
- Inner component padding: `spacing[4]`–`spacing[8]`
- CTA button padding: Station 1 `spacing[3]` × `spacing[6]` / Station 2 `spacing[4]` × `spacing[8]`

### Radii

- Image containers (arch): arch SVG mask — no border-radius
- Pill buttons: `radii.full` (9999px)
- Cards: `radii['3xl']` (2rem)

### Shadows

- Pricing card hover: `0 20px 40px rgba(85, 107, 47, 0.15)` (olive glow — custom, not a shadow token)
- Navbar scrolled: `shadows.sm`

### CSS Custom Properties (gradients — define in `globals.css`)

```css
:root {
  --gradient-warm: linear-gradient(160deg, #faf3e8 0%, #faf8f5 60%);
  --gradient-olive: linear-gradient(135deg, #556b2f 0%, #374520 100%);
  --gradient-hero: linear-gradient(to top, rgba(250, 248, 245, 0.6) 0%, transparent 50%);
}
```

---

## 7. Motion Guidance

### Philosophy

All motion embodies the **exhale curve**: `cubic-bezier(0.22, 1, 0.36, 1)`. Fast start, very slow finish. No bounce. No spring. No snap. Every animation feels like a breath completing.

### Implementation

**CSS scroll-driven animations** (no GSAP). Use `animation-timeline: scroll()` and `@supports` fallback to static layout for Safari < 18.

### Hero entrance (on page load — max 3 simultaneous at t=0)

| Element          | Property                             | Duration | Delay | Easing       |
| ---------------- | ------------------------------------ | -------- | ----- | ------------ |
| Studio photo     | — (no animation, it's the LCP)       | —        | —     | —            |
| MOOV wordmark    | `opacity: 0→1` + `scale(0.97→1)`     | 800ms    | 0ms   | exhale curve |
| Orientation text | `opacity: 0→1` + `translateY(8px→0)` | 400ms    | 200ms | exhale curve |
| CTA button       | `opacity: 0→1` + `scale(0.96→1)`     | 300ms    | 400ms | exhale curve |
| Marquee strip    | Already running — no entrance        | —        | —     | —            |

### Scroll-triggered reveals

| Element                        | Trigger                     | Property                                             | Duration |
| ------------------------------ | --------------------------- | ---------------------------------------------------- | -------- |
| Arch mask open (Station 2)     | 20% in viewport             | SVG mask-size: 40%→100%                              | 600ms    |
| Headline stagger (Station 2)   | 30% in viewport             | `opacity: 0→1` + `translateY(20px→0)`, 100ms stagger | 400ms    |
| Discipline panels (Station 3)  | Each panel: 20% in viewport | `opacity: 0→1` + `translateY(30px→0)`                | 400ms    |
| Gallery images (Station 4)     | 15% in viewport             | `opacity: 0→1`, 150ms stagger                        | 500ms    |
| Miri photo + quote (Station 5) | 20% in viewport             | `opacity: 0→1` + `scale(0.97→1)`                     | 600ms    |
| Price cards (Station 6)        | Each card: 20% in viewport  | `opacity: 0→1` + `translateY(24px→0)`, 120ms stagger | 400ms    |

### Parallax

- Hero photo only: 0.6× scroll speed via CSS `animation-timeline: scroll()` on the img element
- No other parallax — one effect, purposeful not decorative

### Signature motion moments (validated in sprint)

1. **MOOV wordmark breathes in** — `scale(0.97→1)` + `opacity: 0→1`, 800ms exhale curve
2. **Arch mask opens** — SVG mask expands from center, 600ms exhale curve
3. **Hero parallax depth** — photo at 0.6× scroll speed

### Microinteractions

| Element               | Hover                                                                            | Active/Press         |
| --------------------- | -------------------------------------------------------------------------------- | -------------------- |
| Button                | `scale(1.02)`, 150ms                                                             | `scale(0.97)`, 150ms |
| Pricing card          | `translateY(-6px)` + olive glow shadow, 200ms                                    | —                    |
| Instagram/phone links | Arrow shifts `4px` right, `opacity: 0.6→1`, 150ms                                | —                    |
| Marquee strip         | `animation-play-state: paused`                                                   | —                    |
| Navbar                | Transparent → `rgba(250,248,245,0.95)` + `backdrop-filter: blur(12px)` on scroll | —                    |

### `prefers-reduced-motion`

All `transform` animations reduce to `opacity` only. Marquee pauses permanently. Parallax disabled (photo static).

---

## 8. Responsive Notes

### Station 1 — ARRIVAL

- **Mobile (< md):** Wordmark at `clamp` min (3rem → ~48px at 390px). Single column. CTA full-width.
- **Tablet (md):** Wordmark grows with viewport. Micro-header stays top-right.
- **Desktop (xl):** Wordmark at `clamp` max (6.5rem). Generous vertical centering.

### Station 2 — THRESHOLD

- **Mobile:** Arch image full-width, headline stacks below (not overlaid). Text column full-width.
- **Tablet+:** SplitSection layout — arch left (50%), headline text right (50%).
- **Desktop:** Arch can bleed left edge slightly for drama.

### Station 3 — INSIDE

- **Mobile:** Single column — disciplines stack vertically, each full-width.
- **Tablet (md):** 2-column grid (2 + 1 centered below, or all 3 if viewport allows).
- **Desktop (lg+):** 3-column equal grid.

### Station 4 — THE SPACE

- **Mobile:** Images stack vertically or single full-width scroll.
- **Tablet+:** Gallery grid (2×2 or masonry).
- **Desktop:** Full-bleed horizontal gallery with text overlay at bottom.

### Station 5 — THE PERSON

- **Mobile:** Arch photo top, pull-quote below. Full-width both.
- **Tablet+:** Photo left (40%), quote right (60%) — EditorialRow pattern.
- **Desktop:** Photo can be taller; quote gets generous `spacing[24]` breathing room.

### Station 6 — THE PRICE

- **Mobile:** Single column — cards stack vertically. Price numerals remain large.
- **Tablet (md):** 2-column (first card full-width or all 3 if space allows).
- **Desktop:** 3-column. Cards equal width. Pre-header centered above.

### Station 7 — THE DOOR

- **All breakpoints:** Centered, max-width `breakpoints.md` (768px). CTA full-width on mobile.

### Navbar

- **Mobile:** Logo left, single "Book" pill right. No nav links.
- **Desktop:** Logo left, nav links center (optional), "Book" pill right.

---

## 9. Constraints

### DO NOT

- Add a liability waiver to the landing page — belongs in booking flow only
- Animate `width`, `height`, `padding`, `margin` — `transform` and `opacity` only
- Use `scroll-snap-type: y mandatory` — kills free scroll, bad for keyboard nav
- Use `colors.accent` as CTA or button color — decorative/structural use only (rules, icons)
- Remove `— $25` from CTA copy — it is a deliberate conversion decision, not decoration
- Invent or paraphrase Miri's pull-quote — use only her actual words
- Launch GSAP — zero GSAP allowed. Run audit before build to confirm no imports exist.
- Use more than 3 simultaneous animations at page load t=0

### Performance

- Hero image: WebP, max 400KB at 1440px, must be LCP ≤ 2.5s
- CSS `animation-timeline: scroll()`: wrap in `@supports (animation-timeline: scroll())` — static fallback for Safari < 18
- No render-blocking animations above the fold
- Lazy-load all images below Station 2

### Accessibility

- `prefers-reduced-motion`: all transforms reduce to opacity-only; marquee pauses permanently
- `<MarqueeStrip>` must have `aria-hidden="true"` — decorative text strip
- Arch SVG mask: the image beneath must have descriptive `alt` text
- Pricing section dark background: `colors.neutral.50` on `colors.neutral.900` — 4.5:1 minimum (passes)
- `colors.neutral.400` on `colors.neutral.900` (policy text): verify contrast — may need `colors.neutral.300`
- Keyboard navigation must not be trapped by scroll-snap proximity
- All CTAs must be reachable by Tab and activated by Enter/Space

### Content limits

- MOOV wordmark: never break across two lines — min container width must accommodate single line
- Pull-quote (Station 5): 15–20 words maximum for typographic treatment to work
- Discipline descriptors (Station 3): 12 words maximum per panel
- Pricing descriptor lines: 6 words maximum per price point

---

## 10. Test Criteria

### Visual checks

- [ ] MOOV wordmark fills viewport width without overflow at 320px, 390px, 768px, 1280px
- [ ] Arch SVG mask renders correctly on Safari iOS 17 and 18
- [ ] Dark pricing section (Station 6) has no warm bleed from adjacent sections
- [ ] `colors.neutral.50` (warm white) is used for price numbers — not pure `#ffffff`
- [ ] `--gradient-hero` creates a natural veil at bottom of Station 1 — not a hard line
- [ ] `--gradient-olive` on Station 7 feels warm — not flat or corporate
- [ ] Cormorant Garamond italic loads before first paint (preload in `<head>`)

### Interaction checks

- [ ] CTA button hover: `scale(1.02)` visible, smooth
- [ ] CTA button press: `scale(0.97)` visible, responsive < 200ms
- [ ] Marquee pauses on hover, resumes on mouse-out
- [ ] Navbar shifts from transparent to frosted glass on scroll — no jump
- [ ] Pricing card lifts `6px` on hover with olive glow shadow
- [ ] All CTAs reachable by Tab key, activated by Enter/Space
- [ ] Arch reveal animation triggers at correct scroll position — not too early (feels accidental), not too late (user misses it)

### Responsive checks

- [ ] 390px (iPhone 14): Station 2 stacks vertically, arch full-width above headline
- [ ] 768px (tablet): Station 3 renders as 2+1 or 3-column without overflow
- [ ] 1280px (desktop): SplitSection proportions correct (arch bleeds left edge appropriately)
- [ ] All section paddings are `spacing[20]` minimum — verify no section feels cramped

### Performance checks

- [ ] LCP (hero image) ≤ 2.5s on simulated 4G
- [ ] No layout shift (CLS) from animation on page load
- [ ] INP: all interactive elements respond < 200ms
- [ ] Bundle: zero GSAP in final build (`pnpm build` → check chunk sizes)
- [ ] `animation-timeline: scroll()` fallback verified in Safari 17 (static layout, no broken layout)

---

## Data Dependencies

| Item            | Status                             | Required for                                                      |
| --------------- | ---------------------------------- | ----------------------------------------------------------------- |
| Class cap       | ✅ **10 students**                 | Station 2 headline — `10 students per class.`                     |
| Miri pull-quote | 🟡 Placeholder — confirm with Miri | Station 5 — `I built this space for women who are done settling.` |

---

## CTA Copy — Protected

The `— $25` suffix on CTAs is a **deliberate conversion decision**. Do not remove for aesthetic reasons.

| Station | CTA text                      | Button size                                   |
| ------- | ----------------------------- | --------------------------------------------- |
| 1       | `Book Your First Class — $25` | `spacing[3]` × `spacing[6]`                   |
| 2       | `Reserve Your Spot — $25`     | `spacing[4]` × `spacing[8]` (slightly larger) |
| 7       | `Book Your First Class — $25` | Full-width on mobile                          |
