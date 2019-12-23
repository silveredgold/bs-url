#!/usr/bin/env node
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Path = __importStar(require("path"));
const clime_1 = require("clime");
// The second parameter is the path to folder that contains command modules.
let cli = new clime_1.CLI('extractor', Path.join(__dirname, 'commands'));
// Clime in its core provides an object-based command-line infrastructure.
// To have it work as a common CLI, a shim needs to be applied:
let shim = new clime_1.Shim(cli);
shim.execute(process.argv);
//# sourceMappingURL=cli.js.map