const { writeFileSync, existsSync, readFileSync, unlinkSync } = require("fs");

const getCWD = () => {
  const cwd = process.cwd();
  return cwd && cwd.includes("/node_modules") && cwd.split("/node_modules")[0];
};

const dir = process.env.JSONTXT_PATH || process.env.PWD || getCWD();

const name = process.env.JSONTXT_NAME || "json";

const filepath = dir && `${dir}/${name}.txt`;

const errorLog = (err) => console.log(`🚫 [jsontxt] ${err}.`);

const errorBoundary = (onSuccess) =>
  filepath && existsSync(filepath)
    ? onSuccess()
    : (() => {
        errorLog(
          `${filepath} does not exist, returning empty array as fallback`
        );
        return [];
      })();

exports.write = (data) =>
  filepath
    ? writeFileSync(filepath, JSON.stringify(data || []), errorLog)
    : errorLog("Can't find project's root directory");

exports.read = () =>
  errorBoundary(() => JSON.parse(readFileSync(filepath, "utf8")));

exports.delete = () => errorBoundary(() => unlinkSync(filepath));
