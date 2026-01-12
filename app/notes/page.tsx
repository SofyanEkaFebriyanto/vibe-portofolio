import { NotesList } from '@/components/NotesList';
import { getAllNotes } from '@/lib/notes';

export const metadata = {
  title: 'Notes',
  description: 'Notes on systems, automation, and data-first decisions.'
};

export default async function NotesPage() {
  const notes = await getAllNotes();

  return (
    <div className="container-page space-y-10 py-16">
      <section className="max-w-2xl space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Notes</p>
        <h1 className="font-heading text-4xl">Short notes on what I am learning.</h1>
        <p className="text-lg text-muted">
          I document patterns, mistakes, and small decisions that make systems reliable.
        </p>
      </section>
      <NotesList notes={notes} />
    </div>
  );
}
