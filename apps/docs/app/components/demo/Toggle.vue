<script setup lang="ts">
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-vue-next";

const source = [
  "<" + 'script setup lang="ts">',
  'import { Toggle } from "@whalerice/nuxt-ui/toggle";',
  'import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-vue-next";',
  "<" + "/script>",
  "",
  "<template>",
  '  <div class="flex gap-1">',
  '    <Toggle aria-label="굵게" default-value>',
  "      <BoldIcon />",
  "    </Toggle>",
  '    <Toggle aria-label="기울임" variant="outline">',
  "      <ItalicIcon />",
  "    </Toggle>",
  '    <Toggle aria-label="밑줄" variant="outline" disabled>',
  "      <UnderlineIcon />",
  "    </Toggle>",
  "  </div>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <div class="flex gap-1">
      <Toggle aria-label="굵게" default-value>
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="기울임" variant="outline">
        <ItalicIcon />
      </Toggle>
      <Toggle aria-label="밑줄" variant="outline" disabled>
        <UnderlineIcon />
      </Toggle>
    </div>
  </PreviewFrame>
</template>
