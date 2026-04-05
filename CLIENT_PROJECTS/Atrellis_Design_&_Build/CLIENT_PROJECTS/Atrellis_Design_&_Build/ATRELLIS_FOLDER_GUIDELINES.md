# ATRELLIS FOLDER GUIDELINES
## Master Reference for Folder 08-13 Structure & Content

**Status:** DRAFT (awaiting design approval)
**Purpose:** Bulletproof instructions for subagents building out folders 08-13
**Last Updated:** 2026-04-06

---

## Universal Folder Rules (All Folders 08-13)

### Structure
- **Numbered subfolders** (01_, 02_, 03_, etc.) each with a single, clear purpose
- **README.md** at folder root explaining the folder's role and how to use it
- **.gitkeep** in empty directories (ensures git tracks empty folders)
- **NOTES.md** in each subfolder for working assumptions, open questions, deferred decisions

### File Naming Conventions
- **[TOPIC]_MASTER.md** — Synthesizes all content in that subfolder (index/overview)
- **[TOPIC]_*.md** — Specific deep-dives on aspects of the topic
- **README.md** — Always present; explains purpose and guides usage
- Use snake_case with ALL_CAPS for the main topic name
- Use underscores, not hyphens, for file names

### Content Pattern (Each .md file)

```markdown
# [CLEAR TITLE]

## Purpose
1-2 sentences explaining why this file exists and what problem it solves.

## Key Points
- Bullet list of main takeaways
- Numbered list for sequential decisions
- Tables for comparisons

## Source of Truth Status
[ ] Complete
[ ] In Progress — [specific gaps]
[ ] Placeholder — [what's needed before filling]

## Related Files
- `./FILENAME.md` — [relationship]
- `../../OTHER_FOLDER/FILE.md` — [relationship]

## Next Steps
- [ ] [Task 1]
- [ ] [Task 2]
```

### Master File Pattern (Each [TOPIC]_MASTER.md)

```markdown
# [TOPIC] — Master Synthesis

## Overview
[1 sentence describing what this synthesizes]

## The Stack
| Item | Status | Key Point |
|------|--------|-----------|
| Subtopic 1 | [Complete/In Progress/Placeholder] | Main takeaway |
| Subtopic 2 | [Complete/In Progress/Placeholder] | Main takeaway |

## Decision Log
[Timeline of key decisions, ordered by date]

## Open Questions
- [Question 1: what's at stake?]
- [Question 2: who decides?]

## Integration Points
- Which other folders does this feed?
- Which folders feed into this?
```

---

## Folder-by-Folder Breakdown

### **FOLDER 08: COMMERCIALS_PRICING**
**Role:** Price strategy, ROI, client value proposition, business model decisions

**Subfolders:**

#### 01_ATRELLIS_PITCH
*Goal: Sell the website project value to Atrellis leadership*
- **README.md** — What this pitch package contains and how to use it
- **PITCH_OVERVIEW.md** — 1-page executive summary (problem, solution, ROI)
- **CLIENT_OUTCOMES.md** — How Atrellis wins (revenue impact, credibility, positioning)
- **DIFFERENTIATION.md** — Why Atrellis site beats competitors (design, automation, SEO)
- **NOTES.md** — Assumptions about client priorities and decision timeline

#### 02_WEBSITE_SCOPE_PRICING
*Goal: Lock in what Movara builds vs. what Atrellis provides; pricing model*
- **README.md** — Explains the scope/pricing relationship
- **WEBSITE_SCOPE_PRICING_MASTER.md** — Index all scope and pricing decisions
- **SCOPE_TIERS_AND_DELIVERABLES.md** — Tier 1 (MVP), Tier 2 (Full), Tier 3 (Platform) with exact deliverables
- **PRICING_MODEL.md** — Fixed fee, hourly, retainer, or hybrid + payment terms
- **SCOPE_ASSUMPTIONS_AND_EXCLUSIONS.md** — What IS vs ISN'T included; change order process
- **NOTES.md** — Client questions, scope creep risks, pricing negotiations

#### 03_RESOURCE_AND_TIMELINE
*Goal: Map resource allocation and timeline to scope*
- **README.md** — How resources and timeline link to scope tiers
- **RESOURCE_ALLOCATION.md** — Team roles, hours per phase (Designer, Dev, QA, PM)
- **TIMELINE_BY_PHASE.md** — Phase 1 (Planning → Design → Build → Launch) with milestones
- **ASSUMPTIONS_AND_RISKS.md** — Resource availability, client responsiveness, dependencies
- **NOTES.md** — Bottlenecks, contingency plans, buffer time

#### 04_COST_BREAKDOWN
*Goal: Internal cost model for profitability and pricing decisions*
- **README.md** — Purpose: understand internal costs vs. pricing
- **COST_BREAKDOWN_MASTER.md** — Total cost summary by phase
- **DELIVERY_COST_ASSUMPTIONS.md** — Fully-loaded hourly rates (Movara team), tools, hosting
- **TOOLS_AND_OPERATIONS_COSTS.md** — Vercel, Supabase, design tools, CDN, domain costs
- **NOTES.md** — Cost sensitivities, margin targets, profitability assumptions

#### 05_PAYMENT_SCHEDULE
*Goal: Define when Atrellis pays Movara (milestones, holdback)*
- **README.md** — How payment schedule links to deliverables
- **PAYMENT_SCHEDULE_MASTER.md** — Exact payment amounts and dates
- **MILESTONE_DELIVERABLES.md** — What triggers each payment
- **NOTES.md** — Invoice terms, late payment handling, change order payment

#### 06_PRICING_PSYCHOLOGY
*Goal: Frames for selling price value to Atrellis (ROI angles)*
- **README.md** — How to communicate ROI to client
- **PRICING_JUSTIFICATION.md** — Why the price is fair (competitive benchmark, value delivered)
- **CLIENT_ROI_STORY.md** — "For every $X invested, you get $Y in revenue/leads"
- **NOTES.md** — Client objections anticipated, counter-arguments

#### 07_CLIENT_ROI_ANGLE
*Goal: How to position ROI to Atrellis during sales*
- **README.md** — ROI communication strategy
- **BUSINESS_CASE_FRAMING.md** — Frames (lead cost reduction, conversion lift, brand authority)
- **ROI_ARGUMENTS_AND_PROOF.md** — Data-backed arguments + case studies from similar projects
- **NOTES.md** — Client priorities (revenue growth vs. brand vs. ops efficiency)

#### 08_PACKAGE_COMPARISON
*Goal: Show Atrellis what they get vs. alternatives*
- **README.md** — How this comparison is used
- **PACKAGE_COMPARISON_MASTER.md** — Atrellis package vs. freelancer vs. agency alternatives
- **FEATURE_COMPARISON.md** — Table: design, automation, support, revisions, timeline
- **NOTES.md** — Competitive assumptions, where we win/lose

---

### **FOLDER 09: BUILD_SYSTEM**
**Role:** Component library, animation system, repo architecture, dev standards

**Subfolders:**

#### 01_REPO_ARCHITECTURE
*Goal: Explain how the codebase is organized and why*
- **README.md** — Purpose and high-level structure
- **REPO_ARCHITECTURE_MASTER.md** — Index of all architectural decisions
- **FOLDER_STRUCTURE.md** — Full directory tree with descriptions
  ```
  atrellis-site/
  ├── app/              [Next.js App Router routes]
  ├── components/       [Reusable UI components]
  ├── lib/              [Utilities, animations, helpers]
  ├── public/           [Static assets]
  ├── content/          [Blog MDX files]
  ├── docs/             [Internal documentation]
  ├── types/            [TypeScript types & schemas]
  └── scripts/          [Build, migration, admin scripts]
  ```
- **FILE_NAMING_CONVENTIONS.md** — How to name files, folders, components
- **IMPORT_STRUCTURE.md** — Path aliases, import order, circular dependency rules
- **NOTES.md** — Future refactoring needs, monorepo plans

#### 02_APP_ROUTER_MAP
*Goal: Show how routes map to the file system and URLs*
- **README.md** — How to add new routes and understand the map
- **APP_ROUTER_MAP_MASTER.md** — Complete route tree with current/planned pages
- **ROUTE_SEGMENTS.md** — Explain layout hierarchies, (main), (services), (platform) groups
- **DYNAMIC_ROUTES.md** — How [category], [post], [...slug] work
- **NOTES.md** — Performance implications, caching strategy per route

#### 03_COMPONENT_SYSTEM
*Goal: Define reusable components and when to use each*
- **README.md** — How to use the component library
- **COMPONENT_SYSTEM_MASTER.md** — Index of all components with descriptions
- **SHADCN_SETUP.md** — Which shadcn/ui components are installed + customizations
- **CUSTOM_COMPONENTS.md** — Atrellis-specific components (ServiceCard, BeforeAfterGallery, QuoteForm, etc.)
- **COMPONENT_GUIDELINES.md** — Do's & don'ts, naming, props structure
- **NOTES.md** — Missing components, component refactoring needs

#### 04_STYLING_SYSTEM
*Goal: Tailwind setup, design tokens, theming*
- **README.md** — How to style components
- **STYLING_SYSTEM_MASTER.md** — Token definitions and theming approach
- **TAILWIND_CONFIG.md** — Custom colors (slate/stone/zinc), spacing, breakpoints
- **DESIGN_TOKENS.md** — Colors, typography, shadows, spacing scale
- **DARK_MODE_STRATEGY.md** — If dark mode is planned: how to implement
- **NOTES.md** — Accessibility constraints (contrast), breakpoint decisions

#### 05_ANIMATION_SYSTEM
*Goal: GSAP setup, ScrollTrigger, reveal effects*
- **README.md** — How to add animations
- **ANIMATION_SYSTEM_MASTER.md** — Animation patterns and where they're used
- **GSAP_SETUP.md** — GSAP + ScrollTrigger installation and config
- **REVEAL_EFFECTS.md** — Fade-up, stagger, parallax patterns + usage examples
- **PERFORMANCE_GUIDELINES.md** — How to keep animations buttery-smooth (GPU acceleration, frame budgets)
- **NOTES.md** — Animation performance issues, browser compatibility

#### 06_TYPESCRIPT_SETUP
*Goal: Type definitions, strict mode, schema validation*
- **README.md** — TypeScript conventions
- **TYPESCRIPT_SETUP_MASTER.md** — tsconfig.json settings and rationale
- **TYPES_AND_INTERFACES.md** — Shared types (Service, Lead, Category, etc.)
- **ZOD_SCHEMAS.md** — Form validation schemas (quote form, lead capture, etc.)
- **NOTES.md** — Type coverage gaps, migration to strict mode

#### 07_TESTING_STRATEGY
*Goal: How to test components, pages, APIs*
- **README.md** — Testing guidelines
- **TESTING_STRATEGY_MASTER.md** — What to test (unit, integration, e2e)
- **UNIT_TESTING.md** — Jest + React Testing Library for components
- **INTEGRATION_TESTING.md** — API routes, Supabase integration tests
- **E2E_TESTING.md** — Playwright or similar for critical user flows
- **NOTES.md** — Coverage targets, slow tests, CI/CD integration

#### 08_BUILD_AND_DEPLOY
*Goal: Build process, dev server, deployment pipeline*
- **README.md** — How to build and deploy
- **BUILD_AND_DEPLOY_MASTER.md** — Pipeline overview
- **VERCEL_DEPLOYMENT.md** — Vercel settings, environment variables, preview URLs
- **LOCAL_DEVELOPMENT.md** — `npm run dev`, debugging, troubleshooting
- **PERFORMANCE_OPTIMIZATION.md** — Image optimization, code splitting, bundle analysis
- **NOTES.md** — CI/CD decisions, pre-deployment checklist

---

### **FOLDER 10: PLATFORM_FUTURE**
**Role:** Roadmap for Phase 2+; configurators, customer portal, scalability

**Subfolders:**

#### 01_PRODUCT_VISION
*Goal: What is the eventual product? How does it evolve from MVP?*
- **README.md** — Long-term vision for Atrellis platform
- **PRODUCT_VISION_MASTER.md** — 3-year roadmap, phase breakdown
- **PHASE_1_MVP.md** — Website + lead capture + instant quote (current scope)
- **PHASE_2_PLATFORM.md** — Customer portal, project tracking, AI assistant
- **PHASE_3_SCALE.md** — Multi-team support, white-label, AI-driven design
- **NOTES.md** — Revenue model evolution, go-to-market changes

#### 02_CONFIGURATORS
*Goal: Product logic for Zipblinds, Roofing, etc. configurators*
- **README.md** — What configurators are and why Atrellis needs them
- **CONFIGURATORS_MASTER.md** — List of planned configurators
- **ZIPBLINDS_CONFIGURATOR.md** — Spec for Zipblinds config (size, material, color, price)
- **ROOFING_CONFIGURATOR.md** — Spec for Roofing config
- **WATERPROOFING_CONFIGURATOR.md** — Spec for Waterproofing config
- **CONFIGURATOR_FRAMEWORK.md** — How configurators share logic (branching, rules, pricing)
- **NOTES.md** — Data schema for configurators, 3D rendering plans

#### 03_CUSTOMER_PORTAL
*Goal: After-sale customer experience; project tracking, revisions*
- **README.md** — Purpose of customer portal
- **CUSTOMER_PORTAL_MASTER.md** — Portal feature list and user flows
- **PORTAL_FEATURES.md** — Project tracking, document sharing, chat, approval workflows
- **USER_ROLES.md** — Homeowner, project manager, designer, installer roles
- **NOTES.md** — Portal launch timing, integration with Supabase

#### 04_AI_ASSISTANT_EXPANSION
*Goal: Evolution of AI from lead qualification to project design*
- **README.md** — AI assistant capabilities roadmap
- **AI_ASSISTANT_MASTER.md** — Current (chat-based) vs future (design agent)
- **CURRENT_ASSISTANT.md** — Lead qualification and pre-sales answers
- **FUTURE_DESIGN_AGENT.md** — "Show me options for my balcony" → AI generates designs
- **NOTES.md** — AI model choices, training data, performance thresholds

#### 05_SCALING_STRATEGY
*Goal: How to scale from 1 Atrellis to multi-team or white-label*
- **README.md** — Scaling roadmap
- **SCALING_MASTER.md** — Market expansion (new cities, new services, new regions)
- **MULTI_TEAM_SUPPORT.md** — How to onboard new teams to the platform
- **WHITE_LABEL.md** — How to resell the platform to other contractors
- **NOTES.md** — Infrastructure limits, database sharding, international expansion

#### 06_ROADMAP_BY_QUARTER
*Goal: Quarterly priorities and sequencing*
- **README.md** — How to read and update the roadmap
- **ROADMAP_BY_QUARTER.md** — Q2 2026 → Q4 2027 planned features
- **DEPENDENCIES.md** — What must happen before what (e.g., portal before multi-team)
- **NOTES.md** — Resource constraints, market opportunities, client requests

---

### **FOLDER 11: PROMPTS_AND_AGENTS**
**Role:** AI/agent logic; Atrellis-specific vs. Movara-shared prompts

**Subfolders:**

#### 01_ATRELLIS_MASTER_PROMPT
*Goal: Master system prompt for Atrellis AI assistant*
- **README.md** — How to use and update the master prompt
- **ATRELLIS_MASTER_PROMPT.md** — Full prompt (identity, tone, guardrails, knowledge base)
- **TONE_AND_VOICE.md** — How Atrellis AI sounds (premium, technical, helpful)
- **KNOWLEDGE_BASE_STRUCTURE.md** — What the AI "knows" about services, pricing, process
- **GUARDRAILS.md** — What the AI won't say (pricing limits, legal disclaimers)
- **NOTES.md** — Prompt performance issues, refinements needed

#### 02_ATRELLIS_PAGE_PROMPTS
*Goal: Page-specific AI prompts (chat on home, quote generator, etc.)*
- **README.md** — How to navigate page prompts
- **PAGE_PROMPTS_MASTER.md** — Index of all page-specific prompts
- **HOMEPAGE_CHAT_PROMPT.md** — For homepage visitor chat widget
- **INSTANT_QUOTE_PROMPT.md** — For quote generator (collect info → build price)
- **LEAD_QUALIFICATION_PROMPT.md** — For pre-qualification before sales handoff
- **SERVICE_PAGE_ASSISTANT_PROMPT.md** — For "tell me more" on service pages
- **NOTES.md** — Prompt performance, user feedback on AI responses

#### 03_LEAD_QUALIFICATION_WORKFLOW
*Goal: How AI determines if a lead is qualified*
- **README.md** — Lead qualification process
- **LEAD_QUALIFICATION_MASTER.md** — Decision tree and scoring
- **QUALIFICATION_CRITERIA.md** — Budget, timeline, project type, location
- **ROUTING_LOGIC.md** — How qualified leads go to sales, unqualified to nurture
- **NOTES.md** — False positives/negatives, refinements

#### 04_INSTANT_QUOTE_ENGINE
*Goal: AI logic for generating instant quotes*
- **README.md** — How the quote engine works
- **INSTANT_QUOTE_MASTER.md** — Quote generation flow
- **PRICING_RULES.md** — Base price + multipliers for size, materials, complexity
- **ESTIMATION_ACCURACY.md** — How close are AI quotes to manual quotes? (target: ±10%)
- **QUOTE_PRESENTATION.md** — How to display quotes in UI
- **NOTES.md** — Quote accuracy issues, new service types

#### 05_CONVERSATION_HISTORY
*Goal: How to store and use conversation context*
- **README.md** — Conversation storage in Supabase
- **CONVERSATION_HISTORY_MASTER.md** — Schema, retention policy, privacy
- **SUPABASE_SCHEMA.md** — conversations, messages tables
- **CONTEXT_WINDOW_STRATEGY.md** — How much history to include in each API call
- **NOTES.md** — Privacy concerns, data retention compliance

#### 06_SHARED_MOVARA_REFERENCES
*Goal: Reusable prompts and logic shared across all Movara projects*
- **README.md** — How to use shared resources
- **SHARED_PROMPT_LIBRARY.md** — Common patterns (lead scoring, email drafting, etc.)
- **BRAND_VOICE_FRAMEWORK.md** — Movara's AI voice + how to customize per client
- **CONVERSATION_BEST_PRACTICES.md** — Techniques for natural multi-turn conversations
- **NOTES.md** — New shared patterns discovered from Atrellis work

#### 07_CLAUDE_MD (for Claude Code)
*Goal: Claude Code-specific instructions for working on Atrellis*
- **README.md** — How to use this CLAUDE.md
- **CLAUDE_MD_MASTER.md** — Full CLAUDE.md content for this project
- [See main CLAUDE.md in project root]

#### 08_GEMINI_MD (for Gemini CLI)
*Goal: Gemini CLI-specific instructions*
- **README.md** — How to use this GEMINI.md
- **GEMINI_MD_MASTER.md** — Full GEMINI.md content
- [For future Gemini-based agents]

#### 09_SKILLS_LIBRARY
*Goal: Custom skills specific to Atrellis work*
- **README.md** — How skills are organized
- **SKILLS_MASTER.md** — Index of all custom skills
- **[SKILL_NAME].md** — Each skill for handling Atrellis-specific patterns
  - e.g., `ATRELLIS_COMPONENT_PATTERNS.md`, `ATRELLIS_LEAD_FLOW.md`

---

### **FOLDER 12: RESEARCH_REFERENCE**
**Role:** Market research, competitive analysis, pricing data, case studies

**Subfolders:**

#### 01_PRICING_RESEARCH
*Goal: Market pricing for renovation/outdoor living in Singapore*
- **README.md** — Pricing research methodology
- **PRICING_RESEARCH_MASTER.md** — Summary of all pricing data
- **ZIPBLINDS_PRICING.md** — Market pricing for Zipblinds (by size, material, complexity)
- **ROOFING_PRICING.md** — Market pricing for roofing solutions
- **WATERPROOFING_PRICING.md** — Market pricing for waterproofing
- **BALCONY_RENOVATION_PRICING.md** — Full balcony project pricing (materials + labor)
- **NOTES.md** — Data sources, recency of data, confidence levels

#### 02_COMPETITOR_REFERENCE
*Goal: Competitive analysis of other renovation agencies*
- **README.md** — Competitor analysis methodology
- **COMPETITOR_REFERENCE_MASTER.md** — Summary of competitors
- **COMPETITOR_1_PROFILE.md** — [Competitor name]: pricing, services, positioning
- **COMPETITOR_2_PROFILE.md** — [Competitor name]: pricing, services, positioning
- **COMPETITOR_3_PROFILE.md** — [Competitor name]: pricing, services, positioning
- **ATRELLIS_COMPETITIVE_ADVANTAGE.md** — Where Atrellis wins vs. each competitor
- **NOTES.md** — Competitive threats, market shifts

#### 03_CUSTOMER_PERSONAS
*Goal: Who are Atrellis customers? What do they want?*
- **README.md** — Persona methodology
- **CUSTOMER_PERSONAS_MASTER.md** — Summary of all personas
- **PERSONA_HOMEOWNER_UPGRADER.md** — Young professional wanting to upgrade balcony
- **PERSONA_ELDERLY_SAFETY.md** — Elderly homeowner wanting accessibility upgrades
- **PERSONA_INVESTOR.md** — Investment property owner maximizing ROI
- **NOTES.md** — Persona validation, market sizing

#### 04_MARKET_TRENDS
*Goal: SEA market trends in home renovation/outdoor living*
- **README.md** — Trends and signals
- **MARKET_TRENDS_MASTER.md** — Key market trends 2024-2026
- **SUSTAINABILITY_TRENDS.md** — Green building, eco-friendly materials
- **AUTOMATION_TRENDS.md** — Smart home, automation, IoT in home services
- **ONLINE_SHOPPING_TRENDS.md** — E-commerce for home services, virtual consultations
- **NOTES.md** — Implications for Atrellis positioning

#### 05_CASE_STUDIES
*Goal: Success stories from similar projects or competitors*
- **README.md** — Case study format and usage
- **CASE_STUDIES_MASTER.md** — Index of all case studies
- **CASE_STUDY_1.md** — [Project name]: before/after, results, learnings
- **CASE_STUDY_2.md** — [Project name]: before/after, results, learnings
- **NOTES.md** — Applicability to Atrellis, success metrics

#### 06_REGULATORY_COMPLIANCE
*Goal: Legal and regulatory constraints for home renovation in Singapore*
- **README.md** — Compliance overview
- **REGULATORY_COMPLIANCE_MASTER.md** — Summary of key regulations
- **BUILDING_CODE_REQUIREMENTS.md** — BCA codes, permits, inspections
- **WARRANTY_STANDARDS.md** — Industry warranty standards, liability
- **NOTES.md** — Legal review status, compliance gaps

---

### **FOLDER 13: QA_LAUNCH_GROWTH**
**Role:** QA checklists, launch plan, CRO backlog, growth strategy

**Subfolders:**

#### 01_QA_CHECKLISTS
*Goal: Quality assurance checklist before launch*
- **README.md** — How to use QA checklists
- **QA_CHECKLIST_MASTER.md** — Master QA checklist (index)
- **FUNCTIONAL_QA_CHECKLIST.md** — All features work as designed
- **DESIGN_QA_CHECKLIST.md** — Design system applied consistently, no visual bugs
- **PERFORMANCE_QA_CHECKLIST.md** — Page load <1s, images optimized, animations smooth
- **SEO_QA_CHECKLIST.md** — Meta tags, structured data, sitemap, robots.txt
- **ACCESSIBILITY_QA_CHECKLIST.md** — WCAG 2.1 AA compliance (contrast, keyboard nav, screen readers)
- **SECURITY_QA_CHECKLIST.md** — No XSS, CSRF, SQL injection; HTTPS, env vars secure
- **CROSS_BROWSER_CHECKLIST.md** — Chrome, Firefox, Safari, Edge, mobile
- **MOBILE_QA_CHECKLIST.md** — Responsive design, touch interactions, performance
- **NOTES.md** — Known issues, waivers, deferred fixes

#### 02_PRELAUNCH
*Goal: Final steps before going live*
- **README.md** — Prelaunch process
- **PRELAUNCH_MASTER.md** — Prelaunch checklist and timeline
- **DOMAIN_AND_DNS.md** — Domain setup, DNS records, SSL
- **DATABASE_BACKUP.md** — Backup strategy, restore testing
- **MONITORING_SETUP.md** — Uptime monitoring, error tracking, analytics
- **TEAM_COMMUNICATIONS.md** — Notifications, handoff to support, escalation process
- **LAUNCH_PLAN.md** — Go-live timeline, rollback plan, communications to users
- **NOTES.md** — Launch day coordination, crisis communication

#### 03_LAUNCH_COMMUNICATION
*Goal: How to announce launch to market*
- **README.md** — Communication strategy
- **LAUNCH_COMMUNICATION_MASTER.md** — Index of communications
- **PRESS_RELEASE.md** — Public announcement (for media, stakeholders)
- **EMAIL_ANNOUNCEMENT.md** — Email to existing Atrellis customers
- **SOCIAL_MEDIA_POSTS.md** — LinkedIn, Instagram, Facebook launch posts
- **INTERNAL_ANNOUNCEMENT.md** — Team/staff announcement
- **NOTES.md** — Timing, media outreach, follow-up sequence

#### 04_POST_LAUNCH_MONITORING
*Goal: Monitor performance and issues in first 30 days*
- **README.md** — Post-launch monitoring approach
- **MONITORING_MASTER.md** — Key metrics and thresholds
- **CRITICAL_METRICS.md** — Page load, uptime, conversion rate, error rate
- **ALERT_THRESHOLDS.md** — What triggers an alert (error rate >1%, load >3s, etc.)
- **INCIDENT_RESPONSE.md** — How to respond to issues (who, escalation, communication)
- **NOTES.md** — Post-launch learning, adjustments

#### 05_CRO_BACKLOG
*Goal: Conversion rate optimization opportunities*
- **README.md** — CRO methodology
- **CRO_BACKLOG_MASTER.md** — Prioritized list of CRO experiments
- **QUICK_WINS.md** — High-impact, low-effort improvements (copy tweaks, button color, form fields)
- **HYPOTHESIS_TESTING.md** — Planned A/B tests (headline variants, CTA placement, form length)
- **ANALYTICS_SETUP.md** — Event tracking for conversion funnels
- **NOTES.md** — Baseline metrics, target lift, measurement approach

#### 06_GROWTH_STRATEGY
*Goal: How to grow traffic and revenue post-launch*
- **README.md** — Growth strategy overview
- **GROWTH_STRATEGY_MASTER.md** — Growth initiatives and channels
- **SEO_GROWTH.md** — Organic traffic growth (keyword targeting, content plan, link building)
- **PAID_ADVERTISING.md** — Google Ads, social ads, budget allocation
- **EMAIL_NURTURE.md** — Lead nurturing sequences, segmentation
- **REFERRAL_PROGRAM.md** — Customer referral incentives
- **PARTNERSHIP_STRATEGY.md** — Strategic partnerships (interior designers, contractors)
- **NOTES.md** — Market expansion opportunities, international growth

#### 07_CUSTOMER_FEEDBACK
*Goal: Collect and act on customer feedback*
- **README.md** — Feedback collection methodology
- **CUSTOMER_FEEDBACK_MASTER.md** — Feedback themes and insights
- **USABILITY_FEEDBACK.md** — How customers interact with the site (issues, confusion)
- **FEATURE_REQUESTS.md** — What customers want next
- **BUG_REPORTS.md** — Issues reported by customers
- **SATISFACTION_SURVEYS.md** — Net Promoter Score (NPS), satisfaction metrics
- **NOTES.md** — High-priority feedback, product roadmap implications

#### 08_MONTHLY_REVIEW
*Goal: Monthly review template for ongoing optimization*
- **README.md** — Monthly review process
- **MONTHLY_REVIEW_TEMPLATE.md** — Recurring template
  - [ ] Traffic metrics (users, sessions, bounce rate)
  - [ ] Conversion metrics (leads, quote requests, conversion rate)
  - [ ] Performance metrics (page load, uptime, errors)
  - [ ] User feedback (support tickets, surveys)
  - [ ] Experiments completed + results
  - [ ] Priorities for next month
- **NOTES.md** — Insights from past reviews, trends

---

## Guidelines Summary

| Aspect | Rule |
|--------|------|
| **File Naming** | Use snake_case with ALL_CAPS for topic names |
| **Master Files** | Every major section gets a `[TOPIC]_MASTER.md` that indexes its contents |
| **README.md** | Every folder and subfolder must have a README explaining purpose and usage |
| **NOTES.md** | Every subfolder has NOTES.md for assumptions, open questions, deferred decisions |
| **Status Markers** | Use `[ ] Complete`, `[ ] In Progress`, `[ ] Placeholder` in all files |
| **.gitkeep** | Empty directories must include .gitkeep to ensure git tracks them |
| **Structure** | Numbered subfolders (01_, 02_, etc.) each with a single, clear purpose |
| **Content** | Start with Purpose, follow with Key Points, end with Related Files + Next Steps |

---

## What This Means for Subagents

When a subagent works on a folder (e.g., 08_COMMERCIALS_PRICING):

1. **Create the folder structure** exactly as specified above
2. **Create README.md** that explains the folder's purpose and contents
3. **Create each subfolder** with its own README.md
4. **Create all .md files** listed for each subfolder
5. **Follow the content pattern** (Purpose, Key Points, Status Markers, Related Files, Next Steps)
6. **Fill placeholders** with realistic content or clearly mark `[ ] Placeholder — [what's needed]`
7. **Use NOTES.md** to surface working assumptions and decisions
8. **Link files** to show relationships between folders

---

## Approval Checkpoint

**This guideline is DRAFT and awaits approval before subagent deployment.**

- [ ] Marcus approves folder structure and naming conventions
- [ ] Marcus approves content patterns and master file approach
- [ ] Marcus confirms subfolders and .md files per folder (08-13)
- [ ] Marcus confirms phasing and priority (which folder first?)

**Approval** → Deploy subagent-driven-development for parallel execution.

---

**Status:** Awaiting Approval
**Next Step:** Marcus reviews, confirms structure, approves launch