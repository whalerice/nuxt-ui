---
title: Carousel
description: Embla 기반 슬라이드 캐러셀. 가로·세로 방향과 키보드 탐색을 지원합니다.
order: 10
category: components
---

:demo-carousel

## 사용 예시

```vue
<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@whalerice/nuxt-ui/carousel";
</script>

<template>
  <Carousel class="w-full max-w-xs">
    <CarouselContent>
      <CarouselItem v-for="n in 3" :key="n">
        <div class="flex aspect-square items-center justify-center rounded-lg border p-6">
          {{ n }}
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>
```

## API Reference

`Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext`로 구성됩니다. [Embla Carousel](https://www.embla-carousel.com/) 옵션을 `opts`로 전달합니다.

### Carousel

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| orientation | horizontal | horizontal \| vertical | 스크롤 방향. |
| opts | — | EmblaOptions | Embla 캐러셀 옵션(loop, align 등). |
| plugins | — | EmblaPluginType[] | Embla 플러그인 배열. |
| class | — | string | 루트에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| init-api | CarouselApi | Embla API 인스턴스 초기화 시. |

#### Slots

| Slot | Description |
| --- | --- |
| default | CarouselContent·이전/다음 버튼 등 자식. 스코프: canScrollNext, canScrollPrev, scrollNext, scrollPrev, carouselApi, orientation. |

#### Expose

| Name | Description |
| --- | --- |
| scrollNext | 다음 슬라이드로 이동. |
| scrollPrev | 이전 슬라이드로 이동. |
| canScrollNext | 다음 이동 가능 여부. |
| canScrollPrev | 이전 이동 가능 여부. |
| carouselApi | Embla API ref. |

---

### CarouselContent

슬라이드 트랙 래퍼. `useCarousel` 컨텍스트가 필요합니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 내부 flex 컨테이너에 병합. |

---

### CarouselItem

개별 슬라이드. basis-full로 한 장씩 표시됩니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 슬라이드 래퍼에 병합. |

---

### CarouselPrevious / CarouselNext

이전·다음 네비게이션 버튼(Button 래핑).

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| variant | outline | Button variant | 버튼 스타일. |
| size | icon-sm | Button size | 버튼 크기. |
| class | — | string | 버튼에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 아이콘·라벨(기본 ChevronLeft/Right). |

---

### useCarousel

`Carousel` 하위에서 Embla 상태·스크롤 함수에 접근하는 composable입니다.
