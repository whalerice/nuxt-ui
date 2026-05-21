<script setup lang="ts">
const message = ref("Whalerice DS 문서용 예시 메모입니다.");

const source = [
  "<" + 'script setup lang="ts">',
  'import { Textarea } from "@whalerice/nuxt-ui/textarea";',
  'const message = ref("Whalerice DS 문서용 예시 메모입니다.");',
  "<" + "/script>",
  "",
  "<template>",
  '  <Textarea v-model="message" class="min-h-24 max-w-md" placeholder="메모를 입력하세요." />',
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <Textarea
      v-model="message"
      class="min-h-24 max-w-md"
      placeholder="메모를 입력하세요."
    />
  </PreviewFrame>
</template>
