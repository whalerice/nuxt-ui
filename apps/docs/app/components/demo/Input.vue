<script setup lang="ts">

const email = ref("");

const source = [
  "<" + 'script setup lang="ts">',
  'import { Input } from "@whalerice/nuxt-ui/input";',
  'import { Label } from "@whalerice/nuxt-ui/label";',
  'const email = ref("");',
  "<" + "/script>",
  "",
  "<template>",
  '  <div class="grid w-full max-w-sm gap-4">',
  '    <div class="grid gap-2">',
  '      <Label for="email">이메일</Label>',
  '      <Input id="email" v-model="email" type="email" placeholder="name@example.com" />',
  "    </div>",
  '    <div class="grid gap-2">',
  '      <Label for="password">비밀번호</Label>',
  '      <Input id="password" type="password" placeholder="••••••••" />',
  "    </div>",
  "  </div>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <div class="grid w-full max-w-sm gap-4">
      <div class="grid gap-2">
        <Label for="demo-email">이메일</Label>
        <Input
          id="demo-email"
          v-model="email"
          type="email"
          placeholder="name@example.com"
        />
      </div>
      <div class="grid gap-2">
        <Label for="demo-password">비밀번호</Label>
        <Input id="demo-password" type="password" placeholder="••••••••" />
      </div>
    </div>
  </PreviewFrame>
</template>
