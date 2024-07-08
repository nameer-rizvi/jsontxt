const fs = require("fs");
const filepath = require("./filepath");

function write(json = [], option) {
  const jsonstring = JSON.stringify(json);

  JSON.parse(jsonstring); // Validate json input.

  fs.writeFileSync(filepath(option), jsonstring);
}

module.exports = write;
