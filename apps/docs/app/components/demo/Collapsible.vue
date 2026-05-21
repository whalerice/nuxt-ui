<script setup lang="ts">
import { ChevronDownIcon } from "lucide-vue-next";

const open = ref(false);

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  Collapsible,",
  "  CollapsibleContent,",
  "  CollapsibleTrigger,",
  '} from "@whalerice/nuxt-ui/collapsible";',
  'import { ChevronDownIcon } from "lucide-vue-next";',
  "const open = ref(false);",
  "<" + "/script>",
  "",
  "<template>",
  '  <Collapsible v-model:open="open" class="w-full max-w-md">',
  '    <CollapsibleTrigger class="flex w-full items-center justify-between rounded-lg border px-4 py-3 font-medium">',
  "      배송 정보",
  '      <ChevronDownIcon class="size-4 transition-transform" :class="open && \'rotate-180\'" />',
  "    </CollapsibleTrigger>",
  '    <CollapsibleContent class="px-4 pb-3 text-sm text-muted-foreground">',
  "      영업일 기준 2~3일 내 출고됩니다.",
  "    </CollapsibleContent>",
  "  </Collapsible>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <Collapsible v-model:open="open" class="w-full max-w-md">
      <CollapsibleTrigger
        class="flex w-full items-center justify-between rounded-lg border px-4 py-3 font-medium"
      >
        배송 정보
        <ChevronDownIcon
          class="size-4 transition-transform"
          :class="open && 'rotate-180'"
        />
      </CollapsibleTrigger>
      <CollapsibleContent class="px-4 pb-3 text-sm text-muted-foreground">
        영업일 기준 2~3일 내 출고됩니다.
      </CollapsibleContent>
    </Collapsible>
  </PreviewFrame>
</template>
