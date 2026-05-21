---
title: Drawer
description: 화면 가장자리에서 슬라이드되는 패널. 모바일 친화적인 시트·필터 UI에 적합합니다.
order: 16
category: components
---

:demo-drawer

## 사용 예시

```vue
<script setup lang="ts">
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@whalerice/nuxt-ui/drawer";
import { Button } from "@whalerice/nuxt-ui/button";
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <Button variant="outline">드로어 열기</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>알림 설정</DrawerTitle>
        <DrawerDescription>
          받을 알림 종류를 선택하세요.
        </DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <DrawerClose as-child>
          <Button variant="outline">닫기</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>
```

## API Reference

Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose 로 구성됩니다. [vaul-vue](https://github.com/unovue/vaul-vue) DrawerRoot 를 래핑하며, 기본 방향은 bottom 입니다. as / asChild 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Drawer

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| open | — | boolean | 열림 상태(제어). v-model:open 과 바인딩합니다. |
| defaultOpen | false | boolean | 초기 열림(비제어). |
| shouldScaleBackground | true | boolean | 열릴 때 배경 스케일 애니메이션. |
| direction | bottom | top \| bottom \| left \| right | 슬라이드 방향. |
| modal | true | boolean | 모달 동작 여부. |
| class | — | string | 루트에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:open | [value: boolean] | 열림 상태 변경. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 트리거·콘텐츠. |

---

### DrawerTrigger

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 트리거에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 드로어를 여는 컨트롤. |

---

### DrawerContent

포털·오버레이·패널·하단 그립( bottom 일 때)을 포함합니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 패널에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 패널 본문. |

---

### DrawerHeader / DrawerFooter / DrawerTitle / DrawerDescription / DrawerClose

Dialog 와 동일한 레이아웃·텍스트 역할입니다. class 슬롯으로 스타일을 병합합니다.

---

고급 옵션은 [vaul-vue 문서](https://github.com/unovue/vaul-vue)를 참고하세요.
