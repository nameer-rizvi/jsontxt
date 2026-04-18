import { writeFileSync, appendFileSync } from "fs";

// Tell Node.js this folder contains CommonJS modules
writeFileSync(
  "dist/cjs/package.json",
  JSON.stringify({ type: "commonjs" }, null, 2),
);

// Tell Node.js this folder contains ES modules
writeFileSync(
  "dist/esm/package.json",
  JSON.stringify({ type: "module" }, null, 2),
);

// Append CJS interop so require("...") returns the function directly
appendFileSync(
  "dist/cjs/index.js",
  `\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n`,
);
