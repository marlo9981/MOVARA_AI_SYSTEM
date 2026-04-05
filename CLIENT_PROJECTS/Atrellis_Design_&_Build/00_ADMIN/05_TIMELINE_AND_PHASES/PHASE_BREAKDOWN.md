# Phase Breakdown

## Purpose

This file provides detailed breakdowns of each project phase, including objectives, deliverables, dependencies, and exit criteria.

## Phase 0 — Planning & Architecture

### Objective
Create a complete, structured documentation system that serves as the source of truth for the entire Atrellis project and mirrors the eventual build repository.

### What success looks like
- Every folder has a clear README explaining its purpose and scope
- Every subfolder has a MASTER file that serves as the canonical source of truth
- The structure is intuitive for both humans and AI agents
- The filing system maps cleanly to the eventual Next.js app router structure
- The client understands and approves the overall direction

### Key workstreams
1. **Admin layer** — Project overview, state, decisions, stakeholders, timeline
2. **Website structure** — Site map, navigation, user journeys, CTA system, lead flows
3. **Content and SEO/AIO** — Topic clusters, keyword mapping, blog engine, internal linking
4. **Build system** — Repo architecture, component system, data model, integrations
5. **Prompts and agents** — Atrellis-specific prompts, Claude/Gemini rules, handoff logic

### Dependencies
- None (this is the starting phase)

### Exit criteria
- All 13 top-level folders have complete subfolder structures with populated README and MASTER files
- Repo mirroring map is documented
- Prompt system is functional
- Client has reviewed and approved the direction

---

## Phase 1 — Foundation & Brand

### Objective
Establish the brand direction, finalize the site structure, and set up the development environment.

### What success looks like
- Brand voice, tone, and visual direction are locked
- Site map is complete with page-level wireframes
- Development repository is initialized with proper architecture
- Supabase project is created with initial schema
- Content production templates are ready

### Key workstreams
1. **Brand foundation** — Positioning, voice, visual identity
2. **Site structure** — Detailed wireframes, page relationships, URL strategy
3. **Content system** — Templates, editorial calendar, production workflow
4. **Technical setup** — Next.js repo, Supabase, deployment pipeline

### Dependencies
- Phase 0 sign-off
- Client brand direction input

### Exit criteria
- Brand guidelines document approved by client
- Site map and wireframes approved by client
- Repository initialized and deployable
- Content templates tested with sample content

---

## Phase 2 — Website MVP

### Objective
Build and deploy a functional website with all core pages, animations, and content management.

### What success looks like
- All core pages are built and functional
- Animation system creates premium feel
- Content can be managed and updated
- Site is deployed to a preview URL
- Client has reviewed and provided feedback

### Key workstreams
1. **Page development** — Build all pages from wireframes
2. **Animation system** — GSAP ScrollTrigger reveals and interactions
3. **Content management** — CMS or markdown-based content workflow
4. **Deployment** — Vercel setup, preview URLs, environment configuration

### Dependencies
- Phase 1 completion
- Brand assets delivered
- Content drafts ready

### Exit criteria
- All core pages functional on preview URL
- Animation system implemented and tested
- Content management workflow operational
- Client functional review complete

---

## Phase 3 — Content & SEO Launch

### Objective
Populate all content, implement technical SEO, launch the content engine, and submit for indexing.

### What success looks like
- Every page has final, approved content
- Technical SEO is fully implemented
- Blog/content engine is producing regularly
- Site is indexed by Google and appearing in relevant searches
- Analytics are providing actionable data

### Key workstreams
1. **Content population** — Final copy on all pages
2. **Technical SEO** — Schema, meta tags, sitemap, performance
3. **Content engine** — Blog publishing workflow, editorial calendar
4. **Analytics** — Google Analytics, Search Console, tracking setup

### Dependencies
- Phase 2 completion
- Content production pipeline operational
- Client content approval

### Exit criteria
- 100% of pages have final content
- Lighthouse scores meet targets (Performance >90, SEO >95)
- Schema markup implemented
- First 3+ blog/content pieces published
- Analytics and Search Console configured and verified

---

## Phase 4 — Platform Features

### Objective
Build interactive platform features including configurators, quote engine, and lead dashboards.

### What success looks like
- Users can interact with product/service configurators
- Quote generation (automated or semi-automated) is functional
- Internal team can view and manage leads through a dashboard
- AI-enhanced client experience features are live

### Key workstreams
1. **Configurators** — Interactive product/service selection
2. **Quote engine** — Automated or guided quotation flow
3. **Dashboards** — Lead management and internal visibility
4. **AI features** — AI-assisted client experience enhancements

### Dependencies
- Phase 3 completion
- Commercial pricing logic finalized
- Client approval on configurator scope

### Exit criteria
- Configurator(s) functional and tested
- Quote engine producing accurate estimates
- Dashboard accessible to authorized users
- AI features integrated and tested

---

## Phase 5 — Optimization & Growth

### Objective
Optimize conversion rates, expand AIO coverage, and establish a growth roadmap.

### What success looks like
- Conversion rates are measured and improving
- Site performance exceeds benchmarks
- AIO answer surface coverage is expanding
- Data-driven growth roadmap is in place for the next 12 months

### Key workstreams
1. **CRO** — A/B testing, heatmaps, conversion analysis
2. **Performance** — Speed optimization, Core Web Vitals
3. **AIO expansion** — Answer block coverage, entity optimization
4. **Growth planning** — Data analysis, roadmap creation

### Dependencies
- Phase 4 completion
- Sufficient traffic for meaningful data
- Analytics infrastructure mature

### Exit criteria
- CRO test results implemented
- Core Web Vitals all in "good" range
- AIO coverage expanded to target queries
- 12-month growth roadmap documented
