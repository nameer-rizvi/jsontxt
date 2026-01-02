"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filepath_1 = require("./filepath");
const fs_1 = __importDefault(require("fs"));
function write(input = [], option) {
    try {
        const jsonString = JSON.stringify(input);
        JSON.parse(jsonString); // Validate json input.
        fs_1.default.writeFileSync((0, filepath_1.filepath)(option), jsonString, { encoding: "utf8" });
        return { success: true, error: null };
    }
    catch (error) {
        return { success: false, error: error };
    }
}
exports.default = write;
