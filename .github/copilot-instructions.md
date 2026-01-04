
# ATH UI – Copilot AI Agent Instructions

## Project Overview
ATH UI is a SvelteKit SSR portal for crypto news, articles, events, and categories, powered by a Strapi CMS backend. It uses Bootstrap 5.3.3 and custom SCSS for responsive, modern UI.

## Architecture & Data Flow
- **Route Loaders** (`src/routes/+page.ts`): Use SvelteKit `load` hooks to fetch data server-side.
- **Service Layer** (`src/lib/services/`): Typed wrappers for Strapi REST API calls. Always use `prepareEnvironment()` for auth and `prepareUrl()` for query building.
- **Types** (`src/lib/types/entities/`): Centralized Strapi data models (e.g., `article`, `event`, `category`).
- **Components** (`src/lib/components/`): Reusable Svelte UI blocks (e.g., `ArticlesBlock`, `EventCard`).
- **Styling**: Bootstrap grid/utilities + custom SCSS in `src/lib/styles/` and per-component SCSS.

**Typical data flow:**
`+page.ts` loader → service (e.g., `getAllNews`) → Strapi API → loader result → Svelte component props

## Key Patterns & Conventions
- **Service pattern:**
  - Accepts `{ fetch, params }` (see `IFetchParams`)
  - Uses `prepareEnvironment()` for headers, `prepareUrl()` for query
  - Handles errors with try/catch, returns typed `{ data, meta }`
- **Loader pattern:**
  - Always use the `fetch` param from SvelteKit context
  - Pass `DEFAULT_PAGE_SIZE` from `src/lib/const/index.ts` for pagination
- **Component props:**
  - Use `export let` for all props, type with entities from `~lib/types/entities/`
  - Destructure loader data reactively: `$: news = data?.news?.result`
- **Import aliases:**
  - `~lib` → `src/lib` (preferred)
  - `~` → `src/` (rare)
- **Environment:**
  - All env vars must be prefixed with `VITE_` (see `.env.local`)
  - `VITE_API_HOST`, `VITE_API_TOKEN`, `VITE_HOST` are required
- **Strapi queries:**
  - Use `filters`, `populate`, `sort`, `fields` as in `getAllNews`
  - Example: `filters[$and][0][hidden][$eq]=false&populate[0]=tags`
- **Styling:**
  - Use Bootstrap classes for layout, spacing, and responsive visibility
  - Custom SCSS in `src/lib/styles/` and per-component files

## Developer Workflow
- **Install:** `npm install`
- **Dev server:** `npm run dev` (http://localhost:5173)
- **Type check:** `npm run check`
- **Lint/format:** `npm run lint`, `npm run format`
- **Unit tests:** `npm run test:unit` (Vitest, `src/**/*.spec.ts`)
- **E2E tests:** `npm run test:e2e` (Playwright, `e2e/**/*.test.ts`)
- **Build:** `npm run build`

## Common Tasks
- Add Strapi endpoint: create `src/lib/services/get-{entity}.ts` using service pattern
- Add route: create folder in `src/routes/` with `+page.svelte` and `+page.ts`
- Add component: create `src/lib/components/{ComponentName}.svelte` with typed `export let` props
- Update theme: edit `src/lib/styles/variables.scss` or component SCSS

## AI Agent Notes
- Always use the `fetch` param in loaders for SSR
- Handle Strapi API responses as `{ data, meta }`
- Use types from `~lib/types/entities/` for all data
- Pagination defaults to `DEFAULT_PAGE_SIZE` if not set
- All services are async and must handle fetch errors

**Reference:** See [README.md](../../README.md) and [QUICKSTART_LOCAL.md](../../QUICKSTART_LOCAL.md) for more details.
