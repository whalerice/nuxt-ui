---
title: Dialog
description: 트리거로 열고 닫는 모달 대화상자. 폼·설정·확인 UI에 사용합니다.
order: 15
category: components
---

:demo-dialog

## 사용 예시

```vue
<script setup lang="ts">
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@whalerice/nuxt-ui/dialog";
import { Button } from "@whalerice/nuxt-ui/button";
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">대화상자 열기</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>프로필 수정</DialogTitle>
        <DialogDescription>
          이름과 이메일을 변경한 뒤 저장하세요.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose as-child>
          <Button variant="outline">취소</Button>
        </DialogClose>
        <Button>저장</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
```

## API Reference

Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose 등으로 구성됩니다. 루트·콘텐츠 동작은 [Reka UI Dialog](https://www.reka-ui.com/docs/components/dialog)를 기반으로 하며, DialogContent는 포털·오버레이·닫기 버튼을 내장합니다. as / asChild 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Dialog

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| open | — | boolean | 열림 상태(제어). v-model:open 과 바인딩합니다. |
| defaultOpen | false | boolean | 초기 열림(비제어). |
| modal | true | boolean | true 이면 바깥 상호작용이 차단됩니다. |
| class | — | string | 루트에 병합. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| update:open | [value: boolean] | 열림 상태가 바뀔 때. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 트리거·콘텐츠 등 자식. open, close 슬롯 props 제공. |

---

### DialogTrigger

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 트리거에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 대화상자를 여는 컨트롤(보통 Button). |

---

### DialogContent

포털·오버레이·패널·선택적 닫기(X) 버튼을 한 번에 렌더합니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| showCloseButton | true | boolean | 우측 상단 닫기 버튼 표시. |
| class | — | string | 콘텐츠 패널에 병합. |
| forceMount | — | boolean | 애니메이션 제어용 강제 마운트. |
| disableOutsidePointerEvents | — | boolean | 바깥 포인터 이벤트 차단. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| escapeKeyDown | [event: KeyboardEvent] | Esc 키. preventDefault 로 막을 수 있습니다. |
| pointerDownOutside | [event] | 바깥 클릭. |
| focusOutside | [event] | 포커스가 바깥으로 나갈 때. |
| openAutoFocus | [event: Event] | 열릴 때 자동 포커스. |
| closeAutoFocus | [event: Event] | 닫힐 때 자동 포커스. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 패널 본문. |

---

### DialogHeader / DialogFooter

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 레이아웃 래퍼에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 제목·설명·버튼 등. |

---

### DialogTitle / DialogDescription

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 텍스트에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 제목 또는 설명 문구. |

---

### DialogClose

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 닫기 컨트롤에 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 닫기 버튼 등. |

---

고급 옵션·접근성·data-* 스타일 훅은 [Reka UI Dialog](https://www.reka-ui.com/docs/components/dialog)를 참고하세요.
