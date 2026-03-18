import type { Meta, StoryObj } from '@storybook/react'
import { EyebrowLabel } from '@yoga/ui'

/**
 * Small-caps section/discipline label used above headings.
 * Inter font, uppercase, wide letter-spacing.
 * Comes in two color variants: olive (primary brand) and neutral (muted).
 */
const meta: Meta<typeof EyebrowLabel> = {
  title: 'Components/EyebrowLabel',
  component: EyebrowLabel,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['olive', 'neutral'],
      description: 'Color variant — olive maps to primary-600, neutral maps to neutral-500',
    },
    children: {
      control: 'text',
      description: 'Label text content',
    },
  },
}

export default meta
type Story = StoryObj<typeof EyebrowLabel>

export const Olive: Story = {
  args: {
    children: 'Pilates',
    color: 'olive',
  },
}

export const Neutral: Story = {
  args: {
    children: 'Pilates',
    color: 'neutral',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
      <div>
        <EyebrowLabel color="olive">Pilates</EyebrowLabel>
        <p style={{ margin: '0.25rem 0 0', fontSize: '0.75rem', color: '#968A7B' }}>
          color="olive" (default)
        </p>
      </div>
      <div>
        <EyebrowLabel color="neutral">Strength</EyebrowLabel>
        <p style={{ margin: '0.25rem 0 0', fontSize: '0.75rem', color: '#968A7B' }}>
          color="neutral"
        </p>
      </div>
    </div>
  ),
}

export const AboveHeading: Story = {
  render: () => (
    <div style={{ padding: '2rem', maxWidth: '480px' }}>
      <EyebrowLabel color="olive">Pilates</EyebrowLabel>
      <h2
        style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: '2.25rem',
          lineHeight: '2.5rem',
          fontWeight: 400,
          color: '#2A2623',
          marginTop: '0.5rem',
          marginBottom: 0,
        }}
      >
        Control you can actually feel.
      </h2>
    </div>
  ),
}

export const AllDisciplines: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem', flexWrap: 'wrap' }}>
      <EyebrowLabel color="olive">Pilates</EyebrowLabel>
      <EyebrowLabel color="olive">Strength</EyebrowLabel>
      <EyebrowLabel color="olive">Movement</EyebrowLabel>
    </div>
  ),
}
