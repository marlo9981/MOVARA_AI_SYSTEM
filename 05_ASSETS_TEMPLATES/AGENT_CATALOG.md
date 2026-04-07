# Movara AI - Agent Catalog

---

## Multi-Model Agents (NEW SECTION)

These agents now have model preferences for optimal execution.

### @research-analyst

**Models:**
- Primary: Perplexity (real-time web research)
- Secondary: Claude Opus (synthesis + analysis)

**Call:**
```
"@research-analyst, research [topic] and provide 3-page executive summary"
```

**Output:**
1. Real-time research data from Perplexity
2. Deep analysis from Opus
3. Sources and citations
4. Strategic recommendations

**When to Use:**
- Market research
- Competitor analysis
- Trend forecasting
- Industry reports

**Cost:** $1.10/project

---

### @content-creator

**Models:**
- Primary: Claude Sonnet (drafting, iteration)
- Optional: Nano Banana (images)
- Optional: Google Gemini (analyze client assets)

**Call:**
```
"@content-creator, create blog post about [topic] with 3 hero images"
```

**Output:**
1. 1,500+ word blog post (Sonnet)
2. 3 custom hero images (Nano Banana)
3. Meta descriptions, captions (Sonnet)

**When to Use:**
- Blog posts
- Marketing content
- Sales pages
- Social media content

**Cost:** $0.40/article

---

### @visual-analyst

**Models:**
- Primary: Google Gemini (image analysis, vision)
- Secondary: Claude Sonnet (report writing)
- Optional: Claude Opus (strategic insights)

**Call:**
```
"@visual-analyst, analyze these [50 images] and create product catalog"
```

**Output:**
1. Extracted data from images (Gemini)
2. Formatted product catalog (Sonnet)
3. Strategic recommendations (Opus if needed)

**When to Use:**
- Product photo analysis
- Client asset processing
- Document extraction
- Data collection from images

**Cost:** $0.02-0.10/project

---

### @strategic-advisor

**Models:**
- Primary: Claude Opus (deep reasoning)
- Optional: Perplexity (market research)
- Optional: Nano Banana (visualizations)

**Call:**
```
"@strategic-advisor, develop positioning strategy for [client] in [market]"
```

**Output:**
1. Market research (Perplexity)
2. Strategic positioning (Opus)
3. Competitive analysis (Opus)
4. Visual positioning map (Nano Banana)
5. 10-page strategy document

**When to Use:**
- Business strategy
- Market positioning
- Go-to-market planning
- Strategic positioning

**Cost:** $3.50/engagement

---

## Model Preferences by Existing Agent

### @sales-email-writer
**Models:** Claude Sonnet (primary) + optional Perplexity (market research)

### @ui-designer
**Models:** Claude Sonnet (design thinking) + Nano Banana (mockups)

### @devops-automator
**Models:** Claude Sonnet (scripts) + Claude Opus (architecture review)

### @copywriter
**Models:** Claude Sonnet (drafting) + Nano Banana (visuals)

---

## Using Multiple Models in One Agent Call

**Example:** "@sales-analyst, research 5 competitors and create comparison"

**Internal flow:**
1. Perplexity: Get real-time competitor data
2. Claude Opus: Analyze competitive landscape
3. Nano Banana: Create competitive positioning chart
4. Claude Sonnet: Write comparison document

**You call once, system routes to right models automatically.**

---

## Model Routing for All Agents

**Rule 1:** If research needed → include Perplexity
**Rule 2:** If strategic → include Opus
**Rule 3:** If content/drafting → Sonnet (default)
**Rule 4:** If images → Nano Banana or Gemini
**Rule 5:** Always track cost in project notes
