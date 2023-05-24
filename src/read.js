const fs = require("./fs");
const filepath = require("./filepath");

function read(option) {
  try {
    if (fs) {
      const stringified = fs.readFileSync(filepath(option), "utf8");

      const json = JSON.parse(stringified);

      return json;
    }
  } catch {}
}

module.exports = read;
