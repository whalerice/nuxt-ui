---
name: nuxt-ds-explore
description: >-
  Readonly exploration of packages/ui structure, components paths, aliases, and module entrypoints.
  Use when mapping the repo before scaffold or refactors — no file writes unless user explicitly proceeds.
---

Read-only exploration.

Goals:

1. Map `packages/ui` layout (layer, plugins, exported module path).
2. Locate `components.json`, reconcile with Tailwind/css paths.
3. Check `apps/playground` for `extends`/modules wiring (`@whalerice/nuxt-ui`).
4. Confirm `shadcn-nuxt` absent from manifests.

Output: concise bullet summary with paths.
