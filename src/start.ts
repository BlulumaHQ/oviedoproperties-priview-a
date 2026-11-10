import { createMiddleware, createStart } from "@tanstack/react-start";
import { setResponseHeader } from "@tanstack/react-start/server";
import { isNoindexHost, NOINDEX_VALUE } from "@/lib/indexing-policy";

// Adds X-Robots-Tag: noindex to server responses on platform hostnames only.
const indexingPolicy = createMiddleware().server(async ({ next, request }) => {
  const host = new URL(request.url).hostname;
  if (isNoindexHost(host)) setResponseHeader("X-Robots-Tag", NOINDEX_VALUE);
  return next();
});

export const startInstance = createStart(() => ({
  requestMiddleware: [indexingPolicy],
}));
