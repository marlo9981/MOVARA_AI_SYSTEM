# Task.Ahlian — Full Stack Task List

**Project Vision**: AI-powered premium dashboard that extracts tasks from VSCode chat and sends daily Telegram recaps.

---

## ✅ Phase 1: Foundation (COMPLETED)
- [x] **Premium UI**: Glassmorphic Dashboard (`src/web/`)
- [x] **Database Architecture**: `tasks` and `logs` tables (`supabase/migrations/`)
- [x] **Live API**: Task CRUD with audit logging and cache management.
- [x] **Automation**: Triple-scheduled Telegram summaries (9am, 1pm, 11pm via Vercel Cron).

---

## ✅ Phase 2: The Hook (COMPLETED)
The goal is to capture tasks from VSCode conversations.

- [x] **VSCode Extension**: Scaffold the extension in `src/vscode-extension/`.
- [x] **Conversation Capture**: Implement logic to read active chat buffers.
- [x] **AI Extraction Service**: Create the `api/extract` endpoint using Anthropic to turn chat text into `CreateTaskInput`.
- [x] **Auto-Insert**: Sync extracted tasks directly to the live dashboard.

---

## 🚀 Phase 3: Intelligence & Scale (IN PROGRESS)
- [ ] **AI Video Assistant**: Wire up the "AI Video" CTA to an upload/transcode service.
- [ ] **Team Collaborators**: Add real team profiles and multi-user support.
- [ ] **Efficiency Analytics**: Implement the "Productivity Recommendation" engine in the Metrics dashboard.
- [ ] **Admin Modal**: Clean up "Add Task" button with a premium floating form.

---

### 🔑 Key URLs & IDs
- **Dashboard**: http://localhost:3000/dashboard
- **Supabase Project**: `ejdjpuakcfvkdwcseled`
- **Telegram Bot**: `@TaskAhlian_bot`

---
*Created by Antigravity — 2026-04-05*
