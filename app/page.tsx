import Link from 'next/link';
import { canonicalFor } from '@/lib/seo';
import Image from 'next/image';
import { values } from '@/data/values';
import { projects } from '@/data/projects';
import { nowContent } from '@/content/now';
import { getLatestNote } from '@/lib/notes';
import { formatDate } from '@/lib/format';

export const metadata = {
  alternates: canonicalFor('/'),
  title: 'Home',
  description:
    'Sofyan Eka Febriyanto — software developer (Laravel, Flutter, Go). Backend APIs, mobile apps, and self-hosted systems.'
};

export default async function HomePage() {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const latestNote = await getLatestNote();
  const nowPreview = nowContent.focusedOn[0];

  return (
    <div className="space-y-24 py-16">
      <section className="container-page space-y-10">
        <div className="flex flex-col-reverse items-center text-center gap-8 md:flex-row md:items-center md:text-left animate-fade-up">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted">Sofyan Eka Febriyanto</p>
            <h1 className="font-heading text-3xl leading-tight md:text-6xl">
              Building with code. Thinking with data.
            </h1>
            <p className="text-base md:text-lg text-muted">
              Software developer — Laravel &amp; Flutter background, now going deep on Go.
              I like owning one system end-to-end: the API, the app, and the server it runs on.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-subtle transition hover:brightness-110"
              >
                See Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="shrink-0">
            <Image
              src="/images/profile.jpg?v=2"
              alt="Sofyan Eka Febriyanto"
              width={240}
              height={240}
              priority
              className="rounded-full object-cover ring-1 ring-border shadow-subtle aspect-square w-36 h-36 md:w-60 md:h-60"
            />
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

      <section className="container-page">
        <div className="card !p-10 text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Available for work</p>
          <h2 className="font-heading text-3xl">Need something built?</h2>
          <p className="text-muted max-w-xl mx-auto">
            Backends, mobile apps, web apps, AI features, deployments.
            I build it, ship it, and keep it running.
          </p>
          <div className="pt-2">
            <Link
              href="/services"
              className="inline-flex rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-subtle transition hover:brightness-110"
            >
              See services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
