---
name: concept-sprint
description: Prepare a design brief with live project context and agent team configuration for a concept ideation sprint. Provide the design target.
argument-hint: Design target (e.g., "landing page for feature X", "dashboard settings flow")
---

# Concept Sprint Brief

Prepare a comprehensive design brief for: $ARGUMENTS

## Step 1: Gather Live Context

Read the following to build the brief:

**Current token palette:**
!`cat packages/tokens/src/index.ts`

**Existing UI components:**
!`ls packages/ui/src/components/ 2>/dev/null || echo "No components yet"`

**Design principles:**
!`cat .claude/rules/design-principles.md`

**Handoff format:**
!`cat .claude/rules/design-handoff.md`

**Landing page anatomy (if applicable):**
!`cat .claude/rules/landing-page-anatomy.md`

## Step 2: Write the Design Brief

Using the context above, create a design brief that includes:

1. **Target**: What we're designing and why
2. **Audience**: Who will use/see this and what they need to accomplish
3. **Available tokens**: Summarize the color palette, spacing scale, and typography from the live token file
4. **Available components**: List existing `@yoga/ui` components that could be reused
5. **Constraints**: Performance budget, a11y requirements, responsive requirements
6. **Success criteria**: How we'll know the design is good

## Step 3: Output Team Spawn Instructions

Output the following instruction block for the user to spawn the agent team:

```
To run this concept sprint as an agent team, enable agent teams and create a team with these members:

Team members:
- creative-director — bold creative direction and visual cohesion
- landing-page-strategist — narrative flow, CTAs, and conversion copy
- ux-architect — component architecture, tokens, and responsive behavior
- interaction-designer — motion language and transitions
- design-critic — pressure-tests clarity, a11y, conversion, and overdesign

Each team member should:
1. Read the design brief above
2. Produce their perspective following the design-handoff format (rules/design-handoff.md)
3. Challenge and refine each other's proposals
4. Converge on a recommended direction

Note: Agent teams require CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 in settings.
```
