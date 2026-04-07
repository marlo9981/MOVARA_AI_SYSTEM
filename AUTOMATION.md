# CLAUDE.md Automation & Maintenance Guide

This document explains how to keep all CLAUDE.md files organized, up-to-date, and complete across the Movara AI workspace.

---

## Quick Start

### Check Status
```bash
npm run claude:audit
```
Shows which CLAUDE.md files exist and which are stale (>30 days old).

### Initialize Missing Files
```bash
npm run claude:init
```
Creates CLAUDE.md templates for any missing directories.

### Full Check (Audit → Init if needed)
```bash
npm run claude:check
```
Runs audit, and if it fails, creates missing files automatically.

---

## What Gets Automated

### 🔍 **Audit Script** (`scripts/audit-claude-files.js`)

**Checks:**
- ✓ All 8 main directory folders have CLAUDE.md
- ✓ All active client projects have CLAUDE.md
- ✓ Files are updated within last 30 days (warns if stale)

**Runs on:**
- `npm run claude:audit` (manual)
- Every git commit (pre-commit hook)
- Every GitHub Actions push/PR (CI/CD)

**Output Example:**
```
📋 CLAUDE.md Audit Report

🔍 Main Directories:
  ✓ 00_ADMIN — OK (5 days old)
  ✓ 01_STRATEGY — OK (8 days old)
  ✓ 02_SERVICES_AND_PRICING — OK (3 days old)
  ✓ 03_SALES_PROCESS — OK (12 days old)
  ✓ 04_DELIVERY_PLAYBOOKS — OK (10 days old)
  ✓ 05_ASSETS_TEMPLATES — OK (2 days old)
  ✓ 06_METRICS_DASHBOARDS — OK (4 days old)
  ✓ CLIENT_PROJECTS — OK (new)

🔍 Client Projects:
  ✓ Task.Ahlian — OK (1 day old)
  ✓ Atrellis_Design_&_Build — OK (new)

✓ All CLAUDE.md files are present and up to date!
```

### 📝 **Initializer Script** (`scripts/init-claude-files.js`)

**Creates:**
- ✓ Missing CLAUDE.md files with sensible templates
- ✓ Directory structure if needed
- ✓ Skips files that already exist

**Customizes for:**
- Main directories (generic template)
- CLIENT_PROJECTS (special template with project checklist)
- Each client project (project-specific template)

**Runs on:**
- `npm run claude:init` (manual)
- `npm run claude:check` (automatic fallback)

### 🔐 **Pre-Commit Hook** (`.husky/pre-commit`)

**Prevents:**
- Committing with missing CLAUDE.md files
- Committing without running audit first

**Flow:**
```
You run: git commit -m "..."
  ↓
Hook runs: npm run claude:audit
  ↓
If any files missing/stale:
  → Commit BLOCKED
  → Message: "Run npm run claude:init to fix"
  ↓
If all OK:
  → Commit ALLOWED
```

**To setup locally:**
```bash
npm install
npx husky install
```

### ⚙️ **GitHub Actions CI/CD** (`.github/workflows/audit-claude-files.yml`)

**Runs on:**
- Every push to main
- Every pull request
- Any changes to `**/CLAUDE.md` files

**Checks:**
- Audits all CLAUDE.md files
- Fails PR if files missing/stale
- Comments on PR with fix instructions

**Example PR Comment:**
```
⚠️ CLAUDE.md Audit Failed

Run `npm run claude:init` locally to fix missing files.
```

---

## Setting Up Automation

### Option 1: Manual Checks Only

**Good for:** Occasional manual audits, no CI/CD

```bash
npm run claude:audit              # Check status
npm run claude:init               # Fix missing files
```

### Option 2: Pre-Commit Hook (Local)

**Good for:** Prevent bad commits from leaving your machine

```bash
npm install
npx husky install                 # Enable hooks
git commit -m "..."               # Runs audit automatically
```

### Option 3: GitHub Actions (Recommended)

**Good for:** Team-wide enforcement, no setup needed

- Already configured in `.github/workflows/audit-claude-files.yml`
- Runs automatically on all PRs
- No additional setup required (just push to GitHub)

### Option 4: All Three (Full Automation)

**Good for:** Maximum coverage

1. **Local:** Pre-commit hook prevents bad commits
2. **CI/CD:** GitHub Actions blocks bad PRs
3. **Manual:** `npm run claude:audit` for spot-checks

---

## Folder Structure Governed by Automation

The scripts enforce this exact structure:

```
Movara AI/
├── 00_ADMIN/
│   └── CLAUDE.md ✓
├── 01_STRATEGY/
│   └── CLAUDE.md ✓
├── 02_SERVICES_AND_PRICING/
│   └── CLAUDE.md ✓
├── 03_SALES_PROCESS/
│   └── CLAUDE.md ✓
├── 04_DELIVERY_PLAYBOOKS/
│   └── CLAUDE.md ✓
├── 05_ASSETS_TEMPLATES/
│   └── CLAUDE.md ✓
├── 06_METRICS_DASHBOARDS/
│   └── CLAUDE.md ✓
└── CLIENT_PROJECTS/
    ├── CLAUDE.md ✓
    ├── Task.Ahlian/
    │   └── CLAUDE.md ✓
    └── Atrellis_Design_&_Build/
        └── CLAUDE.md ✓
```

### Extra Folders (Not Enforced)

These folders exist but aren't checked:
- `MOVARA_AI_AGENTS/` — Can have CLAUDE.md (optional)
- `agents/` — Can have CLAUDE.md (optional)
- `movara-ai-system/` — Can have CLAUDE.md (optional)

**Note:** These may be old or duplicated structure. Consider documenting their purpose or archiving if unused.

---

## Maintenance Schedule

### Daily
- Pre-commit hook checks before you commit
- Runs automatically (no action needed)

### Per-PR
- GitHub Actions audits automatically
- Blocks PR if files are stale/missing
- Forces fix before merge

### Weekly (Recommended)
```bash
npm run claude:audit              # Spot-check everything
```

### Monthly (Recommended)
- Review and update stale CLAUDE.md files
- Update status, checklist items, timelines
- Edit AUTOMATION.md if procedures change

---

## Customization

### Change the "Stale" Threshold

**Current:** 30 days
**To change:** Edit `audit-claude-files.js`

```javascript
const STALE_DAYS = 30;  // ← Change this number
```

### Add New Required Directories

**To add a folder that must have CLAUDE.md:**

1. Open `scripts/audit-claude-files.js`
2. Add to `REQUIRED_DIRS`:
```javascript
const REQUIRED_DIRS = [
  '00_ADMIN',
  '01_STRATEGY',
  // ... existing entries ...
  'NEW_FOLDER_NAME',  // ← Add here
];
```
3. Run `npm run claude:init` to create the file
4. Run `npm run claude:audit` to verify
5. Commit changes

### Add New Client Projects

**To add a new client folder:**

1. Open `scripts/init-claude-files.js`
2. Add to `CLIENT_PROJECT_DIRS`:
```javascript
const CLIENT_PROJECT_DIRS = [
  'Task.Ahlian',
  'Atrellis_Design_&_Build',
  'NEW_CLIENT_NAME',  // ← Add here
];
```
3. Run `npm run claude:init` to create the file
4. Run `npm run claude:audit` to verify
5. Commit changes

---

## Troubleshooting

### "Pre-commit hook failed"

**Error:** Git commit blocked by audit

**Fix:**
```bash
npm run claude:init     # Create missing files
npm run claude:audit    # Verify they exist
git add -A              # Stage the new files
git commit -m "..."     # Try commit again
```

### "GitHub Actions failed"

**Error:** PR blocked because CLAUDE.md missing or stale

**Fix (same as above):**
```bash
npm run claude:init
npm run claude:audit
git add -A
git commit -m "..."
git push
```

### "Scripts won't run"

**Error:** `node scripts/audit-claude-files.js` not found

**Fix:**
```bash
npm install             # Make sure scripts are installed
npm run claude:audit    # Use npm script instead of node directly
```

---

## When to Update CLAUDE.md Files

You **should update** the CLAUDE.md file when:

- ✓ Project status changes (PLANNING → ACTIVE → LAUNCHED)
- ✓ Tech stack changes (e.g., switching from Firebase to Supabase)
- ✓ Team or process changes
- ✓ New client projects are added
- ✓ Procedures or standards change

You **should NOT update** just to bump the date:

- ✗ Don't edit the file just to mark it "recent"
- ✗ Don't add empty "Updated: [date]" lines
- ✗ Only edit when content actually changes

---

## Integration with Task.Ahlian Build

If you're building the Task.Ahlian web app, you can integrate CLAUDE.md audits into its CI/CD pipeline:

```json
{
  "scripts": {
    "build": "npm run claude:audit && next build",
    "deploy": "npm run claude:audit && vercel deploy"
  }
}
```

This ensures every build validates the parent workspace structure.

---

## Related Documents

- **[00_ADMIN/CLAUDE.md](00_ADMIN/CLAUDE.md)** — Main workspace guidelines
- **[CLIENT_PROJECTS/CLAUDE.md](CLIENT_PROJECTS/CLAUDE.md)** — Client project standards
- **[scripts/audit-claude-files.js](scripts/audit-claude-files.js)** — Audit logic
- **[scripts/init-claude-files.js](scripts/init-claude-files.js)** — Template logic
- **[.github/workflows/audit-claude-files.yml](.github/workflows/audit-claude-files.yml)** — CI/CD config

---

**Last Updated:** 2026-04-05
**Status:** Automation Ready ✓
