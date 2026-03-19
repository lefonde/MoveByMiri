# MOOV by Miri — Station Map

Maps the generic 8-section landing page anatomy (`rules/landing-page-anatomy.md`) to MOOV's 10-station conversion arc.

## Station Structure

| #   | MOOV Station        | Generic Anatomy Section      | Purpose                                                                                       |
| --- | ------------------- | ---------------------------- | --------------------------------------------------------------------------------------------- |
| 1   | **Arrival**         | Promise / Hero               | Full-bleed studio photo, bottom-anchored wordmark, dual overlay gradient, SMS CTA             |
| 2   | **Trust Bar**       | Social Proof                 | Dark `#2A2623` band with scarcity copy ("3 spots open this week")                             |
| 3   | **Honest Mirror**   | Problem Framing              | Emotional mirror — "You've tried the alternatives." Uses audience language, not feature-speak |
| 4   | **Threshold**       | Feature Architecture         | SplitSection (60/40), CurtainReveal studio photo + intimacy promise                           |
| 5   | **Voices**          | Social Proof (expanded)      | TestimonialCards on dark background — real member quotes                                      |
| 6   | **The Space**       | Product Demo                 | Full-bleed cinematic studio photo (21:9 aspect) + left-aligned logistics                      |
| 7   | **The Person**      | _(New: Founder)_             | FounderQuote at editorial scale — 2-column grid with portrait                                 |
| 8   | **The Price**       | Objection Handling → Pricing | Terracotta tier labels, CounterRise numerals, payment info, inline CTA                        |
| 9   | **Instagram Proof** | _(New: Social proof)_        | 3 square images grid + IG link                                                                |
| 10  | **The Door**        | CTA Repetition               | Final CTA on olive gradient — cream Button, SMS link                                          |
| —   | **Footer**          | Footer Trust Layer           | Legal, contact, trust badges (separate `Footer` component)                                    |

## Additions Beyond Generic Anatomy

- **Station 7 (The Person):** Boutique studios sell the instructor as much as the method. This station has no equivalent in the generic anatomy.
- **Station 9 (Instagram Proof):** Social media presence is a primary trust signal for boutique fitness. Bridges the gap between website and community.
- **Split social proof:** Generic anatomy has one social proof section. MOOV uses two — Trust Bar (scarcity/urgency) and Voices (testimonials/credibility) — placed strategically to build trust at different points in the scroll.

## When to Use This Map

- When running `/landing-page-critique` on MOOV pages — evaluate against these 10 stations, not the generic 8 sections
- When running `/concept-sprint` for MOOV landing page changes — use station names and purposes as the section framework
- When the design-critic agent evaluates section order — reference this map for why stations are ordered this way
