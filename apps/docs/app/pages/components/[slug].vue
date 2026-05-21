<script setup lang="ts">
import { isUiComponentSlug } from "~/data/component-registry";

const route = useRoute();
const slug = computed(() => String(route.params.slug || ""));

definePageMeta({
  key: (r) => `components-${String(r.params.slug || "")}`,
});

if (!isUiComponentSlug(slug.value)) {
  throw createError({ statusCode: 404, statusMessage: "Unknown component" });
}

useSeoMeta({
  title: () => `${slug.value} · Components`,
});

const { data: doc } = await useAsyncData(
  () => `component-page-${slug.value}`,
  () => queryCollection("components").path(`/components/${slug.value}`).first(),
  { watch: [slug] },
);
</script>

<template>
  <div class="space-y-6 max-w-4xl">
    <div class="mb-4">
      <Button variant="outline" @click="navigateTo('/components')">
        <Icon name="lucide:chevron-left" class="size-4" />
        목록
      </Button>
    </div>

    <div>
      <h1 class="text-3xl font-bold tracking-tight capitalize">
        {{ slug }}
      </h1>
      <p class="text-muted-foreground text-md">
        {{ doc?.description }}
      </p>
    </div>

    <div
      v-if="!doc"
      class="rounded-lg border border-dashed border-border p-6 space-y-3"
    >
      <p class="text-muted-foreground text-sm">
        이 컴포넌트 문서가 아직 없습니다. 레포에
        <code class="rounded bg-muted px-1 text-xs"
          >apps/docs/content/components/{{ slug }}.md</code
        >
        파일을 추가한 뒤
        <code class="rounded bg-muted px-1 text-xs">pnpm dev</code>를
        재시작하세요 (Content watch 비활성).
      </p>
      <p class="text-xs text-muted-foreground">
        UI slug 목록은
        <code class="rounded bg-muted px-1 text-xs"
          >app/data/component-registry.ts</code
        >
        에 하드코딩되어 있습니다.
      </p>
    </div>

    <article v-else class="docs-prose max-w-none text-sm leading-relaxed">
      <ContentRenderer :value="doc" :prose="true" />
    </article>
  </div>
</template>
