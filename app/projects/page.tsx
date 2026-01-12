import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

export const metadata = {
  title: 'Projects',
  description: 'Selected projects focused on systems, automation, and data.'
};

export default function ProjectsPage() {
  const featured = projects.find((project) => project.featured) ?? projects[0];

  return (
    <div className="container-page space-y-16 py-16">
      <section className="max-w-2xl space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Projects</p>
        <h1 className="font-heading text-4xl">Focused builds with clear outcomes.</h1>
        <p className="text-lg text-muted">
          I care about reliability, measurable impact, and systems that stay useful.
        </p>
      </section>

      <section className="card grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Featured</p>
          <h2 className="font-heading text-3xl">{featured.title}</h2>
          <p className="text-sm text-muted">{featured.summary}</p>
          <div className="grid gap-4 text-sm text-muted">
            <div>
              <p className="font-semibold text-text">Context</p>
              <p>{featured.context}</p>
            </div>
            <div>
              <p className="font-semibold text-text">Problem</p>
              <p>{featured.problem}</p>
            </div>
            <div>
              <p className="font-semibold text-text">Approach</p>
              <p>{featured.approach}</p>
            </div>
            <div>
              <p className="font-semibold text-text">Result</p>
              <p>{featured.result}</p>
            </div>
            <div>
              <p className="font-semibold text-text">Lessons learned</p>
              <p>{featured.lessons}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {featured.stack.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            {featured.links.map((link) => (
              <Link key={link.href} href={link.href} className="text-accent hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-bg p-6">
          <div className="overflow-hidden rounded-xl border border-border">
            <Image
              src={featured.image}
              alt={featured.title}
              width={1200}
              height={800}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-56 w-full object-cover"
            />
          </div>
          <div className="space-y-4 text-sm text-muted">
            <div>
              <p className="font-semibold text-text">Lesson in practice</p>
              <p>{featured.lessons}</p>
            </div>
            <div>
              <p className="font-semibold text-text">Next iteration</p>
              <p>Refine reporting, add tighter feedback loops, and reduce noise.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
