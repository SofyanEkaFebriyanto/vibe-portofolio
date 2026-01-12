import Link from 'next/link';
import { values } from '@/data/values';
import { projects } from '@/data/projects';
import { nowContent } from '@/content/now';
import { getLatestNote } from '@/lib/notes';
import { formatDate } from '@/lib/format';

export const metadata = {
  title: 'Home',
  description:
    'Personal site of Sofyan Eka Febriyanto. Notes, projects, and systems thinking.'
};

export default async function HomePage() {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const latestNote = await getLatestNote();
  const nowPreview = nowContent.focusedOn[0];

  return (
    <div className="space-y-24 py-16">
      <section className="container-page space-y-10">
        <div className="max-w-3xl space-y-6 animate-fade-up">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Personal site</p>
          <h1 className="font-heading text-4xl leading-tight md:text-6xl">
            Building with code. Thinking with data.
          </h1>
          <p className="text-lg text-muted">
            Student exploring software engineering, automation, and data-driven decision-making.
            Learning in public, building systems that actually work.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/notes"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-subtle transition hover:brightness-110"
            >
              Read Notes
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
            >
              See Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-2xl">What I care about</h2>
          <Link href="/about" className="text-sm text-muted hover:text-accent">
            About the system
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="card">
              <h3 className="font-heading text-xl">{value.title}</h3>
              <p className="mt-3 text-sm text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page space-y-6">
        <h2 className="font-heading text-2xl">Highlights</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="card flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Top project</p>
              <h3 className="mt-3 font-heading text-xl">{featuredProject.title}</h3>
              <p className="mt-3 text-sm text-muted">{featuredProject.summary}</p>
            </div>
            <Link
              href="/projects"
              className="mt-6 inline-flex text-sm font-semibold text-accent"
            >
              Explore projects
            </Link>
          </article>
          <article className="card flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Latest note</p>
              {latestNote ? (
                <>
                  <h3 className="mt-3 font-heading text-xl">{latestNote.title}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
                    {formatDate(latestNote.date)}
                  </p>
                  <p className="mt-3 text-sm text-muted">{latestNote.excerpt}</p>
                </>
              ) : (
                <p className="mt-3 text-sm text-muted">New notes are coming soon.</p>
              )}
            </div>
            <Link
              href="/notes"
              className="mt-6 inline-flex text-sm font-semibold text-accent"
            >
              Read notes
            </Link>
          </article>
          <article className="card flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Now</p>
              <h3 className="mt-3 font-heading text-xl">Current focus</h3>
              <p className="mt-3 text-sm text-muted">{nowPreview}</p>
            </div>
            <Link href="/now" className="mt-6 inline-flex text-sm font-semibold text-accent">
              See now
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
