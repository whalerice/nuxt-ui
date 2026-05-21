---
title: Hover Card
description: 트리거에 마우스를 올리면 미리보기 패널을 표시합니다.
order: 19
category: components
---

:demo-hover-card

## 사용 예시

```vue
<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@whalerice/nuxt-ui/avatar";
import { Button } from "@whalerice/nuxt-ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@whalerice/nuxt-ui/hover-card";
</script>

<template>
  <HoverCard>
    <HoverCardTrigger>
      <Button variant="link">@whalerice</Button>
    </HoverCardTrigger>
    <HoverCardContent class="w-80">
      <div class="flex gap-3">
        <Avatar>
          <AvatarImage src="/avatar.png" alt="Whalerice" />
          <AvatarFallback>SF</AvatarFallback>
        </Avatar>
        <div>
          <p class="font-medium">Whalerice</p>
          <p class="text-muted-foreground text-sm">디자인 시스템 팀</p>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>
```

## API Reference

`HoverCard`, `HoverCardTrigger`, `HoverCardContent` 세 컴포넌트로 구성됩니다. [Reka UI Hover Card](https://www.reka-ui.com/docs/components/hover-card)를 기반으로 하며, `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### HoverCard

#### Props

| Prop        | Default | Type      | Description                                     |
| ----------- | ------- | --------- | ----------------------------------------------- |
| open        | —       | `boolean` | 열림 상태(제어). `v-model:open`과 바인딩합니다. |
| defaultOpen | `false` | `boolean` | 초기 열림(비제어).                              |
| openDelay   | `700`   | `number`  | 트리거 호버 후 열리기까지 지연(ms).             |
| closeDelay  | `300`   | `number`  | 포인터가 벗어난 뒤 닫히기까지 지연(ms).         |

#### Emits

| Event       | Payload            | Description     |
| ----------- | ------------------ | --------------- |
| update:open | `[value: boolean]` | 열림 상태 변경. |

---

### HoverCardTrigger

#### Slots

| Slot    | Description     |
| ------- | --------------- |
| default | 호버 대상 요소. |

---

### HoverCardContent

#### Props

| Prop       | Default    | Type                                     | Description                              |
| ---------- | ---------- | ---------------------------------------- | ---------------------------------------- |
| align      | `'center'` | `'start' \| 'center' \| 'end'`           | 트리거 기준 정렬.                        |
| sideOffset | `4`        | `number`                                 | 트리거와의 거리(px).                     |
| side       | `'bottom'` | `'top' \| 'right' \| 'bottom' \| 'left'` | 선호하는 표시 방향.                      |
| class      | —          | `string`                                 | 콘텐츠에 병합 (`w-64`, 애니메이션 기본). |
| forceMount | —          | `boolean`                                | 닫혀도 DOM에 유지(애니메이션 제어용).    |

#### Slots

| Slot    | Description         |
| ------- | ------------------- |
| default | 미리보기 패널 본문. |

---

고급 옵션·접근성은 [Reka UI Hover Card](https://www.reka-ui.com/docs/components/hover-card)를 참고하세요.
