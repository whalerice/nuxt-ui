<script setup lang="ts">

const items = Array.from({ length: 12 }, (_, i) => `스크롤 항목 ${i + 1}`);

const source = [
  "<" + 'script setup lang="ts">',
  'import { ScrollArea } from "@whalerice/nuxt-ui/scroll-area";',
  "const items = Array.from({ length: 12 }, (_, i) => `스크롤 항목 ${i + 1}`);",
  "<" + "/script>",
  "",
  "<template>",
  '  <ScrollArea class="h-48 w-full max-w-sm rounded-lg border">',
  '    <div class="space-y-2 p-4 text-sm">',
  '      <p v-for="item in items" :key="item">{{ item }}</p>',
  "    </div>",
  "  </ScrollArea>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <ScrollArea class="h-48 w-full max-w-sm rounded-lg border">
      <div class="space-y-2 p-4 text-sm">
        <p v-for="item in items" :key="item">
          {{ item }}
        </p>
      </div>
    </ScrollArea>
  </PreviewFrame>
</template>
