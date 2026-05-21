<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  Drawer,",
  "  DrawerClose,",
  "  DrawerContent,",
  "  DrawerDescription,",
  "  DrawerFooter,",
  "  DrawerHeader,",
  "  DrawerTitle,",
  "  DrawerTrigger,",
  '} from "@whalerice/nuxt-ui/drawer";',
  'import { Button } from "@whalerice/nuxt-ui/button";',
  "<" + "/script>",
  "",
  "<template>",
  "  <Drawer>",
  "    <DrawerTrigger as-child>",
  '      <Button variant="outline">드로어 열기</Button>',
  "    </DrawerTrigger>",
  "    <DrawerContent>",
  "      <DrawerHeader>",
  "        <DrawerTitle>알림 설정</DrawerTitle>",
  "        <DrawerDescription>받을 알림 종류를 선택하세요.</DrawerDescription>",
  "      </DrawerHeader>",
  "      <DrawerFooter>",
  "        <DrawerClose as-child>",
  '          <Button variant="outline">닫기</Button>',
  "        </DrawerClose>",
  "      </DrawerFooter>",
  "    </DrawerContent>",
  "  </Drawer>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <Drawer>
      <DrawerTrigger as-child>
        <Button variant="outline">드로어 열기</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>알림 설정</DrawerTitle>
          <DrawerDescription>받을 알림 종류를 선택하세요.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose as-child>
            <Button variant="outline">닫기</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </PreviewFrame>
</template>
