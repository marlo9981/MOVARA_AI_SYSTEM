#!/usr/bin/env node

/**
 * Initialize Missing CLAUDE.md Files
 * Creates templates for any missing CLAUDE.md files
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_DIRS = [
  '00_ADMIN',
  '01_STRATEGY',
  '02_SERVICES_AND_PRICING',
  '03_SALES_PROCESS',
  '04_DELIVERY_PLAYBOOKS',
  '05_ASSETS_TEMPLATES',
  '06_METRICS_DASHBOARDS',
  'CLIENT_PROJECTS',
];

const CLIENT_PROJECT_DIRS = [
  'Task.Ahlian',
  'Atrellis_Design_&_Build',
];

const PROJECT_ROOT = path.join(__dirname, '..');

const TEMPLATES = {
  default: `# CLAUDE.md — [Project/Area Name]

## Overview

[Brief description of this area's purpose within Movara AI]

## Core Responsibilities

- [Key responsibility 1]
- [Key responsibility 2]
- [Key responsibility 3]

## Structure

\`\`\`
[directory]/
├── [file 1].md
├── [file 2].md
└── [subdirectory]/
\`\`\`

## When You See...

- **"[Instruction 1]"** → [Where to find/update]
- **"[Instruction 2]"** → [Where to find/update]

## Standards

- [Standard 1]
- [Standard 2]

## Current Status

Last Updated: ${new Date().toISOString().split('T')[0]}
Completeness: [%] — [Description]

---

For full project context, see \`00_ADMIN/CLAUDE.md\`.
`,

  CLIENT_PROJECTS: `# CLAUDE.md — Client Projects

## Overview

Central directory for all client work. Each project lives in its own folder with complete documentation, code, and deliverables.

## Project Structure

\`\`\`
CLIENT_PROJECTS/
├── [Client Name]/
│   ├── CLAUDE.md (project-specific guidelines)
│   ├── README.md (project overview)
│   ├── HANDOFF.md (deliverables & timeline)
│   ├── docs/
│   ├── src/ (or applicable structure)
│   └── [other files]
\`\`\`

## Project Standards

- **Documentation**: Each project must have CLAUDE.md + README.md + HANDOFF.md
- **Database-Backed**: All applications must store data in a database (Supabase/equivalent)
- **No Placeholder Copy**: Real content or clearly marked [DRAFT]
- **Deployment**: All web products deploy to Vercel
- **Tech Stack**: Next.js + TypeScript + Tailwind (unless client specifies otherwise)

## Active Projects

- **Task.Ahlian** — AI task management dashboard for VSCode
- **Atrellis_Design_&_Build** — Web design & automation agency

## When Adding a New Client Project

1. Create folder: \`CLIENT_PROJECTS/[ClientName]\`
2. Add CLAUDE.md with project-specific guidelines
3. Add README.md with project overview
4. Add HANDOFF.md with deliverables & timeline
5. Update this index with link to project

## Client Onboarding Checklist

- [ ] CLAUDE.md created with project-specific guidance
- [ ] README.md with scope & deliverables
- [ ] HANDOFF.md with timeline & acceptance criteria
- [ ] Vercel project created & linked
- [ ] Database schema initialized
- [ ] Team access configured
- [ ] Kickoff meeting completed

---

For Movara AI operations guidance, see \`00_ADMIN/CLAUDE.md\`.
`,
};

function createCLAUDEFile(dir, template = 'default') {
  const claudePath = path.join(PROJECT_ROOT, dir, 'CLAUDE.md');
  const dirPath = path.dirname(claudePath);

  // Ensure directory exists
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Don't overwrite existing files
  if (fs.existsSync(claudePath)) {
    return { dir, status: 'SKIPPED', reason: 'already exists' };
  }

  const content = TEMPLATES[template] || TEMPLATES.default;
  fs.writeFileSync(claudePath, content, 'utf8');

  return { dir, status: 'CREATED', path: claudePath };
}

function main() {
  console.log('\n📝 Initializing CLAUDE.md Files\n');

  const created = [];
  const skipped = [];

  // Create main directories
  for (const dir of REQUIRED_DIRS) {
    const result = createCLAUDEFile(dir, dir === 'CLIENT_PROJECTS' ? 'CLIENT_PROJECTS' : 'default');
    if (result.status === 'CREATED') {
      created.push(result);
      console.log(`✓ ${result.dir}`);
    } else {
      skipped.push(result);
      console.log(`- ${result.dir} (${result.reason})`);
    }
  }

  // Create client project directories
  console.log('\n🔗 Client Projects:');
  for (const project of CLIENT_PROJECT_DIRS) {
    const dir = `CLIENT_PROJECTS/${project}`;
    const result = createCLAUDEFile(dir, 'default');
    if (result.status === 'CREATED') {
      created.push(result);
      console.log(`✓ ${project}`);
    } else {
      skipped.push(result);
      console.log(`- ${project} (${result.reason})`);
    }
  }

  // Summary
  console.log('\n' + '─'.repeat(60));
  console.log(`Created: ${created.length} files`);
  console.log(`Skipped: ${skipped.length} files (already exist)\n`);

  if (created.length > 0) {
    console.log('📋 Next Steps:');
    console.log('  1. Review newly created CLAUDE.md files');
    console.log('  2. Update templates with project-specific content');
    console.log('  3. Run: npm run claude:audit\n');
  }
}

main();
