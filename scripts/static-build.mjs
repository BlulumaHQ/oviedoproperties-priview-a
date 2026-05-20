#!/usr/bin/env node
import { existsSync, copyFileSync, renameSync, rmSync, readdirSync, statSync, mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { spawn } from "node:child_process";

const root = process.cwd();
const dist = resolve(root, "dist");
const distClient = join(dist, "client");
const distServer = join(dist, "server");

function log(msg) {
  console.log(`[static-build] ${msg}`);
}

function fail(msg) {
  console.error(`[static-build] ERROR: ${msg}`);
  process.exit(1);
}

if (!existsSync(distClient)) fail("dist/client/ not found after vite build");
if (!existsSync(distServer)) fail("dist/server/ not found after vite build");

// Alias server/index.js -> server/server.js
const srcEntry = join(distServer, "index.js");
const aliasEntry = join(distServer, "server.js");
if (existsSync(srcEntry) && !existsSync(aliasEntry)) {
  copyFileSync(srcEntry, aliasEntry);
  log("Aliased dist/server/index.js -> dist/server/server.js");
}

// Spawn vite preview
log("Starting vite preview on port 4910...");
const preview = spawn("npx", ["vite", "preview", "--port", "4910"], {
  cwd: root,
  stdio: ["ignore", "pipe", "pipe"],
  env: process.env,
});
preview.stdout.on("data", (d) => process.stdout.write(`[preview] ${d}`));
preview.stderr.on("data", (d) => process.stderr.write(`[preview] ${d}`));

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.status === 200) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server did not respond at ${url} within ${timeoutMs}ms`);
}

async function killPreview() {
  preview.kill("SIGTERM");
  await new Promise((r) => setTimeout(r, 500));
  try { preview.kill("SIGKILL"); } catch {}
}

try {
  await waitForServer("http://localhost:4910/");
  log("Preview server ready, fetching index HTML...");
  const res = await fetch("http://localhost:4910/");
  const html = await res.text();
  writeFileSync(join(distClient, "index.html"), html);
  log("Wrote dist/client/index.html");
} catch (e) {
  await killPreview();
  fail(e.message);
}

await killPreview();
log("Preview server stopped.");

// Flatten dist/client/* into dist/
for (const entry of readdirSync(distClient)) {
  const from = join(distClient, entry);
  const to = join(dist, entry);
  if (existsSync(to)) rmSync(to, { recursive: true, force: true });
  renameSync(from, to);
}
rmSync(distClient, { recursive: true, force: true });
log("Flattened dist/client/* into dist/");

// Delete dist/server/
rmSync(distServer, { recursive: true, force: true });
log("Deleted dist/server/");

// Verify _redirects
const redirectsDst = join(dist, "_redirects");
if (!existsSync(redirectsDst)) {
  const src = resolve(root, "public/_redirects");
  if (existsSync(src)) {
    copyFileSync(src, redirectsDst);
    log("Copied public/_redirects to dist/_redirects");
  } else {
    fail("dist/_redirects missing and public/_redirects not found");
  }
}

function countFiles(dir) {
  let n = 0;
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) n += countFiles(p);
    else n++;
  }
  return n;
}

log(`SUCCESS - ${countFiles(dist)} files in dist/`);
