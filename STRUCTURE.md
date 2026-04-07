# Structure — Movara AI

Canonical folder structure for the Movara AI workspace. This is the reference for what belongs where.

---

## Top-Level Tree

```
Movara AI/
│
├── CLAUDE.md                         Root governance (this workspace)
├── README.md                         Human-readable intro
├── STRUCTURE.md                      This file
├── INDEX.md                          Quick navigation
├── SECURITY.md                       Secrets and credential rules
├── WORKSPACE_RULES.md                Naming, governance, anti-churn
├── AUTOMATION.md                     CLAUDE.md maintenance scripts
├── .env.example                      Environment variable template
├── .gitignore                        Git ignore rules
├── package.json                      Node.js dependencies and scripts
├── tsconfig.json                     TypeScript config
├── next.config.ts                    Next.js config
├── postcss.config.mjs                PostCSS / Tailwind config
│
├── 00_ADMIN/
│   ├── CLAUDE.md
│   ├── README.md
│   └── PROJECT docs
│
├── 01_STRATEGY/
│   ├── CLAUDE.md
│   ├── README.md
│   ├── BUSINESS_PLAN.md
│   ├── Movara_AI_Positioning_and_ICP.docx.md
│   ├── Movara_AI_Vertical_Niches.docx.md
│   └── Movara_AI_Differentiation_Thesis.docx.md
│
├── 02_SERVICES_AND_PRICING/
│   ├── CLAUDE.md
│   ├── README.md
│   ├── Service_Catalog_Overview.docx.md
│   ├── Website_Packages_Basic_Premium_Enterprise.md
│   ├── Automation_Packages_Starter_Growth_Enterprise.md
│   └── Retainer_Models_and_Pricing.md
│
├── 03_SALES_PROCESS/
│   ├── CLAUDE.md
│   ├── README.md
│   ├── Sales_Funnel_and_Stages.md
│   ├── Discovery_Call_Script_and_Notes.md
│   └── Objection_Handling_Plays.md
│
├── 04_DELIVERY_PLAYBOOKS/
│   ├── CLAUDE.md
│   ├── README.md
│   ├── Standard_Project_Phases.md
│   └── Client_Onboarding_and_Kickoff.md
│
├── 05_ASSETS_TEMPLATES/
│   ├── CLAUDE.md
│   ├── README.md
│   ├── AGENT_CATALOG.md
│   ├── MARCUS_OPERATING_SYSTEM.md
│   ├── Proposal_Template.md
│   ├── Case_Study_Outline.md
│   ├── Email_Followup_Sequences.md
│   ├── Landing_Page_Copy_Framework.md
│   ├── Outreach_Message_Scripts.md
│   ├── MCP_INTEGRATIONS/
│   └── Workflows/
│
├── 06_METRICS_DASHBOARDS/
│   ├── CLAUDE.md
│   ├── README.md
│   ├── Core_KPIs_and_Definitions.md
│   ├── Sales_and_Funnel_Metrics.md
│   ├── Delivery_and_Quality_Metrics.md
│   └── AGENCY_HEALTH_DASHBOARD_OUTLINE.md
│
├── CLIENT_PROJECTS/
│   ├── CLAUDE.md                     Shared project standards
│   ├── Task.Ahlian/                  ACTIVE — AI task dashboard (MVP)
│   │   ├── CLAUDE.md
│   │   ├── README.md, HANDOFF.md, ARCHITECTURE.md
│   │   ├── src/web/                  Next.js web app
│   │   ├── src/vscode-extension/     VSCode extension
│   │   └── supabase/migrations/      Database migrations
│   ├── Atrellis_Design_&_Build/      PLANNING — Renovation platform
│   │   ├── CLAUDE.md                 Project-specific rules (preserved)
│   │   ├── README.md, HANDOFF.md, ARCHITECTURE.md
│   │   ├── 00_ADMIN/ through 13_QA_LAUNCH_GROWTH/
│   │   └── (rich internal structure — see project CLAUDE.md)
│   └── 99_ARCHIVE/                   Completed/archived projects
│
├── agents/                           AI agent definitions
│   ├── CONSULTING/                   5 agents
│   ├── CONTENT/                      6 agents
│   ├── DESIGN/                       5 agents
│   ├── ENGINEERING/                  6 agents
│   ├── MARKETING/                    5 agents
│   ├── OPERATIONS/                   4 agents
│   └── PRODUCT/                      3 agents
│
├── MOVARA_AI_AGENTS/                 Agent system documentation
│   └── README.md
│
├── app/                              Next.js application
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── scripts/                          Automation (audit, init)
├── conductor/                        Project planning/orchestration
├── .github/                          CI/CD workflows
└── .husky/                           Git hooks (pre-commit)
```

---

## Naming Rules

- All agency folders use underscores and no special characters (e.g., `01_STRATEGY`)
- New folders and files must use the canonical naming format
- See WORKSPACE_RULES.md for full naming conventions

---

## Folder Expectations

Each numbered agency folder (00-06) must have:
- CLAUDE.md (enforced by automation)
- At least one source-of-truth document

CLIENT_PROJECTS must have:
- Root CLAUDE.md with shared standards
- Per-project CLAUDE.md with project-specific rules
- Per-project README.md, HANDOFF.md for active projects

---

## Atrellis Note

Atrellis Design & Build is not a standard lightweight client project. It has a rich 13-folder internal structure covering brand, pages, services, content/SEO, media, build system, prompts, research, and QA. It maintains its own governance via its project CLAUDE.md and may eventually graduate to a standalone workspace or repository.

---

## Archive Rules

- Never delete — move to `_archive/` subfolder or `99_ARCHIVE/` at top level
- Date-prefix archived files when helpful (e.g., `2026-04_OLD_VERSION.md`)
- Update cross-references when archiving

---

Last Updated: April 7, 2026
