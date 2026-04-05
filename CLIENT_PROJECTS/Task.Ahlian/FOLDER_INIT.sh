#!/bin/bash

# Task.Ahlian — Folder Structure Initialization
# Run this once to create the folder skeleton for Phase 1
# Usage: bash FOLDER_INIT.sh

set -e  # Exit on error

echo "Creating Task.Ahlian folder structure..."

# ============================================
# SUPABASE
# ============================================
mkdir -p supabase/migrations
echo "✓ supabase/migrations"

# ============================================
# WEB APP (Next.js)
# ============================================
mkdir -p apps/web/app/api/tasks
mkdir -p apps/web/app/api/cron
mkdir -p apps/web/components/ui
mkdir -p apps/web/components/features
mkdir -p apps/web/hooks
mkdir -p apps/web/lib/supabase
mkdir -p apps/web/styles
mkdir -p apps/web/public

echo "✓ apps/web/{app,components,hooks,lib,styles,public}"

# ============================================
# BOT APP (Telegram + Recap)
# ============================================
mkdir -p apps/bot/src/services
mkdir -p apps/bot/src/types
mkdir -p apps/bot/tests

echo "✓ apps/bot/{src,tests}"

# ============================================
# SHARED TYPES & CONSTANTS
# ============================================
mkdir -p packages/shared/src/types

echo "✓ packages/shared/src/types"

# ============================================
# Create root config files
# ============================================
cat > pnpm-workspace.yaml << 'EOF'
packages:
  - 'apps/*'
  - 'packages/*'
EOF
echo "✓ pnpm-workspace.yaml"

cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnpm/
pnpm-lock.yaml

# Environment
.env
.env.local
.env.*.local

# Build
.next/
dist/
build/
.turbo/

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Testing
coverage/
.nyc_output/

# Supabase
supabase/.branches/
supabase/functions/.env*
EOF
echo "✓ .gitignore"

cat > .eslintrc.json << 'EOF'
{
  "extends": ["next/core-web-vitals"],
  "rules": {
    "react-hooks/exhaustive-deps": "warn"
  }
}
EOF
echo "✓ .eslintrc.json"

# ============================================
# Create placeholder package.json files
# ============================================
cat > apps/web/package.json << 'EOF'
{
  "name": "task-ahlian-web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@supabase/supabase-js": "^2.43.0",
    "@supabase/ssr": "^0.0.10"
  },
  "devDependencies": {
    "typescript": "^5.3.3",
    "@types/node": "^20.10.0",
    "@types/react": "^18.2.45",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.32",
    "autoprefixer": "^10.4.17"
  }
}
EOF
echo "✓ apps/web/package.json"

cat > apps/bot/package.json << 'EOF'
{
  "name": "task-ahlian-bot",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "ts-node src/index.ts",
    "build": "tsc",
    "test": "jest",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "axios": "^1.6.5",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "typescript": "^5.3.3",
    "@types/node": "^20.10.0",
    "ts-node": "^10.9.2",
    "jest": "^29.7.0",
    "ts-jest": "^29.1.1"
  }
}
EOF
echo "✓ apps/bot/package.json"

cat > packages/shared/package.json << 'EOF'
{
  "name": "@task-ahlian/shared",
  "version": "0.1.0",
  "private": true,
  "main": "src/index.ts",
  "types": "src/index.ts",
  "scripts": {
    "type-check": "tsc --noEmit"
  },
  "devDependencies": {
    "typescript": "^5.3.3"
  }
}
EOF
echo "✓ packages/shared/package.json"

# ============================================
# Create tsconfig files
# ============================================
cat > apps/web/tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    },
    "types": ["jest", "@testing-library/jest-dom"]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF
echo "✓ apps/web/tsconfig.json"

cat > apps/bot/tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020"],
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
EOF
echo "✓ apps/bot/tsconfig.json"

cat > packages/shared/tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
EOF
echo "✓ packages/shared/tsconfig.json"

# ============================================
# Create vercel.json (cron config)
# ============================================
cat > apps/web/vercel.json << 'EOF'
{
  "crons": [
    {
      "path": "/api/cron/recap",
      "schedule": "0 9 * * *"
    }
  ]
}
EOF
echo "✓ apps/web/vercel.json"

# ============================================
# Create next.config.js
# ============================================
cat > apps/web/next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
EOF
echo "✓ apps/web/next.config.js"

# ============================================
# Create Tailwind config
# ============================================
cat > apps/web/tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
EOF
echo "✓ apps/web/tailwind.config.js"

cat > apps/web/postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
EOF
echo "✓ apps/web/postcss.config.js"

# ============================================
# Print success message
# ============================================
echo ""
echo "=========================================="
echo "✅ Folder structure created!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. pnpm install"
echo "2. Read SETUP_PHASE1.md"
echo "3. Create database migrations in supabase/migrations/"
echo "4. Start building API routes in apps/web/app/api/"
echo ""
echo "Files to read:"
echo "  - ARCHITECTURE.md (technical details)"
echo "  - SETUP_PHASE1.md (step-by-step)"
echo "  - STRUCTURE_SUMMARY.md (quick reference)"
echo ""
