# AGENTS.md

Guide for AI agents and humans who change this repository.

## Project

GraphQL wrapper for pokeapi.co. It runs as Vercel Functions. The static page in `public/` is the homepage.

| Path                           | Purpose                                                     |
| ------------------------------ | ----------------------------------------------------------- |
| `api/graphql.js`               | Apollo Server 5 handler. Custom code, no framework adapter. |
| `api/index.js`, `api/badge.js` | Small JSON endpoints. They call `utils`.                    |
| `typeDefs/`, `resolvers/`      | GraphQL schema and resolvers.                               |
| `requests/`                    | Calls to PokeAPI through `pokedex-promise-v2`.              |
| `utils/index.js`               | Shared helpers. Every function imports this file.           |
| `public/`                      | Static homepage. Built by Tailwind and `ejs`.               |

## Commands

- Install: `npm ci`
- Build: `npm run build`
- Lint: `npx eslint .`
- Run locally: `npm start` (runs `vercel dev`, needs `vercel login`)

## Rules

- Use npm only. Do not add `yarn.lock`.
- The Node version is in `engines.node` in `package.json`. CI and Vercel read it. Do not set it anywhere else.
- Pin each GitHub Action to a commit SHA. Add the version in a comment.
- Dependabot opens the update PRs. See `.github/dependabot.yml`. It ignores the major versions of the held-back packages.

## Packages that are held back

Do not upgrade these packages until the reason is gone.

| Package              | Held at | Reason                                                                                     |
| -------------------- | ------- | ------------------------------------------------------------------------------------------ |
| `pokedex-promise-v2` | 3.x     | Version 4 is ESM-only. Vercel loads the functions as CommonJS. All functions returned 500. |
| `node-fetch`         | 2.x     | Version 3 is ESM-only. Same reason.                                                        |
| `graphql`            | 16.x    | Apollo Server 5 requires `^16.11`.                                                         |
| `eslint`             | 9.x     | `eslint-plugin-import` does not support version 10.                                        |

## Case: dependency upgrade caused a production outage

Date: 2026-11-04. PR #110 upgraded all packages. The local build and lint passed. Production returned `500 FUNCTION_INVOCATION_FAILED` on every function.

Cause: `pokedex-promise-v2` 4 is ESM-only. Every function imports `utils`, and `utils` imports this package. PR #112 reverted it.

The exact failure is not confirmed. A local `require()` of version 4 works on Node 22, 24 and 26. The PR #113 preview, with `engines.node` set to `26.x`, still returned 500. Read the Vercel runtime log before you try version 4 again.

Why the checks did not catch it:

- The local test bundled all code with esbuild. This hides the ESM and CommonJS problem.
- The Vercel preview deploy was not tested before the merge.
- The `/api` endpoint does not use Apollo. Its failure showed that the cause was in the shared import, not in the Apollo handler.

Side effects of the same upgrade:

- Apollo Server 4 and later enables CSRF prevention. A GET request or a `text/plain` POST returns 400 unless it has an `apollo-require-preflight` header or a JSON content type.
- The revert pulled in `axios` 0.21.4, which has known vulnerabilities. Force a patched version with `overrides` in `package.json`.

## Checklist for dependency changes

1. Run `npm run build` and `npx eslint .`.
2. Check if the new version of each package is ESM-only. Run `npm view <package> type`. If the value is `module`, do not use it in `api/`, `requests/` or `utils/`.
3. Open a PR. Wait for the Vercel preview deploy.
4. Call the preview. `/api` and `/api/graphql` must return 200. Send a POST with `content-type: application/json` and the query `{ pokemon(name: "ditto") { id name } }`.
5. Read the function logs for import errors.
6. If you downgrade a package, run `npm ls` and `npm audit --omit=dev`. Look for old transitive versions.
7. Do not merge before step 4 passes.

## Removed

- The `api.countapi.xyz` counters and `/api/badge` are removed (PR #122). The service did not respond and `/api` timed out.
