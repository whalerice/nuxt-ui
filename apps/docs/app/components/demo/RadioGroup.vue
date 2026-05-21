<script setup lang="ts">

const plan = ref("comfortable");

const source = [
  "<" + 'script setup lang="ts">',
  'import { Label } from "@whalerice/nuxt-ui/label";',
  'import { RadioGroup, RadioGroupItem } from "@whalerice/nuxt-ui/radio-group";',
  'const plan = ref("comfortable");',
  "<" + "/script>",
  "",
  "<template>",
  '  <RadioGroup v-model="plan" class="max-w-xs">',
  '    <div class="flex items-center gap-2">',
  '      <RadioGroupItem id="default" value="default" />',
  '      <Label for="default">기본</Label>',
  "    </div>",
  '    <div class="flex items-center gap-2">',
  '      <RadioGroupItem id="comfortable" value="comfortable" />',
  '      <Label for="comfortable">편안함</Label>',
  "    </div>",
  '    <div class="flex items-center gap-2">',
  '      <RadioGroupItem id="compact" value="compact" />',
  '      <Label for="compact">컴팩트</Label>',
  "    </div>",
  "  </RadioGroup>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <RadioGroup v-model="plan" class="max-w-xs">
      <div class="flex items-center gap-2">
        <RadioGroupItem id="demo-default" value="default" />
        <Label for="demo-default">기본</Label>
      </div>
      <div class="flex items-center gap-2">
        <RadioGroupItem id="demo-comfortable" value="comfortable" />
        <Label for="demo-comfortable">편안함</Label>
      </div>
      <div class="flex items-center gap-2">
        <RadioGroupItem id="demo-compact" value="compact" />
        <Label for="demo-compact">컴팩트</Label>
      </div>
    </RadioGroup>
  </PreviewFrame>
</template>
