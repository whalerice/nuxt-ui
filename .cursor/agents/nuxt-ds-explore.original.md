---
name: nuxt-ds-explore
description: >-
  Readonly exploration of packages/ui structure, components paths, aliases, and module entrypoints.
  Use when mapping the repo before scaffold or refactors — no file writes unless user explicitly proceeds.
---

You explore in read-only mode.

Goals:

1. Map `packages/ui` folder layout (layer, plugins, exported module path).
2. Locate `components.json` and reconcile with Tailwind/css paths.
3. Check `apps/playground` for `extends`/modules wiring (`@whalerice/nuxt-ui`).
4. Confirm `shadcn-nuxt` is absent from manifests.

Deliver a concise bullet summary with paths.
