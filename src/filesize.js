const fs = require("fs");
const filepath = require("./filepath");

function filesize(option) {
  try {
    const stat = fs.statSync(filepath(option));

    return {
      b: stat.size,
      kb: stat.size / 1000,
      mb: stat.size / 1000000,
      gb: stat.size / 1000000000,
      tb: stat.size / 1000000000000,
      bytes: stat.size.toLocaleString() + " bytes",
      kilobytes: (stat.size / 1000).toLocaleString() + "kb",
      megabytes: (stat.size / 1000000).toLocaleString() + "mb",
      gigabytes: (stat.size / 1000000000).toLocaleString() + "gb",
      terabytes: (stat.size / 1000000000000).toLocaleString() + "tb",
    };
  } catch {}
}

module.exports = filesize;
