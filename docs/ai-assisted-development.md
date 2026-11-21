# AI-Assisted Development Workflow

Use this lightweight workflow for features in this repository. It applies to GitHub Copilot and other AI coding assistants; human contributors should follow the same sequence.

## 1. Establish the scope

Before editing:

1. Read the relevant feature request, mockup, and [architecture](architecture.md).
2. Inspect the current code and tests that are expected to change.
3. Identify what is in scope and what is explicitly deferred.
4. Confirm assumptions when the requirements, copy, or property data are ambiguous.

Do not use future roadmap items as current requirements. In particular, database-backed availability, reservation forms, payments, authentication, and administration are not implemented unless the approved specification explicitly introduces them.

## 2. Create a focused implementation plan

For non-trivial work, summarize:

- The files and components involved.
- Existing behavior that must remain unchanged.
- Acceptance criteria and edge cases.
- Responsive and accessibility behavior.
- Test coverage and documentation updates.
- Any dependencies or deployment impact.

Keep the plan proportional to the change. Do not introduce abstractions or files that the current feature does not need.

## 3. Implement incrementally

- Follow existing App Router, component, Tailwind, and TypeScript conventions.
- Use `@/` imports for source modules.
- Use `publicAsset()` for public image paths that must respect `NEXT_PUBLIC_BASE_PATH`.
- Keep static marketing copy in `src/content` or in the smallest existing owner module.
- Preserve existing anchors and navigation names unless the specification requires a change.
- Keep focus handling, keyboard behavior, and touch behavior intact.
- Do not add real booking behavior to the demonstrative calendar.
- Do not alter application code or content when the request is documentation-only.

## 4. Test the result

Run the smallest relevant test first, then broaden validation:

```powershell
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

These commands are not mandatory for documentation-only changes, but run applicable checks after code changes. Browser tests should cover responsive behavior and interactions affected by the feature.

For a static-export change, verify that asset paths also work with the repository subpath base path.

## 5. Review before completion

Review the diff against the acceptance criteria and the [Definition of Done](definition-of-done.md). Check for:

- Scope compliance.
- Unrelated edits.
- Accessibility and responsive regressions.
- Broken imports or anchors.
- Misleading documentation of future functionality.
- Test gaps for changed behavior.
- Secrets or environment values accidentally committed.

A separate reviewer agent or second-pass review is useful for non-trivial, security-sensitive, or stateful features. Review findings should be actionable and prioritized; do not use the review as an opportunity to expand scope.
