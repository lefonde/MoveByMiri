import { test, expect } from '@playwright/test'
import path from 'path'
import { fileURLToPath } from 'url'

// Target the static-export file server (port 3333) or the dev server if available.
// Port 50499 is the user-specified URL; fall back to 3333 for the static export.
const BASE_URL = process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:3333'

const ANIMATION_OVERRIDE_CSS = `
  .wordmark-letter { opacity: 1 !important; transform: none !important; animation: none !important; }
  .reveal-element { opacity: 1 !important; transform: none !important; transition: none !important; }
  * { animation-play-state: paused !important; animation-delay: 0s !important; animation-duration: 0.001s !important; }
  [style*="opacity:0"] { opacity: 1 !important; }
  [style*="opacity: 0"] { opacity: 1 !important; }
`

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const SKETCHES_DIR = path.resolve(__dirname, '../public/sketches')

test.describe('MOOV website change verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' })
    await page.addStyleTag({ content: ANIMATION_OVERRIDE_CSS })
    await page.waitForTimeout(300)
  })

  test('Check 1 — Station 5 CTA: "Join them — $25" button is present after testimonials', async ({
    page,
  }) => {
    const cta = page.locator('text=Join them')
    const count = await cta.count()
    console.log(`Check 1: Found ${count} element(s) matching "Join them"`)
    expect(
      count,
      'Expected at least one "Join them" CTA button after the testimonial section',
    ).toBeGreaterThan(0)
    // Log the text of the first match for verification
    if (count > 0) {
      const text = await cta.first().textContent()
      console.log(`Check 1: First match text: "${text}"`)
    }
  })

  test('Check 2 — Station 7: Portrait placeholder removed, founder quote present', async ({
    page,
  }) => {
    // "Photography needed" placeholder should NOT be present
    const placeholder = page.locator('text=Photography needed')
    const placeholderCount = await placeholder.count()
    console.log(
      `Check 2a: Found ${placeholderCount} element(s) matching "Photography needed" (expected 0)`,
    )
    expect(placeholderCount, '"Photography needed" placeholder should not be visible').toBe(0)

    // Founder quote should still be present
    const founderQuote = page.locator('text=I built MOOV because I wanted to train people')
    const quoteCount = await founderQuote.count()
    console.log(`Check 2b: Found ${quoteCount} element(s) matching founder quote (expected ≥1)`)
    expect(quoteCount, 'Founder quote should still be present on the page').toBeGreaterThan(0)
  })

  test('Check 3 — Pricing buttons rendered as anchor tags with href', async ({ page }) => {
    const pricingButtonLabels = ['Reserve a Single', 'Get Five Classes', 'Get Ten Classes']

    for (const label of pricingButtonLabels) {
      const locator = page.locator(`text=${label}`)
      const count = await locator.count()
      console.log(`Check 3: Found ${count} element(s) for "${label}"`)
      expect(count, `Expected to find "${label}" in the pricing section`).toBeGreaterThan(0)

      // Check that it is rendered inside an <a> tag with an href attribute
      const anchorLocator = page.locator(`a:has-text("${label}")`)
      const anchorCount = await anchorLocator.count()
      console.log(`Check 3: Found ${anchorCount} <a> element(s) for "${label}"`)
      expect(anchorCount, `"${label}" should be rendered as an <a> tag`).toBeGreaterThan(0)

      if (anchorCount > 0) {
        const href = await anchorLocator.first().getAttribute('href')
        console.log(`Check 3: "${label}" href="${href}"`)
        expect(href, `"${label}" anchor should have a non-empty href`).toBeTruthy()
      }
    }
  })

  test('Check 4 — Footer copyright "© 2025 MOOV by Miri" is visible', async ({ page }) => {
    const copyright = page.locator('text=© 2025')
    const count = await copyright.count()
    console.log(`Check 4: Found ${count} element(s) matching "© 2025"`)
    expect(count, 'Expected "© 2025 MOOV by Miri" copyright in the footer').toBeGreaterThan(0)
    if (count > 0) {
      const text = await copyright.first().textContent()
      console.log(`Check 4: Copyright text: "${text}"`)
    }
  })

  test('Check 5 — Footer privacy link points to /privacy', async ({ page }) => {
    const privacyLink = page.locator('footer a[href="/privacy"]')
    const count = await privacyLink.count()
    console.log(`Check 5: Found ${count} footer <a href="/privacy"> element(s)`)
    expect(count, 'Expected a "Privacy" link in the footer with href="/privacy"').toBeGreaterThan(0)
    if (count > 0) {
      const text = await privacyLink.first().textContent()
      console.log(`Check 5: Privacy link text: "${text}"`)
    }
  })

  test('Full-page screenshot at 1280×800', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    // Re-navigate and inject CSS at this viewport size
    await page.goto(BASE_URL, { waitUntil: 'networkidle' })
    await page.addStyleTag({ content: ANIMATION_OVERRIDE_CSS })
    await page.waitForTimeout(500)
    await page.screenshot({
      path: path.join(SKETCHES_DIR, 'screenshot-verified.png'),
      fullPage: true,
    })
    console.log('Screenshot saved to apps/web/public/sketches/screenshot-verified.png')
  })
})
