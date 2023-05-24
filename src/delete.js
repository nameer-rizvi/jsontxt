const fs = require("./fs");
const filepath = require("./filepath");

function _delete(option) {
  try {
    if (fs) fs.unlinkSync(filepath(option));
  } catch {}
}

module.exports = _delete;
