import type { StoryFn } from '@storybook/react';
import type { TToastContainerProps } from '@ab.uitools/ui-library/components/Toast';

import { Toast as _Toast, notify } from '@ab.uitools/ui-library/components/Toast';
import { Button } from '@ab.uitools/ui-library/components/Button';

export default {
  title: 'Toast',
  component: _Toast,
  argTypes: {
    position: {
      options: ['bottom-center', 'top-right'],
      control: { type: 'radio' },
    },
    stacked: { control: { type: 'boolean' } },
  },
};

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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
  { label: 'Dismiss all', run: () => notify.dismiss() },
];

const Template: StoryFn<TToastContainerProps> = args => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
    {cases.map(({ label, run }) => (
      <Button key={label} type="secondary" size="small" buttonText={label} onClick={run} />
    ))}
    <_Toast {...args} />
  </div>
);

export const Toast = Template.bind({});

Toast.args = {
  position: 'bottom-center',
  stacked: true,
};
