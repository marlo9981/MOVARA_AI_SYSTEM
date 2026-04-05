#!/usr/bin/env node

/**
 * CLAUDE.md Audit Script
 * Checks that all required directories have CLAUDE.md files
 * and that they're not stale (updated recently)
 */

const fs = require('fs');
const path = require('path');

const REQUIRED_DIRS = [
  '00_Admin',
  '01 Strategy',
  '02 Services & Pricing',
  '03 Sales Process',
  '04 Delivery Playbooks',
  '05 Assets & Templates',
  '06 Metrics & Dashboards',
  'CLIENT_PROJECTS',
];

const CLIENT_PROJECT_DIRS = [
  'Task.Ahlian',
  'Atrellis_Design_&_Build',
];

const PROJECT_ROOT = path.join(__dirname, '..');
const STALE_DAYS = 30; // Warn if CLAUDE.md is older than 30 days

function getDirAge(filePath) {
  const stats = fs.statSync(filePath);
  const age = (Date.now() - stats.mtimeMs) / (1000 * 60 * 60 * 24);
  return age;
}

function checkDir(dir, name) {
  const claudePath = path.join(PROJECT_ROOT, dir, 'CLAUDE.md');
  const exists = fs.existsSync(claudePath);

  if (!exists) {
    return { dir, name, status: 'MISSING', age: null };
  }

  const age = getDirAge(claudePath);
  const isStale = age > STALE_DAYS;
  const status = isStale ? 'STALE' : 'OK';

  return { dir, name, status, age: Math.round(age * 10) / 10 };
}

function main() {
  console.log('\n📋 CLAUDE.md Audit Report\n');
  console.log(`Project Root: ${PROJECT_ROOT}\n`);

  let allOK = true;
  const results = [];

  // Check main directories
  console.log('🔍 Main Directories:');
  for (const dir of REQUIRED_DIRS) {
    const result = checkDir(dir, dir);
    results.push(result);

    const icon = result.status === 'OK' ? '✓' : result.status === 'MISSING' ? '✗' : '⚠';
    const ageStr = result.age !== null ? `(${result.age} days old)` : '';
    console.log(`  ${icon} ${dir} — ${result.status} ${ageStr}`);

    if (result.status !== 'OK') allOK = false;
  }

  // Check client projects
  console.log('\n🔍 Client Projects:');
  for (const project of CLIENT_PROJECT_DIRS) {
    const dir = `CLIENT_PROJECTS/${project}`;
    const result = checkDir(dir, project);
    results.push(result);

    const icon = result.status === 'OK' ? '✓' : result.status === 'MISSING' ? '✗' : '⚠';
    const ageStr = result.age !== null ? `(${result.age} days old)` : '';
    console.log(`  ${icon} ${project} — ${result.status} ${ageStr}`);

    if (result.status !== 'OK') allOK = false;
  }

  // Summary
  console.log('\n' + '─'.repeat(60));
  const missing = results.filter((r) => r.status === 'MISSING').length;
  const stale = results.filter((r) => r.status === 'STALE').length;

  if (allOK) {
    console.log('✓ All CLAUDE.md files are present and up to date!\n');
    process.exit(0);
  } else {
    console.log(`\n⚠ Issues Found:`);
    if (missing > 0) console.log(`  • ${missing} MISSING files`);
    if (stale > 0) console.log(`  • ${stale} STALE files (>30 days old)`);
    console.log('\n💡 Fix with: npm run claude:init\n');
    process.exit(1);
  }
}

main();
