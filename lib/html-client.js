"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cross_fetch_1 = require("cross-fetch");
const jsdom_1 = require("jsdom");
class HtmlClient {
    /**
     *
     */
    constructor(url) {
        // super();
        this.url = url;
    }
    getHtml() {
        return __awaiter(this, void 0, void 0, function* () {
            var html = yield this.get(this.url.href);
            return html;
        });
    }
    getVideoSource() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            var html = yield this.get(this.url.href);
            let window = (new jsdom_1.JSDOM(html, { pretendToBeVisual: true })).window;
            // let document = parser.parseFromString(html, 'text/html');
            let value = (_a = window.document.getElementById('player3')) === null || _a === void 0 ? void 0 : _a.getAttribute('value');
            let src = value == undefined ? null : value;
            // let src = document.getElementsByTagName('video')[0].getAttribute('src');
            return src;
        });
    }
    get(url) {
        return cross_fetch_1.fetch(url)
            .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.text();
        });
    }
}
exports.default = HtmlClient;
//# sourceMappingURL=html-client.js.map