<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  Sheet,",
  "  SheetClose,",
  "  SheetContent,",
  "  SheetDescription,",
  "  SheetHeader,",
  "  SheetTitle,",
  "  SheetTrigger,",
  '} from "@whalerice/nuxt-ui/sheet";',
  'import { Button } from "@whalerice/nuxt-ui/button";',
  "<" + "/script>",
  "",
  "<template>",
  "  <Sheet>",
  "    <SheetTrigger as-child>",
  '      <Button variant="outline">시트 열기</Button>',
  "    </SheetTrigger>",
  '    <SheetContent side="right">',
  "      <SheetHeader>",
  "        <SheetTitle>공유</SheetTitle>",
  "        <SheetDescription>링크를 복사해 팀원과 공유하세요.</SheetDescription>",
  "      </SheetHeader>",
  "      <SheetClose as-child>",
  '        <Button class="mt-4" variant="outline">닫기</Button>',
  "      </SheetClose>",
  "    </SheetContent>",
  "  </Sheet>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline">시트 열기</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>공유</SheetTitle>
          <SheetDescription>링크를 복사해 팀원과 공유하세요.</SheetDescription>
        </SheetHeader>
        <SheetClose as-child>
          <Button class="mt-4" variant="outline">닫기</Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  </PreviewFrame>
</template>
