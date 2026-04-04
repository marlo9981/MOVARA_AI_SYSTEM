# Marcus AI Operating System v1.0
## Claude Code Multi-Agent Architecture for AI Consulting & Product Builds

Your personal AI team: 30+ specialized agents, organized by function, deployed via Claude Code.

---

## System Overview

```
marcus-os/
├── CLAUDE.md                          # Project memory & instructions
├── README.md                          # Project overview & onboarding
├── docs/
│   ├── architecture.md                # System design decisions
│   ├── agent-catalog.md              # Full agent reference
│   └── workflows.md                   # Common job sequences
├── .claude/
│   ├── settings.json                  # Claude Code config
│   ├── hooks/
│   │   ├── project-init.md           # Spin up new projects
│   │   ├── content-pipeline.md       # Content creation workflows
│   │   └── deployment-check.md       # Pre-launch validation
│   └── skills/
│       ├── consultant-pitches/       # Consulting proposals & decks
│       ├── content-creators/         # Blog, video, social content
│       ├── build-systems/            # Next.js, Three.js, GSAP setups
│       ├── case-study-builders/      # ROI reports & case studies
│       └── market-researchers/       # Competitive analysis, trends
├── agents/
│   ├── ENGINEERING/
│   │   ├── full-stack-architect.md
│   │   ├── frontend-developer.md
│   │   ├── backend-architect.md
│   │   ├── devops-automator.md
│   │   ├── ai-engineer.md
│   │   └── rapid-prototyper.md
│   ├── PRODUCT/
│   │   ├── trend-researcher.md
│   │   ├── feedback-synthesizer.md
│   │   └── sprint-prioritizer.md
│   ├── CONSULTING/
│   │   ├── pitch-writer.md
│   │   ├── roi-calculator.md
│   │   ├── case-study-builder.md
│   │   ├── competitive-analyzer.md
│   │   └── business-strategist.md
│   ├── CONTENT/
│   │   ├── blog-writer.md
│   │   ├── video-scriptwriter.md
│   │   ├── social-strategist.md
│   │   ├── linkedin-viral-specialist.md
│   │   ├── newsletter-editor.md
│   │   └── content-repurposer.md
│   ├── DESIGN/
│   │   ├── ui-designer.md
│   │   ├── ux-researcher.md
│   │   ├── brand-guardian.md
│   │   ├── visual-storyteller.md
│   │   └── animation-specialist.md
│   ├── MARKETING/
│   │   ├── demand-generator.md
│   │   ├── growth-hacker.md
│   │   ├── seo-optimizer.md
│   │   ├── analytics-reporter.md
│   │   └── funnel-builder.md
│   └── OPERATIONS/
│       ├── project-manager.md
│       ├── deployment-specialist.md
│       ├── cost-optimizer.md
│       └── quality-assurance.md
├── templates/
│   ├── next-js-app/                  # Next.js + Supabase + Stripe starter
│   ├── three-js-scene/               # Three.js + GSAP animation starter
│   ├── consulting-deck/              # Canva/Gamma presentation template
│   └── case-study-doc/               # Professional Word doc template
├── runbooks/
│   ├── new-client-onboarding.md
│   ├── website-launch.md
│   ├── content-sprint.md
│   └── automation-setup.md
└── past-projects/                    # Archived case studies & docs
    ├── atrellis/
    ├── movara/
    └── [client-projects]/

```

---

## The Agent System

### Why 30+ Agents?
- **Specialization:** Each agent has one focused job = better quality outputs
- **Parallel Execution:** Run multiple agents simultaneously on different tasks
- **Consistency:** Same agent = same voice, same quality standards
- **Scalability:** Add agents as your projects grow

### How They Work
**You call a specific agent:**
```
"@backend-architect, design the auth system for this SaaS"
"@roi-calculator, quantify the value of this automation for that client"
"@viral-linkedin-specialist, write a post about our latest AI integration win"
```

**Each agent:**
- Has its own `.md` file with role definition + context
- Understands its scope (what it DOES + what it doesn't)
- Maintains consistency across projects
- Can be paired with other agents for complex workflows

---

## Agent Catalog

### ENGINEERING (6 agents)

#### 1. **Full-Stack Architect** (@full-stack-architect)
**Role:** Design scalable application architecture end-to-end  
**Specializes In:** Next.js + Supabase + Vercel stacks, database schemas, API design  
**When to Use:** Starting a new product, major refactors, infrastructure planning  
**Output:** Architecture diagrams, tech stack recommendations, implementation plan  

#### 2. **Frontend Developer** (@frontend-developer)
**Role:** Build pixel-perfect, performant user interfaces  
**Specializes In:** React, TypeScript, Tailwind CSS, animation libraries (GSAP)  
**When to Use:** Building new pages, fixing UI bugs, implementing designs  
**Output:** React components, CSS/animation code, performance metrics  

#### 3. **Backend Architect** (@backend-architect)
**Role:** Design robust, scalable backend systems  
**Specializes In:** Supabase, PostgreSQL, Edge Functions, API design  
**When to Use:** Building APIs, database design, server logic  
**Output:** SQL schemas, API endpoints, backend logic  

#### 4. **DevOps Automator** (@devops-automator)
**Role:** Automate deployment, CI/CD, infrastructure management  
**Specializes In:** Vercel, GitHub Actions, environment setup, cost optimization  
**When to Use:** Setting up deployments, automating tests, reducing costs  
**Output:** Deployment configs, automation scripts, monitoring setup  

#### 5. **AI Engineer** (@ai-engineer)
**Role:** Integrate AI/Claude into applications (APIs, MCP, agents)  
**Specializes In:** Claude API, MCP architecture, prompt engineering, agentic systems  
**When to Use:** Building AI features, setting up multi-agent systems, cost optimization  
**Output:** API integration code, MCP setups, agent architecture designs  

#### 6. **Rapid Prototyper** (@rapid-prototyper)
**Role:** Build quick, working prototypes in hours, not days  
**Specializes In:** HTML/CSS, React hooks, quick APIs, demo-ready code  
**When to Use:** Proof of concepts, client demos, validating ideas fast  
**Output:** Working prototypes, live demos, throwaway code that teaches  

---

### PRODUCT (3 agents)

#### 7. **Trend Researcher** (@trend-researcher)
**Role:** Identify market trends, emerging opportunities, shifting demand  
**Specializes In:** Market research, competitor analysis, trend forecasting  
**When to Use:** Planning product launches, identifying market gaps, strategic planning  
**Output:** Trend reports, market analysis, opportunity assessments  

#### 8. **Feedback Synthesizer** (@feedback-synthesizer)
**Role:** Synthesize customer feedback into actionable insights  
**Specializes In:** User research analysis, pain point extraction, feature prioritization  
**When to Use:** After customer interviews, analyzing support tickets, planning roadmaps  
**Output:** Synthesis reports, user personas, feature priorities  

#### 9. **Sprint Prioritizer** (@sprint-prioritizer)
**Role:** Ruthlessly prioritize work for maximum impact  
**Specializes In:** Impact/effort analysis, roadmap planning, scope management  
**When to Use:** Planning sprints, managing scope, communicating priorities  
**Output:** Prioritized feature lists, sprint plans, scope documents  

---

### CONSULTING (5 agents)

#### 10. **Pitch Writer** (@pitch-writer)
**Role:** Write compelling consulting pitches & proposals  
**Specializes In:** Business language, ROI framing, client pain point mapping  
**When to Use:** Responding to RFPs, pitching new services, proposal writing  
**Output:** Proposals, pitch decks, email pitches, elevator pitches  

#### 11. **ROI Calculator** (@roi-calculator)
**Role:** Quantify the financial value of AI/automation solutions  
**Specializes In:** Cost analysis, time savings, revenue impact modeling  
**When to Use:** Proving value to clients, building business cases, pricing decisions  
**Output:** ROI spreadsheets, financial models, value quantification slides  

#### 12. **Case Study Builder** (@case-study-builder)
**Role:** Create client proof through powerful case studies  
**Specializes In:** Data storytelling, before/after narratives, metrics presentation  
**When to Use:** Post-project, building social proof, content marketing  
**Output:** Case study docs, metrics decks, client testimonial requests  

#### 13. **Competitive Analyzer** (@competitive-analyzer)
**Role:** Deep-dive competitive landscape analysis  
**Specializes In:** Market research, competitor positioning, differentiation strategy  
**When to Use:** Entering new markets, product planning, positioning decisions  
**Output:** Competitive analysis reports, SWOT, positioning recommendations  

#### 14. **Business Strategist** (@business-strategist)
**Role:** Design business models, go-to-market strategies, scaling plans  
**Specializes In:** Business strategy, unit economics, expansion planning  
**When to Use:** Planning new services, scaling businesses, strategic planning  
**Output:** Strategy documents, business models, 12-month plans  

---

### CONTENT (6 agents)

#### 15. **Blog Writer** (@blog-writer)
**Role:** Write long-form, SEO-optimized technical content  
**Specializes In:** Technical writing, how-to guides, thought leadership  
**When to Use:** Content marketing, building authority, SEO  
**Output:** Blog posts (2000+ words), outlines, keyword research  

#### 16. **Video Script Writer** (@video-scriptwriter)
**Role:** Write scripts for short-form video content  
**Specializes In:** TikTok/Instagram/YouTube Shorts, hooks, retention patterns  
**When to Use:** Social media growth, audience engagement, personal branding  
**Output:** Script outlines, talking points, hook ideas, edit notes  

#### 17. **Social Strategist** (@social-strategist)
**Role:** Design content strategies for organic social growth  
**Specializes In:** Audience psychology, content pillars, posting strategy  
**When to Use:** Building social presence, planning content calendars  
**Output:** Content calendars, pillar definitions, growth strategies  

#### 18. **LinkedIn Viral Specialist** (@linkedin-viral-specialist)
**Role:** Write high-engagement LinkedIn content  
**Specializes In:** B2B storytelling, professional narrative, viral hooks  
**When to Use:** Building LinkedIn presence, recruiting, thought leadership  
**Output:** LinkedIn posts, carousel ideas, engagement hooks  

#### 19. **Newsletter Editor** (@newsletter-editor)
**Role:** Create compelling email/newsletter content  
**Specializes In:** Copywriting, list building, email automation  
**When to Use:** Building email lists, nurturing leads, consistent communication  
**Output:** Newsletter templates, email sequences, subscriber growth strategies  

#### 20. **Content Repurposer** (@content-repurposer)
**Role:** Maximize content ROI by repurposing across channels  
**Specializes In:** Formats, platform optimization, content amplification  
**When to Use:** After creating any content, maximizing reach  
**Output:** Repurposed content, distribution strategy, amplification plan  

---

### DESIGN (5 agents)

#### 21. **UI Designer** (@ui-designer)
**Role:** Design beautiful, functional user interfaces  
**Specializes In:** Figma, design systems, Tailwind CSS, component libraries  
**When to Use:** Building new product UIs, design systems, component libraries  
**Output:** Figma files, design specs, component libraries, design systems  

#### 22. **UX Researcher** (@ux-researcher)
**Role:** Research user behavior & validate design decisions  
**Specializes In:** User research, usability testing, data-driven design  
**When to Use:** Validating assumptions, improving conversion, user testing  
**Output:** Research plans, usability reports, design recommendations  

#### 23. **Brand Guardian** (@brand-guardian)
**Role:** Maintain consistent brand identity across all touchpoints  
**Specializes In:** Brand guidelines, visual consistency, brand voice  
**When to Use:** Creating brand guidelines, ensuring consistency, brand reviews  
**Output:** Brand guidelines, design audit reports, consistency recommendations  

#### 24. **Visual Storyteller** (@visual-storyteller)
**Role:** Create compelling visual narratives (slides, infographics, images)  
**Specializes In:** Data visualization, infographics, presentation design  
**When to Use:** Presenting data, creating reports, visual communication  
**Output:** Infographics, presentation decks, visual assets  

#### 25. **Animation Specialist** (@animation-specialist)
**Role:** Design smooth, purposeful animations for web/app  
**Specializes In:** GSAP, Framer Motion, CSS animations, motion design  
**When to Use:** Creating delightful interactions, scroll animations, transitions  
**Output:** Animation code, motion specifications, interaction demos  

---

### MARKETING (5 agents)

#### 26. **Demand Generator** (@demand-generator)
**Role:** Create systematic lead generation & demand  
**Specializes In:** Lead funnels, outbound strategies, conversion optimization  
**When to Use:** Building sales funnels, lead gen campaigns, growth initiatives  
**Output:** Campaign plans, funnel designs, lead gen strategies  

#### 27. **Growth Hacker** (@growth-hacker)
**Role:** Find unconventional, scalable growth tactics  
**Specializes In:** Viral mechanics, referrals, organic growth, experimentation  
**When to Use:** Need rapid growth, limited budget, testing new channels  
**Output:** Growth experiments, traction ideas, tactical plans  

#### 28. **SEO Optimizer** (@seo-optimizer)
**Role:** Optimize for search visibility & organic traffic  
**Specializes In:** Technical SEO, content optimization, keyword strategy  
**When to Use:** Improving organic traffic, technical SEO audits, content planning  
**Output:** SEO strategies, technical audits, content recommendations  

#### 29. **Analytics Reporter** (@analytics-reporter)
**Role:** Translate data into actionable marketing insights  
**Specializes In:** Analytics, reporting, performance analysis, attribution  
**When to Use:** Monthly reviews, performance analysis, decision support  
**Output:** Analytics reports, performance dashboards, insights & recommendations  

#### 30. **Funnel Builder** (@funnel-builder)
**Role:** Design high-converting sales & marketing funnels  
**Specializes In:** Funnel optimization, conversion design, customer journey  
**When to Use:** Building sales funnels, improving conversions, funnel analysis  
**Output:** Funnel designs, conversion plans, optimization recommendations  

---

### OPERATIONS (4 agents)

#### 31. **Project Manager** (@project-manager)
**Role:** Keep projects on track with clear timelines & deliverables  
**Specializes In:** Planning, scheduling, risk management, stakeholder updates  
**When to Use:** Large projects, team coordination, progress tracking  
**Output:** Project plans, timelines, status reports, risk assessments  

#### 32. **Deployment Specialist** (@deployment-specialist)
**Role:** Ensure flawless launches with pre-flight checklists  
**Specializes In:** Deployment planning, testing protocols, rollback strategies  
**When to Use:** Before any major release, product launches, updates  
**Output:** Deployment checklists, test plans, launch guides  

#### 33. **Cost Optimizer** (@cost-optimizer)
**Role:** Minimize infrastructure & AI costs without sacrificing quality  
**Specializes In:** Cost analysis, resource optimization, tool selection  
**When to Use:** Reviewing costs, optimizing AI spend, infrastructure decisions  
**Output:** Cost analyses, optimization recommendations, implementation plans  

#### 34. **Quality Assurance** (@quality-assurance)
**Role:** Catch bugs, ensure quality standards before launch  
**Specializes In:** Testing strategies, QA checklists, bug reporting  
**When to Use:** Pre-launch QA, testing complex features, quality gates  
**Output:** QA plans, test cases, bug reports, quality recommendations  

---

## Hooks: Common Workflows

### Startup Hook
**When:** Starting a new client project  
**Agent Sequence:**
1. @business-strategist → Define scope & success metrics
2. @competitive-analyzer → Understand competitive landscape
3. @full-stack-architect → Design technical approach
4. @pitch-writer → Document approach for client

**Output:** Project brief, technical spec, client communication

---

### Content Sprint
**When:** Creating a month of content  
**Agent Sequence:**
1. @social-strategist → Plan content calendar & pillars
2. @blog-writer → Write 4 long-form posts
3. @video-scriptwriter → Write 8 short-form video scripts
4. @content-repurposer → Create 40+ repurposed pieces
5. @growth-hacker → Identify distribution tactics

**Output:** Content calendar, 50+ pieces ready to publish

---

### Case Study Generation
**When:** Want to showcase a win  
**Agent Sequence:**
1. @roi-calculator → Quantify the value created
2. @case-study-builder → Write the full narrative
3. @visual-storyteller → Create data visualizations
4. @linkedin-viral-specialist → Write the launch post

**Output:** Full case study doc, LinkedIn post, metrics deck

---

### Website Launch
**When:** Deploying a new site  
**Agent Sequence:**
1. @ui-designer → Finalize designs
2. @frontend-developer → Build pages
3. @backend-architect → Build APIs
4. @devops-automator → Set up deployment
5. @deployment-specialist → Pre-launch checklist
6. @seo-optimizer → SEO optimization
7. @analytics-reporter → Setup tracking

**Output:** Live website, monitored & ready

---

## Settings

### `.claude/settings.json`
```json
{
  "project": {
    "name": "marcus-ai-operating-system",
    "version": "1.0",
    "owner": "Marcus",
    "updated": "2026-04-04"
  },
  "agents": {
    "defaultModel": "claude-sonnet-4-20250514",
    "complexModel": "claude-opus-4-20250514",
    "fastModel": "claude-haiku-4-5-20251001"
  },
  "outputs": {
    "skillsPath": ".claude/skills",
    "agentsPath": "agents",
    "templatesPath": "templates"
  },
  "preferences": {
    "style": "technical + business-focused",
    "tone": "personal, storytelling-driven",
    "audience": "business owners, agencies, non-technical buyers"
  }
}
```

---

## Getting Started

### 1. Copy This Template
```bash
git clone [your-repo] [project-name]
cd [project-name]
```

### 2. Configure CLAUDE.md
- Update project name
- Set success metrics
- List stakeholders
- Define constraints

### 3. Call Your First Agent
```
"@full-stack-architect, design the architecture for this project"
```

### 4. Chain Agents for Complex Work
```
"@trend-researcher, find market opportunities in [domain]"
"@roi-calculator, quantify the value for a client with [characteristics]"
"@pitch-writer, write a proposal based on the above"
```

---

## Implementation Status: Marcus Operating System Build

**Phase 1: API Key Setup ✅ COMPLETE**
- Gemini API key configured
- Environment variables set in `.env`
- Multi-model routing test passed

**Phase 2: Folder Structure ✅ COMPLETE**
- Created 7 agent category folders (ENGINEERING, PRODUCT, CONSULTING, CONTENT, DESIGN, MARKETING, OPERATIONS)
- Created 5 skill category folders (consultant-pitches, content-creators, build-systems, case-study-builders, market-researchers)
- Created 12 _README.md files with structural documentation
- All folders follow PascalCase naming convention

**Phase 3: Documentation Standards ✅ COMPLETE**
- Established CLAUDE.md hierarchy with update protocols
- Created _README.md template for all folders with rules/boundaries
- Defined ripple-update workflow for agent/skill additions
- Set version control standards for documentation

**Phase 4: Engineering Agents ✅ COMPLETE**
- ✅ FullStackArchitect.md — System design, architecture decisions, tech stack evaluation
- ✅ BackendSpecialist.md — API design, database optimization, server-side logic
- ✅ FrontendSpecialist.md — UI/UX implementation, component architecture, client logic
- ✅ DevOpsEngineer.md — Infrastructure, CI/CD, deployment, monitoring
- ✅ QAAutomation.md — Test strategy, automation frameworks, quality assurance
- ✅ SecurityExpert.md — Security audit, vulnerability scanning, compliance

**Next: PRODUCT & CONSULTING agents** (Phase 5, pending approval)

---

## Pro Tips

✅ **Use the right agent for the job** — Don't ask @frontend-developer to design a business strategy  
✅ **Chain agents for complex work** — Sequential agent calls create better outputs  
✅ **Reference past projects** — Each project's CLAUDE.md becomes a template for the next  
✅ **Update agent skills** — As you learn, update agent definitions to capture new knowledge  
✅ **Archive docs** — Move old projects to `past-projects/` for reference  

---

## Next Steps

1. **Create `.claude/skills/` folder** with reusable workflows for your business
2. **Build project templates** (Next.js, Three.js, presentation starters)
3. **Document past projects** as reference cases for agents
4. **Create runbooks** for your most common workflows
5. **Set up GitHub automation** to spin up projects from this template

---

**This is your personal AI team. Scale with it.**

---

## Multi-Model Architecture (NEW SECTION)

### Available Models & When to Use

| Model | Best For | Cost | Status | Setup |
|-------|----------|------|--------|-------|
| Claude Opus | Complex reasoning, strategy | $15/1M | ✅ Active | Done |
| Claude Sonnet | Fast execution, drafting | $3/1M | ✅ Active | Done |
| Perplexity | Real-time research, trends | $29.98/mo | ✅ Active | Done |
| Google Gemini | Image analysis, vision, OCR | Free-$10 | 🔲 This week | Need API key |
| Nano Banana | Image generation (SDXL, Flux) | $0.004/img | 🔲 This week | Need API key |
| Google Veo | Video generation | TBD | 🔄 Waitlist | Coming soon |

### MCP Integrations Status

**Currently Active (8):**
✅ Claude API (Opus + Sonnet)
✅ GitHub
✅ Supabase
✅ Stripe
✅ Slack
✅ Filesystem
✅ Browser
✅ Perplexity

**To Integrate This Week (2):**
🔲 Google Gemini (get free API key)
🔲 Nano Banana (get API key, $0.50/month)

**Waitlist (1):**
🔄 Google Veo (video generation, TBD cost)

### Cost Allocation Strategy

**Budget:** $200-300/month
- **Claude API:** 60% ($120-180)
  - Sonnet: 70% ($85-125) - default, fast work
  - Opus: 30% ($35-55) - strategic, deep work
- **Perplexity:** 10% ($29.98) - research
- **Other APIs:** 30% ($60-90)
  - Google Gemini: Free tier available
  - Nano Banana: $0.50-1/month
  - Veo: TBD when available

### Model Routing Decision Tree

See detailed decision tree: `05 Assets & Templates/MCP_INTEGRATIONS/MODEL_ROUTING_GUIDE.md`

**Quick summary:**
1. Research task? → Perplexity
2. Complex reasoning? → Opus
3. Image analysis? → Gemini
4. Image generation? → Nano Banana
5. Video? → Veo (when available)
6. Default? → Sonnet

### Implementation Status

**Phase 1: Research ✅ COMPLETE**
- Mapped all available models
- Created decision framework
- Documented cost structure

**Phase 2: Integration ✅ COMPLETE**
- [x] Get Google Gemini API key
- [x] Get Nano Banana API key
- [x] Add to .env file
- [x] Test first multi-model project

**Phase 3: Scaling 🔄 NEXT**
- [ ] Document learnings
- [ ] Update agent capabilities
- [ ] Create multi-model workflows
- [ ] Track cost/ROI metrics

### ROI Summary

**Investment:** $30-40/month (additional MCPs)
**Savings per project:** 3-4 hours + better quality
**Break-even:** Immediate (first project saves time worth $150-200)

**Example:**
- Without MCPs: 30-hour project = $1,500
- With MCPs: 15-hour project + $1.67 API cost = $750 + $1.67 = $751.67
- **Savings per project: $750+ or 50% faster**

### References

- **Full integration guide:** `/05 Assets & Templates/MCP_INTEGRATIONS/MCP_STACK.md`
- **Model routing guide:** `/05 Assets & Templates/MCP_INTEGRATIONS/MODEL_ROUTING_GUIDE.md`
- **Cost tracking:** `/06 Metrics & Dashboards/API-Usage-Tracker.md`
- **Agent preferences:** `/05 Assets & Templates/AGENT_CATALOG.md`
