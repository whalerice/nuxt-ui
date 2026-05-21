# whalerice-nuxt-ui

**whalerice** Nuxt 4 디자인 시스템 모노레포입니다.  
[`@whalerice/nuxt-ui`](packages/ui) 패키지를 개발·문서화하고, GitHub Packages(`https://npm.pkg.github.com`)로 배포합니다.

## 개요

- **UI 패키지**: `shadcn-vue` CLI로 생성·갱신하는 Nuxt 레이어 + companion 모듈
- **문서 사이트**: 컴포넌트 데모·API Reference (`@nuxt/content`, Shiki)
- **스택**: Nuxt 4, Tailwind v4, Vue 3, Reka UI 기반 컴포넌트

`shadcn-nuxt` npm 패키지는 사용하지 않습니다. 컴포넌트 등록·SSR 보조는 [`packages/ui`](packages/ui) 내부 `defineNuxtModule`과 Nuxt 레이어로 처리합니다.

## 레포 구조

| 경로                         | 설명                                          |
| ---------------------------- | --------------------------------------------- |
| [`packages/ui`](packages/ui) | `@whalerice/nuxt-ui` — publish 대상 UI 레이어 |
| [`apps/docs`](apps/docs)     | 문서·라이브 데모 사이트                       |

## 요구사항

- Node `>=20`
- pnpm `11.x` ([`packageManager`](package.json) 명시)

## 로컬 개발

```bash
pnpm install
pnpm dev              # apps/docs (기본 http://localhost:9002)
pnpm prepare:ui       # packages/ui Nuxt 타입 생성
```

## 패키지 사용 (사용 앱)

Nuxt 4 + Tailwind v4 앱에서 `@whalerice/nuxt-ui`를 사용합니다. 상세는 [`packages/ui/README.md`](packages/ui/README.md)도 참고하세요.

### 1. GitHub PAT

[Personal access tokens](https://github.com/settings/tokens)에서 발급합니다.

- `read:packages` (필수)
- `repo` (private인 경우)
- org SSO 사용 시 **whalerice**에 Authorize

```bash
export GITHUB_TOKEN=ghp_xxx
```

### 2. 사용 앱 `.npmrc`

```ini
@whalerice:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### 3. 설치

```bash
pnpm add @whalerice/nuxt-ui
```

### 4. `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  extends: ["@whalerice/nuxt-ui"],
  modules: ["@whalerice/nuxt-ui/module"],
});
```

Tailwind v4 + `@tailwindcss/vite` 스택을 레이어와 맞추는 것이 좋습니다.

컴포넌트는 **명시적 import**(`@whalerice/nuxt-ui/accordion` 등) 또는 Nuxt **자동 import**(`Button`, `Dialog` 등)로 사용합니다. 서브패스 목록은 [`packages/ui/README.md`](packages/ui/README.md)를 참고하세요.

## 배포

`packages/ui/package.json`의 `version`을 올린 뒤, 루트에서:

```bash
pnpm pack:ui      # tarball 산출물 확인
pnpm publish:ui   # GitHub Packages publish
```

PAT·`.npmrc` 등 상세 절차는 **[`packages/ui/PUBLISHING.md`](packages/ui/PUBLISHING.md)** 를 참고하세요.
