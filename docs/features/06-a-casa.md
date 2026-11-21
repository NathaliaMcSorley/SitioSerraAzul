# Feature: A Casa

## Status

- **State:** Implemented
- **Date:** 2026-11-21
- **Session summary:** Accommodation/gallery implementation within the initial mockup homepage pass

## Objective

Present the property's interior and accommodation areas with responsive photography and an enlarged-image view.

## Source References

- Official mockup: [docs/mockup/official_mockup.jpg](../../docs/mockup/official_mockup.jpg)
- Homepage implementation: [src/app/page.tsx](../../src/app/page.tsx)
- Gallery implementation: [src/components/public/casa-gallery.tsx](../../src/components/public/casa-gallery.tsx)

## Scope

### Included

- An accommodation section titled "A Casa".
- A responsive grid of living-area, bedroom, and bathroom photography.
- Native modal dialog lightbox behavior.
- Close control, Escape handling, backdrop dismissal, touch behavior, and focus restoration.
- The existing `#acomodacoes` anchor.

### Explicitly excluded

- Room inventory or capacity data.
- Beds, booking rules, pricing, or check-in information from a backend.
- Content management or image uploads.

## Implementation

### Main files

- [src/components/public/casa-gallery.tsx](../../src/components/public/casa-gallery.tsx): accommodation photo data and lightbox behavior.
- [src/app/page.tsx](../../src/app/page.tsx): section title and layout.

### Images

The current implementation uses:

- `casa-living-area.jpeg`
- `casa-living-area-2.jpeg`
- `casa-bedroom.jpg`
- `casa-bathroom.jpeg`

Additional bedroom images exist in `public/images` but are not currently selected by this gallery component.

## Acceptance Criteria

- [x] The accommodation section renders under "A Casa".
- [x] Existing and selected accommodation photos fit responsive grid layouts.
- [x] Selecting a photo opens an enlarged view.
- [x] Close, Escape, backdrop, touch, and focus behavior remain accessible.
- [x] The section does not imply live availability or confirmed accommodation data.

## Verification

Lightbox behavior is shared with the same pattern as the O Sítio gallery and is exercised by the Playwright lightbox tests in [e2e/home.spec.ts](../../e2e/home.spec.ts).

## Implementation Notes

The gallery is static and component-local. `casa-bedroom-2.jpg` and other unreferenced property images should only be added when the approved accommodation scope calls for them.
