# Implementation Plan: Atrellis Design & Build Website (The Renovation Playbook)

This plan follows the Movara AI agency workflow and the `FullStackArchitect` lead technical strategy. This project serves as the **foundational playbook** for the "Renovation & Home Services" vertical.

## Phase 1: Architecture & Technical Specs (Architectural Foundation)

### 1.1 Draft Technical Architecture (`ARCHITECTURE.md`)
- **Frontend Stack:** Next.js 15+ (App Router), TypeScript, Tailwind CSS.
- **Animation Strategy:** GSAP + ScrollTrigger for "Architectural Reveal" effects.
- **Data Layer:** Supabase for lead storage and **Product/Pricing configuration logic**.
- **Core Engine:** Design for a **Product Configurator** (Zipblinds, roofing) and **Instant Quote Engine**.
- **Infrastructure:** Vercel for high-performance edge deployment.
- **Security:** RLS policies in Supabase for lead and quote data protection.

### 1.2 Draft Project Handoff & Milestones (`HANDOFF.md`)
- **Milestone 1:** Discovery, Sitemap & Positioning (Current).
- **Milestone 2:** UI/UX Design System (Premium/Architectural) & High-Conversion Wireframes.
- **Milestone 3:** Core Build: Home + Gated Before/After Gallery (Lead Capture).
- **Milestone 4:** **The Playbook Features:** Product Configurator + Instant Quote Engine.
- **Milestone 5:** Consultation Booking Flow with **Budget Pre-qualification**.
- **Milestone 6:** QA, Launch & Performance Optimization.

## Phase 2: Project Scaffolding (Initial Build)

### 2.1 Codebase Initialization
- Initialize Next.js project in `CLIENT_PROJECTS/Atrellis_Design_&_Build/code/`.
- Setup Tailwind CSS with premium theme (Architectural colors: Slate, Stone, Zinc).
- Configure GSAP in `lib/animations.ts` (as per agency standards).
- Setup directory structure: `app/`, `components/`, `lib/`, `styles/`, `public/`.

### 2.2 Core Components & Layout
- Implement `RootLayout` with font optimization (Geist or similar architectural font).
- Create `Navbar` and `Footer` shells (conversion-focused CTAs).
- Setup `LeadForm` component with Zod validation (integrated with pre-qualification).

## Verification & Testing
- **Lighthouse:** Target >90 on all metrics (especially Mobile Performance).
- **Type Safety:** Strict TypeScript check across the codebase.
- **Lead Flow:** Test form submission → Supabase → Instant Quote → Telegram notification.

## Success Metrics
- Performance: <1s LCP.
- Lead Capture: Working integration with zero placeholder copy.
- Playbook Validation: Successful "Instant Quote" generation for home service leads.
- Positioning: Premium UI that validates the Movara AI "Superior UI/UX" differentiator.

---
**Next Step:** Once approved, I will begin by writing the `ARCHITECTURE.md` and `HANDOFF.md` files.
