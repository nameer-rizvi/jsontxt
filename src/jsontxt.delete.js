function jsontxtDelete(option, callback) {
  try {
    const { unlinkSync } = require("fs");

    const makeFilepath = require("./util.filepath");

    const filepath = makeFilepath(option);

    unlinkSync(filepath);

    if (callback) callback(null);
  } catch (error) {
    if (callback) callback(error);
  }
}

module.exports = jsontxtDelete;
