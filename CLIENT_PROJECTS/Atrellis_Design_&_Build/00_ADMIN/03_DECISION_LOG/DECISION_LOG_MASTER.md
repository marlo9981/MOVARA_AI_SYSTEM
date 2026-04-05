# Decision Log Master

## Purpose

This is the canonical record of all decisions made during the Atrellis Design & Build project.

Each entry follows the format:
- **Date**
- **Decision**
- **Context**
- **Options considered**
- **Decision**
- **Reasoning**
- **Impacted areas**

## Decision entries

### 001 — Documentation-first approach
- **Date:** 2026-04-05
- **Context:** How to structure the project before writing code
- **Options considered:**
  - Jump straight into Next.js development
  - Build a full documentation and planning system first
- **Decision:** Documentation-first approach
- **Reasoning:** Atrellis is a complex, multi-phase project with broad service categories and future platform ambitions. Building a clean source-of-truth system first prevents rework, ensures AI collaboration is effective, and creates a foundation that mirrors the eventual repo structure.
- **Impacted areas:** All folders, project timeline, collaboration workflow

### 002 — Filing system mirrors build repo
- **Date:** 2026-04-05
- **Context:** How to organize the documentation filing system
- **Options considered:**
  - Organize by file type (all specs together, all plans together)
  - Organize by domain that mirrors the eventual Next.js app router structure
- **Decision:** Domain-based organization mirroring the build repo
- **Reasoning:** When the build starts, every documentation folder should map cleanly to a code directory. This reduces cognitive overhead and makes handoff between planning and implementation seamless.
- **Impacted areas:** `02_WEBSITE_STRUCTURE/`, `03_PAGE_SYSTEM/`, `09_BUILD_SYSTEM/`, `10_PLATFORM_FUTURE/`

### 003 — AI collaboration model
- **Date:** 2026-04-05
- **Context:** Which AI tools to use and how
- **Options considered:**
  - Single AI tool for everything
  - Claude for architecture and code, Gemini for creative and review
  - Multi-model approach with clear role separation
- **Decision:** Multi-model approach with Claude as primary architect and Gemini as secondary reviewer
- **Reasoning:** Different models have different strengths. Claude excels at structured reasoning and code architecture. Gemini provides strong creative review and alternative perspectives. Both should have access to the same source-of-truth files.
- **Impacted areas:** `11_PROMPTS_AND_AGENTS/`, all content generation workflows

### 004 — Website positioned as platform foundation
- **Date:** 2026-04-05
- **Context:** Should Atrellis be built as a brochure site or platform-ready system
- **Options considered:**
  - Standard brochure website with basic CMS
  - Platform-ready architecture from day one with configurators, dashboards, and automation
  - Premium website with clear pathways for future platform expansion
- **Decision:** Premium website with clear pathways for future platform expansion
- **Reasoning:** Full platform features are not needed immediately, but the architecture should be designed so that configurators, quote engines, and dashboards can be added without rebuilding the foundation. This balances speed-to-market with long-term vision.
- **Impacted areas:** `09_BUILD_SYSTEM/`, `10_PLATFORM_FUTURE/`, `07_AI_CLIENT_EXPERIENCE/`

### 005 — Content organized by topic clusters, not just pages
- **Date:** 2026-04-05
- **Context:** How to structure content for SEO and AIO readiness
- **Options considered:**
  - Page-by-page content creation
  - Topic cluster-based content architecture
  - Hybrid approach with pillar pages and supporting content
- **Decision:** Topic cluster-based content architecture
- **Reasoning:** Atrellis covers many service categories (blinds, roofing, balconies, waterproofing, renovations). Topic clusters allow authority to build around each category while maintaining clear internal linking and supporting answer-engine optimization.
- **Impacted areas:** `05_CONTENT_SEO_AIO/`, `02_WEBSITE_STRUCTURE/`

### 006 — Five backbone folders prioritized first
- **Date:** 2026-04-05
- **Context:** Which folders to complete first for maximum leverage
- **Options considered:**
  - Complete folders in numerical order (01, 02, 03...)
  - Complete by dependency chain
  - Complete five backbone folders first: Admin, Website Structure, Content/SEO/AIO, Build System, Prompts & Agents
- **Decision:** Five backbone folders first
- **Reasoning:** These five folders create the operating system for the entire project. Everything else depends on them being solid. Completing them first creates a stable foundation for all downstream work.
- **Impacted areas:** All folders, project sequencing

## How to add a new decision

1. Increment the decision number
2. Follow the exact format above
3. Link to any impacted files or folders
4. If the decision supersedes a previous one, move the old entry to `SUPERSEDED_DECISIONS.md`
