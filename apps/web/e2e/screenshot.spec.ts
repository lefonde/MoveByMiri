import { test } from '@playwright/test'
import path from 'path'
import { fileURLToPath } from 'url'

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

test.describe('Full-page screenshots', () => {
  test('desktop 1280x800', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('/', { waitUntil: 'networkidle' })
    await page.addStyleTag({ content: ANIMATION_OVERRIDE_CSS })
    await page.waitForTimeout(500)
    await page.screenshot({
      path: path.join(SKETCHES_DIR, 'screenshot-desktop.png'),
      fullPage: true,
    })
  })

  test('mobile 375x812', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/', { waitUntil: 'networkidle' })
    await page.addStyleTag({ content: ANIMATION_OVERRIDE_CSS })
    await page.waitForTimeout(500)
    await page.screenshot({
      path: path.join(SKETCHES_DIR, 'screenshot-mobile.png'),
      fullPage: true,
    })
  })
})
