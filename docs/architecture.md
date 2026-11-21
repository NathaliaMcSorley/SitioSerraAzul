# Architecture

## Overview

Sítio Serra Azul is currently a static public website implemented as a single Next.js App Router application. The application is configured for static export and can be hosted on GitHub Pages.

The implemented system includes:

- A responsive homepage.
- Shared public header, mobile navigation, footer, and image galleries.
- Static website copy and image paths.
- A demonstrative, client-side availability calendar.
- Automated unit/component and browser tests.

The repository does not yet implement a backend, persistent database, authentication, reservation workflow, or administration area. Prisma, Auth.js, React Hook Form, Zod, and their dependencies are foundation dependencies or configuration only.

## Application structure

```text
src/
├── app/
│   ├── layout.tsx        # Root HTML layout and metadata
│   ├── page.tsx          # Public homepage and section composition
│   ├── globals.css       # Global Tailwind import and design tokens
│   └── page.test.tsx     # Homepage component tests
├── components/public/    # Shared public UI components
├── content/              # Static homepage and sample availability content
└── lib/                  # Calendar and asset/path helpers
```

Top-level configuration includes `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `vitest.config.ts`, `playwright.config.ts`, `prisma/schema.prisma`, and `.github/workflows/deploy.yml`.

## Routing and rendering

The current route is `/`, implemented by [src/app/page.tsx](../src/app/page.tsx). The root layout provides metadata and applies `src/app/globals.css`.

Navigation uses in-page anchors rather than Next.js routes. The main anchors include `#experiencia`, `#comodidades`, `#acomodacoes`, `#disponibilidade`, `#localizacao`, and `#contato`. The page is statically exported with `output: "export"` and has no dynamic route or server action.

The Next.js image component is used throughout, with `images.unoptimized: true` to support static export. Image sources are prefixed by `publicAsset()` when `NEXT_PUBLIC_BASE_PATH` is configured, preserving assets under GitHub Pages subpaths.

## Homepage composition

The homepage owns section composition and layout. Shared public components keep common navigation and page-chrome concerns separate:

- `PublicHeader` and `MobileNav`: desktop and mobile navigation.
- `PublicFooter`: footer navigation and copyright.
- `SitioGallery`: eight-photo Sítio gallery and accessible modal lightbox.
- `CasaGallery`: accommodation gallery and modal lightbox.
- `AvailabilityCalendar`: month navigation and demonstrative date indicators.

The homepage sections through Disponibilidade are:

1. Hero.
2. A Experiência.
3. O Sítio.
4. A Casa.
5. Disponibilidade.

Localização, FAQ, and Contato also exist in the current implementation, but they are static content with anchor navigation. They are not part of the implemented availability or inquiry workflow.

## Styling approach

Tailwind CSS 4 is imported in `globals.css`. Components use utility classes for layout, spacing, typography, and responsive behavior. `globals.css` supplies shared design tokens and base styles:

- Earth and cream palette variables.
- Display and UI font families.
- Global box sizing and rendering defaults.
- A visible `:focus-visible` outline.

Color and typography choices follow the repository's mockup-oriented visual direction. Preserve responsive classes and existing component patterns; do not introduce a separate styling system unless an approved feature requires it.

## Static content and assets

Static copy is maintained in [src/content/home.ts](../src/content/home.ts). Availability notice and sample status generation are maintained in [src/content/availability.ts](../src/content/availability.ts).

Property images are in [public/images](../public/images). Approved design references are in [docs/mockup/official_mockup.jpg](mockup/official_mockup.jpg) and [docs/mockup/logo.png](mockup/logo.png).

The availability section uses generated sample statuses based on recurring month/day values. It does not access a database or external service and must not be presented as real availability.

## Availability implementation

The calendar logic is split into [src/lib/availability-calendar.ts](../src/lib/availability-calendar.ts) and [src/components/public/availability-calendar.tsx](../src/components/public/availability-calendar.tsx).

The implementation:

- Uses `America/Sao_Paulo` for the property-local current date.
- Starts on the current month.
- Limits browsing to 12 months after the current month.
- Prevents navigation into past months.
- Generates sample status data for five years.
- Uses accessible calendar roles and labels.
- Clearly distinguishes sample available, unavailable, and past dates.

This is a UI demonstration only. Future real availability must be source-of-truth data with server-side validation.

## Testing

Vitest with jsdom and Testing Library covers selected components and pure calendar behavior:

- [src/app/page.test.tsx](../src/app/page.test.tsx)
- [src/components/public/availability-calendar.test.tsx](../src/components/public/availability-calendar.test.tsx)
- [src/lib/availability-calendar.test.ts](../src/lib/availability-calendar.test.ts)

Playwright is configured with a Chromium project and a local Next.js development server. [e2e/home.spec.ts](../e2e/home.spec.ts) covers homepage rendering, viewport overflow, mobile navigation, calendar limits, galleries, lightboxes, and console/browser errors.

Tests should be added for behavior changed by a feature and should preserve static-export behavior.

## Build and deployment architecture

The application has no runtime server in the GitHub Pages deployment:

1. GitHub Actions checks out the repository.
2. Node.js 24 and npm dependencies are configured.
3. `npm run build` creates the static export in `out/`.
4. `NEXT_PUBLIC_BASE_PATH=/SitioSerraAzul` is supplied for repository subpath assets.
5. The `github-pages` deployment action publishes the artifact.

The verified workflow is [deploy.yml](../.github/workflows/deploy.yml). Custom repository secrets are not documented in the workflow. The repository does not verify GitHub Pages source settings, custom domains, DNS, or organization restrictions.

## Dependencies and planned areas

Current dependencies include Next.js, React, Tailwind CSS, TypeScript, Prisma Client, Auth.js, React Hook Form, Zod, Vitest, Testing Library, and Playwright.

The following are not implemented and must remain clearly marked as future work:

- PostgreSQL domain models and migrations.
- Server actions or API routes.
- Authentication and authorization.
- Availability persistence.
- Reservation inquiry and booking rules.
- Guest or owner management.
- Pricing, payments, notifications, or analytics.

Do not represent placeholder dependencies or environment variable names as completed functionality.

## Architectural conventions

Future development should preserve these conventions:

- Keep the public homepage and public components separated by responsibility.
- Use the App Router and the existing `@/` alias for imports.
- Keep static copy out of reusable component logic unless it is appropriate configuration.
- Use `publicAsset()` for public asset paths that must work under a configured base path.
- Preserve strict TypeScript and shared design tokens.
- Prefer existing components and small focused helpers over new abstractions.
- Keep a static export-compatible implementation unless a deployment architecture change is explicitly approved.
- Verify responsive behavior and accessibility with tests.
- Update documentation and tests alongside implementation.
- Keep real booking data and all server-side enforcement out of the frontend-only implementation until backend requirements are approved.

## Related documentation

- [README](../README.md): setup, scripts, and deployment summary.
- [AI-assisted development workflow](ai-assisted-development.md): practical feature workflow.
- [Definition of Done](definition-of-done.md): completion criteria.
