<script setup lang="ts">
import Sidebar from "@/components/layouts/Sidebar.vue";
const route = useRoute();
</script>

<template>
  <div
    class="flex h-dvh flex-col overflow-hidden bg-background text-foreground antialiased"
  >
    <header
      class="sticky top-0 z-50 shrink-0 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      role="banner"
    >
      <div class="flex h-14 items-center gap-4 px-4 md:px-6">
        <NuxtLink
          to="/"
          class="text-lg font-semibold tracking-tight hover:text-primary transition-colors"
        >
          @whalerice/nuxt-ui Docs
        </NuxtLink>
        <span class="text-muted-foreground text-sm hidden sm:inline">
          {{ route.path }}
        </span>
      </div>
    </header>

    <div
      class="flex min-h-0 flex-1 flex-col overflow-hidden md:flex-row"
      role="presentation"
    >
      <aside
        class="min-h-0 shrink-0 overflow-y-auto border-b border-border bg-muted/30 md:w-56 md:border-b-0 md:border-r"
        role="navigation"
        aria-label="문서 사이드바"
      >
        <Sidebar />
      </aside>

      <main
        class="flex-1 min-w-0 min-h-0 overflow-y-auto p-4 md:p-8"
        role="main"
      >
        <div class="mx-auto max-w-3xl">
          <slot />
        </div>
      </main>
    </div>

    <footer
      class="shrink-0 border-t border-border py-4 px-4 md:px-6 text-center text-sm text-muted-foreground"
      role="contentinfo"
    >
      © {{ new Date().getFullYear() }} @whalerice/nuxt-ui · Nuxt Content 문서
    </footer>
  </div>
</template>
