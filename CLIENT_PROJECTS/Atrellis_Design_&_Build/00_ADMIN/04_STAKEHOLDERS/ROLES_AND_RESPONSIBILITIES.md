# Roles and Responsibilities

## Purpose

This document defines what each person and agent is responsible for on the Atrellis project.

## Marcus — Project Lead

### Responsibilities
- Overall project coordination and client communication
- AI agent orchestration and quality control
- Strategic decision-making in consultation with the client
- Technical review of all AI-generated code
- Deployment oversight and production management
- Timeline and phasing decisions
- Scope management and change control

### Authority
- Can approve technical architecture decisions
- Can approve documentation structure
- Can make fast-track decisions (see `APPROVAL_FLOW.md`)
- Cannot approve brand, visual, or content direction without client input

### Deliverables
- Project plan and timeline
- Client communications and status updates
- Technical review sign-off
- Deployment approvals

## Atrellis (Client) — Project Owner

### Responsibilities
- Strategic direction and business objectives
- Brand voice and visual preferences
- Content and copy approval
- Commercial and pricing decisions
- Functional review of implemented features
- Providing assets (images, logos, brand materials) when needed

### Authority
- Final say on all brand, visual, and content decisions
- Final say on scope changes
- Final say on go/no-go for launches

### Deliverables
- Brand guidelines and assets (or approval of AI-proposed direction)
- Content approval or revision requests
- Commercial parameters and pricing inputs
- Functional feedback on preview builds

## Claude — Primary AI Agent

### Responsibilities
- Full-stack architecture and code generation
- Documentation structuring and content generation
- System design and technical planning
- Prompt engineering and agent configuration
- Code review and quality assurance (automated)
- SEO technical implementation

### Authority
- Can propose technical solutions and architectures
- Can generate documentation and content drafts
- Can make implementation decisions within approved scope
- Cannot make strategic, brand, or commercial decisions

### Deliverables
- Code (Next.js, TypeScript, Tailwind, GSAP, Supabase)
- Documentation files
- Content drafts
- Technical specifications
- Prompt libraries

## Gemini — Secondary AI Agent

### Responsibilities
- Creative review and alternative perspectives
- Content ideation and brand voice exploration
- Competitive analysis and market positioning input
- Quality review of Claude's output from a different model perspective

### Authority
- Advisory only — no decision-making authority
- Provides alternatives and critiques for Marcus to evaluate

### Deliverables
- Creative alternatives
- Content variations
- Review notes and suggestions

## Future Roles (To Be Confirmed)

### UI/UX Designer
- Visual design system creation
- Component design and interaction patterns
- Design handoff to Claude for implementation

### Content Writer
- Long-form content creation
- Editorial calendar management
- SEO content optimization

### QA Tester
- Systematic testing across devices and browsers
- Bug reporting and regression tracking
- Performance benchmarking

## Collaboration rules

1. Marcus is the single point of contact between the client and AI agents
2. AI agents should never communicate directly with the client
3. All AI output should be reviewed by Marcus before being sent to the client
4. Client feedback should be translated into clear instructions for AI agents
5. When AI agents disagree, Marcus makes the call or escalates to the client
