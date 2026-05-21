---
title: Separator
description: 콘텐츠 영역을 나누는 수평·수직 구분선.
order: 34
category: components
---

:demo-separator

## 사용 예시

```vue
<script setup lang="ts">
import { Separator } from "@whalerice/nuxt-ui/separator";
</script>

<template>
  <div>
    <div class="space-y-1">
      <h4 class="text-sm font-medium">Whalerice DS</h4>
      <p class="text-muted-foreground text-sm">컴포넌트 문서</p>
    </div>
    <Separator class="my-4" />
    <p class="text-sm">구분선 아래 콘텐츠</p>
  </div>
</template>
```

## API Reference

[Reka UI Separator](https://www.reka-ui.com/docs/components/separator)를 래핑합니다. `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Separator

#### Props

| Prop        | Default        | Type                         | Description                                  |
| ----------- | -------------- | ---------------------------- | -------------------------------------------- |
| orientation | `'horizontal'` | `'horizontal' \| 'vertical'` | 구분선 방향.                                 |
| decorative  | `true`         | `boolean`                    | `true`면 접근성 트리에서 장식용으로 처리.    |
| class       | —              | `string`                     | 루트에 병합 (`bg-border`, 방향별 크기 기본). |

#### Slots

| Slot    | Description                            |
| ------- | -------------------------------------- |
| default | 구분선 안쪽 콘텐츠(선택, 드물게 사용). |

---

고급 옵션·접근성은 [Reka UI Separator](https://www.reka-ui.com/docs/components/separator)를 참고하세요.
