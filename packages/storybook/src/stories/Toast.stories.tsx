import type { StoryFn } from '@storybook/react';
import type { TToastContainerProps, TToastTypes } from '@ab.uitools/ui-library/components/Toast';

import { useCallback, useEffect } from 'react';
import { Toast as _Toast, notify, TOAST_TYPE } from '@ab.uitools/ui-library/components/Toast';
import { Button } from '@ab.uitools/ui-library/components/Button';

const CUSTOM_TOAST_ID = 'toast-story';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const RANDOM_TOASTS: { type: TToastTypes; text: string; title?: string }[] = [
  { type: TOAST_TYPE.SUCCESS, text: 'Template saved' },
  { type: TOAST_TYPE.SUCCESS, text: 'Your transfer was sent to John Smith.', title: 'Transfer sent' },
  { type: TOAST_TYPE.ERROR, text: 'Changes weren’t saved. Try again.' },
  { type: TOAST_TYPE.WARNING, text: '3 of 12 transfers failed.' },
  { type: TOAST_TYPE.INFORMATION, text: 'Account details copied' },
  { type: TOAST_TYPE.INFORMATION_BLUE, text: 'We’re preparing your statement.', title: 'Statement' },
];

let randomCount = 0;

const showRandomToast = () => {
  const props = RANDOM_TOASTS[Math.floor(Math.random() * RANDOM_TOASTS.length)];
  notify({ ...props, toastId: `toast-random-${++randomCount}` });
};

const cases: { label: string; run: () => void }[] = [
  { label: 'Success', run: () => notify.success('Template saved') },
  { label: 'Error', run: () => notify.error('Changes weren’t saved. Try again.') },
  { label: 'Warning', run: () => notify.warning('3 of 12 transfers failed.') },
  { label: 'Information', run: () => notify.information('Account details copied') },
  {
    label: 'Information blue',
    run: () => notify.informationBlue('We’re preparing your statement. We’ll let you know when it’s ready.'),
  },
  {
    label: 'Success with title',
    run: () => notify.success('Your transfer was sent to John Smith.', { title: 'Transfer sent' }),
  },
  {
    label: 'Error with action',
    run: () => {
      const id = notify.error('Couldn’t load your accounts.', {
        actions: [
          {
            buttonText: 'Retry',
            closeOnClick: false,
            onClick: async () => {
              notify.update(id, { type: 'loading', text: 'Loading accounts…', actions: [] });
              await wait(2000);
              notify.update(id, { type: 'success', text: 'Accounts loaded' });
            },
          },
        ],
      });
    },
  },
  {
    label: 'Loading → Success',
    run: async () => {
      const id = notify.loading('Uploading payment file…');
      await wait(3000);
      notify.update(id, { type: 'success', text: 'Payment file uploaded' });
    },
  },
  {
    label: 'Pending with Undo',
    run: () =>
      notify.pending('The payment will be sent when the timer ends.', {
        title: 'Sending payment',
        actions: [{ buttonText: 'Undo', onClick: () => notify.information('Payment cancelled') }],
      }),
  },
  {
    label: 'Offline → Online',
    run: async () => {
      notify.offline('You’re offline. Some actions won’t work until you’re back online.');
      await wait(4000);
      notify.online('You’re back online');
    },
  },
  {
    label: 'Legacy notify()',
    run: () =>
      notify({
        toastId: Math.random(),
        type: 'information',
        text: 'Old usage still works',
        actionProps: { buttonText: 'close' },
      }),
  },
  {
    label: 'Multiple random toasts',
    run: async () => {
      for (let i = 0; i < 3; i++) {
        showRandomToast();
        await wait(400);
      }
    },
  },
];

export default {
  title: 'Toast',
  component: _Toast,
  argTypes: {
    position: {
      options: ['bottom-center', 'top-right'],
      control: { type: 'radio' },
    },
    stacked: { table: { disable: true } },
  },
};

type TToastStoryArgs = TToastContainerProps & {
  type: TToastTypes;
  title: string;
  text: string;
  buttonText: string;
  closable: boolean;
  duration?: number;
};

const ToastStory = ({ type, title, text, buttonText, closable, duration, ...args }: TToastStoryArgs) => {
  const showToast = useCallback(() => {
    notify({
      toastId: CUSTOM_TOAST_ID,
      type,
      text,
      title: title || undefined,
      closable,
      duration,
      actions: buttonText ? [{ buttonText, onClick: () => undefined }] : undefined,
    });
  }, [type, title, text, buttonText, closable, duration]);

  useEffect(showToast, [showToast]);

  return (
    <div>
      <Button type="primary" size="small" buttonText="Show toast" onClick={showToast} />
      <_Toast {...args} />
    </div>
  );
};

export const Toast: StoryFn<TToastStoryArgs> = args => <ToastStory {...args} />;

Toast.argTypes = {
  type: {
    options: Object.values(TOAST_TYPE),
    control: { type: 'select' },
  },
  title: { control: { type: 'text' } },
  text: { control: { type: 'text' } },
  buttonText: { name: 'button', control: { type: 'text' } },
  closable: { name: 'close', control: { type: 'boolean' } },
  duration: { control: { type: 'number' } },
};

Toast.args = {
  type: TOAST_TYPE.SUCCESS,
  title: '',
  text: 'Template saved',
  buttonText: '',
  closable: true,
  position: 'bottom-center',
};

type TBehaviorArgs = TToastContainerProps & { scenario: string };

export const Behavior: StoryFn<TBehaviorArgs> = ({ scenario, ...args }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
    <Button
      type="primary"
      size="small"
      buttonText="Show toast"
      onClick={() => cases.find(({ label }) => label === scenario)?.run()}
    />
    <Button type="secondary" size="small" buttonText="Dismiss all" onClick={() => notify.dismiss()} />
    <_Toast {...args} />
  </div>
);

Behavior.argTypes = {
  scenario: {
    name: 'behavior',
    options: cases.map(({ label }) => label),
    control: { type: 'select' },
  },
};

Behavior.args = {
  scenario: cases[0].label,
  position: 'bottom-center',
};
