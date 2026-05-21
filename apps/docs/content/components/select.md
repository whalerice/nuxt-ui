---
title: Select
description: 옵션 목록에서 하나(또는 여러 개)를 고르는 커스텀 선택 상자입니다.
order: 33
category: components
---

:demo-select

## 사용 예시

```vue
<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@whalerice/nuxt-ui/select";
</script>

<template>
  <Select>
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="과일 선택" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">사과</SelectItem>
      <SelectItem value="banana">바나나</SelectItem>
      <SelectItem value="orange">오렌지</SelectItem>
    </SelectContent>
  </Select>
</template>
```

## API Reference

[Reka UI Select](https://www.reka-ui.com/docs/components/select)를 래핑합니다. SelectContent 는 포털·스크롤 버튼·뷰포트를 포함합니다. as / asChild 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Select

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | — | string | 선택 값(제어). v-model 과 바인딩합니다. |
| defaultValue | — | string | 초기 값(비제어). |
| open | — | boolean | 목록 열림(제어). v-model:open 가능. |
| disabled | false | boolean | 전체 비활성화. |
| required | false | boolean | 폼 필수 여부. |
| name | — | string | 폼 제출 name. |
| dir | — | ltr \| rtl | 읽기 방향. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | [value: string] | 값 변경. |
| update:open | [value: boolean] | 열림 변경. |

---

### SelectTrigger

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| size | default | sm \| default | 트리거 높이. |
| class | — | string | 트리거에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 보통 SelectValue. |

---

### SelectValue

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| placeholder | — | string | 미선택 시 안내 문구. |

---

### SelectContent

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| position | item-aligned | item-aligned \| popper | 목록 위치 전략. |
| align | center | start \| center \| end | popper 정렬. |
| side | bottom | top \| right \| bottom \| left | 펼침 방향. |
| sideOffset | 4 | number | 트리거와 간격. |
| class | — | string | 패널에 병합. |

---

### SelectItem

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | — | string | **필수.** 항목 값. |
| disabled | false | boolean | 항목 비활성화. |
| class | — | string | 항목에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 옵션 라벨. |

---

SelectGroup, SelectLabel, SelectSeparator 도 제공됩니다. 고급 옵션은 [Reka UI Select](https://www.reka-ui.com/docs/components/select)를 참고하세요.
