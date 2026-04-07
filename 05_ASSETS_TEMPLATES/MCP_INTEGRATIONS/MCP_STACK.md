# Movara AI - MCP Stack & Model Integrations
**Last Updated:** April 2025

## What is an MCP?
An MCP (Model Context Protocol) is a bridge connecting Claude to external tools, APIs, and models. This file lists all integrations available to Movara AI projects.

## Current Status: 8 MCPs Active ✅

| MCP | Connected To | Purpose | Status | Setup |
|-----|-------------|---------|--------|-------|
| Claude API | Anthropic | Code execution, reasoning | ✅ Active | Done |
| GitHub | Your repos | Code management | ✅ Active | Done |
| Supabase | Database | Data access, auth | ✅ Active | Done |
| Stripe | Payments | Invoicing, billing | ✅ Active | Done |
| Slack | Team | Notifications | ✅ Active | Done |
| Filesystem | Local | File I/O | ✅ Active | Done |
| Browser | Web | Research, scraping | ✅ Active | Done |
| Perplexity | Real-time web | Current research | ✅ Active | Done |

## Multi-Model MCPs (Core to Movara)

### Claude Opus (Complex Reasoning)
- **Cost:** $15/1M input tokens
- **Best For:** Strategic decisions, deep analysis, client-facing final output
- **Status:** ✅ Already configured
- **Use When:** Complex reasoning chains, 1000+ token responses needed

### Claude Sonnet (Fast Execution)
- **Cost:** $3/1M input tokens
- **Best For:** Drafting, iteration, quick execution
- **Status:** ✅ Already configured
- **Use When:** Default for 70% of work, rapid iteration cycles

### Perplexity (Real-Time Research)
- **Cost:** $29.98/month (Pro subscription)
- **Best For:** Current events, trends, market research, web data
- **Status:** ✅ Already configured via API
- **Use When:** Research tasks requiring real-time web data

### Google Gemini (Vision & Multi-Modal)
- **Cost:** Free
- **Best For:** Image analysis, OCR, document processing, image generation
- **Status:** ✅ Active (API key obtained)
- **Use When:** Client photo analysis, document extraction, all image generation tasks

### Nano Banana (Image Generation)
- **Cost:** $0.004-0.012/image (very cheap)
- **Best For:** Product mockups, marketing visuals, social media
- **Status:** ❌ Superseded by Google Gemini
- **Use When:** Not needed — Google Gemini handles all image analysis and generation tasks (free)

### Google Veo (Video Generation)
- **Cost:** TBD (public beta)
- **Best For:** Demo videos, explainer videos
- **Status:** 🔄 WAITLIST (Coming soon)
- **Use When:** Client demo videos, product walkthroughs

## Monthly Cost Breakdown

| Service | Cost | Status |
|---------|------|--------|
| Claude Pro | $29.98 | Active |
| Claude API (usage) | $100-200 | Variable |
| Perplexity Pro | $29.98 | Active |
| Google One AI 5TB | $29 | Active |
| Google Gemini | Free | Active |
| Veo | TBD | When available |
| **Total Current** | **$190-260** | **Sustainable** |

## Integration Checklist

### Already Done ✅
- [x] Claude API (Opus + Sonnet)
- [x] Perplexity API
- [x] GitHub MCP
- [x] Supabase MCP
- [x] Stripe MCP
- [x] Slack MCP
- [x] Filesystem MCP
- [x] Browser MCP
- [x] Google Gemini (API key obtained)

### This Week 🔲
- [ ] Add Gemini key to .env file (if not already done)
- [ ] Test first multi-model project with Gemini for image tasks

### When Available 🔄
- [ ] Join Veo waitlist
- [ ] Integrate when beta access granted

## How to Add New MCPs

1. **Get API Key:** Visit provider's dashboard
2. **Add to .env:** `PROVIDER_API_KEY=your_key_here`
3. **Document:** Create integration file in `MCP_INTEGRATIONS/`
4. **Update AGENT_CATALOG.md:** Add agent model preferences
5. **Test:** Run sample project with new model

## Cost Tracking

Track API usage monthly in `06_METRICS_DASHBOARDS/API-Usage-Tracker.md`:

```
Claude Opus: 5M tokens/month = $75
Claude Sonnet: 45M tokens/month = $135
Perplexity: 50 calls/month = fixed $29.98
Google Gemini: ~100 calls/month = free
Nano Banana: ~50 images/month = $0.25
Total: ~$240/month
```

---

## Next Steps
1. Review `MODEL_ROUTING_GUIDE.md` (decision tree for which model to use)
2. Check `AGENT_CATALOG.md` for agent model preferences
3. Create project with mixed-model workflow
4. Track costs in metrics dashboard

**Your system now has intelligent model routing. Every project uses the best AI for each task.** 🚀