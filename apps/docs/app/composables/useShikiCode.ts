/** PreviewFrame용 — 서버 API에서 @nuxtjs/mdc Shiki로 HTML 생성 */
export async function highlightCode(code: string, lang = "vue") {
  return $fetch<string | null>("/api/docs/preview-highlight", {
    method: "POST",
    body: { code, lang },
  });
}
