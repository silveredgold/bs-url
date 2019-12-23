export default class HtmlClient {
    url: URL;
    /**
     *
     */
    constructor(url: URL);
    getHtml(): Promise<string>;
    getVideoSource(): Promise<string | null>;
    private get;
}
