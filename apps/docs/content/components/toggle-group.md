---
title: Toggle Group
description: 관련 토글 버튼을 그룹으로 묶어 단일·다중 선택을 지원합니다.
order: 44
category: components
---

:demo-toggle-group

## 사용 예시

```vue
<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from "@whalerice/nuxt-ui/toggle-group";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-vue-next";
</script>

<template>
  <ToggleGroup type="multiple" :default-value="['bold']">
    <ToggleGroupItem value="bold" aria-label="굵게">
      <BoldIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="기울임">
      <ItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="밑줄">
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
</template>
```

## API Reference

`ToggleGroup`, `ToggleGroupItem` 두 컴포넌트로 구성됩니다. [Reka UI Toggle Group](https://www.reka-ui.com/docs/components/toggle-group)을 기반으로 하며, `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### ToggleGroup

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| type | — | `'single' \| 'multiple'` | 한 개 또는 여러 개 선택. |
| modelValue | — | `string \| string[]` | 선택된 값(제어). `v-model`과 바인딩합니다. |
| defaultValue | — | `string \| string[]` | 초기 선택(비제어). |
| disabled | `false` | `boolean` | 그룹 전체 비활성화. |
| variant | — | `'default' \| 'outline'` | 자식 `ToggleGroupItem` 기본 variant. |
| size | — | `'default' \| 'sm' \| 'lg'` | 자식 기본 size. |
| spacing | `0` | `number` | 항목 간 간격(0이면 붙은 세그먼트 스타일). |
| orientation | — | `'horizontal' \| 'vertical'` | 포커스 이동 방향. |
| rovingFocus | `true` | `boolean` | 화살표 키 포커스 이동. |
| loop | `true` | `boolean` | 포커스 루프. |
| name | — | `string` | 폼 name. |
| required | `false` | `boolean` | 폼 필수 여부. |
| class | — | `string` | 루트에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | `[payload: string \| string[]]` | 선택 값 변경. |

---

### ToggleGroupItem

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | — | `string` | **필수.** 항목 식별자(그룹 내 고유). |
| disabled | `false` | `boolean` | 이 항목만 비활성화. |
| variant | — | `'default' \| 'outline'` | 그룹 context 없을 때 variant. |
| size | — | `'default' \| 'sm' \| 'lg'` | 그룹 context 없을 때 size. |
| class | — | `string` | 항목에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 아이콘·라벨. |

---

고급 옵션·접근성은 [Reka UI Toggle Group](https://www.reka-ui.com/docs/components/toggle-group)을 참고하세요.
