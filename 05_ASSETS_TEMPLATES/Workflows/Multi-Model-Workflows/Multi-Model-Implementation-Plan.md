# Multi-Model Workflow Implementation Plan
**Owner:** Marcus Ng — Movara AI
**Last Updated:** April 4, 2026
**Status:** Test Phase Active

---

## Part 1: Test First Workflow
### Research-Analysis → LinkedIn Content

**Topic:** WhatsApp Automation Market — Southeast Asia
**Goal:** Viral LinkedIn article/post with supporting market data
**Budget:** ~$1.85 | **Time:** ~35 minutes

---

### Execution Sequence

#### Phase 1: Research (Perplexity) — $0.10 | 3 min
**Task:** Real-time WhatsApp automation market data for SEA

**Prompt:**
```
Research the WhatsApp automation market in Southeast Asia and provide:
- Market size and growth rate (2024–2026)
- Top 5 platforms/tools being used (Twilio, WATI, 360dialog, etc.)
- Pricing landscape (what businesses are paying)
- Key verticals adopting it (F&B, retail, healthcare, logistics)
- Adoption rates by country (SG, MY, ID, TH, PH)
- Pain points businesses still face
- Emerging opportunities not yet saturated

Format as structured JSON for easy analysis.
```

**Save output as:** `[TEST-001] Perplexity Research Output`

---

#### Phase 2: Strategic Analysis (Claude Opus) — $1.25 | 12 min
**Task:** Extract the 3–5 most counterintuitive or surprising insights

**Prompt:**
```
Using this WhatsApp automation research for SEA: [paste Perplexity output]

Identify:
1. The 3 most surprising or counterintuitive findings a business owner would not expect
2. The biggest gap between what vendors promise and what businesses actually get
3. One underserved market segment that's clearly growing but under-served
4. The strongest ROI story (real numbers if available)
5. One provocative opinion I could take a strong stance on in a LinkedIn post

These will form the basis of a viral LinkedIn article. Make each insight punchy and specific.
```

**Save output as:** `[TEST-001] Opus Analysis Output`

---

#### Phase 3: LinkedIn Draft (Claude Sonnet) — $0.20 | 7 min
**Task:** Write the LinkedIn article

**Prompt:**
```
Using these insights: [paste Opus output]

Write a LinkedIn article for Marcus Ng, who sells AI automation to businesses in SEA.

FORMAT:
- Hook (first 2 lines must stop the scroll — make a bold claim or ask a provocative question)
- Body: 5 sections, each starting with a bold insight statement
- Each section: 3–4 sentences max
- End with: a specific call-to-action for businesses wanting to automate WhatsApp
- Total length: 600–800 words

TONE:
- Personal, first-person ("I've seen...", "In my work with clients...")
- Confident but not salesy
- Business value-focused: ROI, time saved, conversions

ALSO WRITE:
- 3 alternate hook variations I can A/B test
- 5 hashtag suggestions
- A 250-character LinkedIn post teaser
```

**Save output as:** `[TEST-001] Sonnet LinkedIn Draft`

---

#### Phase 4: Hero Image (Nano Banana) — $0.01 | 3 min
**Task:** Generate header image for the LinkedIn article

**Prompt:**
```
Create a professional LinkedIn article header image showing:
- A visual metaphor for WhatsApp automation in a business context
- Southeast Asian business aesthetic (clean, modern, slightly warm tones)
- No text overlay (will add separately)
- Style: corporate-minimal, not stock-photo generic
- Format: 1200x628px (LinkedIn OG)
```

**Save output as:** `[TEST-001] Nano Banana Header Image`

---

#### Phase 5: Final Polish (Claude Sonnet) — $0.15 | 7 min
**Task:** Optimize for LinkedIn algorithm + add personal voice

**Prompt:**
```
Polish this LinkedIn article for maximum engagement:

[paste Sonnet draft]

1. Strengthen the hook — make line 1 impossible to scroll past
2. Add 2 specific data points with sources (from the research)
3. Break up any paragraph longer than 3 lines
4. Add one personal story or observation (1 paragraph) — I've worked with [F&B / retail] clients in Singapore who...
5. Ensure the CTA at the end offers something specific (a free audit, a 30-min call, a template)
6. Confirm hashtags are current and not overused

Return: final publish-ready article + scheduling recommendation (best day/time for SEA B2B LinkedIn)
```

**Save output as:** `[TEST-001] Final LinkedIn Article — PUBLISH READY`

---

### Phase Cost Summary

| Phase | Model | Cost | Time |
|-------|-------|------|------|
| 1. Research | Perplexity | $0.10 | 3 min |
| 2. Analysis | Claude Opus | $1.25 | 12 min |
| 3. LinkedIn Draft | Claude Sonnet | $0.20 | 7 min |
| 4. Hero Image | Nano Banana | $0.01 | 3 min |
| 5. Final Polish | Claude Sonnet | $0.15 | 7 min |
| **TOTAL** | Mixed | **$1.71** | **32 min** |

**Expected output value:** 1 LinkedIn article with strong hook + image
**Potential lead value:** 1 inbound lead from LinkedIn = $3,000–$15,000 SGD project

**ROI ratio: ~1,750x–8,700x on a $1.71 workflow**

---

### Test Learnings Log

Fill in after running:

```
## TEST-001 Learnings

**Date:** ___________
**Topic:** WhatsApp Automation SEA
**Actual Cost:** $_____ (budget: $1.71)
**Actual Time:** _____ min (budget: 32 min)

**Quality Ratings (1–5):**
- Perplexity research depth: ___
- Opus insight quality: ___
- Sonnet draft quality (first pass): ___
- Nano Banana image relevance: ___
- Final polish quality: ___

**What worked:**
-
-

**What to improve:**
-
-

**Prompt adjustments for next run:**
-
-

**Published?** Yes / No
**Post engagement (7 days):** ___ views | ___ likes | ___ comments | ___ DMs
**Leads generated:** ___
```

---

---

## Part 2: Multi-Model Agent System

### 4 Active Agents + Routing Rules

Use this as your standard operating reference. Every project gets routed here first.

---

### Agent Quick-Select Guide

| Need | Agent | Models | Cost |
|------|-------|--------|------|
| Research + report | @research-analyst | Perplexity + Opus | $1.10 |
| Blog / social / emails | @content-creator | Sonnet + Nano Banana | $0.40 |
| Client photo analysis / doc extraction | @visual-analyst | Gemini + Sonnet | $0.05 |
| Business strategy / pitch | @strategic-advisor | Opus + Perplexity + Nano Banana | $3.50 |

---

### Agent 1: @research-analyst
**When to use:** Any project requiring market understanding before you pitch or create

**Movara AI use cases:**
- Pre-pitch research on a prospect's industry
- Competitive analysis before a proposal
- Trend reports to use in LinkedIn content
- Industry validation before building a new service

**Trigger phrase:**
```
"@research-analyst, research [topic/industry/competitor] for a Movara AI [pitch / report / article].
Focus on SEA market. Give me 3 key insights and strategic recommendations."
```

---

### Agent 2: @content-creator
**When to use:** After research is done — creating the deliverable

**Movara AI use cases:**
- LinkedIn articles and posts (like this test run)
- Client proposals (narrative sections)
- Sales emails and follow-up sequences
- Case study write-ups

**Trigger phrase:**
```
"@content-creator, using this analysis: [paste research/analysis]
Create [LinkedIn article / sales email / case study] for [target audience].
Tone: SEA B2B. Include [images / no images]."
```

---

### Agent 3: @visual-analyst
**When to use:** When a client sends you raw visual assets you need to work with

**Movara AI use cases:**
- Analysing a client's existing restaurant/retail photos for a pitch
- Extracting data from screenshots of competitor websites
- Processing before/after automation workflow diagrams
- Pulling data from client-sent PDFs or image-heavy reports

**Trigger phrase:**
```
"@visual-analyst, analyse these [images / screenshots / documents].
Extract: [product info / pricing / layout / text data].
Output: [formatted table / summary / catalog]."
```

---

### Agent 4: @strategic-advisor
**When to use:** High-stakes decisions — new market entry, major client pitch, pricing strategy

**Movara AI use cases:**
- Developing positioning for a new service tier
- Strategic advice before a large enterprise pitch
- Go-to-market plan for a new vertical (e.g., entering healthcare or logistics)
- Competitive response when a prospect pushes back with a competitor name

**Trigger phrase:**
```
"@strategic-advisor, develop a [positioning strategy / GTM plan / competitive response]
for Movara AI entering [market/vertical/client].
Include market research, strategic positioning, and competitive analysis."
```

---

### Model Routing — Decision Tree (Quick Reference)

```
NEW PROJECT STARTS
      ↓
Real-time data needed?
├── YES → Start with @research-analyst (Perplexity first)
└── NO ↓

Strategic decision / high-stakes output?
├── YES → Use @strategic-advisor (Opus-led)
└── NO ↓

Creating content / writing deliverable?
├── YES → Use @content-creator (Sonnet-led)
└── NO ↓

Images / documents to process?
└── YES → Use @visual-analyst (Gemini-led)
```

---

### Multi-Agent Combos (Most Common Movara AI Projects)

**Combo A: New Client Pitch**
1. `@research-analyst` — research client's industry + competitors
2. `@strategic-advisor` — develop positioning and win strategy
3. `@content-creator` — write proposal copy + visuals
4. **Total cost:** ~$5.00 | **Time:** ~45 min

**Combo B: Content Marketing (LinkedIn)**
1. `@research-analyst` — market research on topic
2. `@content-creator` — write article + hero image
3. **Total cost:** ~$1.50 | **Time:** ~20 min

**Combo C: Client Onboarding Deliverable**
1. `@visual-analyst` — analyse client's existing assets
2. `@content-creator` — build deliverable from analysis
3. **Total cost:** ~$0.45 | **Time:** ~15 min

**Combo D: New Service Launch**
1. `@strategic-advisor` — full GTM strategy
2. `@content-creator` — website copy, sales page, emails
3. **Total cost:** ~$3.90 | **Time:** ~60 min

---

---

## Part 3: Cost Tracking + ROI Template

### Per-Project Notes Entry

Copy this into each project's CLAUDE.md or notes when running multi-model work:

```markdown
## Multi-Model Workflow Log

**Project:** [name]
**Date:** [date]
**Workflow Used:** [Research-Analysis / Content Creation / Client Delivery / Custom]
**Agents Used:** [@research-analyst / @content-creator / @visual-analyst / @strategic-advisor]

### Cost Breakdown
| Phase | Model | Budget | Actual | Variance |
|-------|-------|--------|--------|----------|
| Research | Perplexity | $0.10 | $____ | $____ |
| Analysis | Opus | $1.25 | $____ | $____ |
| Content | Sonnet | $0.20 | $____ | $____ |
| Visuals | Nano Banana | $0.01 | $____ | $____ |
| Polish | Sonnet | $0.15 | $____ | $____ |
| **TOTAL** | | **$1.71** | **$____** | **$____** |

### Output Quality
- [ ] Research: current + cited
- [ ] Analysis: actionable insights (not generic)
- [ ] Content: client-ready / publish-ready
- [ ] Visuals: professional quality
- [ ] Final output: no further editing needed

### ROI Tracking
**Time saved vs. manual:** _____ hours
**Estimated manual cost (at $150/hr):** $_____
**Workflow cost:** $_____
**ROI multiple:** _____x

**Revenue impact:**
- Lead generated: Yes / No
- Project won from this output: Yes / No — Value: $_____
- Client retained: Yes / No
```

---

## Part 4: ROI Metrics — Dashboard Addition

Add these 3 metrics to `06_METRICS_DASHBOARDS/Core_KPIs_and_Definitions.md`:

**AI Workflow ROI**
- Definition: Revenue generated or costs saved directly from multi-model workflow outputs
- Formula: (Revenue from AI-assisted projects ÷ Total AI tool spend) × 100
- Target: >500x ROI (e.g., $1,000 AI spend → $5,000+ in projects)

**Cost Per Deliverable**
- Definition: Total AI model cost to produce one client-ready output
- Formula: Sum of all model costs for one project
- Target: <$5.00 per deliverable
- Benchmark: $1.71 (Research-Analysis-Workflow)

**Time-to-Deliverable**
- Definition: Clock time from first prompt to publish/send-ready output
- Formula: End time − Start time (per workflow)
- Target: <45 minutes per deliverable
- Benchmark: 32 min (Research-Analysis-Workflow)

---

## Next Actions

1. **Run TEST-001** — WhatsApp Automation SEA → LinkedIn article
2. **Fill in learnings log** after publishing
3. **Monitor LinkedIn post** for 7 days — log views, DMs, leads
4. **Run TEST-002** — pick next workflow (Combo A or B above)
5. **After 3 tests** — review cost actuals vs. budget, adjust prompt templates

---

*This document is a living playbook. Update after every workflow run.*
