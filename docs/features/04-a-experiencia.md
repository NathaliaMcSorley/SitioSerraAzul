# Feature: A Experiência

## Status

- **State:** Implemented
- **Date:** 2026-11-21
- **Session summary:** Property experience and highlights section

## Objective

Present the property's main value proposition and summarize the outdoor experience in a concise, visually prominent section.

## Source References

- Official mockup: [docs/mockup/official_mockup.jpg](../../docs/mockup/official_mockup.jpg)
- Homepage implementation: [src/app/page.tsx](../../src/app/page.tsx)
- Static content: [src/content/home.ts](../../src/content/home.ts)

## Scope

### Included

- A section title and section anchor at `#experiencia`.
- A descriptive headline and introductory property copy.
- A highlight list for the lake, barbecue area, fruit trees, hammocks, outdoor space, nature, and proximity to town.
- A responsive image composition.
- Static content based on the repository's approved mockup and implementation.

### Explicitly excluded

- Dynamic property content or a content management system.
- Booking information or a reservation form.
- Location, availability, or capacity data sourced from a backend.

## Implementation

### Main files

- [src/app/page.tsx](../../src/app/page.tsx): section markup and responsive layout.
- [src/content/home.ts](../../src/content/home.ts): property headline and description.
- [public/images/experience1.jpg](../../public/images/experience1.jpg): experience photography.

### Behavior

- The section becomes two columns on larger breakpoints.
- The experience copy and highlight list remain readable on narrow screens.
- The section is reachable from the primary and mobile navigation.

## Acceptance Criteria

- [x] "A Experiência" is clearly identifiable and has the `#experiencia` anchor.
- [x] Content and property image are responsive.
- [x] Copy and typography follow the existing homepage design system.
- [x] No booking or database behavior is implied.

## Verification

Homepage rendering and navigation are covered by the existing page and Playwright tests. Visual confirmation should be repeated against the official mockup whenever typography or spacing changes.

## Implementation Notes

The highlight list is static JSX in the homepage. It can be centralized later only if content administration or reuse becomes an approved requirement.

