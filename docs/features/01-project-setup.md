# Feature: Project Setup

## Status

- **State:** Implemented
- **Date:** 2026-11-21
- **Session summary:** Next.js project bootstrap and local development setup

## Objective

Establish a maintainable Next.js foundation for the Sítio Serra Azul public website and later project capabilities without implementing speculative domain or booking functionality.

## Source References

- Project instructions: [AGENTS.md](../AGENTS.md)
- Architecture: [docs/architecture.md](../docs/architecture.md)
- Package manifest: [package.json](../package.json)
- Environment example: [.env.example](../.env.example)

## Scope

### Included

- Next.js App Router application with React and strict TypeScript.
- Tailwind CSS 4 styling foundation.
- A shared UI-oriented foundation compatible with the project's component conventions.
- Prisma and Auth.js configuration as future foundation only.
- Zod and React Hook Form dependencies.
- Vitest, Testing Library, jsdom, and Playwright test configuration.
- A minimal responsive initial homepage and development scripts.

### Explicitly excluded

- Database domain models and migrations.
- Authentication providers or protected routes.
- Reservation, pricing, inquiry, or administration behavior.

## Implementation

### Main files

- [package.json](../package.json): dependencies and npm scripts.
- [next.config.ts](../next.config.ts): static export configuration.
- [tsconfig.json](../tsconfig.json): strict TypeScript settings and `@/` alias.
- [src/app/layout.tsx](../src/app/layout.tsx): root layout and metadata.
- [src/app/globals.css](../src/app/globals.css): global styles.
- [prisma/schema.prisma](../prisma/schema.prisma): PostgreSQL datasource bootstrap with no domain models.
- [src/auth.ts](../src/auth.ts): Auth.js foundation with no providers.
- [vitest.config.ts](../vitest.config.ts) and [playwright.config.ts](../playwright.config.ts): test configuration.

## Acceptance Criteria

- [x] The application starts with `npm run dev`.
- [x] TypeScript uses strict mode and passes type checking.
- [x] Static production export is available through `npm run build`.
- [x] Unit/component and browser test runners are configured.
- [x] Local environment placeholders are documented.
- [x] No speculative database or authentication domain functionality was implemented.

## Verification

Repository validation passed for:

- `npm run lint`
- `npm run typecheck`
- `npm run build`

The project also exposes `npm run test`, `npm run test:watch`, and `npm run test:e2e`.

## Implementation Notes

`DATABASE_URL` and `AUTH_SECRET` are optional setup placeholders. The current website does not require PostgreSQL or authentication.

