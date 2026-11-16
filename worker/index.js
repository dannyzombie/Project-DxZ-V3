// Cloudflare Worker for dannyxzombie.com (added in v5.1).
//
// Everything is served from the static files as before, except one address:
//   /api/videos  ->  my latest public YouTube uploads, as JSON.
//
// The YouTube API key lives in a Cloudflare secret (YOUTUBE_API_KEY), never in
// this repo or in the page. Answers are cached at Cloudflare for an hour, so
// YouTube is asked about once an hour no matter how many people visit.

const UPLOADS_PLAYLIST = 'UUJGtHu4d7wUZmPxrtDYmotA'; // "UU" + channel ID = every upload
const CACHE_SECONDS = 60 * 60;                       // ask YouTube at most once an hour
const MAX_RESULTS = 50;                              // YouTube's limit for one request

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        if (url.pathname === '/api/videos') {
            return handleVideos(request, env, ctx);
        }
        return env.ASSETS.fetch(request);   // every other address: the normal website files
    }
};

async function handleVideos(request, env, ctx) {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
        return json({ error: 'Method not allowed' }, 405, { Allow: 'GET, HEAD' });
    }

    // One shared cache entry, whatever query string a visitor adds
    const cacheKey = new Request(new URL('/api/videos', request.url).toString());
    const cache = caches.default;
    const cached = await cache.match(cacheKey);
    if (cached) return cached;

    if (!env.YOUTUBE_API_KEY) {
        return json({ error: 'Video list is not set up yet' }, 503);
    }

    let videos;
    try {
        videos = await fetchUploads(env.YOUTUBE_API_KEY);
    } catch (err) {
        // Never echo YouTube's raw error: it can include the request URL, which contains the key
        console.log('YouTube request failed:', err.message);
        return json({ error: 'YouTube is unavailable right now' }, 502);
    }

    const response = json(
        { updated: new Date().toISOString(), videos },
        200,
        // Browsers keep it 10 minutes; Cloudflare's cache keeps it an hour
        { 'Cache-Control': `public, max-age=600, s-maxage=${CACHE_SECONDS}` }
    );
    ctx.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
}

// Ask YouTube for the newest uploads and keep only the public ones
async function fetchUploads(apiKey) {
    const api = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
    api.searchParams.set('part', 'snippet,status');
    api.searchParams.set('playlistId', UPLOADS_PLAYLIST);
    api.searchParams.set('maxResults', String(MAX_RESULTS));
    api.searchParams.set('key', apiKey);

    const res = await fetch(api.toString(), { headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(`YouTube answered ${res.status}`);

    const data = await res.json();
    return (data.items || [])
        .filter(item => item.status && item.status.privacyStatus === 'public')
        .map(item => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            published: item.snippet.publishedAt
        }))
        .filter(v => /^[\w-]{11}$/.test(v.id));   // a YouTube video ID is always 11 characters
}

function json(body, status, extraHeaders = {}) {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'X-Content-Type-Options': 'nosniff',
            'Cache-Control': 'no-store',
            ...extraHeaders
        }
    });
}
