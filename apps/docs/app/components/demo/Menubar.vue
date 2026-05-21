<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  Menubar,",
  "  MenubarContent,",
  "  MenubarItem,",
  "  MenubarMenu,",
  "  MenubarSeparator,",
  "  MenubarTrigger,",
  '} from "@whalerice/nuxt-ui/menubar";',
  "<" + "/script>",
  "",
  "<template>",
  "  <Menubar>",
  "    <MenubarMenu>",
  "      <MenubarTrigger>파일</MenubarTrigger>",
  "      <MenubarContent>",
  "        <MenubarItem>새로 만들기</MenubarItem>",
  "        <MenubarItem>열기</MenubarItem>",
  "        <MenubarSeparator />",
  "        <MenubarItem>저장</MenubarItem>",
  "      </MenubarContent>",
  "    </MenubarMenu>",
  "    <MenubarMenu>",
  "      <MenubarTrigger>편집</MenubarTrigger>",
  "      <MenubarContent>",
  "        <MenubarItem>실행 취소</MenubarItem>",
  "        <MenubarItem>다시 실행</MenubarItem>",
  "      </MenubarContent>",
  "    </MenubarMenu>",
  "  </Menubar>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>파일</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>새로 만들기</MenubarItem>
          <MenubarItem>열기</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>저장</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>편집</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>실행 취소</MenubarItem>
          <MenubarItem>다시 실행</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </PreviewFrame>
</template>
