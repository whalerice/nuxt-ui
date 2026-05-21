<script setup lang="ts">

const progress = ref(66);

const source = [
  "<" + 'script setup lang="ts">',
  'import { Progress } from "@whalerice/nuxt-ui/progress";',
  "const progress = ref(66);",
  "<" + "/script>",
  "",
  "<template>",
  '  <div class="w-full max-w-sm space-y-4">',
  '    <Progress v-model="progress" />',
  '    <p class="text-muted-foreground text-sm">{{ progress }}%</p>',
  "  </div>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <div class="w-full max-w-sm space-y-4">
      <Progress v-model="progress" />
      <p class="text-muted-foreground text-sm">{{ progress }}%</p>
    </div>
  </PreviewFrame>
</template>
