# Storybook (@ab.uitools/storybook)

This package is the **hosted Storybook app** used to browse and validate the components from `@ab.uitools/ui-library`.

## Using `ui-library` components in stories

Import components from `@ab.uitools/ui-library` in your Storybook stories:

```tsx
import { Button } from '@ab.uitools/ui-library'
import '@ab.uitools/ui-library/assets/styles/styles.scss'

export default { title: 'Components/Button' }

export const Primary = () => <Button>Click me</Button>
```

## Keeping Storybook up to date

Storybook depends on `@ab.uitools/ui-library` inside this monorepo (Yarn workspaces). When `ui-library` is updated/versioned by Lerna, Storybook will pick up the updated package automatically on the next `yarn install` / Storybook build and the deployed Storybook will reflect the latest versions.

## Run locally

From the repo root:

```bash
yarn install
yarn start:storybook or yarn start
```

Storybook starts on `http://localhost:6006`.

## Build static site

From the repo root:

```bash
yarn build:storybook
```

This produces a static build in `packages/storybook/storybook-static`.

## Deployment

The repository CI/CD builds Storybook and deploys the static output (from `packages/storybook/storybook-static`) to a hosted site.

**More info**

For the full repo workflow (branches, releases, CI/CD), see the root [`README.md`](../../README.md).

## Development

This package is part of the [ab-ui-tools monorepo](../../README.md). See [CONTRIBUTING.md](../../CONTRIBUTING.md) for the development workflow.
