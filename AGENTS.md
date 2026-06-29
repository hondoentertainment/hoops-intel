# AGENTS.md

Guidance for cloud agents working on Hoops Intel. Full architecture and conventions: [`CLAUDE.md`](./CLAUDE.md) and [`cursor.md`](./cursor.md).

## Cursor Cloud specific instructions

### Node.js version

CI and `package.json` require **Node 24.x**. The VM default at `/exec-daemon/node` may be **22.x** — prepend nvm’s Node 24 to `PATH` before npm commands:

```bash
export NVM_DIR="$HOME/.nvm"
. "$NVM_DIR/nvm.sh"
export PATH="$NVM_DIR/versions/node/v24.16.0/bin:$PATH"
node -v   # expect v24.x
```

If Node 24 is not installed yet: `nvm install 24 && nvm alias default 24`.

### Install and verify (repo root)

Standard commands are documented in [`README.md`](./README.md) § Local development:

| Task | Command |
|------|---------|
| Dev server | `npm run dev` → http://localhost:5173 |
| Unit tests | `npm run test:unit` |
| CI parity (blocking) | `npm run test:ci` or `npm run test:ci:tasks` if deps already installed |
| Production build | `npm run build` |
| Preview build locally | `npm run preview` |

There is **no ESLint script**; CI runs Vitest, API typecheck, content/structure validators, and `vite build`.

### Running the dev server

Use a **tmux** session so the Vite process stays attached (e.g. session name `vite-dev-server`):

```bash
npm run dev -- --host 0.0.0.0
```

Vite project root is **`client/`** (see `vite.config.ts`); run all npm scripts from the **repository root**.

### What runs locally vs cloud-only

- **No Docker / no local Supabase stack.** Supabase is a hosted project; client reads use `VITE_SUPABASE_*` when set. Without them, auth/cloud picks fall back to localStorage and the UI still loads from committed `pulseData.ts` / `archiveData.ts`.
- **`api/*` routes are not served by `npm run dev`.** Vite has no proxy to serverless handlers. For `/api/ask`, Stripe, OG, etc., use **`npx vercel dev`** or a Vercel Preview deployment. Most dashboard pages work without API routes.
- **Daily AI pipeline** (`scripts/generate-*.mjs`) needs `ANTHROPIC_API_KEY` in `.env` at repo root; it is not required to browse the SPA or run unit/CI tests.
- **GitHub Actions** regenerate edition data in production; local dev uses the committed TypeScript data files.

### Minimal hello-world check

1. `npm run dev` and open http://localhost:5173
2. Confirm homepage loads (edition headline, dark theme)
3. Scroll to **Pulse Index** (player rankings from `pulseData.ts`)
4. Visit `/archive` for past editions
