"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filepath_1 = require("./filepath");
const fs_1 = __importDefault(require("fs"));
function filesize(option) {
    try {
        const stat = fs_1.default.statSync((0, filepath_1.filepath)(option));
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
    }
    catch (_a) { }
}
exports.default = filesize;
