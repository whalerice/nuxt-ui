<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  'import { Badge } from "@whalerice/nuxt-ui/badge";',
  "<" + "/script>",
  "",
  "<template>",
  '  <div class="flex flex-wrap items-center gap-2">',
  "    <Badge>신규</Badge>",
  '    <Badge variant="secondary">초안</Badge>',
  '    <Badge variant="outline">베타</Badge>',
  '    <Badge variant="destructive">오류</Badge>',
  "  </div>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <div class="flex flex-wrap items-center gap-2">
      <Badge>신규</Badge>
      <Badge variant="secondary">초안</Badge>
      <Badge variant="outline">베타</Badge>
      <Badge variant="destructive">오류</Badge>
    </div>
  </PreviewFrame>
</template>
