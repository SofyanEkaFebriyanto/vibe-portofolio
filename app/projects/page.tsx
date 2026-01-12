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
  const rest = projects.filter((project) => project.slug !== featured.slug);

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
          <div className="flex flex-wrap gap-2">
            {featured.stack.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
          <Link href="#featured-case-study" className="text-sm font-semibold text-accent">
            Read full case study
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-bg">
          <Image
            src={featured.image}
            alt={featured.title}
            width={1200}
            height={800}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="h-56 w-full object-cover"
          />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {rest.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

      <section id="featured-case-study" className="card space-y-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Case study</p>
          <h2 className="font-heading text-3xl">{featured.title}</h2>
          <p className="text-sm text-muted">{featured.summary}</p>
        </div>
        <div className="grid gap-4 text-sm text-muted md:grid-cols-2">
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
          {featured.links.map((link, index) =>
            link.href ? (
              <Link
                key={`${link.label}-${index}`}
                href={link.href}
                className="text-accent hover:underline"
              >
                {link.label}
              </Link>
            ) : (
              <span key={`${link.label}-${index}`} className="text-muted">
                {link.label}
              </span>
            )
          )}
        </div>
      </section>
    </div>
  );
}
