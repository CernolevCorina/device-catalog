This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key decisions and trade-offs   
- Filters/sort live in the URL, not client state. `Filters` is a client component that writes `priceFrom`, `priceTo`, `brand`, `sortField`, `sortOrder` into the query string via `useRouter`/`useSearchParams`. The list page (`app/page.tsx`) is a server component that reads `searchParams` and re-fetches on the server.
- Filtering/sorting happens server-side, validated with `zod` (`querySchema`) in the `/api/devices` route.
- `notFound()` vs generic error: the device detail page (`devices/[slug]`) distinguishes a `404` response from the API (→ `notFound()` → `not-found.tsx`) from any other failure (→ thrown error → `error.tsx`).
- Metadata is generated per device (`generateMetadata` in `devices/[slug]/page.tsx`).
- Used Next.js Route Handlers to implement server-side endpoints, similar to the API routes approach available in Nuxt.js for Vue applications.

## How AI tools were involved
During development, AI-assisted tools (Claude Code) were used for:
- debugging TypeScript type errors;
- investigating runtime issues caused by incorrect imports;
- reviewing Next.js App Router conventions (e.g. `generateMetadata`);
- discussing possible approaches for API route implementation.

All generated suggestions were reviewed, adapted, and integrated manually into the project.

## What I'd do next with more time

- Move mock data behind a real data layer (DB or external API) — the `entities/device` boundary is already set up to make this a contained change.
- Debounce or otherwise improve the filter UX (currently requires clicking "Apply"; could sync on change with a debounce for a snappier feel).
- Implement a global error handling mechanism to display toast notifications when unexpected errors occur.
- Enhance the device details page and device cards by presenting information in a more structured and user-friendly way.
- Improve the overall design, including UI refinements and better loading and error states/pages.
