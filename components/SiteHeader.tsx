'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Notes', href: '/notes' },
  { label: 'Projects', href: '/projects' },
  { label: 'Now', href: '/now' },
  { label: 'Contact', href: '/contact' }
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border bg-bg/80 backdrop-blur">
      <div className="container-page flex items-center justify-between py-4 md:py-6">
        <Link href="/" className="font-heading text-base md:text-lg tracking-tight" onClick={() => setOpen(false)}>
          Sofyan Eka Febriyanto
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-wrap items-center gap-4 text-sm text-muted">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-lg"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-border">
          <div className="container-page flex flex-col py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3.5 text-base last:border-0 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
