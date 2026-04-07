# Workspace Rules — Movara AI

Operational governance for the Movara AI workspace. Complements CLAUDE.md with detailed rules for naming, structure, and change management.

---

## Naming Conventions

### Folders
- **Agency folders**: numbered prefix + descriptive name (e.g., `01_STRATEGY`)
- **Canonical format**: underscore separators, no spaces, no special characters
- All agency folders now use canonical names (e.g., `01_STRATEGY`, `02_SERVICES_AND_PRICING`).
- **Client project folders**: `CLIENT_PROJECTS/[ClientName]` — use PascalCase or underscores, no special characters except underscores

### Files
- **Documentation**: UPPER_SNAKE_CASE with `.md` extension (e.g., `BUSINESS_PLAN.md`)
- **Code files**: standard framework conventions (camelCase for TS/JS, kebab-case for CSS)
- **Config files**: lowercase with dots (e.g., `next.config.ts`, `postcss.config.mjs`)
- **System files**: UPPER_SNAKE_CASE (e.g., `CLAUDE.md`, `README.md`, `NOTES.md`)

### Stability Rule
Do not rename files or folders that are referenced by:
- Automation scripts (`scripts/audit-claude-files.js`, `scripts/init-claude-files.js`)
- Other documents (cross-references, links)
- CI/CD workflows (`.github/workflows/`)
- Import statements in code

If a rename is necessary, update all references in the same operation.

---

## When to Create

### New Folder
- Only within an existing numbered folder (00-06) or CLIENT_PROJECTS
- New top-level folders require explicit approval
- New client projects follow the onboarding checklist in `CLIENT_PROJECTS/CLAUDE.md`

### New File
- When a topic has no existing doc that covers it
- When an existing doc has grown too large and needs splitting
- Always check for existing files first — update in place when possible

### New CLAUDE.md
- Every significant folder should have one
- Use `npm run claude:init` to generate from templates
- Follow the inheritance model defined in root CLAUDE.md

---

## When to Archive

- When a doc is superseded by a newer version
- When a project is completed and handed off
- When content is outdated but may have historical value

### Archive Process
1. Move the file to `_archive/` subfolder within its current directory (or `99_ARCHIVE/` at top level)
2. Do not delete the original — move it
3. Add a date prefix if helpful (e.g., `2026-04_OLD_PRICING.md`)
4. Update any cross-references that pointed to the archived file

---

## When to Merge

- When two documents cover the same topic with overlapping content
- When a folder has grown fragmented with many small files that logically belong together
- Prefer the file with the more stable, established name as the merge target

---

## Document Pattern

Every significant folder should maintain:

| File | Purpose | Required |
|------|---------|----------|
| CLAUDE.md | AI governance rules for this folder | Yes |
| README.md | Human-readable overview | Recommended |
| NOTES.md | Scratch notes, working thoughts | Optional |
| Source-of-truth doc | Primary content file for the folder | Yes |

The source-of-truth doc varies by folder (e.g., `SERVICE_CATALOG.md` in Services, `BUSINESS_PLAN.md` in Strategy).

---

## Anti-Churn Rules

1. **Don't reorganize for aesthetics.** Changes must have clear operational value.
2. **Don't create files that duplicate existing content.** Check first.
3. **Don't split docs that work fine as single files.** Splitting adds navigation overhead.
4. **Don't rename stable files.** Renames break references and automation.
5. **Don't create empty stub files.** Only create when there's content to put in them.
6. **Don't flatten project-specific structures into generic agency docs.** Atrellis and other client projects keep their own internal organization.

---

## Agent Folder Rules

The `agents/` directory contains 30+ AI agent definitions across 7 departments:
- CONSULTING, CONTENT, DESIGN, ENGINEERING, MARKETING, OPERATIONS, PRODUCT

Each department has a `_README.md` explaining its agents. When adding new agents:
- Place in the correct department subfolder
- Follow the existing agent definition format
- Update the department `_README.md`
- Do not create new department folders without approval

The `MOVARA_AI_AGENTS/` folder contains system-level documentation about the agent architecture.

---

Last Updated: April 7, 2026
