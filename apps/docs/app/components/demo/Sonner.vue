<script setup lang="ts">
import { toast } from "vue-sonner";

const source = [
  "<" + 'script setup lang="ts">',
  'import { toast } from "vue-sonner";',
  "<" + "/script>",
  "",
  "<template>",
  "  <div>",
  '    <Button variant="outline" @click="toast(\'저장되었습니다.\')">',
  "      토스트 표시",
  "    </Button>",
  "    <Sonner />",
  "  </div>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <div>
      <Button variant="outline" @click="toast('저장되었습니다.')">
        토스트 표시
      </Button>
      <Sonner />
    </div>
  </PreviewFrame>
</template>
