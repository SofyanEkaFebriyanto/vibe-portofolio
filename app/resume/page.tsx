import Link from 'next/link';

export const metadata = {
  title: 'Resume',
  description: 'A short resume snapshot for Sofyan Eka Febriyanto.'
};

export default function ResumePage() {
  return (
    <div className="container-page space-y-12 py-16">
      <section className="max-w-2xl space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">Resume</p>
        <h1 className="font-heading text-4xl">A short, readable snapshot.</h1>
        <p className="text-lg text-muted">
          I keep this page updated with the essentials. If you need the PDF, grab it below.
        </p>
        <Link href="/resume.pdf" className="text-sm font-semibold text-accent">
          Download PDF
        </Link>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="card space-y-4">
          <h2 className="font-heading text-2xl">Experience</h2>
          <div className="space-y-3 text-sm text-muted">
            <div>
              <p className="font-semibold text-text">Automation Intern</p>
              <p>2025 - Built scripts to reduce manual reporting and improve QA checks.</p>
            </div>
            <div>
              <p className="font-semibold text-text">Data Assistant</p>
              <p>2024 - Maintained dashboards and documented data processes.</p>
            </div>
          </div>
        </div>
        <div className="card space-y-4">
          <h2 className="font-heading text-2xl">Education</h2>
          <div className="space-y-3 text-sm text-muted">
            <div>
              <p className="font-semibold text-text">Computer Science Student</p>
              <p>Focus on software engineering, automation, and data systems.</p>
            </div>
            <div>
              <p className="font-semibold text-text">Self-directed learning</p>
              <p>Consistent practice through projects, notes, and peer feedback.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="card space-y-4">
        <h2 className="font-heading text-2xl">Core skills</h2>
        <div className="flex flex-wrap gap-3">
          {['TypeScript', 'Next.js', 'Python', 'SQL', 'Data visualization', 'Automation'].map(
            (skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            )
          )}
        </div>
      </section>
    </div>
  );
}
