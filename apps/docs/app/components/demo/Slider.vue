<script setup lang="ts">

const volume = ref([50]);

const source = [
  "<" + 'script setup lang="ts">',
  'import { Slider } from "@whalerice/nuxt-ui/slider";',
  "const volume = ref([50]);",
  "<" + "/script>",
  "",
  "<template>",
  '  <div class="grid w-full max-w-sm gap-3">',
  '    <Slider v-model="volume" :max="100" :step="1" />',
  '    <p class="text-muted-foreground text-sm">볼륨: {{ volume[0] }}%</p>',
  "  </div>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <div class="grid w-full max-w-sm gap-3">
      <Slider v-model="volume" :max="100" :step="1" />
      <p class="text-sm text-muted-foreground">볼륨: {{ volume[0] }}%</p>
    </div>
  </PreviewFrame>
</template>
