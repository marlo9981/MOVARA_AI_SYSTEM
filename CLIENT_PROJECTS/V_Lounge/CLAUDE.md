# CLAUDE.md — V Lounge

## Project Overview

Premium cocktail bar website — moody, high-end digital presence designed to convert visitors into reservations and walk-ins.

**Client:** V Lounge
**Timeline:** April 2026 → TBD
**Status:** PLANNING

---

## Scope

### In Scope
- Marketing website (single-domain, multi-page)
- Menu/drinks showcase
- Reservation/booking integration
- Events and promotions section
- Location, hours, contact
- Mobile-first responsive design
- SEO optimization

### Out of Scope
- E-commerce / online ordering
- POS integration
- Mobile app

---

## Tech Stack

| Component | Choice |
|-----------|--------|
| Framework | Next.js App Router (TypeScript) |
| Styling | Tailwind CSS |
| Animations | GSAP + ScrollTrigger |
| Database | Supabase (reservations, events) |
| Deployment | Vercel |
| Fonts | next/font |

---

## Design Direction

- Dark, moody aesthetic — blacks, deep purples, golds, warm amber
- Typography-led with elegant serif headings
- Atmospheric imagery — low-light, bokeh, cocktail close-ups
- Smooth scroll animations, subtle parallax
- Mobile-first — most visitors will discover via Instagram/Google Maps

---

## Content Priorities

1. **Hero** — Atmosphere-first, full-bleed imagery or video, tagline + CTA (Reserve / View Menu)
2. **Menu** — Signature cocktails with descriptions, categorized
3. **About / Story** — Brand narrative, bartender profiles
4. **Events** — Upcoming events, recurring nights, private hire
5. **Gallery** — Photo grid showcasing the vibe
6. **Contact / Reserve** — Location map, hours, booking form or third-party link

---

## Rules

1. No placeholder copy — use real content or mark [DRAFT]
2. No hardcoded colors — use Tailwind config with V Lounge palette
3. All images optimized via next/image
4. Reservation data stored in Supabase with RLS
5. No secrets in code — use .env.local
6. Archive over delete

---

## References

- **Agency playbooks:** `04_DELIVERY_PLAYBOOKS/`
- **Proposal template:** `05_ASSETS_TEMPLATES/Proposal_Template.md`
- **Root governance:** `CLAUDE.md`
