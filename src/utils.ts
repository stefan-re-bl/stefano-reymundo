import type { CollectionEntry } from 'astro:content';

export type Nota = CollectionEntry<'notas'>;

export function getNotaSlug(nota: Nota) {
  return nota.data.slug ?? nota.id.replace(/\.md$/, '');
}

export function getNotaUrl(nota: Nota) {
  return `/notas/${getNotaSlug(nota)}/`;
}

export function withBase(path: string) {
  const base = import.meta.env.BASE_URL;

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  if (base === '/') {
    return path;
  }

  return `${base.replace(/\/$/, '')}${path}`;
}

export function sortNotasByDate(notas: Nota[]) {
  return [...notas].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('es', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
