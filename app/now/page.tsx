import Link from 'next/link';
import { nowContent } from '@/content/now';

export const metadata = {
  title: 'Now',
  description: 'A short, current view of what Sofyan is focused on.'
};

export default function NowPage() {
  return (
    <div className="container-page space-y-16 py-16">
      <section className="max-w-2xl space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Now</p>
        <h1 className="font-heading text-4xl">What I am doing right now.</h1>
        <p className="text-lg text-muted">
          A living page that keeps things honest and current.
        </p>
        <p className="text-sm text-muted">Last updated: {nowContent.lastUpdated}</p>
      </section>

      <section className="card max-w-2xl space-y-3">
        <h2 className="font-heading text-xl">One thing I am trying to get better at this month</h2>
        <p className="text-sm text-muted">Staying consistent even when motivation is low.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="card space-y-4">
          <h2 className="font-heading text-2xl">Currently focused on</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
            {nowContent.focusedOn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card space-y-4">
          <h2 className="font-heading text-2xl">What I am learning</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
            {nowContent.learning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card space-y-4">
          <h2 className="font-heading text-2xl">What I am building</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
            {nowContent.building.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card space-y-4">
          <h2 className="font-heading text-2xl">What I am avoiding</h2>
          <p className="text-sm text-muted">{nowContent.avoiding}</p>
        </div>
      </section>

      <Link href="/contact" className="inline-flex text-sm font-semibold text-accent">
        Open a conversation
      </Link>
    </div>
  );
}
