import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="card flex h-full flex-col gap-6">
      <div className="overflow-hidden rounded-xl border border-border bg-bg">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={800}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-48 w-full object-cover"
        />
      </div>
      <div className="flex-1 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {project.stack.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
        <div>
          <h3 className="font-heading text-2xl">{project.title}</h3>
          <p className="mt-2 text-sm text-muted">{project.summary}</p>
        </div>
        <dl className="grid gap-3 text-sm text-muted">
          <div>
            <dt className="font-semibold text-text">Context</dt>
            <dd>{project.context}</dd>
          </div>
          <div>
            <dt className="font-semibold text-text">Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt className="font-semibold text-text">Approach</dt>
            <dd>{project.approach}</dd>
          </div>
          <div>
            <dt className="font-semibold text-text">Result</dt>
            <dd>{project.result}</dd>
          </div>
          <div>
            <dt className="font-semibold text-text">Lessons learned</dt>
            <dd>{project.lessons}</dd>
          </div>
        </dl>
      </div>
      <div className="flex flex-wrap gap-4 text-sm">
        {project.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-accent hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </article>
  );
};
