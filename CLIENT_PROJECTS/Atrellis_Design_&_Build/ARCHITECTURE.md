# ARCHITECTURE.md — Atrellis Design & Build

## Technical Vision

The Atrellis project is architected to transition seamlessly from a high-performance **Website MVP** to a robust **Home Services Platform**. This is achieved through strict **Repository Mirroring** and a decoupled **Content Model**.

## Repository Mirroring (Filing ↔ Repo)

All code and assets must align with the `CLIENT_PROJECTS` filing structure to ensure a "Single Source of Truth."

| Filing Directory | Git Repository Path | Implementation Note |
|------------------|----------------------|---------------------|
| `03_PAGE_SYSTEM/` | `app/(main)/*` | Server Components; Page-specific layout logic |
| `04_SERVICE_CATEGORY_SYSTEM/` | `app/(services)/*` | Content-rich landing pages; URL: `/services/[category]` |
| `05_CONTENT_SEO_AIO/05_BLOG_ENGINE/` | `content/blogs/*` (or DB) | Source files for the Headless CMS |
| `06_MEDIA_LIBRARY_PLAN/09_EXPORTS_FOR_WEB/` | `public/assets/*` | Optimized WebP/AVIF assets |
| `09_BUILD_SYSTEM/03_COMPONENT_SYSTEM/` | `components/ui/*` | Shared Shadcn/Custom architectural components |
| `09_BUILD_SYSTEM/06_ANIMATION_SYSTEM/` | `lib/animations.ts` | GSAP logic; Reveal observers |
| `10_PLATFORM_FUTURE/` | `app/(platform)/*` | Dashboard, Configurator, Portal modules |

## Animation Strategy: "Architectural Reveal"

- **Library:** GSAP 3.x + ScrollTrigger.
- **Goal:** Elevate the brand to "Premium Technical Authority."
- **Execution:**
  - `lib/animations.ts`: Central registry for reveal effects (Fade-ups, Staggered entries).
  - Components use `ref` hooks to register with the ScrollTrigger observer.
  - Zero animation-jank; all reveals must be buttery-smooth and performance-optimized.

## Data Flow & Persistence

1. **Lead Generation:**
   - Client Action: Fill Form / Instant Quote Request.
   - Validation: Zod + React Hook Form.
   - Database: Supabase `leads` table with RLS.
   - Webhook: Vercel Edge Function triggers Telegram/Email notification.

2. **Content Engine (Headless):**
   - Source: Markdown/MDX source files from `05_CONTENT_SEO_AIO/`.
   - Taxonomy: Service clusters and Search Intent mapped to route segments.
   - SEO: Auto-generated OG images and metadata from source content.

3. **Platform Backend (Future):**
   - Supabase `configurators` table storing product logic (Pricing, logic branches).
   - Supabase `projects` table for customer portal tracking.

## Security & Performance

- **RLS:** Row-level security on all client and lead data.
- **Edge:** All non-static logic deployed to Vercel Edge Functions for low latency in Singapore.
- **Images:** [Next/Image] with [Vercel Image Optimization] using AVIF.
- **Strict TypeScript:** No `any` types; full schema validation for Supabase integration.
