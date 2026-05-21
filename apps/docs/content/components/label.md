---
title: Label
description: 폼 필드·체크박스·스위치 등에 연결되는 접근 가능한 라벨.
order: 22
category: components
---

:demo-label

## 사용 예시

```vue
<script setup lang="ts">
import { Label } from "@whalerice/nuxt-ui/label";
</script>

<template>
  <div class="grid w-full max-w-sm gap-2">
    <Label for="email">이메일</Label>
    <input id="email" type="email" placeholder="name@example.com" />
  </div>
</template>
```

## API Reference

[Reka UI Label](https://www.reka-ui.com/docs/components/label)을 래핑합니다. `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Label

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| for | — | `string` | 연결할 컨트롤의 `id`. 클릭 시 해당 필드로 포커스. |
| class | — | `string` | 라벨에 병합 (`text-sm font-medium` 기본). |

#### Slots

| Slot | Description |
| --- | --- |
| default | 라벨 텍스트·아이콘. |

`peer-disabled:` 스타일은 인접 `disabled` 필드와 함께 쓸 때 적용됩니다.

---

고급 옵션·접근성은 [Reka UI Label](https://www.reka-ui.com/docs/components/label)을 참고하세요.
