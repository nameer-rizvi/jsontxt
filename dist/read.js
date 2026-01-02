"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filepath_1 = require("./filepath");
const fs_1 = __importDefault(require("fs"));
function read(option) {
    try {
        const data = JSON.parse(fs_1.default.readFileSync((0, filepath_1.filepath)(option), "utf8"));
        return { success: true, error: null, data };
    }
    catch (error) {
        return { success: false, error: error, data: null };
    }
}
exports.default = read;
