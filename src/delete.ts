import { FilePathOptions, filepath } from "./filepath";
import fs from "fs";

function _delete(option?: FilePathOptions): {
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

export default _delete;
