// Page features that aren't the main video player.

// "Join the Horde!" button: show or hide the social icons under it
function toggleSocialLinks() {
    const socialLinks = document.getElementById('social-links');
    const isOpen = socialLinks.classList.toggle('open');
    document.getElementById('horde-btn').setAttribute('aria-expanded', isOpen);
}
document.getElementById('horde-btn').addEventListener('click', toggleSocialLinks);

// Project videos: show only a thumbnail until clicked, so the page doesn't load
// a second YouTube player on open. If YouTube's script is blocked or too slow,
// the click falls back to opening the video on YouTube (the link's own address).
const YT_WAIT_MS = 4000;

function loadCardVideo(facade) {
    if (facade.dataset.loading) return;   // already loading: ignore extra clicks
    facade.dataset.loading = 'true';
    // Show a spinner and say "Loading" so the click visibly did something
    facade.classList.add('is-loading');
    facade.setAttribute('aria-busy', 'true');

    dxzYT.whenReady(YT_WAIT_MS).then(result => {
        if (result !== 'ready') {
            location.href = facade.href;   // blocked or too slow: open it on YouTube
            return;
        }
        const box = document.createElement('div');
        box.className = 'card-video';
        box.tabIndex = -1;   // can hold focus, but isn't an extra Tab stop
        const target = document.createElement('div');
        box.appendChild(target);
        const hadFocus = document.activeElement === facade;
        facade.replaceWith(box);
        // The focused link was just removed. Without this the browser drops
        // keyboard focus back to the top of the page.
        if (hadFocus) box.focus();
        new YT.Player(target, {
            width: '100%',
            height: '100%',
            videoId: facade.dataset.videoId,
            playerVars: { autoplay: 1, rel: 0, playsinline: 1 },   // not muted: the visitor clicked
            events: {
                onReady: e => {
                    dxzYT.exclusive(e.target);
                    // Hand focus on to the player itself, unless the visitor moved on
                    if (document.activeElement === box) e.target.getIframe().focus();
                },
                onStateChange: e => dxzYT.notify(e.target, e.data)
            }
        });
    });
}

// Coming back with the browser's Back button can restore this page exactly as it
// was, including a card still marked "loading" from the YouTube fallback. Reset it
// so the card works again.
window.addEventListener('pageshow', event => {
    if (!event.persisted) return;
    document.querySelectorAll('.video-facade[data-loading]').forEach(facade => {
        delete facade.dataset.loading;
        facade.classList.remove('is-loading');
        facade.removeAttribute('aria-busy');
    });
});

// "View the code" boxes: load a project's source file the first time the box is
// opened. On the live site the file comes from GitHub, because Cloudflare adds its
// own script to every HTML page it serves, and that would show up in the code box.
// Anywhere else (local preview) the file comes straight from this site.
const CODE_BASE = location.hostname === 'dannyxzombie.com'
    ? 'https://raw.githubusercontent.com/dannyzombie/dannyxzombie.com/main/'
    : '/';

document.querySelectorAll('.code-view').forEach(box => {
    box.addEventListener('toggle', () => {
        if (!box.open || box.dataset.loaded) return;
        box.dataset.loaded = 'true';
        const code = box.querySelector('code');
        code.textContent = 'Loading…';
        fetch(CODE_BASE + box.dataset.src)
            .then(response => {
                if (!response.ok) throw new Error(response.status);
                return response.text();
            })
            .then(text => { code.textContent = text; })   // plain text: the code is shown, never run
            .catch(() => {
                delete box.dataset.loaded;   // let the next open try again
                code.textContent = "Couldn't load the code. Use \"Source on GitHub\" instead.";
            });
    });
});

document.querySelectorAll('.video-facade').forEach(facade => {
    facade.addEventListener('click', event => {
        if (opensElsewhere(event)) return;   // Ctrl-click etc.: let the browser open a new tab
        event.preventDefault();
        loadCardVideo(facade);
    });
});
