---
title: Toggle
description: 눌림(pressed) 상태를 유지하는 토글 버튼.
order: 43
category: components
---

:demo-toggle

## 사용 예시

```vue
<script setup lang="ts">
import { Toggle } from "@whalerice/nuxt-ui/toggle";
import { BoldIcon } from "lucide-vue-next";
</script>

<template>
  <Toggle aria-label="굵게">
    <BoldIcon />
  </Toggle>
</template>
```

## API Reference

[Reka UI Toggle](https://www.reka-ui.com/docs/components/toggle)를 래핑합니다. `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Toggle

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | — | `boolean \| null` | 눌림 상태. `v-model`과 바인딩합니다. |
| defaultValue | — | `boolean` | 초기 눌림 상태(비제어). |
| disabled | `false` | `boolean` | 상호작용 비활성화. |
| variant | `'default'` | `'default' \| 'outline'` | 시각적 스타일. |
| size | `'default'` | `'default' \| 'sm' \| 'lg'` | 높이·패딩. |
| name | — | `string` | 폼 제출 시 name. |
| required | `false` | `boolean` | 폼 필수 여부. |
| class | — | `string` | 루트에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | `[value: boolean]` | 눌림 상태 변경. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 아이콘·라벨. |

---

고급 옵션·접근성은 [Reka UI Toggle](https://www.reka-ui.com/docs/components/toggle)을 참고하세요.
