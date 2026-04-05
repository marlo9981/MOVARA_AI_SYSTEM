# 03_DECISION_LOG

## Purpose

This folder records every meaningful decision made during the Atrellis project, including the reasoning, alternatives considered, and final outcome.

It exists to prevent the same debates from recurring and to give any new human or AI agent instant context on why things are the way they are.

## What belongs here

- Architecture decisions
- Tool and framework choices
- Scope and prioritization calls
- Naming and structural conventions
- Trade-off documentation

## What does not belong here

- Informal brainstorming
- Unresolved questions
- Implementation details
- Meeting transcripts

## Core files in this folder

- `DECISION_LOG_MASTER.md`
- `OPEN_DECISIONS.md`
- `SUPERSEDED_DECISIONS.md`
- `NOTES.md`

## Source of truth

The main source of truth is:

- `DECISION_LOG_MASTER.md`

## Usage rules

- Every decision should include: date, context, options considered, decision, and reasoning.
- Decisions should be recorded as soon as they are made, not retroactively.
- If a decision is reversed, move the old entry to `SUPERSEDED_DECISIONS.md` and log the new one.
- Open or unresolved decisions belong in `OPEN_DECISIONS.md`, not in the main log.

## Relationship to other folders

- Project direction changes should also be reflected in `02_PROJECT_STATE/`
- Technical decisions should be mirrored in `09_BUILD_SYSTEM/`
- Brand and positioning decisions should be reflected in `01_BRAND_FOUNDATION/`
