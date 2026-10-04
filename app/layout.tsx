import type { Metadata, Viewport } from 'next';
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
  metadataBase: new URL('https://sefy.my.id'),
  title: {
    default: 'Sofyan Eka Febriyanto — Software Developer',
    template: '%s | Sofyan Eka Febriyanto'
  },
  description:
    'Sofyan Eka Febriyanto is a software developer (Laravel, Flutter, Go) building backend APIs, mobile apps, and self-hosted systems. Notes, projects, and services.',
  keywords: ['Sofyan Eka Febriyanto', 'software developer Indonesia', 'backend developer', 'Go developer', 'Laravel', 'Flutter', 'API development', 'self-hosting'],
  authors: [{ name: 'Sofyan Eka Febriyanto', url: 'https://sefy.my.id' }],
  creator: 'Sofyan Eka Febriyanto',
  alternates: {
    canonical: 'https://sefy.my.id'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large'
    }
  },
  openGraph: {
    title: 'Sofyan Eka Febriyanto — Software Developer',
    description:
      'Building with code. Thinking with data. Backend APIs, mobile apps, and self-hosted systems.',
    url: 'https://sefy.my.id',
    siteName: 'Sofyan Eka Febriyanto',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Sofyan Eka Febriyanto — Building with code. Thinking with data.' }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sofyan Eka Febriyanto — Software Developer',
    description: 'Building with code. Thinking with data.',
    images: ['/opengraph-image']
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f6f1' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1117' }
  ]
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sofyan Eka Febriyanto',
  url: 'https://sefy.my.id',
  jobTitle: 'Software Developer',
  description: 'Software developer focused on backend APIs, mobile apps, and self-hosted infrastructure.',
  knowsAbout: ['Go', 'Laravel', 'Flutter', 'REST APIs', 'Self-hosting', 'Linux'],
  sameAs: [
    'https://github.com/SofyanEkaFebriyanto',
    'https://www.instagram.com/fya.n9'
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`
          }}
        />
      </head>
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
