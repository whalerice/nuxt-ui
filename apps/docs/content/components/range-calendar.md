---
title: Range Calendar
description: 시작·종료 날짜 범위를 선택하는 달력 UI.
order: 30
category: components
---

:demo-range-calendar

## 사용 예시

```vue
<script setup lang="ts">
import { RangeCalendar } from "@whalerice/nuxt-ui/range-calendar";
import type { DateRange } from "reka-ui";

const range = ref<DateRange>();
</script>

<template>
  <RangeCalendar v-model="range" class="rounded-md border" />
</template>
```

## API Reference

`RangeCalendar`는 헤더·그리드·범위 선택 셀을 포함한 **합성 루트**입니다. [Reka UI Range Calendar](https://www.reka-ui.com/docs/components/range-calendar)를 기반으로 합니다.

### RangeCalendar

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | — | DateRange \| null | 선택 범위(제어). v-model과 바인딩합니다. |
| defaultValue | start/end undefined | DateRange | 초기 범위(비제어). |
| placeholder | — | DateValue | 표시할 달(제어). |
| defaultPlaceholder | — | DateValue | 초기 placeholder(비제어). |
| disabled | false | boolean | 달력 전체 비활성화. |
| readonly | false | boolean | 읽기 전용. |
| locale | — | string | 날짜 포맷 로케일. |
| minValue | — | DateValue | 선택 가능한 최소 날짜. |
| maxValue | — | DateValue | 선택 가능한 최대 날짜. |
| maximumDays | — | number | 범위에 포함될 수 있는 최대 일 수. |
| numberOfMonths | 1 | number | 동시에 표시할 달 수. |
| pagedNavigation | false | boolean | 이전/다음이 numberOfMonths 단위로 이동. |
| fixedWeeks | false | boolean | 항상 6주 행 표시. |
| allowNonContiguousRanges | false | boolean | 비연속 범위 선택 허용. |
| fixedDate | — | start \| end | 고정할 범위 끝(다른 끝만 조정). |
| isDateDisabled | — | Matcher | 비활성 날짜 판별 함수. |
| isDateUnavailable | — | Matcher | 선택 불가 날짜 판별 함수. |
| class | — | string | 루트에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | DateRange | 선택 범위 변경. |
| update:placeholder | DateValue | 표시 중인 달 변경. |
| update:startValue | DateValue | 범위 시작일 변경. |
| update:validModelValue | DateRange | 유효한 범위가 완성될 때. |

---

### RangeCalendarCellTrigger

범위 내 날짜 버튼. `RangeCalendar` 내부에서 자동 렌더됩니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| day | — | DateValue | **필수.** 셀 날짜. |
| month | — | DateValue | **필수.** 셀이 속한 달. |
| class | — | string | 트리거에 병합. |

---

고급 옵션·접근성은 [Reka UI Range Calendar](https://www.reka-ui.com/docs/components/range-calendar)를 참고하세요.
