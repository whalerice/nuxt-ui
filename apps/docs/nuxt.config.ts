import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";

const _dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(_dirname, "../..");

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  extends: ["@whalerice/nuxt-ui"],
  css: ["~/assets/css/docs-prose.css"],
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@whalerice/nuxt-ui/module",
  ],
  content: {
    /** 마크다운은 레포에서 직접 관리 — 변경 시 dev 서버 재시작 */
    watch: { enabled: false },
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      fs: {
        allow: [repoRoot],
      },
      watch: {
        /** workspace 레이어 @whalerice/nuxt-ui(packages/ui) HMR */
        ignored: [
          "**/node_modules/**",
          "!**/node_modules/@whalerice/nuxt-ui/**",
        ],
      },
    },
  },
  nitro: {
    typescript: {
      tsConfig: {
        compilerOptions: {
          paths: {
            "#mdc-highlighter": ["../server/types/mdc-highlighter"],
          },
        },
      },
    },
  },
});
