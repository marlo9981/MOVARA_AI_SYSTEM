# Approval Flow

## Purpose

This document defines how work gets reviewed and approved at each stage of the Atrellis project.

## Approval stages

### Stage 1: Planning and documentation
- **What:** Folder structures, README files, source-of-truth documents
- **Approver:** Marcus
- **Process:** AI generates → Marcus reviews → Marcus approves or requests changes
- **Turnaround:** Same session or next session

### Stage 2: Content creation
- **What:** Page copy, blog content, SEO material, brand messaging
- **Approver:** Atrellis (client) via Marcus
- **Process:** AI drafts → Marcus reviews → Marcus sends to client → Client approves or requests changes → Marcus communicates feedback → AI revises
- **Turnaround:** Depends on client availability

### Stage 3: Technical implementation
- **What:** Code, architecture, integrations, deployment
- **Approver:** Marcus (technical review) + Atrellis (functional review)
- **Process:** Claude generates → Marcus reviews code → Marcus deploys to preview → Client reviews on preview URL → Feedback loop
- **Turnaround:** Iterative per sprint

### Stage 4: Design and visual direction
- **What:** UI components, animations, visual hierarchy, brand application
- **Approver:** Atrellis (client)
- **Process:** AI proposes direction → Marcus curates → Client selects or requests alternatives → Final direction locked
- **Turnaround:** Depends on client availability

## Escalation path

If approval is blocked or delayed:

1. **Document the blocker** in `02_PROJECT_STATE/BLOCKERS_AND_DEPENDENCIES.md`
2. **Continue with non-blocked work** — do not let one approval stall the entire project
3. **Escalate to client** if the blocker affects critical path items
4. **Propose a default decision** if the client is unavailable — "If no response by [date], we will proceed with [option]"

## Approval checklist

Before sending anything for client approval:

- [ ] Content is complete and polished (no placeholders or TODOs)
- [ ] Technical implementation works on preview URL
- [ ] All known issues are documented
- [ ] Clear instructions are provided for what feedback is needed
- [ ] Deadline for feedback is stated

## Fast-track approvals

The following can be approved by Marcus without client review:

- Documentation structure and naming conventions
- Technical architecture decisions that don't affect user experience
- Internal prompt and agent configurations
- File organization and repo structure
- SEO technical implementation (schema, meta tags, sitemap)

The following MUST go to the client:

- Brand voice and messaging
- Visual design direction
- Page content and copy
- Pricing and commercial presentation
- Scope changes
