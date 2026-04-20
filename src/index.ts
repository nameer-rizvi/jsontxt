import { _delete } from "./delete.js";
import { filepath, type FilePathOptions } from "./filepath.js";
import { filesize, UNITS } from "./filesize.js";
import { read } from "./read.js";
import { write } from "./write.js";

export default { delete: _delete, filepath, filesize, UNITS, read, write };
export type { FilePathOptions };
