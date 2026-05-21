---
title: Tooltip
description: 요소에 마우스를 올리거나 포커스하면 짧은 설명을 표시합니다.
order: 45
category: components
---

:demo-tooltip

## 사용 예시

```vue
<script setup lang="ts">
import { Button } from "@whalerice/nuxt-ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@whalerice/nuxt-ui/tooltip";
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline">저장</Button>
      </TooltipTrigger>
      <TooltipContent>변경 사항 저장</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
```

## API Reference

`TooltipProvider`, `Tooltip`, `TooltipTrigger`, `TooltipContent` 네 컴포넌트로 구성됩니다. [Reka UI Tooltip](https://www.reka-ui.com/docs/components/tooltip)을 기반으로 하며, `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### TooltipProvider

앱·섹션 루트에 한 번 감싸 지연·동작을 공유합니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| delayDuration | `0` (래퍼) | `number` | 트리거 진입 후 열림 지연(ms). Reka 기본 `700`. |
| skipDelayDuration | `300` | `number` | 연속 트리거 간 지연 생략 시간(ms). |
| disableHoverableContent | `false` | `boolean` | 콘텐츠 호버 시 닫힘. |
| disableClosingTrigger | `false` | `boolean` | 트리거 클릭으로 닫지 않음. |
| disabled | `false` | `boolean` | 툴팁 전체 비활성화. |

#### Slots

| Slot | Description |
| --- | --- |
| default | `Tooltip` 트리. |

---

### Tooltip

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| open | — | `boolean` | 열림 상태(제어). `v-model:open`과 바인딩합니다. |
| defaultOpen | `false` | `boolean` | 초기 열림(비제어). |
| delayDuration | — | `number` | 이 툴팁만의 열림 지연(Provider 오버라이드). |
| disableHoverableContent | — | `boolean` | 콘텐츠 호버 허용 여부. |
| disableClosingTrigger | `false` | `boolean` | 트리거 클릭으로 닫지 않음. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:open | `[value: boolean]` | 열림 상태 변경. |

---

### TooltipTrigger

#### Slots

| Slot | Description |
| --- | --- |
| default | 툴팁 대상 요소. |

---

### TooltipContent

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| sideOffset | `0` | `number` | 트리거와의 거리(px). |
| side | `'top'` | `'top' \| 'right' \| 'bottom' \| 'left'` | 표시 방향. |
| align | `'center'` | `'start' \| 'center' \| 'end'` | 정렬. |
| class | — | `string` | 콘텐츠에 병합. |
| forceMount | — | `boolean` | 닫혀도 DOM에 유지. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| escapeKeyDown | `[event: KeyboardEvent]` | Esc 키. |
| pointerDownOutside | `[event: Event]` | 바깥 포인터 다운. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 툴팁 텍스트·단축키 등. |

---

고급 옵션·접근성은 [Reka UI Tooltip](https://www.reka-ui.com/docs/components/tooltip)을 참고하세요.
