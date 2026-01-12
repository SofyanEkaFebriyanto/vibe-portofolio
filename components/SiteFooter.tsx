import Link from 'next/link';

const footerLinks = [
  { label: 'Notes', href: '/notes' },
  { label: 'Projects', href: '/projects' },
  { label: 'Now', href: '/now' },
  { label: 'Contact', href: '/contact' }
];

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div className="text-sm text-muted">
          <p className="font-heading text-base text-text">Sofyan Eka Febriyanto</p>
          <p>Systems, process, and data-first building.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-muted">(c) 2026 Sofyan Eka Febriyanto</p>
      </div>
    </footer>
  );
};
