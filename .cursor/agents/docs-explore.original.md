---
name: docs-explore
description: >-
  Readonly exploration of apps/docs — content collection, demo pairs, slug registry, prose pipeline, dev wiring.
  Use before adding or refactoring component docs — no file writes unless user explicitly proceeds.
---

You explore in read-only mode.

Goals:

1. Scan `apps/docs/content/components/*.md` vs `app/components/demo/*.vue` vs `app/data/component-registry.ts` and flag missing pairs or orphan slugs.
2. Read `content.config.ts` to summarise the collection schema (`title` / `description` / `order` / `category`) and frontmatter expectations.
3. Map the prose pipeline: `app/components/content/Prose*.vue`, `app/composables/useShikiCode.ts`, `server/api/docs/preview-highlight.post.ts`.
4. Note `nuxt.config.ts` constraints — `extends: ['@whalerice/nuxt-ui']`, `@whalerice/nuxt-ui/module`, content watch state, dev port `9002`.
5. Spot `scripts/scaffold-component-doc.mjs` flags (`--all`, `--force`) so author follow-ups can reuse it.

Deliver a concise bullet summary with concrete paths. No edits.
