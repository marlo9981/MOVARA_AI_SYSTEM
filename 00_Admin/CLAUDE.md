\# Claude Working Guidelines – Movara AI

\#\# Core Rules  
1\. \*\*No new structure without asking\*\*: Maintain the existing folder/file tree  
2\. \*\*Update in place\*\*: Edit existing docs rather than creating duplicates  
3\. \*\*Database-backed\*\*: All client application data must be stored in a database  
4\. \*\*No placeholder copy\*\*: Use real content or mark clearly as \[DRAFT\]  
5\. \*\*SEA market focus\*\*: All examples, pricing, case studies tailored to Southeast Asia

\#\# Tech Stack (when building web products)  
\- \*\*Framework\*\*: Next.js App Router  
\- \*\*Styling\*\*: Tailwind CSS  
\- \*\*Animations\*\*: GSAP (ScrollTrigger, standard tweens)  
\- \*\*Database\*\*: Supabase or equivalent  
\- \*\*Deployment\*\*: Vercel  
\- \*\*Language\*\*: TypeScript

\#\# File Structure to Maintain

\- \*\*Movara AI/\*\*  
\- \*\*00_ADMIN/\*\*  
\- \*\*01_STRATEGY/\*\*  
\- \*\*02_SERVICES_AND_PRICING/\*\*  
\- \*\*03_SALES_PROCESS/\*\*  
\- \*\*04_DELIVERY_PLAYBOOKS/\*\*  
\- \*\*05_ASSETS_TEMPLATES/\*\*
  \- \*\*MCP_INTEGRATIONS/\*\* ← MCP stack status, model routing, multi-model workflows
\- \*\*06_METRICS_DASHBOARDS/\*\*

## When I Ask You To:

- **"Refine positioning"** → Update 01_STRATEGY/Movara_AI_Positioning_and_ICP.md
- **"Add a service tier"** → Update 02*SERVICES_AND_PRICING/Website_Packages*\*.md
- **"Draft proposal"** → Use 05_ASSETS_TEMPLATES/Proposal_Template.md
- **"Check metrics"** → Reference 06_METRICS_DASHBOARDS/

## Coding Standards (for web builds)

- Structured directories: `/components`, `/lib`, `/styles`, `/public`
- Animation config in `/lib/animations.ts`
- ScrollTrigger initialization in root layout
- No barrel files (index.ts re-exports)
- No hardcoded colors (use Tailwind config)
- Use `next/font` for typography

## Output Expectations

- **Proposals**: Professional, localized for SEA, conversion-focused
- **Code**: Production-ready, no TODOs or placeholders
- **Strategy docs**: Actionable, data-backed where possible
- **Playbooks**: Step-by-step, templated, repeatable

Last Updated: April 4, 2026
