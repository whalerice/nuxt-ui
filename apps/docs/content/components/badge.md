---
title: Badge
description: 짧은 라벨·상태·카운트를 표시하는 인라인 배지.
order: 5
category: components
---

:demo-badge

## 사용 예시

```vue
<script setup lang="ts">
import { Badge } from "@whalerice/nuxt-ui/badge";
</script>

<template>
  <Badge>신규</Badge>
  <Badge variant="secondary">초안</Badge>
  <Badge variant="outline">베타</Badge>
</template>
```

## API Reference

`Badge` 단일 컴포넌트입니다. shadcn-vue 스타일의 **정적 라벨**이며, `Primitive`로 렌더됩니다. `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Badge

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| variant | `'default'` | `'default' \| 'secondary' \| 'destructive' \| 'outline' \| 'ghost' \| 'link'` | 시각적 강조 스타일. |
| class | — | `string` | 루트에 병합 (`badgeVariants` 기본 높이·패딩과 병합). |

#### Slots

| Slot | Description |
| --- | --- |
| default | 배지 텍스트·아이콘. |
