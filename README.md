# Sofyan Eka Febriyanto - Personal Site

Calm, systems-first personal brand site built with Next.js App Router, MDX notes, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Add a new MDX note

1. Create a new file in `content/notes/` with a `.mdx` extension.
2. Add frontmatter at the top:

```mdx
---
title: "Your note title"
date: "2026-02-10"
excerpt: "Short summary shown on the list page."
tags: ["tag-one", "tag-two"]
---

Your note content here.
```

Notes are sorted by `date` (newest first).

## Deploy to Vercel

1. Push the repository to GitHub.
2. In Vercel, click **Add New Project** and import the repo.
3. Vercel detects Next.js automatically. Use the default build settings.
4. Deploy.

## Set the domain

1. In Vercel, open the project and go to **Settings -> Domains**.
2. Add `sofyanekafebriyanto.my.id`.
3. Update DNS records at your domain provider with the values Vercel provides.

## Customize content

- Update social links in `app/contact/page.tsx`.
- Update project details in `data/projects.ts`.
- Update the now page lists in `content/now.ts`.
- Replace the placeholder resume at `public/resume.pdf` if needed.
