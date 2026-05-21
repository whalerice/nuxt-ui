---
title: Sonner
description: vue-sonner 기반 토스트 알림. 성공·오류·로딩 등 짧은 피드백을 표시합니다.
order: 38
category: components
---

:demo-sonner

## 사용 예시

앱 루트(예: `app.vue`)에 토스터를 한 번 마운트한 뒤, 어디서든 `toast()` 를 호출합니다.

```vue
<script setup lang="ts">
import { toast } from "vue-sonner";
</script>

<template>
  <div>
    <Button @click="toast('저장되었습니다.')">토스트 표시</Button>
    <Sonner />
  </div>
</template>
```

```ts
import { toast } from "vue-sonner";

toast.success("업로드 완료");
toast.error("네트워크 오류");
toast.promise(fetchData(), {
  loading: "불러오는 중…",
  success: "완료",
  error: "실패",
});
```

패키지 export 이름은 Toaster 이고, Nuxt 자동 등록 시 컴포넌트 태그는 Sonner 입니다.

## API Reference

[vue-sonner](https://github.com/wobsoriano/vue-sonner) Toaster 를 테마 CSS 변수·Lucide 아이콘으로 스타일링한 래퍼입니다.

### Sonner (Toaster)

#### Props (주요)

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| position | bottom-right | top-left \| top-center \| top-right \| bottom-left \| bottom-center \| bottom-right | 토스트 위치. |
| theme | system | light \| dark \| system | 색 테마. |
| richColors | false | boolean | 타입별 강조 색. |
| expand | false | boolean | 호버 시 스택 펼침. |
| visibleToasts | 3 | number | 동시에 보일 최대 개수. |
| closeButton | false | boolean | 닫기 버튼 표시. |
| duration | 4000 | number | 기본 표시 시간(ms). |
| gap | 14 | number | 토스트 간격(px). |
| dir | ltr | ltr \| rtl | 읽기 방향. |
| class | — | string | 토스터 루트에 병합. |
| toastOptions | — | object | 개별 토스트 기본 class·duration 등. |

#### Slots (vue-sonner)

| Slot | Description |
| --- | --- |
| success-icon | 성공 아이콘. 기본: CircleCheck. |
| error-icon | 오류 아이콘. |
| warning-icon | 경고 아이콘. |
| info-icon | 정보 아이콘. |
| loading-icon | 로딩 아이콘. |
| close-icon | 닫기 아이콘. |

---

### toast() API

| 호출 | Description |
| --- | --- |
| toast(message) | 기본 토스트. |
| toast.success / error / warning / info | 타입별 토스트. |
| toast.promise(promise, messages) | 비동기 상태 토스트. |
| toast.loading | 로딩 토스트. |
| toast.dismiss(id?) | 토스트 닫기. |

옵션으로 description, action, cancel, duration, position 등을 넘길 수 있습니다. 전체 API 는 [vue-sonner README](https://github.com/wobsoriano/vue-sonner)를 참고하세요.
