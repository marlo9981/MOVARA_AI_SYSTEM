# Task.Ahlian Master Decision Log & Brain Dump

This document captures the intelligence and context from the April 5th, 2026 development session.

---

## 🏗️ 1. Architecture Decisions
- **Consolidation**: All frontend and backend code is unified in `src/web/`.
- **System Standards**: The project now follows the **Movara AI "06 Standard"** for metrics and performance.
- **Master Prompt**: Replay `PROMPT.md` to any future agent for 100% architectural alignment.

---

## 🧠 2. The AI Brain (Phase 2)
- **Point of Integration**: Anthropic Claude 3.5 Sonnet is hooked into `/api/extract`.
- **Efficiency Rule**: We’ve implemented a "Sub-300 Token" prompt to keep extraction costs ultra-low.
- **VSCode Bridge**: The extension in `src/vscode-extension/` is ready to be compiled (`npm run compile`) and run via F5 to sync tasks from chat.

---

## 📊 3. Master Metrics Logic
- **Tool Cost Benchmark**: Hardcoded to **$1.71 SGD** as per Marcus's master system.
- **Calculated ROI**: `(Task Value ÷ 1.71) × 100`.
- **Revision Tracking**: Automated via `COUNT(logs WHERE status_changed)`.
- **Single Source of Truth**: All logic resides in `src/web/lib/analytics.ts`.

---

## 🎥 4. Phase 3 (The Horizon)
- **Side-Drawer Logic**: Dashboard CTAs now trigger a premium glassmorphic side-drawer (`DashboardPage.tsx`).
- **Video Assistant**: Use this drawer to trigger video recaps of project progress.
- **Scale**: The next focus is on multi-user auth and Vercel performance insights.

---

## 🛠️ 5. Recent Environment Fixes (Apr 5, 2026)
- **Linting**: Silenced Tailwind 4 warnings at the **Workspace Level** (`movara-ai.code-workspace`).
- **Hydration**: Fixed the `tracking-widest` lag on initial page load.

---
*Brain Saved. Fresh Memory Restart Authorized. See you soon, Marcus.*
