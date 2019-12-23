import { Command, command, param, Options, option } from 'clime';
import HtmlClient from '../html-client';
import { getExecutableName, Client } from '../get-client';

@command({description: 'Gets the youtube-dl command required for a video page'})
export default class extends Command {    
    public async execute(
        @param({
            description: 'Video Page URL',
            required: true,
          })
          postUrl: string
    ): Promise<Promise<any> | any> {
        var client = new HtmlClient(new URL(postUrl));
        var src = await client.getVideoSource();
        if (src == null) {
            return "";
        }
        return `${getExecutableName(Client.youtubeDl)} --add-header Referer:"${client.url.href}" "${src}"`
    }
}