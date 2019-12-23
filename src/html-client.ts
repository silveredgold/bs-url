import { fetch } from "cross-fetch";
import { JSDOM } from "jsdom";

export default class HtmlClient {
    url: URL;
    /**
     *
     */
    constructor(url: URL) {
        // super();
        this.url = url;
    }

    public async getHtml(): Promise<string> {
        var html = await this.get(this.url.href);
        return html;
    }

    public async getVideoSource(): Promise<string | null> {
        var html = await this.get(this.url.href);
        let window = (new JSDOM(html, { pretendToBeVisual: true})).window;
        // let document = parser.parseFromString(html, 'text/html');
        let value = window.document.getElementById('player3')?.getAttribute('value');
        let src = value == undefined ? null : value;
        // let src = document.getElementsByTagName('video')[0].getAttribute('src');
        return src;
    }

    private get(url: string): Promise<string> {
        return fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.text();
          })
      }
}