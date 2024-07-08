function filepath(option = {}) {
  let { filepath = "", filename } = option;

  const npmdir = process.cwd?.()?.split("/node_modules")[0];

  const ext = ".txt";

  if (!filepath && process.env.JSONTXT_PATH) {
    filepath = process.env.JSONTXT_PATH;
  } else if (!filepath && process.env.PWD) {
    filepath = process.env.PWD;
  } else if (!filepath && npmdir) {
    filepath = npmdir;
  }

  if (filepath.endsWith(ext)) return filepath;

  if (!filepath.endsWith("/")) filepath += "/";

  if (!filename && process.env.JSONTXT_NAME) {
    filename = process.env.JSONTXT_NAME;
  } else if (!filename) {
    filename = ["json", process.env.NODE_ENV].filter(Boolean).join("_");
  }

  if (!filename.endsWith(ext)) filename += ext;

  return filepath + filename;
}

module.exports = filepath;
