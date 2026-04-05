# Task.Ahlian — Architecture Handoff Complete

**From:** Claude Code (AI Architect)  
**To:** Marcus (Builder)  
**Date:** Apr 5 2026, 8:22 AM  
**Status:** Ready for Phase 1 implementation

---

## What Was Designed

**Complete folder structure + architecture for Task.Ahlian** — a three-layer Next.js + Supabase + Telegram task management system.

**Design includes:**
1. Clean separation of concerns (routes → services → UI)
2. Monorepo structure (web app + bot + shared types)
3. Scalability path (Phase 1 → Phase 2 → Phase 3)
4. Implementation guide (step-by-step code)
5. Deployment strategy (Vercel + Supabase)

---

## Documents Created

### Read in This Order

1. **README.md** (NEW)
   - Overview of the whole system
   - Quick start instructions
   - FAQ + troubleshooting
   - **START HERE**

2. **QUICK_REFERENCE.md** (NEW)
   - One-page cheat sheet
   - Decision tree ("where does this code go?")
   - Common commands
   - Phase 1 checklist
   - **Keep this open while coding**

3. **ARCHITECTURE.md** (NEW)
   - Complete folder tree with annotations
   - Layer responsibilities (what each layer owns)
   - Design patterns by layer
   - Specific file placements
   - Anti-patterns to avoid
   - **Read for understanding**

4. **SETUP_PHASE1.md** (NEW)
   - Step-by-step implementation guide
   - Code snippets for all Phase 1 files
   - Database migrations
   - API routes
   - React components
   - Telegram bot setup
   - Deployment instructions
   - **Follow this exactly**

5. **STRUCTURE_SUMMARY.md** (NEW)
   - Design rationale
   - Why this structure scales
   - How to evolve Phase 1 → Phase 2
   - Detailed examples
   - **Reference when extending**

6. **FOLDER_INIT.sh** (NEW)
   - Bash script to create all folders
   - Creates package.json files
   - Creates tsconfig files
   - Creates config files (tailwind, next.config, etc.)
   - **Run once: `bash FOLDER_INIT.sh`**

7. **.env.example** (NEW)
   - All environment variables documented
   - Instructions for where to get each value
   - **Copy to `.env.local` and fill in**

8. **CLAUDE.md** (EXISTING)
   - Original product vision
   - Still valid, but scope adjusted for Phase 1
   - Useful context

---

## The Architecture (TL;DR)

### Folder Structure
```
supabase/migrations/         ← Database
apps/web/                    ← Dashboard + API
apps/bot/                    ← Bot services
packages/shared/             ← Types (no dependencies)
```

### Data Flow
```
User adds task in web dashboard
  ↓
POST /api/tasks (thin route)
  ↓
Supabase inserts into tasks table
  ↓
Dashboard refetches via useTaskQuery hook
  ↓
User sees task immediately

Every day at 9am:
  ↓
Vercel calls GET /api/cron/recap
  ↓
Route fetches tasks + calls bot service
  ↓
Bot generates recap string
  ↓
Telegram message sent to chat
```

### Key Principles
1. **Routes are thin** (parse → query → return)
2. **Services have logic** (business rules, pure functions)
3. **Components are dumb** (just render, use hooks)
4. **Hooks manage state** (fetch on load, refetch)
5. **Supabase is hidden** (behind lib/supabase/)
6. **No circular imports** (web → shared, bot → shared)

---

## Phase 1 Implementation Plan

**Timeline:** Apr 5-8 (4 days to MVP)

### Day 1: Database (2 hours)
- Create Supabase project
- Write 2 migrations (tasks + logs tables)
- Apply locally
- Test with Supabase UI

### Day 2: API Routes (2 hours)
- Setup Supabase client + server clients
- Write 3 API routes (GET, POST, PATCH/DELETE, cron)
- Test with curl

### Day 3: Dashboard (3 hours)
- Write hook (useTaskQuery)
- Write components (TaskForm, TaskTable)
- Write page (page.tsx)
- Test locally

### Day 4: Telegram + Deploy (2 hours)
- Write bot services (telegram, recap)
- Setup vercel.json for cron
- Deploy to Vercel
- Test at 9am (or manually curl)

**Total: ~9 hours of focused work**

---

## Files to Create (in order)

See SETUP_PHASE1.md for complete code for all of these:

### Database (2 files)
1. `supabase/migrations/001_init_tasks.sql`
2. `supabase/migrations/002_init_logs.sql`

### Web API (3 files)
3. `apps/web/lib/supabase/client.ts`
4. `apps/web/lib/supabase/server.ts`
5. `apps/web/app/api/tasks/route.ts`
6. `apps/web/app/api/tasks/[id]/route.ts`
7. `apps/web/app/api/cron/recap.ts`

### Web UI (4 files)
8. `apps/web/hooks/useTaskQuery.ts`
9. `apps/web/components/features/TaskForm.tsx`
10. `apps/web/components/features/TaskTable.tsx`
11. `apps/web/app/page.tsx`

### Bot (2 files)
12. `apps/bot/src/services/telegram.service.ts`
13. `apps/bot/src/services/recap.service.ts`

### Config (1 file)
14. `apps/web/vercel.json` (cron schedule)

**That's it for Phase 1. Copy code snippets from SETUP_PHASE1.md.**

---

## What NOT to Do

### ❌ Don't Mix Layers
- Don't call Supabase directly from components
- Don't put business logic in routes
- Don't import bot code into web components

### ❌ Don't Over-Complicate
- Phase 1 has NO auth (add in Phase 2)
- Phase 1 has NO team features (add in Phase 2)
- Phase 1 has NO parser (add in Phase 2)
- Phase 1 is single-user, manual entry only

### ❌ Don't Create Circular Dependencies
- web imports from shared ✅
- bot imports from shared ✅
- web imports from bot ❌
- shared imports from web ❌

---

## Success Checklist

When Phase 1 is done, you should have:

- [ ] Supabase project with tasks + logs tables
- [ ] Web dashboard on localhost:3000
  - [ ] Can add tasks via form
  - [ ] Tasks appear in table
  - [ ] Can change status/priority inline
  - [ ] Can delete tasks
- [ ] API routes working
  - [ ] `GET /api/tasks` returns tasks
  - [ ] `POST /api/tasks` creates new task
  - [ ] `PATCH /api/tasks/[id]` updates status
  - [ ] `DELETE /api/tasks/[id]` deletes task
- [ ] Telegram bot configured
  - [ ] Bot token from @BotFather
  - [ ] Chat ID known
  - [ ] Recap service generates text
- [ ] Deployed to Vercel
  - [ ] Dashboard live at vercel URL
  - [ ] Environment variables set
  - [ ] Cron job configured in vercel.json
- [ ] Cron job works
  - [ ] Telegram message arrives at 9am (or test manually)
  - [ ] Recap shows done/pending/urgent counts

---

## What I Designed, You'll Implement

**Me:**
- Folder structure
- Layer responsibilities
- Design patterns
- File placement
- Architecture decisions

**You:**
- Copy code from SETUP_PHASE1.md
- Create files in right folders
- Fill in Supabase credentials
- Test locally
- Deploy to Vercel
- Verify at 9am

---

## If You Get Stuck

### Layer Confusion
→ Re-read QUICK_REFERENCE.md "What Goes Where" decision tree

### Code Questions
→ Check SETUP_PHASE1.md (has full code examples)

### Design Questions
→ Check ARCHITECTURE.md (explains why each layer exists)

### Deployment Questions
→ Check SETUP_PHASE1.md "Deploy to Vercel" section

### General Architecture Questions
→ Check STRUCTURE_SUMMARY.md "Key Principles"

---

## How This Scales

### From Phase 1 → Phase 2
Add new features WITHOUT refactoring:
- New auth middleware? Add to `apps/web/middleware.ts` (new file)
- New Telegram webhook? Add to `apps/web/app/api/telegram/` (new route)
- New parser service? Add to `apps/bot/src/services/parser.ts` (new service)
- New User table? Add migration to `supabase/migrations/` (new file)

**Existing code stays the same.** This is the benefit of clean layers.

### Phase 2 Roadmap
- [ ] User authentication (middleware.ts)
- [ ] Telegram bot for capture (/api/telegram/webhook.ts)
- [ ] AI parser (apps/bot/src/services/parser.ts)
- [ ] Team collaboration (user + team tables in migrations)

### Phase 3 Roadmap
- [ ] Analytics dashboard
- [ ] Advanced reporting
- [ ] API for integrations
- [ ] Self-hosting

---

## You're Ready When

✅ You've read README.md and QUICK_REFERENCE.md  
✅ You understand why each folder exists  
✅ You can answer "where does this code go?" for 10 random scenarios  
✅ You can explain the data flow from adding a task to Telegram recap  
✅ You're ready to copy code from SETUP_PHASE1.md

---

## Timeline

**Today (Apr 5):**
- Read README.md + QUICK_REFERENCE.md (30 min)
- Read ARCHITECTURE.md (30 min)
- Skim SETUP_PHASE1.md (15 min)

**Tomorrow (Apr 6):**
- Start building: Database + API (4 hours)

**Apr 7:**
- Dashboard UI (3 hours)

**Apr 8:**
- Telegram + Deploy (2 hours)

**Apr 8 at 9am:**
- Watch for Telegram recap message
- MVP complete!

---

## Next Immediate Step

1. Open `/Users/marcus/Library/CloudStorage/GoogleDrive-marcuseden777@gmail.com/My Drive/_MARCUS_MASTER_SYSTEM/Movara AI/CLIENT_PROJECTS/Task.Ahlian/README.md`

2. Follow "How to Get Started" section:
   - Read QUICK_REFERENCE.md
   - Read ARCHITECTURE.md
   - Run `bash FOLDER_INIT.sh`
   - Follow SETUP_PHASE1.md

---

**The architecture is locked. The path is clear. Let's build.**

Questions? Check the docs. They have answers.

---

**Handoff complete. Phase 1 ready for implementation.**
