export default defineEventHandler(async (event) => {
  const body = await readBody<{ code?: string; lang?: string }>(event);
  const code = body?.code;
  const lang = body?.lang ?? "vue";
  if (!code) return null;
  return highlightPreviewCode(code, lang);
});
