import { type FilePathOptions, filepath } from "./filepath.js";
import fs from "fs";

/**
 * Deletes a `.txt` file.
 * Returns a result object indicating success or failure.
 * @example
 * delete()                                // { success: true, error: null }
 * delete({ filename: "store" })           // { success: true, error: null }
 * delete({ filepath: "/nonexistent" })    // { success: false, error: Error }
 */
export function _delete(option?: FilePathOptions): {
  success: boolean;
  error: null | Error;
} {
  try {
    fs.unlinkSync(filepath(option));
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error as Error };
  }
}
