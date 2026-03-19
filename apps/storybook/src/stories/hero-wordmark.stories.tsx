import type { Meta, StoryObj } from '@storybook/react'
import { HeroWordmark } from '@yoga/ui'

/**
 * Full-bleed hero wordmark for the MOOV arrival station (Station 1).
 *
 * Renders each letter as an individually-timed `<span>` so the host page
 * can drive a CSS stagger animation via the `--stagger-delay` custom property
 * and the `.wordmark-letter` class defined in `apps/web/src/app/globals.css`.
 *
 * The component itself is purely presentational — it applies the class and
 * sets the delay variable; the keyframe animation lives in the app stylesheet.
 *
 * Font size is fluid: `clamp(5rem, 12vw, 9rem)` (matches `fontSize.hero` token).
 */
const meta: Meta<typeof HeroWordmark> = {
  title: 'Components/HeroWordmark',
  component: HeroWordmark,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Wordmark text — each character becomes a staggered letter span',
    },
    staggerDelays: {
      control: 'object',
      description:
        'Array of delay values (seconds) for each letter. Index maps 1:1 with characters in `text`.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes forwarded to the root <h1>',
    },
  },
}

export default meta
type Story = StoryObj<typeof HeroWordmark>

// ─── Dark background decorator (mirrors Station 1 context) ───────────────────
const DarkDecorator: Story['decorators'] = [
  (StoryFn) => (
    <div
      style={{
        background: '#1A1816',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        borderRadius: '0.5rem',
      }}
    >
      <StoryFn />
    </div>
  ),
]

// ─── Forest/olive background decorator (mirrors Station 10 / Door) ───────────
const ForestDecorator: Story['decorators'] = [
  (StoryFn) => (
    <div
      style={{
        background: 'linear-gradient(135deg, #2D3A1B 0%, #374520 100%)',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        borderRadius: '0.5rem',
      }}
    >
      <StoryFn />
    </div>
  ),
]

/** Default — bone text on near-black, default stagger timing. */
export const Default: Story = {
  decorators: DarkDecorator,
  args: {
    text: 'MOOV',
    staggerDelays: [0.08, 0.38, 0.68, 0.98],
  },
}

/** Custom text — shows the component works for any wordmark string. */
export const CustomText: Story = {
  decorators: DarkDecorator,
  args: {
    text: 'YOGA',
    staggerDelays: [0.08, 0.28, 0.48, 0.68],
  },
}

/** Forest background — used when the wordmark sits on the olive gradient (Station 10). */
export const OnForestBackground: Story = {
  decorators: ForestDecorator,
  args: {
    text: 'MOOV',
    staggerDelays: [0.08, 0.38, 0.68, 0.98],
  },
}

/** Tight stagger — compressed delays for a snappier reveal. */
export const TightStagger: Story = {
  decorators: DarkDecorator,
  args: {
    text: 'MOOV',
    staggerDelays: [0, 0.1, 0.2, 0.3],
  },
}

/** No stagger — all letters animate simultaneously (zero delays). */
export const NoStagger: Story = {
  decorators: DarkDecorator,
  args: {
    text: 'MOOV',
    staggerDelays: [0, 0, 0, 0],
  },
}

/** Additional className — demonstrates className forwarding for layout overrides. */
export const WithExtraClass: Story = {
  decorators: DarkDecorator,
  args: {
    text: 'MOOV',
    className: 'opacity-60',
  },
}

/** Longer wordmark — verifies fluid sizing and letter span generation for 5+ chars. */
export const LongerWordmark: Story = {
  decorators: DarkDecorator,
  args: {
    text: 'PILATES',
    staggerDelays: [0.05, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65],
  },
}

/** Interactive controls story — use the Storybook controls panel to explore. */
export const Playground: Story = {
  decorators: DarkDecorator,
  args: {
    text: 'MOOV',
    staggerDelays: [0.08, 0.38, 0.68, 0.98],
    className: '',
  },
}
