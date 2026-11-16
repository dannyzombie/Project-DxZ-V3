# Changelog

Every version of [dannyxzombie.com](https://dannyxzombie.com), newest first.
Each version is tagged in git and has a matching [GitHub Release](https://github.com/dannyzombie/dannyxzombie.com/releases), so any old version can be viewed or restored. You can also click through them on the site at [dannyxzombie.com/archive](https://dannyxzombie.com/archive/).

Version numbers: the first number goes up for a big redesign (v5.0), the second for new features or fixes (v4.1).

## v5.2 (2026-11-15)

### Added
- Two code project cards from my freeCodeCamp lessons (2024): **Cafe Menu** and **Cat Photo App**. Each one shows the real page live inside the card, a link to open it full size, and "View the code" boxes with my source. On the live site the code loads from GitHub, because Cloudflare adds its own script to every HTML page it serves
- The practice pages live in `projects/` and are kept out of Google results (`X-Robots-Tag: noindex` in `_headers`)

### Fixed
- Cat Photo App: I fixed my own 2024 bugs. An unclosed `<meta>` tag put stray "CatPhotoApp" text at the top of the page and hid the title. I also added the missing `<!DOCTYPE html>`, charset and viewport lines
- Cafe Menu: the stylesheet was saved as `CafeMenu.css`, but the page asks for `styles.css`, so the page had no styling outside freeCodeCamp. It's now saved under the right name

## v5.1 (2026-11-15)

### Added
- The playlist now updates itself: my latest public YouTube uploads appear first, followed by my hand-picked favorites, with no video listed twice. A small Cloudflare Worker script (`worker/index.js`) asks the YouTube Data API at most once an hour. Its key is a Cloudflare secret, never in this repo. The merge step (`mergeVideos` in `js/player.js`) is code I wrote myself
- If YouTube can't be reached within 3 seconds, the player falls back to the hand-picked list, so it never shows up empty

### Fixed
- Playlist titles are now inserted as plain text, so a title containing `<` or `&` can't break the page

## v5.0 (2026-11-15)

The site is now a portfolio, not just a gaming hub.

### Added
- A menu and new sections: About (first), Projects, Now Learning and Contact. About includes how I use AI: to learn and build while understanding the code, not just "vibe coding"
- First project card: my custom 3DS boot screen, with its YouTube video. The video only loads when you click it, so the page stays fast. If YouTube is blocked, the click opens the video on YouTube instead
- Only one video plays at a time: starting the 3DS video pauses the main player, and the other way around
- Contact section with my email and my social links always visible, now including GitHub and Xbox (the "Join the Horde!" button still works too)
- Search basics: a clearer page title and description, information about me that search engines can read (schema.org Person), `sitemap.xml` and `robots.txt`
- v4.5 is saved on the All Versions page at `/archive/v4/`. It keeps its own shuffle order, so visiting it doesn't change the live site's

### Changed
- The main video player now starts when you scroll down to the Videos section, not when the page opens, so nothing plays out of sight and visitors who don't scroll don't use up a video from the shuffle order
- The code is split into `index.html`, `css/style.css` and `js/` files instead of one big file. The scroll-start code in `js/player.js` is the first code I wrote myself
- New tagline: "Gamer, creator, and hands-on troubleshooter learning to code and mod games."

### Fixed
- The TikTok link now points straight to @dannyzombie (the old @DANNYXZOMBIE address only redirected there)
- Playlist titles no longer squeeze into a few letters per line on tablet and small laptop screens: when the playlist column is narrow, each thumbnail now sits above its title (this was also broken in v4)
- The browser theme color now works (it used a CSS variable, which `<meta>` tags can't read)

## v4.5 (2026-11-15)

### Changed
- The site is now served by Cloudflare Workers (deployed from this repo on every push) instead of GitHub Pages
- www.dannyxzombie.com redirects to dannyxzombie.com, so there is one address

### Security
- Security headers on every page (`_headers`): blocks other sites from framing the pages, limits what the referrer reveals, and turns off camera, microphone and location access
- Repo files that aren't part of the website (README, changelog, license, config) are no longer published (`.assetsignore`)
- Removed the extra public copy on workers.dev

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
