---
title: Breadcrumb
description: 현재 페이지 위치를 나타내는 탐색 경로(브레드크럼).
order: 6
category: components
---

:demo-breadcrumb

## 사용 예시

```vue
<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@whalerice/nuxt-ui/breadcrumb";
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">홈</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/products">상품</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>무선 이어폰</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
```

## API Reference

`Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbPage`, `BreadcrumbSeparator`, `BreadcrumbEllipsis` 로 구성됩니다. 시맨틱 `<nav aria-label="breadcrumb">` + `<ol>` 구조이며, `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Breadcrumb

루트 `<nav>` 래퍼.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | `<nav>`에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | `BreadcrumbList` 등 자식. |

---

### BreadcrumbList

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | `<ol>`에 병합 (가로 flex·줄바꿈 기본). |

#### Slots

| Slot | Description |
| --- | --- |
| default | 항목·구분자 시퀀스. |

---

### BreadcrumbItem

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | `<li>`에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 링크 또는 현재 페이지. |

---

### BreadcrumbLink

이전 단계로 이동하는 링크. 기본 태그는 `a`입니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 링크에 병합 (`hover:text-foreground` 기본). |

#### Slots

| Slot | Description |
| --- | --- |
| default | 링크 라벨. |

`href` 등은 링크 속성으로 전달합니다.

---

### BreadcrumbPage

현재 페이지(비활성). `aria-current="page"`가 붙습니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | `<span>`에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 현재 페이지 제목. |

---

### BreadcrumbSeparator

항목 사이 구분자. 기본 아이콘: `ChevronRight`.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 구분 `<li>`에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 커스텀 구분 아이콘·문자. |

---

### BreadcrumbEllipsis

긴 경로를 줄일 때 생략 표시(`…`). 스크린리더용 "More" 텍스트 포함.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 생략 래퍼에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 커스텀 생략 아이콘. |
