---
title: Avatar
description: 사용자·엔티티를 나타내는 원형 프로필 이미지. 로딩 실패 시 대체 이니셜을 표시합니다.
order: 4
category: components
---

:demo-avatar

## 사용 예시

```vue
<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@whalerice/nuxt-ui/avatar";
</script>

<template>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="사용자" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</template>
```

## API Reference

`Avatar`, `AvatarImage`, `AvatarFallback` 세 컴포넌트로 기본 프로필 UI를 구성합니다. 동작은 [Reka UI Avatar](https://www.reka-ui.com/docs/components/avatar)를 기반으로 하며, `as` / `asChild` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Avatar

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| size | `'default'` | `'sm' \| 'default' \| 'lg'` | 아바타 크기. |
| class | — | `string` | 루트에 병합 (`rounded-full`, 크기 변형 포함). |

#### Slots

| Slot | Description |
| --- | --- |
| default | `AvatarImage`, `AvatarFallback` 등 자식. |

---

### AvatarImage

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| src | — | `string` | **필수.** 이미지 URL. |
| referrerPolicy | — | `string` | `<img>` `referrerpolicy`. |
| crossOrigin | — | `string` | `<img>` `crossorigin`. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| loadingStatusChange | `[value: 'idle' \| 'loading' \| 'loaded' \| 'error']` | 이미지 로딩 상태 변경. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 이미지 대체 콘텐츠(선택). |

---

### AvatarFallback

이미지가 없거나 로드에 실패했을 때 표시됩니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| delayMs | — | `number` | 지정 시 해당 ms 이후에만 폴백을 렌더(느린 연결 대비). |
| class | — | `string` | 폴백에 병합 (`bg-muted`, 이니셜 정렬 기본). |

#### Slots

| Slot | Description |
| --- | --- |
| default | 이니셜·아이콘 등 대체 UI. |

---

고급 옵션·접근성은 [Reka UI Avatar](https://www.reka-ui.com/docs/components/avatar)를 참고하세요.
