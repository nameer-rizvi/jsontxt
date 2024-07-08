const fs = require("fs");
const filepath = require("./filepath");

function read(option) {
  try {
    return JSON.parse(fs.readFileSync(filepath(option), "utf8"));
  } catch {}
}

module.exports = read;
