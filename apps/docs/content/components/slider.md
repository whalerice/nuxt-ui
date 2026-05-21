---
title: Slider
description: 드래그로 범위 안의 숫자 값을 선택합니다.
order: 37
category: components
---

:demo-slider

## 사용 예시

```vue
<script setup lang="ts">
import { Slider } from "@whalerice/nuxt-ui/slider";

const volume = ref([50]);
</script>

<template>
  <Slider v-model="volume" :max="100" :step="1" class="max-w-sm" />
</template>
```

## API Reference

[Reka UI Slider](https://www.reka-ui.com/docs/components/slider)를 래핑합니다. `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Slider

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | — | `number[] \| null` | 현재 값 배열(썸 개수). `v-model`과 바인딩합니다. |
| defaultValue | — | `number[]` | 초기 값(비제어). |
| disabled | `false` | `boolean` | 상호작용 비활성화. |
| orientation | `'horizontal'` | `'horizontal' \| 'vertical'` | 슬라이더 방향. |
| dir | — | `'ltr' \| 'rtl'` | 읽기 방향. |
| inverted | `false` | `boolean` | 시각적 반전. |
| min | `0` | `number` | 최소값. |
| max | `100` | `number` | 최대값. |
| step | `1` | `number` | 증감 단위. |
| minStepsBetweenThumbs | `0` | `number` | 다중 썸 시 최소 간격(스텝). |
| name | — | `string` | 폼 name. |
| required | `false` | `boolean` | 폼 필수 여부. |
| class | — | `string` | 루트에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | `[payload: number[]]` | 값 변경. |

단일 썸은 `v-model`에 `[50]` 형태의 배열을 사용합니다.

---

고급 옵션·접근성은 [Reka UI Slider](https://www.reka-ui.com/docs/components/slider)를 참고하세요.
