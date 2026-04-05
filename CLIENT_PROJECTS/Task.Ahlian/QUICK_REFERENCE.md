# Task.Ahlian — Quick Reference Card

**Keep this open while building Phase 1.**

---

## Folder Tree at a Glance

```
supabase/migrations/          ← Database schema
  001_init_tasks.sql
  002_init_logs.sql

src/web/
  app/
    dashboard/page.tsx        ← Premium Dashboard
    api/
      tasks/route.ts          ← GET/POST /api/tasks
      tasks/[id]/route.ts     ← PATCH/DELETE /api/tasks/[id]
      telegram/route.ts       ← Bot messaging + Cron logic
  components/
    dashboard/
      Sidebar.tsx             ← Premium Sidebar
      Metrics.tsx             ← Premium Charts
      TaskManager.tsx         ← Timeline Task List
      Inbox.tsx               ← Premium Chat UI
  lib/
    supabase/
      client.ts               ← Browser client
      server.ts               ← Server client
    types.ts                  ← Task, ApiResponse types

.env.example                  ← All required secrets (copy to .env.local)
```

---

## What Goes Where: Decision Tree

**"Where do I put this code?"**

```
Is it a database schema?
  → supabase/migrations/*.sql

Is it an HTTP endpoint?
  → src/web/app/api/...route.ts

Is it a React component (UI)?
  → src/web/components/dashboard/...tsx

Is it a service or utility?
  → src/web/lib/...ts

Is it a TypeScript type?
  → src/web/lib/types.ts

Is it a secret or config?
  → .env.example (then .env.local)
```

---

## The Three Patterns to Know

### 1. Fetch + Display (Client Component)

```typescript
// hooks/useTaskQuery.ts — Fetch on load
export function useTaskQuery() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    fetch('/api/tasks')
      .then(r => r.json())
      .then(d => setTasks(d.tasks));
  }, []);
  return { tasks };
}

// components/TaskTable.tsx — Just render
export function TaskTable({ tasks }: { tasks: Task[] }) {
  return <table>{tasks.map(t => <tr key={t.id}>...)}</table>;
}

// app/page.tsx — Wire together
export default function Dashboard() {
  const { tasks } = useTaskQuery();
  return <TaskTable tasks={tasks} />;
}
```

### 2. API Route (Thin Handler)

```typescript
// app/api/tasks/route.ts
export async function POST(req: Request) {
  const { title, priority } = await req.json();
  
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from('tasks')
    .insert([{ title, priority, status: 'pending' }])
    .select()
    .single();
  
  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({ task: data }, { status: 201 });
}
```

### 3. Service (Business Logic)

```typescript
// apps/bot/src/services/recap.service.ts — Pure function
export function generateRecap(tasks: Task[]): string {
  const done = tasks.filter(t => t.status === 'done').length;
  const pending = tasks.filter(t => t.status === 'pending').length;
  return `✅ Done: ${done}\n📋 Pending: ${pending}`;
}

// Called from cron route
const recap = generateRecap(tasks);
```

---

## Phase 1 Checklist

### Day 1: Database
- [ ] `supabase/migrations/001_init_tasks.sql`
  - tasks table (id, title, status, priority, due_date, created_at, updated_at)
  - RLS allow all (Phase 1)
  - Indexes on status, priority
- [ ] `supabase/migrations/002_init_logs.sql`
  - logs table (id, task_id, action, new_value, created_at)
  - RLS allow all
- [ ] `supabase migration up` (test locally)

### Day 2: API Routes
- [ ] `apps/web/.env.local` (fill in Supabase URL + keys)
- [ ] `apps/web/lib/supabase/client.ts` (createBrowserClient)
- [ ] `apps/web/lib/supabase/server.ts` (createServerClient)
- [ ] `apps/web/lib/types.ts` (Task interface, ApiResponse)
- [ ] `apps/web/app/api/tasks/route.ts` (GET, POST)
- [ ] `apps/web/app/api/tasks/[id]/route.ts` (PATCH, DELETE)
- [ ] Test: `curl http://localhost:3000/api/tasks`

### Day 3: Dashboard
- [ ] `apps/web/hooks/useTaskQuery.ts`
- [ ] `apps/web/components/features/TaskForm.tsx`
- [ ] `apps/web/components/features/TaskTable.tsx`
- [ ] `apps/web/app/page.tsx`
- [ ] Test: Add task via form, see in table

### Day 4: Telegram + Cron
- [ ] Get bot token from @BotFather
- [ ] `apps/bot/src/services/telegram.service.ts`
- [ ] `apps/bot/src/services/recap.service.ts`
- [ ] `apps/web/app/api/cron/recap.ts`
- [ ] `apps/web/vercel.json` (cron schedule)
- [ ] `.env.example` (all secrets documented)
- [ ] Test: `curl -H "Authorization: Bearer SECRET" http://localhost:3000/api/cron/recap`

### Day 5: Deploy
- [ ] `vercel link` (link to Vercel project)
- [ ] `vercel env add NEXT_PUBLIC_SUPABASE_URL`
- [ ] `vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] `vercel env add SUPABASE_SERVICE_ROLE_KEY`
- [ ] `vercel env add TELEGRAM_BOT_TOKEN`
- [ ] `vercel env add TELEGRAM_CHAT_ID`
- [ ] `vercel env add VERCEL_CRON_SECRET`
- [ ] `vercel --prod` (deploy to production)
- [ ] Wait 1 minute for cron at 9am, check Telegram

---

## Common Commands

```bash
# Development
pnpm install
pnpm dev:web                      # Start Next.js on :3000

# Database
supabase link --project-id YOUR_ID
supabase migration up             # Apply migrations locally

# Testing
curl http://localhost:3000/api/tasks
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","priority":"high"}'

# Deploy
cd apps/web
vercel --prod

# Test cron
curl -H "Authorization: Bearer YOUR_SECRET" \
  https://your-app.vercel.app/api/cron/recap
```

---

## Environment Variables (Copy to .env.local)

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# Telegram
TELEGRAM_BOT_TOKEN=123456:ABC...
TELEGRAM_CHAT_ID=123456789

# Vercel Cron
VERCEL_CRON_SECRET=random-secret
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Tasks don't save | Check SUPABASE_SERVICE_ROLE_KEY in .env.local |
| Components don't fetch tasks | Check `/api/tasks` returns `{ tasks: [...] }` |
| Telegram message not sent | Verify bot token: `curl https://api.telegram.org/botTOKEN/getMe` |
| Cron job doesn't run | Check `vercel.json` exists in `apps/web/`, check cron logs in Vercel dashboard |
| Type errors | Run `pnpm type-check` in each workspace |
| Can't fetch Supabase | Check RLS policies allow all (Phase 1 only) |

---

## One-Minute Explainer

**Task.Ahlian** is a task dashboard for Marcus:

1. **Web Dashboard** (Next.js)
   - Manual task entry form
   - Table showing all tasks
   - Status/priority inline edits
   - Deployed to Vercel

2. **Database** (Supabase)
   - `tasks` table (title, status, priority, due_date)
   - `logs` table (audit trail)
   - Migrations in `supabase/migrations/`

3. **Telegram Recap** (Cron job)
   - Every day at 9am
   - Vercel calls `/api/cron/recap`
   - Bot generates recap (X done, Y pending, Z urgent)
   - Sends to Telegram chat
   - Marcus sees summary in Telegram

**Stack:**
- Frontend: React (Next.js 16) + Tailwind
- Backend: Vercel (serverless) + Supabase (Postgres)
- Bot: Telegram API
- Deployment: Vercel (web + cron)

**Code layers:**
- Routes (thin) → Services (logic) → UI (components)
- Hooks (state) → Components (render)
- Supabase (hidden) → Services (use it)

---

## Next: Read Full Docs

1. **ARCHITECTURE.md** — Technical deep dive
2. **SETUP_PHASE1.md** — Step-by-step guide
3. **STRUCTURE_SUMMARY.md** — Design principles

Then follow SETUP_PHASE1.md exactly to build.

---

**Save this card. You'll reference it constantly during Phase 1 build.**
