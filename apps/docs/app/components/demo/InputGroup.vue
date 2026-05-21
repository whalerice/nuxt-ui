<script setup lang="ts">
import { SearchIcon } from "lucide-vue-next";

const query = ref("");

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  InputGroup,",
  "  InputGroupAddon,",
  "  InputGroupInput,",
  "  InputGroupText,",
  '} from "@whalerice/nuxt-ui/input-group";',
  'import { SearchIcon } from "lucide-vue-next";',
  'const query = ref("");',
  "<" + "/script>",
  "",
  "<template>",
  '  <InputGroup class="max-w-sm">',
  "    <InputGroupAddon>",
  "      <SearchIcon />",
  "    </InputGroupAddon>",
  '    <InputGroupInput v-model="query" placeholder="검색..." />',
  '    <InputGroupAddon align="inline-end">',
  "      <InputGroupText>⌘K</InputGroupText>",
  "    </InputGroupAddon>",
  "  </InputGroup>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <InputGroup class="max-w-sm">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput v-model="query" placeholder="검색..." />
      <InputGroupAddon align="inline-end">
        <InputGroupText>⌘K</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </PreviewFrame>
</template>
