# Contributing to ab-ui-tools

Thanks for your interest in contributing! This document describes how to set up the project, the development workflow, and the conventions enforced by the tooling.

---

## Prerequisites

- **Node.js** 16+
- **Yarn** (the monorepo is configured with Yarn workspaces; Lerna is set to use `yarn` as its npm client)
- **Git** with a configured author (required by Husky hooks)

---

## Getting set up

```bash
git clone https://github.com/ab-ui-tools/ab-ui-tools.git
cd ab-ui-tools
yarn install
```

`yarn install` will also run `husky` to install the git hooks (`prepare` script).

### Verify the setup

```bash
yarn typecheck
yarn lint
yarn start            # launches Storybook on http://localhost:6006
```

---

## Repository layout

```
packages/
├── ui-library/   # Component library  (@ab.uitools/ui-library)
├── base/         # Shared utilities   (@ab.uitools/base)
├── storybook/    # Hosted Storybook app for browsing components
└── scripts/      # CLI tool           (@ab.uitools/scripts)
```

Each package is versioned **independently** (`lerna.json` uses `"version": "independent"`) and publishes to the npm registry.

---

## Development workflow

1. **Create a branch** off `master`:
   ```bash
   git checkout -b feat/my-feature
   ```
2. **Make changes** in the relevant package(s).
3. **Run Storybook** to verify visually:
   ```bash
   yarn start
   ```
4. **Type-check & lint** before committing:
   ```bash
   yarn typecheck
   yarn lint:fix
   ```
5. **Commit** using a [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) message (see below). Husky + Commitlint will reject non-conforming messages.
6. **Open a pull request**:
   - **Regular change** → target `master`
   - **Risky change** (config / dependency / big refactor) → target `alpha` first, test the `@beta` release in a real app, then open `alpha` → `master`

### Pre-commit hooks

Hooks are managed by [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged):

- On commit: ESLint runs with `--fix` on staged `.js/.jsx/.ts/.tsx` files (root `lint-staged` config).
- Each package additionally runs `npm run check` (TypeScript type-check) as a pre-commit step.
- The commit message is validated against `@commitlint/config-conventional`.

If a hook fails, fix the reported issue, re-stage, and commit again. Do **not** use `--no-verify` to bypass hooks.

---

## Adding a new component (`ui-library`)

1. Create a folder under `packages/ui-library/src/components/<ComponentName>/` with:
   - `<ComponentName>.tsx` — the component
   - `types.ts` — prop types
   - `consts.ts` — constants (if any)
   - `index.ts` — barrel export
2. Add `packages/ui-library/src/assets/styles/components/_<componentName>.scss` and `@use` it from `styles.scss`.
3. Build the component against the design spec.
4. Add a `*.stories.tsx` file so the component shows up in Storybook.
5. Export the component from `packages/ui-library/src/index.ts`.
6. Run `yarn typecheck` and verify the story renders correctly.
7. Open a PR with a `feat:` commit message.

> **Note:** The `.stories.tsx` files are excluded from the published bundle by the Rollup config, so stories are safe to keep next to components.

## Adding a new SVG icon

1. Drop the SVG into `packages/ui-library/svg-icons/`.
2. Name the file in kebab-case, e.g. `chevron-right.svg`.
3. Regenerate the icon component:
   ```bash
   cd packages/ui-library
   npm run generate-svg-component
   ```
4. Commit the generated component alongside the SVG.

---

## Commit message convention

This repository enforces **Conventional Commits**. Commit type determines the release type:

| Type                 | Release | Example |
|----------------------|---------|---------|
| `fix:`               | patch   | `fix: correct disabled hover style` / `fix(button): correct disabled hover style` |
| `feat:`              | minor   | `feat: support async option loading` / `feat(select): support async option loading` |
| `BREAKING CHANGE:` (in body or `!` after type) | major | `feat(table)!: drop legacy row API` |
| `chore:` / `docs:` / `refactor:` / `style:` / `test:` / `ci:` | no release | |

Scope (in parentheses) is optional but encouraged — typically the component or package name.

**Good:**
```
feat(datepicker): add range selection
fix(base): export missing helper type
docs: clarify install instructions in README
```

**Bad** (rejected by commitlint):
```
Updated button               # no type
FIX: typo                    # wrong case
added new component          # no type, past tense
```

---

## Pull requests

- Keep PRs focused — one feature or fix per PR.
- Include a short description of **what** and **why**.
- Link any related issues.
- Ensure CI checks (lint, type-check) pass.
- Update relevant stories if behaviour or props changed.
- At least two maintainer review is required before merge.

The PR title becomes the squash commit message, so it **must** follow the Conventional Commit format.

---

## Releases

Versioning and publishing are fully automated via [Lerna](https://lerna.js.org/) + [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

### Branch strategy

| Branch   | Purpose                   | npm tag                      |
| -------- | ------------------------- | ---------------------------- |
| `alpha`  | Pre-release / development | `beta` (e.g. `1.2.0-beta.0`) |
| `master` | Stable releases           | `latest`                     |

### Flow

**Regular change (recommended)** — feature → `master`:

1. Open a PR from your feature branch → `master`. CI runs (lint, typecheck, build).
2. Merge → `master`: a stable version is published to npm with the `latest` dist-tag.

**Risky change** — stage through `alpha` first:

1. Open a PR from your feature branch → `alpha`. CI runs (lint, typecheck, build).
2. Merge → `alpha`: a `beta` version is published to npm (e.g. `1.2.0-beta.0`).
3. Install the beta in your app and test:
   ```bash
   yarn add @ab.uitools/ui-library@beta
   ```
4. If everything looks good, open a PR `alpha` → `master`. CI runs again.
5. Merge → `master`: beta is promoted and a stable version is published as `latest`.

Allowed release branches: `master`, `alpha` (see `lerna.json`).

---

## Code style

- **Formatter** — Prettier 3 (`printWidth: 120`). Run `yarn lint:fix` or rely on pre-commit.
- **Linter** — ESLint flat config (`eslint.config.mjs`) with `typescript-eslint`, `react-hooks`, `perfectionist` (import sorting), and `unused-imports`.
- **Types** — TypeScript strict mode. No `any` without justification.
- **Naming** — Components `PascalCase`, hooks `camelCase` prefixed with `use`, SCSS classes in BEM style (e.g. `btn--primary`).
- **Imports** — Sorted automatically by the `perfectionist` plugin; don't fight the sort order.

---

## Reporting bugs / requesting features

Open an issue at <https://github.com/ab-ui-tools/ab-ui-tools/issues> with:

- **Bugs** — minimal reproduction, expected vs actual behaviour, environment (browser, React version, library version).
- **Features** — the problem you're trying to solve, not just the proposed API.

---

## Questions

If something in this guide is unclear, open an issue with the `question` label and a maintainer will help. Thanks for contributing!
