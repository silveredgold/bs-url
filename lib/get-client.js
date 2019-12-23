"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getExecutableName(client) {
    var exeType = process.platform === 'win32' ? ".exe" : "";
    return `${client}${exeType}`;
}
exports.getExecutableName = getExecutableName;
//# sourceMappingURL=get-client.js.map