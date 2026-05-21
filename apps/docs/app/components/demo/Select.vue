<script setup lang="ts">

const fruit = ref("apple");

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  Select,",
  "  SelectContent,",
  "  SelectItem,",
  "  SelectTrigger,",
  "  SelectValue,",
  '} from "@whalerice/nuxt-ui/select";',
  "",
  'const fruit = ref("apple");',
  "<" + "/script>",
  "",
  "<template>",
  '  <Select v-model="fruit">',
  '    <SelectTrigger class="w-[180px]">',
  '      <SelectValue placeholder="과일 선택" />',
  "    </SelectTrigger>",
  "    <SelectContent>",
  '      <SelectItem value="apple">사과</SelectItem>',
  '      <SelectItem value="banana">바나나</SelectItem>',
  '      <SelectItem value="orange">오렌지</SelectItem>',
  "    </SelectContent>",
  "  </Select>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <Select v-model="fruit">
      <SelectTrigger class="w-[180px]">
        <SelectValue placeholder="과일 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">사과</SelectItem>
        <SelectItem value="banana">바나나</SelectItem>
        <SelectItem value="orange">오렌지</SelectItem>
      </SelectContent>
    </Select>
  </PreviewFrame>
</template>
