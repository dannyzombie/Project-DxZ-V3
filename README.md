# dannyxzombie.com

My personal website, live at **[dannyxzombie.com](https://dannyxzombie.com)**.

It's my portfolio: the projects I've made, what I'm learning, a bit about me, gameplay videos from my [YouTube channel](https://www.youtube.com/channel/UCJGtHu4d7wUZmPxrtDYmotA), and links to all my socials.

## Features

- **Portfolio sections:** Projects, Now Learning, About, Videos and Contact, with a menu that jumps to each one.
- **Project videos that load on click:** the 3DS project card shows a thumbnail and only loads the YouTube player when clicked. Only one video plays at a time.
- **Code project cards:** my freeCodeCamp projects run live inside their cards, with "View the code" boxes that show the source.
- **Video player with shuffle:** videos play back to back in a shuffled order with no repeats, with Prev/Next buttons and a toggle to switch to playlist order. It starts (muted) when you scroll down to it. Reloading the page carries on with the next video instead of starting over.
- **Playlist panel:** pick any video from the list. The one playing is highlighted.
- **Social links:** YouTube, Twitch, X, Instagram, Facebook, TikTok and Medal behind the "Join the Horde!" button, with animated brand-colored buttons. The Contact section lists those plus GitHub and Xbox.
- **Works on phones:** on small screens the player goes full-width and the playlist moves underneath.
- **Link previews:** sharing the link on Discord, X, iMessage and similar apps shows a preview card, and the site has its own icon in browser tabs.

## How it works

- **One page, no build step:** plain HTML in `index.html`, styles in `css/style.css`, and scripts in `js/`.
- **Video player:** uses the [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference). The playlist shows my latest public uploads first, then my hand-picked favorites. A small Cloudflare Worker script (`worker/index.js`) gets the latest uploads from the [YouTube Data API](https://developers.google.com/youtube/v3) and caches them for an hour. Its API key is a Cloudflare secret, restricted to the YouTube Data API only, so **nothing secret lives in this repo or in the page**. If YouTube can't be reached, the player uses only the hand-picked list.
- **Icons:** the YouTube, Twitch, X, Instagram, Facebook, TikTok and GitHub icons are from [Simple Icons](https://simpleicons.org) (CC0). The Medal icon and the Xbox game-controller icon are simple custom drawings (Simple Icons has neither). All are inline SVG, so the icons need no outside image requests. (Video thumbnails in the playlist do load from YouTube.)
- **Hosting:** [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/). Cloudflare deploys this repo automatically on every push to `main` (settings in `wrangler.jsonc`). `www` redirects to `dannyxzombie.com`.
- **Security:** HTTPS only (HSTS), TLS 1.2+, DNSSEC, and security headers set in `_headers`. Files that aren't part of the website are kept off it by `.assetsignore`.

## Files

| File | What it is |
|---|---|
| `index.html` | The page: all sections and their text |
| `css/style.css` | All the styles (colors, layout, phone sizes) |
| `js/yt-api.js` | Loads YouTube's player code once and makes sure only one video plays at a time |
| `js/player.js` | The main video player: shuffle, Prev/Next, playlist, start on scroll, latest uploads |
| `worker/index.js` | Cloudflare Worker script: answers `/api/videos` with my latest YouTube uploads (not published as a file) |
| `js/site.js` | The "Join the Horde!" button, the click-to-load project video and the "View the code" boxes |
| `images/` | My avatar and the 3DS project thumbnail |
| `projects/` | My freeCodeCamp practice pages (Cafe Menu, Cat Photo App), shown live in the project cards |
| `robots.txt`, `sitemap.xml` | Tell search engines what pages the site has |
| `favicon.svg`, `favicon-32.png` | Browser tab icon |
| `apple-touch-icon.png` | Icon shown when the site is saved to a phone's home screen |
| `og-image.png` | Preview image shown when the link is shared |
| `wrangler.jsonc` | Cloudflare Worker settings (domain, deploy options) |
| `_headers` | Security headers added to every page |
| `.assetsignore` | Repo files that are not published to the website |
| `CHANGELOG.md` | What changed in each version |
| `archive/` | Every earlier version of the site (v1 to v4), viewable at [dannyxzombie.com/archive](https://dannyxzombie.com/archive/) |

## Versions

Every release is tagged (`v1.0`, `v2.0` and so on) and listed on the [Releases page](https://github.com/dannyzombie/dannyxzombie.com/releases), where you can browse or download any old version. You can also click through every version on the site itself at [dannyxzombie.com/archive](https://dannyxzombie.com/archive/).

This repo holds the full history of all versions. V1 and V2 started out as separate repos (Project-DxZ-V1 and Project-DxZ-V2) and were merged in, commits and all, under `archive/`. See [CHANGELOG.md](CHANGELOG.md) for what changed in each one.

## Run it locally

Any static file server works for the page (the latest-uploads list needs the Worker, so locally the player uses the hand-picked list). With Node.js installed:

```bash
npx serve .
```

Then open the address it prints.

## Roadmap

- [x] Turn the site into a full portfolio with Projects, Now Learning, About, Videos and Contact sections
- [ ] Modern restyle: cleaner fonts, smooth scrolling and animations
- [x] Pull my latest uploads automatically, keeping the hand-picked list as a backup
- [x] Split the single file into separate HTML, CSS and JS

## How it was built

I built this site with help from AI coding assistants: ChatGPT for the earlier versions, and Claude Code for the mobile layout, icons and portfolio work.
