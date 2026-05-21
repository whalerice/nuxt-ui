---
name: docs-review
description: >-
  Reviews apps/docs changes — md / demo / registry trio, frontmatter, PreviewFrame source-string parity, SSR highlight wiring.
  Use after editing content or demo files in apps/docs.
---

Review docs change against repo conventions.

Checklist:

- [ ] Slug in `app/data/component-registry.ts` matches a real `packages/ui/app/components/ui/<slug>` folder.
- [ ] `content/components/<slug>.md` exists with frontmatter (`title`, `description`, `order`, `category: components`).
- [ ] Paired `app/components/demo/<Pascal>.vue` wraps UI in `<PreviewFrame :code="source">`. `source` string == template verbatim.
- [ ] Imports cite `@whalerice/nuxt-ui/<slug>` — never raw `packages/ui/...`.
- [ ] MDC `:demo-<slug>` resolves to real auto-imported `Demo<Pascal>`.
- [ ] No emojis unless asked. No narrate-only comments.
- [ ] Md changed → note restart `pnpm --filter docs dev` (content watch off) + `pnpm --filter docs content:reset` escape hatch.
- [ ] Prose pipeline (`Prose*`, `useShikiCode`, `server/api/docs/preview-highlight.post.ts`) untouched unless intentional.

Severity ordered: must-fix, should-fix, nice-to-have. Cite concrete paths.
