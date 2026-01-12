import Link from 'next/link';
import { NotesList } from '@/components/NotesList';
import { formatDate } from '@/lib/format';
import { getAllNotes } from '@/lib/notes';

export const metadata = {
  title: 'Notes',
  description: 'Notes on systems, automation, and data-first decisions.'
};

export default async function NotesPage() {
  const notes = await getAllNotes();
  const pinnedSlug = 'building-with-code-thinking-with-data';
  const pinned = notes.find((note) => note.slug === pinnedSlug);
  const rest = notes.filter((note) => note.slug !== pinnedSlug);

  return (
    <div className="container-page space-y-10 py-16">
      <section className="max-w-2xl space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Notes</p>
        <h1 className="font-heading text-4xl">Short notes on what I am learning.</h1>
        <p className="text-lg text-muted">
          I document patterns, mistakes, and small decisions that make systems reliable.
        </p>
      </section>
      {pinned ? (
        <section className="card space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Start here</p>
          <div className="space-y-2">
            <h2 className="font-heading text-2xl">
              <Link href={`/notes/${pinned.slug}`} className="hover:text-accent">
                {pinned.title}
              </Link>
            </h2>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              {formatDate(pinned.date)}
            </p>
          </div>
          <p className="text-sm text-muted">{pinned.excerpt}</p>
          <Link href={`/notes/${pinned.slug}`} className="text-sm font-semibold text-accent">
            Read note
          </Link>
        </section>
      ) : null}
      <NotesList notes={rest} />
    </div>
  );
}
