<script setup lang="ts">
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-vue-next";

const formats = ref(["bold"]);

const source = [
  "<" + 'script setup lang="ts">',
  'import { ToggleGroup, ToggleGroupItem } from "@whalerice/nuxt-ui/toggle-group";',
  'import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-vue-next";',
  'const formats = ref(["bold"]);',
  "<" + "/script>",
  "",
  "<template>",
  '  <ToggleGroup v-model="formats" type="multiple" variant="outline">',
  '    <ToggleGroupItem value="bold" aria-label="굵게">',
  "      <BoldIcon />",
  "    </ToggleGroupItem>",
  '    <ToggleGroupItem value="italic" aria-label="기울임">',
  "      <ItalicIcon />",
  "    </ToggleGroupItem>",
  '    <ToggleGroupItem value="underline" aria-label="밑줄">',
  "      <UnderlineIcon />",
  "    </ToggleGroupItem>",
  "  </ToggleGroup>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <ToggleGroup v-model="formats" type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="굵게">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="기울임">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="밑줄">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  </PreviewFrame>
</template>
