// Main video player: shuffle deck, Prev/Next, playlist (moved out of index.html in v5.0)

const videos = [
    { id: 'iG4-vkwlua0', title: 'WE DID IT! BACK TO BACK WINS INTO DIAMOND, LETS GO #apexlegends #apex #gaming #apexgameplay #ranked' },
    { id: 'pSG8lsEwn2o', title: 'Apex Legends ranked gameplay | Close game! 8 elims with squad | 4 kills 2k damage' },
    { id: '6TKKxtONSqc', title: 'Apex Legends ranked gameplay - 11 elims with squad! Close game - Road to DIAMOND!' },
    { id: 'xsyvRGug-Aw', title: 'Apex Legends Control Montage #control #apex #apexlegends #montage' },
    { id: 'wZCC64nDniI', title: 'TM8 has immaculate awareness! xD #shorts #apexlegends #apexshorts #squad #funny #gameplay #memes' },
    { id: 'sF2UCyJdejk', title: 'I RAN OUT OF AMMO T_T | Apex Legends gameplay | #apex #gaming #gameplay #season14 #s14 #apexlegends' },
    { id: 'DdbDcg8AKfE', title: 'Apex Legends Ranking up Season 14 gameplay' },
    { id: 'xZNt_t4EHw0', title: 'Dropshot games with a team! | Road to GC in Extra Modes | Rocket League Gameplay | Stream Highlight' },
    { id: '7XiqtEMDAwk', title: 'Apex Legends Gameplay PoopMontage #5 | #apex #gaming #gameplay #season14 #s14 #apexlegends #montage' },
    { id: 'WDPWRZZlkFc', title: 'Apex Legends 15 kills ( Xbox STREAM-HIGHLIGHTS made with Athenascope)' },
    { id: 'gvOaKFMR9f4', title: 'Rocket League Extra modes | placements and grinding | half hour of me having fun | Stream Highlight' },
    { id: 'UmQq6BSNjqc', title: 'APEX LEGENDS // battlepass grinding, need to get to level 100! (FULL-STREAM DANNY ZOMBIE)' },
    { id: 'YxsMnHgzbgA', title: 'Made it to Diamond on Xbox! lets keep going! :D | Apex Legends gameplay (Full stream)' },
    { id: '4LaLXpXYXl4', title: 'first guy had absolutely no idea what was coming to him! xD #shorts #apexlegends' },
    { id: 'J-4kUPSXHKI', title: 'Stream Highlight: 2k dmg 8 kill game Win with mirage and i ranked up!' },
    { id: '6rviozTkHys', title: 'Apex Legends Winter Express 2k damage 8 kill game // STREAM HIGHLIGHT GAMEPLAY' },
    { id: 'mkuIN79idz0', title: 'Extra modes! Doing placements and just grinding! | stream #2 | ROCKET LEAGUE GAMEPLAY (FULL STREAM)' },
    { id: '1cc3lwafEPg', title: 'Stream Highlight: 1600dmg 6 kill Win with revenant in Plat lobby' },
    { id: 'Z8tOZYK2F3Q', title: 'yo theres nobody here??! | Xbox Titanfall1 servers | Titanfall2 | Apex Legends| End w/ Rocket League' },
    { id: 'FgqAP2twZgs', title: 'Highlight: Pilot hunting // Apex Legends Duos - 5 kill W on Olympus' },
    { id: '2x4HNRLvKZw', title: 'Highlight: WE WILL GET TO DIAMOND EVENTUALLY | Gold Rank Ranked Gameplay, Close Games | APEX LEGENDS' },
    { id: 'xQC3RzNvDZc', title: 'i love this game // chillin // pc Titanfall 2' },
    { id: 'YR9pGibUXLg', title: 'wut it do lets get to Diamond b4 season ends! // Full Stream Apex Legends' },
    { id: 'dRVS7QsOIuo', title: 'Highlight: Pilot hunting // Attrition - Complex - 30 Pilot kills' },
    { id: '1zm6J38hZIk', title: 'Highlight: Pilot hunting // Apex Legends Arenas - 7 Kill game + W' },
    { id: 'UdMSh8oFSs4', title: '"git gud" grind | Rocket League Gameplay | Full Stream' },
    { id: '8S0OIa_AQ4Q', title: 'Highlight: lets see how far we get today. // pulled an ACEU in ranked. 6 kill solo game' },
    { id: '_gF7aKynQuo', title: 'Highlight: lets see how far we get today. // 10 kill game 1600 damage in pubs with @zer0gravity66' },
    { id: 'kVwxwMQP1oQ', title: 'Highlight: lets see how far we get today. // 11 kill game 3k damage in Gold // Ranked Apex Legends' },
    { id: 'nHeo2gBgAEE', title: 'Highlight: ranked climb so i can play w/my friends // Win 3! Let\'s go! - 8 kills 2k damage' },
    { id: 'o1dcWM684-c', title: 'Apex Legends Full Stream // ranked climb so i can play w/my friends' },
    { id: 'd3sZ88nbtvo', title: 'Highlight: Pilot hunting // 34 Pilot kills in Forwardbase Kodai // Attrition' },
    { id: 'V6l3lZU0fTk', title: 'video game jams // weeeeeee // Titanfall 2 into Rocket League' },
    { id: 'LbV1cn5qGGM', title: 'Pilot hunting ~ Titanfall 2 then Apex Legends and Rocket League' },
    { id: 'Z8KFkWBu9PQ', title: 'APEX LEGENDS GAMEPLAY DUOS // TRIOS TRYING OUT FUSE | BP GRIND | XBOX (FULL STREAM)' },
    { id: 'EMJCeZOhubY', title: 'Highlight: ranked climb so i can play w/my friends // Win #2 - 9 kills - 2k damage' },
    { id: '93HU5jBtj7w', title: 'Highlight: Pilot hunting // 33 Pilot Kills in Relic, made a comeback! // Attrition // SKIP TO 2:20' },
    { id: 'Uqn4KcwoIKk', title: 'Highlight: Pilot hunting // Attrition on Forwardbase Kodai - 30 Pilot kills' },
    { id: 'Sh9dOHaFj9A', title: 'Highlight: video game jams // weeeeeee // 36 Pilot kills in Attrition - Boomtown' },
    { id: '1J2Tzczbc0w', title: 'Highlight: i love this game // Pilot vs Pilot // LMFAO someone thought i was hacking 🤣' },
    { id: 'gj122kRh3JA', title: 'Highlight: i love this game // Bounty Hunt - i do a little bit of everything 😏' },
    { id: 'Uz3cgd6op2E', title: 'Highlight: i love this game // PC - audio went out half way :( and we lost :(( but my ending was dec' },
    { id: 'AQzGLTJHRvs', title: 'WE WILL GET TO DIAMOND EVENTUALLY | new year same me | APEX LEGENDS GAMEPLAY (FULL STREAM)' },
    { id: '1QS36KySpt4', title: 'disruptor rounds are coming back!!? lets get to Diamond b4 season ends! // Full Stream Apex Legends' },
    { id: '112u-rnku_s', title: 'Highlight: Ranked Apex climb so i can play w/my friends // First W - 7 kills' },
    { id: 'zRua-ugVNT4', title: 'Apex Legends Full Stream // The goal is platinum rank and 900 kills with wraith' },
    { id: 'wNU4BhGRhkA', title: 'Highlight: Pilot hunting // 26 Pilot kills on Exoplanet // Attrition' }
];

let player;
let currentIndex = 0;      // position in `videos` of what's playing now

// ---------- Play order: shuffle deck or list order, remembered across reloads ----------
const STORE_KEY = 'dxz-player';
let shuffleOn = true;      // default for first-time visitors
let order = [];            // shuffled positions in `videos`; each appears exactly once
let deckPos = 0;           // where we are in `order`

// Fisher–Yates: every arrangement is equally likely
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Fresh deck that never starts with `avoid` (so a new round can't repeat the last video)
function newDeck(avoid) {
    const deck = shuffle(videos.map((_, i) => i));
    if (deck[0] === avoid && deck.length > 1) [deck[0], deck[1]] = [deck[1], deck[0]];
    return deck;
}

// Saved as video IDs, not positions, so adding/removing videos later can't scramble it.
// Wrapped in try/catch: storage can be blocked (private mode, strict privacy settings).
function saveState() {
    try {
        localStorage.setItem(STORE_KEY, JSON.stringify({
            shuffle: shuffleOn,
            order: order.map(i => videos[i].id),
            last: videos[currentIndex].id
        }));
    } catch (e) { /* not saved; the player still works */ }
}

function loadState() {
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem(STORE_KEY)); } catch (e) {}
    const indexOfId = id => videos.findIndex(v => v.id === id);

    if (saved && typeof saved.shuffle === 'boolean') shuffleOn = saved.shuffle;
    const last = saved ? indexOfId(saved.last) : -1;

    // Reuse the saved deck only if it still matches the current video list exactly
    const savedOrder = saved && Array.isArray(saved.order) ? saved.order.map(indexOfId) : [];
    const deckValid = savedOrder.length === videos.length &&
                      new Set(savedOrder).size === videos.length && !savedOrder.includes(-1);

    order = deckValid ? savedOrder : newDeck(last);

    if (last === -1) {
        // First visit: start at the top of the deck (or anywhere, in list mode)
        currentIndex = shuffleOn ? order[0] : Math.floor(Math.random() * videos.length);
    } else {
        // Returning: start on the video AFTER the one played last time, never the same one
        currentIndex = pickNextIndex(last, 1);
    }
    deckPos = order.indexOf(currentIndex);
    saveState();
}

// Start once the YouTube API (loaded by js/yt-api.js) is ready
dxzYT.ready.then(() => {
    randomizeAndLoadVideo();
    displayPlaylist();
});

function randomizeAndLoadVideo() {
    loadState();   // picks currentIndex: next in the saved deck, or a fresh start
    setShuffle(shuffleOn);   // make the toggle match the saved setting

    player = new YT.Player('player', {
        width: '100%',
        height: '100%',
        videoId: videos[currentIndex].id,
        playerVars: {
            autoplay: 1,
            controls: 1,
            mute: 1,          // browsers only allow autoplay when muted
            rel: 0,
            playsinline: 1    // play inside the page on iPhones, not fullscreen
        },
        events: {
            onReady: (event) => {
                // Set while still muted: tested 2026-11-15, the player keeps this
                // level, so the viewer's first unmute plays at 50%, not 100%.
                event.target.setVolume(50);
                dxzYT.exclusive(event.target);   // only one video on the page plays at a time
                markActive(false);
            },
            onStateChange: onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    dxzYT.notify(event.target, event.data);   // pauses any other video when this one plays
    // When a video finishes, roll straight into the next one
    if (event.data === YT.PlayerState.ENDED) {
        step(1);
    }
}

/**
 * Decide which video plays after `current`.
 * direction is +1 (Next button / video ended) or -1 (Prev button).
 * Must return a valid index into `videos` (0 to videos.length - 1).
 */
function pickNextIndex(current, direction) {
    if (!shuffleOn) {
        // List order with wrap-around. Adding videos.length first keeps
        // the result positive when going back from video 0.
        return (current + direction + videos.length) % videos.length;
    }
    // Shuffle: step through the deck. Prev really goes back; no repeats until all are played.
    let pos = order.indexOf(current) + direction;
    if (pos >= order.length) {          // whole deck played: reshuffle for a new round
        order = newDeck(current);
        pos = 0;
    }
    if (pos < 0) pos = order.length - 1;
    deckPos = pos;
    return order[pos];
}

function step(direction) {
    playIndex(pickNextIndex(currentIndex, direction));
}

function playIndex(index) {
    currentIndex = index;
    deckPos = order.indexOf(index);  // playlist clicks: carry on through the deck from here
    player.loadVideoById(videos[index].id);
    markActive(true);
    saveState();
}

function setShuffle(on) {
    shuffleOn = on;
    const btn = document.getElementById('shuffle-btn');
    btn.setAttribute('aria-pressed', on);
    btn.title = on ? 'Shuffle is on' : 'Shuffle is off (playing in list order)';
    saveState();
}

// Highlight the playing video in the panel and show its title under the player
function markActive(scroll) {
    document.querySelectorAll('.playlist-item').forEach((item, i) => {
        const isActive = i === currentIndex;
        item.classList.toggle('active', isActive);
        item.setAttribute('aria-current', isActive ? 'true' : 'false');
        if (isActive && scroll) item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
    document.getElementById('now-playing').textContent = videos[currentIndex].title;
}

function displayPlaylist() {
    const playlistPanel = document.getElementById('playlist-panel');
    playlistPanel.innerHTML = ''; // Clear the panel
    videos.forEach((video, i) => {
        const item = document.createElement('div');
        item.className = 'playlist-item';
        item.onclick = () => playIndex(i);
        item.innerHTML = `
            <img src="https://img.youtube.com/vi/${video.id}/default.jpg" alt="" loading="lazy">
            <span>${video.title}</span>
        `;
        playlistPanel.appendChild(item);
    });
}

document.getElementById('prev-btn').addEventListener('click', () => step(-1));
document.getElementById('next-btn').addEventListener('click', () => step(1));
document.getElementById('shuffle-btn').addEventListener('click', () => setShuffle(!shuffleOn));
