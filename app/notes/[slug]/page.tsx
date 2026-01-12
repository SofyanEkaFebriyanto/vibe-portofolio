import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { formatDate } from '@/lib/format';
import { getNoteBySlug, getNoteSlugs } from '@/lib/notes';

export async function generateStaticParams() {
  const slugs = await getNoteSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const note = await getNoteBySlug(params.slug);
  if (!note) {
    return {};
  }

  return {
    title: note.title,
    description: note.excerpt,
    openGraph: {
      title: note.title,
      description: note.excerpt,
      type: 'article',
      publishedTime: note.date
    }
  };
}

export default async function NoteDetailPage({ params }: { params: { slug: string } }) {
  const note = await getNoteBySlug(params.slug);

  if (!note) {
    notFound();
  }

  return (
    <div className="container-page space-y-10 py-16">
      <Link href="/notes" className="text-sm text-muted hover:text-accent">
        Back to notes
      </Link>
      <header className="max-w-3xl space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">{formatDate(note.date)}</p>
        <h1 className="font-heading text-4xl">{note.title}</h1>
        <p className="text-sm text-muted">{note.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </header>
      <article className="prose">
        <MDXRemote source={note.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </article>
    </div>
  );
}
