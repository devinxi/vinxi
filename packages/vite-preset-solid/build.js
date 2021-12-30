#!/usr/bin/env node
const estrella = require("estrella");
const package = require("./package.json");

const cjs = {
  platform: "node",
  format: "cjs",
  bundle: true,
  external: [...Object.keys(package.dependencies), ...Object.keys(package.peerDependencies)]
};

const esm = {
  platform: "node",
  format: "esm",
  bundle: true,
  external: [...Object.keys(package.dependencies), ...Object.keys(package.peerDependencies)]
};

estrella.build({
  entry: "src/index.ts",
  outfile: "dist/index.js",
  ...cjs
});

estrella.build({
  entry: "src/index.ts",
  outfile: "dist/index.mjs",
  ...esm
});

estrella.build({
  entry: "src/solid.ts",
  outfile: "dist/solid.js",
  ...cjs
});

estrella.build({
  entry: "src/solid.ts",
  outfile: "dist/solid.mjs",
  ...esm
});

estrella.build({
  entry: "src/inspect.ts",
  outfile: "dist/inspect.js",
  ...cjs
});

estrella.build({
  entry: "src/inspect.ts",
  outfile: "dist/inspect.mjs",
  ...esm
});

estrella.build({
  entry: "src/solid-undestructure.js",
  outfile: "dist/solid-undestructure.js",
  ...cjs
});

estrella.build({
  entry: "src/solid-undestructure.js",
  outfile: "dist/solid-undestructure.mjs",
  ...esm
});

estrella.build({
  entry: "src/tsconfig-paths.ts",
  outfile: "dist/tsconfig-paths.js",
  ...cjs
});

estrella.build({
  entry: "src/tsconfig-paths.ts",
  outfile: "dist/tsconfig-paths.mjs",
  ...esm
});
