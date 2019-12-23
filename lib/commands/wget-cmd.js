"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clime_1 = require("clime");
const html_client_1 = __importDefault(require("../html-client"));
const get_client_1 = require("../get-client");
class WgetOptions extends clime_1.Options {
}
__decorate([
    clime_1.option({
        flag: 'o',
        name: 'outputFile',
        description: 'Output File Name'
    }),
    __metadata("design:type", String)
], WgetOptions.prototype, "outputFile", void 0);
__decorate([
    clime_1.option({
        flag: 'a',
        name: 'autoFileName',
        toggle: true,
        description: "Attempt to automatically provide a reasonable file name"
    }),
    __metadata("design:type", Boolean)
], WgetOptions.prototype, "autoFileName", void 0);
exports.WgetOptions = WgetOptions;
let default_1 = class default_1 extends clime_1.Command {
    execute(postUrl, options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            var outputArgs = "";
            let pageUrl = new URL(postUrl);
            var client = new html_client_1.default(pageUrl);
            var src = client.getVideoSource();
            if (src == null) {
                return "";
            }
            if ((_a = options) === null || _a === void 0 ? void 0 : _a.autoFileName) {
                let fileName = pageUrl.pathname.split('/').pop();
                outputArgs = `-O "${fileName}`;
            }
            else if ((_b = options) === null || _b === void 0 ? void 0 : _b.outputFile) {
                outputArgs = `-O ${options.outputFile}`;
            }
            return `${get_client_1.getExecutableName("wget" /* wget */)} --referer "${postUrl}" "${src}" ${outputArgs}`;
        });
    }
};
__decorate([
    __param(0, clime_1.param({
        description: 'Video Page URL',
        required: true,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, WgetOptions]),
    __metadata("design:returntype", Promise)
], default_1.prototype, "execute", null);
default_1 = __decorate([
    clime_1.command({ description: 'Gets the wget command required for a video page' })
], default_1);
exports.default = default_1;
//# sourceMappingURL=wget-cmd.js.map