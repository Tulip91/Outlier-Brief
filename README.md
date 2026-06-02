# Outlier Brief

Outlier Brief is a polished mock-data SaaS MVP for small YouTube creators. It finds unusually successful videos across tracked competitors and turns those outliers into clear, actionable ideas for the next upload.

The MVP is intentionally static: there is no YouTube API, AI provider, authentication, database, or payment processing yet. Every route is deployable to Vercel without secrets.

## Tech Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- ESLint and Prettier
- Typed static mock data

## Routes

| Route             | Purpose                            |
| ----------------- | ---------------------------------- |
| `/`               | Marketing landing page and pricing |
| `/dashboard`      | Weekly creator research snapshot   |
| `/competitors`    | Mock competitor tracking workflow  |
| `/reports`        | Generated brief library            |
| `/reports/sample` | Premium Minecraft niche analysis   |
| `/settings`       | Mock profile and brief preferences |

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npm run build
npm run format:check
```

## Deploy To Vercel

Import the GitHub repository into Vercel or run:

```bash
vercel
```

Vercel detects Next.js automatically. No environment variables are required for this MVP.

## Future Roadmap

- YouTube Data API integration
- Real user authentication
- OpenAI-powered report generation
- Stripe payments
- PDF exports
- Browser extension
