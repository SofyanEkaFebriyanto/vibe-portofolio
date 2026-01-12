import Link from 'next/link';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Notes', href: '/notes' },
  { label: 'Projects', href: '/projects' },
  { label: 'Now', href: '/now' },
  { label: 'Contact', href: '/contact' }
];

export const SiteHeader = () => {
  return (
    <header className="border-b border-border bg-bg/80 backdrop-blur">
      <div className="container-page flex items-center justify-between py-6">
        <Link href="/" className="font-heading text-lg tracking-tight">
          Sofyan Eka Febriyanto
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-muted">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
