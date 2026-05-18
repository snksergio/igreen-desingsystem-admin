# @snksergio/create-design-system

CLI to bootstrap a new project consuming [`@snksergio/design-system`](https://www.npmjs.com/package/@snksergio/design-system).

Pre-configures React 19 + Vite + Tailwind CSS v4 + the DS theme, with a working example page demonstrating Button, Chip, Avatar, Badge and AlertModal — including dark/light theme toggle.

## Quick start

```bash
npm create @snksergio/design-system my-app
cd my-app
npm run dev
```

That's it. Browser opens at `http://localhost:3200` showing the example page.

## What the CLI does

1. Asks for the project name (or takes from arg)
2. Detects your package manager (npm/pnpm/yarn/bun) — you can override
3. Copies the `default` template into a fresh folder
4. Substitutes the `name` field in `package.json`
5. Installs dependencies (optional)
6. Initializes a git repository with first commit (optional)
7. Prints next steps

## What's in the template

```
my-app/
├── index.html
├── package.json              # @snksergio/design-system + React + Vite
├── tsconfig.json
├── vite.config.ts
├── .gitignore
└── src/
    ├── main.tsx
    ├── index.css             # Tailwind v4 + @source + theme.css imports
    └── App.tsx               # Example page with 4 DS components + theme toggle
```

The CSS already has the required `@source` directive — without it, Tailwind v4 ignores `node_modules/` and the DS components render unstyled. The CLI bakes this in so you never hit that pitfall.

## Requirements

- Node.js ≥ 20

## Other usage

```bash
# Without args (prompts will ask)
npm create @snksergio/design-system

# With explicit package manager
pnpm create @snksergio/design-system my-app
yarn create @snksergio/design-system my-app

# Force latest CLI version (bypass npx cache)
npm create @snksergio/design-system@latest my-app

# Specific version
npm create @snksergio/design-system@0.1.1 my-app
```

## Note about npx cache

`npm create XXX` is sugar for `npx create-XXX`. npx caches downloaded
packages in `~/AppData/Local/npm-cache/_npx/` and reuses them, even when
you don't pin a version. After a fresh `npm publish`, you may need to
explicitly request `@latest` (or a specific version) to bypass cache and
get the new release.

## License

Internal — iGreen. No public distribution intended beyond installing into iGreen apps.
