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

    public async getVideoSource(): Promise<string | null> {
        await this.getOriginalLink();
        var html = await this.get(this.url.href);
        let window = (new JSDOM(html, { pretendToBeVisual: true})).window;
        // let document = parser.parseFromString(html, 'text/html');
        let value = window.document.getElementById('player3')?.getAttribute('value');
        let src = value == undefined ? null : value;
        // let src = document.getElementsByTagName('video')[0].getAttribute('src');
        return src;
    }

    private async getOriginalLink(slug: string = "https://bdsmstreak.com/video/"): Promise<void> {
        if (this.url.host.indexOf('hcbdsm') == -1) return;
        var html = await this.get(this.url.href);
        let window = (new JSDOM(html, { pretendToBeVisual: true})).window;
        let value = window.document.getElementsByTagName('iframe')[0].getAttribute('src');
        let id = value?.split('/').pop();
        this.url = new URL(slug + id)
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