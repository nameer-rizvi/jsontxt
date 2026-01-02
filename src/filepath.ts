export interface FilePathOptions {
  filepath?: string;
  filename?: string;
}

const EXT = ".txt";

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
