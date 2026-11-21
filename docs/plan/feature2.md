# Feature 2 — Official Website Mockup Implementation and Responsive Refinement

## 1. Purpose

Refine the existing customer-facing Vacation Farmhouse Rental Platform website to match the official, more polished design mockup provided for this feature.

Feature 1 established the initial public homepage and customer-facing website shell. That implementation is working and must serve as the baseline for this feature.

The official mockup is the primary visual reference for the desired final appearance. It supersedes the initial mockup wherever the two designs differ.

The goal is to bring the existing website as close as reasonably possible to the approved design, including its layout, spacing, typography, colors, imagery, navigation, section composition, and visual details, while ensuring that the entire experience remains responsive and usable on mobile phones, tablets, and desktop screens.

The approved mockup has been added to the repository's `docs/mockups/` directory. Inspect the actual image files before implementation rather than relying on filenames or written descriptions alone.

This is an incremental refinement of the existing website, not a complete rewrite or an expansion into the entire customer-facing MVP.

**Important project constraint:** PostgreSQL is not configured yet. Continue using static/local content and the existing frontend architecture. Do not introduce a database dependency.

## 2. Required Documentation and Design Review

Before changing code, inspect the repository and review:

- `AGENTS.md`
- `docs/architecture.md`
- `feature0.md`, if present
- `feature1.md`
- The project roadmap and relevant product, business, and design documentation
- All relevant files in `docs/mockups/`, especially the official approved website mockup and any desktop/mobile variants
- The existing homepage, shared public components, styling, design tokens, and available image/logo assets
- Existing tests and project verification scripts

### 2.1 Official mockup requirements

Treat the official, more refined mockup as the source of truth for the intended visual design.

Inspect the mockup itself and identify:

- Overall page structure and section ordering
- Header and navigation appearance
- Hero image, image crop, dimensions, overlays, and text placement
- Typography, font sizes, font weights, and text hierarchy
- Background colors, accent colors, borders, and decorative details
- Content widths, alignment, spacing, and margins
- Buttons, links, cards, icons, and other interface elements
- Image placement and proportions
- Footer layout and content
- Any visible mobile-specific layout or behavior

Do not assume that the initial implementation or the fallback design description is more authoritative than the official mockup.

If the mockup includes details that are not supported by the existing property content, preserve the visual intent without inventing property facts.

If the mockup folder is missing, inaccessible, or does not contain the expected official design, report the limitation in the implementation plan. Do not claim to have inspected unavailable files or invent the design based on a filename.

### 2.2 Preserve the established brand

Maintain the Vacation Farmhouse Rental Platform's established visual identity, including its farmhouse character, natural atmosphere, warm surfaces, and muted blue accents where consistent with the approved mockup.

Use the actual logo and approved assets from the repository whenever available.

Do not substitute a generic corporate design, a generic booking marketplace layout, or unrelated stock imagery for the intended design.

## 3. Scope

### Included

- Refine the existing public homepage to match the official mockup.
- Update the shared public header and navigation where required by the design.
- Refine the hero section and its responsive image presentation.
- Adjust existing content sections, layout, typography, spacing, colors, and visual hierarchy.
- Update buttons, links, cards, icons, and decorative elements to match the reference.
- Refine the footer to match the approved design.
- Use existing logo, photography, fonts, and other assets where available.
- Make all affected sections responsive across mobile, tablet, and desktop viewports.
- Implement appropriate mobile-specific layout changes where required by the design.
- Preserve existing working functionality and valid navigation.
- Improve accessibility and usability where needed to support the refined design.
- Update or add relevant component tests.
- Perform visual and responsive verification using available project tools.
- Update documentation if implementation decisions require it.

The exact set of sections to modify must be determined by inspecting the official mockup and comparing it with the current implementation.

### Explicitly out of scope

Do not implement the following unless an existing, documented requirement explicitly makes it necessary:

- PostgreSQL configuration, schema changes, migrations, or database seeding
- Prisma integration or database queries
- Authentication, guest accounts, or user profiles
- An administration portal
- Functional reservation or booking workflows
- Live availability checks or reservation persistence
- Payments, pricing calculations, or booking confirmations
- Email or SMS integrations
- External booking-platform integrations
- Unrelated new pages or features
- A complete rewrite of the application
- Replacement of the established frontend framework or styling system
- New UI libraries or dependencies without a clear technical justification
- Unrequested changes to project configuration or bootstrap files

Do not automatically implement a property details page, gallery page, or reservation feature simply because these may be part of a future roadmap. Follow the actual scope shown by the approved mockup and the existing product requirements.

## 4. User Experience Goals

The refined website should:

- Match the official mockup as closely as practical.
- Present a polished, cohesive, welcoming farmhouse rental experience.
- Preserve the visual identity of the property.
- Make the property's primary message and calls to action easy to understand.
- Provide intuitive navigation on both desktop and mobile.
- Display imagery attractively without distortion or inappropriate cropping.
- Maintain comfortable reading sizes and spacing on small screens.
- Avoid horizontal overflow, clipped content, overlapping elements, and unusable controls.
- Preserve the functionality already established in Feature 1.

The website should feel like a carefully designed, real vacation rental website rather than a rough prototype.

## 5. Functional and Visual Requirements

### 5.1 Existing homepage

Use the existing homepage at `/` as the implementation baseline.

- Refine the existing implementation rather than rebuilding the page from scratch.
- Preserve useful components and working interactions.
- Reorganize or replace existing sections when necessary to match the official mockup.
- Match the mockup's section order, proportions, content alignment, and visual hierarchy.
- Remove obsolete styling or placeholder presentation that conflicts with the approved design.
- Keep the implementation consistent with the project's established architecture.
- Avoid duplicating the homepage or introducing unnecessary routes.

If the official mockup differs substantially from the initial design, prioritize the approved design while preserving unrelated functionality.

### 5.2 Header and navigation

Update the header and navigation to match the approved mockup.

Where applicable:

- Match the logo size, positioning, and surrounding spacing.
- Match navigation typography, spacing, colors, and alignment.
- Match the appearance and positioning of primary and secondary calls to action.
- Preserve links to existing, implemented destinations.
- Keep the header readable and usable at narrower viewport sizes.
- Implement an accessible mobile navigation pattern if required.
- Ensure mobile navigation has clear open and close behavior, keyboard support, and appropriate accessibility attributes.
- Prevent navigation items from wrapping awkwardly, overlapping, or extending beyond the viewport.

Do not introduce dead links or public navigation links to pages that do not exist.

### 5.3 Hero section

Match the official hero design as closely as possible.

Inspect and implement the intended:

- Hero height and overall proportions
- Image selection and cropping
- Text alignment and placement
- Headline and supporting text hierarchy
- Overlay, contrast, and background treatment
- CTA appearance and positioning
- Decorative elements and visual details
- Responsive behavior at smaller viewport widths

Use approved local property imagery whenever possible.

Use `object-fit`, `object-position`, responsive image sizing, and appropriate layout techniques to preserve the intended composition across screen sizes.

Do not stretch images or introduce unrelated imagery that could be mistaken for the actual property.

### 5.4 Content sections

Inspect every section visible in the official mockup and compare it with the existing implementation.

For each section that is in scope:

- Match the intended width, alignment, spacing, and background.
- Follow the reference's typography and text hierarchy.
- Reproduce the intended card, image, icon, and decorative treatments.
- Preserve the intended relationship between images and text.
- Ensure section transitions feel consistent with the overall design.
- Avoid unnecessary visual elements that are not present in the approved design.
- Keep existing useful content unless the approved design or documented requirements indicate otherwise.

Do not invent facts about the farmhouse, such as its address, guest capacity, bedroom count, amenities, history, or policies.

If copy or property information must change to match the mockup, use documented information or clearly identified placeholder content that can be replaced before production.

### 5.5 Buttons and interactive elements

Ensure that existing buttons, links, and interactive components match the mockup's visual treatment.

- Use consistent button heights, padding, typography, colors, borders, and hover states.
- Provide visible keyboard focus indicators.
- Ensure touch targets are usable on mobile devices.
- Preserve working actions and destinations.
- Verify that interactive elements remain usable when the layout changes.
- Do not make static mockup elements appear to perform actions they do not support.
- Do not introduce booking, submission, or availability functionality as part of visual refinement.

Use the existing design system and shared components wherever practical.

### 5.6 Footer

Refine the existing footer to match the official mockup.

Match its layout, spacing, colors, typography, logo presentation, and navigation structure where applicable.

Do not fabricate contact information, social media accounts, addresses, or policies.

Ensure that the footer stacks or reorganizes appropriately on mobile screens and does not create horizontal overflow.

## 6. Responsive Design Requirements

Responsive behavior is a core acceptance requirement, not an optional follow-up.

The website must work well on mobile phones, tablets, and desktop screens. Do not simply scale down the desktop layout and assume that the result is responsive.

### 6.1 Mobile phones

Test at minimum:

- 320px viewport width
- 375px viewport width
- 390px viewport width
- 430px viewport width

At these widths:

- No horizontal page overflow should occur.
- Text must remain readable without unintended clipping.
- Images must resize and crop appropriately.
- Headings must wrap naturally and preserve their hierarchy.
- Buttons must remain visible and easy to tap.
- Navigation must remain usable.
- Side-by-side content must stack or rearrange where appropriate.
- Cards and grids must adapt to the available width.
- Section spacing must remain comfortable without excessive empty space.
- The footer must remain organized and readable.
- Fixed or absolutely positioned elements must not cover important content or controls.

Use the mobile mockup as the primary reference for mobile-specific presentation when one is available.

### 6.2 Tablets

Verify that the layout transitions naturally between mobile and desktop.

- Prevent cramped multi-column layouts.
- Adjust grid columns and spacing where necessary.
- Maintain readable typography and balanced image proportions.
- Keep navigation and CTAs accessible.
- Avoid awkward intermediate breakpoints that cause overlapping or excessive whitespace.

### 6.3 Desktop

Preserve the intended desktop composition.

- Match the mockup's content width and alignment.
- Maintain the intended section proportions.
- Prevent content from stretching excessively on wide screens.
- Preserve the visual relationship between text, imagery, and decorative elements.
- Avoid introducing unnecessary layout changes that diverge from the approved design.

### 6.4 Responsive implementation

Follow existing project conventions for Tailwind CSS breakpoints and responsive utilities.

- Prefer fluid widths and responsive spacing where appropriate.
- Use CSS Grid and Flexbox for layouts that need to adapt.
- Avoid fixed widths and heights that cause overflow.
- Use responsive image behavior appropriate to the intended design.
- Avoid duplicating entire sections solely to achieve responsive layouts unless there is a strong, justified need.
- Respect reduced-motion preferences if animations are introduced or modified.
- Ensure responsive behavior works between the tested viewport sizes, not only at the exact test widths.

## 7. Architecture and Implementation Requirements

- Follow `AGENTS.md` and `docs/architecture.md`.
- Continue using the existing Next.js App Router, React, TypeScript, Tailwind CSS, and shadcn/ui setup established in Feature 0.
- Reuse the current homepage structure and shared public-site components where appropriate.
- Keep React Server Components as the default.
- Use Client Components only where browser-side interaction is necessary.
- Reuse existing design tokens and shared styles rather than introducing conflicting values.
- Avoid unnecessary component duplication.
- Keep components cohesive and easy to maintain.
- Avoid overengineering simple presentation changes.
- Keep static content organized according to existing project conventions.
- Do not introduce a database dependency.
- Do not add a new UI framework or unnecessary packages.
- Avoid unrelated refactoring and configuration changes.

Follow the repository's actual directory structure. Do not create duplicate components or folders solely to match a suggested naming convention.

## 8. Accessibility and Performance

The refined implementation must preserve or improve accessibility and performance.

- Use semantic HTML and appropriate landmarks.
- Maintain a logical heading hierarchy.
- Provide descriptive alt text for meaningful images.
- Use empty alt text for purely decorative images where appropriate.
- Ensure sufficient color contrast.
- Support keyboard navigation.
- Provide visible focus states.
- Give interactive controls accessible names.
- Ensure mobile navigation communicates its state accessibly.
- Avoid layout shifts caused by missing image dimensions or unstable content sizing.
- Follow the existing Next.js image optimization conventions.
- Avoid loading unnecessarily large images when smaller responsive assets are available.
- Avoid unnecessary JavaScript and client-side state.
- Preserve reduced-motion accessibility when animations are used.

Do not sacrifice accessibility or performance merely to reproduce a visual detail.

## 9. Testing and Verification

Before considering the feature complete, run the verification commands supported by the repository.

### 9.1 Code quality

- Run the project's lint command.
- Run TypeScript type checking.
- Run relevant unit and component tests.
- Run the production build.
- Add or update tests for important modified components and existing functionality where appropriate.

Use the actual scripts defined in `package.json`. Do not assume that a particular script exists without checking.

### 9.2 Responsive verification

Use the available browser, preview, or screenshot tools to inspect the actual rendered website at representative viewport sizes.

At minimum, verify:

- A narrow mobile viewport around 320px
- A typical mobile viewport around 390px
- A tablet viewport around 768px
- A desktop viewport around 1440px

Also check the other required mobile widths listed in Section 6 where the available tools support them.

Confirm that:

- The page has no horizontal overflow.
- No text, images, buttons, or navigation elements are clipped or overlapping.
- Images maintain the intended proportions and crop.
- All sections remain visually coherent.
- Mobile navigation works if present.
- Interactive controls remain usable.
- The desktop presentation remains consistent with the approved mockup.

If browser-based visual verification is unavailable, explicitly report the limitation. Do not claim to have visually tested the page when only code inspection was performed.

### 9.3 Visual comparison

Compare the rendered website with the official mockup.

Review:

- Overall composition
- Section ordering and proportions
- Header and hero dimensions
- Typography and spacing
- Color consistency
- Image selection and cropping
- Button styling
- Alignment and whitespace
- Mobile layout and stacking
- Footer appearance

Fix significant visual discrepancies before completing the feature.

Exact pixel matching is not required where the mockup cannot be reproduced precisely because of missing assets or viewport differences. Document meaningful limitations rather than silently substituting an unrelated design.

## 10. Acceptance Criteria

Feature 2 is complete when:

1. The official mockup files available in `docs/mockups/` have been inspected directly.
2. The existing homepage has been refined to match the approved mockup as closely as practical.
3. The header, hero, content sections, buttons, and footer match the design where those elements are present in the reference.
4. The established brand identity and approved local assets are preserved.
5. Existing working functionality and valid navigation continue to work.
6. The website is responsive at 320px, 375px, 390px, 430px, 768px, and 1440px viewport widths, with no horizontal overflow or unusable controls.
7. The mobile presentation is intentionally adapted to narrow screens rather than merely shrinking the desktop layout.
8. Typography, image cropping, spacing, and layout remain usable between the tested viewport sizes.
9. No unsupported property facts or fabricated contact information are introduced.
10. No database integration, reservation functionality, payment flow, or unrelated feature is added.
11. Existing architecture and design-system conventions are followed.
12. Relevant accessibility requirements are satisfied.
13. Linting passes.
14. TypeScript type checking passes.
15. Relevant unit/component tests pass.
16. The production build succeeds.
17. Responsive and visual checks are performed with available tools, and any unavailable checks are explicitly reported.
18. Relevant documentation is updated where necessary.
19. The final report accurately lists changed files, completed work, verification results, and remaining limitations.
20. No subsequent feature is started as part of this implementation.

## 11. Implementation Workflow

Follow the workflow in `AGENTS.md`.

### Step 1 — Inspect

Review the repository, relevant documentation, Feature 1 implementation, existing tests, and all relevant mockups.

Identify the official approved mockup and any desktop/mobile variants.

### Step 2 — Compare and plan

Compare the current website with the approved mockup.

Create a concise implementation plan that identifies:

- Existing components that can be reused
- Components and styles that require changes
- Mockup assets that should be used
- Responsive layout changes
- Accessibility considerations
- Tests and verification commands
- Assumptions or missing assets

Keep the plan focused on the actual differences between the current implementation and the approved design.

### Step 3 — Implement

Refine the existing website to match the mockup.

Prioritize accurate visual implementation, responsive behavior, preservation of existing functionality, and maintainable code.

Do not rebuild working parts of the application without a clear reason.

### Step 4 — Verify

Run linting, type checking, relevant tests, and a production build.

Inspect the rendered page at representative desktop, tablet, and mobile viewport sizes using available tools.

Fix issues discovered during verification.

### Step 5 — Review

Review the changes for:

- Visual fidelity to the official mockup
- Mobile usability and responsive behavior
- Accessibility
- Broken links and interactions
- Unsupported property claims
- Unnecessary dependencies
- Duplicate components or styling
- Unrelated changes and scope creep

### Step 6 — Document and report

Summarize the implementation, modified files, inspected mockups, verification results, and outstanding limitations.

Do not claim that a mockup was inspected, a test passed, or a viewport was verified unless that actually happened.

If a required asset or tool is unavailable, document the limitation and make the most conservative reasonable implementation decision.

## 12. Final Report

When finished, provide a concise report containing:

- Summary of the visual refinements implemented
- Official mockup files actually inspected
- Key differences between the initial implementation and the final design
- Responsive changes made for phones, tablets, and desktop
- Files created or modified
- Tests, linting, type checking, and production build results
- Responsive and visual verification results
- Any missing assets, assumptions, or remaining issues

Do not begin the next feature after completing Feature 2.
