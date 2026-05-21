---
title: Input
description: 한 줄 텍스트 입력 필드.
order: 20
category: components
---

:demo-input

## 사용 예시

```vue
<script setup lang="ts">
import { Input } from "@whalerice/nuxt-ui/input";
import { Label } from "@whalerice/nuxt-ui/label";
</script>

<template>
  <div class="grid w-full max-w-sm gap-2">
    <Label for="email">이메일</Label>
    <Input id="email" type="email" placeholder="name@example.com" />
  </div>
</template>
```

## API Reference

`Input` 단일 컴포넌트입니다. 네이티브 `<input>`에 `v-model`을 연결한 shadcn-vue 스타일 래퍼입니다.

### Input

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | — | `string \| number` | 입력 값. `v-model`과 바인딩합니다. |
| defaultValue | — | `string \| number` | 초기 값(비제어). |
| class | — | `string` | 필드에 병합 (보더·포커스 링 기본). |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | `[payload: string \| number]` | 값 변경. |

`type`, `placeholder`, `disabled`, `id`, `name`, `required` 등은 네이티브 `<input>` 속성으로 전달합니다.
