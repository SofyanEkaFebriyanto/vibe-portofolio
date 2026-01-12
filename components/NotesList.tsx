'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { formatDate } from '@/lib/format';

type NoteMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

type NotesListProps = {
  notes: NoteMeta[];
};

export const NotesList = ({ notes }: NotesListProps) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return notes;
    }

    return notes.filter((note) => {
      const haystack = `${note.title} ${note.excerpt} ${note.tags.join(' ')}`.toLowerCase();
      return haystack.includes(normalized);
    });
  }, [notes, query]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <label
            htmlFor="notes-search"
            className="text-sm uppercase tracking-[0.2em] text-muted"
          >
            Search
          </label>
          <input
            id="notes-search"
            type="search"
            placeholder="Filter notes by topic"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm focus:border-accent focus:outline-none md:w-80"
          />
        </div>
        <p className="text-sm text-muted">{filtered.length} notes</p>
      </div>
      <div className="grid gap-6">
        {filtered.map((note) => (
          <article key={note.slug} className="card transition-transform hover:-translate-y-1">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
              <span>{formatDate(note.date)}</span>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
              <span>{note.tags.join(' / ')}</span>
            </div>
            <h2 className="mt-4 font-heading text-2xl">
              <Link href={`/notes/${note.slug}`} className="hover:text-accent">
                {note.title}
              </Link>
            </h2>
            <p className="mt-3 text-sm text-muted">{note.excerpt}</p>
            <Link href={`/notes/${note.slug}`} className="mt-4 inline-flex text-sm font-semibold text-accent">
              Read note
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};
