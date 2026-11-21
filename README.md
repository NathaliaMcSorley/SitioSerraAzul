# Sítio Serra Azul

A static, responsive public website for the Sítio Serra Azul vacation property. The current implementation presents the property, its experience and accommodations, photo galleries, and demonstrative availability through a single Next.js page.

## Current implementation status

Implemented:

- Desktop and mobile responsive public navigation.
- Hero and property overview through [src/app/page.tsx](src/app/page.tsx).
- "A Experiência" and "O Sítio" sections.
- "A Casa" photo gallery.
- A month-navigation availability calendar with clearly labeled sample data.
- Localização, FAQ, and Contato sections already present in the current homepage.
- Static image assets and responsive lightboxes.
- Unit/component tests and Chromium end-to-end coverage.

Not implemented:

- Real availability or reservation data.
- Reservation inquiry submission or confirmation.
- Authentication or an administration portal.
- Database-backed property, booking, pricing, or inquiry functionality.

Prisma and Auth.js dependencies/configuration are present as foundation only. The Prisma schema has no domain models, and Auth.js has no providers.

## Technology and architecture

- Next.js 16 App Router with React 19 and strict TypeScript.
- Static export configured by [next.config.ts](next.config.ts).
- Tailwind CSS 4 utilities and shared CSS variables in [src/app/globals.css](src/app/globals.css).
- Component and page content under [src](src).
- Vitest, Testing Library, jsdom, ESLint, and Playwright for validation.
- The deployed public page is an indexable static export in `out/`; no application server or database is required.

See [docs/architecture.md](docs/architecture.md) for the current structure and conventions.

## Implemented homepage sections

The homepage is implemented in [src/app/page.tsx](src/app/page.tsx). The implemented sections up through and including Disponibilidade are:

- **A Experiência:** introductory copy and property highlights.
- **O Sítio:** eight-photo responsive gallery with keyboard-accessible lightbox.
- **A Casa:** responsive accommodation photo gallery with lightbox.
- **Disponibilidade:** an interactive calendar. Dates are sample indicators: available and unavailable status is not sourced from a live schedule.

The page also currently includes Localização, FAQ, and Contato. These remain static content and do not submit or confirm reservations.

## Project structure

```text
.
├── .github/workflows/      # GitHub Actions deployment workflow
├── docs/                   # Architecture and SDLC documentation
│   └── mockup/             # Approved mockup and logo references
├── public/images/          # Website static images
├── src/
│   ├── app/                # App Router layout, homepage, and tests
│   ├── components/public/  # Header, navigation, galleries, calendar, footer
│   ├── content/            # Static homepage and availability content
│   └── lib/                # Pure calendar, asset, and utility helpers
├── e2e/                    # Playwright browser tests
├── prisma/schema.prisma    # Database bootstrap; no domain models yet
├── package.json            # Dependencies and npm scripts
└── next.config.ts          # Static export and base-path configuration
```

Design references:

- [docs/mockup/official_mockup.jpg](docs/mockup/official_mockup.jpg)
- [docs/mockup/logo.png](docs/mockup/logo.png)

## Prerequisites

- Node.js 24, matching the deployment workflow.
- npm (the repository includes `package-lock.json`; use `npm ci` for a reproducible install).
- No database or authentication service is required for the current website.

Optional environment placeholders are listed in [.env.example](.env.example). PostgreSQL 16+ and Prisma are not required until database-backed functionality is implemented.

## Installation and local development

From the repository root:

```powershell
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Environment configuration

Copy the example only if work requires the optional variables:

```powershell
Copy-Item .env.example .env
```

- `DATABASE_URL`: placeholder PostgreSQL connection string for future Prisma work.
- `AUTH_SECRET`: placeholder for future Auth.js setup.
- `NEXT_PUBLIC_BASE_PATH`: optional base path for static hosting. It is empty for local development and set to `/SitioSerraAzul` by the GitHub Actions build.

Do not place real credentials in source control or in committed documentation.

## Validation and build commands

```powershell
npm run lint       # ESLint
npm run typecheck  # TypeScript --noEmit
npm run test       # Vitest and Testing Library
npm run test:watch # Vitest watch mode
npm run build      # Next.js production/static build; writes to out/
npm run start      # Serve a Next.js production build
```

For the first Playwright run:

```powershell
npx playwright install chromium
npm run test:e2e
```

## Build and deployment

The [.github/workflows/deploy.yml](.github/workflows/deploy.yml) workflow is the repository's verified deployment configuration.

- Triggers on pushes to `main` and on manual `workflow_dispatch`.
- Runs on Ubuntu with Node.js 24 and `npm ci`.
- Builds with `NEXT_PUBLIC_BASE_PATH=/SitioSerraAzul`.
- Does not run lint, typecheck, unit tests, or Playwright in the workflow: it runs only `npm run build`.
- Uploads `./out` as the GitHub Pages artifact and deploys it through the `github-pages` environment.
- The verified target convention is `https://nathaliamcsorley.github.io/SitioSerraAzul/`.

The workflow declares no custom repository secrets. It does not document whether the GitHub Pages source setting is currently enabled in repository settings. That setting, any organization-level restrictions, a custom domain, and DNS configuration are **unknown and should be confirmed in GitHub before relying on deployment**. No database or server-side application host is configured by this repository.