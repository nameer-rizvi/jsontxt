const makeFilepath = require("./util.filepath");
const { unlinkSync } = require("fs");

function jsontxtDelete(options, callback) {
  try {
    const filepath = makeFilepath(options);

    unlinkSync(filepath);

    if (callback) callback(null);
  } catch (err) {
    if (callback) callback(err);
  }
}

module.exports = jsontxtDelete;
