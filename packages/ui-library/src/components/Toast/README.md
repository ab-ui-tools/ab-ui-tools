# Toast

## 1. Add `<Toast />` once

```tsx
import { Toast } from '@ab.uitools/ui-library';

export const App = () => (
  <>
    <Routes />
    <Toast />
  </>
);
```

Next.js: put it in `app/layout.tsx` inside `<body>`.

## 2. Show a toast anywhere

```tsx
import { notify } from '@ab.uitools/ui-library';

notify.success('Template saved');
notify.error('Changes weren’t saved. Try again.');
notify.warning('3 of 12 transfers failed.');
notify.information('Account details copied');
notify.success('Your transfer was sent.', { title: 'Transfer sent' });
```

## 3. With a button

```tsx
notify.success('Template deleted', {
  actions: [{ buttonText: 'Undo', onClick: undo }],
});
```

The toast closes after the click. Add `closeOnClick: false` to keep it open.

## 4. Loading → result

```tsx
const id = notify.loading('Uploading file…');

notify.update(id, { type: 'success', text: 'File uploaded' });
```

## 5. Close

```tsx
notify.dismiss(id);
notify.dismiss();
```

## Old usage

`<Snackbar />` and `notify({ type, text, actionProps })` still work. `Snackbar` is an alias of `Toast`.
