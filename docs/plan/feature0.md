# Feature 0 — Project Bootstrap and Local Development Setup

## 1. Objective
Establish a clean, maintainable foundation for the Vacation Farmhouse Rental Platform so the application can be installed and run locally with Next.js. Deliver only a simple welcome page that confirms the development environment works.

This feature is infrastructure and project setup only. **Do not implement the farmhouse website design or use the desktop/mobile mockups yet.** Do not build booking, availability, reservation, pricing, property-management, or admin workflows in this feature.

## 2. Required First Steps
Before making changes:
1. Read `AGENTS.md` and `docs/architecture.md`, plus any existing `docs/product-requirements.md`, `docs/business-domain.md`, `docs/roadmap.md`, and `docs/design-guidelines.md` files if they exist.
2. Inspect the current repository, package manager, existing application code, scripts, environment files, and installed dependencies.
3. Preserve existing conventions and working code. Do not recreate the project or replace configuration files without a clear need.
4. If a required decision is not defined in the repository, choose the simplest conventional option and document it. Do not invent property-specific business rules.

## 3. Technology Stack
Use the stack specified in `docs/architecture.md` and follow `AGENTS.md`:
- **Runtime and package tooling:** use a supported Node.js LTS release and the package manager already used by the repository. If the repository has no package manager, use npm and commit the generated lockfile.
- **Application:** Next.js with App Router, React, and TypeScript.
- **Styling and UI:** Tailwind CSS and shadcn/ui, using the current setup instructions compatible with the installed Next.js and Tailwind versions.
- **Database:** PostgreSQL.
- **ORM and migrations:** Prisma.
- **Authentication foundation:** Auth.js, reserved for secure admin authentication in a later feature.
- **Validation:** Zod.
- **Forms:** React Hook Form with Zod integration available for later features.
- **Testing:** Vitest, React Testing Library, and Playwright.

Use mutually compatible, stable package versions. Do not install duplicate libraries or add alternative frameworks that conflict with this stack. Prefer existing shadcn/ui components before adding another UI library.

## 4. Scope and Deliverables
### 4.1 Next.js application
- Ensure the repository contains a working Next.js App Router application using React and TypeScript.
- Configure strict TypeScript settings and appropriate linting/formatting consistent with the existing repository and current Next.js conventions.
- Ensure the application has a root layout and a home page.
- Keep the public website and future admin portal capable of having separate layouts/routes, but do not create unnecessary empty folders or placeholder pages.

### 4.2 Simple welcome page
Create a minimal, responsive welcome page at `/` that:
- Clearly identifies the project as the Vacation Farmhouse Rental Platform.
- Displays a short message such as “Your farmhouse rental website is ready to build.”
- Uses basic spacing, readable typography, and a neutral background.
- Works on desktop and mobile.
- Does not attempt to reproduce the supplied visual mockups, establish final branding, or require property photos or logo assets.
- Does not include non-functional booking controls, fake availability, fabricated property details, or placeholder links that look functional.

Keep this page intentionally simple. The goal is to verify that the app starts and renders successfully, not to implement the final guest experience.

### 4.3 Styling and component foundation
- Set up Tailwind CSS correctly for the installed version of Next.js.
- Initialize shadcn/ui and its required configuration using the repository's chosen component and utility paths.
- Verify that at least one simple shadcn/ui component can be imported and rendered, if doing so is supported by the setup without adding unnecessary UI to the welcome page.
- Confirm global styles load correctly.

### 4.4 Database and Prisma
- Configure Prisma for PostgreSQL and add the initial Prisma configuration/schema using the current Prisma conventions for the selected version.
- Add a minimal `.env.example` documenting the required database connection variable, such as `DATABASE_URL`, without real credentials.
- Add clear instructions for supplying a local PostgreSQL connection string and applying migrations.
- Do not require a live database connection just to render the welcome page or start the Next.js development server.
- Do not create speculative reservation/property models unless the repository already requires them for an established setup. Domain schema work belongs in the relevant later feature.
- If a local database service is not already provided by the repository, document the simplest supported way to run PostgreSQL locally. Do not assume Docker is installed; if adding a Docker Compose file is useful, keep it minimal and document that Docker is optional for running the welcome page.

### 4.5 Auth.js foundation
- Install and configure only the foundational dependencies and file structure needed for Auth.js to be introduced consistently with the architecture.
- Add any required environment-variable examples, such as `AUTH_SECRET`, only if required by the selected Auth.js setup.
- Do not configure Google OAuth or another provider unless the existing project documentation explicitly requires one.
- Do not build login screens, sessions, protected admin routes, or authorization workflows in this feature.
- The public welcome page must work without authentication credentials.

### 4.6 Validation and forms foundation
- Install Zod and React Hook Form, including the Zod resolver if appropriate for the selected versions.
- Do not build a reservation form or introduce guest-facing form behavior yet.

### 4.7 Testing foundation
- Configure Vitest and React Testing Library for the project's React/TypeScript setup.
- Add at least one small test that verifies the welcome page renders its main project heading or message.
- Configure Playwright and add a minimal end-to-end smoke test for opening `/` if it can be set up without making the basic development workflow fragile.
- Document any browser installation step needed to run Playwright tests.
- Keep test commands separate and clearly named in `package.json`.

### 4.8 Developer experience and documentation
- Provide working, clearly named scripts for development, production build, start, lint, type checking, unit/component tests, and end-to-end tests where configured.
- Ensure the lockfile is committed/updated and dependency installation is reproducible.
- Add or update the README with prerequisites, installation, environment configuration, local startup, test commands, and optional database setup/migrations.
- Keep secrets out of source control. Ensure `.env*` files containing real secrets are ignored while `.env.example` is committed.
- Do not claim a command has passed unless it was actually run.

## 5. Non-Goals
Do not implement any of the following in Feature 0:
- The approved desktop or mobile visual mockups, final color palette, typography, or brand identity.
- Property photography, gallery, amenities, location, or house-rules pages.
- Reservation inquiry forms or email notifications.
- Availability calculations or calendars.
- Reservation approval, cancellation, or conflict prevention.
- Pricing rules or payment processing.
- Admin dashboard, admin login UI, or protected admin workflows.
- Guest accounts, external booking integrations, analytics, or multi-property support.
- Production deployment configuration beyond documenting the expected environment at a high level.

## 6. Acceptance Criteria
Feature 0 is complete only when all applicable criteria below are satisfied:
1. A fresh dependency installation succeeds using the repository's documented package manager and lockfile.
2. The documented Node.js version and local prerequisites are clear.
3. The Next.js development server starts locally using the documented command.
4. Visiting `http://localhost:3000` displays the simple welcome page without runtime errors.
5. The welcome page is usable at desktop and mobile viewport sizes.
6. TypeScript type checking succeeds.
7. Linting succeeds using the configured project command.
8. The welcome-page unit/component test passes.
9. The production build succeeds.
10. The Playwright smoke test passes when its documented browser prerequisites are installed; if it cannot be run in the current environment, report that clearly and explain the remaining step.
11. Tailwind CSS and shadcn/ui are configured and their paths/settings are valid.
12. Prisma is configured for PostgreSQL, and setup/migration instructions are documented without making the home page dependent on a running database.
13. Auth.js, Zod, React Hook Form, Vitest, React Testing Library, and Playwright are installed/configured to the extent specified in this feature, with no unnecessary feature implementation.
14. `.env.example` contains only placeholder values; no secrets are committed.
15. README instructions accurately describe how to install, run, test, and configure the project.
16. No booking, reservation, admin, or mockup-based UI has been implemented.

## 7. Implementation Workflow
Follow the workflow in `AGENTS.md`:
1. **Analyze:** inspect the repository and identify what already exists.
2. **Plan:** provide a concise implementation plan listing configuration changes, dependencies, scripts, tests, and documentation.
3. **Implement:** make the smallest coherent set of changes that meets this feature.
4. **Verify:** run dependency installation as appropriate, lint, type checking, tests, and production build. Run the Playwright smoke test if the environment supports it.
5. **Review:** check for secrets, incompatible dependencies, unnecessary abstractions, unused packages, incorrect scripts, and scope creep.
6. **Document:** summarize changed files, exact commands run, results, and any setup steps that could not be verified.

Do not skip repository inspection. If the existing repository already has a working setup, extend it rather than replacing it. If a dependency or configuration cannot be installed or verified in the current environment, explain the blocker and provide the exact next step instead of claiming it is complete.

## 8. Final Report
When finished, report:
- What was created or configured.
- The command to install dependencies and the command to run the site locally.
- The local URL.
- Test, lint, type-check, and build results, distinguishing passed from not run or blocked.
- How PostgreSQL and Prisma are configured and what remains optional for the welcome page.
- Any remaining manual setup steps or deviations from this specification.
