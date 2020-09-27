const { writeFileSync, existsSync, readFileSync, unlinkSync } = require("fs");

function getCWD() {
  const cwd = process.cwd();
  return cwd && cwd.includes("/node_modules") && cwd.split("/node_modules")[0];
}

const dir = process.env.JSONTXT_PATH || process.env.PWD || getCWD();

const name = process.env.JSONTXT_NAME || "json";

const filepath = dir && dir + "/" + name + ".txt";

const errorLog = (err) => console.error(new Error("[jsontxt] 🚫 " + err + "."));

exports.write = (json) => {
  try {
    const jsonStringified = JSON.stringify(json || []);
    // Parse jsonStringified here to test if
    // json input is a legitimate json value...
    // hence the use of the try/catch block!
    JSON.parse(jsonStringified);
    writeFileSync(filepath, jsonStringified, errorLog);
  } catch (err) {
    errorLog(err);
  }
};

exports.read = () => {
  let json;
  try {
    json = JSON.parse(readFileSync(filepath, "utf8"));
  } catch (err) {
    errorLog(err);
  }
  return json || [];
};

exports.delete = () => {
  try {
    unlinkSync(filepath);
  } catch (err) {
    errorLog(err);
  }
};
