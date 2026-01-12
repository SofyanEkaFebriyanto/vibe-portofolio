import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col justify-center gap-4 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-muted">Not found</p>
      <h1 className="font-heading text-4xl">This page does not exist.</h1>
      <p className="text-lg text-muted">The link might be wrong or the page moved.</p>
      <Link href="/" className="text-sm font-semibold text-accent">
        Back to home
      </Link>
    </div>
  );
}
