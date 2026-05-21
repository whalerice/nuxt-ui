<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  DropdownMenu,",
  "  DropdownMenuContent,",
  "  DropdownMenuItem,",
  "  DropdownMenuLabel,",
  "  DropdownMenuSeparator,",
  "  DropdownMenuTrigger,",
  '} from "@whalerice/nuxt-ui/dropdown-menu";',
  'import { Button } from "@whalerice/nuxt-ui/button";',
  "<" + "/script>",
  "",
  "<template>",
  "  <DropdownMenu>",
  "    <DropdownMenuTrigger as-child>",
  '      <Button variant="outline">메뉴</Button>',
  "    </DropdownMenuTrigger>",
  "    <DropdownMenuContent>",
  "      <DropdownMenuLabel>내 계정</DropdownMenuLabel>",
  "      <DropdownMenuSeparator />",
  "      <DropdownMenuItem>프로필</DropdownMenuItem>",
  "      <DropdownMenuItem>설정</DropdownMenuItem>",
  "      <DropdownMenuSeparator />",
  '      <DropdownMenuItem variant="destructive">로그아웃</DropdownMenuItem>',
  "    </DropdownMenuContent>",
  "  </DropdownMenu>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="outline">메뉴</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>내 계정</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>프로필</DropdownMenuItem>
        <DropdownMenuItem>설정</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">로그아웃</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </PreviewFrame>
</template>
