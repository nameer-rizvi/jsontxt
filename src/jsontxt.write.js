function jsontxtWrite(json = [], option, callback) {
  try {
    const { writeFileSync } = require("fs");

    const makeFilepath = require("./util.filepath");

    const filepath = makeFilepath(option);

    const stringified = JSON.stringify(json);

    JSON.parse(stringified); // Parse json here to test if json input is valid.

    writeFileSync(filepath, stringified);

    if (callback) callback(null, json);

    return json;
  } catch (err) {
    if (callback) callback(err);
  }
}

module.exports = jsontxtWrite;
