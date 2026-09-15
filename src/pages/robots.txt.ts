import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL(`${import.meta.env.BASE_URL}sitemap-index.xml`, site ?? 'https://example.com');

  return new Response(`User-agent: *
Allow: /

Sitemap: ${sitemapUrl.href}
`);
};
