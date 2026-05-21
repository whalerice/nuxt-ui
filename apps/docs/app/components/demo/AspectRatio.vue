<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  'import { AspectRatio } from "@whalerice/nuxt-ui/aspect-ratio";',
  "<" + "/script>",
  "",
  "<template>",
  '  <div class="w-[320px] overflow-hidden rounded-lg border">',
  "    <AspectRatio :ratio=\"16 / 9\">",
  '      <img src="https://picsum.photos/800/450" alt="샘플" class="size-full object-cover" />',
  "    </AspectRatio>",
  "  </div>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <div class="w-[320px] overflow-hidden rounded-lg border">
      <AspectRatio :ratio="16 / 9">
        <img
          src="https://picsum.photos/800/450"
          alt="샘플"
          class="size-full object-cover"
        />
      </AspectRatio>
    </div>
  </PreviewFrame>
</template>
