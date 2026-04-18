export interface FilePathOptions {
  filepath?: string;
  filename?: string;
}

const EXT = ".txt";

/**
 * Resolves a `.txt` file path for JSON storage.
 * Directory is resolved in order: `option.filepath` → `JSONTXT_PATH` env → `PWD` env → `cwd`.
 * Filename is resolved in order: `option.filename` → `JSONTXT_NAME` env → `json_<NODE_ENV>.txt` → `json.txt`.
 * If `option.filepath` already ends with `.txt`, it is returned as-is.
 * @example
 * // Given: cwd = "/app", NODE_ENV = "development"
 * filepath()                                                     // "/app/json_development.txt"
 * filepath({ filepath: "/data" })                                // "/data/json_development.txt"
 * filepath({ filename: "store" })                                // "/app/store.txt"
 * filepath({ filepath: "/data", filename: "store" })             // "/data/store.txt"
 * filepath({ filepath: "/data/store.txt" })                      // "/data/store.txt"
 * filepath({ filepath: "/data/store.txt", filename: "ignored" }) // "/data/store.txt"
 */
export function filepath(option: FilePathOptions = {}): string {
  let { filepath = "", filename } = option;

  const cwd = typeof process.cwd === "function" ? process.cwd() : "";

  const npmDir = cwd.split("/node_modules")[0];

  if (!filepath) {
    if (process.env.JSONTXT_PATH) {
      filepath = process.env.JSONTXT_PATH;
    } else if (process.env.PWD) {
      filepath = process.env.PWD;
    } else if (npmDir) {
      filepath = npmDir;
    }
  }

  if (filepath.endsWith(EXT)) return filepath;

  if (!filepath.endsWith("/")) filepath += "/";

  if (!filename) {
    if (process.env.JSONTXT_NAME) {
      filename = process.env.JSONTXT_NAME;
    } else {
      filename = ["json", process.env.NODE_ENV].filter(Boolean).join("_");
    }
  }

  if (!filename.endsWith(EXT)) filename += EXT;

  return `${filepath}${filename}`;
}
