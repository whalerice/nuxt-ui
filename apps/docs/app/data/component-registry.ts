/**
 * packages/ui/app/components/ui 와 1:1 slug 목록.
 * 문서는 content/components/{slug}.md 에 직접 추가·수정합니다.
 */
export const UI_COMPONENT_SLUGS = [
  "accordion",
  "alert",
  "alert-dialog",
  "aspect-ratio",
  "avatar",
  "badge",
  "breadcrumb",
  "button",
  "calendar",
  "card",
  "carousel",
  "checkbox",
  "collapsible",
  "command",
  "context-menu",
  "dialog",
  "drawer",
  "dropdown-menu",
  "form",
  "hover-card",
  "input",
  "input-group",
  "label",
  "menubar",
  "native-select",
  "navigation-menu",
  "pagination",
  "popover",
  "progress",
  "radio-group",
  "range-calendar",
  "resizable",
  "scroll-area",
  "select",
  "separator",
  "sheet",
  "skeleton",
  "slider",
  "sonner",
  "switch",
  "table",
  "tabs",
  "textarea",
  "toggle",
  "toggle-group",
  "tooltip",
] as const;

export type UiComponentSlug = (typeof UI_COMPONENT_SLUGS)[number];

export function isUiComponentSlug(slug: string): slug is UiComponentSlug {
  return (UI_COMPONENT_SLUGS as readonly string[]).includes(slug);
}
