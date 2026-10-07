export const SITE_URL = 'https://sefy.my.id';

/**
 * Self-referencing canonical for a page path.
 * The site is built with `trailingSlash: true`, so canonicals always end with '/'
 * (e.g. '/' -> 'https://sefy.my.id/', '/about' -> 'https://sefy.my.id/about/').
 * Resolves against metadataBase defined in app/layout.tsx.
 */
export function canonicalFor(path: string): { canonical: string } {
  const p = path.startsWith('/') ? path : `/${path}`;
  return { canonical: p.endsWith('/') ? p : `${p}/` };
}
