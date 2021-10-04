function getCWD() {
  let cwd = process.cwd();
  if (cwd.includes("/node_modules")) cwd = cwd.split("/node_modules")[0];
  return cwd;
}

function jsontxtUtilFilepath(options = {}) {
  const { filepath: customFilepath, filename: customFilename } = options;

  let directory =
    customFilepath ||
    process.env.JSONTXT_PATH ||
    process.env.PWD ||
    getCWD() ||
    "";

  const ext = ".txt";

  let filename = customFilename || process.env.JSONTXT_NAME || "json" || "";

  if (directory && !directory.endsWith(ext) && !directory.endsWith("/"))
    directory += "/";

  if (!filename.endsWith(ext)) filename += ext;

  const filepath = directory + filename;

  return filepath;
}

module.exports = jsontxtUtilFilepath;
