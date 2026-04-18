import { unique } from "../dist/esm/index.js";

// --- array utils ---
console.assert(
  JSON.stringify(unique([1, 2, 2, 3, 3])) === JSON.stringify([1, 2, 3]),
  "unique failed",
);

console.log("✅ ESM tests passed!");
