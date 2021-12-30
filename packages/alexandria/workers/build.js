#!/usr/bin/env node
const { build } = require("estrella");

build({
  entry: "src/index.ts",
  outfile: "dist/worker.mjs",
  bundle: true,
  platform: "browser",
  minify: false,
  format: "esm"
});
