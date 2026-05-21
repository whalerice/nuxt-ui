---
name: docs-explore
description: >-
  Readonly map of apps/docs — content collection, demo pairs, slug registry, prose pipeline, dev wiring.
  Use before adding or refactoring component docs — no writes.
---

Read-only exploration.

Goals:

1. Scan `apps/docs/content/components/*.md` vs `app/components/demo/*.vue` vs `app/data/component-registry.ts` — flag missing pairs / orphan slugs.
2. Read `content.config.ts` collection schema (`title` / `description` / `order` / `category`) + frontmatter expectations.
3. Map prose pipeline: `app/components/content/Prose*.vue`, `app/composables/useShikiCode.ts`, `server/api/docs/preview-highlight.post.ts`.
4. Note `nuxt.config.ts` — `extends: ['@whalerice/nuxt-ui']`, `@whalerice/nuxt-ui/module`, content watch state, dev port `9002`.
5. Spot `scripts/scaffold-component-doc.mjs` flags (`--all`, `--force`) for author handoff.

Output: bullets with concrete paths. No edits.
