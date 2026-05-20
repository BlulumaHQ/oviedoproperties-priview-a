#!/usr/bin/env node
import { existsSync, copyFileSync, renameSync, rmSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { spawn } from "node:child_process";

const root = process.cwd();
const dist = resolve(root, "dist");
const distClient = join(dist, "client");
const distServer = join(dist, "server");

const log = (m) => console.log(`[static-build] ${m}`);

async function main() {
  if (!existsSync(distClient)) throw new Error("dist/client/ not found after vite build");
  if (!existsSync(distServer)) throw new Error("dist/server/ not found after vite build");

  const srcEntry = join(distServer, "index.js");
  const aliasEntry = join(distServer, "server.js");
  if (existsSync(srcEntry) && !existsSync(aliasEntry)) {
    copyFileSync(srcEntry, aliasEntry);
    log("Aliased dist/server/index.js -> dist/server/server.js");
  }

  log("Starting vite preview on 127.0.0.1:4910...");
  const preview = spawn(
    "npx",
    ["vite", "preview", "--host", "127.0.0.1", "--port", "4910", "--strictPort"],
    { cwd: root, stdio: ["ignore", "pipe", "pipe"], env: process.env }
  );
  preview.stdout.on("data", (d) => process.stdout.write(`[preview] ${d}`));
  preview.stderr.on("data", (d) => process.stderr.write(`[preview] ${d}`));

  const killPreview = async () => {
    try { preview.kill("SIGTERM"); } catch {}
    await new Promise((r) => setTimeout(r, 3000));
    try { preview.kill("SIGKILL"); } catch {}
  };

  try {
    await new Promise((r) => setTimeout(r, 2000));

    let html = null;
    for (let i = 0; i < 150; i++) {
      try {
        const res = await fetch("http://127.0.0.1:4910/");
        const text = await res.text();
        if (text.includes("<html")) { html = text; break; }
      } catch {}
      await new Promise((r) => setTimeout(r, 200));
    }
    if (!html) throw new Error("Preview server did not return HTML within timeout");

    writeFileSync(join(distClient, "index.html"), html);
    log("Wrote dist/client/index.html");
  } finally {
    await killPreview();
    log("Preview server stopped.");
  }

  for (const entry of readdirSync(distClient)) {
    const from = join(distClient, entry);
    const to = join(dist, entry);
    if (existsSync(to)) rmSync(to, { recursive: true, force: true });
    renameSync(from, to);
  }
  rmSync(distClient, { recursive: true, force: true });
  log("Flattened dist/client/* into dist/");

  rmSync(distServer, { recursive: true, force: true });
  log("Deleted dist/server/");

  const redirectsDst = join(dist, "_redirects");
  if (!existsSync(redirectsDst)) {
    const src = resolve(root, "public/_redirects");
    if (existsSync(src)) {
      copyFileSync(src, redirectsDst);
      log("Copied public/_redirects to dist/_redirects");
    } else {
      throw new Error("dist/_redirects missing and public/_redirects not found");
    }
  }

  log("SUCCESS");
}

try {
  await main();
  process.exit(0);
} catch (e) {
  console.error(`[static-build] ERROR: ${e.message}`);
  process.exit(1);
}
