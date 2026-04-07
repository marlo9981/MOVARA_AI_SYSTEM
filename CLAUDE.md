# CLAUDE.md — Movara AI (Root)

## What This Is

Movara AI is an agency that builds high-conversion UI websites followed by workflow automations, targeting Southeast Asia and overseas markets. This workspace is the agency operating system: business strategy, sales, delivery, templates, metrics, and all client projects.

This file is the root-level instruction set for Claude Code. It applies workspace-wide. Every session starts here.

---

## Inheritance Model

- **Root CLAUDE.md** (this file) = workspace-wide rules
- **Subfolder CLAUDE.md** (e.g., `01_STRATEGY/CLAUDE.md`) = local specialization for that folder
- **Project CLAUDE.md** (e.g., `CLIENT_PROJECTS/Atrellis_Design_&_Build/CLAUDE.md`) = project-specific overrides

The deepest relevant CLAUDE.md applies, but must not contradict core root rules unless explicitly intended. When in doubt, root rules win.

---

## Core Rules

1. **No new structure without asking.** Maintain the existing folder/file tree. Do not create new top-level folders.
2. **Update in place.** Edit existing docs rather than creating duplicates.
3. **Database-backed.** All client application data must be stored in a database (Supabase default).
4. **No placeholder copy.** Use real content or mark clearly as [DRAFT].
5. **SEA market focus.** All examples, pricing, case studies tailored to Southeast Asia.
6. **Archive over delete.** Never delete files — move to `_archive/` or `99_ARCHIVE/` subfolder.
7. **No secrets in code.** Never commit API keys, tokens, or passwords. See SECURITY.md.

---

## Folder Hierarchy

```
Movara AI/
├── 00_ADMIN/                    Agency project docs, Claude guidelines
├── 01_STRATEGY/                 Positioning, ICP, niches, differentiation
├── 02_SERVICES_AND_PRICING/     Service catalog, packages, pricing
├── 03_SALES_PROCESS/            Funnel, discovery, objections, proposals
├── 04_DELIVERY_PLAYBOOKS/       Project phases, workflows, QA, handoff
├── 05_ASSETS_TEMPLATES/         Proposals, templates, agent catalog, MCP
├── 06_METRICS_DASHBOARDS/       KPIs, sales metrics, delivery metrics
├── CLIENT_PROJECTS/             All client work (own rules per project)
├── agents/                      30+ AI agents across 7 departments
├── MOVARA_AI_AGENTS/            Agent system documentation
├── app/                         Next.js application (Vercel deployment)
├── scripts/                     Automation scripts (audit, init)
└── conductor/                   Project planning/orchestration
```

Each numbered folder (00-06) has its own CLAUDE.md with folder-specific guidance. These inherit from this root file.

---

## Source-of-Truth Pattern

Every significant folder should follow this pattern:
- **CLAUDE.md** — Rules and governance for Claude Code
- **README.md** — Human-readable introduction and overview
- **NOTES.md** — Scratch notes, working thoughts, temporary items

The CLAUDE.md is the authoritative file for how Claude operates in that folder.

---

## Tech Stack (Web Products)

| Component | Default | Notes |
|-----------|---------|-------|
| Framework | Next.js App Router | Server components, TypeScript |
| Styling | Tailwind CSS | No hardcoded colors — use config |
| Animations | GSAP + ScrollTrigger | Config in `/lib/animations.ts` |
| Database | Supabase | PostgreSQL, RLS, webhooks |
| Deployment | Vercel | Git integration, preview URLs |
| Language | TypeScript | Strict mode always |
| Fonts | `next/font` | Geist Sans + Geist Mono default |

Deviations from this stack require explicit approval.

---

## Coding Standards

- Structured directories: `/app`, `/components`, `/lib`, `/public`
- Animation config in `/lib/animations.ts`
- ScrollTrigger initialization in root layout
- No barrel files (no `index.ts` re-exports)
- No hardcoded colors (use Tailwind config)
- Use `next/font` for typography
- Production-ready output: no TODOs, no placeholder code in commits

---

## Output Expectations

- **Proposals**: Professional, localized for SEA, conversion-focused
- **Code**: Production-ready, no TODOs or placeholders
- **Strategy docs**: Actionable, data-backed where possible
- **Playbooks**: Step-by-step, templated, repeatable

---

## Client Projects

Client work lives in `CLIENT_PROJECTS/`. Each client project:
- Has its own CLAUDE.md, README.md, and project structure
- Follows standards defined in `CLIENT_PROJECTS/CLAUDE.md`
- Keeps its own `.env.example` and credentials isolated
- Never shares code, credentials, or config with other projects

Do not move client-specific files into agency folders (00-06). Do not move agency strategy docs into client folders.

See `CLIENT_PROJECTS/CLAUDE.md` for project standards, templates, and onboarding checklist.

---

## Naming Conventions

- Folders: numbered prefix + descriptive name (e.g., `01_STRATEGY`)
- Files: UPPER_SNAKE_CASE for docs (e.g., `BUSINESS_PLAN.md`), standard conventions for code
- No special characters in new folder or file names
- See WORKSPACE_RULES.md for full naming and governance details

---

## Automation

CLAUDE.md files are maintained by automation scripts:
- `npm run claude:audit` — Check all folders have CLAUDE.md
- `npm run claude:init` — Create missing CLAUDE.md files from templates
- Pre-commit hook blocks commits if files are missing or stale

See AUTOMATION.md for full details.

---

## Related Files

- [STRUCTURE.md](STRUCTURE.md) — Canonical folder structure
- [INDEX.md](INDEX.md) — Quick navigation table
- [WORKSPACE_RULES.md](WORKSPACE_RULES.md) — Naming, governance, anti-churn rules
- [SECURITY.md](SECURITY.md) — Secrets, credentials, access control
- [AUTOMATION.md](AUTOMATION.md) — CLAUDE.md maintenance scripts
- [README.md](README.md) — Human-readable workspace intro

---

Last Updated: April 7, 2026
