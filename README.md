# RunNaira Operations

RunNaira Operations is a React workspace for reviewing social-payment requests, RunLock protection, recipient channels, and release signals. It modernises the repository's original Flask landing-page prototype while preserving that prototype as historical project context.

## Requirements

- Node.js 20.19.5
- pnpm 10.34.5

## Local development

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Quality checks

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

The React application uses deterministic local fixtures and requires no credentials or external services. The earlier Flask prototype remains in `app/` and `app.py` for continuity, but the supported application package is the single React package at the repository root.
