---
title: Button
description: 클릭·제출 등 주요 액션을 수행하는 버튼.
order: 7
category: components
---

:demo-button

## 사용 예시

```vue
<script setup lang="ts">
import { Button } from "@whalerice/nuxt-ui/button";
</script>

<template>
  <Button>저장</Button>
  <Button variant="outline">취소</Button>
</template>
```

## API Reference

`Button` 단일 컴포넌트입니다. [Reka UI Primitive](https://www.reka-ui.com/docs/utilities/primitive) 기반이며, 기본 태그는 `button`입니다. `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Button

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| variant | `'default'` | `'default' \| 'outline' \| 'secondary' \| 'ghost' \| 'destructive' \| 'link'` | 시각적 스타일. |
| size | `'default'` | `'default' \| 'xs' \| 'sm' \| 'lg' \| 'icon' \| 'icon-xs' \| 'icon-sm' \| 'icon-lg'` | 높이·패딩·아이콘 전용 크기. |
| class | — | `string` | 루트에 병합 (`buttonVariants` 기본). |

#### Slots

| Slot | Description |
| --- | --- |
| default | 버튼 라벨·아이콘. |

`type="submit"` 등 네이티브 버튼 속성은 루트에 그대로 전달할 수 있습니다.
