---
title: Pagination
description: 목록·테이블의 페이지 이동 컨트롤. 이전·다음·페이지 번호를 제공합니다.
order: 26
category: components
---

:demo-pagination

## 사용 예시

```vue
<script setup lang="ts">
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@whalerice/nuxt-ui/pagination";
</script>

<template>
  <Pagination
    v-slot="{ page }"
    :items-per-page="10"
    :total="100"
    :sibling-count="1"
    show-edges
    :default-page="2"
  >
    <PaginationContent v-slot="{ items }">
      <PaginationPrevious />

      <template v-for="(item, index) in items" :key="index">
        <PaginationItem
          v-if="item.type === 'page'"
          :value="item.value"
          :is-active="item.value === page"
        >
          {{ item.value }}
        </PaginationItem>
        <PaginationEllipsis v-else :index="index" />
      </template>

      <PaginationNext />
    </PaginationContent>
  </Pagination>
</template>
```

## API Reference

[Reka UI Pagination](https://www.reka-ui.com/docs/components/pagination)를 래핑합니다. Pagination + PaginationContent + PaginationItem 조합으로 페이지 버튼을 구성합니다. as / asChild 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Pagination

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| page | — | number | 현재 페이지(제어). v-model:page 와 바인딩합니다. |
| defaultPage | 1 | number | 초기 페이지(비제어). |
| total | 0 | number | 전체 항목 수. |
| itemsPerPage | — | number | **필수.** 페이지당 항목 수. |
| siblingCount | 2 | number | 현재 페이지 양옆에 보일 페이지 수. |
| showEdges | false | boolean | 첫·마지막 페이지와 말줄임표 항상 표시. |
| disabled | false | boolean | 전체 비활성화. |
| class | — | string | nav 루트에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:page | [value: number] | 페이지 변경. |

#### Slots

| Slot | Description |
| --- | --- |
| default | page, pageCount 슬롯 props 와 함께 PaginationContent. |

---

### PaginationContent

#### Slots

| Slot | Description |
| --- | --- |
| default | items 슬롯 props 로 페이지·말줄임 항목 배열. |

---

### PaginationItem

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | — | number | 페이지 번호. |
| isActive | false | boolean | 현재 페이지 강조. |
| size | icon | Button size 토큰 | 버튼 크기. |
| class | — | string | 항목에 병합. |

---

### PaginationPrevious / PaginationNext

이전·다음 페이지로 이동합니다. 기본 슬롯에 Chevron 아이콘과 Previous/Next 라벨이 있습니다.

### PaginationEllipsis

말줄임(…) 표시. index prop 으로 위치를 구분합니다.

### PaginationFirst / PaginationLast / PaginationLink

첫·마지막 페이지 점프, 링크 스타일 페이지 버튼용 보조 컴포넌트입니다.

---

고급 옵션은 [Reka UI Pagination](https://www.reka-ui.com/docs/components/pagination)를 참고하세요.
