# Plan: Convert TanStack Start SSR App to Static SPA

## Task Restatement
Strip out the TanStack Start / Cloudflare Workers SSR layer and produce a pure
Vite + React + TanStack Router SPA. `bun run build` must emit a static `dist/`
deployable to any CDN or GitHub Pages, with no server runtime.

## Approaches Considered

### A) Keep TanStack Router, switch from Start to plain SPA mode (chosen)
- Replace `@lovable.dev/vite-tanstack-config` with plain `vite` + plugins
- Remove SSR-specific route APIs (`head()`, `shellComponent`, `HeadContent`, `Scripts`)
- Keep all existing routes, components, styles exactly as-is
- Minimal diff, lowest risk

### B) Migrate to React Router v6
- Bigger rewrite, loses TanStack Router features already used
- Higher risk, unnecessary complexity for a presentational-only app

### C) Next.js static export
- Completely different framework, massive migration effort
- Out of scope

## Chosen Approach: A

## Files to Touch

| Action  | File |
|---------|------|
| Delete  | `src/server.ts` |
| Delete  | `src/start.ts` |
| Delete  | `wrangler.jsonc` |
| Rewrite | `vite.config.ts` |
| Create  | `index.html` |
| Create  | `src/main.tsx` |
| Modify  | `src/routes/__root.tsx` |
| Modify  | `src/routes/index.tsx` |
| Modify  | `package.json` |
| Create  | `public/404.html` |
| Create  | `.github/workflows/deploy.yml` |

## Key Technical Decisions

- **CSS**: Move from `?url` import in route to direct `import './styles.css'` in `main.tsx`
- **Meta tags**: Move from SSR `head()` callbacks to static `<meta>` in `index.html`
- **Routing history**: Keep browser history (not hash) — add `public/404.html` for GH Pages
- **`@tanstack/router-plugin`**: Keep it; it generates `routeTree.gen.ts` at build time
- **QueryClient**: Keep `router.tsx` pattern unchanged; pass via router context

## Deps to Remove
- `@cloudflare/vite-plugin` (dep)
- `@tanstack/react-start` (dep)
- `@lovable.dev/vite-tanstack-config` (devDep)

## Risks
- `shellComponent` and `head()` are TanStack Start concepts — removing them cleanly
  requires the `__root.tsx` to be rebuilt without those APIs
- `HeadContent`/`Scripts` imports from `@tanstack/react-router` may or may not exist
  in the non-Start build; removing them is the safe path
