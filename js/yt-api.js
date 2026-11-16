// Loads the YouTube IFrame Player API once for the whole page, and makes sure
// only one video plays at a time (the main player and the 3DS project video).

/**
 * True when a click on a video link should be left to the browser instead of
 * playing the video inside the page: the visitor asked to open it somewhere
 * else (new tab, new window, download...).
 * Used by the 3DS card (js/site.js) and the playlist (js/player.js).
 * event: the click event. Useful properties: event.ctrlKey, event.metaKey
 * (Cmd on a Mac), event.shiftKey, event.altKey, event.button (0 = left button).
 */
function opensElsewhere(event) {
    return event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !==0;
    
}

(function () {
    const players = [];   // every player registered with exclusive()

    let markReady;
    const ready = new Promise(resolve => { markReady = resolve; });
    // YouTube's script calls this global function when it has finished loading
    window.onYouTubeIframeAPIReady = () => markReady();

    // Resolves if YouTube's script fails to load (ad blocker, school/work filter,
    // offline). The browser reports that at once, so we don't have to wait it out.
    let markBlocked;
    const blocked = new Promise(resolve => { markBlocked = resolve; });

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.onerror = () => markBlocked();
    document.head.appendChild(tag);

    window.dxzYT = {
        ready,

        // Wait up to `ms` for YouTube. Gives 'ready', 'blocked' (the script failed
        // to load) or 'slow' (still loading after `ms`). `ready` can still arrive
        // after 'slow', so callers may keep listening to dxzYT.ready.
        whenReady(ms) {
            const slow = new Promise(resolve => setTimeout(() => resolve('slow'), ms));
            return Promise.race([
                ready.then(() => 'ready'),
                blocked.then(() => 'blocked'),
                slow
            ]);
        },

        // Add a player to the "one at a time" group
        exclusive(player) {
            if (!players.includes(player)) players.push(player);
        },

        // True while any registered player is playing
        anyPlaying() {
            return players.some(p => typeof p.getPlayerState === 'function' &&
                                     p.getPlayerState() === YT.PlayerState.PLAYING);
        },

        // Players forward their state changes here. When one starts playing,
        // every other registered player is paused.
        notify(player, state) {
            if (state !== YT.PlayerState.PLAYING) return;
            players.forEach(other => {
                if (other !== player && typeof other.pauseVideo === 'function') other.pauseVideo();
            });
        }
    };
})();
