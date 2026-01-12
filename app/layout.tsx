import type { Metadata } from 'next';
import { Bricolage_Grotesque, Spectral } from 'next/font/google';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import '@/styles/globals.css';

const headingFont = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-heading'
});

const bodyFont = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sofyanekafebriyanto.my.id'),
  title: {
    default: 'Sofyan Eka Febriyanto',
    template: '%s | Sofyan Eka Febriyanto'
  },
  description:
    'Personal site of Sofyan Eka Febriyanto. Building with code, thinking with data. Notes, projects, and a calm view of current work.',
  openGraph: {
    title: 'Sofyan Eka Febriyanto',
    description:
      'Building with code. Thinking with data. Notes, projects, and a calm view of current work.',
    url: 'https://sofyanekafebriyanto.my.id',
    siteName: 'Sofyan Eka Febriyanto',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sofyan Eka Febriyanto',
    description: 'Building with code. Thinking with data.',
    images: ['/opengraph-image']
  }
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sofyan Eka Febriyanto',
  url: 'https://sofyanekafebriyanto.my.id',
  jobTitle: 'Student',
  sameAs: [
    'https://github.com/username',
    'https://linkedin.com/in/username',
    'https://x.com/username'
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-bg text-text">
        <SiteHeader />
        <main className="min-h-[70vh]">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
