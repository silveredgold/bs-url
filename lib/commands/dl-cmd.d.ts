import { Command, Options } from 'clime';
export declare class YoutubeDlOptions extends Options {
    outputFile: string;
}
export default class extends Command {
    execute(postUrl: string): Promise<Promise<any> | any>;
}
