/**
 * Companion module for `@whalerice/nuxt-ui` consumers.
 *
 * Keeps `@nuxt`/Vite SSR friendly with radix-style libs (without `shadcn-nuxt`).
 * Components are wired via layer `extends` + `components` config in {@link ../../nuxt.config.ts}.
 *
 * Consumers: `extends: [...]` plus `modules: ['@whalerice/nuxt-ui/module']`.
 */
import { defineNuxtModule } from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "@whalerice/nuxt-ui/module",
    compatibility: { nuxt: ">=3.17.0" },
  },
  setup(_options, nuxt) {
    nuxt.options.build.transpile ??= [];
    const extra = ["@whalerice/nuxt-ui", "reka-ui", "lucide-vue-next"];
    for (const name of extra) {
      if (!nuxt.options.build.transpile.includes(name)) {
        nuxt.options.build.transpile.push(name);
      }
    }
  },
});
