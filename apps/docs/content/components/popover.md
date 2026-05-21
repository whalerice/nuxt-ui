---
title: Popover
description: 트리거 클릭으로 열리는 플로팅 패널.
order: 27
category: components
---

:demo-popover

## 사용 예시

```vue
<script setup lang="ts">
import { Button } from "@whalerice/nuxt-ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@whalerice/nuxt-ui/popover";
</script>

<template>
  <Popover>
    <PopoverTrigger>
      <Button variant="outline">열기</Button>
    </PopoverTrigger>
    <PopoverContent class="w-80">
      <PopoverHeader>
        <PopoverTitle>크기</PopoverTitle>
        <PopoverDescription>표시할 열 너비를 선택하세요.</PopoverDescription>
      </PopoverHeader>
    </PopoverContent>
  </Popover>
</template>
```

## API Reference

`Popover`, `PopoverTrigger`, `PopoverContent`, `PopoverAnchor`, `PopoverHeader`, `PopoverTitle`, `PopoverDescription` 일곱 컴포넌트로 구성됩니다. [Reka UI Popover](https://www.reka-ui.com/docs/components/popover)를 기반으로 하며, `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Popover

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| open | — | `boolean` | 열림 상태(제어). `v-model:open`과 바인딩합니다. |
| defaultOpen | `false` | `boolean` | 초기 열림(비제어). |
| modal | `false` | `boolean` | `true`면 바깥 상호작용·포커스 트랩. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:open | `[value: boolean]` | 열림 상태 변경. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 트리거·콘텐츠. `open` 상태 슬롯 props 제공. |

---

### PopoverTrigger

#### Slots

| Slot | Description |
| --- | --- |
| default | 패널을 여는 트리거. |

---

### PopoverContent

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| align | `'center'` | `'start' \| 'center' \| 'end'` | 트리거 기준 정렬. |
| sideOffset | `4` | `number` | 트리거와의 거리(px). |
| side | `'bottom'` | `'top' \| 'right' \| 'bottom' \| 'left'` | 선호하는 표시 방향. |
| class | — | `string` | 콘텐츠에 병합 (`w-72` 기본). |
| forceMount | — | `boolean` | 닫혀도 DOM에 유지. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| escapeKeyDown | `[event: KeyboardEvent]` | Esc 키. |
| pointerDownOutside | `[event]` | 바깥 포인터 다운. |
| focusOutside | `[event]` | 바깥 포커스. |
| interactOutside | `[event]` | 바깥 상호작용. |
| openAutoFocus | `[event: Event]` | 열릴 때 포커스 이동. |
| closeAutoFocus | `[event: Event]` | 닫힐 때 포커스 복귀. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 패널 본문. |

---

### PopoverAnchor

위치 기준 앵커(트리거와 분리할 때).

#### Slots

| Slot | Description |
| --- | --- |
| default | 앵커 요소. |

---

### PopoverHeader

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 헤더에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 제목·설명. |

---

### PopoverTitle

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 제목에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 패널 제목. |

---

### PopoverDescription

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 설명에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 부가 설명. |

---

고급 옵션·접근성은 [Reka UI Popover](https://www.reka-ui.com/docs/components/popover)를 참고하세요.
