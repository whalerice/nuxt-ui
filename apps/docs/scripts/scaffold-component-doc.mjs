#!/usr/bin/env node
/**
 * Usage:
 *   node apps/docs/scripts/scaffold-component-doc.mjs [slug...]
 *   node apps/docs/scripts/scaffold-component-doc.mjs --all
 *   node apps/docs/scripts/scaffold-component-doc.mjs --all --force
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  apiSectionStub,
  parseExports,
  parseRegistrySlugs,
  slugToPascal,
} from "./lib/slug-utils.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(docsRoot, "../..");
const uiRoot = path.join(repoRoot, "packages/ui/app/components/ui");
const registryPath = path.join(
  docsRoot,
  "app/data/component-registry.ts",
);
const contentDir = path.join(docsRoot, "content/components");
const demoDir = path.join(docsRoot, "app/components/demo");

const args = process.argv.slice(2);
const force = args.includes("--force");
const all = args.includes("--all");
const slugs = args.filter((a) => !a.startsWith("--"));

if (!all && slugs.length === 0) {
  console.error(
    "Usage: scaffold-component-doc.mjs <slug...> | --all [--force]",
  );
  process.exit(1);
}

const registry = parseRegistrySlugs(registryPath);
const targets = all ? registry : slugs;

for (const slug of targets) {
  if (!registry.includes(slug)) {
    console.warn(`skip unknown slug: ${slug}`);
    continue;
  }
  const order = registry.indexOf(slug);
  const pascal = slugToPascal(slug);
  const exports = parseExports(uiRoot, slug);
  const title = pascal.replace(/([A-Z])/g, " $1").trim();
  const mdPath = path.join(contentDir, `${slug}.md`);
  const demoPath = path.join(demoDir, `${pascal}.vue`);

  if (!force && fs.existsSync(mdPath)) {
    console.log(`skip existing md: ${slug}`);
    continue;
  }

  const importNames = exports.length ? exports.join(", ") : pascal;
  const apiBody = exports.length
    ? exports.map((n) => apiSectionStub(n)).join("---\n\n")
    : apiSectionStub(pascal);

  const md = `---
title: ${title}
description: TODO — 한 줄 설명을 작성하세요.
order: ${order}
category: components
---

:demo-${slug}

## 사용 예시

\`\`\`vue
<script setup lang="ts">
import { ${importNames} } from "@whalerice/nuxt-ui/${slug}";
</script>

<template>
  <!-- TODO: 예시 -->
</template>
\`\`\`

## API Reference

${exports.length ? `\`${exports.join("`, `")}\` 컴포넌트로 구성됩니다.` : `\`${pascal}\` 컴포넌트입니다.`} \`as\` / \`asChild\` 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

${apiBody}
`;

  const demo = `<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  "import { ${importNames} } from \\"@whalerice/nuxt-ui/${slug}\\";",
  "<" + "/script>",
  "",
  "<template>",
  "  <!-- TODO: 예시 -->",
  "<" + "/template>",
].join("\\n");
</script>

<template>
  <PreviewFrame :code="source">
    <!-- TODO: 데모 UI -->
  </PreviewFrame>
</template>
`;

  fs.mkdirSync(contentDir, { recursive: true });
  fs.mkdirSync(demoDir, { recursive: true });
  fs.writeFileSync(mdPath, md);
  fs.writeFileSync(demoPath, demo);
  console.log(`scaffolded: ${slug} (${exports.length} exports)`);
}
