---
title: Accordion
description: 접이식 패널 그룹. 각 제목을 눌러 내용을 펼치거나 접습니다.
order: 0
category: components
---

:demo-accordion

## 사용 예시

```vue
<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@whalerice/nuxt-ui/accordion";
</script>

<template>
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>접근성을 지원하나요?</AccordionTrigger>
      <AccordionContent> 네. WAI-ARIA 패턴을 따릅니다. </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
```

## API Reference

`Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` 네 컴포넌트로 구성됩니다. 동작은 [Reka UI Accordion](https://www.reka-ui.com/docs/components/accordion)을 기반으로 하며, `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Accordion

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| type | — | `'single' \| 'multiple'` | 한 번에 하나(`single`) 또는 여러 개(`multiple`)를 엽니다. |
| modelValue | — | `string \| string[]` | 열린 항목(제어). `v-model`과 바인딩합니다. |
| defaultValue | — | `string \| string[]` | 초기에 열릴 항목(비제어). |
| collapsible | `false` | `boolean` | `type="single"`일 때 열린 항목을 다시 눌러 닫을 수 있습니다. |
| disabled | `false` | `boolean` | 전체 아코디언 비활성화. |
| class | — | `string` | 루트에 병합 (`flex w-full flex-col` 기본). |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | `[value: string \| string[]]` | 열린 항목이 바뀔 때. |

---

### AccordionItem

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | — | `string` | **필수.** 항목 식별자(형제끼리 고유). |
| disabled | `false` | `boolean` | 이 항목만 비활성화. |
| class | — | `string` | 항목 래퍼에 병합 (`not-last:border-b` 기본). |

---

### AccordionTrigger

`AccordionHeader` + 트리거를 한 컴포넌트로 제공합니다. 제목은 시맨틱 `h3`로 렌더됩니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | 트리거 버튼 스타일. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 트리거 라벨(제목). |
| icon | 펼침/접힘 아이콘. 기본: `ChevronDown` / `ChevronUp`. |

---

### AccordionContent

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | `string` | **내부** 콘텐츠 래퍼(`div`)에 병합. 바깥 애니메이션 래퍼 클래스는 고정입니다. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 패널 본문. |

---

고급 옵션·접근성·`data-*` 스타일 훅은 [Reka UI Accordion](https://www.reka-ui.com/docs/components/accordion)을 참고하세요.
