<script setup lang="ts">
useSeoMeta({
  title: "Installation",
  description:
    "사용 앱에서 @whalerice/nuxt-ui를 GitHub Packages로 설치하고 Nuxt 4에 연결하는 방법",
});

definePageMeta({
  sidebarTitle: "Installation",
});
</script>

<template>
  <div class="docs-prose space-y-8">
    <header class="space-y-2 not-prose">
      <h1 class="text-3xl font-bold tracking-tight">Installation</h1>
      <p class="text-muted-foreground text-sm leading-relaxed">
        Nuxt 4 사용 앱에서
        <code class="rounded bg-muted px-1 py-0.5 text-xs"
          >@whalerice/nuxt-ui</code
        >
        를 GitHub Packages로 설치하고 레이어로 연결하는 절차입니다.
      </p>
    </header>

    <section class="not-prose space-y-3">
      <h2 class="text-xl font-semibold tracking-tight">요구사항</h2>
      <ul class="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
        <li>
          Node <code class="rounded bg-muted px-1 py-0.5 text-xs">>=20</code>
        </li>
        <li>
          Nuxt 4, Tailwind v4 (<code
            class="rounded bg-muted px-1 py-0.5 text-xs"
            >@tailwindcss/vite</code
          >)
        </li>
        <li>pnpm (또는 npm/yarn — 아래 예시는 pnpm 기준)</li>
      </ul>
    </section>

    <section class="space-y-4">
      <h2>1. GitHub Personal Access Token</h2>
      <p>
        패키지는
        <a
          href="https://github.com/settings/tokens"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary underline-offset-4 hover:underline"
          >GitHub Personal access tokens</a
        >
        으로 인증합니다.
      </p>
      <ul
        class="list-disc space-y-1 pl-5 text-sm text-muted-foreground not-prose"
      >
        <li>
          <code class="rounded bg-muted px-1 py-0.5 text-xs"
            >read:packages</code
          >
          (필수)
        </li>
        <li>
          <code class="rounded bg-muted px-1 py-0.5 text-xs">repo</code>
          (private 패키지·레포인 경우)
        </li>
        <li>
          org SSO 사용 시 <strong class="text-foreground">whalerice</strong>에
          Authorize
        </li>
      </ul>
      <p>터미널에 토큰을 환경 변수로 둡니다.</p>
      <div class="docs-code-viewer not-prose" data-line-numbers>
        <pre class="shiki"><code>export GITHUB_TOKEN=ghp_xxx</code></pre>
      </div>
    </section>

    <section class="space-y-4">
      <h2>2. 사용 앱 <code class="text-base font-mono">.npmrc</code></h2>
      <p>
        Nuxt 프로젝트 루트에
        <code class="rounded bg-muted px-1 py-0.5 text-xs">.npmrc</code>를
        추가합니다.
      </p>
      <div class="docs-code-viewer not-prose" data-line-numbers>
        <pre class="shiki"><code>@whalerice:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}</code></pre>
      </div>
      <p class="text-sm">
        CI에서는
        <code class="rounded bg-muted px-1 py-0.5 text-xs">GITHUB_TOKEN</code>
        시크릿을 주입하면 됩니다.
      </p>
    </section>

    <section class="space-y-4">
      <h2>3. 패키지 설치 (pnpm)</h2>
      <p>사용 앱 디렉터리에서 실행합니다.</p>
      <div class="docs-code-viewer not-prose" data-line-numbers>
        <pre class="shiki"><code>pnpm add @whalerice/nuxt-ui</code></pre>
      </div>
      <p class="text-sm">
        특정 버전:
        <code class="rounded bg-muted px-1 py-0.5 text-xs"
          >pnpm add @whalerice/nuxt-ui@0.0.1</code
        >
      </p>
    </section>

    <section class="space-y-4">
      <h2>4. <code class="text-base font-mono">nuxt.config.ts</code></h2>
      <p>
        레이어(<code class="rounded bg-muted px-1 py-0.5 text-xs">extends</code
        >)와 companion 모듈을 등록합니다. 모듈은 SSR용
        <code class="rounded bg-muted px-1 py-0.5 text-xs">reka-ui</code> /
        <code class="rounded bg-muted px-1 py-0.5 text-xs"
          >lucide-vue-next</code
        >
        transpile 등을 처리합니다.
      </p>
      <div class="docs-code-viewer not-prose" data-line-numbers>
        <pre class="shiki"><code>// nuxt.config.ts
export default defineNuxtConfig({
  extends: ["@whalerice/nuxt-ui"],
  modules: ["@whalerice/nuxt-ui/module"],
});</code></pre>
      </div>
      <p class="text-sm">
        프로덕션 앱은 레이어와 동일하게
        <strong class="text-foreground"
          >Tailwind v4 +
          <code class="rounded bg-muted px-1 py-0.5 text-xs"
            >@tailwindcss/vite</code
          ></strong
        >
        스택을 맞추는 것이 좋습니다. 레이어가 Tailwind 엔트리·컴포넌트
        디렉터리를 포함합니다.
      </p>
    </section>

    <section class="space-y-4">
      <h2>5. 컴포넌트 사용</h2>
      <p>명시적 import (권장 — 문서 예시와 동일):</p>
      <div class="docs-code-viewer not-prose" data-line-numbers>
        <pre class="shiki"><code>&lt;script setup lang="ts"&gt;
import { Button } from "@whalerice/nuxt-ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@whalerice/nuxt-ui/accordion";
&lt;/script&gt;

&lt;template&gt;
  &lt;Button&gt;확인&lt;/Button&gt;
  &lt;Accordion type="single" collapsible&gt;
    &lt;AccordionItem value="a"&gt;
      &lt;AccordionTrigger&gt;제목&lt;/AccordionTrigger&gt;
      &lt;AccordionContent&gt;내용&lt;/AccordionContent&gt;
    &lt;/AccordionItem&gt;
  &lt;/Accordion&gt;
&lt;/template&gt;</code></pre>
      </div>
      <p>
        하이픈 폴더는 경로와 같습니다. 예:
        <code class="rounded bg-muted px-1 py-0.5 text-xs"
          >@whalerice/nuxt-ui/alert-dialog</code
        >,
        <code class="rounded bg-muted px-1 py-0.5 text-xs"
          >@whalerice/nuxt-ui/dropdown-menu</code
        >. <code class="rounded bg-muted px-1 py-0.5 text-xs">cn()</code> 유틸:
        <code class="rounded bg-muted px-1 py-0.5 text-xs"
          >@whalerice/nuxt-ui/lib/utils</code
        >.
      </p>
      <p>
        <code class="rounded bg-muted px-1 py-0.5 text-xs">extends</code
        >만으로도
        <code class="rounded bg-muted px-1 py-0.5 text-xs">Button</code>,
        <code class="rounded bg-muted px-1 py-0.5 text-xs">Dialog</code> 등을
        <strong class="text-foreground">자동 import</strong>할 수 있습니다
        (import 생략 가능).
      </p>
      <p class="not-prose">
        <NuxtLink
          to="/components"
          class="inline-flex items-center text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          컴포넌트 문서 보기 →
        </NuxtLink>
      </p>
    </section>

    <section
      class="not-prose rounded-lg border border-border bg-muted/30 p-4 text-sm text-muted-foreground"
    >
      <p class="font-medium text-foreground">로컬 workspace 개발</p>
      <p class="mt-1">
        이 레포에서는
        <code class="rounded bg-muted px-1 py-0.5 text-xs">apps/docs</code>
        가
        <code class="rounded bg-muted px-1 py-0.5 text-xs"
          >"@whalerice/nuxt-ui": "workspace:*"</code
        >
        로 연결됩니다. 루트에서
        <code class="rounded bg-muted px-1 py-0.5 text-xs">pnpm dev</code>
        로 문서 사이트를 띄울 수 있습니다.
      </p>
    </section>
  </div>
</template>
