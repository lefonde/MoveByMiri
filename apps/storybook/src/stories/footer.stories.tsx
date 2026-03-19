import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from '@yoga/ui'

/**
 * Global footer for MOOV by Miri — the Footer Trust Layer at the bottom of every page.
 *
 * Self-contained dark component (`#1C1512` background) with a single flex-wrap
 * row of: studio name · location · phone link · Instagram link · cancellation policy.
 *
 * All interactive elements (phone, Instagram) have visible focus rings. The
 * flex-wrap layout prevents single-line overflow at 375 px mobile widths.
 *
 * The component accepts only an optional `className` for layout overrides;
 * all content is hard-coded brand copy (MOOV by Miri is a single-location studio).
 */
const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional Tailwind classes forwarded to the root <footer> element.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Footer>

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Default — the footer at full page width. All links, separators, and brand
 * copy rendered at their natural size. Inspect the DOM to verify the phone
 * number is an `<a href="tel:...">` and the Instagram handle opens in a new tab.
 */
export const Default: Story = {
  args: {},
}

/**
 * Narrow viewport simulation — constrains width to 375 px to verify the
 * flex-wrap layout prevents overflow on the smallest supported mobile width.
 */
export const MobileWidth: Story = {
  decorators: [
    (StoryFn) => (
      <div style={{ width: '375px', margin: '0 auto' }}>
        <StoryFn />
      </div>
    ),
  ],
  args: {},
}

/**
 * Tablet viewport simulation — 768 px, intermediate between mobile wrap
 * and full desktop single-line layout.
 */
export const TabletWidth: Story = {
  decorators: [
    (StoryFn) => (
      <div style={{ width: '768px', margin: '0 auto' }}>
        <StoryFn />
      </div>
    ),
  ],
  args: {},
}

/**
 * In page context — footer anchored at the bottom of a representative page
 * shell to show how it appears relative to the content above it.
 */
export const InPageContext: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '400px' }}>
      <div
        style={{
          flex: 1,
          background: '#FAF8F5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 2rem',
        }}
      >
        <p
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.5rem',
            color: '#3A3632',
            textAlign: 'center',
          }}
        >
          Page content above footer
        </p>
      </div>
      <Footer />
    </div>
  ),
}

/** Custom className — demonstrates className forwarding, e.g. for adding top border. */
export const WithCustomClass: Story = {
  args: {
    className: 'border-t border-white/10',
  },
}

/** Playground — use controls to explore prop combinations interactively. */
export const Playground: Story = {
  args: {
    className: '',
  },
}
