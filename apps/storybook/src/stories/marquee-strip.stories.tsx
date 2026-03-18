import type { Meta, StoryObj } from '@storybook/react'
import { MarqueeStrip } from '@yoga/ui'

/**
 * Purely decorative scrolling text strip.
 * Loops seamlessly with a pure CSS animation.
 * Pauses on hover. Has `aria-hidden="true"` — not read by screen readers.
 * Respects `prefers-reduced-motion` by pausing the animation permanently.
 */
const meta: Meta<typeof MarqueeStrip> = {
  title: 'Components/MarqueeStrip',
  component: MarqueeStrip,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '900px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    text: {
      control: 'text',
      description: 'The text content to scroll. Will be repeated to fill the strip.',
    },
    speed: {
      control: 'select',
      options: ['slow', 'normal'],
      description: 'Scroll speed — slow is 40s per loop, normal is 25s per loop',
    },
  },
}

export default meta
type Story = StoryObj<typeof MarqueeStrip>

export const Normal: Story = {
  args: {
    text: 'Boutique pilates & strength — Wesley Hills, NY',
    speed: 'normal',
  },
}

export const Slow: Story = {
  args: {
    text: 'Boutique pilates & strength — Wesley Hills, NY',
    speed: 'slow',
  },
}

export const BrandStrip: Story = {
  args: {
    text: 'MOOV by Miri · Small classes · Your name remembered · Wesley Hills, NY',
    speed: 'slow',
  },
}

export const ShortText: Story = {
  args: {
    text: 'Pilates · Strength · Movement',
    speed: 'normal',
  },
}

export const LongText: Story = {
  args: {
    text: 'Boutique pilates and strength studio for women in Wesley Hills, New York · Small classes · Personal instruction · No membership required',
    speed: 'slow',
  },
}

export const AllSpeeds: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
      <div>
        <p style={{ fontSize: '0.75rem', color: '#968A7B', marginBottom: '0.5rem' }}>
          speed="normal" (25s)
        </p>
        <MarqueeStrip text="Boutique pilates & strength — Wesley Hills, NY" speed="normal" />
      </div>
      <div>
        <p style={{ fontSize: '0.75rem', color: '#968A7B', marginBottom: '0.5rem' }}>
          speed="slow" (40s)
        </p>
        <MarqueeStrip text="Boutique pilates & strength — Wesley Hills, NY" speed="slow" />
      </div>
    </div>
  ),
}
