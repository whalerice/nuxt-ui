---
title: Menubar
description: 데스크톱 앱 스타일의 가로 메뉴바. 파일·편집 등 상단 메뉴에 사용합니다.
order: 23
category: components
---

:demo-menubar

## 사용 예시

```vue
<script setup lang="ts">
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@whalerice/nuxt-ui/menubar";
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>파일</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>새로 만들기</MenubarItem>
        <MenubarItem>열기</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>저장</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>편집</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>실행 취소</MenubarItem>
        <MenubarItem>다시 실행</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
```

## API Reference

[Reka UI Menubar](https://www.reka-ui.com/docs/components/menubar)를 래핑합니다. Menubar + MenubarMenu + MenubarTrigger + MenubarContent 조합이 기본입니다. as / asChild 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Menubar

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | — | string | 열린 메뉴 id(제어). |
| defaultValue | — | string | 초기 열린 메뉴(비제어). |
| loop | false | boolean | 키보드 포커스 루프. |
| dir | — | ltr \| rtl | 읽기 방향. |
| class | — | string | 루트 바에 병합(h-8, border 기본). |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | [value: string] | 활성 메뉴 변경. |

---

### MenubarMenu

개별 상위 메뉴(파일, 편집 등) 루트입니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | — | string | **필수.** 메뉴 식별자. |

---

### MenubarTrigger / MenubarContent / MenubarItem

Dropdown Menu 와 유사한 트리거·패널·항목 역할입니다. MenubarItem 은 disabled, inset, variant(destructive) 등을 지원합니다. CheckboxItem, RadioGroup, Sub, Shortcut 등도 export 됩니다.

---

고급 옵션은 [Reka UI Menubar](https://www.reka-ui.com/docs/components/menubar)를 참고하세요.
