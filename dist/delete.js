"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filepath_1 = require("./filepath");
const fs_1 = __importDefault(require("fs"));
function _delete(option) {
    try {
        fs_1.default.unlinkSync((0, filepath_1.filepath)(option));
        return { success: true, error: null };
    }
    catch (error) {
        return { success: false, error: error };
    }
}
exports.default = _delete;
