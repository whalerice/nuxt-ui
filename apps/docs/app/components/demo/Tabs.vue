<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  'import { Tabs, TabsContent, TabsList, TabsTrigger } from "@whalerice/nuxt-ui/tabs";',
  "<" + "/script>",
  "",
  "<template>",
  '  <Tabs default-value="account" class="w-full max-w-md">',
  "    <TabsList>",
  '      <TabsTrigger value="account">계정</TabsTrigger>',
  '      <TabsTrigger value="password">비밀번호</TabsTrigger>',
  "    </TabsList>",
  '    <TabsContent value="account" class="rounded-lg border p-4 text-sm">',
  "      프로필·이메일 등 계정 설정을 변경합니다.",
  "    </TabsContent>",
  '    <TabsContent value="password" class="rounded-lg border p-4 text-sm">',
  "      새 비밀번호를 입력하고 저장합니다.",
  "    </TabsContent>",
  "  </Tabs>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <Tabs default-value="account" class="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">계정</TabsTrigger>
        <TabsTrigger value="password">비밀번호</TabsTrigger>
      </TabsList>
      <TabsContent value="account" class="rounded-lg border p-4 text-sm">
        프로필·이메일 등 계정 설정을 변경합니다.
      </TabsContent>
      <TabsContent value="password" class="rounded-lg border p-4 text-sm">
        새 비밀번호를 입력하고 저장합니다.
      </TabsContent>
    </Tabs>
  </PreviewFrame>
</template>
