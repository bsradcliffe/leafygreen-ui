# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

LeafyGreen UI is MongoDB's React component library and design system. It is a pnpm monorepo with 120+ packages across 5 scopes:

- `packages/` — `@leafygreen-ui/*` core UI components
- `charts/` — `@lg-charts/*` data visualization
- `chat/` — `@lg-chat/*` conversational UI
- `mcp/` — `@lg-mcp/*` Model Context Protocol
- `tools/` — `@lg-tools/*` internal build/dev tooling

## Essential Commands

**Must use pnpm** (not npm or yarn). Required: Node >= 22.21.0, pnpm 10.26.0.

```bash
pnpm run init          # Install deps + build all (run after clone or branch switch)
pnpm build             # Build all packages (Turbo-cached, ~6-10s with cache)
pnpm start             # Storybook dev server on port 9001
pnpm test              # Run all tests
pnpm lint              # ESLint check
pnpm run fix           # Auto-fix ESLint + Prettier + npmPkgJsonLint
pnpm changeset         # Document changes for versioned release
pnpm create-package    # Scaffold a new component package
```

### Running a single package's tests

```bash
pnpm run test --filter="@leafygreen-ui/button"
```

Replace `@leafygreen-ui/button` with any package name (e.g. `@lg-charts/core`, `@lg-chat/message`).

### Package-level build

```bash
cd packages/button && pnpm build   # or: pnpm build --filter="@leafygreen-ui/button"
```

## Architecture

### Build System

- **Turbo** orchestrates builds with dependency-aware caching (`turbo.json`)
- **Rollup** bundles each package to ESM + UMD (`rollup.config.mjs` per package)
- **TypeScript 5.8** with strict mode, project references, and `emitDeclarationOnly`
- **`@lg-tools/build`** provides the `lg-build` CLI (bundle, tsc, docs)
- **`@lg-tools/cli`** provides the `lg` command wrapping lint, test, validate, etc.

### Styling

- **Emotion CSS-in-JS** — styles live in `*.styles.ts` files, not inline in JSX
- **`@leafygreen-ui/tokens`** for design tokens (colors, spacing, typography)
- Avoid CSS custom properties; use JS constants and static selectors instead

### Dark Mode

Components consume dark mode via the `useDarkMode()` hook from `@leafygreen-ui/leafygreen-provider`. Wrap children in `<LeafyGreenProvider darkMode={darkMode}>` rather than passing `darkMode` to each child.

### Testing

- **Jest 29 + React Testing Library + jest-axe** for accessibility
- Test files: `*.spec.tsx` colocated with components
- Components expose `getTestUtils()` and `getLgIds()` from a `testing/` sub-export (e.g. `@leafygreen-ui/button/testing`)
- `data-lgid` attributes follow BEM-ish naming: `lg-component_name-element_name` (underscores within words, dashes between blocks)

### Package Structure

Each package follows this layout:

```
packages/<component-name>/src/
├── ComponentName/
│   ├── ComponentName.tsx
│   ├── ComponentName.styles.ts
│   ├── ComponentName.spec.tsx
│   ├── ComponentName.stories.tsx
│   ├── ComponentName.types.ts
│   └── index.ts
├── testing/            # Exported as @package/component/testing
│   ├── getLgIds.ts
│   └── getTestUtils.ts
├── index.ts            # Package entry point
└── types.ts
```

### Dependencies

- Internal deps use `"workspace:^"` (e.g. `"@leafygreen-ui/palette": "workspace:^"`)
- External deps use caret versions (`"^1.2.3"`)
- `@lg-tools/*` deps use exact versions (no `^` or `~`)

### Release Process

- **Changesets** manages versioning: run `pnpm changeset` to document changes before PRing
- On merge to `main`, a "Version Packages" PR is auto-generated
- Merging the Version Packages PR triggers automated npm publish via OIDC

## Code Style (from STYLEGUIDE.md)

- **Constants over enums**: use `as const` objects with derived types
- **Types**: place in `*.types.ts`; use `ReactNode` for `children` (not `string`)
- **Booleans**: prefix with "to be" verbs (`is`, `should`, `has`, `can`, `does`, `will`)
- **Event handlers**: prefix with `handle` (e.g. `handleClick`), factor out of JSX if >1 line
- **Components**: use `forwardRef`, set `displayName`, prefer render props over `cloneElement`
- **Compound components**: use `@leafygreen-ui/compound-component` factory functions
- **Polymorphic components**: use `@leafygreen-ui/polymorphic`
- **JSDoc**: all exported functions need TSDoc comments
- **Deprecation**: use `@deprecated` JSDoc tag with migration path
- **Storybook files**: `console` logs are acceptable in `*.stories.ts` files

## PR Requirements

- Include a changeset (`pnpm changeset`) documenting changes
- Tests and stories for new features/bug fixes
- All CI checks must pass (build, lint, tests, Chromatic visual regression)
- For new packages: add to root `tsconfig.json` and global README table of contents

# Claude / AI Senior Engineer Prompt (Plan Mode)

Before writing any code, review the plan thoroughly.  
Do NOT start implementation until the review is complete and I approve the direction.

For every issue or recommendation:

- Explain the concrete tradeoffs
- Give an opinionated recommendation
- Ask for my input before proceeding

Engineering principles to follow:

- Prefer DRY — aggressively flag duplication
- Well-tested code is mandatory (better too many tests than too few)
- Code should be “engineered enough” — not fragile or hacky, but not over-engineered
- Optimize for correctness and edge cases over speed of implementation
- Prefer explicit solutions over clever ones

---

## 1. Architecture Review

Evaluate:

- Overall system design and component boundaries
- Dependency graph and coupling risks
- Data flow and potential bottlenecks
- Scaling characteristics and single points of failure
- Security boundaries (auth, data access, API limits)

---

## 2. Code Quality Review

Evaluate:

- Project structure and module organization
- DRY violations
- Error handling patterns and missing edge cases
- Technical debt risks
- Areas that are over-engineered or under-engineered

---

## 3. Test Review

Evaluate:

- Test coverage (unit, integration, e2e)
- Quality of assertions
- Missing edge cases
- Failure scenarios that are not tested

---

## 4. Performance Review

Evaluate:

- N+1 queries or inefficient I/O
- Memory usage risks
- CPU hotspots or heavy code paths
- Caching opportunities
- Latency and scalability concerns

---

## For each issue found:

Provide:

1. Clear description of the problem
2. Why it matters
3. 2–3 options (including “do nothing” if reasonable)
4. For each option:
   - Effort
   - Risk
   - Impact
   - Maintenance cost
5. Your recommended option and why

Then ask for approval before moving forward.

---

## Workflow Rules

- Do NOT assume priorities or timelines
- After each section (Architecture → Code → Tests → Performance), pause and ask for feedback
- Do NOT implement anything until I confirm

---

## Start Mode

Before starting, ask:

**Is this a BIG change or a SMALL change?**

BIG change:

- Review all sections step-by-step
- Highlight the top 3–4 issues per section

SMALL change:

- Ask one focused question per section
- Keep the review concise

---

## Output Style

- Structured and concise
- Opinionated recommendations (not neutral summaries)
- Focus on real risks and tradeoffs
- Think and act like a Staff/Senior Engineer reviewing a production system
