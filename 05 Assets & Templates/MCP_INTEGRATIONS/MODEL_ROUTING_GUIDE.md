# Model Routing Decision Guide
## Which Model to Use for Each Task

---

## Quick Decision Tree

```
START TASK
    ↓
Do you need real-time web data?
├─ YES → Use PERPLEXITY
└─ NO ↓
  
Do you need complex reasoning/strategy?
├─ YES → Use CLAUDE OPUS
└─ NO ↓

Do you need to analyze images?
├─ YES → Use GOOGLE GEMINI
└─ NO ↓

Do you need to generate images?
├─ YES → Use GOOGLE GEMINI
└─ NO ↓

Do you need fast iteration/drafting?
├─ YES → Use CLAUDE SONNET (default)
└─ NO → Use OPUS for deep work
```

---

## Task Type 1: Research & Analysis

**When:** Gathering market data, competitor analysis, trend research
**Models:** Perplexity → Claude Opus → Google Gemini (for visualization)

### Step-by-Step
1. **Perplexity:** Get real-time web data (2 minutes, $0.10)
2. **Claude Opus:** Deep analysis with reasoning (10 minutes, $1.00)
3. **Claude Sonnet:** Write executive summary (5 minutes, $0.20)
4. **Google Gemini:** Generate market visualization (3 minutes, FREE)

### Cost
- Light research: $0.20
- Full analysis: $1.30

### Example Project: "Research WhatsApp automation market in Singapore"
- Perplexity: "Find latest WhatsApp automation solutions, their pricing, target market"
- Opus: "Analyze competitive landscape, gaps, opportunities"
- Sonnet: "Write 1-page executive summary"

---

## Task Type 2: Content Creation

**When:** Blog posts, sales emails, social media, marketing materials
**Models:** Claude Sonnet → Google Gemini (images) → Claude Sonnet (refine)

### Step-by-Step
1. **Claude Sonnet:** Draft content (5 minutes, $0.30)
2. **Google Gemini:** Generate hero image (3 minutes, FREE)
3. **Claude Sonnet:** Add captions and refine (2 minutes, $0.10)

### Cost
- Blog post + 1 image: $0.40
- Email sequence + 3 images: $0.30
- Social posts + 5 images: $0.40

### Example Project: "Create WhatsApp automation landing page"
- Sonnet: Draft 5 sections of copy
- Gemini: Generate 3 hero images showing automation in action
- Sonnet: Add captions, testimonials, CTA

---

## Task Type 3: Client Delivery (Critical)

**When:** Proposals, pitch decks, final client outputs
**Models:** Perplexity → Opus → Sonnet → Gemini (analyze + generate)

### Step-by-Step
1. **Perplexity:** Research client's industry/competitors (2 min, $0.10)
2. **Claude Opus:** Create strategic positioning (15 min, $2.00)
3. **Claude Sonnet:** Draft detailed content (10 min, $0.30)
4. **Google Gemini:** Analyze client's existing photos (2 min, free)
5. **Google Gemini:** Generate 5 mockups (5 min, free)

### Cost
- Research + Strategy + Content + Visuals: $2.40

### Example Project: "Sales pitch for restaurant automation client"
- Perplexity: Research restaurant automation trends, competitor positioning
- Opus: Develop unique positioning strategy for this client
- Sonnet: Draft pitch deck copy, ROI calculations
- Gemini: Analyze client's existing restaurant photos
- Gemini: Generate 5 before/after mockups

---

## Summary

**Default Workflow:**
1. **Perplexity** for research (if needed)
2. **Opus** for strategy (if needed)
3. **Sonnet** for execution (always)
4. **Gemini** for all image tasks (analysis + generation) - FREE

**Result:** Right tool for right job. Fast. Cost-optimized. Quality assured.

🚀 **You now have an intelligent routing system. Every project automatically uses the best model for each task.**
