# AGENTS.md

## Purpose
This repository follows an Agentic Software Development Lifecycle (Agentic SDLC).

This document defines:
- Agent responsibilities
- Development workflow
- Deliverables
- Engineering standards
- Review expectations
- Product development principles

All contributors, human or AI, must follow this document.

The goal is to build a maintainable, scalable, and user-friendly vacation rental platform while keeping the initial implementation focused on the MVP.

## Project Overview
The project is a custom vacation rental platform for a single vacation farmhouse.

The platform provides two primary experiences:
- A public-facing website for guests.
- A private administration portal for the property owner.

The public website serves as the property's digital portfolio and reservation entry point.
The administration portal allows the owner to manage the property, availability, inquiries, and reservations.
The long-term platform may support a more comprehensive booking experience, but the initial MVP should remain focused on the needs of a single rental property.

## Product Vision
Create a beautiful and trustworthy online experience where potential guests can:
- Discover the farmhouse.
- Explore photos and property information.
- Learn about amenities and nearby attractions.
- Check available dates.
- Submit reservation inquiries.
- Request a stay for their preferred dates.
- Receive confirmation or updates about their reservation.

Allow the property owner to manage the rental business without relying on external booking platforms for everyday operations.

## Current MVP
The initial MVP consists of two applications or clearly separated application areas.

1. Public Website
The public website is the primary marketing and guest experience.

Primary Objectives
- Showcase the farmhouse and its unique characteristics.
- Present professional property photography.
- Communicate property details, amenities, policies, and location.
- Allow guests to explore availability.
- Allow guests to submit reservation requests.
- Provide a clear and simple reservation experience.
- Work seamlessly on desktop, tablet, and mobile devices.

Functional Requirements
- Home Page
- Introduce the property.
- Present the property's main value proposition.
- Display prominent photography.
- Highlight important amenities.
- Include a clear call to action for checking availability or requesting a stay.
- Provide navigation to other public pages.
- Property Information

Provide dedicated sections or pages for:
- Property overview.
- Photo gallery.
- Bedrooms and sleeping arrangements.
- Bathrooms.
- Amenities.
- Property capacity.
- House rules.
- Check-in and check-out information.
- Location and nearby attractions.

Content should be easy to maintain and update.

Availability Calendar
Guests should be able to:
- View available dates.
- Identify unavailable dates.
- Select a check-in date.
- Select a check-out date.
- See relevant minimum-stay restrictions, if applicable.
- Proceed to the reservation inquiry process.

The calendar must reflect the availability maintained by the property owner.

Reservation Inquiry
Guests should be able to submit a reservation request containing:
- Check-in date.
- Check-out date.
- Number of guests.
- Guest name.
- Email address.
- Phone number (optional).
- Additional message or special requests.

The system should:
- Validate the requested dates.
- Prevent requests for unavailable dates.
- Validate guest information.
- Save the reservation inquiry.
- Provide a confirmation message to the guest.
- Make the inquiry available in the administration portal.

A reservation inquiry must not automatically be treated as a confirmed reservation.
The owner must be able to approve or decline the request.

Reservation Status
The platform should support the following reservation states:
- Pending
- Confirmed
- Declined
- Cancelled

The public availability calendar must account for confirmed reservations and owner-managed unavailable dates.

Pending requests must not be treated as confirmed reservations. However, the system should detect overlapping pending requests and make them visible to the owner.

The final reservation policy must be defined before implementation.

2. Administration Portal
The administration portal is a private area used by the property owner.

Primary Objectives
- Manage property availability.
- Review incoming inquiries.
- Manage reservations.
- Update property information.
- Manage rental pricing and policies.
- Functional Requirements
- Admin Authentication
- Administration pages must require authentication.
- Public guests must not be able to access administrative functionality.
- Administrative operations must be protected on the server, not only hidden in the UI.
- Dashboard

Display an overview of:
- Upcoming reservations.
- Pending inquiries.
- Current availability.
- Recent reservation activity.
- Relevant operational information.

The dashboard should help the owner quickly understand the property's reservation status.

Calendar Management
The owner should be able to:
- View reservations in a calendar.
- View unavailable dates.
- Manually block dates.
- Reopen previously blocked dates.
- See reservation details.
- Identify pending, confirmed, and cancelled reservations.

The calendar must clearly distinguish between:
- Available dates.
- Pending reservation requests.
- Confirmed reservations.
- Owner-blocked dates.
- Reservation Management

The owner should be able to:
- View all reservation inquiries.
- Review guest information.
- Review requested dates.
- Review the number of guests.
- Approve reservation requests.
- Decline reservation requests.
- Cancel confirmed reservations.
- Add internal notes.
- View reservation history.

Approving a reservation must validate availability again to prevent overlapping confirmed reservations.

Property Management
The owner should be able to manage relevant property information, including:
- Property description.
- Photos.
- Amenities.
- Guest capacity.
- House rules.
- Check-in and check-out information.
- Contact information.
- Pricing Management

The system should be designed to support:
- Base nightly rates.
- Seasonal pricing.
- Weekend pricing.
- Special date pricing.
- Minimum stay requirements.

Complex pricing rules can be deferred if they are not necessary for the first MVP.

## MVP Scope and Priorities
The MVP should prioritize a complete and reliable reservation workflow rather than implementing every feature associated with a large vacation rental marketplace.

Must Have
- Responsive public website.
- Property information and photography.
- Amenities and house rules.
- Availability calendar.
- Reservation inquiry form.
- Guest information validation.
- Reservation persistence.
- Admin authentication.
- Admin dashboard.
- Admin calendar management.
- Reservation approval and rejection.
- Prevention of overlapping confirmed reservations.
- Owner-managed blocked dates.
- Should Have
- Email notifications for new inquiries.
- Email notifications when reservations are approved or declined.
- Reservation confirmation details.
- Basic pricing management.
- Guest count validation.
- Internal admin notes.
- SEO-friendly public pages.
- Basic analytics.
- Future Roadmap

The following features should not be introduced into the MVP unless explicitly approved:
- Online payment processing.
- Automatic instant booking.
- Refund processing.
- Guest accounts.
- Customer reviews.
- Loyalty programs.
- Multiple properties.
- Dynamic pricing integrations.
- Third-party booking platform synchronization.
- Airbnb integration.
- Advanced reporting.
- Automated marketing campaigns.
- Mobile applications.

The architecture should avoid unnecessarily preventing these future capabilities, but they must not increase MVP complexity.

## Business Rules
The application represents one physical rental property.

This distinction is important when designing the domain model and reservation workflow.

Reservation Rules
A reservation has a check-in date and check-out date.
Check-out is not considered an occupied night.
A guest cannot request a stay with a check-out date earlier than or equal to the check-in date.
Confirmed reservations cannot overlap.
Owner-blocked dates cannot be reserved.
Reservation approval must revalidate availability.
Cancelled and declined reservations must not block availability.
All date calculations must use the property's configured local timezone.
Availability checks must be enforced on the server.

Pending inquiries should be treated as requests, not confirmed bookings.

If two guests request overlapping dates, the owner must be able to review both requests, but only one can be approved.

The final booking policy, cancellation policy, minimum stay, maximum occupancy, and other property-specific rules should be documented in the business requirements.

## Data Integrity

Reservation availability is business-critical.

The system must not rely exclusively on frontend validation.

The backend must validate availability when:

A reservation inquiry is submitted.
A reservation is approved.
An owner blocks dates.
An existing reservation is modified.

Operations that could create overlapping confirmed reservations must be protected against concurrent requests.

## Architecture and Engineering Principles
General Principles
Prefer simple, maintainable solutions.
Follow separation of concerns.
Keep business logic out of UI components.
Avoid unnecessary abstractions.
Avoid premature optimization.
Use clear naming conventions.
Keep modules cohesive and responsibilities well-defined.
Reuse components where appropriate.
Avoid duplicating business rules across frontend and backend.
Treat the reservation domain as a critical part of the application.
Application Structure

Keep the public website and administration portal logically separated.

Suggested areas:

Public pages and components.
Admin pages and components.
Shared UI components.
Domain models and business rules.
Application services.
Data access.
Authentication and authorization.

The exact folder structure should follow the existing repository architecture and technology stack.

## Backend and Database

The application must have a persistent data layer for reservation and availability management.

Do not use local storage or static JSON files as the source of truth for real reservations.

The data model should account for at least:

Property information.
Property amenities.
Property images.
Reservations.
Guests or guest contact information.
Blocked date ranges.
Pricing rules.
Admin users.

Avoid introducing unnecessary entities or abstractions before they are justified by requirements.

## Security

Security is a core requirement, especially for administrative functionality.

Requirements:

Protect admin routes.
Enforce authorization on backend operations.
Validate all incoming data on the server.
Never trust client-provided reservation status.
Protect guest personal information.
Avoid exposing administrative information through public endpoints.
Keep secrets and credentials in environment variables.
Never commit credentials or sensitive configuration.
Apply appropriate protections against common web application vulnerabilities.
Error Handling
Provide useful validation messages.
Handle unavailable dates gracefully.
Handle unexpected backend errors.
Do not expose internal errors or stack traces to public users.
Log relevant operational errors.
Provide clear feedback for failed administrative operations.
User Experience and Design

The public website is a hospitality and property marketing experience.

The visual design should communicate:

Comfort.
Relaxation.
Nature.
Hospitality.
Trust.
Simplicity.

Avoid making the website feel like a generic corporate application or a large booking marketplace.

The property itself should be the primary focus.

Public Website Design
Prioritize high-quality photography.
Use clear and inviting typography.
Make property information easy to scan.
Keep navigation intuitive.
Make reservation calls to action prominent.
Keep the booking process simple.
Avoid unnecessary steps.
Admin Portal Design

The administration portal is an operational application.

Prioritize:

Clear information hierarchy.
Easy calendar navigation.
Readable reservation information.
Efficient management workflows.
Consistent status indicators.
Clear confirmation before destructive operations.

The admin experience should be functional and intuitive rather than overly decorative.

## Responsive Design

Responsive design is a core requirement.

Requirements:

Desktop and mobile are equally important for the public website.
Admin functionality must remain usable on tablets and mobile devices.
Layouts must adapt to common screen sizes.
Interactive elements must be touch-friendly.
Calendar interfaces must be usable on smaller screens.
New components must be designed responsively from the beginning.
Project Documentation Hierarchy

The following documents are the project sources of truth.

Business

docs/business-domain.md

Defines:

Business overview.
Property characteristics.
Target guests.
Rental policies.
Reservation business rules.
Operational processes.
Product

docs/product-requirements.md

Defines:

Product vision.
User personas.
Public website requirements.
Admin portal requirements.
User journeys.
Functional requirements.
MVP scope.
Acceptance criteria.
Architecture

docs/architecture.md

Defines:

Technology stack.
Application architecture.
Frontend architecture.
Backend architecture.
Database design.
Authentication.
API contracts.
Security considerations.
Roadmap

docs/roadmap.md

Defines:

Development phases.
MVP priorities.
Deferred features.
Future capabilities.
Technical milestones.
UI and Design

docs/design-guidelines.md

Defines:

Brand identity.
Color palette.
Typography.
Design system.
Component guidelines.
Responsive behavior.
Visual references.

Documentation should be updated whenever approved requirements or architectural decisions change.

Agent Workflow

All work follows this workflow:

text
Requirement
    ↓
Architect
    ↓
Technical Plan
    ↓
Builder
    ↓
Implementation
    ↓
Reviewer
    ↓
Approval


Requirements:

Review relevant project documentation before implementation.
Understand the current MVP phase.
Identify dependencies before making architectural changes.
Create an implementation plan for non-trivial features.
Define acceptance criteria before implementation.
Implement only approved requirements.
Test functionality before considering work complete.
Update relevant documentation.
Request review when implementation is ready.

Small changes may follow a lightweight workflow, but business-critical reservation functionality must always receive appropriate planning and review.

Agent Definitions
Architect

Reference:

.github/agents/architect.agent.md

Responsibilities:

Analyze requirements.
Validate business alignment.
Validate MVP scope.
Define domain models.
Evaluate architectural decisions.
Identify technical risks.
Define implementation plans.
Define acceptance criteria.
Identify security and data integrity concerns.

Produces:

Feature specifications.
Technical implementation plans.
Architectural decisions.
Acceptance criteria.
Risk assessments.

The Architect does not implement production code.

Builder

Reference:

.github/agents/builder.agent.md

Responsibilities:

Implement approved technical plans.
Write production code.
Implement frontend and backend functionality.
Implement database changes.
Write tests.
Follow established architecture.
Maintain responsive behavior.
Handle validation and errors.
Update relevant documentation.

Produces:

Source code.
Database migrations.
API implementations.
UI components.
Automated tests.
Documentation updates.

Guidelines:

Prioritize simple implementations.
Follow existing project conventions.
Avoid introducing unnecessary dependencies.
Do not redefine business requirements.
Do not bypass backend validation.
Do not introduce future roadmap features without approval.
Reviewer

Reference:

.github/agents/reviewer.agent.md

Responsibilities:

Validate implementation against acceptance criteria.
Review code quality.
Review architecture compliance.
Review business rule enforcement.
Verify reservation availability behavior.
Verify authorization and security.
Verify responsive behavior.
Review automated tests.
Identify regressions.
Review documentation.

Produces:

Review report.
Findings and recommendations.
Approval or rejection decision.

The Reviewer must pay particular attention to reservation integrity, date handling, authorization, and data protection.

Testing and Quality Standards

Testing is especially important for reservation-related functionality.

Required Testing Areas
Reservation Logic
Valid reservation requests.
Invalid date ranges.
Overlapping reservations.
Check-in and check-out boundary conditions.
Blocked date validation.
Reservation approval.
Reservation cancellation.
Concurrent reservation approval attempts.
Availability
Available date ranges.
Confirmed reservation ranges.
Owner-blocked date ranges.
Pending inquiries.
Date range boundaries.
Timezone-related behavior.
Administration
Authentication.
Authorization.
Reservation management.
Calendar management.
Property information management.
User Experience
Desktop layout.
Mobile layout.
Form validation.
Loading states.
Error states.
Empty states.
Navigation.

Do not consider reservation functionality complete based only on successful UI interactions. Verify the underlying business rules and persistence.

Definition of Done

A feature is considered complete when:

Approved requirements are implemented.
Acceptance criteria are satisfied.
Business rules are enforced.
Appropriate automated tests pass.
No critical security issues are introduced.
Responsive behavior is verified where applicable.
Error and loading states are handled.
Code follows project conventions.
Relevant documentation is updated.
The Reviewer has approved the implementation.
General Development Rules
Do not implement features outside the approved scope.
Do not introduce unnecessary complexity.
Do not duplicate business logic.
Do not assume business rules that have not been defined.
Ask for clarification when requirements are ambiguous.
Prefer explicit and documented architectural decisions.
Preserve backward compatibility where practical.
Keep the MVP focused on delivering a complete guest inquiry and owner reservation management experience.

The primary objective is to build a reliable, attractive, and maintainable vacation rental platform for one farmhouse, with a clear path for future improvements.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
