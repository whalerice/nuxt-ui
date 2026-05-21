---
title: Progress
description: 작업·로딩 진행률을 시각적으로 표시하는 프로그레스 바.
order: 28
category: components
---

:demo-progress

## 사용 예시

```vue
<script setup lang="ts">
import { Progress } from "@whalerice/nuxt-ui/progress";
</script>

<template>
  <Progress :model-value="66" />
</template>
```

## API Reference

[Reka UI Progress](https://www.reka-ui.com/docs/components/progress)를 래핑합니다. `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Progress

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | `0` | `number \| null` | 현재 진행 값. `v-model`과 바인딩합니다. |
| max | `100` | `number` | 최대값. |
| getValueLabel | — | `(value, max) => string` | 접근성용 값 라벨 포맷. |
| getValueText | — | `(value, max) => string` | 스크린리더용 값 텍스트. |
| class | — | `string` | 루트 트랙에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | `[value: string[] \| undefined]` | 진행 값 변경(Reka UI 타입). |
| update:max | `[value: number]` | 최대값 변경. |

---

고급 옵션·접근성은 [Reka UI Progress](https://www.reka-ui.com/docs/components/progress)를 참고하세요.
