---
title: Resizable
description: 드래그로 크기를 조절하는 분할 패널. 가로·세로 방향 레이아웃을 지원합니다.
order: 31
category: components
---

:demo-resizable

## 사용 예시

```vue
<script setup lang="ts">
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@whalerice/nuxt-ui/resizable";
</script>

<template>
  <ResizablePanelGroup direction="horizontal" class="min-h-[200px] rounded-lg border">
    <ResizablePanel :default-size="50">왼쪽</ResizablePanel>
    <ResizableHandle with-handle />
    <ResizablePanel :default-size="50">오른쪽</ResizablePanel>
  </ResizablePanelGroup>
</template>
```

## API Reference

[Reka UI Splitter](https://www.reka-ui.com/docs/components/splitter)를 래핑합니다. SSR 사용 시 패널·핸들에 `id`를 지정하는 것을 권장합니다.

### ResizablePanelGroup

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| direction | — | horizontal \| vertical | **필수.** 분할 방향. |
| autoSaveId | null | string \| null | localStorage에 레이아웃 자동 저장 ID. |
| id | — | string \| null | 그룹 ID(SSR 시 권장). |
| keyboardResizeBy | 10 | number \| null | 방향키로 크기 조절 시 단계(%). |
| class | — | string | 그룹 flex 컨테이너에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| layout | number[] | 패널 크기 배열 변경 시. |

#### Slots

| Slot | Description |
| --- | --- |
| default | ResizablePanel, ResizableHandle 자식. 스코프: layout. |

---

### ResizablePanel

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| defaultSize | — | number | 초기 크기(기본 단위 %). |
| minSize | 10 | number | 최소 크기. |
| maxSize | 100 | number | 최대 크기. |
| collapsible | — | boolean | minSize 이하로 줄이면 접힘. |
| collapsedSize | — | number | 접힌 상태 크기(collapsible 시). |
| order | — | number | 조건부 렌더 시 패널 순서. |
| sizeUnit | % | % \| px | 크기 단위. |
| id | — | string | 패널 ID(SSR 시 권장). |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| collapse | — | 패널 접힘. |
| expand | — | 패널 펼침. |
| resize | size, prevSize | 크기 변경(1–100 또는 px). |

#### Slots

| Slot | Description |
| --- | --- |
| default | 패널 콘텐츠. 스코프: collapse, expand, resize, isCollapsed, isExpanded. |

---

### ResizableHandle

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| withHandle | false | boolean | 중앙 드래그 핸들 막대 표시. |
| disabled | false | boolean | 드래그 비활성화. |
| class | — | string | 핸들에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | withHandle일 때 핸들 내부 커스텀 UI. |

---

고급 옵션·접근성·키보드 조작은 [Reka UI Splitter](https://www.reka-ui.com/docs/components/splitter)를 참고하세요.
