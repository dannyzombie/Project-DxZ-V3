# Project DxZ V3: dannyxzombie.com

My personal website, live at **[dannyxzombie.com](https://dannyxzombie.com)**.

Right now it's a gaming hub that plays videos from my [YouTube channel](https://www.youtube.com/channel/UCJGtHu4d7wUZmPxrtDYmotA) and links to all my socials. It's growing into a full portfolio that shows everything I do and like to do.

## Features

- **Random video on load:** a random video from my channel plays when the page opens.
- **Playlist panel:** pick any other video from the list.
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

I built this site with help from AI coding assistants: ChatGPT for the earlier versions, and Claude Code for the mobile layout, icons and portfolio work. Earlier versions of the site are in [Project-DxZ-V1](https://github.com/dannyzombie/Project-DxZ-V1) and [Project-DxZ-V2](https://github.com/dannyzombie/Project-DxZ-V2).
