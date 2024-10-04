"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const delete_1 = __importDefault(require("./delete"));
const filepath_1 = require("./filepath");
const filesize_1 = __importDefault(require("./filesize"));
const read_1 = __importDefault(require("./read"));
const write_1 = __importDefault(require("./write"));
const jsontxt = {
    delete: delete_1.default,
    filepath: filepath_1.filepath,
    filesize: filesize_1.default,
    read: read_1.default,
    write: write_1.default,
};
module.exports = jsontxt;
