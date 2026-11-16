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

    const timeout = new Promise(resolve => setTimeout(() => resolve('timeout'), YT_WAIT_MS));
    Promise.race([dxzYT.ready.then(() => 'ready'), timeout]).then(result => {
        if (result === 'timeout') {
            location.href = facade.href;
            return;
        }
        const box = document.createElement('div');
        box.className = 'card-video';
        const target = document.createElement('div');
        box.appendChild(target);
        facade.replaceWith(box);
        new YT.Player(target, {
            width: '100%',
            height: '100%',
            videoId: facade.dataset.videoId,
            playerVars: { autoplay: 1, rel: 0, playsinline: 1 },   // not muted: the visitor clicked
            events: {
                onReady: e => dxzYT.exclusive(e.target),
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
    });
});

document.querySelectorAll('.video-facade').forEach(facade => {
    facade.addEventListener('click', event => {
        event.preventDefault();
        loadCardVideo(facade);
    });
});
