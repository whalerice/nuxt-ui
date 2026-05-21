<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** 미리보기 아래에 표시할 소스 코드 (그대로 복사됨) */
    code: string;
    /** Shiki 언어 id (@nuxtjs/mdc highlight.langs) */
    lang?: string;
    /** Shiki `code > .line` 앞에 줄 번호 표시 */
    lineNumbers?: boolean;
  }>(),
  { lang: "vue", lineNumbers: true },
);

const copied = ref(false);

const highlightKey = computed(
  () => `preview-code-${props.lang}-${props.code.length}-${props.code}`,
);

const { data: highlightedHtml, error } = await useAsyncData(
  highlightKey,
  () => highlightCode(props.code, props.lang),
  { server: true },
);

async function copy() {
  if (!import.meta.client) return;
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch {
    copied.value = false;
  }
}
</script>

<template>
  <div class="not-prose my-6 overflow-hidden rounded-lg border border-border">
    <div
      class="relative flex w-full justify-center p-10 data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start data-[chromeless=true]:h-auto data-[chromeless=true]:p-0"
    >
      <slot />
    </div>
    <!-- <div class="flex items-stretch justify-center border-b border-border">
      <div class="w-full max-w-xl">
        <slot />
      </div>
    </div> -->
    <!-- MDC Shiki CSS: `html .default .shiki` — 래퍼에 default 클래스 필요 -->
    <div
      class="docs-code-viewer preview-code-panel not-prose default relative border-t"
      :data-line-numbers="lineNumbers ? '' : undefined"
    >
      <Button
        type="button"
        variant="outline"
        size="icon"
        class="absolute right-3 top-3 z-10"
        :aria-label="copied ? '복사됨' : '코드 복사'"
        @click="copy"
      >
        <Icon v-if="copied" name="lucide:check" />
        <Icon v-else name="lucide:copy" />
      </Button>

      <div
        v-if="highlightedHtml && !error"
        class="preview-code"
        v-html="highlightedHtml"
      />
      <pre
        v-else
        class="max-h-[min(420px,50vh)] overflow-auto p-4 pb-5 pt-12 font-mono text-[13px] leading-relaxed text-zinc-800"
      ><code>{{ code }}</code></pre>
    </div>
  </div>
</template>

