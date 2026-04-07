# Research + Analysis Workflow

## When to Use
- Market research projects
- Competitor analysis
- Industry trend analysis
- Client research before pitch
- Strategic planning projects

## Models Used (In Order)

1. **Perplexity** - Real-time research
2. **Claude Opus** - Strategic analysis
3. **Claude Sonnet** - Content creation
4. **Nano Banana** - Visualization
5. **Claude Sonnet** - Final polish

---

## Phase 1: Research (Perplexity)

**Task:** Get latest market data and trends

**Prompt Template:**
```
"Research [topic] and provide:
- Latest trends (last 6 months)
- Key players/competitors
- Market size estimates
- Growth predictions
- Emerging opportunities

Format as structured data for easy analysis."
```

**Time:** 2-3 minutes
**Cost:** $0.10
**Output:** JSON or structured text with research data

---

## Phase 2: Analysis (Claude Opus)

**Task:** Deep strategic analysis

**Prompt Template:**
```
"Using this research data: [paste Perplexity output]

Provide deep analysis:
1. Market landscape overview
2. Competitive positioning
3. Key opportunities (3-5)
4. Key threats (3-5)
5. Strategic recommendations (3-5)

Make it 3-4 pages of detailed analysis."
```

**Time:** 10-15 minutes
**Cost:** $1.00-1.50
**Output:** Detailed 3-4 page strategic analysis

---

## Phase 3: Content Creation (Claude Sonnet)

**Task:** Draft executive summary

**Prompt Template:**
```
"Using this analysis: [paste Opus output]

Create a 2-page executive summary with:
1. One-sentence market summary
2. Top 3 opportunities
3. Top 3 risks
4. Strategic recommendation

Write for C-suite / investor audience."
```

**Time:** 5-10 minutes
**Cost:** $0.20
**Output:** 2-page executive summary

---

## Phase 4: Visualization (Nano Banana)

**Task:** Create market visualization

**Prompt Template:**
```
"Create a visual showing the market landscape with:
- Competitors on X-axis (by market share)
- Innovation level on Y-axis
- Bubble size = company size
- Include 5 key competitors

Style: Professional, minimal, modern"
```

**Time:** 3-5 minutes
**Cost:** $0.005
**Output:** Professional market landscape visualization

---

## Phase 5: Final Polish (Claude Sonnet)

**Task:** Refine everything and add captions

**Prompt Template:**
```
"Polish this market analysis for client presentation:

1. Add image caption explaining market landscape
2. Refine executive summary (tighten to 1.5 pages)
3. Add 5 key takeaways at top
4. Create talking points for 10-minute presentation

Make it ready to send to C-suite."
```

**Time:** 5-10 minutes
**Cost:** $0.15
**Output:** Client-ready presentation

---

## Cost Summary

| Phase | Model | Cost | Time |
|-------|-------|------|------|
| 1. Research | Perplexity | $0.10 | 3 min |
| 2. Analysis | Opus | $1.25 | 12 min |
| 3. Content | Sonnet | $0.20 | 7 min |
| 4. Visuals | Nano Banana | $0.005 | 4 min |
| 5. Polish | Sonnet | $0.15 | 7 min |
| **Total** | **Mixed** | **$1.70** | **33 min** |

---

## Quality Checklist

Before delivering:

- [ ] Perplexity research is current (last 30 days)
- [ ] Opus analysis includes all recommendations
- [ ] Sonnet summary is executive-level (C-suite ready)
- [ ] Nano Banana visualization is clear and professional
- [ ] Final polish includes talking points
- [ ] All sources cited
- [ ] Ready for client delivery

---

## Example Output

**Research:** Latest WhatsApp automation market research
**Analysis:** Strategic positioning for Movara AI in this market
**Summary:** 2-page executive overview
**Visual:** Market landscape showing competitors
**Talking Points:** 10-minute pitch for investors

---

## Project Notes Template

Use this in your project CLAUDE.md:

```
## Research Workflow

**Workflow:** Research-Analysis-Workflow.md
**Models:** Perplexity → Opus → Sonnet → Nano Banana → Sonnet
**Cost Budget:** $1.70
**Actual Cost:** $[X]
**Time:** 33 minutes
**Quality:** Enterprise-grade

**Phases Completed:**
- [x] Perplexity research
- [x] Opus analysis
- [x] Sonnet summary
- [x] Nano Banana visualization
- [x] Final polish

**Deliverables:**
1. 2-page executive summary
2. Market landscape visualization
3. Talking points for presentation
```

---

**This workflow is ready to use. Copy the phases, follow the prompts, and deliver enterprise-grade research analysis in 30 minutes.**
