import Link from 'next/link';

export const metadata = {
  title: 'Services',
  description: 'What I can build for you — backends, mobile apps, web apps, AI integration, and deployment.'
};

const services = [
  {
    title: 'Backend APIs',
    desc: 'REST APIs that are boringly correct. Laravel or Go, with auth, roles, and test coverage — not just happy paths.',
    tags: ['Laravel', 'Go', 'REST', 'MySQL', 'SQLite']
  },
  {
    title: 'Mobile Apps',
    desc: 'Cross-platform apps with Flutter. One codebase, Android and iOS, with clean state management.',
    tags: ['Flutter', 'Dart']
  },
  {
    title: 'Web Apps',
    desc: 'Full-stack web apps — from landing pages to dashboards. Fast, clean, and easy to maintain.',
    tags: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    title: 'AI Integration',
    desc: 'LLM-powered features: chatbots, voice interfaces, agents that use tools, and memory systems. I run my own AI assistant 24/7, so this is home turf.',
    tags: ['LLM APIs', 'Agents', 'Voice', 'RAG']
  },
  {
    title: 'Deploy & Self-hosting',
    desc: 'Your app, running somewhere real. VPS setup, Docker, tunnels, domains, SSL, monitoring — I host my own infrastructure, so I know this stack cold.',
    tags: ['Linux', 'Docker', 'Cloudflare', 'CI/CD']
  }
];

const reasons = [
  {
    title: 'I own it end-to-end',
    desc: 'I don\'t just write code and disappear. I deploy it, monitor it, and keep it running. My own projects have been live 24/7 for months.'
  },
  {
    title: 'Tested, not hoped',
    desc: 'I write test cases before I get comfortable. My last API shipped with 136 validated cases. You get software that behaves.'
  },
  {
    title: 'Clear communication',
    desc: 'Regular updates, working demos, honest timelines. If something will take longer, you\'ll hear it from me first — not after the deadline.'
  },
  {
    title: 'Production experience',
    desc: 'I maintain a live e-commerce store and a public AI assistant. I\'ve dealt with real users, real bugs, and real 2 AM incidents.'
  }
];

const steps = [
  { n: '01', title: 'Chat', desc: 'Tell me what you need. No commitment, no sales pitch — just a conversation about whether I\'m the right fit.' },
  { n: '02', title: 'Scope', desc: 'We agree on exactly what gets built, by when, and for how much. Written down, no surprises.' },
  { n: '03', title: 'Build', desc: 'I build in the open with regular updates and working demos you can click through.' },
  { n: '04', title: 'Launch', desc: 'Deployed, tested, documented. You get the code, the docs, and a walkthrough.' },
  { n: '05', title: 'Support', desc: 'I stick around after launch. Bugs get fixed, questions get answered.' }
];

export default function ServicesPage() {
  return (
    <div className="container-page space-y-24 py-16">
      <section className="max-w-3xl space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Services</p>
        <h1 className="font-heading text-3xl leading-tight md:text-5xl">
          I build software that ships and stays up.
        </h1>
        <p className="text-lg text-muted">
          Currently available for select freelance projects. If you need something
          built, deployed, and maintained — not just coded — let&apos;s talk.
        </p>
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-subtle transition hover:brightness-110"
        >
          Start a project
        </Link>
      </section>

      <section className="space-y-8">
        <h2 className="font-heading text-2xl">What I do</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="card">
              <h3 className="font-heading text-xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="font-heading text-2xl">Why work with me</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4">
              <span className="font-heading text-2xl text-accent">✓</span>
              <div>
                <h3 className="font-heading text-lg">{r.title}</h3>
                <p className="mt-2 text-sm text-muted">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="font-heading text-2xl">How it works</h2>
        <div className="space-y-0">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-6 border-t border-border py-6 last:border-b">
              <span className="font-heading text-sm text-muted w-8 shrink-0 pt-1">{s.n}</span>
              <div>
                <h3 className="font-heading text-lg">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card space-y-4 text-center !p-10">
        <h2 className="font-heading text-2xl">Have something in mind?</h2>
        <p className="text-muted">The first chat is free and there&apos;s no pressure. Worst case, you get honest advice.</p>
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-subtle transition hover:brightness-110"
        >
          Get in touch
        </Link>
      </section>
    </div>
  );
}
