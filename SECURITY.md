# Security Rules — Movara AI

## Secrets Management

- **Never commit `.env` files.** Use `.env.example` with empty values only.
- **Never hardcode API keys, tokens, or passwords** in source code, markdown, or config files.
- **Use `.env.local`** for local development. Copy from `.env.example` and fill in real values.
- **Use Vercel dashboard** or `vercel env` for production environment variables.
- **Rotate keys immediately** if any credential is accidentally committed.

## Compromised Keys Notice

The original `.env.example` in this repo contained real API keys for:
- Google Gemini (`AIzaSy...`)
- Perplexity (`pplx-...`)
- Anthropic (`sk-ant-...`)

**Action required:**
1. Rotate all three keys at their respective dashboards (Google Cloud Console, Perplexity, Anthropic Console)
2. Update `.env.local` with the new keys
3. Consider using `git filter-branch` or BFG Repo-Cleaner to scrub the old values from git history

## Client Credential Isolation

- Each client project maintains its own `.env.example`.
- Never share credentials across client projects.
- Never store client credentials in agency-level folders (00-06).
- Client API keys stay in `CLIENT_PROJECTS/[ClientName]/.env.local` only.

## Environment Variable Rules

| Scope | File | Tracked in Git |
|-------|------|---------------|
| Template | `.env.example` | Yes (empty values only) |
| Local dev | `.env.local` | No |
| Production | Vercel dashboard | No |
| Client project | `CLIENT_PROJECTS/[Client]/.env.local` | No |

## Sensitive Documents

- Contracts, invoices, and financial docs: do not store in this repo.
- Client-specific NDA or legal docs: keep outside version control or in a private, access-controlled location.
- If sensitive docs must be referenced, use links rather than embedding content.

## Archive and Deletion

- Archive over delete. Move to `_archive/` or `99_ARCHIVE/` subfolder.
- Before archiving any folder, verify no `.env` or credential files are included.
- Never delete files containing client data without explicit confirmation.

## Principle of Least Privilege

- Use `SUPABASE_ANON_KEY` for client-side code.
- Use `SUPABASE_SERVICE_ROLE_KEY` only in server-side or edge functions.
- Grant team members the minimum access required for their role.
- Review access permissions when team members change.

---

Last Updated: April 7, 2026
