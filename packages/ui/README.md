# @whalerice/nuxt-ui

Nuxt 4 + Tailwind v4 기반 UI 레이어입니다. GitHub Packages(`https://npm.pkg.github.com`)에서 설치합니다.

## 요구사항

- Node `>=20`
- Nuxt 4, Tailwind v4 (`@tailwindcss/vite`)

## 설치

### 1. GitHub PAT

[Personal access tokens](https://github.com/settings/tokens)에서 발급합니다.

- `read:packages` (필수)
- `repo` (private 패키지/레포인 경우)
- org에 SSO가 있으면 해당 org에 **Authorize** 필요

```bash
export GITHUB_PACKAGES_TOKEN=ghp_xxx
```

### 2. 소비 앱 루트 `.npmrc`

```ini
@whalerice:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_PACKAGES_TOKEN}
```

### 3. 패키지 추가

```bash
pnpm add @whalerice/nuxt-ui
```

## Nuxt 설정

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  extends: ["@whalerice/nuxt-ui"],
  modules: ["@whalerice/nuxt-ui/module"],
});
```

프로덕션 앱은 레이어와 동일하게 **Tailwind v4 + `@tailwindcss/vite`** 를 맞추는 것이 좋습니다.  
`@whalerice/nuxt-ui/module` 은 SSR용 `reka-ui` / `lucide-vue-next` transpile, VueUse `provideSSRWidth` 플러그인 등을 적용합니다.

## 컴포넌트 사용 예

### 명시적 import (npm 서브패스)

```vue
<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@whalerice/nuxt-ui/accordion";
</script>

<template>
  <Accordion type="single" collapsible class="w-full">
    <AccordionItem value="a">
      <AccordionTrigger>제목</AccordionTrigger>
      <AccordionContent>내용</AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
```

하이픈 이름은 폴더명과 동일합니다. 예: `@whalerice/nuxt-ui/alert-dialog`, `@whalerice/nuxt-ui/dropdown-menu`.  
`cn()` 유틸: `@whalerice/nuxt-ui/lib/utils`. 전체 barrel: `@whalerice/nuxt-ui/components`.

### Nuxt 자동 import (선택)

`extends` 레이어를 쓰면 import 없이 `Button`, `Dialog` 등을 템플릿에서 바로 쓸 수 있습니다.

```vue
<script setup lang="ts">
const open = ref(false);
</script>

<template>
  <Button @click="open = true">열기</Button>
  <Dialog v-model:open="open">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>제목</DialogTitle>
        <DialogDescription>설명</DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</template>
```

## package exports

| path               | 용도                                      |
| ------------------ | ----------------------------------------- |
| `.`                | Nuxt 레이어 (`extends`)                   |
| `./module`         | companion 모듈                            |
| `./style.css`      | 레이어 Tailwind 엔트리 (선택)             |
| `./<component>`    | 컴포넌트 barrel (`accordion`, `button` …) |
| `./components`     | 전체 UI barrel                            |
| `./lib/utils`      | `cn()` 유틸                               |
