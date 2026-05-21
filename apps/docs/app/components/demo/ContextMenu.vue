<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  ContextMenu,",
  "  ContextMenuContent,",
  "  ContextMenuItem,",
  "  ContextMenuSeparator,",
  "  ContextMenuTrigger,",
  '} from "@whalerice/nuxt-ui/context-menu";',
  "<" + "/script>",
  "",
  "<template>",
  "  <ContextMenu>",
  "    <ContextMenuTrigger",
  '      class="flex h-32 w-full max-w-sm items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground"',
  "    >",
  "      이 영역을 우클릭하세요",
  "    </ContextMenuTrigger>",
  "    <ContextMenuContent>",
  "      <ContextMenuItem>복사</ContextMenuItem>",
  "      <ContextMenuItem>붙여넣기</ContextMenuItem>",
  "      <ContextMenuSeparator />",
  '      <ContextMenuItem variant="destructive">삭제</ContextMenuItem>',
  "    </ContextMenuContent>",
  "  </ContextMenu>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <ContextMenu>
      <ContextMenuTrigger
        class="flex h-32 w-full max-w-sm items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground"
      >
        이 영역을 우클릭하세요
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>복사</ContextMenuItem>
        <ContextMenuItem>붙여넣기</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">삭제</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  </PreviewFrame>
</template>
