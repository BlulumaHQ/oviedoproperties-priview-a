// Hostnames that are platform/preview URLs and must never be indexed.
// Custom domains are never matched, so they stay index-eligible.
const NOINDEX_HOST_SUFFIXES = [".lovable.app", ".workers.dev", ".pages.dev", ".netlify.app"];

export function isNoindexHost(host: string | null | undefined): boolean {
  if (!host) return false;
  const h = host.toLowerCase().split(":")[0].replace(/\.$/, "");
  return NOINDEX_HOST_SUFFIXES.some((s) => h.endsWith(s) || h === s.slice(1));
}

export const NOINDEX_VALUE = "noindex";
