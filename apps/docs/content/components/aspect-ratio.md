---
title: Aspect Ratio
description: 콘텐츠 영역의 가로·세로 비율을 고정합니다. 반응형 미디어 레이아웃에 사용합니다.
order: 3
category: components
---

:demo-aspect-ratio

## 사용 예시

```vue
<script setup lang="ts">
import { AspectRatio } from "@whalerice/nuxt-ui/aspect-ratio";
</script>

<template>
  <div class="w-[320px] overflow-hidden rounded-lg border">
    <AspectRatio :ratio="16 / 9">
      <img
        src="https://picsum.photos/800/450"
        alt="샘플"
        class="size-full object-cover"
      />
    </AspectRatio>
  </div>
</template>
```

## API Reference

[Reka UI Aspect Ratio](https://www.reka-ui.com/docs/components/aspect-ratio)를 래핑합니다. `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### AspectRatio

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| ratio | `1` | `number` | 가로÷세로 비율(예: `16/9` → `16 / 9`). |
| class | — | `string` | 루트에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 비율 박스 안 콘텐츠(이미지·비디오 등). |

---

고급 옵션은 [Reka UI Aspect Ratio](https://www.reka-ui.com/docs/components/aspect-ratio)를 참고하세요.
