# Task.Ahlian — Folder Structure Summary

**For:** Marcus (Movara AI founder)  
**Date:** Apr 5 2026  
**Purpose:** Clean, scalable architecture for Phase 1 → Phase 3

---

## The Problem We're Solving

Task.Ahlian needs a structure that:
1. Separates concerns cleanly (routes, logic, UI, database)
2. Scales from Phase 1 (manual entry) → Phase 2 (Telegram capture) → Phase 3 (advanced)
3. Deploys easily to Vercel (no separate bot server)
4. Keeps code maintainable (not a tangled mess)

---

## The Solution: Three-Layer Monorepo

```
Task.Ahlian/
├── supabase/           ← Database schema (migrations)
├── apps/web/           ← Next.js dashboard + API routes
├── apps/bot/           ← Bot logic (used by cron job)
└── packages/shared/    ← Types & constants (imported by web + bot)
```

### Why This Structure?

| Layer | Purpose | Scales? |
|---|---|---|
| `supabase/` | Single source of truth for database | Yes — migrations grow over time |
| `apps/web/` | User-facing dashboard + API backend | Yes — add auth, add routes, no refactor |
| `apps/bot/` | Reusable bot services (recap, telegram) | Yes — add new bot features, use in Phase 2 |
| `packages/shared/` | Types used by both web + bot | Yes — no import cycles, clear boundaries |

---

## What Goes Where: Quick Reference

| File/Folder | Location | Responsibility |
|---|---|---|
| Database schema | `supabase/migrations/*.sql` | Define tables, indexes, RLS policies |
| API routes (GET, POST, PATCH, DELETE) | `apps/web/app/api/` | Parse HTTP, call services, return JSON |
| React components (dumb UI) | `apps/web/components/ui/` | Buttons, inputs, cards — no logic |
| Smart components (forms, lists) | `apps/web/components/features/` | Use hooks, handle user interactions |
| React hooks (fetch, state) | `apps/web/hooks/` | `useTaskQuery`, `useTaskMutation` |
| Supabase connection | `apps/web/lib/supabase/` | Client setup (hidden from routes/components) |
| HTTP client helpers | `apps/web/lib/api.ts` | `fetch()` wrappers |
| TypeScript types | `packages/shared/src/types/` | Task, TaskStatus, Telegram types |
| Business logic (recap generation) | `apps/bot/src/services/` | Pure functions, no side effects |
| External API wrappers | `apps/bot/src/services/` | Telegram, Supabase calls |
| Cron job (9am recap) | `apps/web/app/api/cron/recap.ts` | Orchestrate: fetch → generate → send |

---

## Phase 1 Build Order (What to Create First)

**Week 1: Database + Manual Entry + Telegram Recap**

1. **Database** (supabase/)
   - ✅ `001_init_tasks.sql` — tasks table with status/priority
   - ✅ `002_init_logs.sql` — activity log for audit trail

2. **Web API** (apps/web/app/api/)
   - ✅ `tasks/route.ts` — GET all tasks, POST new task
   - ✅ `tasks/[id]/route.ts` — PATCH status, DELETE task
   - ✅ `cron/recap.ts` — Called by Vercel at 9am

3. **Types & Helpers** (packages/shared + apps/web/lib/)
   - ✅ `packages/shared/src/types/task.ts` — Task interface
   - ✅ `apps/web/lib/types.ts` — API response wrappers
   - ✅ `apps/web/lib/supabase/client.ts` — Browser client
   - ✅ `apps/web/lib/supabase/server.ts` — Server client

4. **Web Dashboard** (apps/web/app/ + components/ + hooks/)
   - ✅ `app/page.tsx` — Dashboard entry point
   - ✅ `hooks/useTaskQuery.ts` — Fetch tasks on load
   - ✅ `components/TaskForm.tsx` — Manual task input
   - ✅ `components/TaskTable.tsx` — List with inline edits

5. **Bot Services** (apps/bot/src/services/)
   - ✅ `telegram.service.ts` — Send Telegram messages
   - ✅ `recap.service.ts` — Generate recap text

6. **Deploy**
   - ✅ Vercel (web dashboard + cron job)
   - ✅ `.env.example` with all secrets
   - ✅ `vercel.json` with cron schedule

**Estimated time:** 8-12 hours with focus

---

## How It Works: Data Flow

```
User adds task in web app (TaskForm)
  ↓
POST /api/tasks
  ↓
Supabase inserts into tasks table
  ↓
API returns new task (optimistic update)
  ↓
Dashboard re-renders (refetch)
  ↓
User sees task in table immediately

---

Every day at 9am:
  ↓
Vercel triggers GET /api/cron/recap
  ↓
Cron route fetches all tasks from Supabase
  ↓
Bot service generates recap string
  ↓
Telegram service sends message to chat
  ↓
Marcus sees recap in Telegram at 9am
```

---

## Key Design Principles

### 1. Separation of Concerns
- **Routes** parse HTTP → call services → return JSON (thin)
- **Services** contain logic → no HTTP knowledge (pure functions)
- **Components** render UI → no API calls (use hooks)
- **Hooks** fetch data → manage state → pass to components
- **Supabase** hidden behind `lib/supabase/` (easy to swap)

### 2. Single Responsibility
Each file does ONE thing:
- `TaskForm.tsx` → Only renders input form
- `useTaskQuery.ts` → Only fetches tasks
- `tasks/route.ts` → Only handles GET/POST for /api/tasks
- `recap.service.ts` → Only formats recap text

### 3. Zero Import Cycles
```
✅ Good: web → shared, bot → shared
❌ Bad: web ← bot, bot ← web
```

Always flow imports one direction. Shared types have ZERO dependencies.

### 4. Scalability Pattern
Adding Phase 2 features (Telegram capture, auth, team collaboration) requires:
- New routes? Add to `apps/web/app/api/`
- New components? Add to `apps/web/components/`
- New services? Add to `apps/bot/src/services/`
- New database tables? Add migration to `supabase/migrations/`

**No refactoring of existing code.**

---

## Anti-Patterns to Avoid

### ❌ Don't: Mix database calls and UI
```typescript
// BAD: component doing its own DB queries
export function TaskCard() {
  const [task, setTask] = useState(null);
  useEffect(() => {
    supabase.from('tasks').select().then(setTask); // Direct DB
  }, []);
}
```

**Good:** Use hook layer
```typescript
export function TaskCard({ task }) { /* just render */ }
export function useTaskQuery() { /* fetch here */ }
```

### ❌ Don't: Put business logic in routes
```typescript
// BAD: route doing filtering/formatting
export async function GET() {
  const tasks = await supabase.from('tasks').select();
  const filtered = tasks.filter(t => t.priority === 'high');
  const sorted = filtered.sort(/* logic */);
  return Response.json(sorted);
}
```

**Good:** Move logic to service
```typescript
// route (thin)
export async function GET() {
  const tasks = await supabase.from('tasks').select();
  return Response.json({ tasks });
}

// service (logic)
export function filterByPriority(tasks, priority) {
  return tasks.filter(t => t.priority === priority);
}
```

### ❌ Don't: Make Supabase decisions at component level
```typescript
// BAD: component choosing auth strategy
export function Dashboard() {
  if (user.isAdmin) { /* ... */ }
}
```

**Good:** Hide at service layer
```typescript
// service
export async function getTasksForUser(userId, supabase) {
  return supabase.from('tasks').select().eq('user_id', userId);
}

// component just renders what service gives it
export function Dashboard({ tasks }) { /* ... */ }
```

---

## From Phase 1 → Phase 2: What Changes?

### Phase 2: Telegram Capture + Auth + Team

**New files needed:**
```
apps/web/
├── app/api/telegram/webhook.ts  ← Receive Telegram messages
├── middleware.ts                ← Check auth (new)
└── app/(app)/                   ← Protected routes (new)

apps/bot/
├── src/services/parser.ts       ← AI task extraction (new)
└── src/services/capture.ts      ← Process Telegram → task (new)

packages/shared/
└── src/types/user.ts            ← User, Team types (new)

supabase/
├── migrations/003_init_auth.sql ← User + team tables (new)
└── migrations/004_init_rlp.sql  ← Row-level security (new)
```

**Files that DON'T change:**
- `TaskForm.tsx` (still works for manual entry)
- `TaskTable.tsx` (still displays tasks)
- `recap.service.ts` (still generates recap)
- Database schema (`tasks` + `logs` tables stay as-is)

This is the benefit of clean separation: **Phase 2 adds new features without refactoring Phase 1 code.**

---

## Deployment Checklist

### Local Development
```bash
pnpm install                    # Install all workspaces
pnpm dev:web                    # Start Next.js on :3000
# Test: http://localhost:3000
```

### Vercel Deployment
```bash
cd apps/web
vercel link                      # Link to Vercel project
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add TELEGRAM_BOT_TOKEN
vercel env add TELEGRAM_CHAT_ID
vercel env add VERCEL_CRON_SECRET

vercel --prod                    # Deploy to production
# Test: https://your-app.vercel.app
```

### Cron Configuration
- Edit `apps/web/vercel.json`
- Set `"schedule": "0 9 * * *"` for 9am daily
- Deploy again after editing `vercel.json`
- Test: `curl -H "Authorization: Bearer SECRET" https://your-app.vercel.app/api/cron/recap`

---

## Files to Create First (Exact Order)

**Day 1: Foundation (2 hours)**
1. `supabase/migrations/001_init_tasks.sql`
2. `supabase/migrations/002_init_logs.sql`
3. `packages/shared/src/types/task.ts`
4. `apps/web/.env.local` (copy from `.env.example`)
5. `apps/web/lib/supabase/client.ts`
6. `apps/web/lib/supabase/server.ts`

**Day 2: API Routes (2 hours)**
7. `apps/web/app/api/tasks/route.ts`
8. `apps/web/app/api/tasks/[id]/route.ts`
9. `apps/web/app/api/cron/recap.ts`

**Day 3: Web UI (3 hours)**
10. `apps/web/hooks/useTaskQuery.ts`
11. `apps/web/components/TaskForm.tsx`
12. `apps/web/components/TaskTable.tsx`
13. `apps/web/app/page.tsx`

**Day 4: Bot + Deploy (2 hours)**
14. `apps/bot/src/services/telegram.service.ts`
15. `apps/bot/src/services/recap.service.ts`
16. `apps/web/vercel.json` (cron config)
17. Deploy to Vercel

**Total: ~9 hours solo, or 4-5 hours with 2 people (one on web, one on bot)**

---

## Quick Command Reference

```bash
# Setup
pnpm install

# Development
pnpm dev:web              # Next.js on :3000
curl http://localhost:3000

# Database (local)
supabase migration up
supabase db push

# Testing (Phase 1)
curl http://localhost:3000/api/tasks
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Test task","priority":"high"}'

# Deploy
cd apps/web
vercel --prod

# Check cron manually
curl -H "Authorization: Bearer YOUR_SECRET" \
  https://your-vercel-app.vercel.app/api/cron/recap
```

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                      TASK.AHLIAN                             │
└─────────────────────────────────────────────────────────────┘

         ┌──────────────┐
         │  Web Browser │
         └──────┬───────┘
                │
         ┌──────▼────────────────────┐
         │   Next.js Dashboard       │
         │  (apps/web/app/page.tsx)  │
         └──────┬──────────┬─────────┘
                │          │
         ┌──────▼─┐   ┌────▼────────────┐
         │ TaskForm │  │  TaskTable      │
         └──────┬──┘   └────┬───────────┘
                │           │
         ┌──────▼───────────▼──────────┐
         │  React Hooks (useTaskQuery) │
         └──────┬──────────────────────┘
                │
         ┌──────▼──────────────────────┐
         │   API Routes (/api/tasks)   │
         │  (apps/web/app/api/)        │
         └──────┬──────────────────────┘
                │
         ┌──────▼──────────────────────┐
         │   Supabase Client           │
         │  (apps/web/lib/supabase/)   │
         └──────┬──────────────────────┘
                │
         ┌──────▼──────────────────────┐
         │   Supabase Database         │
         │  (tasks + logs tables)      │
         └─────────────────────────────┘


         ┌──────────────────────────┐
         │  Vercel Cron (9am daily) │
         └──────┬───────────────────┘
                │
         ┌──────▼───────────────────────┐
         │ /api/cron/recap              │
         │ (apps/web/app/api/cron/)     │
         └──────┬──────────────────────┘
                │
         ┌──────▼───────────────────────┐
         │ Bot Services                 │
         │ (apps/bot/src/services/)     │
         │ - recap.service.ts           │
         │ - telegram.service.ts        │
         └──────┬──────────────────────┘
                │
         ┌──────▼──────────────────────┐
         │   Telegram API              │
         │   (sends 9am recap)         │
         └──────────────────────────────┘
```

---

## Success Metrics (Phase 1)

- [ ] Dashboard loads in <1 second
- [ ] Task creation works (immediate optimistic update)
- [ ] Status/priority updates work
- [ ] Delete works
- [ ] Telegram recap arrives at 9am within 1 minute
- [ ] Code is < 5 minutes to understand for a new dev
- [ ] No circular imports
- [ ] No database calls in components
- [ ] No business logic in routes

---

## Next: Read These Files in Order

1. **ARCHITECTURE.md** — Full technical details
2. **SETUP_PHASE1.md** — Step-by-step implementation
3. **CLAUDE.md** (original) — Product vision

Then build in order from SETUP_PHASE1.md.

---

**Status:** Ready to build. 8-12 hours to Phase 1 complete (MVP).
