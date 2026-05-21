---
title: Native Select
description: 네이티브 select 요소를 스타일링한 드롭다운.
order: 24
category: components
---

:demo-native-select

## 사용 예시

```vue
<script setup lang="ts">
import {
  NativeSelect,
  NativeSelectOption,
} from "@whalerice/nuxt-ui/native-select";
</script>

<template>
  <NativeSelect class="max-w-xs">
    <NativeSelectOption value="apple">사과</NativeSelectOption>
    <NativeSelectOption value="banana">바나나</NativeSelectOption>
    <NativeSelectOption value="orange">오렌지</NativeSelectOption>
  </NativeSelect>
</template>
```

## API Reference

`NativeSelect`, `NativeSelectOption`, `NativeSelectOptGroup` 세 컴포넌트로 구성됩니다. 네이티브 `<select>` / `<option>` / `<optgroup>` 래퍼입니다.

### NativeSelect

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | — | `AcceptableValue` | 선택 값. `v-model`과 바인딩합니다. |
| size | `'default'` | `'sm' \| 'default'` | 필드 높이. |
| class | — | `string` | `<select>`에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | `[value: AcceptableValue]` | 선택 변경. |

`disabled`, `name`, `required` 등은 네이티브 `<select>` 속성으로 전달합니다.

---

### NativeSelectOption

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | `<option>`에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 옵션 라벨. |

`value`, `disabled`, `selected` 등은 네이티브 `<option>` 속성으로 전달합니다.

---

### NativeSelectOptGroup

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | `<optgroup>`에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 그룹 내 `NativeSelectOption`. |

`label`은 네이티브 `<optgroup label>` 속성으로 전달합니다.
