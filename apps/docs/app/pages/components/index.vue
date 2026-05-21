<script setup lang="ts">
useSeoMeta({
  title: "Components",
  description: "UI 컴포넌트별 문서 (Nuxt Content)",
});

const { grouped, defaultOpen } = useComponentsCatalog();
</script>

<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-3xl font-bold tracking-tight">Components</h1>
      <p class="mt-2 text-muted-foreground text-sm leading-relaxed">
        메뉴 slug는
        <code class="rounded bg-muted px-1 py-0.5 text-xs">app/data/component-registry.ts</code>
        에 정의합니다. 본문은
        <code class="rounded bg-muted px-1 py-0.5 text-xs">content/components/*.md</code>
        를 직접 편집해 추가합니다.
      </p>
    </div>

    <Accordion
      v-if="grouped.length"
      type="multiple"
      class="w-full border border-border rounded-lg divide-y divide-border overflow-hidden"
      :default-value="defaultOpen"
    >
      <AccordionItem
        v-for="group in grouped"
        :key="group.category"
        :value="group.category"
        class="border-0"
      >
        <AccordionTrigger
          class="px-4 py-3 text-left text-sm font-medium hover:no-underline hover:bg-muted/50"
        >
          {{ group.category }}
          <span class="ml-2 text-muted-foreground font-normal">
            ({{ group.items.length }})
          </span>
        </AccordionTrigger>
        <AccordionContent class="px-2 pb-2 pt-0">
          <ul class="space-y-0.5">
            <li v-for="row in group.items" :key="row.slug">
              <NuxtLink
                :to="`/components/${row.slug}`"
                class="flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <span>{{ row.title }}</span>
                <span
                  v-if="!row.hasDoc"
                  class="shrink-0 text-xs text-amber-600 dark:text-amber-400"
                >
                  미작성
                </span>
              </NuxtLink>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <p v-else class="text-sm text-muted-foreground">컴포넌트 목록을 불러오는 중이거나 비어 있습니다.</p>
  </div>
</template>
