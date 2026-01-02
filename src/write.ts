import { FilePathOptions, filepath } from "./filepath";
import fs from "fs";

function write(
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

export default write;
