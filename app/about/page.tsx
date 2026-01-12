import Link from 'next/link';
import { values } from '@/data/values';

export const metadata = {
  title: 'About',
  description:
    'Builder mindset, systems thinking, and the learning process behind Sofyan Eka Febriyanto.'
};

const timeline = [
  { year: '2022', detail: 'Started documenting learning with short weekly summaries.' },
  { year: '2023', detail: 'Built my first data dashboard for personal trading reviews.' },
  { year: '2024', detail: 'Focused on automation tools that reduce manual work.' },
  { year: '2025', detail: 'Deepened focus on clean systems and reliable delivery.' },
  { year: '2026', detail: 'Sharing notes publicly and building slower, stronger foundations.' }
];

const toolbelt = ['TypeScript', 'Next.js', 'Python', 'SQL', 'Tailwind CSS', 'Git'];

export default function AboutPage() {
  return (
    <div className="container-page space-y-16 py-16">
      <section className="max-w-3xl space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">About</p>
        <h1 className="font-heading text-4xl">Quiet systems, honest work.</h1>
        <p className="text-lg text-muted">
          I am a student who likes to build things that keep working when attention is low.
          My interest sits at the intersection of software engineering, automation, and data
          that actually changes decisions.
        </p>
        <p className="text-lg text-muted">
          I prefer small systems with clear feedback loops. The goal is steady progress, not
          loud launches. I write notes to refine the thinking and keep the process honest.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="font-heading text-2xl">Timeline</h2>
        <ul className="space-y-4">
          {timeline.map((item) => (
            <li key={item.year} className="card flex flex-col gap-2 md:flex-row md:items-center">
              <span className="text-sm uppercase tracking-[0.3em] text-muted">{item.year}</span>
              <span className="text-sm text-muted">{item.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-heading text-2xl">Toolbelt</h2>
        <div className="flex flex-wrap gap-3">
          {toolbelt.map((tool) => (
            <span key={tool} className="tag">
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-heading text-2xl">Values</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="card">
              <h3 className="font-heading text-xl">{value.title}</h3>
              <p className="mt-3 text-sm text-muted">{value.description}</p>
            </div>
          ))}
        </div>
        <Link href="/contact" className="inline-flex text-sm font-semibold text-accent">
          Start a conversation
        </Link>
      </section>
    </div>
  );
}
