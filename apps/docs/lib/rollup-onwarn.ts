import type { RollupLog } from "rollup";

const SUPPRESSED_PLUGINS = new Set([
  "@tailwindcss/vite:generate:build",
  "nuxt:module-preload-polyfill",
]);

/** @tailwindcss/vite·Nuxt transform — sourcemap 미생성 무해 경고 */
export function shouldSuppressSourcemapWarn(warning: RollupLog): boolean {
  return (
    warning.code === "SOURCEMAP_BROKEN" &&
    !!warning.plugin &&
    SUPPRESSED_PLUGINS.has(warning.plugin)
  );
}

export function suppressBrokenSourcemapWarn(
  warning: RollupLog,
  warn: (warning: RollupLog) => void,
): void {
  if (shouldSuppressSourcemapWarn(warning)) return;
  warn(warning);
}
