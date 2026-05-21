---
title: Context Menu
description: 요소를 우클릭(또는 길게 누르기)했을 때 열리는 맥락 메뉴입니다.
order: 14
category: components
---

:demo-context-menu

## 사용 예시

```vue
<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@whalerice/nuxt-ui/context-menu";
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger
      class="flex h-32 w-full max-w-sm items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground"
    >
      이 영역을 우클릭하세요
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>복사</ContextMenuItem>
      <ContextMenuItem>붙여넣기</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem variant="destructive">삭제</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>
```

## API Reference

[Reka UI Context Menu](https://www.reka-ui.com/docs/components/context-menu)를 래핑합니다. Dropdown Menu 와 항목·서브메뉴 API가 유사합니다. as / asChild 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### ContextMenu

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| open | — | boolean | 열림(제어). v-model:open 과 바인딩합니다. |
| defaultOpen | false | boolean | 초기 열림(비제어). |
| modal | true | boolean | 모달·포커스 동작. |
| dir | — | ltr \| rtl | 읽기 방향. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:open | [value: boolean] | 열림 변경. |

---

### ContextMenuTrigger

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| disabled | false | boolean | 메뉴 비활성화. |
| class | — | string | 트리거 영역에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 우클릭 대상 영역. |

---

### ContextMenuContent

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| alignOffset | — | number | 정렬 오프셋. |
| avoidCollisions | true | boolean | 화면 밖으로 나가지 않도록 조정. |
| class | — | string | 메뉴 패널에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | ContextMenuItem 등. |

---

### ContextMenuItem

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| variant | default | default \| destructive | 강조 스타일. |
| disabled | false | boolean | 항목 비활성화. |
| inset | false | boolean | 좌측 들여쓰기. |
| class | — | string | 항목에 병합. |

---

고급 옵션은 [Reka UI Context Menu](https://www.reka-ui.com/docs/components/context-menu)를 참고하세요.
