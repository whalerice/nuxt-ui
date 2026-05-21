---
title: Alert
description: 강조 알림 박스. 제목·설명·아이콘으로 상태나 안내를 표시합니다.
order: 1
category: components
---

:demo-alert

## 사용 예시

```vue
<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from "@whalerice/nuxt-ui/alert";
</script>

<template>
  <Alert>
    <AlertTitle>알려드립니다</AlertTitle>
    <AlertDescription>
      중요한 안내를 짧게 전달할 때 사용합니다.
    </AlertDescription>
  </Alert>
</template>
```

## API Reference

`Alert`, `AlertTitle`, `AlertDescription`, `AlertAction` 네 컴포넌트로 구성됩니다. Reka UI 프리미티브가 아니라 shadcn-vue 스타일의 **정적 알림 박스**이며, `role="alert"`가 루트에 붙습니다.

### Alert

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| variant | `'default'` | `'default' \| 'destructive'` | 시각적 강조 스타일. |
| class | — | `string` | 루트에 병합 (`alertVariants` 기본 그리드·보더와 병합). |

#### Slots

| Slot | Description |
| --- | --- |
| default | 제목·설명·아이콘·액션 등 자식 전체. |

#### 아이콘 배치

아이콘은 **이름 있는 슬롯이 없습니다.** `Alert` 직계 자식으로 SVG(예: `lucide-vue-next` 아이콘)를 넣으면 그리드가 자동 정렬됩니다.

```vue
<Alert>
  <CheckCircle2Icon class="text-emerald-600" />
  <AlertTitle>성공</AlertTitle>
  <AlertDescription>저장되었습니다.</AlertDescription>
</Alert>
```

---

### AlertTitle

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 제목에 병합 (`font-medium`, 아이콘 있을 때 열 정렬 등 기본 포함). |

#### Slots

| Slot | Description |
| --- | --- |
| default | 알림 제목 텍스트. |

---

### AlertDescription

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 본문에 병합 (`text-muted-foreground text-sm` 기본). `variant="destructive"`일 때 destructive 톤이 연동됩니다. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 설명 본문(문단·리스트 등). |

---

### AlertAction

우측 상단 고정 액션 영역(닫기 버튼 등). `Alert`에 `AlertAction`이 있으면 본문 오른쪽 패딩이 넓어집니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 액션 래퍼에 병합 (`absolute top-2 right-2` 기본). |

#### Slots

| Slot | Description |
| --- | --- |
| default | 버튼·링크 등 액션 UI. |

```vue
<Alert>
  <AlertTitle>알림</AlertTitle>
  <AlertDescription>내용</AlertDescription>
  <AlertAction>
    <Button variant="ghost" size="icon-sm">…</Button>
  </AlertAction>
</Alert>
```
