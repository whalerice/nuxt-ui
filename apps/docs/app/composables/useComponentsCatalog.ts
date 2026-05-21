import { UI_COMPONENT_SLUGS } from "~/data/component-registry";

type DocMeta = {
  stem?: string;
  path?: string;
  title?: string;
  category?: string;
  order?: number;
};

export type ComponentCatalogRow = {
  slug: string;
  title: string;
  category: string;
  order: number;
  hasDoc: boolean;
};

export type ComponentCatalogGroup = {
  category: string;
  items: ComponentCatalogRow[];
};

function docKeyToUiSlug(doc: DocMeta): string | null {
  const path = doc.path ?? "";
  const fromPath = /^\/components\/([^/]+)$/.exec(path)?.[1];
  if (fromPath) return fromPath;
  const stem = doc.stem ?? "";
  if (stem.startsWith("components/")) return stem.slice("components/".length);
  return stem || null;
}

export function useComponentsCatalog() {
  const registry = computed(() => ({ slugs: [...UI_COMPONENT_SLUGS] }));

  const { data: rawDocs } = useAsyncData("component-docs-meta", () =>
    queryCollection("components").order("stem", "ASC").all(),
  );

  const grouped = computed((): ComponentCatalogGroup[] => {
    const docsMap = new Map<string, DocMeta>();
    for (const d of rawDocs.value ?? []) {
      const item = d as DocMeta;
      const key = docKeyToUiSlug(item);
      if (key) docsMap.set(key, item);
    }
    const rows: ComponentCatalogRow[] = UI_COMPONENT_SLUGS.map((slug) => {
      const d = docsMap.get(slug);
      return {
        slug,
        title: (d?.title as string) || slug,
        category: (d?.category as string) || "문서 미작성",
        order: typeof d?.order === "number" ? d.order : 9999,
        hasDoc: !!d,
      };
    });
    const byCat = new Map<string, ComponentCatalogRow[]>();
    for (const r of rows) {
      const list = byCat.get(r.category) ?? [];
      list.push(r);
      byCat.set(r.category, list);
    }
    const categories = [...byCat.keys()].sort((a, b) => {
      if (a === "문서 미작성") return 1;
      if (b === "문서 미작성") return -1;
      return a.localeCompare(b, "ko");
    });
    return categories.map((cat) => ({
      category: cat,
      items: (byCat.get(cat) ?? []).sort((a, b) =>
        a.order !== b.order ? a.order - b.order : a.slug.localeCompare(b.slug),
      ),
    }));
  });

  const defaultOpen = computed(() => grouped.value.map((g) => g.category));

  const navItems = computed(() => {
    const out: {
      slug: string;
      title: string;
      to: string;
      hasDoc: boolean;
    }[] = [];
    for (const g of grouped.value) {
      for (const row of g.items) {
        out.push({
          slug: row.slug,
          title: row.title,
          to: `/components/${row.slug}`,
          hasDoc: row.hasDoc,
        });
      }
    }
    return out;
  });

  return { registry, rawDocs, grouped, defaultOpen, navItems };
}
