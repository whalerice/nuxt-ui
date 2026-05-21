<template>
  <!-- MDC Shiki: `html .default .shiki` -->
  <div class="docs-code-viewer default not-prose" data-line-numbers>
    <pre :class="props.class"><slot /></pre>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  code?: string;
  language?: string | null;
  filename?: string | null;
  highlights?: number[];
  meta?: string | null;
  class?: string | null;
}>();
</script>
