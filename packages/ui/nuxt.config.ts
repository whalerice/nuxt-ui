import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dsTailwindCss = resolve(__dirname, "app/assets/css/tailwind.css");

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  srcDir: "app",
  alias: {
    "@ui": resolve(__dirname, "app"),
  },
  css: [dsTailwindCss],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        "@vueuse/core",
        "clsx",
        "tailwind-merge",
        "class-variance-authority",
      ],
    },
  },
  components: [
    {
      path: "components/ui",
      pathPrefix: false,
      extensions: [".vue"],
    },
  ],
});
