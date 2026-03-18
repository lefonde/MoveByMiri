import type { Meta, StoryObj } from '@storybook/react'
import { DisplayHeading } from '@yoga/ui'

/**
 * Large editorial heading using Cormorant Garamond.
 * Fluid font size: `clamp(3rem, 8vw, 6.5rem)` with `lineHeight: 1.05`.
 * Used for hero wordmarks, section titles, and pull-quotes at display scale.
 * Two headingStyle variants (roman / italic) and two color variants (dark / light).
 */
const meta: Meta<typeof DisplayHeading> = {
  title: 'Components/DisplayHeading',
  component: DisplayHeading,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3'],
      description: 'HTML heading element to render',
    },
    headingStyle: {
      control: 'select',
      options: ['roman', 'italic'],
      description: 'Font style — roman is upright, italic uses Cormorant Garamond italic',
    },
    color: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Color variant — dark for light backgrounds, light for dark/photo backgrounds',
    },
    children: {
      control: 'text',
      description: 'Heading text content',
    },
  },
}

export default meta
type Story = StoryObj<typeof DisplayHeading>

export const DarkRoman: Story = {
  args: {
    children: 'Miri knows your name.',
    as: 'h2',
    headingStyle: 'roman',
    color: 'dark',
  },
}

export const DarkItalic: Story = {
  args: {
    children: 'I built this space for women who are done settling.',
    as: 'h2',
    headingStyle: 'italic',
    color: 'dark',
  },
}

export const LightRoman: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          background: '#2A2623',
          padding: '4rem 2rem',
          borderRadius: '0.5rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    children: 'MOOV',
    as: 'h1',
    headingStyle: 'roman',
    color: 'light',
  },
}

export const LightItalic: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          background: 'linear-gradient(135deg, #556B2F 0%, #374520 100%)',
          padding: '4rem 2rem',
          borderRadius: '0.5rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    children: "Ready to find out if it's yours?",
    as: 'h2',
    headingStyle: 'italic',
    color: 'light',
  },
}

export const StationTwoHeadlines: Story = {
  render: () => (
    <div style={{ padding: '4rem 2rem', maxWidth: '900px', background: '#FAF8F5' }}>
      <DisplayHeading as="h1" headingStyle="roman" color="dark">
        10 students per class.
      </DisplayHeading>
      <DisplayHeading as="h1" headingStyle="italic" color="dark">
        Miri knows your name.
      </DisplayHeading>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <div style={{ background: '#FAF8F5', padding: '2rem', borderRadius: '0.5rem' }}>
        <p style={{ fontSize: '0.75rem', color: '#968A7B', marginBottom: '0.5rem' }}>
          headingStyle="roman" color="dark"
        </p>
        <DisplayHeading headingStyle="roman" color="dark">
          Control you can feel.
        </DisplayHeading>
      </div>
      <div style={{ background: '#FAF8F5', padding: '2rem', borderRadius: '0.5rem' }}>
        <p style={{ fontSize: '0.75rem', color: '#968A7B', marginBottom: '0.5rem' }}>
          headingStyle="italic" color="dark"
        </p>
        <DisplayHeading headingStyle="italic" color="dark">
          Control you can feel.
        </DisplayHeading>
      </div>
      <div
        style={{
          background: '#2A2623',
          padding: '2rem',
          borderRadius: '0.5rem',
        }}
      >
        <p style={{ fontSize: '0.75rem', color: '#968A7B', marginBottom: '0.5rem' }}>
          headingStyle="roman" color="light"
        </p>
        <DisplayHeading headingStyle="roman" color="light">
          Control you can feel.
        </DisplayHeading>
      </div>
      <div
        style={{
          background: '#2A2623',
          padding: '2rem',
          borderRadius: '0.5rem',
        }}
      >
        <p style={{ fontSize: '0.75rem', color: '#968A7B', marginBottom: '0.5rem' }}>
          headingStyle="italic" color="light"
        </p>
        <DisplayHeading headingStyle="italic" color="light">
          Control you can feel.
        </DisplayHeading>
      </div>
    </div>
  ),
}
