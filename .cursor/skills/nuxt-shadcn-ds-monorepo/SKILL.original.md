---
name: nuxt-shadcn-ds-monorepo
description: >-
  Maintains a pnpm monorepo `@whalerice/nuxt-ui` package using shadcn-vue CLI only (no shadcn-nuxt),
  Nuxt 4 layer + in-package defineNuxtModule, alias alignment, and playground smoke checks.
  Use when editing packages/ui, apps/playground, components.json, or shadcn-vue CLI flows.
disable-model-invocation: true
---

# Nuxt shadcn-vue DS 모노레포

## Before changing UI

1. 작업 디렉터리가 `packages/ui` 패키지 루트인지 확인한다.
2. 새 shadcn 컴포넌트는 `packages/ui` 루트에서 `pnpm dlx shadcn-vue@latest add <name>` 패턴을 우선한다.

## Alias alignment (필수)

한 PR/작업 안에서 다음을 **같은 의미**로 맞춘다.

- `components.json` → `tailwind.css`, `aliases.*`
- `tsconfig` (또는 패키지 paths)
- `nuxt.config` → `alias`

## Forbidden

- `shadcn-nuxt` npm 패키지 추가·의존 제안을 하지 않는다.

## After changes

1. `apps/playground` 에서 해당 컴포넌트를 한 페이지에 배치해 스모크한다.
2. SSR/hydration 이슈가 나면 `provideSSRWidth` 등 레이어 플러그인 포함 여부를 확인한다.

## Publish mindset (later)

- `package.json` 의 `exports`, `files`, `peerDependencies` 변경은 소비 앱 깨짐과 직결되므로 diff 에서 명시적으로 검토한다.

## Plan source

- `.cursor/plans/nuxt_ds_모노레포_f296cff8.plan.md`
