import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

export type NoteMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

export type Note = NoteMeta & {
  content: string;
};

const notesDirectory = path.join(process.cwd(), 'content', 'notes');

const normalizeExcerpt = (content: string) => {
  const cleaned = content.replace(/\s+/g, ' ').trim();
  return cleaned.length > 160 ? `${cleaned.slice(0, 157)}...` : cleaned;
};

const parseNote = (slug: string, fileContent: string): Note => {
  const { data, content } = matter(fileContent);
  const title = String(data.title ?? slug);
  const date = String(data.date ?? '');
  const tags = Array.isArray(data.tags) ? data.tags.map(String) : [];
  const excerpt = data.excerpt ? String(data.excerpt) : normalizeExcerpt(content);

  return {
    slug,
    title,
    date,
    excerpt,
    tags,
    content
  };
};

export const getNoteSlugs = async () => {
  const entries = await fs.readdir(notesDirectory);
  return entries
    .filter((entry) => entry.endsWith('.mdx'))
    .map((entry) => entry.replace(/\.mdx$/, ''));
};

export const getAllNotes = async (): Promise<NoteMeta[]> => {
  const slugs = await getNoteSlugs();
  const notes = await Promise.all(
    slugs.map(async (slug) => {
      const fullPath = path.join(notesDirectory, `${slug}.mdx`);
      const fileContent = await fs.readFile(fullPath, 'utf8');
      const note = parseNote(slug, fileContent);
      return note;
    })
  );

  return notes
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(({ content, ...meta }) => meta);
};

export const getLatestNote = async () => {
  const notes = await getAllNotes();
  return notes[0];
};

export const getNoteBySlug = async (slug: string): Promise<Note | null> => {
  try {
    const fullPath = path.join(notesDirectory, `${slug}.mdx`);
    const fileContent = await fs.readFile(fullPath, 'utf8');
    return parseNote(slug, fileContent);
  } catch {
    return null;
  }
};
