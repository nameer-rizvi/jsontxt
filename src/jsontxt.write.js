const makeFilepath = require("./util.filepath");
const { writeFileSync } = require("fs");

function jsontxtWrite(json = [], options, callback) {
  try {
    const filepath = makeFilepath(options);

    const jsonStringified = JSON.stringify(json);

    JSON.parse(jsonStringified); // Parse jsonStringified here to test if json input is a json value.

    writeFileSync(filepath, jsonStringified);

    if (callback) callback(null);
  } catch (err) {
    if (callback) callback(err);
  }
}

module.exports = jsontxtWrite;
