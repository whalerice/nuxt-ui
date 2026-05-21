<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  ResizableHandle,",
  "  ResizablePanel,",
  "  ResizablePanelGroup,",
  '} from "@whalerice/nuxt-ui/resizable";',
  "<" + "/script>",
  "",
  "<template>",
  '  <ResizablePanelGroup direction="horizontal" class="min-h-[200px] max-w-md rounded-lg border">',
  '    <ResizablePanel :default-size="50">',
  '      <div class="flex h-full items-center justify-center p-6">',
  "        <span class=" + '"font-semibold">왼쪽</span>',
  "      </div>",
  "    </ResizablePanel>",
  "    <ResizableHandle with-handle />",
  '    <ResizablePanel :default-size="50">',
  '      <div class="flex h-full items-center justify-center p-6">',
  "        <span class=" + '"font-semibold">오른쪽</span>',
  "      </div>",
  "    </ResizablePanel>",
  "  </ResizablePanelGroup>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <ResizablePanelGroup
      direction="horizontal"
      class="mx-auto min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel :default-size="50">
        <div class="flex h-full items-center justify-center bg-muted/40 p-6">
          <span class="font-semibold">왼쪽 패널</span>
        </div>
      </ResizablePanel>
      <ResizableHandle with-handle />
      <ResizablePanel :default-size="50">
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">오른쪽 패널</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </PreviewFrame>
</template>
