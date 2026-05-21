---
title: Skeleton
description: 콘텐츠 로딩 중 자리 표시용 펄스 블록.
order: 36
category: components
---

:demo-skeleton

## 사용 예시

```vue
<script setup lang="ts">
import { Skeleton } from "@whalerice/nuxt-ui/skeleton";
</script>

<template>
  <div class="flex items-center gap-4">
    <Skeleton class="size-12 rounded-full" />
    <div class="space-y-2">
      <Skeleton class="h-4 w-[200px]" />
      <Skeleton class="h-4 w-[160px]" />
    </div>
  </div>
</template>
```

## API Reference

`Skeleton` 단일 컴포넌트입니다. Reka UI 프리미티브가 아닌 **정적 로딩 플레이스홀더** `div`입니다.

### Skeleton

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 루트에 병합 (`bg-muted animate-pulse rounded-md` 기본). |

#### Slots

| Slot | Description |
| --- | --- |
| — | 슬롯 없음(자식 없는 빈 `div`). |

크기·모양은 `class`로 지정합니다(예: `h-4 w-full`, `rounded-full`).
