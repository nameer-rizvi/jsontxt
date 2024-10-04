"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filepath_1 = require("./filepath");
const fs_1 = __importDefault(require("fs"));
function write(json = [], option) {
    const jsonstring = JSON.stringify(json);
    JSON.parse(jsonstring); // Validate json input.
    fs_1.default.writeFileSync((0, filepath_1.filepath)(option), jsonstring);
}
exports.default = write;
