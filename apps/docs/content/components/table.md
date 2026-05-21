---
title: Table
description: 시맨틱 HTML 테이블 스타일 래퍼. 헤더·본문·셀로 데이터 표를 구성합니다.
order: 40
category: components
---

:demo-table

## 사용 예시

```vue
<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@whalerice/nuxt-ui/table";
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>이름</TableHead>
        <TableHead>상태</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>홍길동</TableCell>
        <TableCell>활성</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
```

## API Reference

Reka UI 프리미티브가 아닌 **시맨틱 table 마크업 + Tailwind** 조합입니다. `Table`은 가로 스크롤 컨테이너를 포함합니다.

### Table

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | table 요소에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | TableHeader, TableBody, TableCaption, TableFooter 등. |

---

### TableHeader

thead 래퍼.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | thead에 병합. |

---

### TableBody

tbody 래퍼.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | tbody에 병합. |

---

### TableFooter

tfoot 래퍼.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | tfoot에 병합. |

---

### TableRow

tr 행.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | tr에 병합(hover·selected 스타일 기본). |

---

### TableHead

th 헤더 셀.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | th에 병합. |

---

### TableCell

td 데이터 셀.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | td에 병합. |

---

### TableCaption

table caption.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | caption에 병합. |

---

### TableEmpty

데이터가 없을 때 colspan 행을 표시하는 헬퍼(선택).
