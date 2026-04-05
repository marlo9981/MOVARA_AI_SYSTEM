# Task.Ahlian — AI-Powered Task Management

**Status:** Phase 1 Architecture Complete (Ready to Build)  
**Date:** Apr 5 2026  
**Owner:** Marcus (Movara AI)  
**Timeline:** Phase 1 (Apr 5-8) → Launch (Apr 15)

---

## What Is Task.Ahlian?

A lightweight task management dashboard with **AI-powered capture + daily Telegram recaps**.

**Phase 1 (MVP):**
- Web dashboard for manual task entry
- Kanban board (Pending / In Progress / Done)
- Daily 9am Telegram recap (summary of tasks)
- Single-user, no auth

**Phase 2 (Team):**
- Telegram bot for task capture
- Team collaboration
- Custom task templates

**Phase 3 (Enterprise):**
- Advanced analytics
- Self-hosting
- API for integrations

---

## Architecture at a Glance

```
┌─────────────────────────────────────────────┐
│         TASK.AHLIAN                         │
├──────────────────┬──────────────────────────┤
│  Web Dashboard   │   Telegram Bot           │
│  (Vercel)        │   (Vercel Cron 9am)     │
├──────────────────┴──────────────────────────┤
│   Supabase (Postgres)                       │
│   - tasks table                             │
│   - logs table (audit)                      │
└─────────────────────────────────────────────┘
```

**Tech Stack:**
- Frontend: Next.js 16 + React + Tailwind
- Backend: Vercel Serverless + Supabase Postgres
- Bot: Telegram API
- Database: Supabase (migrations in repo)

---

## Folder Structure

**Three-layer monorepo:**

```
Task.Ahlian/
├── supabase/              ← Database migrations
├── apps/web/              ← Next.js dashboard + API routes
├── apps/bot/              ← Bot services (used by cron)
└── packages/shared/       ← Shared types (web + bot)
```

See **ARCHITECTURE.md** for full details.

---

## Files in This Folder

| File | Purpose | Read First? |
|------|---------|-------------|
| **README.md** (this file) | Overview & guide | ✅ Start here |
| **QUICK_REFERENCE.md** | One-page cheat sheet | ✅ Keep open while building |
| **ARCHITECTURE.md** | Technical deep dive (layer responsibilities, patterns, anti-patterns) | ✅ Read second |
| **SETUP_PHASE1.md** | Step-by-step implementation guide (code snippets included) | ✅ Read third, then code |
| **STRUCTURE_SUMMARY.md** | Design rationale, phase progression, deployment checklist | Reference |
| **FOLDER_INIT.sh** | Bash script to create folder skeleton (run once) | Reference |
| **CLAUDE.md** | Original product vision (useful context) | Reference |
| **.env.example** | Environment variables template (copy to .env.local) | Reference |

---

## How to Get Started

### Step 1: Understand the Architecture (30 min)

```
Read QUICK_REFERENCE.md          (one-page overview)
  ↓
Read ARCHITECTURE.md             (technical details)
  ↓
Skim SETUP_PHASE1.md             (understand what you'll build)
```

### Step 2: Initialize Folders (2 min)

```bash
cd Task.Ahlian
bash FOLDER_INIT.sh              # Creates all folders + config files
pnpm install                     # Install dependencies
```

### Step 3: Follow Setup Guide (8-12 hours)

Open **SETUP_PHASE1.md** and follow step-by-step:
1. Supabase setup (20 min)
2. Web app initialization (45 min)
3. API routes (30 min)
4. Dashboard UI (3 hours)
5. Telegram bot setup (30 min)
6. Cron job + deployment (20 min)

### Step 4: Deploy to Vercel (10 min)

Follow "Deploy to Vercel" section in SETUP_PHASE1.md:
- Link project
- Set environment variables
- Deploy to production
- Test cron job at 9am

---

## Key Design Principles

### 1. Thin Routes, Fat Services
```
Routes (app/api/)     → Parse HTTP → Call service → Return JSON (15 lines)
Services (bot/)       → Business logic (pure functions, no side effects)
Components (ui/)      → Render only (no API calls)
Hooks (hooks/)        → Fetch data (state management)
```

### 2. Single Responsibility
Each file does ONE thing:
- `TaskForm.tsx` — Only renders form
- `useTaskQuery.ts` — Only fetches tasks
- `recap.service.ts` — Only formats recap text
- `route.ts` — Only handles HTTP

### 3. Zero Import Cycles
Imports flow one direction:
```
✅ web → shared
✅ bot → shared
❌ web ↔ bot
```

### 4. Scale Without Refactor
Adding features later:
- New routes? Add to `apps/web/app/api/`
- New components? Add to `apps/web/components/`
- New services? Add to `apps/bot/src/services/`
- New tables? Add migration to `supabase/migrations/`

**No existing code changes.**

---

## What Gets Built in Phase 1

### Database
- **tasks** table: id, title, status, priority, due_date, created_at, updated_at
- **logs** table: id, task_id, action, new_value, created_at (audit trail)

### Web Dashboard
- Manual task input form
- Table showing all tasks
- Inline status/priority editing
- Delete button
- Mobile responsive
- Dark mode (Tailwind default)

### API Routes
- `GET /api/tasks` — Fetch all tasks
- `POST /api/tasks` — Create new task
- `PATCH /api/tasks/[id]` — Update status/priority
- `DELETE /api/tasks/[id]` — Delete task
- `GET /api/cron/recap` — Called by Vercel at 9am

### Telegram Recap
- Scheduled daily at 9am (Vercel Cron)
- Shows: Tasks done, pending, in progress, urgent
- Sent to Telegram chat (configured in .env)

### Deployment
- Web dashboard on Vercel (auto-deploy on git push)
- Cron job on Vercel (runs at 9am daily)
- Database on Supabase (migrations in repo)

---

## Success Metrics (Phase 1)

✅ **Functionality**
- [ ] Dashboard loads <1 second
- [ ] Task creation works (instant UI update)
- [ ] Status/priority updates work
- [ ] Delete works
- [ ] Telegram recap arrives at 9am within 1 minute

✅ **Code Quality**
- [ ] No circular imports
- [ ] No database calls in components
- [ ] No business logic in routes
- [ ] All types are strict (TypeScript)

✅ **Deployment**
- [ ] Web app on Vercel
- [ ] Cron job configured (vercel.json)
- [ ] Environment variables set
- [ ] .env.example documents all secrets

---

## Commands You'll Use

```bash
# Development
pnpm install          # Install all workspaces
pnpm dev:web          # Start Next.js on :3000

# Database
supabase link --project-id YOUR_ID
supabase migration up # Apply migrations locally

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

## Phase 2 & 3 Roadmap

### Phase 2 (May 2026)
- [ ] Telegram bot for task capture
- [ ] AI parser (Claude API) for task extraction
- [ ] Team collaboration (multiple users)
- [ ] Auth + dashboard access control

### Phase 3 (June+ 2026)
- [ ] Advanced analytics (weekly/monthly summaries)
- [ ] Custom task templates
- [ ] Export to CSV/PDF
- [ ] Self-hosting option
- [ ] Public API

---

## Environment Variables

Create `.env.local` (copy from `.env.example`):

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

Get these from:
- **Supabase:** Settings > API
- **Telegram:** @BotFather on Telegram
- **Cron Secret:** `openssl rand -base64 32`

---

## Troubleshooting

### Dashboard doesn't load
- Check `pnpm dev:web` is running on `:3000`
- Check browser console for errors
- Check `.env.local` has Supabase URL + key

### Tasks don't save
- Check `SUPABASE_SERVICE_ROLE_KEY` is set
- Check Supabase RLS policies (should allow all in Phase 1)
- Check API response: `curl http://localhost:3000/api/tasks`

### Telegram message not sent
- Verify bot token: `curl https://api.telegram.org/botTOKEN/getMe`
- Check chat ID is correct (not a group ID)
- Check `TELEGRAM_CHAT_ID` environment variable

### Cron job doesn't run
- Check `apps/web/vercel.json` exists with cron config
- Check Vercel project is linked: `vercel link`
- Check Vercel logs: `vercel logs https://your-app.vercel.app/api/cron/recap`

See **SETUP_PHASE1.md** Troubleshooting section for more.

---

## FAQ

**Q: Do I need to host the bot separately?**  
A: No. Bot logic runs inside Vercel Cron job. No separate server needed.

**Q: Can I add team members in Phase 1?**  
A: No. Phase 1 is single-user (no auth). Add in Phase 2.

**Q: Can I integrate with Slack instead of Telegram?**  
A: Yes, modify `telegram.service.ts` to send to Slack API instead.

**Q: How do I backup tasks?**  
A: Supabase has built-in backups. Export from Supabase dashboard.

**Q: Can I self-host?**  
A: Phase 3. For now: Vercel (web) + Supabase (database).

---

## Next Steps

1. **Read QUICK_REFERENCE.md** (one page, 5 min)
2. **Read ARCHITECTURE.md** (technical, 15 min)
3. **Run `bash FOLDER_INIT.sh`** (2 min)
4. **Follow SETUP_PHASE1.md step-by-step** (8-12 hours)
5. **Deploy to Vercel** (20 min)
6. **Test at 9am** (wait for Telegram message)

---

## Support

- **Documentation:** ARCHITECTURE.md, SETUP_PHASE1.md
- **Quick answers:** QUICK_REFERENCE.md
- **Design rationale:** STRUCTURE_SUMMARY.md
- **Questions:** See CLAUDE.md (original project brief)

---

**Ready to build? Start with QUICK_REFERENCE.md, then SETUP_PHASE1.md.**

**Status: Architecture locked. Ready for implementation.**
