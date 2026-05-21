<script setup lang="ts">
import { MailIcon } from "lucide-vue-next";

const source = [
  "<" + 'script setup lang="ts">',
  'import { Button } from "@whalerice/nuxt-ui/button";',
  'import { MailIcon } from "lucide-vue-next";',
  "<" + "/script>",
  "",
  "<template>",
  '  <div class="flex flex-wrap items-center gap-3">',
  "    <Button>저장</Button>",
  '    <Button variant="outline">취소</Button>',
  "    <Button>",
  "      <MailIcon />",
  "      메일 보내기",
  "    </Button>",
  "  </div>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <div class="flex flex-wrap items-center gap-3">
      <Button>저장</Button>
      <Button variant="outline">취소</Button>
      <Button>
        <MailIcon />
        메일 보내기
      </Button>
    </div>
  </PreviewFrame>
</template>
