---
title: Command
description: 검색 가능한 명령 팔레트. CommandInput으로 항목을 필터링합니다.
order: 13
category: components
---

:demo-command

## 사용 예시

```vue
<script setup lang="ts">
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@whalerice/nuxt-ui/command";
</script>

<template>
  <Command class="rounded-lg border shadow-md">
    <CommandInput placeholder="명령 검색…" />
    <CommandList>
      <CommandEmpty>결과가 없습니다.</CommandEmpty>
      <CommandGroup heading="제안">
        <CommandItem value="calendar">캘린더</CommandItem>
        <CommandItem value="settings">설정</CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</template>
```

## API Reference

[Reka UI Listbox](https://www.reka-ui.com/docs/components/listbox) 기반 명령 팔레트입니다. 검색 상태는 내부 `useCommand` 컨텍스트로 공유됩니다.

### Command

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| modelValue | '' | string | 선택된 항목 값(제어). |
| defaultValue | — | string | 초기 선택값(비제어). |
| multiple | false | boolean | 다중 선택. |
| disabled | false | boolean | 전체 비활성화. |
| class | — | string | 루트에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:modelValue | string \| string[] | 선택 항목 변경. |

#### Slots

| Slot | Description |
| --- | --- |
| default | CommandInput, CommandList 등 자식. |

---

### CommandInput

검색 필드. `filterState.search`와 양방향 바인딩됩니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 입력에 병합. |

ListboxFilter의 placeholder, disabled 등은 attrs로 전달할 수 있습니다.

---

### CommandList

스크롤 가능한 항목 목록 영역.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 리스트에 병합. |

---

### CommandGroup

항목 그룹. `heading`으로 라벨을 표시합니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| heading | — | string | 그룹 제목. |
| class | — | string | 그룹 래퍼에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | CommandItem 자식. |

---

### CommandItem

선택 가능한 명령 항목. 텍스트로 자동 필터링됩니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | — | string | **필수.** 항목 식별·선택 값. |
| disabled | false | boolean | 항목 비활성화. |
| class | — | string | 항목에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 항목 라벨·아이콘. 선택 시 Check 아이콘 표시. |

---

### CommandEmpty

검색어가 있고 결과가 없을 때만 표시됩니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 빈 상태 래퍼에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 빈 상태 메시지. |

---

### CommandSeparator

그룹·항목 사이 구분선.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 구분선에 병합. |

---

### CommandShortcut

항목 우측 단축키 힌트(예: ⌘K).

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 단축키 텍스트에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 단축키 문자열. |

---

### CommandDialog

Command를 Dialog 안에 띄울 때 사용합니다. Dialog + Command 조합 래퍼입니다.
