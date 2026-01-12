import Link from 'next/link';
import type { Project } from '@/data/projects';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="card flex h-full flex-col justify-between gap-6">
      <div className="space-y-4">
        <h3 className="font-heading text-2xl">{project.title}</h3>
        <p className="text-sm text-muted">{project.summary}</p>
        <div className="flex flex-wrap items-center gap-2">
          {project.stack.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-4 text-sm">
        {project.links.map((link, index) =>
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
    </article>
  );
};
