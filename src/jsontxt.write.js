function jsontxtWrite(json = [], options, callback) {
  try {
    const { writeFileSync } = require("fs");

    const makeFilepath = require("./util.filepath");

    const filepath = makeFilepath(options);

    const jsonStringified = JSON.stringify(json);

    JSON.parse(jsonStringified); // Parse jsonStringified here to test if json input is a json value.

    writeFileSync(filepath, jsonStringified);

    if (callback) callback(null, json);

    return json;
  } catch (err) {
    if (callback) callback(err);

    return;
  }
}

module.exports = jsontxtWrite;
