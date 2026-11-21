# Feature: Disponibilidade

## Status

- **State:** Implemented
- **Date:** 2026-11-21
- **Session summary:** Interactive demonstrative availability calendar

## Objective

Replace the static availability presentation with an interactive month calendar that clearly displays available, unavailable, and past dates using static sample data.

## Source References

- Homepage section: [src/app/page.tsx](../../src/app/page.tsx)
- Architecture: [docs/architecture.md](../../docs/architecture.md)
- Feature 2 mockup: [docs/mockup/official_mockup.jpg](../../docs/mockup/official_mockup.jpg)

## Scope

### Included

- A month-based availability calendar in the Disponibilidade section.
- Previous and next month navigation within an explicitly limited range.
- Property-local current date calculation using `America/Sao_Paulo`.
- Static available and unavailable indicators.
- Past-date labeling.
- Accessible calendar roles, labels, and month controls.
- A visible notice that all statuses are demonstrative and not live availability.
- Unit and browser test coverage for date behavior and navigation.

### Explicitly excluded

- Live availability from a database or external service.
- Reservation or inquiry submission.
- Date selection for a booking flow.
- Confirmed reservations, blocked date management, or overlap prevention.
- Backend validation or calendar persistence.

## Implementation

### Main files

- [src/components/public/availability-calendar.tsx](../../src/components/public/availability-calendar.tsx): interactive calendar UI and navigation.
- [src/lib/availability-calendar.ts](../../src/lib/availability-calendar.ts): calendar date helpers and timezone logic.
- [src/content/availability.ts](../../src/content/availability.ts): static sample availability data and notice.
- [src/app/page.tsx](../../src/app/page.tsx): Disponibilidade section, explanatory copy, CTA, and image.

### Behavior

- The calendar opens on the property-local current month.
- Previous navigation stops at the current month.
- Next navigation stops 12 months after the current month.
- Static statuses are generated for five calendar years, anchored to the first displayed year's current date.
- Days before the current property-local date are labeled as past.
- Available and unavailable states use distinct visible symbols and accessible text.
- The `Consultar datas` CTA currently links to the static Contato section.

### Data and configuration

The data is generated entirely in memory from a recurring set of month/day values. It does not represent confirmed property availability and must not be used for reservations.

## Acceptance Criteria

- [x] The calendar starts on the current month in `America/Sao_Paulo`.
- [x] Previous and next navigation respect both browsing limits.
- [x] Available, unavailable, past, and today states are clearly labeled.
- [x] The visible notice identifies data as demonstrative.
- [x] Month and date labels use Portuguese formatting.
- [x] The implementation remains client-side and static-export compatible.
- [x] Unit and browser tests cover navigation and accessible date labels.
- [x] No real booking or live availability behavior was implemented.

## Verification

- [src/components/public/availability-calendar.test.tsx](../../src/components/public/availability-calendar.test.tsx) covers navigation bounds and accessible statuses.
- [src/lib/availability-calendar.test.ts](../../src/lib/availability-calendar.test.ts) covers timezone, month boundaries, leap years, and static data.
- [e2e/home.spec.ts](../../e2e/home.spec.ts) covers the displayed month, 12-month browsing limit, and section behavior.

## Implementation Notes

The availability calendar is a UI demonstration only. Future live availability should use persistent data and server-side validation. Pending, confirmed, blocked, and cancelled date states have not been implemented.
