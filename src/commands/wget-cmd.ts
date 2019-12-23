import { Command, command, param, Options, option } from 'clime';
import HtmlClient from '../html-client';
import { getExecutableName, Client } from '../get-client';

export class WgetOptions extends Options {
    @option({
      flag: 'o',
      name: 'outputFile',
      description: 'Output File Name'
    })
    public outputFile: string;

    @option({
        flag: 'a',
        name: 'autoFileName',
        toggle: true,
        description: "Attempt to automatically provide a reasonable file name"
    })
    public autoFileName: boolean;
}

@command({description: 'Gets the wget command required for a video page'})
export default class extends Command {    
    public async execute(
        @param({
            description: 'Video Page URL',
            required: true,
          })
          postUrl: string,
          options: WgetOptions
    ): Promise<Promise<any> | any> {
        var outputArgs: string = "";
        var client = new HtmlClient(new URL(postUrl));
        var src = await client.getVideoSource();
        if (src == null) {
            return "";
        }
        if (options?.autoFileName) {
            let fileName = (src || client.url.pathname).split('/').pop();
            outputArgs = `-O "${fileName}`;
        }
        else if (options?.outputFile) {
            outputArgs = `-O ${options.outputFile}`;
        }
        return `${getExecutableName(Client.wget)} --referer "${client.url.href}" "${src}" ${outputArgs}`;
    }
}