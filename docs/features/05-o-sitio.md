# Feature: O Sítio

## Status

- **State:** Implemented
- **Date:** 2026-11-21
- **Session summary:** Exterior-photo gallery and lightbox for O Sítio

## Objective

Replace the existing generic gallery presentation with a responsive exterior-photo gallery showing relevant outdoor areas, landscape, and surroundings.

## Source References

- Exterior images: [public/images](../../public/images)
- Mockup assets: [docs/mockup](../../docs/mockup)
- Homepage section: [src/app/page.tsx](../../src/app/page.tsx)
- Gallery implementation: [src/components/public/sitio-gallery.tsx](../../src/components/public/sitio-gallery.tsx)

## Scope

### Included

- Eight exterior images beginning with `sitio*`.
- A two-, three-, or four-column responsive gallery based on viewport size.
- Native modal dialog lightbox behavior.
- Escape-key and close-button support.
- Backdrop dismissal.
- Focus restoration to the selected photo.
- Touch and keyboard interaction.
- Accessible photo names and dialog labeling.

### Explicitly excluded

- Gallery upload or management.
- Database-backed image metadata.
- New external image sources or placeholder replacement.

## Implementation

### Main files

- [src/components/public/sitio-gallery.tsx](../../src/components/public/sitio-gallery.tsx): photo data, grid, dialog, focus, and backdrop behavior.
- [src/app/page.tsx](../../src/app/page.tsx): section container and `#comodidades` anchor.

### Images

The gallery uses:

- `sitio-overview.jpeg`
- `sitio-view-from-porch.jpg`
- `sitio-lago.jpeg`
- `sitio-external-area.jpeg`
- `sitio-fruit-tree.jpeg`
- `sitio-family.jpeg`
- `sitio-birds.jpeg`
- `sitio-bonfire.jpeg`

## Acceptance Criteria

- [x] All eight relevant exterior photos are displayed.
- [x] The gallery adapts from mobile to desktop.
- [x] Selecting a photo opens an accessible modal with a larger image.
- [x] Escape and close controls dismiss the modal.
- [x] Backdrop dismissal works.
- [x] Focus returns to the opening gallery button.
- [x] Image errors and browser console errors were checked.

## Verification

[e2e/home.spec.ts](../../e2e/home.spec.ts) covers photo loading, lightbox open/close behavior, focus restoration, backdrop dismissal, touch interaction, and image viewport fit.

## Implementation Notes

The component preserves the existing `#comodidades` section anchor and uses static image data. Lightbox state is local component state; no external modal library was added.

