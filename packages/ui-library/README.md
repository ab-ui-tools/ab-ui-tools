# AB UI Tools

Documentation lives in the repo `README.md` files. Live demo (Storybook): https://ab-ui-tools.github.io/ab-ui-tools/?path=/story/calendar--calendar

# Installation and usage

```
npm install @ab.uitools/ui-library
# or
yarn add @ab.uitools/ui-library
```

Then use it in your app:

```jsx
import { Button } from '@ab.uitools/ui-library/components/Button';
import '@ab.uitools/ui-library/assets/styles/styles.scss'; 
// Or you can import the styles.css file
// import '@ab.uitools/ui-library/assets/styles/styles.css';

const App = () => {
  return <Button>Click me</Button>;
};
```

How to use mixins:

```scss
@use "@ab.uitools/ui-library/assets/styles/helpers/mixin";

.divider {
  @include mixin.flexbox();
}
```

# How to create new icon

1. Add a new svg file in `svg-icons` folder.
2. Make sure the icon is matching with the design.
3. Make sure the svg file name is matching with pattern like this `chevron-right.svg`.
4. Run `npm run generate-svg-component` command to generate the new icon component.

# How to create new component

1. Add a folder with the component name in `src/components/` folder.
2. Add a style file in the `assets/styles/components` folder with the name `_componentName.scss`.
3. Import the created style file in `assets/styles/styles.scss` using `@use`.
4. Develop component based on the design.
5. Add a Storybook story for the component in `packages/storybook/src/stories/` (for example: `<ComponentName>.stories.tsx`) so it appears in the hosted Storybook app.
6. Export the component from `src/index.ts` (so consumers can import it).
7. Make sure you don't have type errors and the component matches the design.
8. Commit using Conventional Commits (`feat: ...`, `fix: ...`, etc.).
9. Open a PR:
   - Regular changes → target `master`
   - Risky changes (config / dependencies / big refactor) → target `alpha` first, test the `@beta` release in a real app, then PR `alpha` → `master`

**More info**

For versioning and release flow (including `alpha`/`beta` and stable releases), see the root [`README.md`](../../README.md).

## Development

This package is part of the [ab-ui-tools monorepo](../../README.md). See [CONTRIBUTING.md](../../CONTRIBUTING.md) for the development workflow.
