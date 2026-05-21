<script setup lang="ts">
import { InfoIcon } from "lucide-vue-next";

const source = [
  "<" + 'script setup lang="ts">',
  'import { Button } from "@whalerice/nuxt-ui/button";',
  "import {",
  "  Tooltip,",
  "  TooltipContent,",
  "  TooltipProvider,",
  "  TooltipTrigger,",
  '} from "@whalerice/nuxt-ui/tooltip";',
  'import { InfoIcon } from "lucide-vue-next";',
  "<" + "/script>",
  "",
  "<template>",
  "  <TooltipProvider>",
  '    <div class="flex items-center gap-4">',
  "      <Tooltip>",
  "        <TooltipTrigger>",
  '          <Button variant="outline">저장</Button>',
  "        </TooltipTrigger>",
  "        <TooltipContent>변경 사항 저장</TooltipContent>",
  "      </Tooltip>",
  "      <Tooltip>",
  "        <TooltipTrigger>",
  '          <Button variant="ghost" size="icon" aria-label="도움말">',
  "            <InfoIcon />",
  "          </Button>",
  "        </TooltipTrigger>",
  "        <TooltipContent>추가 정보를 확인하세요</TooltipContent>",
  "      </Tooltip>",
  "    </div>",
  "  </TooltipProvider>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <TooltipProvider>
      <div class="flex items-center gap-4">
        <Tooltip>
          <TooltipTrigger>
            <Button variant="outline">저장</Button>
          </TooltipTrigger>
          <TooltipContent>변경 사항 저장</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Button variant="ghost" size="icon" aria-label="도움말">
              <InfoIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>추가 정보를 확인하세요</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  </PreviewFrame>
</template>
