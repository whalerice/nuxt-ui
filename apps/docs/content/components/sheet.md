---
title: Sheet
description: 화면 측면에서 슬라이드되는 패널. 보조 내비·필터·상세 패널에 사용합니다.
order: 35
category: components
---

:demo-sheet

## 사용 예시

```vue
<script setup lang="ts">
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@whalerice/nuxt-ui/sheet";
import { Button } from "@whalerice/nuxt-ui/button";
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline">시트 열기</Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>공유</SheetTitle>
        <SheetDescription>
          링크를 복사해 팀원과 공유하세요.
        </SheetDescription>
      </SheetHeader>
      <SheetClose as-child>
        <Button class="mt-4" variant="outline">닫기</Button>
      </SheetClose>
    </SheetContent>
  </Sheet>
</template>
```

## API Reference

Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose 로 구성됩니다. [Reka UI Dialog](https://www.reka-ui.com/docs/components/dialog) 계열 포털·오버레이 패턴을 side 슬라이드로 스타일링합니다. as / asChild 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Sheet

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| open | — | boolean | 열림 상태(제어). v-model:open 과 바인딩합니다. |
| defaultOpen | false | boolean | 초기 열림(비제어). |
| modal | true | boolean | 모달 동작 여부. |
| class | — | string | 루트에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:open | [value: boolean] | 열림 상태 변경. |

---

### SheetContent

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| side | right | top \| right \| bottom \| left | 슬라이드 방향. |
| showCloseButton | true | boolean | 닫기(X) 버튼 표시. |
| class | — | string | 패널에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 시트 본문. |

---

### SheetTrigger / SheetHeader / SheetFooter / SheetTitle / SheetDescription / SheetClose

Dialog 와 동일한 조합 패턴입니다. class 로 레이아웃·텍스트 스타일을 병합합니다.

---

고급 옵션은 [Reka UI Dialog](https://www.reka-ui.com/docs/components/dialog)를 참고하세요.
