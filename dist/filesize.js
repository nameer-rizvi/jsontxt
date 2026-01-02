"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filepath_1 = require("./filepath");
const fs_1 = __importDefault(require("fs"));
const UNITS = {
    kb: 1e3,
    mb: 1e6,
    gb: 1e9,
    tb: 1e12,
};
function filesize(option) {
    try {
        const stat = fs_1.default.statSync((0, filepath_1.filepath)(option));
        return {
            b: stat.size,
            kb: stat.size / UNITS.kb,
            mb: stat.size / UNITS.mb,
            gb: stat.size / UNITS.gb,
            tb: stat.size / UNITS.tb,
            bytes: `${stat.size.toLocaleString()} bytes`,
            kilobytes: `${(stat.size / UNITS.kb).toLocaleString()}kb`,
            megabytes: `${(stat.size / UNITS.mb).toLocaleString()}mb`,
            gigabytes: `${(stat.size / UNITS.gb).toLocaleString()}gb`,
            terabytes: `${(stat.size / UNITS.tb).toLocaleString()}tb`,
        };
    }
    catch (_a) { }
}
exports.default = filesize;
