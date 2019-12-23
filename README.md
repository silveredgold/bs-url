# BDSMStreak URL Handler

This simple CLI will take an input of a BDSMStreak video page and output a command for downloading the video from that page. Currently, it supports pages from `bdsmstreak.com` and `hcbdsm.com` (which just rehosts BDSMStreak content) and supports download commands for `wget` and `youtube-dl`.

This is only needed because BDSMStreak uses JW Player, a horrifying shitshow of a player to download videos for.

## FAQ

#### Why doesn't `bs-url` just download the videos directly?

Because I don't want to write a fully-featured HTTP-based command-line download client when there's already *several* good ones to choose from. `youtube-dl` is just an amazing downloader and `wget` is available basically anywhere.

> Ideally, this app's capabilities should just be an addition to `youtube-dl` but this was faster.

#### Why BDSMStreak?

If you've ever tried to download a video from that site, you wouldn't need to ask that question. oof.

#### Can I use this to download from $someothersite

Not currently. If you're interested in that, open an issue and I'll try and improve the logic to support more sites more easily.