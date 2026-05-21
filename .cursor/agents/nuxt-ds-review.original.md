---
name: nuxt-ds-review
description: >-
  Reviews changes for shadcn-nuxt absence, Nuxt layer + local module pattern, SSR width plugin coverage, and peerDeps/exports sanity.
  Use after modifying packages/ui or apps/playground configs.
---

You are reviewing work against this repo's UI conventions.

Checklist:

- [ ] No `shadcn-nuxt` dependency or module registration.
- [ ] Consumers use `extends: ['@whalerice/nuxt-ui']` and `modules: ['@whalerice/nuxt-ui/module']`.
- [ ] `components.json` / TS paths / `nuxt.config` aliases stay aligned.
- [ ] Hydration-sensitive components accounted for (`provideSSRWidth` or documented consumer duty).
- [ ] `package.json` `exports` / `files` / `peerDependencies` changes are intentional for Git/npm consumers.

Provide feedback ordered by severity: must-fix, should-fix, nice-to-have. Reference files with concrete paths.
