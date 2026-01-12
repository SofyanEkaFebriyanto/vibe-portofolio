export const metadata = {
  title: 'Now',
  description: 'A short, current view of what Sofyan is focused on.'
};

const focusItems = [
  'Building - reusable projects, not one-off demos.',
  'Engineering habits - structure, documentation, reproducibility (Docker), and clean iteration.',
  'Trading as a system - disciplined execution and data, not random signals.',
  "Writing / Notes - documenting what I learn so it doesn't disappear as temporary understanding."
];

export default function NowPage() {
  return (
    <div className="container-page space-y-10 py-16">
      <section className="max-w-2xl space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Now</p>
        <h1 className="font-heading text-4xl">Now</h1>
      </section>

      <section className="card max-w-3xl space-y-4">
        <h2 className="font-heading text-2xl">Currently focused on:</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
          {focusItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
