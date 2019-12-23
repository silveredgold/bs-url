export const enum Client {
    wget = "wget",
    youtubeDl = "youtube-dl"
}


export function getExecutableName(client: Client) {
    var exeType = process.platform === 'win32' ? ".exe" : "";
    return `${client}${exeType}`;
}