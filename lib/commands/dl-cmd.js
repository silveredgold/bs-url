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
class YoutubeDlOptions extends clime_1.Options {
}
__decorate([
    clime_1.option({
        flag: 'o',
        name: 'outputFile',
        description: 'Output File Name'
    }),
    __metadata("design:type", String)
], YoutubeDlOptions.prototype, "outputFile", void 0);
exports.YoutubeDlOptions = YoutubeDlOptions;
let default_1 = class default_1 extends clime_1.Command {
    execute(postUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = new URL(postUrl);
            var client = new html_client_1.default(new URL(postUrl));
            var src = yield client.getVideoSource();
            if (src == null) {
                return "";
            }
            return `${get_client_1.getExecutableName("youtube-dl" /* youtubeDl */)} --add-header Referer:"${postUrl}" "${src}"`;
        });
    }
};
__decorate([
    __param(0, clime_1.param({
        description: 'Video Page URL',
        required: true,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], default_1.prototype, "execute", null);
default_1 = __decorate([
    clime_1.command({ description: 'Gets an attribution header for a post' })
], default_1);
exports.default = default_1;
//# sourceMappingURL=dl-cmd.js.map