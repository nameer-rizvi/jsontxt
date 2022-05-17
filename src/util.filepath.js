function makeFilepath(option) {
  let { filepath, filename } = option || {};

  if (!filepath)
    filepath =
      process.env.JSONTXT_PATH ||
      process.env.PWD ||
      process.cwd?.()?.split("/node_modules")[0] ||
      "";

  const ext = ".txt";

  if (filepath.endsWith(ext)) return filepath;

  if (!filepath.endsWith("/")) filepath += "/";

  if (!filename) filename = process.env.JSONTXT_NAME || "json" || "";

  if (!filename.endsWith(ext)) filename += ext;

  return filepath + filename;
}

module.exports = makeFilepath;
