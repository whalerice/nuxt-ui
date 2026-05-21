---
title: Collapsible
description: 트리거로 펼치거나 접을 수 있는 콘텐츠 영역.
order: 12
category: components
---

:demo-collapsible

## 사용 예시

```vue
<script setup lang="ts">
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@whalerice/nuxt-ui/collapsible";

const open = ref(false);
</script>

<template>
  <Collapsible v-model:open="open" class="w-full max-w-md">
    <CollapsibleTrigger class="font-medium">
      자세히 보기
    </CollapsibleTrigger>
    <CollapsibleContent class="pt-2 text-sm text-muted-foreground">
      접을 수 있는 본문입니다.
    </CollapsibleContent>
  </Collapsible>
</template>
```

## API Reference

`Collapsible`, `CollapsibleTrigger`, `CollapsibleContent` 세 컴포넌트로 구성됩니다. [Reka UI Collapsible](https://www.reka-ui.com/docs/components/collapsible)을 기반으로 하며, `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Collapsible

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| open | — | `boolean` | 펼침 상태(제어). `v-model:open`과 바인딩합니다. |
| defaultOpen | `false` | `boolean` | 초기 펼침(비제어). |
| disabled | `false` | `boolean` | 상호작용 비활성화. |
| unmountOnHide | `false` | `boolean` | 닫힐 때 콘텐츠 DOM을 제거합니다. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:open | `[value: boolean]` | 펼침 상태 변경. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 트리거·콘텐츠. `open` 상태 슬롯 props 제공. |

---

### CollapsibleTrigger

#### Slots

| Slot | Description |
| --- | --- |
| default | 펼침/접힘을 토글하는 트리거(기본 `button`). |

---

### CollapsibleContent

#### Slots

| Slot | Description |
| --- | --- |
| default | 접을 수 있는 본문. |

---

고급 옵션·접근성은 [Reka UI Collapsible](https://www.reka-ui.com/docs/components/collapsible)을 참고하세요.
