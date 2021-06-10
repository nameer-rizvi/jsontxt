function jsontxtDelete(options, callback) {
  try {
    const { unlinkSync } = require("fs");

    const makeFilepath = require("./util.filepath");

    const filepath = makeFilepath(options);

    unlinkSync(filepath);

    if (callback) callback(null);
  } catch (err) {
    if (callback) callback(err);
  }
}

module.exports = jsontxtDelete;
