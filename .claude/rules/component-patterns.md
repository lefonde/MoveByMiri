# Component Patterns

## File Structure

```
packages/ui/src/components/button/
  button.tsx          # Component implementation
```

## Props Pattern

```tsx
type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children: React.ReactNode
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>
```

- Always extend native HTML attributes where applicable
- Use `type` not `interface` for props
- Provide sensible defaults for optional props
- Use union types for constrained values, not `string`

## Composition

- Prefer composition over configuration (slots > mega-props)
- Use `children` for content, named slots for structure
- Compound components for related groups (e.g., `Tabs`, `Tabs.List`, `Tabs.Panel`)

## Styling

- Tailwind utility classes only
- Conditional classes via template literals or `clsx`/`cn`
- Design tokens from `@yoga/tokens` for any value that could vary by theme
- Transitions: use `transitions.fast` (150ms) for hover, `transitions.normal` (200ms) for layout

## Accessibility Baseline

- Semantic HTML elements (`button` for buttons, `a` for links, `input` for inputs)
- ARIA labels on icon-only buttons
- `role` only when semantic HTML is insufficient
- Focus ring: visible, high-contrast, consistent across components
- `aria-disabled` over `disabled` attribute when you need the element to remain focusable
