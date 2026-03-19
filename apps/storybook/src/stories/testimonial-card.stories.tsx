import type { Meta, StoryObj } from '@storybook/react'
import { TestimonialCard } from '@yoga/ui'

/**
 * Member testimonial card used in Station 5 (Voices) of the MOOV landing page.
 *
 * Displays a pull-quote in Cormorant Garamond italic, with the member name in
 * terracotta small-caps and an optional detail line. Two variants:
 *
 * - **light** (default) — bone-cream background (`#F5F0E8`), dark quote text.
 *   Use on neutral/white page sections.
 * - **dark** — near-transparent fill with a subtle frosted border. Place on
 *   dark backgrounds (`#2A2623` or similar) for the Station 5 layout.
 */
const meta: Meta<typeof TestimonialCard> = {
  title: 'Components/TestimonialCard',
  component: TestimonialCard,
  tags: ['autodocs'],
  argTypes: {
    quote: {
      control: 'text',
      description: 'The testimonial quote text (the component adds typographic curly quotes).',
    },
    name: {
      control: 'text',
      description: 'Member name displayed in the figcaption',
    },
    detail: {
      control: 'text',
      description: 'Supporting detail — e.g. membership tier or time as a member',
    },
    variant: {
      control: 'radio',
      options: ['light', 'dark'],
      description:
        'light → bone-cream background. dark → frosted border on transparent fill (requires dark page bg).',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes forwarded to the root <figure>',
    },
  },
}

export default meta
type Story = StoryObj<typeof TestimonialCard>

// ─── Decorators ──────────────────────────────────────────────────────────────

const LightDecorator: Story['decorators'] = [
  (StoryFn) => (
    <div
      style={{
        background: '#FAF8F5',
        padding: '3rem 2rem',
        borderRadius: '0.5rem',
        maxWidth: '480px',
      }}
    >
      <StoryFn />
    </div>
  ),
]

const DarkDecorator: Story['decorators'] = [
  (StoryFn) => (
    <div
      style={{
        background: '#2A2623',
        padding: '3rem 2rem',
        borderRadius: '0.5rem',
        maxWidth: '480px',
      }}
    >
      <StoryFn />
    </div>
  ),
]

// ─── Variant stories ──────────────────────────────────────────────────────────

/** Light variant (default) — bone-cream background, warm dark text. */
export const Light: Story = {
  decorators: LightDecorator,
  args: {
    variant: 'light',
    quote:
      "I've tried three other pilates studios. This is the only one where I actually feel seen.",
    name: 'Rachel T.',
    detail: 'Member since 2023',
  },
}

/**
 * Dark variant — frosted transparent card on dark background.
 * Used in Station 5 (Voices) on the near-black `#2A2623` section.
 */
export const Dark: Story = {
  decorators: DarkDecorator,
  args: {
    variant: 'dark',
    quote: 'Miri adjusts your form by name, not just gesture. That changed everything for me.',
    name: 'Sofia M.',
    detail: 'Saturday regulars',
  },
}

// ─── Content edge cases ───────────────────────────────────────────────────────

/** Short quote — verifies minimum-content rendering. */
export const ShortQuote: Story = {
  decorators: LightDecorator,
  args: {
    variant: 'light',
    quote: 'Nothing else compares.',
    name: 'Emma L.',
    detail: '6-month member',
  },
}

/** Long quote — verifies multi-line wrapping and paragraph readability. */
export const LongQuote: Story = {
  decorators: LightDecorator,
  args: {
    variant: 'light',
    quote:
      'I came in nervous about pilates reformer because of a back injury. Miri worked around it immediately, modified everything without making me feel like a liability, and within six weeks my physiotherapist noticed a genuine difference. The space is small enough that she remembers what you worked on last session.',
    name: 'Danielle R.',
    detail: 'Reformer Foundations · 3 months',
  },
}

/** Long quote on dark — same overflow check in the dark variant. */
export const LongQuoteDark: Story = {
  decorators: DarkDecorator,
  args: {
    variant: 'dark',
    quote:
      'I came in nervous about pilates reformer because of a back injury. Miri worked around it immediately, modified everything without making me feel like a liability, and within six weeks my physiotherapist noticed a genuine difference. The space is small enough that she remembers what you worked on last session.',
    name: 'Danielle R.',
    detail: 'Reformer Foundations · 3 months',
  },
}

/** No detail text — verifies the separator is omitted cleanly when detail is blank. */
export const NoDetail: Story = {
  decorators: LightDecorator,
  args: {
    variant: 'light',
    quote: 'I finally found my place.',
    name: 'Priya K.',
    detail: '',
  },
}

// ─── Layout composition ───────────────────────────────────────────────────────

/** Three-card grid — mirrors Station 5 (Voices) three-column dark layout. */
export const ThreeCardGridDark: Story = {
  render: () => (
    <div
      style={{
        background: '#2A2623',
        padding: '4rem 2rem',
        borderRadius: '0.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
      }}
    >
      <TestimonialCard
        variant="dark"
        quote="I've tried three other pilates studios. This is the only one where I actually feel seen."
        name="Rachel T."
        detail="Member since 2023"
      />
      <TestimonialCard
        variant="dark"
        quote="Miri adjusts your form by name, not just gesture. That changed everything for me."
        name="Sofia M."
        detail="Saturday regulars"
      />
      <TestimonialCard
        variant="dark"
        quote="Nothing else compares. I'm stronger, calmer, and I actually look forward to Mondays."
        name="Emma L."
        detail="6-month member"
      />
    </div>
  ),
}

/** Three light cards — alternative layout for bone/cream section backgrounds. */
export const ThreeCardGridLight: Story = {
  render: () => (
    <div
      style={{
        background: '#FAF8F5',
        padding: '4rem 2rem',
        borderRadius: '0.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
      }}
    >
      <TestimonialCard
        variant="light"
        quote="I've tried three other pilates studios. This is the only one where I actually feel seen."
        name="Rachel T."
        detail="Member since 2023"
      />
      <TestimonialCard
        variant="light"
        quote="Miri adjusts your form by name, not just gesture. That changed everything for me."
        name="Sofia M."
        detail="Saturday regulars"
      />
      <TestimonialCard
        variant="light"
        quote="Nothing else compares. I'm stronger, calmer, and I actually look forward to Mondays."
        name="Emma L."
        detail="6-month member"
      />
    </div>
  ),
}

// ─── Playground ───────────────────────────────────────────────────────────────

/** Playground — use controls to explore all prop combinations. */
export const Playground: Story = {
  decorators: LightDecorator,
  args: {
    variant: 'light',
    quote: 'I finally found my place.',
    name: 'Priya K.',
    detail: 'Member since 2024',
    className: '',
  },
}
