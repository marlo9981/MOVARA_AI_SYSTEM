# Task.Ahlian — Folder Structure & Architecture

**Version:** Phase 1 Design  
**Date:** Apr 5 2026  
**Status:** Ready to build

---

## Folder Tree (Complete)

```
Task.Ahlian/
├── README.md
├── CLAUDE.md (this project's guide)
├── ARCHITECTURE.md (this file)
├── .env.example
├── .gitignore
│
├── supabase/
│   ├── migrations/
│   │   ├── 001_init_tasks.sql
│   │   └── 002_init_logs.sql
│   ├── config.toml
│   └── seed.sql
│
├── apps/web/
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── vercel.json
│   ├── .env.example
│   │
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   │
│   ├── app/
│   │   ├── layout.tsx (root layout)
│   │   ├── page.tsx (dashboard entry — manual task form + table)
│   │   ├── api/
│   │   │   ├── tasks/
│   │   │   │   ├── route.ts (GET all, POST new task)
│   │   │   │   └── [id]/route.ts (PATCH status, DELETE)
│   │   │   ├── telegram/
│   │   │   │   └── webhook.ts (receives Telegram messages — Phase 2)
│   │   │   └── cron/
│   │   │       └── recap.ts (sends 9am recap — called by vercel.json)
│   │   └── error.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Badge.tsx
│   │   └── features/
│   │       ├── TaskForm.tsx (manual entry form)
│   │       ├── TaskTable.tsx (list + inline edits)
│   │       ├── TaskRow.tsx (delete, status toggle)
│   │       └── EmptyState.tsx
│   │
│   ├── hooks/
│   │   ├── useTaskQuery.ts (fetch/refresh tasks)
│   │   └── useTaskMutation.ts (create, update, delete)
│   │
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts (createBrowserClient)
│   │   │   ├── server.ts (createServerClient, for routes)
│   │   │   └── queries.ts (reusable SQL builders)
│   │   ├── api.ts (fetch() helpers for client-side API calls)
│   │   ├── types.ts (Task, Log, API response types)
│   │   └── constants.ts (task statuses, priorities)
│   │
│   ├── styles/
│   │   └── globals.css (Tailwind base)
│   │
│   └── middleware.ts (auth checks — Phase 2)
│
├── apps/bot/
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   │
│   ├── src/
│   │   ├── index.ts (bot entry — should be runnable locally OR as serverless edge fn)
│   │   ├── services/
│   │   │   ├── telegram.service.ts (Telegram API wrapper)
│   │   │   ├── supabase.service.ts (query tasks + logs)
│   │   │   ├── recap.service.ts (generate recap text)
│   │   │   └── scheduler.service.ts (cron logic — Phase 1 uses Vercel cron instead)
│   │   ├── types/
│   │   │   └── index.ts (Task, Recap, Telegram types)
│   │   └── utils/
│   │       └── date.ts (time zone helpers)
│   │
│   └── tests/
│       ├── recap.test.ts
│       └── telegram.test.ts
│
├── packages/shared/
│   ├── package.json
│   ├── src/
│   │   ├── types/
│   │   │   ├── task.ts (Task, TaskStatus, TaskPriority)
│   │   │   ├── telegram.ts (TelegramMessage, etc.)
│   │   │   └── api.ts (ApiResponse wrapper)
│   │   └── constants.ts (shared enums, status labels)
│   │
│   └── tsconfig.json
│
├── package.json (monorepo root — pnpm workspaces)
├── pnpm-workspace.yaml
└── .eslintrc.json
```

---

## Layer Responsibilities (One Line Each)

### `supabase/` — Database Schema & State
**Owns:** Tasks table, logs table, migrations, schema versioning  
**Must NOT:** Contain application logic, authorization, business rules

### `apps/web/app/` — HTTP Routes Only
**Owns:** HTTP parsing, response formatting, Supabase connection  
**Must NOT:** Contain business logic beyond "fetch and return", side effects beyond DB queries

### `apps/web/components/` — UI Layer
**Owns:** React rendering, Tailwind styling, keyboard/mouse handling  
**Must NOT:** Make API calls (use hooks), contain domain logic, know about DB schema

### `apps/web/hooks/` — State & Data Fetching
**Owns:** useQuery/useMutation patterns, optimistic updates, error boundaries  
**Must NOT:** Make HTTP calls directly (use lib/api), contain business logic (use services)

### `apps/web/lib/supabase/` — Supabase Abstraction
**Owns:** Connection setup, RLS policies enforcement, type safety  
**Must NOT:** Leak Supabase error types into components, contain API logic

### `apps/web/lib/api.ts` — HTTP Client
**Owns:** fetch() wrappers, request/response transformation, headers  
**Must NOT:** Know about specific domains (tasks vs logs) — keep generic

### `apps/bot/src/services/` — Business Logic
**Owns:** Recap generation, task filtering, text formatting  
**Must NOT:** Know about HTTP, Telegram API (delegate to telegram.service), dates (use utils)

### `packages/shared/` — Shared Types
**Owns:** TypeScript interfaces, enums, constants used by web + bot  
**Must NOT:** Import from web, bot, or supabase — zero dependencies

---

## Design Patterns by Layer

| Layer | Pattern | Why |
|---|---|---|
| `apps/web/lib/supabase/` | **Adapter** | Isolate Supabase client setup from routes; easy to swap providers later |
| `apps/web/hooks/` | **Observer** (React hooks) | Encapsulate fetch-on-mount + refetch logic; components subscribe to state |
| `apps/bot/src/services/recap` | **Strategy** | Different recap formats (short/long) without changing caller |
| `apps/web/components/` | **Composition** | Small, dumb components (Button, Input) composed into smart ones (TaskForm) |
| API routes + bot | **Facade** | Single entry point (`/api/tasks`, Telegram webhook) hides orchestration |

---

## Phase 1 — What to Build First

### Week 1: Foundation

1. **Supabase migrations** (2 files):
   ```sql
   -- 001_init_tasks.sql
   CREATE TABLE tasks (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     title TEXT NOT NULL,
     status TEXT NOT NULL DEFAULT 'pending', -- pending | in_progress | done
     priority TEXT NOT NULL DEFAULT 'normal', -- low | normal | high
     due_date DATE,
     created_at TIMESTAMPTZ DEFAULT NOW(),
     updated_at TIMESTAMPTZ DEFAULT NOW()
   );

   -- 002_init_logs.sql
   CREATE TABLE logs (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
     action TEXT NOT NULL, -- created | status_changed | deleted
     old_value JSONB,
     new_value JSONB,
     created_at TIMESTAMPTZ DEFAULT NOW()
   );
   ```

2. **Web API routes** (3 files):
   - `apps/web/api/tasks/route.ts` — GET all tasks (with filters), POST new task
   - `apps/web/api/tasks/[id]/route.ts` — PATCH status, DELETE task
   - `apps/web/api/cron/recap.ts` — Called by Vercel at 9am, generates & sends recap

3. **Types & constants** (1 file):
   - `packages/shared/types/task.ts` — Task interface, statuses, priorities
   - `packages/shared/constants.ts` — Status labels, priority colors

4. **Bot service** (2 files):
   - `apps/bot/src/services/recap.service.ts` — Takes tasks array, returns recap string
   - `apps/bot/src/services/telegram.service.ts` — Sends message to Telegram chat

5. **Web dashboard** (4 files):
   - `apps/web/app/page.tsx` — Dashboard entry (fetches tasks on load)
   - `apps/web/components/TaskForm.tsx` — Manual task input
   - `apps/web/components/TaskTable.tsx` — Task list with inline status/delete
   - `apps/web/hooks/useTaskQuery.ts` — Fetch + refetch tasks

### Folder Creation Order (Do These First)

```bash
mkdir -p supabase/migrations
mkdir -p apps/web/{app/api/{tasks,cron},components,hooks,lib/supabase}
mkdir -p apps/bot/src/{services,types}
mkdir -p packages/shared/src/{types}
```

---

## Specific File Placements

### Supabase Migrations
- Live in **`supabase/migrations/`** (numbered: 001, 002, etc.)
- Each file is ONE schema change (table, index, policy)
- Version control: commit migrations before deploy
- Run locally with `supabase migration up`

### API Routes
- **GET/POST `/api/tasks`** → `apps/web/app/api/tasks/route.ts`
  - GET: returns `{ tasks: Task[], total: number, error?: string }`
  - POST: accepts `{ title, priority, due_date }`, returns `{ task: Task, error?: string }`
- **PATCH/DELETE `/api/tasks/[id]`** → `apps/web/app/api/tasks/[id]/route.ts`
  - PATCH: `{ status }` or `{ priority }`
  - DELETE: returns `{ success: boolean }`
- **GET `/api/cron/recap`** → `apps/web/app/api/cron/recap.ts`
  - Called by Vercel cron (configured in `vercel.json`)
  - No auth (Vercel-signed header validation)
  - Returns `{ success: boolean, sent: boolean }`

### Supabase Setup Files
- `apps/web/lib/supabase/client.ts` — `createBrowserClient()` (client-side)
- `apps/web/lib/supabase/server.ts` — `createServerClient()` (API routes + middleware)
- Both files set up RLS keys, auth headers, etc.

### Telegram Bot
- `apps/bot/src/services/telegram.service.ts` exports `sendMessage(chatId, text)`
- `apps/bot/src/services/recap.service.ts` exports `generateRecap(tasks)` → string
- Called from `apps/web/app/api/cron/recap.ts` (NOT a separate service — reuse web routes)

### Shared Types
- **Never** import from specific apps (web, bot, supabase)
- Import FROM `packages/shared` in both web + bot
- Example: `import { Task, TaskStatus } from '@task-ahlian/shared'`

### Environment Variables
Create `.env.example` at project root with all keys:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc... (API routes only)

# Telegram
TELEGRAM_BOT_TOKEN=123456:ABC-DEF...
TELEGRAM_CHAT_ID=123456789

# Vercel Cron
VERCEL_CRON_SECRET=random-secret-for-cron-auth
```

---

## Anti-Patterns to Avoid

### 1. Leaking Supabase into Components
**Bad:**
```tsx
// ❌ components/TaskCard.tsx
import { supabase } from '@/lib/supabase/client';
export function TaskCard() {
  const [task, setTask] = useState(null);
  useEffect(() => {
    supabase.from('tasks').select().then(setTask); // Direct DB call
  }, []);
}
```

**Good:**
```tsx
// ✅ components/TaskCard.tsx
export function TaskCard({ task, onUpdate }) {
  return <button onClick={() => onUpdate(task.id, 'done')} />;
}

// ✅ hooks/useTaskQuery.ts — fetch logic lives here
export function useTaskQuery() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch('/api/tasks').then(r => r.json()).then(setTasks);
  }, []);
  return tasks;
}
```

### 2. API Routes with Business Logic
**Bad:**
```ts
// ❌ app/api/tasks/route.ts
export async function GET() {
  const tasks = await supabase.from('tasks').select();
  // Filter, sort, aggregate — business logic here!
  const filtered = tasks.filter(t => t.priority === 'high').sort(...);
  return Response.json(filtered);
}
```

**Good:**
```ts
// ✅ app/api/tasks/route.ts (thin)
export async function GET() {
  const { data, error } = await supabase.from('tasks').select();
  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({ tasks: data });
}

// ✅ Bot service (business logic)
export function filterHighPriority(tasks: Task[]) {
  return tasks.filter(t => t.priority === 'high').sort(byDueDate);
}
```

### 3. Mixing Concerns in `page.tsx`
**Bad:**
```tsx
// ❌ app/page.tsx
export default async function Dashboard() {
  const { data } = await supabase.from('tasks').select(); // Server component DB call
  return <TaskTable tasks={data} />; // Renders on server, not client
}
```

**Good:**
```tsx
// ✅ app/page.tsx (route only)
export default function Dashboard() {
  const tasks = useTaskQuery(); // Client-side, uses hook
  return <TaskTable tasks={tasks} />;
}

// ✅ hooks/useTaskQuery.ts
export function useTaskQuery() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch('/api/tasks').then(r => r.json()).then(d => setTasks(d.tasks));
  }, []);
  return tasks;
}
```

### 4. Service Files Calling Telegram/External APIs Directly
**Bad:**
```ts
// ❌ apps/bot/src/services/recap.service.ts
export async function generateAndSendRecap() {
  const tasks = await supabase.from('tasks').select();
  const text = formatRecap(tasks);
  const axios = require('axios');
  await axios.post(`https://api.telegram.org/...`); // Telegram call in business logic!
}
```

**Good:**
```ts
// ✅ apps/bot/src/services/recap.service.ts (pure)
export function generateRecap(tasks: Task[]): string {
  return `Yesterday: ${tasks.filter(t => t.status === 'done').length} done\nToday: ${tasks.filter(t => t.status === 'pending').length} pending`;
}

// ✅ apps/web/app/api/cron/recap.ts (orchestrator)
export async function GET(req: Request) {
  const { data: tasks } = await supabase.from('tasks').select();
  const recap = generateRecap(tasks);
  await telegramService.sendMessage(process.env.TELEGRAM_CHAT_ID, recap);
  return Response.json({ success: true });
}
```

### 5. Import Cycles (web ← bot, bot ← shared ← web)
**Bad:**
```
apps/web/lib/api.ts imports from apps/bot/src/services
apps/bot/src/services imports from apps/web/lib/supabase
→ Circular dependency!
```

**Good:**
```
apps/web → packages/shared (one direction)
apps/bot → packages/shared (one direction)
packages/shared imports nothing
```

---

## Summary

### Create These Files First (Phase 1, Week 1)

1. `supabase/migrations/001_init_tasks.sql`
2. `supabase/migrations/002_init_logs.sql`
3. `apps/web/app/api/tasks/route.ts`
4. `apps/web/app/api/tasks/[id]/route.ts`
5. `apps/web/app/api/cron/recap.ts`
6. `apps/web/app/page.tsx`
7. `apps/web/components/TaskForm.tsx`
8. `apps/web/components/TaskTable.tsx`
9. `apps/web/hooks/useTaskQuery.ts`
10. `apps/web/lib/supabase/client.ts`
11. `apps/web/lib/supabase/server.ts`
12. `apps/bot/src/services/recap.service.ts`
13. `apps/bot/src/services/telegram.service.ts`
14. `packages/shared/src/types/task.ts`
15. `.env.example` (at root)

### Key Principles

1. **Routes are thin** — parse request, call service/query, return JSON
2. **Services have logic** — filtering, formatting, calculations
3. **Components are dumb** — props in, JSX out, no side effects
4. **Hooks manage state** — fetch on mount, refetch on user action
5. **Shared types go in packages/shared** — imported by web + bot
6. **Supabase hidden behind `lib/supabase/`** — easy to swap later

### Deploy to Vercel

- Web dashboard: normal Next.js deploy (connected to Vercel)
- Cron job: configured in `vercel.json` → calls `/api/cron/recap` at 9am
- Bot services: imported into `api/cron/recap.ts` (no separate deployment)

---

**This design scales:** Add auth (middleware.ts), add Telegram webhook (new route), add parser (new service) without refactoring existing code.
