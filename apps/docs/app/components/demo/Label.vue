<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  'import { Label } from "@whalerice/nuxt-ui/label";',
  'import { Input } from "@whalerice/nuxt-ui/input";',
  "<" + "/script>",
  "",
  "<template>",
  '  <div class="grid w-full max-w-sm gap-2">',
  '    <Label for="demo-email">이메일</Label>',
  '    <Input id="demo-email" type="email" placeholder="name@example.com" />',
  '    <Label for="demo-name" class="mt-2">이름</Label>',
  '    <Input id="demo-name" placeholder="홍길동" />',
  "  </div>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <div class="grid w-full max-w-sm gap-2">
      <Label for="demo-email">이메일</Label>
      <Input id="demo-email" type="email" placeholder="name@example.com" />
      <Label for="demo-name" class="mt-2">이름</Label>
      <Input id="demo-name" placeholder="홍길동" />
    </div>
  </PreviewFrame>
</template>
