import Link from 'next/link';
import { values } from '@/data/values';

export const metadata = {
  title: 'About',
  description:
    'Builder mindset, systems thinking, and the learning process behind Sofyan Eka Febriyanto.'
};

const timeline = [
  {
    year: '2024',
    detail:
      'Explored AI, digital marketing, e-commerce, and analytics. Started thinking long-term instead of chasing trends.'
  },
  {
    year: 'Jan-Feb 2025',
    detail:
      'Entered intraday trading (breakout focus) while starting to code: WhatsApp bot (Baileys), SofyanTech, chatbot experiments.'
  },
  {
    year: 'Mar-Jun 2025',
    detail:
      'Builder mode: portfolio website, Pine Script, MT5 EA for XAUUSD. Started thinking in systems (RR, time filters, SL/TP).'
  },
  {
    year: 'May-Aug 2025',
    detail:
      'Shift toward data engineering: Streamlit + Python dashboards, project structure, foundation reset, Docker.'
  },
  {
    year: '2026',
    detail:
      'Consolidation phase: personal website, personal brand, cleaner execution, and technical details such as trading timezone handling.'
  }
];

const toolbelt = ['TypeScript', 'Next.js', 'Python', 'SQL', 'Tailwind CSS', 'Git'];

export default function AboutPage() {
  return (
    <div className="container-page space-y-16 py-16">
      <section className="max-w-3xl space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">About</p>
        <h1 className="font-heading text-4xl">About</h1>
        <p className="text-lg text-muted">
          I'm Sofyan. I'm currently in vocational school, but since 2024 I've been following
          one consistent pattern: learn fast, build output, then refine the foundation so it
          can be used long-term.
        </p>
        <p className="text-lg text-muted">
          I initially explored areas around digital business and money: AI, marketing,
          e-commerce, analytics. It didn't take long to realize that theory alone doesn't move
          the needle. That's when I started looking for environments that forced me to build
          systems and make real decisions.
        </p>
        <p className="text-lg text-muted">
          In early 2025, I began trading intraday with a breakout focus. Not for lifestyle or
          hype, but as a discipline exercise: rules, sessions, risk-reward. Around the same
          time, my coding journey started. I built a WhatsApp bot using Baileys, created
          SofyanTech as a way to practice packaging skills, and experimented with simple
          chatbots, choosing my own approach instead of following tutorials blindly.
        </p>
        <p className="text-lg text-muted">
          Q2 2025 became builder mode. I built a portfolio site, worked with Pine Script, and
          entered the world of MT5 expert advisors for XAUUSD. That phase taught me something
          important: without clean data and proper statistics, AI is just an expensive
          accessory.
        </p>
        <p className="text-lg text-muted">
          By mid 2025, my focus shifted toward engineering. I built a sales dashboard using
          Streamlit and Python, started caring about project structure, and restarted my
          foundation using Docker. I wanted systems that were reproducible and reliable, not
          something that only worked on my laptop.
        </p>
        <p className="text-lg text-muted">
          Outside of technical work, I stay realistic. I save regularly, think about
          investment paths appropriate for my age, and have applied for part-time work near
          home. For me, skills need to meet the real world. Otherwise they stay theoretical.
        </p>
        <p className="text-lg text-muted">
          This website is where I document what I build, what I test, and what I learn - the
          things that actually matter.
        </p>
        <p className="text-lg text-muted">
          If you want to see what I'm working on, check the Projects and Notes sections.
        </p>
        <p className="text-sm italic text-muted">I prefer quiet progress over loud intentions.</p>
      </section>

      <section className="space-y-6">
        <h2 className="font-heading text-2xl">Journey</h2>
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
