# CLAUDE.md — Atrellis Design & Build

## Project Overview

A premium, high-conversion website and AI-driven platform for Atrellis Design & Build, positioning them as the design-led authority for balcony and outdoor-living solutions in Singapore.

**Client:** Atrellis Design & Build
**Status:** PLANNING (Initial Scaffolding)
**Lead Agent:** Full-Stack Architect
**Key Differentiator:** Superior UI/UX (GSAP/Architectural Reveal) + Integrated Quote Engine

---

## Operating Rules (Mandatory)

1.  **Sequence:** Pages first, services second, platform third.
2.  **Separation:** Keep public-site logic (Website MVP) separate from future-app logic (Platform Roadmap).
3.  **Prompts:** Keep prompt systems (Atrellis-specific) separate from business documentation.
4.  **Commercials:** Keep pricing/commercial logic separate from client experience (AI/UX) logic.
5.  **Media:** Always store planning for media (Placeholders/Maps) before storing the actual media assets.
6.  **Repo Mirroring:** Adhere strictly to the mapping between the filing system and the repository architecture.
7.  **Content Logic:** `05_CONTENT_SEO_AIO/05_BLOG_ENGINE/` is the **Master Blog Engine** (Source of Truth for topics, SEO, and AIO logic); `03_PAGE_SYSTEM/04_PROJECTS_BLOGS/` is the **Display Layer** (UX/UI for public-facing design, archives, and filtering).

---

## Canonical Structure & Repo Mapping

| Filing Directory | Repository Equivalent | Purpose |
|------------------|----------------------|---------|
| `03_PAGE_SYSTEM/` | `app/(main)/*` | Core app routes and page logic |
| `04_SERVICE_CATEGORY_SYSTEM/` | `app/(services)/*` | Service landing page content and route segments |
| `06_MEDIA_LIBRARY_PLAN/09_EXPORTS_FOR_WEB/` | `public/assets/*` | Final optimized assets for web delivery |
| `09_BUILD_SYSTEM/03_COMPONENT_SYSTEM/` | `components/*` | Reusable UI and feature components |
| `09_BUILD_SYSTEM/06_ANIMATION_SYSTEM/` | `lib/animations.ts` | GSAP helpers and reveal logic |
| `10_PLATFORM_FUTURE/` | `app/(platform)/*` | Future modules (Configurators, Dashboards) |

---

## Prompt & Agent Strategy (`11_PROMPTS_AND_AGENTS/`)

-   **01–05:** Atrellis-specific prompts (Brand Voice, UI rules, Service specs).
-   **06_SHARED_MOVARA_REFERENCES:** Global Movara AI agent logic and reusable prompts.
-   **08_CLAUDE_MD / 09_GEMINI_MD:** Platform-specific instruction sets for clean context.

---

## Tech Stack

-   **Frontend:** Next.js 15+ (App Router), TypeScript, Tailwind CSS.
-   **Animations:** GSAP + ScrollTrigger (Architectural Reveal).
-   **Backend:** Supabase (Auth, DB, RLS).
-   **Deployment:** Vercel (Edge).

---

## Next Steps

- [ ] Finalize `README.md` and `HANDOFF.md`.
- [ ] Initialize `ARCHITECTURE.md` with detailed repo mirroring logic.
- [ ] Begin Phase 1.1: Discovery & Sitemap in `02_WEBSITE_STRUCTURE/`.
