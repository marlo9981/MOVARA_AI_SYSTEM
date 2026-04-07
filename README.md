# Movara AI

Premium UI/UX & Workflow Automation Agency — Southeast Asia and overseas markets.

---

## What Is This

This workspace is the operating system for Movara AI. It contains:

- **Agency operations** (strategy, services, sales, delivery, metrics)
- **Reusable templates** (proposals, case studies, email sequences, design systems)
- **AI agent definitions** (30+ specialized agents across 7 departments)
- **Client projects** (active builds with their own structure and rules)
- **Web application** (Next.js app deployed on Vercel)

---

## Workspace Structure

| Folder | What's Inside |
|--------|---------------|
| `00_ADMIN` | Project documentation, Claude guidelines |
| `01_STRATEGY` | Positioning, ICP, vertical niches, differentiation |
| `02_SERVICES_AND_PRICING` | Service catalog, website and automation packages, pricing |
| `03_SALES_PROCESS` | Sales funnel, discovery scripts, objection handling |
| `04_DELIVERY_PLAYBOOKS` | Project phases, onboarding, QA checklists, handoff |
| `05_ASSETS_TEMPLATES` | Proposals, templates, agent catalog, MCP integrations |
| `06_METRICS_DASHBOARDS` | KPIs, sales metrics, delivery and quality tracking |
| `CLIENT_PROJECTS` | All client work — each with its own docs and codebase |
| `agents` | AI agent definitions organized by department |
| `app` | Next.js application source (Vercel deployment) |

See [INDEX.md](INDEX.md) for quick navigation and [STRUCTURE.md](STRUCTURE.md) for the full canonical tree.

---

## Getting Started

```bash
npm install
cp .env.example .env.local
# Fill in your API keys in .env.local
npm run dev
```

**Important:** Never commit `.env.local`. See [SECURITY.md](SECURITY.md).

---

## How Claude Code Uses This Repo

Every folder has a `CLAUDE.md` file that tells Claude Code how to operate in that context. The root `CLAUDE.md` sets workspace-wide rules. Subfolder files specialize. Client project files override for project-specific needs.

Automation scripts (`npm run claude:audit`, `npm run claude:init`) maintain consistency. See [AUTOMATION.md](AUTOMATION.md).

---

## Client Projects

| Project | Status | Description |
|---------|--------|-------------|
| **Task.Ahlian** | ACTIVE (Phase 1 MVP) | AI task management dashboard for VSCode |
| **Atrellis Design & Build** | PLANNING | Premium renovation website + future platform |

Atrellis is a high-priority project with a rich internal structure (13 folders covering brand, pages, services, content, media, build system, research, QA). It maintains its own governance and may eventually become a standalone workspace.

See [CLIENT_PROJECTS/CLAUDE.md](CLIENT_PROJECTS/CLAUDE.md) for project standards and onboarding checklist.

---

## Tech Stack

- **Framework**: Next.js App Router (TypeScript)
- **Styling**: Tailwind CSS
- **Animations**: GSAP + ScrollTrigger
- **Database**: Supabase (PostgreSQL, RLS)
- **Deployment**: Vercel
- **AI**: Multi-model (Anthropic, Google Gemini, Perplexity, OpenAI)

---

## Key Links

- [CLAUDE.md](CLAUDE.md) — Root governance
- [SECURITY.md](SECURITY.md) — Secrets and credential rules
- [WORKSPACE_RULES.md](WORKSPACE_RULES.md) — Naming and governance
- [AUTOMATION.md](AUTOMATION.md) — CLAUDE.md maintenance

---

Last Updated: April 7, 2026
