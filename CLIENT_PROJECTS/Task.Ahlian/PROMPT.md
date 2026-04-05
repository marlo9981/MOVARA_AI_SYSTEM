# Task.Ahlian — AI Handoff Prompt

**Instructions for AI Agents:**
When working on Task.Ahlian, adhere to the following project structure and standards. This project is a merger of a High-End Dashboard UI and a Supabase/Telegram backend logic.

### 1. Project Root & Source of Truth
- **Main Web App**: `src/web/` (Next.js 16 + Tailwind 4)
- **Database Schema**: `supabase/migrations/`
- **Environment**: `.env.local` in `src/web/`

### 2. File Organization
- **Components**: `src/web/components/dashboard/` (Sidebar, Metrics, TaskManager, Inbox)
- **API Routes**: `src/web/app/api/` (tasks, telegram)
- **State/Types**: `src/web/lib/types.ts`
- **Supabase Client**: `src/web/lib/supabase/`

### 3. Key Standards
- **Token Efficiency**: Always use concise system prompts for AI extraction. Target sub-300 token responses to minimize API costs.
- **Smart Caching**: Use Next.js `revalidateTag` for all data invalidation. Avoid full route resets or large JSON re-fetches.
- **UI Aesthetic**: Elite, premium, glassmorphic dark-mode. Use `lucide-react` and `framer-motion`.
- **Styling**: Tailwind 4 syntax. Use `bg-linear-to-tr` (not `bg-gradient-to-tr`). 
- **Hydration**: Use `tracking-widest` consistently. Avoid `tracking-tighter` on initial load items.
- **Backend**: Supabase for persistence. `/api/telegram` for bot interactions.

### 4. Critical Files
- **Inbox.tsx**: Main chat interface and Telegram bot link.
- **TaskManager.tsx**: Task timeline and Supabase query logic.
- **Metrics.tsx**: Progress visualization.

**Goal**: Build out Phase 1 (MVP) while maintaining the 2026 SaaS aesthetic.
