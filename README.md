# ab-ui-tools

A monorepo containing the **AB UI Tools** — a React component library, shared utilities, a Storybook demo environment, and CLI tooling for scaffolding new projects.

Homepage: https://github.com/ab-ui-tools/ab-ui-tools

---

## Packages

This is a [Lerna](https://lerna.js.org/) monorepo managed with Yarn workspaces. Each package is versioned independently and published to npm under the `@ab.uitools` scope.


| Package                                           | Description                                 |
| ------------------------------------------------- | ------------------------------------------- |
| [`@ab.uitools/ui-library`](./packages/ui-library) | React UI component library (54+ components) |
| [`@ab.uitools/base`](./packages/base)             | Shared utilities, helpers, and hooks        |
| [`@ab.uitools/storybook`](./packages/storybook)   | Hosted Storybook app for browsing components |
| [`@ab.uitools/scripts`](./packages/scripts)       | CLI for scaffolding new apps                |

### Internal package dependencies

Packages in this monorepo can depend on each other (for example, `storybook` uses `@ab.uitools/ui-library`). When a package is versioned (via Lerna), **any other package that depends on it will have its dependency range updated automatically** during the same versioning step. This keeps internal packages in sync across releases.

### What's inside `ui-library`

Full React UI component library. Components include:

- **Forms & inputs** — `Input`, `Textarea`, `Select`, `ReactSelect`, `Checkbox`, `Radio`, `Switcher`, `DatePicker`, `Calendar`, `FileUpload`, `OneTimePassword`, `MultiTextareaWithChips`, `Counter`, `FormContainer`, `FormField`
- **Layout** — `Container`, `Cards`, `CardBody`, `CardSelect`, `Collapse`, `Divider`, `SideNavigation`, `SideSheet`, `Tab`, `Stepper`
- **Data display** — `Table`, `AdvancedTable`, `Pagination`, `Breadcrumb`, `Status`, `Progress`, `ProgressStep`, `Avatar`, `Badge`, `Chips`
- **Feedback & overlays** — `Modal`, `Popover`, `Tooltip`, `Snackbar`, `Alert`, `Empty`, `Spinner`
- **Primitives** — `Button`, `ButtonIcon`, `Link`, `Text`, `Heading`, `Image`, `Menu`, `More`, `Copy`, `SVGIcons`, `FramedIcon`

See [`packages/ui-library/src/index.ts`](./packages/ui-library/src/index.ts) for the full export list.

---

## Tech stack

- **Framework** — React 18, TypeScript 4.9
- **Styling** — SCSS (no CSS-in-JS)
- **Forms** — React Hook Form + Yup
- **Tables** — TanStack React Table
- **Animation** — Framer Motion
- **Drag & drop** — dnd-kit
- **Build** — Rollup (library bundling), Storybook/Webpack5 (docs)
- **Tooling** — Lerna, Yarn Workspaces, Commitlint, Husky, ESLint (flat config), Prettier

---

## Getting started

### Prerequisites

- Node.js 16+
- Yarn (used as the npm client by Lerna)

### Install

```bash
git clone https://github.com/ab-ui-tools/ab-ui-tools.git
cd ab-ui-tools
yarn install
```

### Common scripts (root)

```bash
yarn build              # Build the ui-library package
yarn lerna-build        # Build all packages
yarn start              # Launch Storybook on http://localhost:6006
yarn start:storybook    # Same as above
yarn build:storybook    # Build Storybook as static site
yarn typecheck          # Type-check every package
yarn lint               # Lint every package
yarn lint:fix           # Lint & autofix
```

---

## Using the UI library in an app

### 1. Authenticate with npm

`@ab.uitools` packages require an npm token with read access.

**Locally** — add to your `~/.npmrc` or project-level `.npmrc`:

```
//registry.npmjs.org/:_authToken=YOUR_NPM_TOKEN
```

**Azure DevOps pipeline** — add `NPM_AUTH_TOKEN` as a pipeline variable (mark as secret)

### 2. Install the package

```bash
npm install @ab.uitools/ui-library
# or
yarn add @ab.uitools/ui-library
```

Import components and styles:

```tsx
import { Button } from '@ab.uitools/ui-library';
import '@ab.uitools/ui-library/assets/styles/styles.scss';

export const App = () => <Button>Click me</Button>;
```

Using SCSS mixins in your own styles:

```scss
@use '@ab.uitools/ui-library/assets/styles/helpers/mixin';

.divider {
    @include mixin.flexbox();
}
```

### Scaffold a new app

The CLI can bootstrap a new project pre-wired with the UI library:

```bash
npx @ab.uitools/scripts --name my-app --template react
```

---

## Repository layout

```
ab-ui-tools/
├── packages/
│   ├── ui-library/     # React UI component library (published to npm)
│   ├── base/           # Shared utilities (published to npm)
│   ├── storybook/      # Hosted Storybook app for browsing components
│   └── scripts/        # Project scaffolding CLI (published to npm)
├── commitlint.config.js
├── eslint.config.mjs
├── lerna.json
└── package.json
```

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

```
feature/my-change
       │
       │  PR → master (CI: lint, typecheck, build)
       ▼
    master ─── merge ───▶ publish stable to npm (@latest)
```

1. Open a PR from your feature branch → `master`. CI runs (lint, typecheck, build).
2. Merge → `master`: a stable version is published to npm with the `latest` dist-tag.

**Risky change (config / dependency / big refactor)** — stage through `alpha` first:

```
feature/my-change
       │
       │  PR → alpha (CI: lint, typecheck, build)
       ▼
    alpha ─── merge ───▶ publish beta to npm (@beta)
                         │
                         │  Install + test in your app:
                         │  yarn add @ab.uitools/ui-library@beta
                         │
                         ▼
                 PR alpha → master (CI runs again)
                         │
                         ▼
    master ─── merge ───▶ promote + publish stable (@latest)
```

1. Open a PR from your feature branch → `alpha`. CI runs (lint, typecheck, build).
2. Merge → `alpha`: a `beta` version is published to npm (e.g. `1.2.0-beta.0`).
3. Install the beta in your app and test:
   ```bash
   yarn add @ab.uitools/ui-library@beta
   ```
4. If everything looks good, open a PR `alpha` → `master`. CI runs again.
5. Merge → `master`: beta is promoted and a stable version is published as `latest`.

### Commit types → version bumps

- `fix: …` → patch
- `feat: …` → minor
- `BREAKING CHANGE:` in commit body → major

### Required pipeline variables (Azure DevOps)


| Variable                | Secret | Description                                                            |
| ----------------------- | ------ | ---------------------------------------------------------------------- |
| `NPM_AUTH_TOKEN`        | ✅     | npm token with publish access to`@ab.uitools`                          |
| `BOT_ACCESS_TOKEN`      | ✅     | Token allowing the bot to push version-bump commits back to the branch |
| `WEB_SLACK_WEBHOOK_URL` | ✅     | Slack incoming webhook for publish notifications                       |

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

---

## Contributing

Contributions are welcome — please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a PR.

---

## License

ISC (per-package licensing — see each package's `package.json`). The `scripts` package is MIT.
