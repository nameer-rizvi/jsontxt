import { type FilePathOptions, filepath } from "./filepath.js";
import fs from "fs";

/**
 * Reads and parses JSON from a `.txt` file.
 * Returns a result object indicating success or failure.
 * @example
 * read()                                // { success: true, error: null, data: unknown }
 * read({ filename: "store" })           // { success: true, error: null, data: unknown }
 * read({ filepath: "/nonexistent" })    // { success: false, error: Error, data: null }
 */
export function read(option?: FilePathOptions): {
  success: boolean;
  error: null | Error;
  data: unknown;
} {
  try {
    const file = fs.readFileSync(filepath(option), "utf8");

    const data = JSON.parse(file) as unknown;

    return { success: true, error: null, data };
  } catch (error) {
    return { success: false, error: error as Error, data: null };
  }
}
