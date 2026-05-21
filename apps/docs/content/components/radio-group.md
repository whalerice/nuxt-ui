---
title: Radio Group
description: 여러 옵션 중 하나만 선택하는 라디오 그룹.
order: 29
category: components
---

:demo-radio-group

## 사용 예시

```vue
<script setup lang="ts">
import { Label } from "@whalerice/nuxt-ui/label";
import { RadioGroup, RadioGroupItem } from "@whalerice/nuxt-ui/radio-group";
</script>

<template>
  <RadioGroup default-value="comfortable">
    <div class="flex items-center gap-2">
      <RadioGroupItem id="r1" value="default" />
      <Label for="r1">기본</Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem id="r2" value="comfortable" />
      <Label for="r2">편안함</Label>
    </div>
  </RadioGroup>
</template>
```

## API Reference

`RadioGroup`, `RadioGroupItem` 두 컴포넌트로 구성됩니다. [Reka UI Radio Group](https://www.reka-ui.com/docs/components/radio-group)을 기반으로 하며, `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### RadioGroup

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | — | `AcceptableValue` | 선택 값(제어). `v-model`과 바인딩합니다. |
| defaultValue | — | `AcceptableValue` | 초기 선택(비제어). |
| disabled | `false` | `boolean` | 그룹 전체 비활성화. |
| orientation | `'vertical'` | `'horizontal' \| 'vertical'` | 배치·화살표 키 방향. |
| dir | — | `'ltr' \| 'rtl'` | 읽기 방향. |
| loop | `true` | `boolean` | 포커스 루프. |
| name | — | `string` | 폼 name. |
| required | `false` | `boolean` | 폼 필수 여부. |
| class | — | `string` | 루트에 병합 (`grid gap-2` 기본). |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | `[payload: AcceptableValue]` | 선택 값 변경. |

---

### RadioGroupItem

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | — | `AcceptableValue` | **필수.** 항목 값(그룹 내 고유). |
| disabled | `false` | `boolean` | 이 항목만 비활성화. |
| id | — | `string` | 루트 `id`(라벨 `for` 연결). |
| class | — | `string` | 항목에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| select | `[event: SelectEvent]` | 항목 선택 시. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 선택 표시(기본: 원형 인디케이터). |

---

고급 옵션·접근성은 [Reka UI Radio Group](https://www.reka-ui.com/docs/components/radio-group)을 참고하세요.
