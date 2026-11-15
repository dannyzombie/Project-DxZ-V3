# dannyxzombie.com

My personal website, live at **[dannyxzombie.com](https://dannyxzombie.com)**.

Right now it's a gaming hub that plays videos from my [YouTube channel](https://www.youtube.com/channel/UCJGtHu4d7wUZmPxrtDYmotA) and links to all my socials. It's growing into a full portfolio that shows everything I do and like to do.

## Features

- **Video player with shuffle:** videos play back to back in a shuffled order with no repeats, with Prev/Next buttons and a toggle to switch to playlist order. Reloading the page carries on with the next video instead of starting over.
- **Playlist panel:** pick any video from the list. The one playing is highlighted.
- **Social links:** YouTube, Twitch, X, Instagram, Facebook, TikTok and Medal, with animated brand-colored buttons.
- **Works on phones:** on small screens the player goes full-width and the playlist moves underneath.
- **Link previews:** sharing the link on Discord, X, iMessage and similar apps shows a preview card, and the site has its own icon in browser tabs.

## How it works

- **One page, no build step:** plain HTML, CSS and JavaScript in `index.html`.
- **Video player:** uses the [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference). The video list is a hand-picked set of video IDs in the page, so **no API key is needed and nothing secret lives in this repo**.
- **Icons:** inline SVG brand icons from [Simple Icons](https://simpleicons.org) (CC0), so there are no outside image requests.
- **Hosting:** GitHub Pages with a custom domain (`CNAME`), behind Cloudflare.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site: layout, styles and scripts |
| `favicon.svg`, `favicon-32.png` | Browser tab icon |
| `apple-touch-icon.png` | Icon shown when the site is saved to a phone's home screen |
| `og-image.png` | Preview image shown when the link is shared |
| `CNAME` | Points GitHub Pages at dannyxzombie.com |
| `CHANGELOG.md` | What changed in each version |
| `archive/` | Every earlier version of the site (v1, v2, v3), viewable at [dannyxzombie.com/archive](https://dannyxzombie.com/archive/) |

## Versions

Every release is tagged (`v1.0` to `v4.0` so far) and listed on the [Releases page](https://github.com/dannyzombie/dannyxzombie.com/releases), where you can browse or download any old version. You can also click through every version on the site itself at [dannyxzombie.com/archive](https://dannyxzombie.com/archive/).

This repo holds the full history of all versions. V1 and V2 started out as separate repos (Project-DxZ-V1 and Project-DxZ-V2) and were merged in, commits and all, under `archive/`. See [CHANGELOG.md](CHANGELOG.md) for what changed in each one.

## Run it locally

Any static file server works. With Node.js installed:

```bash
npx serve .
```

Then open the address it prints.

## Roadmap

- [ ] Turn the site into a full portfolio with About, Skills, Projects, Videos and Contact sections
- [ ] Modern restyle: cleaner fonts, smooth scrolling and animations
- [ ] Pull my latest uploads automatically instead of a hand-picked list
- [ ] Split the single file into separate HTML, CSS and JS

## How it was built

I built this site with help from AI coding assistants: ChatGPT for the earlier versions, and Claude Code for the mobile layout, icons and portfolio work.
