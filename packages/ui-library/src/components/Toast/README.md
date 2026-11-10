# Toast

Render `<Toaster />` once at the app root, then call `toast` from anywhere.

> Import `toast` and `<Toaster />` from the same path (`@ab.uitools/ui-library/components/Toast`) — the toasts live in one shared store.

## React

```tsx
// App.tsx
import { Toaster } from '@ab.uitools/ui-library/components/Toast';

export const App = () => (
  <>
    <Router />
    {/* once, at the root */}
    <Toaster />
  </>
);
```

```tsx
// anywhere
import { toast } from '@ab.uitools/ui-library/components/Toast';

const handleSave = async () => {
  await saveProfile();
  toast.success('Profile saved');
};
```

## Next.js

`<Toaster />` needs the browser, so render it from a client component.

```tsx
// app/ClientToaster.tsx
'use client';

import { Toaster } from '@ab.uitools/ui-library/components/Toast';

export const ClientToaster = () => <Toaster />;
```

```tsx
// app/layout.tsx
import { ClientToaster } from './ClientToaster';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ClientToaster />
      </body>
    </html>
  );
}
```

```tsx
// app/profile/SaveButton.tsx
'use client';

import { toast } from '@ab.uitools/ui-library/components/Toast';

export const SaveButton = () => <button onClick={() => toast.success('Profile saved')}>Save</button>;
```
