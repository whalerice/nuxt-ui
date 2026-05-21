---
title: Calendar
description: 단일 날짜를 선택하는 달력 UI. @internationalized/date 기반 DateValue를 사용합니다.
order: 8
category: components
---

:demo-calendar

## 사용 예시

```vue
<script setup lang="ts">
import { Calendar } from "@whalerice/nuxt-ui/calendar";
import type { DateValue } from "@internationalized/date";

const value = ref<DateValue>();
</script>

<template>
  <Calendar v-model="value" class="rounded-md border" />
</template>
```

`@internationalized/date` 패키지가 필요합니다. 날짜 연산·로케일은 [해당 문서](https://react-spectrum.adobe.com/internationalized/date/index.html)를 참고하세요.

## API Reference

`Calendar`는 헤더·그리드·셀 트리거를 포함한 **합성 루트**입니다. 동작은 [Reka UI Calendar](https://www.reka-ui.com/docs/components/calendar)를 기반으로 하며, `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Calendar

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | — | DateValue \| DateValue[] | 선택된 날짜(제어). v-model과 바인딩합니다. |
| defaultValue | — | DateValue \| DateValue[] | 초기 선택값(비제어). |
| placeholder | — | DateValue | 표시할 달(제어). v-model:placeholder와 바인딩합니다. |
| defaultPlaceholder | — | DateValue | 초기 placeholder(비제어). |
| multiple | false | boolean | 여러 날짜 선택 허용. |
| disabled | false | boolean | 달력 전체 비활성화. |
| readonly | false | boolean | 읽기 전용. |
| locale | — | string | 날짜 포맷 로케일. |
| minValue | — | DateValue | 선택 가능한 최소 날짜. |
| maxValue | — | DateValue | 선택 가능한 최대 날짜. |
| numberOfMonths | 1 | number | 동시에 표시할 달 수. |
| pagedNavigation | false | boolean | 이전/다음이 한 달이 아닌 numberOfMonths 단위로 이동. |
| fixedWeeks | false | boolean | 항상 6주 행 표시. |
| weekStartsOn | — | 0–6 | 주 시작 요일. |
| weekdayFormat | narrow | narrow \| short \| long | 요일 라벨 형식. |
| isDateDisabled | — | Matcher | 비활성 날짜 판별 함수. |
| isDateUnavailable | — | Matcher | 선택 불가 날짜 판별 함수. |
| layout | — | month-and-year \| month-only \| year-only | 헤더 월·연 선택 UI 레이아웃. |
| yearRange | — | DateValue[] | layout 사용 시 연도 드롭다운 범위. |
| class | — | string | 루트에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | DateValue \| DateValue[] | 선택 날짜 변경. |
| update:placeholder | DateValue | 표시 중인 달 변경. |

#### Slots

| Slot | Description |
| --- | --- |
| calendar-prev-icon | 이전 달 버튼 아이콘. |
| calendar-next-icon | 다음 달 버튼 아이콘. |
| calendar-heading | 헤더 제목 영역(월·연 커스텀). |

---

### CalendarCellTrigger

개별 날짜 버튼. 보통 `Calendar` 내부에서 자동 렌더됩니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| day | — | DateValue | **필수.** 셀 날짜. |
| month | — | DateValue | **필수.** 셀이 속한 달. |
| class | — | string | 트리거 버튼에 병합. |

---

고급 옵션·접근성·키보드 조작은 [Reka UI Calendar](https://www.reka-ui.com/docs/components/calendar)를 참고하세요.
