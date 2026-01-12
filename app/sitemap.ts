import type { MetadataRoute } from 'next';
import { getAllNotes } from '@/lib/notes';

const baseUrl = 'https://sofyanekafebriyanto.my.id';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const notes = await getAllNotes();

  const routes = ['', '/about', '/notes', '/projects', '/now', '/contact', '/resume'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date()
    })
  );

  const noteRoutes = notes.map((note) => ({
    url: `${baseUrl}/notes/${note.slug}`,
    lastModified: new Date(note.date)
  }));

  return [...routes, ...noteRoutes];
}
