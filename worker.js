// KamSayara — Static Frontend Worker
// Serves index.html, styles.css, app.js from KV or inline
// Deploy: wrangler deploy
// Routes: www.kamsayara.com/* → this worker

const MIME = {
  'html': 'text/html; charset=utf-8',
  'css':  'text/css; charset=utf-8',
  'js':   'application/javascript; charset=utf-8',
  'ico':  'image/x-icon',
  'svg':  'image/svg+xml',
  'png':  'image/png',
  'webp': 'image/webp',
  'woff2':'font/woff2',
};

const CACHE_TTL = {
  'html': 0,        // never cache HTML — always fresh
  'css':  86400,    // 1 day
  'js':   86400,    // 1 day
};

export default {
  async fetch(request, env) {
    const url  = new URL(request.url);
    let path   = url.pathname;

    // Root → index.html
    if (path === '/' || path === '') path = '/index.html';

    // Strip leading slash
    const key  = path.replace(/^\//, '');
    const ext  = key.split('.').pop().toLowerCase();

    // Redirect bare domain to www (handles kamsayara.com → www.kamsayara.com)
    const host = url.hostname;
    if (host === 'kamsayara.com') {
      return Response.redirect(`https://www.kamsayara.com${url.pathname}${url.search}`, 301);
    }

    // Security headers
    const secHeaders = {
      'X-Content-Type-Options':  'nosniff',
      'X-Frame-Options':         'DENY',
      'Referrer-Policy':         'strict-origin-when-cross-origin',
      'Permissions-Policy':      'geolocation=(), microphone=()',
    };

    // Serve from ASSETS binding (Cloudflare Pages-style static assets)
    try {
      const asset = await env.ASSETS.fetch(request);
      if (asset.ok || asset.status === 304) {
        const res = new Response(asset.body, asset);
        const ttl = CACHE_TTL[ext] ?? 0;
        res.headers.set('Cache-Control', ttl > 0
          ? `public, max-age=${ttl}, stale-while-revalidate=3600`
          : 'no-cache, no-store, must-revalidate');
        Object.entries(secHeaders).forEach(([k,v]) => res.headers.set(k,v));
        return res;
      }
    } catch (_) {}

    // 404
    return new Response('Not Found', { status: 404 });
  }
};
