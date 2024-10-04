import { FilePathOptions, filepath } from "./filepath";
import fs from "fs";

function _delete(option?: FilePathOptions): void {
  try {
    fs.unlinkSync(filepath(option));
  } catch {}
}

export default _delete;
