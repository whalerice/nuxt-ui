import fs from "node:fs";
import path from "node:path";

/** @param {string} slug kebab-case */
export function slugToPascal(slug) {
  return slug
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

/** @param {string} uiRoot packages/ui/app/components/ui @param {string} slug */
export function parseExports(uiRoot, slug) {
  const indexPath = path.join(uiRoot, slug, "index.ts");
  if (!fs.existsSync(indexPath)) return [];
  const text = fs.readFileSync(indexPath, "utf8");
  const names = [];
  for (const m of text.matchAll(
    /export\s+\{\s*default\s+as\s+(\w+)\s*\}/g,
  )) {
    names.push(m[1]);
  }
  return names;
}

/** @param {string} registryPath */
export function parseRegistrySlugs(registryPath) {
  const text = fs.readFileSync(registryPath, "utf8");
  const slugs = [];
  for (const m of text.matchAll(/"([a-z0-9-]+)"/g)) {
    slugs.push(m[1]);
  }
  return slugs;
}

export function apiSectionStub(componentName) {
  return `### ${componentName}

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | \`string\` | 스타일 병합. |

#### Slots

| Slot | Description |
| --- | --- |
| default | 기본 슬롯. |

`;
}
