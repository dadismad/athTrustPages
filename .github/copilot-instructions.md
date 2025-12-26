# ATH UI - Copilot Instructions

## Project Overview
**ATH UI** is a SvelteKit-based content portal for crypto news, articles, events, and categories. It fetches data from a headless Strapi CMS via REST API and renders responsive SSR pages with Bootstrap styling and custom SCSS.

## Architecture

### Data Flow
1. **Route Loaders** (`src/routes/+page.ts`): Use `Load` hook to fetch initial data server-side
2. **Service Layer** (`src/lib/services/`): Typed wrappers around Strapi API calls
3. **Environment Helpers** (`prepare-environment.ts`): Manage auth tokens and API host from `VITE_*` env vars
4. **URL Builder** (`prepare-url.ts`): Construct Strapi REST queries with pagination and filters

Example flow: `+page.ts` → `getAllNews()` service → `prepareUrl()` + `prepareEnvironment()` → API response → component data

### Key Directories
- **`src/lib/services/`**: All Strapi API calls (get-all-news, get-article-by-slug, search-articles, etc.)
- **`src/lib/types/entities/`**: Strapi data models (article, event, category, location, picture, tag)
- **`src/lib/components/`**: Reusable UI (ArticlesBlock, EventCard, Carousel, TextInput, etc.)
- **`src/routes/`**: SvelteKit file-based routing with nested layouts
- **`src/lib/styles/`**: Bootstrap 5 + custom SCSS (colors, typography, spacing, variables)

## Critical Patterns

### Service Implementation Pattern
All services follow this structure:
```typescript
// 1. Accept IFetchParams (fetch function + params object)
// 2. Call prepareEnvironment() for auth headers
// 3. Build query with prepareUrl()
// 4. Handle API response in try/catch
// 5. Return typed response (e.g., IGetArticlesReturn)
export const getAllNews: (p: IFetchParams) => Promise<IGetArticlesReturn> =
  async ({ fetch, params }) => {
    const { apiHost, requestOptions } = prepareEnvironment();
    const url = prepareUrl({...});
    const res = await fetch(url, requestOptions);
    return res.json();
  }
```

### Route Loader Pattern
Loaders use `fetch` parameter (bound to server context) and pass `DEFAULT_PAGE_SIZE` constant:
```typescript
export const load: Load = async ({ fetch, params }) => {
  const news = await getAllNews({ 
    fetch, 
    params: { ...params, pagination: { page: 1, pageSize: DEFAULT_PAGE_SIZE } } 
  });
  return { news };
}
```

### Component Props Pattern
Components use `export let` for typed props and destructure data from load results:
```svelte
<script lang="ts">
  export let data; // From route loader
  $: news = data?.news?.result; // Reactive declaration for safe access
</script>
```

## Project-Specific Conventions

### Import Aliases
- `~lib` = `src/lib` (components, services, types, utilities)
- `~` = `src/` (when needed, but rarely used)

### Environment Variables
- `VITE_API_HOST`: Strapi API base URL
- `VITE_API_TOKEN`: Bearer token for Strapi authentication
- `VITE_HOST`: Frontend base URL (for canonical links, redirects)

### Constants Location
Shared constants live in `src/lib/const/index.ts` (e.g., `DEFAULT_PAGE_SIZE = 72`)

### Styling Approach
- Bootstrap 5.3.3 grid and utilities (responsive classes like `d-sm-none`, `pb-md-2`)
- Custom SCSS in `src/lib/styles/` (variables, spacing, colors)
- Component-level SCSS (e.g., `TextInput.scss` co-located with component)

## Development Workflow

### Commands
```bash
npm run dev              # Start dev server (http://localhost:5173)
npm run build           # Production build
npm run check           # TypeScript/Svelte type check
npm run check:watch     # Type check in watch mode
npm run lint            # Prettier + ESLint validation
npm run format          # Auto-format code
npm run test:unit       # Vitest unit tests
npm run test:e2e        # Playwright integration tests
npm run test            # All tests (unit + e2e)
```

### Testing
- **Unit tests**: Vitest in `src/**/*.spec.ts`
- **E2E tests**: Playwright in `e2e/**/*.test.ts`

## Integration Points

### Strapi Query Format
Strapi REST queries use specific syntax:
- **Filtering**: `filters[$and][0][field][$eq]=value`
- **Population**: `populate[0]=field` (to include relations)
- **Sorting**: `sort[0]=field:desc`
- **Fields**: `fields=title,slug` (field projection)

Example from `getAllNews`:
```typescript
// Show hidden articles for creators, normal articles for others
initialQuery += '&filters[$and][0][$or][0][hidden][$null]=true';
initialQuery += '&filters[$and][0][$or][1][hidden][$eq]=false';
initialQuery += '&populate[0]=tags';
initialQuery += '&populate[2]=cover_picture'; // Relations
```

### Bootstrap Responsive Grid
- Use `d-none d-sm-block` for desktop-only elements
- Use `d-block d-sm-none` for mobile-only elements
- Spacing: `pb-2` (bootstrap), `pb-md-2` (responsive)

## Common Tasks

**Add a new content type endpoint**: Create `src/lib/services/get-{entity}.ts` following the standard pattern

**Add a new route**: Create directory in `src/routes/` with `+page.svelte` and `+page.ts` (loader)

**Add a reusable component**: Create `src/lib/components/{ComponentName}.svelte` with typed `export let` props

**Update styling**: Modify `src/lib/styles/variables.scss` for theme vars, or component-level SCSS for isolated styles

## Notes for AI Agents
- Always use the `fetch` parameter passed to loaders (server-side context)
- Environment variables must be prefixed with `VITE_` for client access
- Strapi API responses wrap data in `{ data, meta }` objects
- Pagination defaults to `DEFAULT_PAGE_SIZE` if not specified in service calls
- All services are async and should handle fetch errors gracefully
- Component type safety: import types from `~lib/types/entities/` for proper data validation
