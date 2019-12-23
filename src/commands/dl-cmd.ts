import { Command, command, param, Options, option } from 'clime';
import HtmlClient from '../html-client';
import { getExecutableName, Client } from '../get-client';

export class YoutubeDlOptions extends Options {
    @option({
      flag: 'o',
      name: 'outputFile',
      description: 'Output File Name'
    })
    public outputFile: string;
}

@command({description: 'Gets an attribution header for a post'})
export default class extends Command {    
    public async execute(
        @param({
            description: 'Video Page URL',
            required: true,
          })
          postUrl: string,
        //   options: HeaderOptions
    ): Promise<Promise<any> | any> {
        let url = new URL(postUrl);
        var client = new HtmlClient(new URL(postUrl));
        var src = await client.getVideoSource();
        if (src == null) {
            return "";
        }
        return `${getExecutableName(Client.youtubeDl)} --add-header Referer:"${postUrl}" "${src}"`
    }
}