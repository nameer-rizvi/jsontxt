import { FilePathOptions, filepath } from "./filepath";
import fs from "fs";

function write(json: any = [], option?: FilePathOptions): void {
  const jsonstring = JSON.stringify(json);

  JSON.parse(jsonstring); // Validate json input.

  fs.writeFileSync(filepath(option), jsonstring);
}

export default write;
