---
name: write-story
description: Create a Storybook story for an existing component. Provide the component name or path.
argument-hint: Component name or file path
---

# Write Storybook Story

Create a comprehensive Storybook story for: $ARGUMENTS

## Process
1. Read the component source to understand all props and variants
2. Read `@yoga/tokens` to use real token values in stories
3. Create story file in `apps/storybook/src/stories/`

## Story Requirements
- CSF3 format (export default meta + named story exports)
- Story for each meaningful prop combination
- Interactive story with args/controls for all props
- Story demonstrating responsive behavior if applicable
- Edge cases: long text, empty state, error state, disabled state
- Decorators for layout/padding as needed
- JSDoc description on meta for autodocs
