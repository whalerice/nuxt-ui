---
title: Textarea
description: 여러 줄 텍스트 입력 필드.
order: 42
category: components
---

:demo-textarea

## 사용 예시

```vue
<script setup lang="ts">
import { Textarea } from "@whalerice/nuxt-ui/textarea";
</script>

<template>
  <Textarea placeholder="메모를 입력하세요." />
</template>
```

## API Reference

`Textarea` 단일 컴포넌트입니다. 네이티브 `<textarea>`에 `v-model`을 연결한 shadcn-vue 스타일 래퍼입니다.

### Textarea

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | — | `string \| number` | 입력 값. `v-model`과 바인딩합니다. |
| defaultValue | — | `string \| number` | 초기 값(비제어). |
| class | — | `string` | 필드에 병합 (보더·포커스 링·`field-sizing-content` 기본). |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | `[payload: string \| number]` | 값 변경. |

`placeholder`, `disabled`, `rows` 등은 네이티브 `<textarea>` 속성으로 전달합니다.
