<script setup lang="ts">
import type { DateValue } from "@internationalized/date";

const value = ref<DateValue>();

const source = [
  "<" + 'script setup lang="ts">',
  'import { Calendar } from "@whalerice/nuxt-ui/calendar";',
  'import type { DateValue } from "@internationalized/date";',
  "",
  "const value = ref<DateValue>();",
  "<" + "/script>",
  "",
  "<template>",
  '  <div class="flex flex-col items-center gap-3">',
  '    <Calendar v-model="value" class="rounded-md border" />',
  '    <p v-if="value" class="text-muted-foreground text-sm">',
  "      선택: {{ value.toString() }}",
  "    </p>",
  "  </div>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <div class="flex flex-col items-center gap-3">
      <Calendar v-model="value" class="rounded-md border" />
      <p v-if="value" class="text-muted-foreground text-sm">
        선택: {{ value.toString() }}
      </p>
    </div>
  </PreviewFrame>
</template>
