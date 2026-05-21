---
title: Navigation Menu
description: 사이트 상단 내비게이션. 호버·클릭으로 하위 패널을 펼칩니다.
order: 25
category: components
---

:demo-navigation-menu

## 사용 예시

```vue
<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@whalerice/nuxt-ui/navigation-menu";
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>시작하기</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid gap-2 p-4 md:w-[280px]">
            <li>
              <NavigationMenuLink href="#">소개</NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink href="#">설치</NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">문서</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
```

## API Reference

[Reka UI Navigation Menu](https://www.reka-ui.com/docs/components/navigation-menu)를 래핑합니다. NavigationMenu 는 기본으로 viewport(공유 패널 영역)를 렌더합니다. as / asChild 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### NavigationMenu

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | — | string | 활성 트리거 값(제어). |
| defaultValue | — | string | 초기 활성(비제어). |
| delayDuration | 200 | number | 호버 시 열림 지연(ms). |
| skipDelayDuration | 300 | number | 다른 항목으로 이동 시 지연(ms). |
| viewport | true | boolean | 공유 Viewport 렌더 여부. |
| class | — | string | 루트에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | [value: string] | 활성 항목 변경. |

---

### NavigationMenuList / NavigationMenuItem

가로 목록·항목 래퍼입니다. class 로 간격·정렬을 병합합니다.

---

### NavigationMenuTrigger

navigationMenuTriggerStyle 이 적용된 트리거입니다. ChevronDown 아이콘이 포함됩니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 트리거에 병합. |

---

### NavigationMenuContent

하위 링크·카드 그리드 등을 담는 패널입니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 패널에 병합. |

---

### NavigationMenuLink

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| active | false | boolean | 현재 페이지 강조. |
| class | — | string | 링크에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 링크 텍스트. |

---

NavigationMenuIndicator, NavigationMenuViewport 도 export 됩니다. 고급 옵션은 [Reka UI Navigation Menu](https://www.reka-ui.com/docs/components/navigation-menu)를 참고하세요.
