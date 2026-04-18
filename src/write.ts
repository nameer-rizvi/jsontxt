import { type FilePathOptions, filepath } from "./filepath.js";
import fs from "fs";

/**
 * Serializes and writes a value as JSON to a `.txt` file.
 * Returns a result object indicating success or failure.
 * @example
 * write([])                                            // { success: true, error: null }
 * write({ name: "foo" })                               // { success: true, error: null }
 * write({ name: "foo" }, { filename: "store" })        // { success: true, error: null }
 * write(undefined)                                     // { success: false, error: Error }
 */
export function write(
  input: unknown = [],
  option?: FilePathOptions,
): { success: boolean; error: null | Error } {
  try {
    const jsonString = JSON.stringify(input);

    JSON.parse(jsonString); // Validate json input.

    fs.writeFileSync(filepath(option), jsonString, { encoding: "utf8" });

    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error as Error };
  }
}
