---
name: implement-from-figma
description: Implement a React component from a Figma frame. Provide a Figma URL or frame name.
argument-hint: Figma frame URL or description
---

# Implement from Figma

You are implementing a React component from a Figma design.

## Step 1: Inspect the Design
- Use the Figma MCP to inspect the frame: $ARGUMENTS
- Extract: layout structure, spacing, colors, typography, component hierarchy
- Identify interactive states (hover, focus, disabled, loading)
- Note responsive behavior hints

## Step 2: Map to Design Tokens
- Match Figma values to existing tokens in `@yoga/tokens`
- If a value has no matching token, flag it and propose a new token

## Step 3: Check Existing Components
- Search `packages/ui` for similar components that could be extended
- Prefer composition over duplication

## Step 4: Implement
- Create component in `packages/ui/src/components/<name>/`
- Use design tokens from `@yoga/tokens` (never hardcode colors, spacing, typography)
- Props interface in same file
- Named export, add to `packages/ui/src/index.ts` barrel
- Keyboard accessible, semantic HTML, ARIA where needed

## Step 5: Create Story
- Create Storybook story in `apps/storybook/src/stories/`
- CSF3 format with all variants, interactive states, responsive demos

## Step 6: Verify
- Compare implementation against Figma visually
- Confirm all tokens are used (no magic numbers)
- Confirm keyboard navigation works
