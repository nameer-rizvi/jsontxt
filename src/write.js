const fs = require("./fs");
const filepath = require("./filepath");

function write(json = [], option) {
  if (fs) {
    const stringified = JSON.stringify(json);

    JSON.parse(stringified); // Parse json here to test if json input is valid.

    fs.writeFileSync(filepath(option), stringified);
  }
}

module.exports = write;
