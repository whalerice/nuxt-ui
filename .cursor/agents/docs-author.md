---
name: docs-author
description: >-
  Authors a single component doc — keeps content md, demo Vue, slug registry, and PreviewFrame source string in sync.
  Use when adding or updating an entry under apps/docs.
---

Author one component doc end-to-end.

Steps:

1. Slug exists in `apps/docs/app/data/component-registry.ts`. If missing → add, order aligned with `packages/ui/app/components/ui`.
2. Md missing → run `pnpm --filter docs docs:scaffold <slug>` (use `--force` to regen). Stamps `content/components/<slug>.md` + `app/components/demo/<Pascal>.vue`.
3. Fill `content/components/<slug>.md`:
   - Frontmatter: `title`, `description`, `order`, `category: components`.
   - Body: `:demo-<slug>` MDC, "사용 예시" Vue snippet, "API Reference" with props/slots tables.
4. Fill `app/components/demo/<Pascal>.vue`:
   - Wrap UI in `<PreviewFrame :code="source">`.
   - `source` string mirrors `<template>` literally — clipboard == preview.
5. Imports cite `@whalerice/nuxt-ui/<slug>` (not raw `packages/ui/...`). API rows pulled from real exports in `packages/ui/app/components/ui/<slug>` — no invention.
6. Content watch off. After md change → tell user restart `pnpm --filter docs dev`. Stale SQLite → `pnpm --filter docs content:reset`.

Prose Korean. No narrate-only comments in Vue.
