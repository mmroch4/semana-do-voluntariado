/**
 * Renders a JSON-LD structured-data script. `data` may be a single schema.org
 * object or an array of them. Server component; the JSON is serialised once at
 * render time. `dangerouslySetInnerHTML` is the standard pattern for JSON-LD —
 * the content is our own static data, never user input. As defence-in-depth we
 * escape `<` to its unicode form so a stray `</script>` in any string can't
 * break out of the tag (the one real XSS vector for inline JSON).
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
