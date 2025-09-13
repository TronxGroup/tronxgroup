export function GET() { return new Response(`User-agent: *\nAllow: /\n\nSitemap: https://www.tronxgroup.com/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain' } }); }
