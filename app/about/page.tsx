import Link from 'next/link';
import { values } from '@/data/values';

export const metadata = {
  title: 'About',
  description:
    'Builder mindset, systems thinking, and the learning process behind Sofyan Eka Febriyanto.'
};

const timeline = [
  {
    year: '2022',
    detail:
      'First exposure to coding. Started learning basic programming out of curiosity. Did not understand much, but liked the idea that logic could create things.'
  },
  {
    year: '2023',
    detail:
      'Discovered trading, then questioned it. Got into forex/gold, realized most content was noise. Started focusing more on process, journaling, and understanding decisions instead of chasing signals.'
  },
  {
    year: '2024',
    detail:
      'Systems over motivation. Tried tracking everything manually. Got tired. Built small scripts and tools to make the process easier. That is when automation started making sense.'
  },
  {
    year: '2025',
    detail:
      'Building tools instead of excuses. More time spent building dashboards, journals, and small systems. Less time consuming productive-looking content.'
  },
  {
    year: '2026',
    detail:
      'Learning in public, building in silence. Now focused on software engineering, data, and documenting the process honestly. No hype, no shortcuts.'
  }
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
        <p className="text-sm italic text-muted">I prefer quiet progress over loud intentions.</p>
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
