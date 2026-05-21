---
title: Alert Dialog
description: 중요한 내용으로 사용자 흐름을 끊고, 확인·취소 같은 응답을 기대하는 모달 대화상자입니다.
order: 2
category: components
---

:demo-alert-dialog

## 사용 예시

```vue
<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@whalerice/nuxt-ui/alert-dialog";
import { Button } from "@whalerice/nuxt-ui/button";
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child>
      <Button variant="outline">열기</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>정말 진행할까요?</AlertDialogTitle>
        <AlertDialogDescription>
          이 작업은 되돌릴 수 없습니다. 계정과 데이터가 서버에서 영구
          삭제됩니다.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>취소</AlertDialogCancel>
        <AlertDialogAction>계속</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
```
