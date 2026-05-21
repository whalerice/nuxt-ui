<script setup lang="ts">

const terms = ref(true);
const marketing = ref(false);

const source = [
  "<" + 'script setup lang="ts">',
  'import { Checkbox } from "@whalerice/nuxt-ui/checkbox";',
  'import { Label } from "@whalerice/nuxt-ui/label";',
  "const terms = ref(true);",
  "const marketing = ref(false);",
  "<" + "/script>",
  "",
  "<template>",
  '  <div class="grid w-full max-w-sm gap-4">',
  '    <div class="flex items-center gap-2">',
  '      <Checkbox id="terms" v-model="terms" />',
  '      <Label for="terms">이용약관에 동의합니다</Label>',
  "    </div>",
  '    <div class="flex items-center gap-2">',
  '      <Checkbox id="marketing" v-model="marketing" />',
  '      <Label for="marketing">마케팅 수신에 동의합니다</Label>',
  "    </div>",
  "  </div>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <div class="grid w-full max-w-sm gap-4">
      <div class="flex items-center gap-2">
        <Checkbox id="demo-terms" v-model="terms" />
        <Label for="demo-terms">이용약관에 동의합니다</Label>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox id="demo-marketing" v-model="marketing" />
        <Label for="demo-marketing">마케팅 수신에 동의합니다</Label>
      </div>
    </div>
  </PreviewFrame>
</template>
