import highlighter from "#mdc-highlighter";

type MdcHastNode =
  | { type: "text"; value: string }
  | {
      type: "element";
      tagName: string;
      properties?: Record<string, unknown>;
      children?: MdcHastNode[];
    };

interface MdcHighlightResult {
  tree: MdcHastNode[];
  className?: string;
  style?: string;
  inlineStyle?: string;
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function hastToHtml(nodes: MdcHastNode[]): string {
  return nodes
    .map((node) => {
      if (node.type === "text") return escapeHtml(node.value);
      if (node.type !== "element") return "";

      const props = node.properties ?? {};
      const attrs: string[] = [];
      if (props.class) attrs.push(`class="${String(props.class)}"`);
      if (props.style) attrs.push(`style="${String(props.style)}"`);
      if (props.line != null) attrs.push(`data-line="${String(props.line)}"`);
      const attrStr = attrs.length ? ` ${attrs.join(" ")}` : "";
      const children = hastToHtml(node.children ?? []);
      return `<${node.tagName}${attrStr}>${children}</${node.tagName}>`;
    })
    .join("");
}

function resultToHtml(result: MdcHighlightResult, lang: string) {
  const classes = [result.className, `language-${lang}`]
    .filter(Boolean)
    .join(" ");
  const styleAttr = result.inlineStyle ? ` style="${result.inlineStyle}"` : "";
  const styleTag = result.style ? `<style>${result.style}</style>` : "";
  return `${styleTag}<pre class="${classes}"${styleAttr}><code>${hastToHtml(result.tree)}</code></pre>`;
}

export async function highlightPreviewCode(code: string, lang: string) {
  try {
    const result = (await highlighter(
      code,
      lang,
      "github-light",
      {},
    )) as MdcHighlightResult;
    if (!result?.tree?.length) return null;
    return resultToHtml(result, lang);
  } catch {
    return null;
  }
}
