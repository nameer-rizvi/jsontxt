function jsontxtFilesize(option, callback) {
  try {
    const makeFilepath = require("./util.filepath");

    const fs = require("fs");

    const filepath = makeFilepath(option);

    const stat = fs.statSync(filepath);

    const size = {
      number: stat.size,
      bytes: stat.size.toLocaleString() + " bytes",
      kb: (stat.size / 1000).toLocaleString() + " kb",
      mb: (stat.size / 1000000).toLocaleString() + " mb",
      gb: (stat.size / 1000000000).toLocaleString() + " gb",
    };

    if (callback) callback(null, size);

    return size;
  } catch (error) {
    if (callback) callback(error);
  }
}

module.exports = jsontxtFilesize;
