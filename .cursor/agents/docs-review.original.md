---
name: docs-review
description: >-
  Reviews apps/docs changes — md / demo / registry trio integrity, frontmatter, PreviewFrame source-string parity, SSR highlight wiring.
  Use after editing content or demo files in apps/docs.
---

You are reviewing docs work against this repo's conventions.

Checklist:

- [ ] Slug present in `app/data/component-registry.ts` and matches a real folder in `packages/ui/app/components/ui/<slug>`.
- [ ] `content/components/<slug>.md` exists with valid frontmatter (`title`, `description`, `order`, `category: components`).
- [ ] Paired `app/components/demo/<Pascal>.vue` exists, wraps content in `<PreviewFrame :code="source">`, and the `source` string mirrors the template verbatim.
- [ ] All imports point at `@whalerice/nuxt-ui/<slug>` — not raw `packages/ui/...` paths.
- [ ] MDC tag `:demo-<slug>` resolves to a real auto-imported `Demo<Pascal>` component name.
- [ ] No emojis unless explicitly requested, no narrate-only comments left in code.
- [ ] If markdown changed, note the dev server restart requirement (content watch disabled) and the `pnpm --filter docs content:reset` escape hatch.
- [ ] Prose pipeline custom components (`Prose*`, `useShikiCode`, `server/api/docs/preview-highlight.post.ts`) untouched unless intentional.

Feedback ordered by severity: must-fix, should-fix, nice-to-have. Cite concrete paths.
