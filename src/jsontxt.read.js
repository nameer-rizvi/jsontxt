const makeFilepath = require("./util.filepath");
const { readFileSync } = require("fs");

function jsontxtRead(options, callback) {
  try {
    const filepath = makeFilepath(options);

    const jsontxt = readFileSync(filepath, "utf8");

    const json = JSON.parse(jsontxt);

    if (callback) callback(null, json);

    return json;
  } catch (err) {
    if (callback) callback(err);
  }
}

module.exports = jsontxtRead;
