<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  'import { Avatar, AvatarFallback, AvatarImage } from "@whalerice/nuxt-ui/avatar";',
  "<" + "/script>",
  "",
  "<template>",
  '  <div class="flex items-center gap-4">',
  "    <Avatar>",
  '      <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />',
  "      <AvatarFallback>CN</AvatarFallback>",
  "    </Avatar>",
  '    <Avatar size="lg">',
  '      <AvatarImage src="https://github.com/vercel.png" alt="Vercel" />',
  "      <AvatarFallback>VC</AvatarFallback>",
  "    </Avatar>",
  '    <Avatar size="sm">',
  "      <AvatarFallback>TR</AvatarFallback>",
  "    </Avatar>",
  "  </div>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <div class="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/vercel.png" alt="Vercel" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarFallback>TR</AvatarFallback>
      </Avatar>
    </div>
  </PreviewFrame>
</template>
