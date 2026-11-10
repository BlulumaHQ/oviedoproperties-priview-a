import { describe, it, expect } from "vitest";
import { isNoindexHost } from "./indexing-policy";

describe("isNoindexHost", () => {
  it("noindexes platform hosts", () => {
    for (const h of ["oviedoproperties-priview-a.lovable.app", "id-preview--x.lovable.app", "app.workers.dev", "x.pages.dev", "site.netlify.app:443"])
      expect(isNoindexHost(h)).toBe(true);
  });
  it("keeps custom domains indexable", () => {
    for (const h of ["oviedoproperties.com", "www.oviedoproperties.com", "lovable.app.example.com", "mynetlify.app.co"])
      expect(isNoindexHost(h)).toBe(false);
  });
});
