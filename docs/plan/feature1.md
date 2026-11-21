# Feature 1 --- Public Website Homepage and Customer-Facing Shell

## 1. Purpose

Implement the first customer-facing feature of the Vacation Farmhouse
Rental Platform: a polished, responsive public homepage and shared
public-site navigation.

The PostgreSQL database is **not configured yet**. All property content
must use clearly organized static/local data. Do not connect to the
database or make the homepage depend on database availability.

This is an incremental feature, not the entire customer-side MVP.
Complete this feature first, then implement the remaining
customer-facing capabilities in later feature files.

## 2. Required Documentation and Design Review

Before changing code, inspect the repository and read:

-   `AGENTS.md`
-   `docs/architecture.md`
-   `feature0.md`, if present
-   Relevant product, business, roadmap, and design guideline documents
-   **All relevant files in `docs/mockups/`**, especially the approved
    desktop and mobile website mockups

Treat the mockups in `docs/mockups/` as the primary visual reference.
Inspect image files as well as written design notes. Do not infer their
contents from filenames alone.

If `docs/mockups/` does not exist or contains no usable design
references, report that in the implementation plan and use project
documentation and the fallback design direction below. Do not claim to
have reviewed mockups that were unavailable.

Preserve the approved visual identity. The established direction is a
warm, inviting farmhouse rental with country character, natural imagery,
cream/off-white surfaces, muted blue accents inspired by the farmhouse
walls, botanical/natural details, and elegant, readable typography.
Avoid a generic corporate layout or a large booking-marketplace
aesthetic.

## 3. Scope

### Included

-   Public homepage at `/`
-   Responsive public-site header and navigation
-   Brand/logo treatment using existing repository assets where
    available
-   Hero area featuring farmhouse/nature photography or approved imagery
-   Introductory property content
-   Featured highlights/amenities using static content
-   Clear call to action to explore the property or begin the future
    reservation journey
-   Simple public-site footer
-   Reusable, appropriately scoped public website components
-   Static/local content organized so it can later be replaced by
    database-backed data
-   Basic metadata and accessible semantic HTML
-   Unit/component tests for important homepage content and navigation
    rendering
-   Responsive verification at desktop and mobile viewport sizes

### Explicitly out of scope

Do not implement these in Feature 1:

-   PostgreSQL connection, schema, migrations, Prisma queries, or
    database seeding
-   Authentication or guest accounts
-   Administration portal
-   Functional availability calendar
-   Real-time availability checks
-   Reservation inquiry submission or persistence
-   Booking confirmation, payments, or pricing calculations
-   Email or SMS integrations
-   External booking-platform integrations
-   Unapproved redesign of existing mockups

If a mockup includes a date/guest search panel, it may be represented
visually as a non-functional/static presentation. Do not imply date
selection or availability checking works. Prefer a CTA that directs
visitors to an implemented route or on-page section; do not create
broken links.

## 4. User Experience Goals

Help potential guests quickly understand: - This is a single farmhouse
vacation rental. - What makes the property appealing. - The relaxed,
nature-oriented experience guests can expect. - Where to go next to
learn about the property or plan a stay.

Communicate comfort, relaxation, nature, hospitality, trust, and
simplicity. The farmhouse and its photography should remain the primary
visual focus.

## 5. Homepage Requirements

Implement the homepage according to the approved mockups. The following
areas are a functional guide; adapt exact layout, order, dimensions, and
presentation to match the references.

### 5.1 Header and navigation

-   Display the property brand/logo or a clean text-based fallback if no
    logo exists.
-   Provide intuitive links to public sections/pages that exist.
-   Include a prominent primary CTA styled consistently with the mockup.
-   Use an accessible mobile navigation pattern on narrow screens.
-   Do not show admin links in public navigation.
-   Do not create dead links. Use a meaningful section anchor or omit
    navigation items whose destination does not exist yet.

### 5.2 Hero section

-   Use the strongest available approved farmhouse/property image.
-   Follow desktop and mobile mockups for image crop, height, text
    placement, overlay, and responsive behavior.
-   Include a concise welcoming headline, supporting text, and clear
    CTA.
-   Ensure text contrast remains readable over the image.
-   Prefer existing local image assets. Do not use unrelated imagery as
    if it depicts the actual property.

### 5.3 Property introduction

-   Introduce the farmhouse and guest experience with concise static
    copy.
-   Use a welcoming editorial presentation consistent with the design
    references.
-   Do not invent property facts such as guest capacity, bedroom count,
    amenities, address, history, or policies unless documented.
-   If details are unavailable, use general non-specific copy or clearly
    identified placeholder content that can easily be replaced.

### 5.4 Highlights or amenities preview

-   Present a small, curated selection of documented highlights.
-   Only show factual amenities supported by project documentation or
    existing content.
-   If amenities are not documented, keep sample content in one
    centralized static data file and document that the owner must
    verify/replace it before production. Do not present unverified
    claims as confirmed facts.
-   Avoid excessive icons or dense cards if they conflict with the
    mockup.

### 5.5 Closing call to action

-   Provide a clear next step, such as exploring the property or
    planning a stay.
-   The CTA must lead to an implemented page/section or use an
    accessible placeholder behavior that does not pretend to submit a
    reservation.

### 5.6 Footer

-   Include the property brand and useful public navigation where
    appropriate.
-   Do not fabricate phone numbers, email addresses, social accounts,
    addresses, or policies.
-   Use documented contact details only; otherwise omit them or use
    clearly identified placeholders that are not presented as real
    contact information.

## 6. Static Content and Future Data Integration

Because the database is not configured:

-   Keep the homepage fully usable without PostgreSQL, Prisma,
    authentication, or external services.
-   Store repeated static homepage content in a small, clearly named
    module following existing project conventions.
-   Avoid scattering the same content across multiple components.
-   Use TypeScript types where helpful.
-   Do not introduce a mock API, fake database layer, or unnecessary
    repository abstraction just to serve static text.
-   Structure presentation components so the static source can later be
    replaced by server-side data without rewriting the entire UI.
-   Clearly label unverified/sample property facts in code comments or
    documentation.

Do not create empty modules for future features just to reserve folders.
Follow the existing repository structure and the architecture's
preference for simple, feature-based organization.

## 7. Design and Implementation Requirements

-   Follow `AGENTS.md` and established architecture conventions.
-   Use the existing Next.js App Router, React, TypeScript, Tailwind
    CSS, and shadcn/ui setup from Feature 0.
-   Reuse existing shared UI components and design tokens where
    appropriate.
-   Prefer React Server Components by default. Add Client Components
    only when browser-side interaction requires them.
-   Do not add a UI library or dependency unless a clear requirement
    cannot be met with the existing stack.
-   Make the layout responsive from the beginning; desktop and mobile
    are equally important.
-   Use accessible landmarks, logical heading order, descriptive image
    alt text, keyboard-accessible navigation, visible focus styles, and
    sufficient contrast.
-   Optimize images using existing Next.js image conventions.
-   Avoid unnecessary animation; respect reduced-motion preferences if
    animation is introduced.
-   Keep components cohesive and avoid overengineering.
-   Do not make unrelated changes to project bootstrap.

## 8. Suggested Component Boundaries

Use these only if they fit the existing repository; do not create
components solely to match this list.

-   Public site header/navigation
-   Homepage hero
-   Property introduction
-   Featured highlights
-   Call-to-action section
-   Public site footer
-   Centralized static homepage content

Keep public website code within existing public website feature
conventions where practical. Follow the actual repository structure
rather than blindly creating duplicate or empty folders.

## 9. Acceptance Criteria

Feature 1 is complete when:

1.  The public homepage renders at `/`.
2.  The page follows approved mockups in `docs/mockups/` for desktop and
    mobile, to the extent available assets support it.
3.  The page communicates a welcoming, nature-oriented farmhouse rental
    experience and uses the established blue accent direction
    appropriately.
4.  Header, hero, property introduction, highlights, CTA, and footer are
    implemented where supported by the approved design.
5.  The layout works at common desktop, tablet, and mobile viewport
    sizes without horizontal overflow or unusable controls.
6.  Mobile navigation, if present, is keyboard-accessible and has clear
    open/close behavior.
7.  No public navigation links lead to nonexistent pages or broken
    destinations.
8.  No unverified property facts are presented as confirmed facts.
9.  All homepage content is static/local and the page runs without a
    configured database or authentication credentials.
10. No reservation submission, live availability, payment, or admin
    functionality has been implemented.
11. Linting and TypeScript type checking pass.
12. Relevant unit/component tests pass.
13. The production build succeeds.
14. Checks that could not run are explicitly reported with the reason.
15. Relevant documentation is updated if implementation decisions or
    setup instructions need clarification.

## 10. Implementation Workflow

Follow the workflow in `AGENTS.md`:

1.  **Inspect:** Review the current repository and exact mockup/design
    files in `docs/mockups/`.
2.  **Plan:** Provide a concise implementation plan identifying
    pages/components, static content, design assets, tests, and
    assumptions.
3.  **Implement:** Build only the homepage and shared public-site shell
    described here.
4.  **Verify:** Run lint, type checking, relevant tests, and a
    production build. Check desktop/mobile behavior using available
    tools.
5.  **Review:** Check visual consistency, accessibility, broken links,
    unsupported claims, unnecessary dependencies, and scope creep.
6.  **Document:** Report changed files, verification results, and
    unavailable mockups or assumptions.

Do not claim to have inspected a mockup or passed a check unless that
actually happened. If property facts or design assets are missing, state
the limitation and choose a conservative implementation rather than
inventing details.

## 11. Final Report

When finished, report: - Summary of homepage and shared public UI
implemented - Mockup files actually inspected and how they informed
implementation - Files created or modified - Static/sample content the
owner needs to verify - Lint, type-check, test, build, and responsive
verification results - Limitations or remaining work

Do not begin the next feature after completing Feature 1.

## 12. Suggested Follow-up Features

Keep these out of Feature 1. Confirm future feature boundaries against
product requirements and roadmap before implementation.

-   **Feature 2 --- Property Details and Gallery:** Dedicated property
    information, sleeping arrangements where documented, photo gallery,
    amenities, house rules, and location/nearby information. Continue
    using static content until the database is ready.
-   **Feature 3 --- Reservation Inquiry UI:** Customer-facing date and
    guest selection, availability presentation, and reservation inquiry
    form using clearly labeled mock/static availability only. Do not
    imply requests are saved or confirmed without a backend.
-   **Feature 4 --- Database-Backed Customer Reservation Flow:** After
    PostgreSQL and Prisma are configured and reservation rules are
    approved, connect inquiry and availability experiences to real
    server-side validation and persistence.

The final scope and order of follow-up features should align with the
repository roadmap and business requirements.
