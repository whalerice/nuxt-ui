<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  AlertDialog,",
  "  AlertDialogAction,",
  "  AlertDialogCancel,",
  "  AlertDialogContent,",
  "  AlertDialogDescription,",
  "  AlertDialogFooter,",
  "  AlertDialogHeader,",
  "  AlertDialogTitle,",
  "  AlertDialogTrigger,",
  '} from "@whalerice/nuxt-ui/alert-dialog";',
  'import { Button } from "@whalerice/nuxt-ui/button";',
  "<" + "/script>",
  "",
  "<template>",
  "  <AlertDialog>",
  "    <AlertDialogTrigger as-child>",
  '      <Button variant="outline">확인 대화상자 열기</Button>',
  "    </AlertDialogTrigger>",
  "    <AlertDialogContent>",
  "      <AlertDialogHeader>",
  "        <AlertDialogTitle>정말 진행할까요?</AlertDialogTitle>",
  "        <AlertDialogDescription>",
  "          이 작업은 되돌릴 수 없습니다. 계정과 데이터가 서버에서 영구 삭제됩니다.",
  "        </AlertDialogDescription>",
  "      </AlertDialogHeader>",
  "      <AlertDialogFooter>",
  "        <AlertDialogCancel>취소</AlertDialogCancel>",
  "        <AlertDialogAction>계속</AlertDialogAction>",
  "      </AlertDialogFooter>",
  "    </AlertDialogContent>",
  "  </AlertDialog>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <AlertDialog>
      <AlertDialogTrigger as-child>
        <Button variant="outline">확인 대화상자 열기</Button>
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
  </PreviewFrame>
</template>
