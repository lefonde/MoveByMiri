# Design Workflow

Complete 6-phase design process for MOOV by Miri. Every tool is assigned to exactly one phase. Three user gates ensure you stay in control of visual decisions.

## Phase 0: Triage

Before invoking anything, identify the work type:

| Trigger                               | Entry Point                          |
| ------------------------------------- | ------------------------------------ |
| New page/section/concept from scratch | Phase 1 (Research)                   |
| Figma design to implement             | Phase 3B (Figma path)                |
| Redesign or improve existing section  | Phase 1, with existing page as input |
| Fix/polish a specific component       | Phase 4 (Build)                      |
| Audit what's already built            | Phase 5 (Review)                     |
| Generate images or textures           | Phase 6 (Assets)                     |

---

## Phase 1: Research & Inspiration

**Goal:** Gather raw creative material before committing to a direction.

| Tool                             | Role                                                                                                                                               | When                                                                                                            |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `/ui-ux-pro-max --design-system` | Design intelligence lookup. Search CSV databases for style, palette, typography, and landing page pattern recommendations matching MOOV's profile. | Always first. Query: `"wellness boutique pilates elegant warm"`                                                 |
| Google Stitch MCP                | Rapid visual exploration. Generate 2-3 throwaway HTML/CSS mockups from prompts to see what directions look like.                                   | When you want to visualize a concept before committing. Output is disposable — never enters the build pipeline. |
| Nano Banana 2 MCP                | Mood imagery. Generate atmospheric textures, light studies, color atmosphere references for mood boards.                                           | For non-product imagery only (backgrounds, textures, abstract). Never for people, studio, or equipment photos.  |
| 21st.dev Magic MCP               | Component pattern scouting. Search community library for interaction patterns — how others handle pricing cards, testimonial carousels, nav.       | When designing a new component type. Extract the interaction idea only — never use the generated code directly. |

**Output:** A research brief containing:

- Top 2-3 style directions from ui-ux-pro-max (with palette/font/style IDs)
- 1-2 Stitch mockup screenshots showing rough visual directions
- Mood imagery from Nano Banana 2 (if applicable)
- Component patterns from 21st.dev worth considering

**Boundaries:**

- Stitch mockups don't use `@yoga/tokens` — they're exploration sketches, not production code
- 21st.dev components are generic React — extract the interaction idea, discard the code
- Nano Banana 2 images must never represent the studio, founder, or clients — real photography only for those

---

## Phase 1.5: Direction Review (USER GATE)

**Goal:** User picks the creative direction before any code is written.

**What to present:**

- 2-3 distinct visual directions, each with:
  - A Stitch mockup screenshot (or multiple)
  - The style/palette/typography summary from ui-ux-pro-max
  - Mood imagery from Nano Banana 2 (if generated)
  - A short prose description of the vibe and rationale

**User actions:**

- "Go with direction B"
- "Mix A's colors with C's layout"
- "None of these — try X instead" (loop back to Phase 1)

**Rule:** No code is written until a direction is approved.

---

## Phase 2: Concept & Strategy

**Goal:** Produce a complete design handoff document following the 10-section format in `rules/design-handoff.md`.

| Tool                       | Role                                                                                                                                                                                  |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/concept-sprint <target>` | Orchestrator. Gathers live tokens, existing components, design rules. Incorporates Phase 1 research + user's chosen direction. Produces design brief. Optionally spawns 5-agent team. |
| Agent team (5 agents)      | Collaborative refinement. creative-director, landing-page-strategist, ux-architect, interaction-designer, design-critic each contribute their perspective.                            |

**How ui-ux-pro-max and concept-sprint work together:**

1. `/ui-ux-pro-max --design-system` runs first (Phase 1) — database-backed recommendations
2. Those recommendations feed INTO concept-sprint as "Research Context"
3. The concept-sprint team makes brand-specific decisions — ui-ux-pro-max is the menu, concept-sprint is the chef

**Output:** A design handoff document with all 10 sections from `rules/design-handoff.md`, referencing actual token exports from `packages/tokens/src/index.ts` and component exports from `packages/ui/src/index.ts`.

For MOOV landing pages, the handoff should follow the 10-station structure in `rules/moov-station-map.md`.

---

## Phase 2.5: Concept Review (USER GATE)

**Goal:** User approves the design concept before build begins.

**What to present:**

- The handoff document, section by section:
  - Section anatomy with content sketches (headlines, subheads, CTAs)
  - Color and typography tokens being used (with visual swatches if possible)
  - Motion approach (what animates, at what speed)
  - Component inventory (what's reused vs. new)
- Visual references from Phase 1 that illustrate the approved direction
- Any Stitch mockups that were refined based on the chosen direction

**User actions:**

- "Approved — proceed to build"
- "Change the hero approach" (revise specific sections)
- "Rethink the pricing section" (send specific sections back to Phase 2)
- "Start over" (loop back to Phase 1)

**Rule:** Build does not begin until the handoff is approved.

---

## Phase 3: Design Generation

Two paths into build. They never mix.

### Path A: From Handoff Document (most common)

The Phase 2 handoff document IS the design. No visual design tool needed — the handoff contains enough detail for build agents to implement directly.

### Path B: From Figma Design

When a visual design exists in Figma:

| Tool                    | Role                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------- |
| Figma MCP               | Read the design: extract layout, spacing, colors, typography, component hierarchy                       |
| `/implement-from-figma` | Map Figma values to `@yoga/tokens`, identify `@yoga/ui` components to reuse, flag new components needed |

**Stitch vs Figma distinction:**

- Stitch = Phase 1 only (generates throwaway exploration mockups)
- Figma = Phase 3B only (reads existing professional designs)
- They serve different moments and never interact

---

## Phase 4: Build

**Goal:** Implement the design in code using `@yoga/ui` components and `@yoga/tokens` values.

**Skills vs subagents:** Skills are for solo execution (you run them). Subagents are for team execution (spawned as a coordinated team). Same underlying work, different invocation pattern.

**Build sequence (strict order):**

| Step                   | Solo (Skill)                      | Team (Subagent)        | What                                                                                        |
| ---------------------- | --------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------- |
| 1. Implement           | `/implement-from-figma` or manual | `figma-implementer`    | Create components in `packages/ui/src/components/`, wire props, semantic HTML, token values |
| 2. Polish visuals      | `/ui-polish`                      | `ui-art-director`      | Refine spacing rhythm, type hierarchy, color weight, shadow depth                           |
| 3. Polish interactions | `/ui-polish` (interactions)       | `interaction-polisher` | Hover/focus/pressed transitions, skeletons, scroll reveals, reduced-motion fallbacks        |
| 4. Write stories       | `/write-story`                    | `storybook-maintainer` | CSF3 stories for every variant, state, and responsive breakpoint                            |

**21st.dev in build:** NEVER used in Phase 4. If a 21st.dev pattern was identified in Phase 1, implement it from scratch using `@yoga/ui` conventions and `@yoga/tokens` values.

**Build constraints:**

- Every value from `@yoga/tokens` — no magic numbers, no hardcoded hex colors
- Every component gets a Storybook story before it's done
- Every interactive element keyboard accessible with visible focus ring
- Every animation uses only `transform` and `opacity`
- Every animation has `prefers-reduced-motion` fallback

---

## Phase 4.5: Visual Check-in (USER GATE)

**Goal:** User verifies the build matches their approved concept.

**What to present:**

- Live screenshots at 1280px (desktop) and 375px (mobile) via `preview_screenshot` or Playwright
- Side-by-side comparison with the concept mockups from Phase 2.5
- Call out any intentional deviations from the concept (and why)

**User actions:**

- "Looks right — proceed to QA"
- "The spacing on Station 5 is off" (specific fix requests → loop back to Phase 4)
- "Colors feel different than what I approved" (investigate and fix → loop back to Phase 4)

**Rule:** QA does not begin until visual check-in passes.

---

## Phase 5: Review & QA

**Goal:** Verify the build meets quality standards.

**Review sequence (strict order — each review can trigger fixes before proceeding):**

| Step                 | Solo (Skill)      | Team (Subagent)              | What                                                                                 |
| -------------------- | ----------------- | ---------------------------- | ------------------------------------------------------------------------------------ |
| 1. Design compliance | `/design-qa`      | `ui-reviewer`                | Token compliance, spacing rhythm, type hierarchy, color contrast, motion consistency |
| 2. Accessibility     | `/a11y-review`    | (same `ui-reviewer`)         | WCAG 2.1 AA — keyboard, focus, ARIA, contrast, screen reader, reduced motion         |
| 3. Responsive        | (in `/design-qa`) | `responsive-layout-reviewer` | Overflow, stacking, spacing, touch targets, mobile-first                             |
| 4. Motion budget     | `/motion-budget`  | —                            | Animation property classification, duration compliance, reduced motion, CWV impact   |
| 5. Performance       | `/perf-pass`      | —                            | Render frequency, bundle impact, data fetching, images, dynamic imports              |
| 6. Visual regression | —                 | `visual-regression-reviewer` | Playwright screenshot comparison at 1280px and 375px                                 |

**Page-level reviews (for full pages, not components):**

| Skill                    | When                                                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| `/landing-page-critique` | After a landing page is fully assembled. Uses `rules/moov-station-map.md` for MOOV pages.  |
| `/app-flow-critique`     | After an app flow (booking, settings) is assembled. Checks navigation, state, consistency. |

**design-qa vs ui-polish distinction:**

- `/ui-polish` = Phase 4 — implements fixes (writes code)
- `/design-qa` = Phase 5 — audits and reports (read-only, produces findings)
- Sequence: polish first, then verify

---

## Phase 6: Asset Generation

**Goal:** Generate non-photographic visual assets where AI generation is appropriate.

### Asset Decision Rules for MOOV by Miri

| Subject                            | Source                  | Rationale                                                                                                              |
| ---------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Studio interior photos             | Real photography only   | The brand promise is "feel like walking into the space" — AI can't replicate the specific arches, limewash, olive mats |
| Miri / founder portraits           | Real photography only   | Authenticity is the brand's core                                                                                       |
| Client/member photos               | Real photography only   | Trust requires real people                                                                                             |
| Equipment close-ups                | Real photography only   | Product truth                                                                                                          |
| Abstract textures / backgrounds    | Nano Banana 2 OK        | Organic textures, linen patterns, warm gradients for section backgrounds                                               |
| Decorative botanical illustrations | Nano Banana 2 OK        | Stylized plant/leaf motifs for decorative elements                                                                     |
| Social media graphics (non-photo)  | Nano Banana 2 OK        | Typography-forward graphics, pattern tiles, color studies                                                              |
| Icons                              | SVG libraries (Lucide)  | Never AI-generated, never emojis                                                                                       |
| Brand logos (external)             | SVGL via 21st.dev Magic | Partner logos, payment method logos                                                                                    |

### Nano Banana 2 Prompt Guidelines for MOOV

- **Always include:** "warm earth tones, cream and olive palette, organic textures, soft natural light"
- **Never include:** "people", "faces", "studio", "gym", "pilates equipment"
- Output should feel like a material swatch, not a photograph

---

## Consolidated Tool Map

Every tool appears exactly once:

| Tool                               | Phase                     | Role                                                    |
| ---------------------------------- | ------------------------- | ------------------------------------------------------- |
| `/ui-ux-pro-max --design-system`   | 1 (Research)              | Database-backed style/color/typography recommendations  |
| Google Stitch MCP                  | 1 (Research)              | Throwaway visual exploration mockups                    |
| Nano Banana 2 MCP                  | 1 (Research) + 6 (Assets) | Mood imagery exploration + production abstract textures |
| 21st.dev Magic MCP                 | 1 (Research)              | Component interaction pattern scouting                  |
| `/concept-sprint`                  | 2 (Concept)               | Design brief + agent team orchestration                 |
| Agent team (5 ideation agents)     | 2 (Concept)               | Collaborative handoff document production               |
| Figma MCP                          | 3B (Figma path)           | Extract design values from existing Figma files         |
| `/implement-from-figma`            | 3B + 4 (Build)            | Map Figma to tokens + implement components              |
| `/ui-polish`                       | 4 (Build)                 | Implement visual and interaction polish                 |
| `/write-story`                     | 4 (Build)                 | Create Storybook stories                                |
| `figma-implementer` agent          | 4 (Build, team)           | Component implementation                                |
| `ui-art-director` agent            | 4 (Build, team)           | Visual refinement                                       |
| `interaction-polisher` agent       | 4 (Build, team)           | Motion and interaction implementation                   |
| `storybook-maintainer` agent       | 4 (Build, team)           | Story coverage                                          |
| `/design-qa`                       | 5 (Review)                | Design system compliance audit                          |
| `/a11y-review`                     | 5 (Review)                | WCAG 2.1 AA audit                                       |
| `/motion-budget`                   | 5 (Review)                | Animation performance audit                             |
| `/perf-pass`                       | 5 (Review)                | General performance audit                               |
| `/landing-page-critique`           | 5 (Review)                | Page-level conversion audit                             |
| `/app-flow-critique`               | 5 (Review)                | Flow-level UX audit                                     |
| `ui-reviewer` agent                | 5 (Review, team)          | Quality + a11y review                                   |
| `responsive-layout-reviewer` agent | 5 (Review, team)          | Breakpoint audit                                        |
| `visual-regression-reviewer` agent | 5 (Review, team)          | Screenshot comparison                                   |
| Playwright MCP                     | 5 (Review)                | E2E testing + visual regression screenshots             |
