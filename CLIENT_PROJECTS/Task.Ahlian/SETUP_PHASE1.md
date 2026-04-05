# Task.Ahlian — Phase 1 Setup Guide

**Goal:** Get database + manual task entry + Telegram recap working in <2 hours.

**Timeline:** Apr 5-8, 2026

---

## Step 1: Project Initialization (15 min)

### Create Root Monorepo Structure

```bash
cd /path/to/Task.Ahlian

# Create workspace folders
mkdir -p supabase/migrations
mkdir -p apps/web/{app/api/{tasks,cron},components,hooks,lib/supabase,styles}
mkdir -p apps/bot/src/{services,types}
mkdir -p packages/shared/src/{types}

# Initialize pnpm workspace
cat > pnpm-workspace.yaml << 'EOF'
packages:
  - 'apps/*'
  - 'packages/*'
EOF

cat > package.json << 'EOF'
{
  "name": "task-ahlian",
  "version": "0.1.0",
  "private": true,
  "workspaces": ["apps/*", "packages/*"],
  "scripts": {
    "dev:web": "pnpm --filter web dev",
    "dev:bot": "pnpm --filter bot dev",
    "build": "pnpm -r build",
    "test": "pnpm -r test",
    "deploy:web": "pnpm --filter web deploy"
  },
  "devDependencies": {
    "typescript": "^5.3.3",
    "eslint": "^8.55.0"
  }
}
EOF

pnpm install
```

---

## Step 2: Supabase Setup (20 min)

### Create Supabase Project

1. Go to https://app.supabase.com
2. Create new project (or use existing)
3. Save **Project URL** and **Anon Key** (Settings > API)

### Create Migrations

**`supabase/migrations/001_init_tasks.sql`:**
```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tasks table
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'pending' 
    CHECK (status IN ('pending', 'in_progress', 'done')),
  priority TEXT NOT NULL DEFAULT 'normal'
    CHECK (priority IN ('low', 'normal', 'high')),
  due_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-update updated_at on row change
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tasks_updated_at
  BEFORE UPDATE ON tasks
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Indexes for common queries
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_priority ON tasks(priority);
CREATE INDEX idx_tasks_due_date ON tasks(due_date);

-- RLS policies (allow all for Phase 1, add auth later)
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all reads" ON tasks FOR SELECT USING (true);
CREATE POLICY "Allow all inserts" ON tasks FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow all updates" ON tasks FOR UPDATE USING (true);
CREATE POLICY "Allow all deletes" ON tasks FOR DELETE USING (true);
```

**`supabase/migrations/002_init_logs.sql`:**
```sql
-- Activity logs (for audit trail + analytics)
CREATE TABLE logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
  action TEXT NOT NULL 
    CHECK (action IN ('created', 'status_changed', 'priority_changed', 'deleted')),
  old_value JSONB,
  new_value JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all reads" ON logs FOR SELECT USING (true);
CREATE POLICY "Allow all inserts" ON logs FOR INSERT WITH CHECK (true);

-- Index for audit queries
CREATE INDEX idx_logs_task_id ON logs(task_id);
CREATE INDEX idx_logs_action ON logs(action);
```

### Apply Migrations Locally

```bash
# Install Supabase CLI if needed
npm install -g supabase

# Link to your project
supabase link --project-id YOUR_PROJECT_ID

# Push migrations
supabase migration up
```

---

## Step 3: Web App Setup (45 min)

### Initialize Next.js App

```bash
cd apps/web
npx create-next-app@latest . --typescript --tailwind --no-git

# Install Supabase client
pnpm add @supabase/supabase-js

# Install API helpers
pnpm add swr
```

### Create Core Files

**`apps/web/.env.local`** (copy from `.env.example` at root, fill in credentials):
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
TELEGRAM_BOT_TOKEN=123456:ABC...
TELEGRAM_CHAT_ID=123456789
VERCEL_CRON_SECRET=random-secret
```

**`apps/web/lib/supabase/client.ts`** (browser client):
```typescript
import { createBrowserClient } from '@supabase/ssr';

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);
```

**`apps/web/lib/supabase/server.ts`** (server-side for API routes):
```typescript
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const createServerSupabaseClient = async () => {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!, // Use service role for API routes
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    },
  );
};
```

**`apps/web/lib/types.ts`** (shared types):
```typescript
export type Task = {
  id: string;
  title: string;
  description?: string;
  status: 'pending' | 'in_progress' | 'done';
  priority: 'low' | 'normal' | 'high';
  due_date?: string;
  created_at: string;
  updated_at: string;
};

export type ApiResponse<T> = {
  data?: T;
  error?: string;
};
```

**`apps/web/app/api/tasks/route.ts`** (GET all, POST new):
```typescript
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { Task, ApiResponse } from '@/lib/types';

export async function GET() {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .order('due_date', { ascending: true });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
  return Response.json({ tasks: data });
}

export async function POST(req: Request) {
  const supabase = await createServerSupabaseClient();
  const { title, priority, due_date, description } = await req.json();

  if (!title) {
    return Response.json({ error: 'Title required' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('tasks')
    .insert([{ title, priority, due_date, description, status: 'pending' }])
    .select()
    .single();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  // Log creation
  await supabase.from('logs').insert([
    {
      task_id: data.id,
      action: 'created',
      new_value: data,
    },
  ]);

  return Response.json({ task: data }, { status: 201 });
}
```

**`apps/web/app/api/tasks/[id]/route.ts`** (PATCH status, DELETE):
```typescript
import { createServerSupabaseClient } from '@/lib/supabase/server';

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const supabase = await createServerSupabaseClient();
  const { status, priority } = await req.json();

  const { data, error } = await supabase
    .from('tasks')
    .update({ status, priority })
    .eq('id', params.id)
    .select()
    .single();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  // Log change
  await supabase.from('logs').insert([
    {
      task_id: params.id,
      action: status ? 'status_changed' : 'priority_changed',
      new_value: data,
    },
  ]);

  return Response.json({ task: data });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const supabase = await createServerSupabaseClient();

  const { error } = await supabase.from('tasks').delete().eq('id', params.id);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  // Log deletion
  await supabase.from('logs').insert([
    {
      task_id: params.id,
      action: 'deleted',
    },
  ]);

  return Response.json({ success: true });
}
```

**`apps/web/hooks/useTaskQuery.ts`** (fetch tasks):
```typescript
'use client';
import { useState, useEffect } from 'react';
import { Task, ApiResponse } from '@/lib/types';

export function useTaskQuery() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/tasks');
      const data: ApiResponse<Task[]> = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setTasks(data.tasks || []);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch tasks');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, loading, error, refetch: fetchTasks };
}
```

**`apps/web/components/TaskForm.tsx`** (manual entry):
```typescript
'use client';
import { useState } from 'react';
import { Task } from '@/lib/types';

export function TaskForm({ onTaskCreated }: { onTaskCreated: (task: Task) => void }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('normal');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, priority }),
      });
      const data = await res.json();
      if (data.task) {
        onTaskCreated(data.task);
        setTitle('');
        setPriority('normal');
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 bg-gray-100 rounded">
      <input
        type="text"
        placeholder="New task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 px-2 py-1 border rounded"
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="px-2 py-1 border rounded"
      >
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="high">High</option>
      </select>
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Adding...' : 'Add'}
      </button>
    </form>
  );
}
```

**`apps/web/components/TaskTable.tsx`** (list):
```typescript
'use client';
import { Task } from '@/lib/types';

export function TaskTable({ tasks, onStatusChange, onDelete }: {
  tasks: Task[];
  onStatusChange: (id: string, status: Task['status']) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2 text-left">Title</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Priority</th>
            <th className="border p-2">Due</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b hover:bg-gray-50">
              <td className="border p-2">{task.title}</td>
              <td className="border p-2">
                <select
                  value={task.status}
                  onChange={(e) => onStatusChange(task.id, e.target.value as Task['status'])}
                  className="px-2 py-1 border rounded text-xs"
                >
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </td>
              <td className="border p-2 text-center text-xs font-semibold">
                <span className={task.priority === 'high' ? 'text-red-600' : 'text-gray-600'}>
                  {task.priority.charAt(0).toUpperCase()}
                </span>
              </td>
              <td className="border p-2 text-xs">{task.due_date || '-'}</td>
              <td className="border p-2 text-center">
                <button
                  onClick={() => onDelete(task.id)}
                  className="text-red-600 hover:text-red-800 text-xs"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {tasks.length === 0 && (
        <div className="p-4 text-center text-gray-500">No tasks yet. Add one above.</div>
      )}
    </div>
  );
}
```

**`apps/web/app/page.tsx`** (dashboard):
```typescript
'use client';
import { useTaskQuery } from '@/hooks/useTaskQuery';
import { TaskForm } from '@/components/TaskForm';
import { TaskTable } from '@/components/TaskTable';
import { Task } from '@/lib/types';
import { useState } from 'react';

export default function Dashboard() {
  const { tasks, loading, error, refetch } = useTaskQuery();
  const [optimisticTasks, setOptimisticTasks] = useState<Task[]>([]);

  const handleTaskCreated = (task: Task) => {
    setOptimisticTasks([...optimisticTasks, task]);
    refetch();
  };

  const handleStatusChange = async (id: string, status: Task['status']) => {
    const res = await fetch(`/api/tasks/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    if (res.ok) refetch();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this task?')) return;
    const res = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
    if (res.ok) refetch();
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Task.Ahlian</h1>
        {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>}
        <TaskForm onTaskCreated={handleTaskCreated} />
        {loading ? <p className="mt-4 text-gray-500">Loading...</p> : <TaskTable tasks={tasks} onStatusChange={handleStatusChange} onDelete={handleDelete} />}
      </div>
    </main>
  );
}
```

---

## Step 4: Telegram Bot Setup (30 min)

### Initialize Bot App

```bash
cd apps/bot
npm init -y
pnpm add axios dotenv
pnpm add --save-dev typescript ts-node @types/node

npx tsc --init
```

**`apps/bot/src/services/telegram.service.ts`:**
```typescript
export class TelegramService {
  private botToken: string;

  constructor(botToken: string) {
    this.botToken = botToken;
  }

  async sendMessage(chatId: string, text: string): Promise<boolean> {
    try {
      const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
      });

      if (!response.ok) {
        console.error(`Telegram error: ${response.status}`, await response.text());
        return false;
      }
      return true;
    } catch (err) {
      console.error('Telegram send error:', err);
      return false;
    }
  }
}
```

**`apps/bot/src/services/recap.service.ts`:**
```typescript
import { Task } from '../types';

export function generateRecap(tasks: Task[]): string {
  const done = tasks.filter((t) => t.status === 'done').length;
  const pending = tasks.filter((t) => t.status === 'pending').length;
  const inProgress = tasks.filter((t) => t.status === 'in_progress').length;
  const high = tasks.filter((t) => t.priority === 'high' && t.status !== 'done').length;

  return `📊 Task Recap\n\n✅ Done: ${done}\n📋 Pending: ${pending}\n🚀 In Progress: ${inProgress}\n⚠️ High Priority: ${high}`;
}
```

**`apps/bot/src/types/index.ts`:**
```typescript
export type Task = {
  id: string;
  title: string;
  status: 'pending' | 'in_progress' | 'done';
  priority: 'low' | 'normal' | 'high';
  due_date?: string;
};
```

---

## Step 5: Cron Job Setup (30 min)

**`apps/web/app/api/cron/recap.ts`** (called by Vercel at 9am):
```typescript
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { TelegramService } from '@task-ahlian/bot/src/services/telegram.service';
import { generateRecap } from '@task-ahlian/bot/src/services/recap.service';

// Verify cron request signature
function verifyCronSecret(req: Request): boolean {
  const authHeader = req.headers.get('authorization');
  const secret = process.env.VERCEL_CRON_SECRET;
  return authHeader === `Bearer ${secret}`;
}

export async function GET(req: Request) {
  // Verify this is a real Vercel cron request
  if (!verifyCronSecret(req)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const supabase = await createServerSupabaseClient();

    // Fetch all tasks
    const { data: tasks, error } = await supabase.from('tasks').select('*');

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    // Generate recap
    const recap = generateRecap(tasks || []);

    // Send via Telegram
    const telegramService = new TelegramService(process.env.TELEGRAM_BOT_TOKEN!);
    const sent = await telegramService.sendMessage(process.env.TELEGRAM_CHAT_ID!, recap);

    if (!sent) {
      return Response.json({ success: false, error: 'Telegram send failed' }, { status: 500 });
    }

    return Response.json({ success: true, sent: true });
  } catch (err) {
    console.error('Cron error:', err);
    return Response.json({ error: 'Internal error' }, { status: 500 });
  }
}
```

**`apps/web/vercel.json`** (configure cron):
```json
{
  "crons": [
    {
      "path": "/api/cron/recap",
      "schedule": "0 9 * * *"
    }
  ]
}
```

---

## Step 6: Environment & Deploy (20 min)

### Local Testing

```bash
# Copy .env.example to .env.local and fill in credentials
cp .env.example apps/web/.env.local

# Start web app
pnpm dev:web

# Visit http://localhost:3000
# Add a task manually
# Check Supabase to confirm data saved
```

### Deploy to Vercel

```bash
# Install Vercel CLI if needed
npm install -g vercel

# Link project
cd apps/web
vercel link

# Set environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add TELEGRAM_BOT_TOKEN
vercel env add TELEGRAM_CHAT_ID
vercel env add VERCEL_CRON_SECRET

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

---

## Checklist: Phase 1 Complete

- [ ] Supabase project created, migrations applied
- [ ] Tasks table + logs table exist in database
- [ ] Web app runs locally (`pnpm dev:web`)
- [ ] Can add tasks via form
- [ ] Tasks appear in table, can update status/delete
- [ ] API routes respond (GET `/api/tasks`, POST, PATCH, DELETE)
- [ ] Telegram bot token obtained from @BotFather
- [ ] Cron endpoint exists at `/api/cron/recap`
- [ ] Web app deployed to Vercel
- [ ] Vercel cron configured in `vercel.json`
- [ ] Test cron manually: `curl -H "Authorization: Bearer YOUR_SECRET" https://your-app.vercel.app/api/cron/recap`
- [ ] Telegram message received at 9am (or test with manual curl)

---

## Troubleshooting

### Supabase connection fails
- Check URL + key in `.env.local`
- Verify RLS policies enabled (should allow all in Phase 1)
- Check browser Network tab for CORS errors

### Telegram message not sent
- Verify bot token with `curl https://api.telegram.org/bot{TOKEN}/getMe`
- Check chat ID is correct (not a group ID)
- Check `TELEGRAM_CHAT_ID` in cron route

### Cron job not running
- Verify `vercel.json` is in root of `apps/web`
- Check cron schedule syntax: `0 9 * * *` = 9am daily
- Manually test: `curl -H "Authorization: Bearer {SECRET}" https://app.vercel.app/api/cron/recap`

---

**Next:** After Phase 1 works, plan Phase 2 (auth + team, parser + Telegram capture, dashboard polish).
