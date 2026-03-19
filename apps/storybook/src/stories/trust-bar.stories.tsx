import type { Meta, StoryObj } from '@storybook/react'
import { TrustBar } from '@yoga/ui'

/**
 * Station 2 — Trust Bar. A narrow dark announcement band positioned immediately
 * below the hero to establish scarcity and urgency.
 *
 * Renders on `#1A2E1A` (near-black forest) with `#FAF8F5` cream text. The
 * component is intentionally dark so it must be viewed against a similarly
 * dark or neutral page background.
 *
 * - `headline` — semibold cream text (primary message)
 * - `subline` — muted cream text (supporting detail)
 * - `ctaHref` — when provided, `subline` becomes a focusable `<a>` link
 *
 * Layout stacks vertically on mobile and collapses to a single horizontal band
 * at `sm` (640 px) and wider.
 */
const meta: Meta<typeof TrustBar> = {
  title: 'Components/TrustBar',
  component: TrustBar,
  tags: ['autodocs'],
  argTypes: {
    headline: {
      control: 'text',
      description: 'Semibold cream label — the primary scarcity or urgency message.',
    },
    subline: {
      control: 'text',
      description:
        'Supporting detail text. Becomes a clickable link when `ctaHref` is set.',
    },
    ctaHref: {
      control: 'text',
      description:
        'When provided, wraps `subline` in an `<a>` element. Leave blank for plain text subline.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes forwarded to the root <div>.',
    },
  },
}

export default meta
type Story = StoryObj<typeof TrustBar>

// ─── Decorators ───────────────────────────────────────────────────────────────

/**
 * The TrustBar sits flush in a page layout — wrap in a neutral container so the
 * dark background is visible against the Storybook canvas.
 */
const PageDecorator: Story['decorators'] = [
  (StoryFn) => (
    <div style={{ background: '#F0EBE3', padding: '2rem 0', borderRadius: '0.5rem' }}>
      <StoryFn />
    </div>
  ),
]

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * With CTA — subline renders as an `<a>` link to a booking page. This is the
 * primary production usage: scarcity headline paired with a booking nudge.
 */
export const WithCta: Story = {
  decorators: PageDecorator,
  args: {
    headline: '3 spots open this week.',
    subline: 'Reserve yours before they fill.',
    ctaHref: '/book',
  },
}

/**
 * Without CTA — subline is plain text (no link). Use when you want to surface
 * information without directing to another page.
 */
export const WithoutCta: Story = {
  decorators: PageDecorator,
  args: {
    headline: '10 students per class. Always.',
    subline: 'Intentionally small so Miri knows your form.',
  },
}

/**
 * Scarcity urgency — a single-unit availability message. Tests the component
 * with very short copy where the two items collapse to near-equal visual weight.
 */
export const ScarcityUrgency: Story = {
  decorators: PageDecorator,
  args: {
    headline: '1 spot left this Saturday.',
    subline: 'Claim it now.',
    ctaHref: '/book',
  },
}

/**
 * Longer subline — verifies text wraps cleanly on mobile widths without
 * overflowing the dark band.
 */
export const LongSubline: Story = {
  decorators: PageDecorator,
  args: {
    headline: 'Limited availability.',
    subline:
      'Classes are capped at 10 students so every member gets Miri's full attention — spots fill quickly.',
    ctaHref: '/schedule',
  },
}

/**
 * Long headline — tests overflow and wrapping behavior when the headline copy
 * is unusually verbose.
 */
export const LongHeadline: Story = {
  decorators: PageDecorator,
  args: {
    headline: 'Only 3 reformer spots remain for the week of March 24th.',
    subline: 'Book now to hold your place.',
    ctaHref: '/book',
  },
}

/**
 * Informational (no CTA, no urgency) — purely informational announcement,
 * e.g. a holiday schedule notice.
 */
export const Informational: Story = {
  decorators: PageDecorator,
  args: {
    headline: 'Studio closed April 19–21 for Passover.',
    subline: 'Classes resume Monday April 22.',
  },
}

/** Playground — use controls to explore all prop combinations interactively. */
export const Playground: Story = {
  decorators: PageDecorator,
  args: {
    headline: '3 spots open this week.',
    subline: 'Reserve yours before they fill.',
    ctaHref: '/book',
    className: '',
  },
}
