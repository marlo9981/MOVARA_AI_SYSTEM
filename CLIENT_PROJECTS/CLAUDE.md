# CLAUDE.md — Client Projects

## Overview

Central directory for all client work at Movara AI. Each project lives in its own folder with complete documentation, code, and deliverables. Every project is a real, paid engagement with defined scope, timeline, and acceptance criteria.

## Project Structure

```
CLIENT_PROJECTS/
├── Task.Ahlian/
│   ├── CLAUDE.md (project-specific guidelines)
│   ├── README.md (project overview)
│   ├── HANDOFF.md (deliverables & timeline)
│   ├── ARCHITECTURE.md (technical design)
│   ├── src/ (Next.js + Supabase)
│   ├── docs/ (specs, designs, plans)
│   └── package.json (monorepo)
│
├── Atrellis_Design_&_Build/
│   ├── CLAUDE.md (project guidelines)
│   ├── README.md
│   ├── HANDOFF.md
│   └── [project files]
│
├── Karim_Viv/ (placeholder — EMPTY)
└── Renocraft_3D Scanner/ (placeholder — EMPTY)
```

## Project Standards (Mandatory)

✅ **Documentation**
- CLAUDE.md — Project-specific Claude working guidelines
- README.md — Project overview, scope, tech stack
- HANDOFF.md — Deliverables, acceptance criteria, timeline
- ARCHITECTURE.md — Technical design & data flows

✅ **Code Quality**
- TypeScript strict mode (all projects)
- 88%+ test coverage
- ESLint + Prettier configured
- No placeholder code or TODOs in commits

✅ **Database**
- All applications are database-backed (Supabase recommended)
- Schema migrations tracked in version control
- Row-level security (RLS) policies documented
- No hardcoded secrets in code

✅ **Deployment**
- All web products deploy to Vercel
- Environment variables in `.env.example` (docs, no secrets)
- Preview URLs for every PR
- Production domain managed by client or Movara

✅ **Content**
- No placeholder copy ("Lorem ipsum", "TODO", "FIXME")
- All copy is real or clearly marked [DRAFT]
- SEA market focus (when applicable)

## Project States

| State | Meaning | Next Action |
|-------|---------|-------------|
| **PLANNING** | Scope & spec in progress | Complete HANDOFF.md |
| **ACTIVE** | Actively being built | Daily standups, track progress |
| **REVIEW** | Awaiting client feedback | Demo, collect acceptance feedback |
| **REFINEMENT** | Fixing issues & requests | Update HANDOFF.md with changes |
| **LAUNCHED** | Live in production | Monitor, maintain, iterate |
| **ARCHIVED** | Completed & handed off | Move to `/archive/` (keep accessible) |

## When Starting a New Project

1. **Create folder** — `CLIENT_PROJECTS/[ClientName]` (no special chars)
2. **Write CLAUDE.md** — Project-specific guidance (copy from template below)
3. **Write README.md** — Scope, deliverables, timeline, tech stack
4. **Write HANDOFF.md** — What we're building, acceptance criteria, deployment steps
5. **Add to git** — `git add CLIENT_PROJECTS/[ClientName]/{CLAUDE,README,HANDOFF}.md`
6. **Commit** — "Project setup: [ClientName] — [one-line scope]"

## CLAUDE.md Template for New Projects

```markdown
# CLAUDE.md — [Client Name]

## Project Overview

[1-2 sentence description of what we're building]

**Client:** [Name]
**Budget:** [$X or phases]
**Timeline:** [Start Date] → [Target Launch Date]
**Status:** [PLANNING/ACTIVE/REVIEW/REFINEMENT/LAUNCHED]

---

## Scope

### In Scope
- [Deliverable 1]
- [Deliverable 2]
- [Deliverable 3]

### Out of Scope
- [What we're NOT building]

---

## Tech Stack

| Component | Choice | Why |
|-----------|--------|-----|
| Frontend | Next.js App Router | SEO, server components |
| Styling | Tailwind CSS | Fast iteration, consistency |
| Backend | Vercel Edge Functions | Serverless, fast cold starts |
| Database | Supabase | PostgreSQL, RLS, webhooks |
| Deployment | Vercel | Git integration, previews |
| Auth | [Clerk/NextAuth/Custom] | [Reason] |

---

## Project Structure

\`\`\`
[ClientName]/
├── CLAUDE.md (this file)
├── README.md
├── HANDOFF.md
├── ARCHITECTURE.md
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── ...
├── docs/
├── public/
├── package.json
├── .env.example
└── .gitignore
\`\`\`

---

## Key Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| [Question 1] | [Answer] | [Trade-off] |
| [Question 2] | [Answer] | [Trade-off] |

---

## Client Contact

- **Primary Contact:** [Name] — [Email/Phone]
- **Project Manager:** [Marcus or delegated team member]
- **Kickoff Date:** [Date]
- **Expected Launch:** [Date]

---

## Success Metrics

| Metric | Target | How We'll Measure |
|--------|--------|------------------|
| Page Load | <1s | Lighthouse scores |
| Uptime | 99.9% | Monitoring dashboard |
| Mobile Score | >90 | PageSpeed Insights |

---

## Blockers / Risk Log

| Item | Status | Impact | Resolution |
|------|--------|--------|------------|
| [Risk 1] | [Active/Resolved] | [High/Medium/Low] | [Plan] |

---

## Next Checkpoint

- [ ] [Task 1] — Due [Date]
- [ ] [Task 2] — Due [Date]
- [ ] Demo to client — [Date]
```

## Active Projects

### ✅ Task.Ahlian
**Status:** ACTIVE (Phase 1 MVP)
**What:** AI task management dashboard for VSCode
**Timeline:** Apr 5-15, 2026
**See:** `Task.Ahlian/CLAUDE.md`

### ✅ Atrellis_Design_&_Build
**Status:** PLANNING
**What:** Website for design & automation agency
**Timeline:** TBD
**See:** `Atrellis_Design_&_Build/CLAUDE.md`

### 🟡 Karim_Viv
**Status:** PLACEHOLDER (empty)
**Next Step:** Create CLAUDE.md when scope is defined

### 🟡 Renocraft_3D Scanner
**Status:** PLACEHOLDER (empty)
**Next Step:** Create CLAUDE.md when scope is defined

---

## Client Onboarding Checklist

Use this when kicking off a new client project:

- [ ] CLAUDE.md created with project-specific guidance
- [ ] README.md with full scope & tech stack
- [ ] HANDOFF.md with deliverables & timeline
- [ ] Vercel project created & linked to GitHub
- [ ] Supabase project created (if database-backed)
- [ ] Database schema initialized & migrations tracked
- [ ] Environment variables configured (.env.example in repo)
- [ ] GitHub branch protection rules set (main requires PRs)
- [ ] Team access configured (who has what permissions?)
- [ ] Kickoff meeting completed with client
- [ ] Project state updated to ACTIVE
- [ ] First PR created & deployed to preview

---

## Common Questions

**Q: Can we use a different tech stack?**
A: Only if the client requires it. Movara's default is Next.js + Tailwind + Supabase. Deviations require explicit approval.

**Q: Where do design files go?**
A: Client projects may include `/designs/` folder for Figma links, mockups, or design specs. Link to Figma files rather than storing PDFs.

**Q: How do we handle client feedback?**
A: Document in HANDOFF.md under "Client Feedback" section. Update scope if it changes. Don't add scope creep without renegotiating timeline/budget.

**Q: What if we're not finished by the deadline?**
A: Update HANDOFF.md immediately. Communicate timeline changes to client. Deliver working MVP on time, move non-critical features to Phase 2.

---

## Links & Resources

- **Movara AI Playbooks:** `04 Delivery Playbooks/`
- **Proposal Template:** `05 Assets & Templates/Proposal_Template.md`
- **Main CLAUDE.md:** `00_Admin/CLAUDE.md`

---

**Last Updated:** 2026-04-05
**Next Review:** 2026-05-01
