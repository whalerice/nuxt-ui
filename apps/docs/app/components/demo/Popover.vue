<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  'import { Button } from "@whalerice/nuxt-ui/button";',
  "import {",
  "  Popover,",
  "  PopoverContent,",
  "  PopoverDescription,",
  "  PopoverHeader,",
  "  PopoverTitle,",
  "  PopoverTrigger,",
  '} from "@whalerice/nuxt-ui/popover";',
  "<" + "/script>",
  "",
  "<template>",
  "  <Popover>",
  "    <PopoverTrigger>",
  '      <Button variant="outline">열기</Button>',
  "    </PopoverTrigger>",
  '    <PopoverContent class="w-80">',
  "      <PopoverHeader>",
  "        <PopoverTitle>크기</PopoverTitle>",
  "        <PopoverDescription>표시할 열 너비를 선택하세요.</PopoverDescription>",
  "      </PopoverHeader>",
  "    </PopoverContent>",
  "  </Popover>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <Popover>
      <PopoverTrigger>
        <Button variant="outline">열기</Button>
      </PopoverTrigger>
      <PopoverContent class="w-80">
        <PopoverHeader>
          <PopoverTitle>크기</PopoverTitle>
          <PopoverDescription>
            표시할 열 너비를 선택하세요.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  </PreviewFrame>
</template>
