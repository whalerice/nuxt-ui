---
title: Input Group
description: 아이콘·버튼·텍스트를 입력 필드와 한 줄로 묶는 그룹.
order: 21
category: components
---

:demo-input-group

## 사용 예시

```vue
<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@whalerice/nuxt-ui/input-group";
import { SearchIcon } from "lucide-vue-next";
</script>

<template>
  <InputGroup class="max-w-sm">
    <InputGroupAddon>
      <SearchIcon />
    </InputGroupAddon>
    <InputGroupInput placeholder="검색..." />
    <InputGroupAddon align="inline-end">
      <InputGroupText>⌘K</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
</template>
```

## API Reference

`InputGroup`, `InputGroupAddon`, `InputGroupButton`, `InputGroupInput`, `InputGroupText`, `InputGroupTextarea` 여섯 컴포넌트로 구성됩니다. Reka UI 프리미티브가 아니라 shadcn-vue 스타일의 **입력 그룹 레이아웃**입니다.

### InputGroup

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 루트에 병합 (`role="group"`, 공통 보더·포커스 링). |

#### Slots

| Slot | Description |
| --- | --- |
| default | 애드온·입력·텍스트 영역. |

---

### InputGroupAddon

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| align | `'inline-start'` | `'inline-start' \| 'inline-end' \| 'block-start' \| 'block-end'` | 애드온 위치. |
| class | — | `string` | 애드온에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 아이콘·버튼·짧은 텍스트. |

클릭 시 인접 `input`에 포커스를 줍니다(내부 `button` 클릭은 제외).

---

### InputGroupButton

`Button`을 감싼 그룹 전용 버튼.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| variant | `'ghost'` | Button `variant` | 버튼 스타일. |
| size | `'xs'` | `'xs' \| 'sm' \| 'icon-xs' \| 'icon-sm'` | 버튼·아이콘 크기. |
| class | — | `string` | 버튼에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 버튼 라벨·아이콘. |

---

### InputGroupInput

그룹 내부용 `Input`(테두리·링 제거).

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | — | `string \| number` | `Input`과 동일. `v-model` 지원. |
| defaultValue | — | `string \| number` | 초기 값(비제어). |
| class | — | `string` | 입력에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | `[payload: string \| number]` | 값 변경. |

---

### InputGroupText

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 텍스트에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 단위·단축키 등 보조 텍스트. |

---

### InputGroupTextarea

그룹 내부용 `Textarea`.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | — | `string \| number` | `Textarea`와 동일. |
| defaultValue | — | `string \| number` | 초기 값(비제어). |
| class | — | `string` | 텍스트 영역에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | `[payload: string \| number]` | 값 변경. |
