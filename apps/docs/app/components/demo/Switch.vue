<script setup lang="ts">

const airplane = ref(true);
const notifications = ref(false);

const source = [
  "<" + 'script setup lang="ts">',
  'import { Label } from "@whalerice/nuxt-ui/label";',
  'import { Switch } from "@whalerice/nuxt-ui/switch";',
  "const airplane = ref(true);",
  "const notifications = ref(false);",
  "<" + "/script>",
  "",
  "<template>",
  '  <div class="grid w-full max-w-sm gap-4">',
  '    <div class="flex items-center justify-between">',
  '      <Label for="airplane">비행기 모드</Label>',
  '      <Switch id="airplane" v-model="airplane" />',
  "    </div>",
  '    <div class="flex items-center justify-between">',
  '      <Label for="notifications">알림</Label>',
  '      <Switch id="notifications" v-model="notifications" size="sm" />',
  "    </div>",
  "  </div>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <div class="grid w-full max-w-sm gap-4">
      <div class="flex items-center justify-between">
        <Label for="demo-airplane">비행기 모드</Label>
        <Switch id="demo-airplane" v-model="airplane" />
      </div>
      <div class="flex items-center justify-between">
        <Label for="demo-notifications">알림</Label>
        <Switch id="demo-notifications" v-model="notifications" size="sm" />
      </div>
    </div>
  </PreviewFrame>
</template>
