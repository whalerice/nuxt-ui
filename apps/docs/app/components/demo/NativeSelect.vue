<script setup lang="ts">

const fruit = ref("apple");

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  NativeSelect,",
  "  NativeSelectOption,",
  "} from \"@whalerice/nuxt-ui/native-select\";",
  'const fruit = ref("apple");',
  "<" + "/script>",
  "",
  "<template>",
  '  <NativeSelect v-model="fruit" class="max-w-xs">',
  '    <NativeSelectOption value="apple">사과</NativeSelectOption>',
  '    <NativeSelectOption value="banana">바나나</NativeSelectOption>',
  '    <NativeSelectOption value="orange">오렌지</NativeSelectOption>',
  "  </NativeSelect>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <NativeSelect v-model="fruit" class="max-w-xs">
      <NativeSelectOption value="apple">사과</NativeSelectOption>
      <NativeSelectOption value="banana">바나나</NativeSelectOption>
      <NativeSelectOption value="orange">오렌지</NativeSelectOption>
    </NativeSelect>
  </PreviewFrame>
</template>
