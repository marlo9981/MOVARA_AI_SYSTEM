# Open Decisions

## Purpose

This file tracks decisions that are currently unresolved and need to be made before the project can move forward.

Each entry should include the decision needed, why it matters, what options exist, and who needs to make the call.

## Open items

### 001 — Hero section interaction model
- **Status:** Open
- **Context:** The hero section needs to feel premium and interactive, but the exact interaction model is not yet decided
- **Options:**
  - Full-screen video background with minimal overlay
  - Interactive 3D or parallax reveal on scroll
  - Split-screen with strong visual on one side, CTA on the other
  - Animated before/after slider
- **Impact:** Affects `03_PAGE_SYSTEM/01_HOME/`, `09_BUILD_SYSTEM/06_ANIMATION_SYSTEM/`
- **Needs decision from:** Human (visual direction call)
- **Target date:** Before page wireframes are finalized

### 002 — Configurator scope for Phase 1 vs Phase 2
- **Status:** Open
- **Context:** How much configurator functionality should be planned for the initial website versus deferred to the platform phase
- **Options:**
  - Phase 1: Simple product selector with visual preview
  - Phase 1: Full interactive configurator with real-time pricing
  - Phase 1: Visual showcase only, Phase 2: Full configurator
- **Impact:** Affects `10_PLATFORM_FUTURE/`, `07_AI_CLIENT_EXPERIENCE/`, `08_COMMERCIALS_PRICING/`
- **Needs decision from:** Human (commercial and scope call)
- **Target date:** Before `10_PLATFORM_FUTURE/` is populated

### 003 — Blog content ownership and production workflow
- **Status:** Open
- **Context:** Who creates blog content, how often, and what the review process looks like
- **Options:**
  - AI-generated drafts with human review and editing
  - Human-written with AI assistance for SEO optimization
  - Fully outsourced to a content writer with AI briefs
  - Hybrid: AI creates topic clusters and outlines, human writes final copy
- **Impact:** Affects `05_CONTENT_SEO_AIO/05_BLOG_ENGINE/`, `05_CONTENT_SEO_AIO/09_EDITORIAL_CALENDAR/`
- **Needs decision from:** Human (content strategy and budget call)
- **Target date:** Before editorial calendar is finalized

### 004 — Multi-language support (English + additional languages)
- **Status:** Open
- **Context:** Whether the website should support multiple languages from launch or add them later
- **Options:**
  - English only at launch, add languages in Phase 2
  - English + one additional language at launch
  - Multi-language architecture from day one, populate languages progressively
- **Impact:** Affects `09_BUILD_SYSTEM/01_REPO_ARCHITECTURE/`, `02_WEBSITE_STRUCTURE/07_URL_AND_SLUG_STRATEGY/`
- **Needs decision from:** Human (market and audience call)
- **Target date:** Before repo architecture is finalized

### 005 — Quote engine implementation approach
- **Status:** Open
- **Context:** How the quotation experience should work for users
- **Options:**
  - Simple inquiry form with manual follow-up
  - Guided questionnaire that generates a rough estimate range
  - Full interactive configurator with real-time pricing
  - AI-assisted quote generation based on user inputs and uploaded floorplans
- **Impact:** Affects `07_AI_CLIENT_EXPERIENCE/`, `10_PLATFORM_FUTURE/`, `08_COMMERCIALS_PRICING/`
- **Needs decision from:** Human (commercial and technical complexity call)
- **Target date:** Before `07_AI_CLIENT_EXPERIENCE/` is populated

## How to use this file

- When a decision is made, move it to `DECISION_LOG_MASTER.md` with the final outcome
- If a decision is no longer relevant, move it to `SUPERSEDED_DECISIONS.md` with a note explaining why
- Keep this file current — stale open decisions create confusion
