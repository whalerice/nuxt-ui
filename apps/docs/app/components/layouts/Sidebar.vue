<script setup lang="ts">
import type { RouteRecordNormalized } from "vue-router";

const route = useRoute();
const router = useRouter();

const { navItems } = useComponentsCatalog();

/** 사이드바 상단: 파일 기반 정적 페이지만 (동적 `:slug` 등 제외) */
const sectionNavItems = computed(() => {
  const seen = new Set<string>();
  const items: { path: string; label: string }[] = [];

  for (const r of router.getRoutes() as RouteRecordNormalized[]) {
    const p = r.path;
    if (!p || p.includes(":") || p.includes("*") || p.startsWith("/__"))
      continue;
    if (seen.has(p)) continue;
    seen.add(p);

    const label =
      (typeof r.meta?.sidebarTitle === "string" && r.meta.sidebarTitle) ||
      defaultSectionLabel(p);
    items.push({ path: p, label });
  }

  /** 알려진 경로는 이 순서(Installation 먼저), 나머지는 알파벳 순 뒤에 붙음 */
  const sectionOrder = ["/", "/installation", "/components"];
  items.sort((a, b) => {
    const ia = sectionOrder.indexOf(a.path);
    const ib = sectionOrder.indexOf(b.path);
    const ra = ia === -1 ? Number.POSITIVE_INFINITY : ia;
    const rb = ib === -1 ? Number.POSITIVE_INFINITY : ib;
    if (ra !== rb) return ra - rb;
    return a.path.localeCompare(b.path);
  });

  return items;
});

function defaultSectionLabel(path: string) {
  if (path === "/") return "시작하기";
  const seg = path.replace(/^\//, "").split("/").filter(Boolean)[0];
  if (!seg) return path;
  return seg.charAt(0).toUpperCase() + seg.slice(1);
}

function isSectionActive(itemPath: string) {
  if (itemPath === "/") return route.path === "/";
  return route.path === itemPath || route.path.startsWith(`${itemPath}/`);
}

const navMenuListClass =
  "flex w-full flex-none flex-col items-stretch justify-start gap-0.5";
const navMenuRootClass =
  "relative flex w-full max-w-none flex-col items-stretch justify-start";
const linkClass =
  "block w-full rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground";
</script>

<template>
  <div class="p-3 md:p-4">
    <p
      class="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
    >
      Sections
    </p>
    <NavigationMenu :viewport="false" :class="navMenuRootClass">
      <NavigationMenuList :class="navMenuListClass">
        <NavigationMenuItem
          v-for="item in sectionNavItems"
          :key="item.path"
          class="w-full shrink-0"
        >
          <NavigationMenuLink as-child :active="isSectionActive(item.path)">
            <NuxtLink
              :to="item.path"
              :class="linkClass"
              active-class="bg-accent text-accent-foreground font-medium"
            >
              {{ item.label }}
            </NuxtLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>

  <div class="p-3 md:p-4">
    <p
      class="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
    >
      Components
    </p>
    <NavigationMenu :viewport="false" :class="navMenuRootClass">
      <NavigationMenuList :class="navMenuListClass">
        <NavigationMenuItem
          v-for="item in navItems"
          :key="item.slug"
          class="w-full shrink-0"
        >
          <NavigationMenuLink as-child :active="route.path === item.to">
            <NuxtLink
              :to="item.to"
              :class="linkClass"
              active-class="bg-accent text-accent-foreground font-medium"
            >
              {{ item.title }}
            </NuxtLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
</template>
