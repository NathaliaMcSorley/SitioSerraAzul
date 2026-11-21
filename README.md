# Vacation Farmhouse Rental Platform

This repository contains the Feature 0 Next.js bootstrap for the Vacation Farmhouse Rental Platform. It provides a minimal welcome page and the local foundation for future public and administration features.

## Prerequisites

- Node.js 24 LTS (recommended) or another supported Node.js 20+ release
- npm 11 or another npm version compatible with Node.js
- Optional: PostgreSQL 16+ for later database work
- Optional: Docker only if you prefer running PostgreSQL in a container

## Install

```powershell
npm install
```

The dependency versions and lockfile are recorded in `package.json` and `package-lock.json`.

## Local development

```powershell
npm run dev
```

Open http://localhost:3000.

The welcome page does not require a database or authentication credentials.

## Environment configuration

Copy the example file for optional local configuration:

```powershell
Copy-Item .env.example .env
```

Set `DATABASE_URL` only when working with Prisma/PostgreSQL. `AUTH_SECRET` is optional until Auth.js authentication is implemented. Placeholder values are not real credentials.

## PostgreSQL and Prisma

PostgreSQL is not required to start or build the welcome page. Use one of these local options:

1. Install PostgreSQL locally and create a development database.
2. Run PostgreSQL through Docker Compose when Docker is available.

Set `DATABASE_URL` in `.env`, for example:

```text
postgresql://postgres:password@localhost:5432/sitio_serra_azul
```

Generate or apply migrations when domain models are added:

```powershell
npx prisma generate
npx prisma migrate dev
```

Before running Prisma commands, replace the example credentials with your local database credentials.

## Scripts

```powershell
npm run dev          # start the development server
npm run build        # create a production build
npm run start        # serve the production build
npm run lint         # run ESLint
npm run typecheck    # run TypeScript type checking
npm run test         # run Vitest and React Testing Library
npm run test:watch   # run unit/component tests in watch mode
npm run test:e2e     # run the Playwright smoke test
```

Install the Playwright browser before the first end-to-end run:

```powershell
npx playwright install chromium
npm run test:e2e
```