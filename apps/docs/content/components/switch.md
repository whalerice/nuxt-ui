---
title: Switch
description: 켜짐/꺼짐 상태를 전환하는 토글 스위치.
order: 39
category: components
---

:demo-switch

## 사용 예시

```vue
<script setup lang="ts">
import { Label } from "@whalerice/nuxt-ui/label";
import { Switch } from "@whalerice/nuxt-ui/switch";
</script>

<template>
  <div class="flex items-center gap-2">
    <Switch id="airplane" />
    <Label for="airplane">비행기 모드</Label>
  </div>
</template>
```

## API Reference

[Reka UI Switch](https://www.reka-ui.com/docs/components/switch)를 래핑합니다. `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Switch

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | — | `boolean \| null` | 켜짐 상태. `v-model`과 바인딩합니다. |
| defaultValue | — | `boolean` | 초기 상태(비제어). |
| disabled | `false` | `boolean` | 상호작용 비활성화. |
| size | `'default'` | `'sm' \| 'default'` | 스위치·썸 크기. |
| id | — | `string` | 루트 `id`(라벨 `for` 연결). |
| name | — | `string` | 폼 제출 시 name. |
| required | `false` | `boolean` | 폼 필수 여부. |
| value | — | `string` | 제출 시 값(켜짐). |
| trueValue | — | `boolean` | 켜짐일 때 `modelValue`(기본 `true`). |
| falseValue | — | `boolean` | 꺼짐일 때 `modelValue`(기본 `false`). |
| class | — | `string` | 루트에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | `[payload: boolean]` | 상태 변경. |

#### Slots

| Slot | Description |
| --- | --- |
| thumb | 썸 내부 커스텀 콘텐츠. |

---

고급 옵션·접근성은 [Reka UI Switch](https://www.reka-ui.com/docs/components/switch)를 참고하세요.
