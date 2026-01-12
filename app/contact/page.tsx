import Link from 'next/link';
import { CopyEmailButton } from '@/components/CopyEmailButton';

export const metadata = {
  title: 'Contact',
  description: 'Reach out to Sofyan for collaboration or thoughtful conversations.'
};

const email = 'sofyanekafebriyanto@gmail.com';

export default function ContactPage() {
  return (
    <div className="container-page space-y-16 py-16">
      <section className="max-w-2xl space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Contact</p>
        <h1 className="font-heading text-4xl">If it's useful, I'm in.</h1>
        <p className="text-lg text-muted">
          If you want to collaborate or exchange ideas, reach out.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <form
          className="card space-y-6"
          action={`mailto:${email}`}
          method="post"
          encType="text/plain"
        >
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-text">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-text">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold text-text">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm focus:border-accent focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Send
          </button>
        </form>

        <aside className="space-y-6">
          <div className="card space-y-4">
            <p className="text-sm text-muted">Direct email</p>
            <p className="text-lg font-semibold text-text">{email}</p>
            <CopyEmailButton email={email} />
          </div>
          <div className="card space-y-4">
            <p className="text-sm text-muted">Social</p>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="https://github.com/SofyanEkaFebriyanto" className="text-accent">
                GitHub
              </Link>
              <Link href="https://linkedin.com/in/sofyan-eka-febriyanto" className="text-accent">
                LinkedIn
              </Link>
              <Link href="https://x.com/SofyanEkaFebriyanto" className="text-accent">
                X
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
