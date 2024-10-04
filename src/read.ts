import { FilePathOptions, filepath } from "./filepath";
import fs from "fs";

function read(option?: FilePathOptions): any {
  try {
    return JSON.parse(fs.readFileSync(filepath(option), "utf8"));
  } catch {}
}

export default read;
