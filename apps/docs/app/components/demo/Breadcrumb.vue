<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  Breadcrumb,",
  "  BreadcrumbItem,",
  "  BreadcrumbLink,",
  "  BreadcrumbList,",
  "  BreadcrumbPage,",
  "  BreadcrumbSeparator,",
  '} from "@whalerice/nuxt-ui/breadcrumb";',
  "<" + "/script>",
  "",
  "<template>",
  "  <Breadcrumb>",
  "    <BreadcrumbList>",
  "      <BreadcrumbItem>",
  '        <BreadcrumbLink href="/">홈</BreadcrumbLink>',
  "      </BreadcrumbItem>",
  "      <BreadcrumbSeparator />",
  "      <BreadcrumbItem>",
  '        <BreadcrumbLink href="/products">상품</BreadcrumbLink>',
  "      </BreadcrumbItem>",
  "      <BreadcrumbSeparator />",
  "      <BreadcrumbItem>",
  "        <BreadcrumbPage>무선 이어폰</BreadcrumbPage>",
  "      </BreadcrumbItem>",
  "    </BreadcrumbList>",
  "  </Breadcrumb>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">홈</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">상품</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>무선 이어폰</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </PreviewFrame>
</template>
