import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@yoga/ui'

/**
 * Primary action element for MOOV by Miri. All interactive states (hover, active,
 * focus-visible, disabled) are expressed via Tailwind utilities mapped to
 * `@yoga/tokens` values.
 *
 * Five variants:
 * - **primary** — olive fill, white text. Default CTA.
 * - **secondary** — terracotta fill, white text. Accent CTA.
 * - **ghost** — transparent with olive border. Lower-emphasis action.
 * - **forest** — deep forest fill (`primary[900]`), bone text. VERDANT redesign CTA.
 * - **bone** — bone fill (`neutral[50]`), forest text. For use on dark/forest backgrounds.
 *
 * Three sizes: `sm`, `md` (default), `lg`.
 *
 * When `href` is provided the button renders as an `<a>` element instead of
 * `<button>` — identical visual styling, correct semantics for navigation.
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'forest', 'bone'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Padding / font-size scale',
    },
    href: {
      control: 'text',
      description: 'When set, renders as <a> instead of <button>',
    },
    target: {
      control: 'text',
      description: 'Forwarded to <a> when href is set (e.g. "_blank")',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button and reduces opacity',
    },
    children: {
      control: 'text',
      description: 'Button label',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// ─── Decorators ──────────────────────────────────────────────────────────────
const LightDecorator: Story['decorators'] = [
  (StoryFn) => (
    <div style={{ background: '#FAF8F5', padding: '3rem 2rem', borderRadius: '0.5rem' }}>
      <StoryFn />
    </div>
  ),
]

const DarkDecorator: Story['decorators'] = [
  (StoryFn) => (
    <div style={{ background: '#2D3A1B', padding: '3rem 2rem', borderRadius: '0.5rem' }}>
      <StoryFn />
    </div>
  ),
]

const NearBlackDecorator: Story['decorators'] = [
  (StoryFn) => (
    <div style={{ background: '#1A1816', padding: '3rem 2rem', borderRadius: '0.5rem' }}>
      <StoryFn />
    </div>
  ),
]

// ─── Individual variant stories ──────────────────────────────────────────────

export const Primary: Story = {
  decorators: LightDecorator,
  args: { variant: 'primary', size: 'md', children: 'Reserve your spot' },
}

export const Secondary: Story = {
  decorators: LightDecorator,
  args: { variant: 'secondary', size: 'md', children: 'Learn more' },
}

export const Ghost: Story = {
  decorators: LightDecorator,
  args: { variant: 'ghost', size: 'md', children: 'View schedule' },
}

/** Deep forest fill on near-black — VERDANT Station 1 / Station 10 hero CTA. */
export const Forest: Story = {
  decorators: NearBlackDecorator,
  args: { variant: 'forest', size: 'md', children: 'Reserve your spot' },
}

/**
 * Bone fill on forest background — primary CTA for Station 10 (The Door)
 * olive gradient. Focus ring overrides to bone so it remains visible against
 * the dark forest offset background.
 */
export const Bone: Story = {
  decorators: DarkDecorator,
  args: { variant: 'bone', size: 'md', children: 'Book a class' },
}

// ─── Size variants ────────────────────────────────────────────────────────────

export const SizeSmall: Story = {
  decorators: LightDecorator,
  args: { variant: 'primary', size: 'sm', children: 'Small' },
}

export const SizeMedium: Story = {
  decorators: LightDecorator,
  args: { variant: 'primary', size: 'md', children: 'Medium' },
}

export const SizeLarge: Story = {
  decorators: LightDecorator,
  args: { variant: 'primary', size: 'lg', children: 'Large' },
}

// ─── States ───────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  decorators: LightDecorator,
  args: { variant: 'primary', size: 'md', children: 'Unavailable', disabled: true },
}

export const DisabledForest: Story = {
  decorators: NearBlackDecorator,
  args: { variant: 'forest', size: 'md', children: 'Unavailable', disabled: true },
}

export const DisabledBone: Story = {
  decorators: DarkDecorator,
  args: { variant: 'bone', size: 'md', children: 'Unavailable', disabled: true },
}

// ─── All variants grid ────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem' }}>
      <div
        style={{
          background: '#FAF8F5',
          padding: '2rem',
          borderRadius: '0.5rem',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '0.75rem', color: '#968A7B', minWidth: '80px' }}>Light bg</span>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div
        style={{
          background: '#1A1816',
          padding: '2rem',
          borderRadius: '0.5rem',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '0.75rem', color: '#968A7B', minWidth: '80px' }}>Dark bg</span>
        <Button variant="forest">Forest</Button>
      </div>
      <div
        style={{
          background: 'linear-gradient(135deg, #2D3A1B 0%, #374520 100%)',
          padding: '2rem',
          borderRadius: '0.5rem',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '0.75rem', color: '#CDDAB5', minWidth: '80px' }}>Forest bg</span>
        <Button variant="bone">Bone</Button>
      </div>
    </div>
  ),
}

// ─── Link (href) variants ─────────────────────────────────────────────────────

/**
 * Renders as `<a href="...">` — identical appearance to the default button but
 * with correct link semantics. Inspect the DOM to verify the element type.
 */
export const AsLink: Story = {
  decorators: LightDecorator,
  args: {
    variant: 'primary',
    size: 'md',
    href: '/schedule',
    children: 'View schedule',
  },
}

/**
 * Link that opens in a new tab. `target="_blank"` + `rel="noopener noreferrer"`
 * are typical for external URLs.
 */
export const AsLinkNewTab: Story = {
  decorators: LightDecorator,
  args: {
    variant: 'secondary',
    size: 'md',
    href: 'https://instagram.com/moovbymiri',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'Follow on Instagram',
  },
}

/** Forest variant rendered as a link — the most common hero CTA pattern. */
export const ForestLink: Story = {
  decorators: NearBlackDecorator,
  args: {
    variant: 'forest',
    size: 'lg',
    href: '/book',
    children: 'Reserve your spot',
  },
}

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  decorators: LightDecorator,
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Reserve your spot',
    disabled: false,
    href: '',
  },
}
