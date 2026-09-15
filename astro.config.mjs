import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const fallbackSite = 'https://example.com';
const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner = '', repo = ''] = repository.split('/');
const githubSite = owner ? `https://${owner}.github.io` : fallbackSite;
const isUserOrOrgPage = owner && repo === `${owner}.github.io`;
const base = process.env.BASE_PATH ?? (repo && !isUserOrOrgPage ? `/${repo}` : undefined);

export default defineConfig({
  site: process.env.SITE ?? githubSite,
  base,
  integrations: [sitemap()],
});
