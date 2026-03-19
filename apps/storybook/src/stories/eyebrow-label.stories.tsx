import type { Meta, StoryObj } from '@storybook/react'
import { EyebrowLabel } from '@yoga/ui'

/**
 * Small-caps section/discipline label used above headings across MOOV stations.
 *
 * Inter font, uppercase, 0.65rem / 0.3em letter-spacing.
 *
 * Five color variants:
 * - **olive** (default) — `#556B2F`, olive-green. Primary brand label.
 * - **neutral** — `#968A7B`, warm taupe. Muted / supporting label.
 * - **forest** — `#2D4A2E`, deep forest green. High-contrast on light backgrounds.
 * - **sage** — `#6B8B4E`, mid-tone sage. Softer accent on bone sections.
 * - **terra** — `#C27E60`, terracotta. Warm accent matching the secondary button color.
 */
const meta: Meta<typeof EyebrowLabel> = {
  title: 'Components/EyebrowLabel',
  component: EyebrowLabel,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['olive', 'neutral', 'forest', 'sage', 'terra'],
      description: 'Color variant — maps to MOOV brand palette values. Default: olive.',
    },
    children: {
      control: 'text',
      description: 'Label text content (rendered uppercase via CSS)',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes forwarded to the root <span>',
    },
  },
}

export default meta
type Story = StoryObj<typeof EyebrowLabel>

// ─── Decorators ───────────────────────────────────────────────────────────────

const LightDecorator: Story['decorators'] = [
  (StoryFn) => (
    <div style={{ background: '#FAF8F5', padding: '2.5rem 2rem', borderRadius: '0.5rem' }}>
      <StoryFn />
    </div>
  ),
]

const DarkDecorator: Story['decorators'] = [
  (StoryFn) => (
    <div style={{ background: '#2A2623', padding: '2.5rem 2rem', borderRadius: '0.5rem' }}>
      <StoryFn />
    </div>
  ),
]

// ─── Individual color variants ────────────────────────────────────────────────

/** Olive (default) — primary brand label on bone/light backgrounds. */
export const Olive: Story = {
  decorators: LightDecorator,
  args: {
    children: 'Pilates',
    color: 'olive',
  },
}

/** Neutral — muted warm-taupe label. Use for secondary or contextual labels. */
export const Neutral: Story = {
  decorators: LightDecorator,
  args: {
    children: 'Strength',
    color: 'neutral',
  },
}

/** Forest — deep forest green. High contrast on bone / cream backgrounds. */
export const Forest: Story = {
  decorators: LightDecorator,
  args: {
    children: 'Movement',
    color: 'forest',
  },
}

/** Sage — mid-tone sage green. Softer than forest, warmer than olive. */
export const Sage: Story = {
  decorators: LightDecorator,
  args: {
    children: 'Reformer',
    color: 'sage',
  },
}

/** Terra — terracotta accent. Matches `secondary` button color and figcaption cite style. */
export const Terra: Story = {
  decorators: LightDecorator,
  args: {
    children: 'Studio',
    color: 'terra',
  },
}

// ─── On dark background ───────────────────────────────────────────────────────

/**
 * Olive on dark — verify `#556B2F` meets contrast against `#2A2623` background.
 * (This combination is borderline — prefer terra or neutral on dark sections.)
 */
export const OliveOnDark: Story = {
  decorators: DarkDecorator,
  args: {
    children: 'Pilates',
    color: 'olive',
  },
}

/** Terra on dark — `#C27E60` terracotta reads clearly against near-black backgrounds. */
export const TerraOnDark: Story = {
  decorators: DarkDecorator,
  args: {
    children: 'Station 5',
    color: 'terra',
  },
}

/** Neutral on dark — `#968A7B` taupe on `#2A2623` for muted label use on dark sections. */
export const NeutralOnDark: Story = {
  decorators: DarkDecorator,
  args: {
    children: 'Voices',
    color: 'neutral',
  },
}

// ─── All variants grid ────────────────────────────────────────────────────────

/** All five color variants side-by-side on bone background for comparison. */
export const AllVariantsLight: Story = {
  render: () => (
    <div
      style={{
        background: '#FAF8F5',
        padding: '2.5rem 2rem',
        borderRadius: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      {(['olive', 'neutral', 'forest', 'sage', 'terra'] as const).map((color) => (
        <div key={color} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <EyebrowLabel color={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </EyebrowLabel>
          <span style={{ fontSize: '0.7rem', color: '#968A7B' }}>color="{color}"</span>
        </div>
      ))}
    </div>
  ),
}

/** All five color variants on dark background — shows which read well in dark contexts. */
export const AllVariantsDark: Story = {
  render: () => (
    <div
      style={{
        background: '#2A2623',
        padding: '2.5rem 2rem',
        borderRadius: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      {(['olive', 'neutral', 'forest', 'sage', 'terra'] as const).map((color) => (
        <div key={color} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <EyebrowLabel color={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </EyebrowLabel>
          <span style={{ fontSize: '0.7rem', color: '#968A7B' }}>color="{color}"</span>
        </div>
      ))}
    </div>
  ),
}

// ─── Compositional stories ────────────────────────────────────────────────────

/** Above a heading — typical MOOV section usage: eyebrow + display heading. */
export const AboveHeading: Story = {
  render: () => (
    <div
      style={{
        background: '#FAF8F5',
        padding: '2.5rem 2rem',
        borderRadius: '0.5rem',
        maxWidth: '520px',
      }}
    >
      <EyebrowLabel color="olive">The method</EyebrowLabel>
      <h2
        style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: '2.5rem',
          fontWeight: 400,
          lineHeight: '1.1',
          color: '#2A2218',
          marginTop: '0.5rem',
          marginBottom: 0,
        }}
      >
        Control you can actually feel.
      </h2>
    </div>
  ),
}

/** Long label — ensures uppercase transform and tracking work for multi-word labels. */
export const LongLabel: Story = {
  decorators: LightDecorator,
  args: {
    children: 'Private reformer sessions',
    color: 'olive',
  },
}

/** Playground — use controls to explore all prop combinations interactively. */
export const Playground: Story = {
  decorators: LightDecorator,
  args: {
    children: 'Pilates',
    color: 'olive',
    className: '',
  },
}
