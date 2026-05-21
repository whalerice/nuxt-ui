---
title: Tabs
description: 탭으로 패널을 전환하는 인터페이스.
order: 41
category: components
---

:demo-tabs

## 사용 예시

```vue
<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@whalerice/nuxt-ui/tabs";
</script>

<template>
  <Tabs default-value="account" class="w-full max-w-md">
    <TabsList>
      <TabsTrigger value="account">계정</TabsTrigger>
      <TabsTrigger value="password">비밀번호</TabsTrigger>
    </TabsList>
    <TabsContent value="account">계정 설정 내용</TabsContent>
    <TabsContent value="password">비밀번호 변경 내용</TabsContent>
  </Tabs>
</template>
```

## API Reference

`Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` 네 컴포넌트로 구성됩니다. [Reka UI Tabs](https://www.reka-ui.com/docs/components/tabs)를 기반으로 하며, `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Tabs

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | — | `string \| number` | 활성 탭(제어). `v-model`과 바인딩합니다. |
| defaultValue | — | `string \| number` | 초기 탭(비제어). |
| orientation | `'horizontal'` | `'horizontal' \| 'vertical'` | 탭·콘텐츠 배치·화살표 키 방향. |
| dir | — | `'ltr' \| 'rtl'` | 읽기 방향. |
| activationMode | `'automatic'` | `'automatic' \| 'manual'` | 포커스 시 자동 전환 여부. |
| unmountOnHide | `true` | `boolean` | 비활성 패널 DOM 제거. |
| class | — | `string` | 루트에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | `[payload: string \| number]` | 활성 탭 변경. |

---

### TabsList

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| variant | `'default'` | `'default' \| 'line'` | 탭 목록 스타일. |
| loop | `true` | `boolean` | 포커스 루프. |
| class | — | `string` | 목록에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | `TabsTrigger` 항목. |

---

### TabsTrigger

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | — | `string \| number` | **필수.** 연결할 `TabsContent` 값. |
| disabled | `false` | `boolean` | 이 탭만 비활성화. |
| class | — | `string` | 트리거에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 탭 라벨·아이콘. |

---

### TabsContent

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | — | `string \| number` | **필수.** 연결된 트리거 값. |
| forceMount | — | `boolean` | 비활성이어도 DOM에 유지. |
| class | — | `string` | 패널에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 탭 패널 본문. |

---

고급 옵션·접근성은 [Reka UI Tabs](https://www.reka-ui.com/docs/components/tabs)를 참고하세요.
