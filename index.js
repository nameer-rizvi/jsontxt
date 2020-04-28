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
    : errorLog(`${filepath} does not exist`);

module.exports = {
  write: (data) =>
    filepath
      ? writeFileSync(filepath, JSON.stringify(data || []), errorLog)
      : errorLog("Can't find project's root folder"),
  read: () => errorBoundary(() => JSON.parse(readFileSync(filepath, "utf8"))),
  delete: () => errorBoundary(() => unlinkSync(filepath)),
};

// NOTE: removing this method as it seems to be outside
// the scope of basic requirements for jsontxt, which,
// by nature, is intended to be a simple writing/reading
// module. Should the file need to be manipulated, the onus
// should be on the developer to add their own custom methods,
// otherwise this file might become too big for its own good!
//
// exports.add = (newData) => {
//   const db = module.exports.read();
//   const addNewData = () =>
//     db.constructor === Object && newData.constructor === Object
//       ? exports.set({ ...db, ...newData })
//       : db.constructor === Array
//       ? newData.constructor === Array
//         ? exports.set([...db, ...newData])
//         : exports.set([...db, newData])
//       : exports.set([db, newData]);
//   return errorBoundary(() => (db && newData ? addNewData() : db));
// };
