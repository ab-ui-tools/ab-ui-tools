# @ab.uitools/base

Shared form context and React Hook Form helpers used by [`@ab.uitools/ui-library`](../ui-library). This package is a small runtime shim that lets consumer apps share a single React Hook Form instance with the UI library's form-aware components (e.g. `Input`, `Select`, `DatePicker`).

Homepage: https://github.com/ab-ui-tools/ab-ui-tools

---

## Installation

```bash
npm install @ab.uitools/base
# or
yarn add @ab.uitools/base
```

Peer dependencies:

- `react` ^18.2.0
- `react-dom` ^18.2.0
- `react-hook-form` ^7.x
- `yup` ^1.7.0

---

## Public API

```ts
import { FormContext, useFormProps, useFieldArray } from '@ab.uitools/base';
```

| Export | Purpose |
|--------|---------|
| `FormContext` | React context that carries a React Hook Form instance down the tree. Wrap your form in its provider so `@ab.uitools/ui-library` inputs can register themselves automatically. |
| `useFormProps` | Hook that returns the current `FormContext` value (`register`, `control`, `errors`, `setValue`, …). Call it inside a `FormContext.Provider` to build form-aware components. |
| `useFieldArray` | Re-export of `useFieldArray` from `react-hook-form`, pinned to the version this package is built against — use it instead of importing from `react-hook-form` directly to avoid version drift. |

---

## Usage

Wrap a form with `FormContext.Provider`, passing the value returned by `useForm()`:

```tsx
import { FormContext, useFormProps } from '@ab.uitools/base';
import { useForm } from 'react-hook-form';

const EmailInput = ({ name }: { name: string }) => {
    const { register, errors } = useFormProps();
    return (
        <>
            <input {...register?.(name)} />
            {errors?.[name] && <span>{String(errors[name]?.message)}</span>}
        </>
    );
};

export const SignInForm = () => {
    const methods = useForm({ defaultValues: { email: '' } });

    const onSubmit = methods.handleSubmit((values) => {
        console.log(values);
    });

    return (
        <FormContext.Provider value={methods}>
            <form onSubmit={onSubmit}>
                <EmailInput name="email" />
                <button type="submit">Sign in</button>
            </form>
        </FormContext.Provider>
    );
};
```

Within the provider, any component can call `useFormProps()` to read `register`, `control`, `errors`, `setValue`, and the other form methods out of context — use it to build form-aware inputs without threading `methods` through props.

> Note: `@ab.uitools/ui-library` ships its own `FormContainer` / `FormField` / internal `FormContext` and does **not** consume this package's `FormContext`. Reach for `@ab.uitools/base` when you want a lightweight form-context primitive in an app that is *not* using ui-library's `FormContainer`.

---

## Development

This package is part of the [ab-ui-tools monorepo](../../README.md). See [CONTRIBUTING.md](../../CONTRIBUTING.md) for the development workflow.

### Scripts

```bash
yarn build        # Rollup build → dist/
yarn typecheck    # tsc --noEmit
yarn check        # lint + typecheck
```

---

## Release

Versioning and publishing are automated via Semantic Release driven by Conventional Commits. See the root [CONTRIBUTING.md](../../CONTRIBUTING.md#releases) for details.

## License

ISC
