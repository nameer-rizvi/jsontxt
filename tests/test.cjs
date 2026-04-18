const { unique } = require("../dist/cjs/index.js");

// --- array utils ---
console.assert(
  JSON.stringify(unique([1, 2, 2, 3, 3])) === JSON.stringify([1, 2, 3]),
  "unique failed",
);

console.log("✅ CJS tests passed!");
