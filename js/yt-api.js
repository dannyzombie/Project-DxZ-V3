// Loads the YouTube IFrame Player API once for the whole page, and makes sure
// only one video plays at a time (the main player and the 3DS project video).
(function () {
    const players = [];   // every player registered with exclusive()

    let markReady;
    const ready = new Promise(resolve => { markReady = resolve; });
    // YouTube's script calls this global function when it has finished loading
    window.onYouTubeIframeAPIReady = () => markReady();

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);

    window.dxzYT = {
        ready,

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
