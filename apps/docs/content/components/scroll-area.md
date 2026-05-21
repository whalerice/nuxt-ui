---
title: Scroll Area
description: 커스텀 스크롤바가 있는 스크롤 가능 영역.
order: 32
category: components
---

:demo-scroll-area

## 사용 예시

```vue
<script setup lang="ts">
import { ScrollArea } from "@whalerice/nuxt-ui/scroll-area";
</script>

<template>
  <ScrollArea class="h-48 w-full max-w-sm rounded-lg border">
    <div class="space-y-2 p-4 text-sm">
      <p v-for="i in 12" :key="i">스크롤 항목 {{ i }}</p>
    </div>
  </ScrollArea>
</template>
```

## API Reference

`ScrollArea`, `ScrollBar` 두 컴포넌트로 구성됩니다. [Reka UI Scroll Area](https://www.reka-ui.com/docs/components/scroll-area)를 기반으로 하며, `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### ScrollArea

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| type | `'hover'` | `'auto' \| 'always' \| 'scroll' \| 'hover' \| 'glimpse'` | 스크롤바 표시 방식. |
| dir | — | `'ltr' \| 'rtl'` | 읽기 방향. |
| scrollHideDelay | `600` | `number` | `scroll` / `hover` 타입에서 스크롤바 숨김 지연(ms). |
| class | — | `string` | 루트에 병합 (`relative` 기본). |

#### Slots

| Slot | Description |
| --- | --- |
| default | 스크롤되는 콘텐츠. |

`ScrollBar`는 `ScrollArea` 내부에 기본 포함됩니다.

---

### ScrollBar

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| orientation | `'vertical'` | `'vertical' \| 'horizontal'` | 스크롤바 방향. |
| forceMount | — | `boolean` | 닫혀도 DOM에 유지. |
| class | — | `string` | 스크롤바 트랙에 병합. |

---

고급 옵션·접근성은 [Reka UI Scroll Area](https://www.reka-ui.com/docs/components/scroll-area)를 참고하세요.
