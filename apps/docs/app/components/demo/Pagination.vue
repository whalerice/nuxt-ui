<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  Pagination,",
  "  PaginationContent,",
  "  PaginationEllipsis,",
  "  PaginationItem,",
  "  PaginationNext,",
  "  PaginationPrevious,",
  '} from "@whalerice/nuxt-ui/pagination";',
  "<" + "/script>",
  "",
  "<template>",
  "  <Pagination",
  '    v-slot="{ page }"',
  '    :items-per-page="10"',
  '    :total="100"',
  '    :sibling-count="1"',
  "    show-edges",
  '    :default-page="2"',
  "  >",
  '    <PaginationContent v-slot="{ items }">',
  "      <PaginationPrevious />",
  '      <template v-for="(item, index) in items" :key="index">',
  '        <PaginationItem v-if="item.type === \'page\'" :value="item.value" :is-active="item.value === page">',
  "          {{ item.value }}",
  "        </PaginationItem>",
  "        <PaginationEllipsis v-else :index=\"index\" />",
  "      </template>",
  "      <PaginationNext />",
  "    </PaginationContent>",
  "  </Pagination>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <Pagination
      v-slot="{ page }"
      :items-per-page="10"
      :total="100"
      :sibling-count="1"
      show-edges
      :default-page="2"
    >
      <PaginationContent v-slot="{ items }">
        <PaginationPrevious />
        <template v-for="(item, index) in items" :key="index">
          <PaginationItem
            v-if="item.type === 'page'"
            :value="item.value"
            :is-active="item.value === page"
          >
            {{ item.value }}
          </PaginationItem>
          <PaginationEllipsis v-else :index="index" />
        </template>
        <PaginationNext />
      </PaginationContent>
    </Pagination>
  </PreviewFrame>
</template>
