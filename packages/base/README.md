# AB UI Tools

Documentation lives in the repo `README.md` files. Live demo (Storybook): https://ab-ui-tools.github.io/ab-ui-tools/?path=/story/calendar--calendar

# Installation and usage

`@ab.uitools/base` is a standalone package with **hooks, helpers, and other supplementary utilities**. 
```
npm install @ab.uitools/base
# or
yarn add @ab.uitools/base
```

Peer dependencies:

- `react` ^18.2.0
- `react-dom` ^18.2.0
- `react-hook-form` ^7.x
- `yup` ^1.7.0

Then use it in your app:

```ts
import { useOnOutsideClick, useScreenSize } from '@ab.uitools/base'
```

Example (close a dropdown on outside click):

```tsx
import { useRef, useState } from 'react'
import { useOnOutsideClick } from '@ab.uitools/base'

export const Dropdown = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)
  const uid = 'dropdown-1'

  useOnOutsideClick(ref.current, () => setOpen(false), open, uid)

  return (
    <div ref={ref}>
      <button onClick={() => setOpen((v) => !v)}>Toggle</button>
      {open && <div>Menu</div>}
    </div>
  )
}
```

Example (responsive behavior):

```tsx
import { useScreenSize } from '@ab.uitools/base'

export const Header = () => {
  const size = useScreenSize()
  return <div>Current breakpoint: {size}</div>
}
```

## Form helpers (optional)

If you want to share a single React Hook Form instance across your app without passing `methods` through props, you can use `FormContext` + `useFormProps`.

```tsx
import { FormContext, useFormProps } from '@ab.uitools/base'
import { useForm } from 'react-hook-form'

const EmailInput = ({ name }: { name: string }) => {
  const { register, errors } = useFormProps()
  return (
    <>
      <input {...register?.(name)} />
      {errors?.[name] && <span>{String(errors[name]?.message)}</span>}
    </>
  )
}

export const SignInForm = () => {
  const methods = useForm({ defaultValues: { email: '' } })
  const onSubmit = methods.handleSubmit((values) => console.log(values))

  return (
    <FormContext.Provider value={methods}>
      <form onSubmit={onSubmit}>
        <EmailInput name="email" />
        <button type="submit">Sign in</button>
      </form>
    </FormContext.Provider>
  )
}
```

**More info**

For versioning and release flow (including `alpha`/`beta` and stable releases), see the root [`README.md`](../../README.md).

## Development

This package is part of the [ab-ui-tools monorepo](../../README.md). See [CONTRIBUTING.md](../../CONTRIBUTING.md) for the development workflow.
