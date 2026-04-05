# CLAUDE.md — Task.Ahlian Project

## Product Overview

**Task.Ahlian** — AI-powered task management dashboard for teams working in VSCode.

Automatically captures tasks from conversation, visualizes progress, sends daily recaps.

**Status:** Phase 1 (MVP Build)
**Owner:** Marcus (Movara AI)
**Timeline:** Apr 5-15, 2026

---

## Architecture

### Three Core Components

1. **VSCode Extension Hook** (`src/vscode-extension/`)
   - Captures conversation in chat
   - Extracts tasks automatically
   - Saves to task JSON

2. **Web Dashboard** (`src/web/`)
   - Next.js + TypeScript + Tailwind
   - Displays task board in real-time
   - Mobile responsive
   - Deployed to Vercel

3. **Daily Recap Bot** (`src/bots/`)
   - Telegram bot sends 9am recap
   - Summarizes yesterday + today's plan
   - Uses Claude API for natural language summaries

### Data Flow

```
VSCode Chat
  ↓ (hook captures)
Task JSON (_TASK_STATE/marcus-tasks.json)
  ↓ (dashboard reads)
Web UI (Kanban board)
  ↓ (bot reads)
Telegram Message (9am recap)
  ↓ (Claude memory learns)
Pattern Recognition
```

---

## Project Structure

```
Task.Ahlian/
├── CLAUDE.md (this file)
├── README.md
├── docs/
│   ├── PRODUCT_SPEC.md
│   ├── API_SPEC.md
│   ├── ARCHITECTURE.md
│   └── ROADMAP.md
├── src/
│   ├── vscode-extension/
│   │   ├── src/
│   │   │   ├── extension.ts (main entry)
│   │   │   ├── taskExtractor.ts (AI task extraction)
│   │   │   └── fileManager.ts (JSON file I/O)
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── web/
│   │   ├── app/
│   │   │   ├── page.tsx (dashboard)
│   │   │   ├── api/
│   │   │   │   ├── tasks/route.ts
│   │   │   │   └── recap/route.ts
│   │   │   └── layout.tsx
│   │   ├── components/
│   │   │   ├── TaskBoard.tsx
│   │   │   ├── TaskCard.tsx
│   │   │   ├── DailyRecap.tsx
│   │   │   └── Analytics.tsx
│   │   ├── lib/
│   │   │   ├── taskParser.ts
│   │   │   ├── fileIO.ts
│   │   │   └── claude.ts (Claude API)
│   │   ├── package.json
│   │   └── vercel.json
│   └── bots/
│       ├── telegram.ts (Telegram bot setup)
│       ├── recapGenerator.ts (daily summaries)
│       ├── scheduler.ts (9am cron job)
│       └── package.json
├── tests/
│   ├── vscode-extension.test.ts
│   ├── taskExtractor.test.ts
│   └── recapGenerator.test.ts
├── .env.example
├── package.json (monorepo root)
└── .gitignore
```

---

## Key Features (Phase 1)

✅ **VSCode Hook**
- Captures chat when in `/Movara AI/` folder
- Extracts tasks from conversation
- Saves to JSON file

✅ **Web Dashboard**
- Real-time Kanban board (Pending / In Progress / Done)
- Shows task priority & due dates
- Mobile responsive
- Dark mode

✅ **Daily Recap**
- 9am Telegram message
- "Yesterday done: X tasks"
- "Today pending: Y tasks"
- "Urgent: Z tasks"

---

## Tech Stack

| Layer | Stack |
|-------|-------|
| **VSCode Extension** | TypeScript + VSCode API |
| **Web Dashboard** | Next.js 16 + TypeScript + Tailwind + Shadcn |
| **Backend** | Vercel Edge Functions |
| **Data** | JSON file (local) + Supabase (optional) |
| **Telegram Bot** | Node.js + node-telegram-bot-api |
| **AI** | Claude API (Sonnet for task extraction) |

---

## Environment Variables

```
# .env.local
CLAUDE_API_KEY=sk-...
TELEGRAM_BOT_TOKEN=123456:ABC-DEF...
TELEGRAM_CHAT_ID=123456789
TASK_FILE_PATH=/path/to/_TASK_STATE/marcus-tasks.json
VERCEL_DEPLOYMENT_URL=https://task-ahlian.vercel.app
```

---

## Development Commands

```bash
# Install dependencies (monorepo)
npm install

# Run VSCode extension (in VSCode)
npm run vscode:dev

# Run web dashboard locally
npm run web:dev

# Run telegram bot
npm run bot:start

# Run tests
npm run test

# Deploy to Vercel
npm run deploy
```

---

## Quality Standards

✅ **Code Quality**
- TypeScript strict mode
- ESLint + Prettier
- 80%+ test coverage

✅ **Performance**
- Dashboard loads <1s (mobile)
- Task extraction <500ms
- Telegram message sent within 1min of 9am

✅ **User Experience**
- Dark mode
- Keyboard shortcuts
- Mobile responsive
- Offline support (PWA)

---

## Success Metrics

| Metric | Target | Baseline |
|--------|--------|----------|
| Task capture accuracy | >95% | TBD |
| Dashboard load time | <1s | TBD |
| Telegram delivery | <1min delay | TBD |
| User retention | 80% (1 week) | TBD |

---

## Timeline

| Phase | Dates | Work |
|-------|-------|------|
| Phase 1 | Apr 5-8 | Build MVP (hook + dashboard + bot) |
| Testing | Apr 8-10 | Test with real usage on Movara AI |
| Refinement | Apr 10-12 | Fix bugs, UX improvements |
| Launch | Apr 15 | Live for Marcus + early adopters |
| Phase 2 | Apr 15+ | Client onboarding, product features |

---

## Roadmap

**Phase 2 (Client Features)**
- [ ] Team collaboration (multiple users)
- [ ] Custom task templates
- [ ] Integration with GitHub (auto-extract from PRs)
- [ ] Slack notifications option
- [ ] Analytics dashboard (weekly/monthly summaries)
- [ ] Export to CSV/PDF

**Phase 3 (Enterprise)**
- [ ] Self-hosted option
- [ ] API for third-party integrations
- [ ] Advanced reporting & analytics
- [ ] User management & permissions
- [ ] Audit logs

---

## Next Steps

1. **Clarify requirements** (answer remaining questions)
2. **Design Phase 1** (specs for hook + dashboard + bot)
3. **Build MVP** (agents or me)
4. **Test on Movara AI** (real usage Apr 8-10)
5. **Launch Phase 2 features** based on feedback

---

## Questions for Marcus

Before building, clarify:

1. **VSCode Extension:** Should hook only run in `/Movara AI/` folder, or all projects?
2. **Task Storage:** JSON only, or sync to Supabase too?
3. **Telegram Bot:** Just you, or team members too?
4. **Pricing:** Free tier, or premium features? (for Phase 2 clients)
5. **Open Source:** Publish on GitHub (portfolio), or keep private?

---

**This is a real product. Ready to build Phase 1.**
