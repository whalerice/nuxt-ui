---
title: Checkbox
description: 켜짐/꺼짐·불확정 상태를 선택하는 체크박스.
order: 11
category: components
---

:demo-checkbox

## 사용 예시

```vue
<script setup lang="ts">
import { Checkbox } from "@whalerice/nuxt-ui/checkbox";
import { Label } from "@whalerice/nuxt-ui/label";
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox id="terms" />
    <Label for="terms">이용약관에 동의합니다</Label>
  </div>
</template>
```

## API Reference

[Reka UI Checkbox](https://www.reka-ui.com/docs/components/checkbox)를 래핑합니다. `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Checkbox

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | — | `boolean \| 'indeterminate' \| null` | 체크 상태. `v-model`과 바인딩합니다. |
| defaultValue | — | `boolean \| 'indeterminate'` | 초기 상태(비제어). |
| disabled | `false` | `boolean` | 상호작용 비활성화. |
| value | `'on'` | `AcceptableValue` | 폼 제출 시 값. |
| id | — | `string` | 루트 `id`(라벨 `for` 연결). |
| name | — | `string` | 폼 name. |
| required | `false` | `boolean` | 폼 필수 여부. |
| trueValue | — | `boolean` | 켜짐일 때 `modelValue`(기본 `true`). |
| falseValue | — | `boolean` | 꺼짐일 때 `modelValue`(기본 `false`). |
| class | — | `string` | 루트에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | `[value: boolean \| 'indeterminate']` | 상태 변경. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 체크 표시(기본: `CheckIcon`). |

---

고급 옵션·접근성은 [Reka UI Checkbox](https://www.reka-ui.com/docs/components/checkbox)를 참고하세요.
