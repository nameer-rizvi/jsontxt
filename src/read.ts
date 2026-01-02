import { FilePathOptions, filepath } from "./filepath";
import fs from "fs";

function read(option?: FilePathOptions): {
  success: boolean;
  error: null | Error;
  data: null | any;
} {
  try {
    const data = JSON.parse(fs.readFileSync(filepath(option), "utf8"));
    return { success: true, error: null, data };
  } catch (error) {
    return { success: false, error: error as Error, data: null };
  }
}

export default read;
