Architecture

This document defines the technical architecture for the Vacation Farmhouse Rental Platform.

System Overview

The platform is a custom vacation rental application for a single farmhouse.

The system consists of two primary application areas:

Public Website
Administration Portal

The public website allows guests to discover the property, explore availability, and submit reservation inquiries.

The administration portal allows the property owner to manage reservations, availability, property information, and pricing.

Current Focus

The initial MVP includes both the public website and the administration portal.

Primary objectives:

Deliver a responsive public-facing property website.
Provide an intuitive reservation inquiry experience.
Implement a persistent reservation management system.
Provide a secure administration portal.
Allow the owner to manage availability and reservations.
Establish a maintainable foundation for future booking capabilities.

Unlike a static marketing website, this MVP requires a functional backend and persistent database.

Architecture Goals

The architecture should:

Support rapid MVP development.
Remain simple and easy to understand.
Be maintainable by a small team.
Support responsive design from the beginning.
Minimize unnecessary architectural complexity.
Support both public and administrative experiences.
Provide strong type safety.
Enforce reservation business rules consistently.
Protect guest information and administrative functionality.
Support future booking and payment capabilities.
Be friendly to AI-assisted development.
Design-First Architecture
Design Source of Truth

The repository may contain:

Desktop mockups.
Mobile mockups.
Property photography.
Property logo or branding assets.
UI references.
Design specifications.

Requirements:

Review existing design assets before implementing UI.
Treat approved mockups as the primary design reference.
Preserve established branding.
Do not redesign approved layouts unless explicitly requested.
Keep new pages visually consistent.
Prioritize property photography and visual storytelling.

If no mockups are available, establish the initial design system before implementing individual pages.

Public Website Design

The public website is a hospitality and property marketing experience.

The design should communicate:

Relaxation.
Comfort.
Nature.
Hospitality.
Trust.
Simplicity.

The farmhouse should remain the primary visual focus.

Avoid making the website look like a generic corporate website or a large booking marketplace.

Administration Portal Design

The administration portal is an operational application.

Prioritize:

Clear information hierarchy.
Efficient workflows.
Calendar usability.
Readable reservation information.
Consistent reservation status indicators.
Clear validation and error feedback.

The administration portal should use the same underlying design system while maintaining a more functional and data-oriented interface.

Responsive Design

Responsive design is a core architectural requirement.

Requirements:

Desktop and mobile are equally important for the public website.
Administration functionality must remain usable on tablets and mobile devices.
Components must be responsive by default.
Layout decisions must consider small and large screens.
Calendar interactions must be usable on mobile devices.
Interactive elements must support touch input.
Responsive behavior must be implemented from the beginning.
Architecture Style
Modular Monolith

The platform will use a modular monolith architecture.

Characteristics:

Single Next.js application.
Single deployment unit.
Feature-based organization.
Shared application infrastructure.
Shared design system.
Server-side business logic.
Centralized data access.
Clear boundaries between application features.

The public website and administration portal are separate application areas within the same application.

Benefits:

Lower infrastructure complexity.
Faster development.
Easier maintenance.
Shared types and business logic.
Easier AI-assisted development.
No unnecessary distributed system complexity.

Microservices are explicitly out of scope.

Application Layers

The application should follow a lightweight layered architecture.

mermaid
flowchart TD

UI[Pages and Components]
Actions[Server Actions / Route Handlers]
Services[Application Services]
Domain[Domain Rules and Validation]
Repository[Data Access]
Database[(PostgreSQL)]

UI --> Actions
Actions --> Services
Services --> Domain
Services --> Repository
Repository --> Database


Responsibilities:

UI: Presentation and user interactions.
Server Actions / Route Handlers: Application entry points.
Application Services: Coordinate business operations.
Domain: Business rules and validation.
Data Access: Database queries and persistence.
Database: Persistent application data.

Do not introduce unnecessary abstractions or interfaces when a simpler implementation is sufficient.

High-Level System Architecture
mermaid
flowchart TD

Guest[Guest]
Owner[Property Owner]

Guest --> PublicWebsite[Public Website]
Owner --> AdminPortal[Administration Portal]

PublicWebsite --> NextJS[Next.js Application]
AdminPortal --> NextJS

NextJS --> Auth[Authentication]
NextJS --> Services[Application Services]

Services --> Reservation[Reservation Module]
Services --> Availability[Availability Module]
Services --> Property[Property Module]
Services --> Pricing[Pricing Module]

Reservation --> Database[(PostgreSQL)]
Availability --> Database
Property --> Database
Pricing --> Database

Auth --> Database

Technology Stack

The project will use the same core technology stack as DUNAT.

Frontend
Next.js
React
TypeScript
App Router

Purpose:

Page rendering.
Navigation.
Server-side rendering.
Client-side interactions.
Public website.
Administration portal.

Use React Server Components by default.

Use Client Components only when browser-side interaction or client-side state is required.

UI Framework
Tailwind CSS
shadcn/ui

Purpose:

Responsive layouts.
Reusable UI components.
Consistent styling.
Form components.
Dialogs and dropdowns.
Calendar interfaces.
Administrative data tables.

Prefer existing shadcn/ui components before introducing additional UI libraries.

Database
PostgreSQL

Purpose:

Persist reservations.
Persist guest information.
Store property information.
Store blocked dates.
Store pricing rules.
Store administrative users.

PostgreSQL is the primary source of truth for reservation and availability data.

The database must enforce appropriate constraints and support transactional operations.

ORM
Prisma

Purpose:

Database access.
Schema management.
Database migrations.
Type-safe queries.
Data model definitions.

Prisma should be used for application database access.

Avoid raw SQL unless it provides a clear advantage or is required for a specific database operation.

Authentication
Auth.js

Purpose:

Secure administration login.
Session management.
Authentication state.
Protected administration routes.

The MVP should support a property owner or a small number of administrative users.

Public guests do not need accounts.

Google OAuth is optional and should not be introduced unless explicitly required.

Authentication and authorization must be enforced on the server.

Validation
Zod

Purpose:

Validate incoming request data.
Validate form submissions.
Validate environment variables where appropriate.
Define reusable validation schemas.
Maintain consistent validation between application layers.

All important business inputs must be validated on the server.

Forms
React Hook Form
Zod

Purpose:

Manage complex forms.
Handle form state.
Provide field-level validation.
Improve form usability.

Use simple controlled inputs where a form library would introduce unnecessary complexity.

Testing

Recommended:

Vitest
React Testing Library
Playwright

Purpose:

Unit testing.
Component testing.
Business logic testing.
End-to-end testing.

Testing should focus on meaningful business functionality, especially reservation and availability logic.

Application Architecture
Public Website Module

Location:

src/features/website/

Responsibilities:

Render public-facing pages.
Display property information.
Present photography.
Display amenities.
Display house rules.
Provide navigation.
Present availability.
Provide reservation inquiry entry points.

Pages:

Home.
Property.
Gallery.
Amenities.
Location.
Contact.
Reservation inquiry.

The website should prioritize visual quality, usability, and conversion.

Availability Module

Location:

src/features/availability/

Responsibilities:

Retrieve available dates.
Retrieve confirmed reservation ranges.
Retrieve owner-blocked date ranges.
Calculate availability.
Validate requested date ranges.
Provide availability information to the public website.
Support administrative calendar views.

Availability must be calculated using server-side business rules.

The frontend must never be the source of truth for availability.

Reservation Module

Location:

src/features/reservations/

Responsibilities:

Create reservation inquiries.
Retrieve reservations.
Validate reservation requests.
Approve reservations.
Decline reservations.
Cancel reservations.
Manage reservation status.
Prevent overlapping confirmed reservations.
Maintain reservation history.

Reservation business logic must be centralized.

All reservation state transitions must be validated on the server.

The system must prevent concurrent operations from creating overlapping confirmed reservations.

Property Module

Location:

src/features/property/

Responsibilities:

Retrieve property information.
Manage property descriptions.
Manage amenities.
Manage property capacity.
Manage property policies.
Manage property images.
Provide property content to the public website.

Property information should be manageable through the administration portal where appropriate.

Pricing Module

Location:

src/features/pricing/

Responsibilities:

Retrieve nightly pricing.
Manage base nightly rates.
Support weekend pricing.
Support seasonal pricing.
Support special date pricing.
Support minimum stay rules.

The initial implementation should prioritize simple pricing rules.

Advanced pricing calculations are deferred unless required by the MVP.

Admin Module

Location:

src/features/admin/

Responsibilities:

Administration dashboard.
Reservation management.
Availability management.
Property management.
Pricing management.
Administrative navigation.

All administrative functionality must require authentication and appropriate authorization.

Authentication Module

Location:

src/features/auth/

Responsibilities:

Admin authentication.
Session handling.
Authentication configuration.
Protected route handling.
Authorization checks.

Public guests should be able to submit inquiries without creating accounts.

Reservation and Availability Architecture

Reservation management is the most business-critical part of the application.

Reservation Lifecycle
mermaid
stateDiagram-v2

[*] --> Pending

Pending --> Confirmed: Owner approves
Pending --> Declined: Owner declines

Confirmed --> Cancelled: Owner cancels

Declined --> [*]
Cancelled --> [*]

Availability Rules

The application uses date ranges with the following convention:

Check-in date is inclusive.
Check-out date is exclusive.

Two reservations overlap when:

text
reservationA.checkIn < reservationB.checkOut
AND
reservationA.checkOut > reservationB.checkIn


This allows one guest to check out on the same day another guest checks in.

Availability Sources

Availability is determined by:

Confirmed reservations.
Owner-blocked date ranges.

Pending inquiries do not automatically block dates.

However, pending inquiries must be visible to the owner and potential conflicts must be identified before approval.

Reservation Approval

Approving a reservation must:

Retrieve the requested date range.
Validate the reservation status.
Check existing confirmed reservations.
Check owner-blocked dates.
Revalidate availability within a database transaction.
Confirm the reservation only if the requested dates remain available.

The application must protect against concurrent reservation approvals.

Application-level checks alone are insufficient for this requirement.

Use appropriate PostgreSQL transactional and concurrency protections.

Data Architecture
Primary Entities

The initial database model should support the following entities:

AdminUser

Represents administrative users.

Responsibilities:

Authentication identity.
Administrative access.
User management.
Property

Represents the vacation farmhouse.

Responsibilities:

Name.
Description.
Location.
Guest capacity.
Property policies.
Check-in information.
Check-out information.
PropertyImage

Represents property photography.

Responsibilities:

Image URL or storage reference.
Image description.
Display order.
Featured image designation.
Amenity

Represents available property amenities.

Responsibilities:

Amenity name.
Description.
Category.
Reservation

Represents reservation inquiries and confirmed stays.

Responsibilities:

Guest information.
Check-in date.
Check-out date.
Guest count.
Reservation status.
Guest message.
Administrative notes.
Creation and modification timestamps.
BlockedDate

Represents dates unavailable for reservations due to owner-defined restrictions.

Responsibilities:

Start date.
End date.
Reason.
Creation timestamp.
PricingRule

Represents property pricing configuration.

Responsibilities:

Pricing type.
Date range where applicable.
Nightly rate.
Minimum stay where applicable.

The final schema should be defined through Prisma migrations and aligned with the business requirements.

Do not introduce separate database entities without a clear business justification.

Data Flow
Public Reservation Inquiry
mermaid
flowchart TD

Guest --> Form[Reservation Inquiry Form]
Form --> Validation[Server Validation]
Validation --> Availability[Availability Service]

Availability -->|Available| Reservation[Reservation Service]
Availability -->|Unavailable| Error[Return Validation Error]

Reservation --> Database[(PostgreSQL)]
Database --> Confirmation[Inquiry Confirmation]
Confirmation --> Guest

Admin Reservation Approval
mermaid
flowchart TD

Owner --> Admin[Admin Portal]
Admin --> Approval[Approve Reservation]
Approval --> Validation[Server-side Validation]
Validation --> Availability[Availability Check]

Availability -->|Available| Transaction[Database Transaction]
Availability -->|Conflict| Conflict[Return Conflict]

Transaction --> Database[(PostgreSQL)]
Database --> Confirmed[Reservation Confirmed]
Confirmed --> Notification[Send Notification]

Application Routing

Use the Next.js App Router.

Suggested route organization:

text
src/app/

├── (public)/
│   ├── page.tsx
│   ├── property/
│   ├── gallery/
│   ├── amenities/
│   ├── location/
│   └── reservation/
│
├── (auth)/
│   └── admin/
│       └── login/
│
├── admin/
│   ├── page.tsx
│   ├── reservations/
│   ├── calendar/
│   ├── property/
│   └── pricing/
│
└── api/
    └── auth/


Route organization should remain consistent with Next.js App Router conventions.

Public and administrative layouts should be separate.

Administrative route protection must also be enforced server-side.

Suggested Project Structure
text
src/

├── app/
│   ├── (public)/
│   ├── (auth)/
│   ├── admin/
│   └── api/
│
├── components/
│   ├── ui/
│   ├── shared/
│   └── layout/
│
├── features/
│   ├── website/
│   ├── availability/
│   ├── reservations/
│   ├── property/
│   ├── pricing/
│   ├── admin/
│   └── auth/
│
├── lib/
│   ├── prisma/
│   ├── auth/
│   ├── validation/
│   └── utils/
│
├── server/
│   ├── services/
│   └── repositories/
│
├── types/
│
└── tests/

prisma/
├── schema.prisma
└── migrations/

public/
├── images/
└── icons/


This is a suggested structure, not a requirement to create empty folders or unnecessary abstractions.

Organize implementation around features and keep server-only code separate from client-side components.

Backend Architecture

Next.js will provide the backend functionality for the MVP.

Use:

Server Components for server-side data retrieval and rendering.
Server Actions for application mutations initiated by the UI.
Route Handlers for external HTTP endpoints and integrations.
Application services for reusable business operations.
Prisma for database access.
Business Logic

Business logic must not live exclusively inside:

React components.
Client-side hooks.
Server Action implementations.
Route Handlers.

Important business operations should be implemented in reusable server-side application services.

Examples:

Reservation creation.
Reservation approval.
Reservation cancellation.
Availability calculation.
Blocked date management.
Pricing calculation.

Server Actions and Route Handlers should call these services rather than duplicate business rules.

External Integrations

External integrations should be introduced only when required.

Potential integrations:

Email notifications.
Image storage.
Online payment processing.
Analytics.
Maps and location services.
Email

The MVP should support email notifications for:

New reservation inquiries.
Reservation approval.
Reservation rejection.
Reservation cancellation.

A dedicated email provider can be selected during implementation.

Email delivery failures must not silently invalidate successful reservation operations.

Image Storage

Property photography should not depend on local development filesystem storage in production.

Use an appropriate image hosting or object storage solution when persistent image uploads are introduced.

Initial development may use local static assets.

Payments

Online payments are outside the initial MVP scope.

The architecture should keep pricing and reservation logic sufficiently separated to allow future payment integration.

Do not introduce payment provider dependencies prematurely.

Environment Configuration

Use environment variables for application configuration.

Examples:

env
DATABASE_URL=
AUTH_SECRET=
AUTH_URL=


Additional integration variables should be introduced only when the corresponding integration is implemented.

Requirements:

Never commit secrets.
Provide an .env.example.
Validate required environment variables.
Keep server-only secrets out of client-side code.
Security

Security is a core architectural requirement.

Requirements:

Protect administrative routes.
Enforce authorization on server-side operations.
Validate all external input.
Protect guest personal information.
Never trust client-provided reservation statuses.
Never expose administrative notes through public endpoints.
Avoid exposing sensitive database information.
Use secure session management.
Keep secrets in environment variables.
Apply appropriate CSRF and request-origin protections where applicable.
Apply rate limiting to public reservation inquiry endpoints.
Avoid leaking internal errors and stack traces.

Public guests should only be able to access information necessary for the public website and their own inquiry process.

Testing Architecture
Unit Tests

Use Vitest for:

Date range calculations.
Reservation overlap detection.
Availability calculations.
Reservation state transitions.
Pricing calculations.
Validation schemas.
Component Tests

Use React Testing Library for:

Reservation forms.
Calendar interactions.
Status indicators.
Admin components.
User interaction behavior.
End-to-End Tests

Use Playwright for important user journeys.

Public Website
Navigate the website.
View property information.
Explore availability.
Submit a reservation inquiry.
Handle invalid date selections.
Handle unavailable dates.
Administration
Authenticate as an admin.
View dashboard.
View reservations.
Approve a reservation.
Decline a reservation.
Block dates.
Verify updated availability.
Reservation Integrity
Prevent overlapping confirmed reservations.
Allow consecutive reservations with matching checkout and check-in dates.
Prevent approval of requests for blocked dates.
Verify concurrent approval attempts cannot confirm overlapping reservations.

Testing should prioritize business-critical functionality over superficial test coverage.

Development and Deployment
Local Development

The application should run locally with a straightforward setup.

Requirements:

Document installation steps.
Document environment configuration.
Provide database setup instructions.
Provide Prisma migration instructions.
Provide database seed instructions where applicable.
Provide development and test commands.
Deployment

Production deployment should support:

Next.js application hosting.
Managed PostgreSQL.
Environment variable configuration.
Database migrations.
Secure HTTPS.
Application logging.

Deployment provider selection should remain separate from application architecture.

Future Architecture Capabilities

The following capabilities may be introduced in later phases:

Online payments.
Instant booking.
Guest accounts.
Guest reservation management.
Automated cancellation workflows.
Refund processing.
Discount codes.
Advanced pricing rules.
Email and SMS automation.
Calendar synchronization with Airbnb and other platforms.
Multiple property support.
Customer reviews.
Advanced reporting.

These capabilities should not increase MVP complexity unless explicitly approved.

Design Principles
Simplicity First

Prefer the simplest solution that satisfies the requirement.

Modular Monolith

Keep the application in one deployable unit with clear feature boundaries.

Responsive by Default

Every page and component must work across desktop, tablet, and mobile.

Server-Side Business Logic

Business-critical operations must be enforced on the server.

Data Integrity

Reservation and availability data must remain consistent, including during concurrent operations.

Type Safety

Use TypeScript throughout the application.

Use Prisma-generated types and Zod validation schemas where appropriate.

Feature-Based Structure

Organize code around business capabilities.

Preferred:

text
features/
website/
reservations/
availability/
property/
pricing/
admin/
auth/


Avoid unnecessary technical abstractions and excessive folder nesting.

AI-Agent Friendly

Architecture and documentation should be:

Predictable.
Consistent.
Explicit.
Lightweight.
Easy to navigate.
Easy to implement incrementally.

Agents must follow the established architecture rather than introduce alternative patterns without justification.

MVP Architecture Scope

Included:

Next.js application.
React and TypeScript.
Tailwind CSS and shadcn/ui.
Public website.
Administration portal.
PostgreSQL database.
Prisma ORM.
Admin authentication.
Reservation management.
Availability management.
Property information management.
Basic pricing management.
Input validation.
Unit and end-to-end testing.

Deferred:

Online payment processing.
Guest accounts.
Instant booking.
Multiple properties.
External booking platform synchronization.
Advanced pricing engines.
Mobile applications.
Microservices.
Complex analytics infrastructure.
Architecture Success Criteria

The architecture is successful when:

The public website and administration portal operate within one maintainable application.
Guests can submit reservation inquiries.
The owner can manage reservations and availability.
Confirmed reservations cannot overlap.
Availability is consistently enforced on the server.
Administrative functionality is properly protected.
Guest information is handled securely.
The experience works well on desktop and mobile devices.
The codebase remains simple and maintainable.
Future booking capabilities can be introduced without major architectural restructuring.