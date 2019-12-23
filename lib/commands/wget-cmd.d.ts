import { Command, Options } from 'clime';
export declare class WgetOptions extends Options {
    outputFile: string;
    autoFileName: boolean;
}
export default class extends Command {
    execute(postUrl: string, options: WgetOptions): Promise<Promise<any> | any>;
}
