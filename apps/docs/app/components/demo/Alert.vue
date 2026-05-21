<script setup lang="ts">
import {
  AlertCircleIcon,
  CheckCircle2Icon,
  SparklesIcon,
} from "lucide-vue-next";

const source = [
  "<" + 'script setup lang="ts">',
  'import { Alert, AlertDescription, AlertTitle } from "@whalerice/nuxt-ui/alert";',
  'import { AlertCircleIcon, CheckCircle2Icon, SparklesIcon } from "lucide-vue-next";',
  "<" + "/script>",
  "",
  "<template>",
  '  <div class="grid w-full gap-4">',
  "    <Alert>",
  '      <CheckCircle2Icon class="text-emerald-600" />',
  "      <AlertTitle>성공</AlertTitle>",
  "      <AlertDescription>변경 사항이 저장되었습니다.</AlertDescription>",
  "    </Alert>",
  "    <Alert>",
  "      <SparklesIcon />",
  "      <AlertTitle>아이콘과 제목만 있는 알림</AlertTitle>",
  "    </Alert>",
  '    <Alert variant="destructive">',
  "      <AlertCircleIcon />",
  "      <AlertTitle>결제를 처리할 수 없습니다</AlertTitle>",
  "      <AlertDescription>",
  '        <ul class="mt-2 list-inside list-disc space-y-1 text-sm">',
  "          <li>카드 정보를 확인하세요</li>",
  "          <li>잔액이 충분한지 확인하세요</li>",
  "        </ul>",
  "      </AlertDescription>",
  "    </Alert>",
  "  </div>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <div class="grid w-full gap-4">
      <Alert>
        <CheckCircle2Icon class="text-emerald-600" />
        <AlertTitle>성공</AlertTitle>
        <AlertDescription>변경 사항이 저장되었습니다.</AlertDescription>
      </Alert>
      <Alert>
        <SparklesIcon />
        <AlertTitle>아이콘과 제목만 있는 알림</AlertTitle>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>결제를 처리할 수 없습니다</AlertTitle>
        <AlertDescription>
          <ul class="mt-2 list-inside list-disc space-y-1 text-sm">
            <li>카드 정보를 확인하세요</li>
            <li>잔액이 충분한지 확인하세요</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  </PreviewFrame>
</template>
