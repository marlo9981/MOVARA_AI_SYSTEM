# Task.Ahlian Modular Work-Packs

This document contains the granular execution plan to complete the Task.Ahlian stack. Each pack is independent and can be assigned as a separate "task" for an AI agent.

---

## 🎨 PACK 1: Frontend & Interface (High-End Polish)
**Goal**: Finalize the "Premium SaaS" feeling of the dashboard.
- [ ] **Task 1.1**: Replace `handleCtaClick` in `TaskManager` with a real **Glassmorphic New Task Modal**.
- [ ] **Task 1.2**: Implement real **Sidebar Routing**. Click "Inbox" or "Settings" should update the main view without refreshing.
- [ ] **Task 1.3**: Add a "Focus Mode" toggle in the sidebar that hides metrics and shows only the task list.
- [ ] **Task 1.4**: Replace mock avatars in Task Cards with real image URLs from DiceBear or a local folder.

---

## 🧠 PACK 2: The AI "Brain" (Smart Extraction)
**Goal**: Make the VSCode -> Dashboard bridge intelligent.
- [ ] **Task 2.1**: Update `api/extract/route.ts` to handle **Multi-Model Routing** (Fallback from Claude 3.5 to GPT-4o).
- [ ] **Task 2.2**: Implement a "Confirm-before-Sync" step in the VSCode extension so Marcus can edit the task before sending.
- [ ] **Task 2.3**: Build the "Loom-to-Task" text summarization logic inside the extraction API.

---

## 🎥 PACK 3: The Content Engine (Recap Videos)
**Goal**: Bring the "Video Assistant" to life in Phase 3.
- [ ] **Task 3.1**: Integrate a third-party video API (like Shotstack or a local moviepy script) to generate a summary video.
- [ ] **Task 3.2**: Connect the "AI Video Assistant" drawer to trigger this generation logic based on the user's weekly metrics.
- [ ] **Task 3.3**: Allow Marcus to download the generated progress video directly from the dashboard.

---

## ⚙️ PACK 4: Scale & DevOps (Performance)
**Goal**: Ensure the system stays fast and secure.
- [ ] **Task 4.1**: Enable **Supabase Auth** so Marcus can have a secure private login.
- [ ] **Task 4.2**: Configure **Vercel Speed Insights** and Dashboard caching for sub-100ms load times.
- [ ] **Task 4.3**: Implement **Custom Telegram Commands** (e.g., `/today` or `/urgent`) to interact with the bot.

---
*Reference PROMPT.md and TASK_STACK.md for high-level orientation.*
