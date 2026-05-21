<script setup lang="ts">
import type { DateRange } from "reka-ui";

const range = ref<DateRange>();

const source = [
  "<" + 'script setup lang="ts">',
  'import { RangeCalendar } from "@whalerice/nuxt-ui/range-calendar";',
  'import type { DateRange } from "reka-ui";',
  "",
  "const range = ref<DateRange>();",
  "<" + "/script>",
  "",
  "<template>",
  '  <div class="flex flex-col items-center gap-3">',
  '    <RangeCalendar v-model="range" class="rounded-md border" />',
  '    <p v-if="range?.start" class="text-muted-foreground text-sm">',
  "      {{ range.start.toString() }}",
  '      <template v-if="range.end"> — {{ range.end.toString() }}</template>',
  "    </p>",
  "  </div>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <div class="flex flex-col items-center gap-3">
      <RangeCalendar v-model="range" class="rounded-md border" />
      <p v-if="range?.start" class="text-muted-foreground text-sm">
        {{ range.start.toString() }}
        <template v-if="range.end"> — {{ range.end.toString() }}</template>
      </p>
    </div>
  </PreviewFrame>
</template>
