import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { site } from '@/config';
import { getNotaUrl, sortNotasByDate, withBase } from '@/utils';

export const GET: APIRoute = async (context) => {
  const notes = sortNotasByDate(await getCollection('notas', ({ data }) => !data.draft));

  return rss({
    title: site.name,
    description: site.description,
    site: context.site ?? 'https://example.com',
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.date,
      link: withBase(getNotaUrl(note)),
      categories: note.data.tags,
    })),
  });
};
