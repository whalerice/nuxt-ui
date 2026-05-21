---
title: Dropdown Menu
description: 트리거 클릭으로 열리는 메뉴. 액션·설정·계정 메뉴에 사용합니다.
order: 17
category: components
---

:demo-dropdown-menu

## 사용 예시

```vue
<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@whalerice/nuxt-ui/dropdown-menu";
import { Button } from "@whalerice/nuxt-ui/button";
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">메뉴</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>내 계정</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>프로필</DropdownMenuItem>
      <DropdownMenuItem>설정</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">로그아웃</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
```

## API Reference

[Reka UI Dropdown Menu](https://www.reka-ui.com/docs/components/dropdown-menu)를 래핑합니다. DropdownMenuContent 는 포털·정렬·애니메이션 기본값(align start, sideOffset 4)을 포함합니다. as / asChild 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### DropdownMenu

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| open | — | boolean | 열림(제어). v-model:open 과 바인딩합니다. |
| defaultOpen | false | boolean | 초기 열림(비제어). |
| modal | true | boolean | 포커스 트랩·바깥 상호작용 처리. |
| dir | — | ltr \| rtl | 읽기 방향. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:open | [value: boolean] | 열림 변경. |

---

### DropdownMenuTrigger

#### Slots

| Slot | Description |
| --- | --- |
| default | 메뉴를 여는 버튼 등. |

---

### DropdownMenuContent

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| align | start | start \| center \| end | 트리거 기준 가로 정렬. |
| side | bottom | top \| right \| bottom \| left | 펼쳐지는 방향. |
| sideOffset | 4 | number | 트리거와 간격(px). |
| alignOffset | 0 | number | 정렬축 오프셋. |
| class | — | string | 메뉴 패널에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | MenuItem, Label, Separator 등. |

---

### DropdownMenuItem

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| variant | default | default \| destructive | 강조 스타일. |
| disabled | false | boolean | 항목 비활성화. |
| inset | false | boolean | 좌측 들여쓰기(체크·라디오용). |
| class | — | string | 항목에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 메뉴 라벨·아이콘. |

---

### DropdownMenuLabel / DropdownMenuSeparator / DropdownMenuGroup

레이블·구분선·그룹 래퍼입니다. class 로 스타일 병합, CheckboxItem·RadioGroup·Sub 메뉴 등 하위 컴포넌트도 동일 패키지에서 export 됩니다.

---

고급 옵션은 [Reka UI Dropdown Menu](https://www.reka-ui.com/docs/components/dropdown-menu)를 참고하세요.
