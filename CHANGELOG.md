# Changelog

Every version of [dannyxzombie.com](https://dannyxzombie.com), newest first.
Each version is tagged in git and has a matching [GitHub Release](https://github.com/dannyzombie/dannyxzombie.com/releases), so any old version can be viewed or restored. You can also click through them on the site at [dannyxzombie.com/archive](https://dannyxzombie.com/archive/).

Version numbers: the first number goes up for a big redesign (v5.0), the second for new features or fixes (v4.1).

## v4.4 (2026-11-15)

### Fixed
- Long video titles no longer change the layout. The "now playing" title could widen the player column (measured: 16 different widths across the 47 titles at the same screen size) and squeeze the playlist, and 7 titles made the playlist scroll sideways. Now the player keeps one width per screen size and long hashtags in the playlist wrap. Measured on all 47 titles at 360, 375, 390, 768, 1024, 1280 and 1920 pixels wide: no overflow.

## v4.3 (2026-11-15)

### Fixed
- The video player now loads as soon as the page opens. Cloudflare's Rocket Loader (a speed setting, on since 2026-11-03) was holding the page's script until the visitor moved the mouse, touched the screen or pressed a key, so the player area stayed empty until then. The script is now marked `data-cfasync="false"`, Cloudflare's documented way to exclude a script from Rocket Loader. Same fix applied to the archived v1, v2 and v3 pages.
- v1's changelog entry now says the domain setting was only tried in 2024, before I owned the domain

## v4.2 (2026-11-15)

Fixes found in a full re-check of the site.

### Fixed
- Unmuting a video now really starts at 50% volume. In v4.0 it only switched to 50% when the video's state changed (paused, ended), so unmuting mid-video played at 100%. Tested with a real click on YouTube's unmute button, and the 50% carries over to the next video.
- Corrected the descriptions of v1 and v2 on the All Versions page and in this changelog to match their actual code
- README: the icon credits now say which icons come from Simple Icons, and no longer claim the page makes no outside image requests (playlist thumbnails load from YouTube)

## v4.1 (2026-11-15)

All versions in one place.

### Added
- "All Versions" page at [dannyxzombie.com/archive](https://dannyxzombie.com/archive/) with a preview of every version, and a link to it in the footer
- v1, v2 and v3 can be opened and used exactly as they were, with a small bar on top linking back to the current site

### Changed
- The old Project-DxZ-V1 and Project-DxZ-V2 repos were merged into this one with their full commit history, and the repo was renamed to **dannyxzombie.com**
- Version tags `v1.0` and `v2.0` added for the two oldest versions

## v4.0 (2026-11-15)

The first version built with Claude Code: a modern restyle and a much better video player.

### Added
- My avatar in an animated neon ring at the top of the page
- Neon magenta and purple color theme across the whole site
- Prev and Next buttons under the video player, with the current video's title
- Auto-play: when a video ends, the next one starts
- Shuffle (on by default) with an on/off toggle. Every video plays once before any repeats, Prev goes back to the one you just watched, and a reload continues where you left off instead of replaying the same video
- The playing video is highlighted in the playlist
- Browser tab icon, home-screen icon, and a preview card when the link is shared on Discord, X, iMessage and similar apps

### Changed
- Social links redesigned: built-in brand icons with brand colors and smooth animations (no more images loaded from other sites)
- Twitter link now points to x.com
- README rewritten to describe how the site really works

### Fixed
- Layout on phones: the player goes full width and the playlist moves underneath
- Social icons fit in one row on phones

## v3.0 (2024-09-21, domain added 2026-11-02)

The original V3, built with ChatGPT.

- YouTube player that starts a random video from a hand-picked list of 47
- Playlist panel to pick another video
- "Join the Horde!" button that reveals the social links
- Custom domain dannyxzombie.com

## v2.0 (2024-09-21)

- Zombie-style title font (Creepster) and a dark navy-blue theme
- Starts a random video from a hand-picked list of 46 (one of the 46 IDs is cut off and doesn't play)
- "Join the Horde!" button that reveals links to Twitch, Twitter, Instagram, Facebook, TikTok and Medal
- Full-screen YouTube player

Originally its own repo, Project-DxZ-V2. Now in `archive/v2/`.

## v1.0 (2024-09-21)

The first version.

- Simple dark page that plays my YouTube playlist (muted autoplay) with a link to my channel
- A custom-domain setting for dannyxzombie.com was tried on 2024-09-11 and removed the same day, before I owned the domain

Originally its own repo, Project-DxZ-V1. Now in `archive/v1/`.
