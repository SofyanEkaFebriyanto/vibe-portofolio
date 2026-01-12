export type Project = {
  slug: string;
  title: string;
  summary: string;
  context: string;
  problem: string;
  approach: string;
  result: string;
  lessons: string;
  stack: string[];
  links: { label: string; href?: string }[];
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'trading-journal-dashboard',
    title: 'Trading Journal Dashboard',
    summary: 'A data-driven dashboard that turns raw trades into insights and habits.',
    context: 'I wanted a clear view of trading decisions without relying on memory.',
    problem: 'The data lived in spreadsheets but the patterns were hard to spot.',
    approach: 'I built a pipeline that cleans trades, surfaces key metrics, and highlights rule breaks.',
    result: 'Weekly reviews now take minutes, with trend insights that guide better risk control.',
    lessons: 'Good dashboards are opinions with evidence, not just charts.',
    stack: ['Next.js', 'TypeScript', 'D3', 'PostgreSQL'],
    links: [{ label: 'Private for now' }, { label: 'Demo coming soon' }],
    image: '/images/projects/trading-journal.svg',
    featured: true
  },
  {
    slug: 'automation-tool',
    title: 'Automation Tool / Script',
    summary: 'Small automations that reduce manual admin work and surface anomalies early.',
    context: 'I kept repeating the same cleanup tasks across projects.',
    problem: 'Manual steps made errors easy and speed unreliable.',
    approach: 'I scripted the workflow with checks, logs, and safe defaults.',
    result: 'Tasks that took an hour now finish in under five minutes.',
    lessons: 'Automation works best when it reports back, not just runs.',
    stack: ['Python', 'Bash', 'SQLite'],
    links: [{ label: 'Private for now' }, { label: 'Demo coming soon' }],
    image: '/images/projects/automation-tool.svg'
  },
  {
    slug: 'nextjs-web-app',
    title: 'Next.js Web App',
    summary: 'A focused web app built for speed, clarity, and a quiet UI.',
    context: 'I wanted a reference project for clean App Router patterns.',
    problem: 'Most templates are heavy and distract from the product story.',
    approach: 'I kept the UI minimal, optimized data fetching, and built a tight component system.',
    result: 'Pages are fast, predictable, and easy to extend.',
    lessons: 'Structure first, polish second, launch always.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    links: [{ label: 'Private for now' }, { label: 'Demo coming soon' }],
    image: '/images/projects/nextjs-web-app.svg'
  },
  {
    slug: 'data-visualization-mini',
    title: 'Data / Visualization Mini Project',
    summary: 'A compact visualization that tells one clear story without noise.',
    context: 'I explored how to present a single metric with more honesty.',
    problem: 'Most charts hide context or overstate confidence.',
    approach: 'I used annotated charts with explicit assumptions and sources.',
    result: 'Readers can understand the takeaway in under a minute.',
    lessons: 'If you cannot explain it, do not visualize it.',
    stack: ['TypeScript', 'Observable', 'SVG'],
    links: [{ label: 'Private for now' }, { label: 'Demo coming soon' }],
    image: '/images/projects/data-viz-mini.svg'
  }
];
