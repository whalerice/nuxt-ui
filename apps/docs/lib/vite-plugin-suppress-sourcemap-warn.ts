import type { Plugin } from "vite";

import { shouldSuppressSourcemapWarn } from "./rollup-onwarn";

/** Nuxt merge 이후 rollup onwarn에 억제 로직 주입 */
export function suppressSourcemapWarnPlugin(): Plugin {
  return {
    name: "docs:suppress-sourcemap-warn",
    enforce: "post",
    configResolved(config) {
      const rollupOptions = (config.build.rollupOptions ??= {});
      const previous = rollupOptions.onwarn;

      rollupOptions.onwarn = (warning, warn) => {
        if (shouldSuppressSourcemapWarn(warning)) return;
        if (previous) previous(warning, warn);
        else warn(warning);
      };
    },
  };
}
