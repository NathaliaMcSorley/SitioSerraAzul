# Feature: Menu Items and Hero

## Status

- **State:** Implemented
- **Date:** 2026-11-21
- **Session summary:** Public navigation and hero/header visual refinements

## Objective

Provide clear desktop and mobile navigation, a recognizable property header, and a prominent hero that directs visitors to availability and accommodations.

## Source References

- Official mockup: [docs/mockup/official_mockup.jpg](../docs/mockup/official_mockup.jpg)
- Homepage implementation: [src/app/page.tsx](../src/app/page.tsx)
- Header implementation: [src/components/public/header.tsx](../src/components/public/header.tsx)

## Scope

### Included

- Fixed public header with the transparent logo.
- Desktop navigation for the main homepage sections.
- Mobile navigation with open and close states.
- A Reservar call to action.
- Hero photography and a two-column responsive content/visual layout.
- Hero headline, introductory copy, and calls to action for availability and accommodations.
- Keyboard focus handling and in-page anchor navigation.

### Explicitly excluded

- Real reservation entry or checkout.
- Authentication or account menu behavior.
- Server-side route navigation for not-yet-implemented pages.

## Implementation

### Main files

- [src/components/public/header.tsx](../src/components/public/header.tsx): logo, desktop navigation, and reserving CTA.
- [src/components/public/mobile-nav.tsx](../src/components/public/mobile-nav.tsx): mobile menu state and navigation.
- [src/app/page.tsx](../src/app/page.tsx): hero section and calls to action.
- [src/content/home.ts](../src/content/home.ts): hero headline and introduction.
- [src/app/globals.css](../src/app/globals.css): focus and shared typography styles.

### Behavior

- The mobile menu opens and closes with an accessible button and `aria-expanded`.
- The navigation closes after a mobile link is selected.
- Hero actions scroll to `#disponibilidade` and `#acomodacoes`.
- Desktop navigation is hidden at smaller sizes and the mobile navigation is shown.
- Assets use `NEXT_PUBLIC_BASE_PATH`-aware paths.

## Acceptance Criteria

- [x] Desktop and mobile navigation expose the intended sections.
- [x] The mobile menu is keyboard and touch usable.
- [x] The header logo is the transparent Sítio Serra Azul logo.
- [x] Hero and call-to-action text follow the mockup's visual hierarchy.
- [x] Navigation and action anchors do not produce horizontal overflow.
- [x] Reservar remains a link to the existing static contact section.

## Verification

- Mobile navigation is covered in [src/app/page.test.tsx](../src/app/page.test.tsx).
- Navigation, overflow, and touch behavior are covered in [e2e/home.spec.ts](../e2e/home.spec.ts).

## Implementation Notes

Desktop navigation and button text were refined from the initial mockup pass to improve readability and alignment with the official visual reference.

