---
title: Card
description: 제목·설명·본문·푸터로 구성된 콘텐츠 카드 레이아웃.
order: 9
category: components
---

:demo-card

## 사용 예시

```vue
<script setup lang="ts">
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@whalerice/nuxt-ui/card";
import { Button } from "@whalerice/nuxt-ui/button";
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>프로젝트 개요</CardTitle>
      <CardDescription>팀 대시보드에 표시할 요약 카드입니다.</CardDescription>
      <CardAction>
        <Button variant="outline" size="sm">편집</Button>
      </CardAction>
    </CardHeader>
    <CardContent>
      <p>본문 콘텐츠를 여기에 배치합니다.</p>
    </CardContent>
    <CardFooter>
      <Button>저장</Button>
    </CardFooter>
  </Card>
</template>
```

## API Reference

`Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter` 일곱 컴포넌트로 구성됩니다. Reka UI 프리미티브가 아니라 shadcn-vue 스타일의 **정적 레이아웃** 컴포넌트입니다.

### Card

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| size | `'default'` | `'default' \| 'sm'` | 카드 패딩·간격 크기. |
| class | — | `string` | 루트에 병합 (`rounded-xl`, `ring-1` 기본). |

#### Slots

| Slot | Description |
| --- | --- |
| default | 헤더·본문·푸터 등 자식 전체. |

---

### CardHeader

헤더 영역. `CardAction`이 있으면 그리드가 `1fr auto`로 정렬됩니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 헤더에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 제목·설명·액션. |

---

### CardTitle

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 제목에 병합 (`font-medium` 기본). |

#### Slots

| Slot | Description |
| --- | --- |
| default | 카드 제목. |

---

### CardDescription

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 설명에 병합 (`text-muted-foreground text-sm` 기본). |

#### Slots

| Slot | Description |
| --- | --- |
| default | 부제·요약 텍스트. |

---

### CardAction

헤더 우측 상단 액션 영역.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 액션 래퍼에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 버튼·메뉴 등. |

---

### CardContent

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 본문에 병합 (`px-4` 기본). |

#### Slots

| Slot | Description |
| --- | --- |
| default | 카드 본문. |

---

### CardFooter

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 푸터에 병합 (`border-t`, `bg-muted/50` 기본). |

#### Slots

| Slot | Description |
| --- | --- |
| default | 하단 액션·메타 정보. |
