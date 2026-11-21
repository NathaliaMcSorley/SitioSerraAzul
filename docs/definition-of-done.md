# Definition of Done

A feature is complete only when all applicable criteria below are met.

## Requirements

- Approved requirements and acceptance criteria are implemented.
- The implementation is limited to the approved scope.
- Existing behavior is preserved where no change was intended.
- Mockup, copy, and property-specific information are verified or explicitly documented as placeholders.
- Current functionality is not described as a completed backend, database, booking, or administration feature.

## Implementation quality

- TypeScript is strict and compiles without new errors.
- Code follows the existing App Router, component, utility, and styling conventions.
- Business logic is separated from presentation only when that improves maintainability.
- No secrets or real credentials are introduced.
- Static export and `NEXT_PUBLIC_BASE_PATH` behavior remain functional.

## Responsive and accessibility behavior

- Layouts work at common mobile, tablet, and desktop widths.
- Interactive controls support keyboard and touch use where applicable.
- Focus indicators and focus restoration remain usable.
- Labels, headings, navigation, dialogs, and color/status indicators provide accessible context.
- Animations respect reduced-motion behavior where implemented.

## Testing and validation

- Relevant unit/component tests pass.
- Playwright coverage includes interactions or responsive behavior changed by the feature.
- `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build` pass for code changes.
- `npm run test:e2e` passes when browser behavior is affected.
- Known limitations are recorded rather than silently deferred.

## Review and documentation

- A code or implementation review has checked acceptance criteria and regressions.
- README, architecture, or feature documentation is updated when the change affects setup, structure, behavior, or deployment.
- Internal documentation links and commands are verified.
- The final diff contains no unrelated application, content, styling, or documentation changes.
