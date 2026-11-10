// Netlify Edge Function: adds X-Robots-Tag: noindex to HTML responses
// only when served from a *.netlify.app (or other platform) hostname.
const SUFFIXES = [".lovable.app", ".workers.dev", ".pages.dev", ".netlify.app"];

export default async (request: Request, context: { next: () => Promise<Response> }) => {
  const res = await context.next();
  const host = new URL(request.url).hostname.toLowerCase();
  const isPlatform = SUFFIXES.some((s) => host.endsWith(s));
  const type = res.headers.get("content-type") ?? "";
  if (!isPlatform || !type.includes("text/html")) return res;
  const out = new Response(res.body, res);
  out.headers.set("X-Robots-Tag", "noindex");
  return out;
};

export const config = { path: "/*" };
