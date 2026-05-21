<script setup lang="ts">
const source = [
  "<" + 'script setup lang="ts">',
  'import { Separator } from "@whalerice/nuxt-ui/separator";',
  "<" + "/script>",
  "",
  "<template>",
  '  <div class="flex h-20 items-center gap-4">',
  '    <div class="space-y-1">',
  '      <p class="text-sm font-medium">Whalerice DS</p>',
  '      <p class="text-muted-foreground text-xs">문서</p>',
  "    </div>",
  '    <Separator orientation="vertical" />',
  '    <div class="space-y-1">',
  '      <p class="text-sm font-medium">Playground</p>',
  '      <p class="text-muted-foreground text-xs">스모크</p>',
  "    </div>",
  "  </div>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <div class="flex h-20 items-center gap-4">
      <div class="space-y-1">
        <p class="text-sm font-medium">Whalerice DS</p>
        <p class="text-muted-foreground text-xs">문서</p>
      </div>
      <Separator orientation="vertical" />
      <div class="space-y-1">
        <p class="text-sm font-medium">Playground</p>
        <p class="text-muted-foreground text-xs">스모크</p>
      </div>
    </div>
  </PreviewFrame>
</template>
