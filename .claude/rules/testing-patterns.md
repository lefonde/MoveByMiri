# Testing Patterns

## Unit Tests (Vitest)

- Colocate test files: `component.test.tsx` next to `component.tsx`
- Test behavior and user interactions, not implementation details
- Use `@testing-library/react` for component tests
- Prefer `getByRole`, `getByLabelText` over `getByTestId`

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Button } from './button'

describe('Button', () => {
  it('calls onClick when pressed', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click me</Button>)
    await user.click(screen.getByRole('button', { name: /click me/i }))
    expect(onClick).toHaveBeenCalledOnce()
  })
})
```

## E2e Tests (Playwright)

- Located in `apps/web/e2e/`
- Page Object Model for reusable page interactions
- Test files as `*.spec.ts`
- Prefer role-based locators: `page.getByRole('button', { name: 'Submit' })`

## Mocking

- Mock at module boundaries, not internal functions
- Use `vi.mock()` for module mocks
- Use MSW for API mocking in integration tests
- Never mock what you're testing

## What NOT to Test

- Implementation details (state shape, private methods)
- Third-party library internals
- Exact CSS classes or styles (test visual behavior instead)
