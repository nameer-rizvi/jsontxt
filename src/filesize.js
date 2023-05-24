const fs = require("./fs");
const filepath = require("./filepath");

function filesize(option) {
  try {
    if (fs) {
      const stat = fs.statSync(filepath(option));

      const size = {
        bytes: stat.size,
        kilobytes: stat.size / 1000,
        megabytes: stat.size / 1000000,
        gigabytes: stat.size / 1000000000,
        terabytes: stat.size / 1000000000000,
        b: stat.size.toLocaleString() + " bytes",
        kb: (stat.size / 1000).toLocaleString() + " kb",
        mb: (stat.size / 1000000).toLocaleString() + " mb",
        gb: (stat.size / 1000000000).toLocaleString() + " gb",
        tb: (stat.size / 1000000000000).toLocaleString() + " tb",
      };

      return size;
    }
  } catch {}
}

module.exports = filesize;
