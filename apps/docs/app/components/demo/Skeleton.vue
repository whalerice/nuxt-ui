<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  'import { Skeleton } from "@whalerice/nuxt-ui/skeleton";',
  "<" + "/script>",
  "",
  "<template>",
  '  <div class="flex items-center gap-4">',
  '    <Skeleton class="size-12 rounded-full" />',
  '    <div class="space-y-2">',
  '      <Skeleton class="h-4 w-[200px]" />',
  '      <Skeleton class="h-4 w-[160px]" />',
  "    </div>",
  "  </div>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <div class="flex items-center gap-4">
      <Skeleton class="size-12 rounded-full" />
      <div class="space-y-2">
        <Skeleton class="h-4 w-[200px]" />
        <Skeleton class="h-4 w-[160px]" />
      </div>
    </div>
  </PreviewFrame>
</template>
