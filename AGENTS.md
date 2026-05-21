# 에이전트 가이드 (@whalerice/nuxt-ui 모노레포)

## 목표

- `shadcn-vue` **CLI만** 사용해 UI 코드를 생성·갱신한다 (copy-paste 우회 지양).
- 소비 패턴은 **Nuxt 4 + Tailwind v4** 에 맞춘다 ([shadcn/vue Nuxt 문서](https://next.shadcn-vue.com/docs/installation/nuxt)).
- UI 패키지는 **pnpm workspaces** 의 `packages/ui` 로 유지하고, 검증용 앱은 `apps/playground` 를 쓴다.

## 금지

- **`shadcn-nuxt` npm 패키지 의존은 추가하지 않는다.**
  - 필요한 등록 로직은 `packages/ui` **내부** 로컬 `defineNuxtModule` + **Nuxt 레이어**로 제공한다.

## 작업 디렉터리

| 작업 | 디렉터리 |
|------|----------|
| `shadcn-vue` CLI | 레포 내 `packages/ui` 패키지 **루트** |
| Playground 검증 | `apps/playground` |

## 별칭·경로 일치

- `components.json` 의 `tailwind.css`·aliases
- 패키지 `tsconfig`(또는 `paths`)
- 패키지/앱의 `nuxt.config` 의 `alias`

위는 **항상 같은 의미를 갖도록** 함께 수정한다.

## 검증 관례

- UI 변경 후 가능하면 `apps/playground` 에서 해당 컴포넌트로 한 화면을 스모크하고, SSR/hydration 문제가 없는지 확인한다.
- 패키지에 문서된 `provideSSRWidth` 패턴 등은 레이어 또는 플러그인으로 포함하거나 소비 규약에 명시한다.

## 상위 계획

- [.cursor/plans/nuxt_ds_모노레포_f296cff8.plan.md](.cursor/plans/nuxt_ds_모노레포_f296cff8.plan.md)

## Cursor 규칙

- 프로젝트 규칙은 [`.cursor/rules/*.mdc`](.cursor/rules/) 에 있다.
