# ab-ui-tools

A monorepo containing the **AB UI Tools** — a React component library, shared utilities, a Storybook demo environment, and CLI tooling for scaffolding new projects.

Homepage: https://github.com/ab-ui-tools/ab-ui-tools

---

## Packages

This is a [Lerna](https://lerna.js.org/) monorepo managed with Yarn workspaces. Each package is versioned independently and published to npm under the `@ab.uitools` scope.

| Package | Description | Version |
|---------|-------------|---------|
| [`@ab.uitools/ui-library`](./packages/ui-library) | React UI component library (54+ components) | 1.8.8 |
| [`@ab.uitools/base`](./packages/base) | Shared utilities, helpers, and hooks | 1.2.17 |
| [`@ab.uitools/storybook`](./packages/storybook) | Storybook demo & documentation (private) | 1.7.8 |
| [`@ab.uitools/scripts`](./packages/scripts) | CLI for scaffolding new apps | 1.0.13 |

### What's inside `ui-library`

A form-centric React component library built around [React Hook Form](https://react-hook-form.com/) and [Yup](https://github.com/jquense/yup). Components include:

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
- **Tooling** — Lerna, Yarn Workspaces, Semantic Release, Commitlint, Husky, ESLint (flat config), Prettier

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

Install the package:

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
│   ├── ui-library/     # Component library (published)
│   ├── base/           # Shared utilities (published)
│   ├── storybook/      # Demo & docs (private)
│   └── scripts/        # CLI tool (published)
├── commitlint.config.js
├── eslint.config.mjs
├── lerna.json
└── package.json
```

---

## Releases

Versioning and publishing are fully automated via [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) driven by [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Merging a PR to `master` triggers a release:

- `fix: …` → patch release
- `feat: …` → minor release
- `BREAKING CHANGE: …` (in commit body) → major release

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

---

## Contributing

Contributions are welcome — please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a PR.

---

## License

ISC (per-package licensing — see each package's `package.json`). The `scripts` package is MIT.
