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
    slug: 'noir-app',
    title: 'Noir App',
    summary: 'Personal AI assistant — full voice-to-voice, with an agent that uses tools and a memory that learns.',
    context: 'I wanted a personal assistant that feels like mine: it remembers, it acts, and I can talk to it.',
    problem: 'Cloud assistants forget everything and can\'t touch my own machines. I wanted one brain across web, phone, and homelab.',
    approach: 'Go backend with an LLM tool-calling loop (file edits, shell, web fetch, todos), async fact extraction into SQLite, proactive check-ins, and a voice web UI. One brain, many bodies.',
    result: 'Live 24/7 on my homelab STB, publicly reachable. Voice-to-voice works, the agent executes real tasks, memory consolidates daily.',
    lessons: 'Voice UX lives or dies on latency cues; memory must be written async or it blocks conversation.',
    stack: ['Go', 'Flutter', 'WebSocket', 'SQLite', 'systemd'],
    links: [
      { label: 'GitHub', href: 'https://github.com/SofyanEkaFebriyanto/noir-app' },
      { label: 'Live demo', href: 'https://noir.sefy.my.id' }
    ],
    image: '/images/projects/noir-app.svg',
    featured: true
  },
  {
    slug: 'url-shortener',
    title: 'URL Shortener',
    summary: 'Full-featured link shortener with a realtime analytics dashboard.',
    context: 'A portfolio-grade project to go deep on Go backends and data visualization.',
    problem: 'Shorteners are easy; making one with honest analytics and a clean dashboard is the real exercise.',
    approach: 'Go/Gin API with SQLite, React/Vite frontend, Tailwind styling, Recharts for the analytics views.',
    result: 'Working shortener with click analytics, ready to demo.',
    lessons: 'Small projects are the best place to practice production habits: tests, dashboards, docs.',
    stack: ['Go', 'Gin', 'React', 'Vite', 'SQLite', 'Recharts'],
    links: [{ label: 'GitHub', href: 'https://github.com/SofyanEkaFebriyanto/url-shortener' }],
    image: '/images/projects/url-shortener.svg'
  },
  {
    slug: 'api-ujikom',
    title: 'API Ujikom',
    summary: 'Laravel REST API for competency exams — 136 validated test cases.',
    context: 'Backend for a vocational competency exam system (ujian kompetensi).',
    problem: 'Exam APIs need to be boringly correct: auth, roles, and edge cases all covered.',
    approach: 'Laravel REST API with role middleware, validated against 136 test cases (positive + negative), plus a web UI test sheet.',
    result: 'API fully tested and documented; the test-case spreadsheet doubles as a QA artifact.',
    lessons: 'Writing the test cases first made the implementation calmer.',
    stack: ['Laravel', 'PHP', 'MySQL'],
    links: [{ label: 'GitHub', href: 'https://github.com/SofyanEkaFebriyanto/api-ujikom' }],
    image: '/images/projects/api-ujikom.svg'
  },
  {
    slug: 'kenfa-ecommerce',
    title: 'Kenfa E-commerce',
    summary: 'E-commerce platform built and maintained end-to-end, live in production.',
    context: 'A real store that needed catalog, checkout, and someone to keep it running.',
    problem: 'A store is never "done" — it needs steady ownership, not just a launch.',
    approach: 'Built with Laravel, deployed to production hosting, maintained continuously: features, fixes, and ops.',
    result: 'Live and serving customers.',
    lessons: 'Maintaining a production app teaches more than starting five new ones.',
    stack: ['Laravel', 'Livewire', 'MySQL'],
    links: [{ label: 'Live', href: 'https://test.kenfa.id' }],
    image: '/images/projects/kenfa.svg'
  }
];
