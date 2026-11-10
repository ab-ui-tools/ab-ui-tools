import type { StoryFn } from '@storybook/react';
import type { TToastDevice, TToasterPosition } from '@ab.uitools/ui-library/components/Toast/types';

import { TOAST_STATE, Toaster, toast } from '@ab.uitools/ui-library/components/Toast';
import { Button } from '@ab.uitools/ui-library/components/Button';

export default {
  title: 'Toast',
  component: Toaster,
  argTypes: {
    position: { options: ['bottom-center', 'top-right'], control: { type: 'radio' } },
    device: { options: ['auto', 'desktop', 'mobile'], control: { type: 'radio' } },
  },
};

type TToasterArgs = {
  position: TToasterPosition;
  device: TToastDevice | 'auto';
  offsetLeft: number;
  offsetTop: number;
};

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const ToasterTemplate: StoryFn<TToasterArgs> = ({ position, device, offsetLeft, offsetTop }) => {
  const cases: { label: string; run: () => void }[] = [
    { label: 'Success', run: () => toast.success('Template saved') },
    { label: 'Error', run: () => toast.error('Changes weren’t saved. Try again.') },
    { label: 'Warning', run: () => toast.warning('3 of 12 transfers failed.') },
    { label: 'Info', run: () => toast.info('Account details copied') },
    {
      label: 'Info blue',
      run: () => toast.infoBlue('We’re preparing your statement. We’ll let you know when it’s ready.'),
    },
    {
      label: 'Loading → Success',
      run: async () => {
        const id = toast.loading('Uploading payment file…');
        await wait(3000);
        toast.update(id, { state: TOAST_STATE.SUCCESS, description: 'Payment file uploaded' });
      },
    },
    {
      label: 'Wifi off → on',
      run: async () => {
        toast.offline('You’re offline. Some actions won’t work until you’re back online.');
        await wait(4000);
        toast.online('You’re back online');
      },
    },
    {
      label: 'Success, with title',
      run: () =>
        toast.success('Your card will be ready in 3 working days. We’ll text you when it’s ready.', {
          title: 'Card ordered',
        }),
    },
    {
      label: 'Error, with title',
      run: () => toast.error('The file is larger than 10 MB. Choose a smaller file.', { title: 'Upload failed' }),
    },
    {
      label: 'Pending action',
      run: () =>
        toast.pending('Scheduled payment to Anna will be cancelled', {
          title: 'Cancelling payment',
          actions: [{ label: 'Cancel', onClick: () => toast.success('Payment kept') }],
          onCommit: () => toast.success('Payment cancelled'),
        }),
    },
    {
      label: 'Success + Undo',
      run: () =>
        toast.success('Beneficiary deleted', {
          actions: [{ label: 'Undo', onClick: () => toast.info('Beneficiary restored') }],
        }),
    },
    {
      label: 'Error + Retry',
      run: () => {
        const id = toast.error('Statement couldn’t be downloaded', {
          actions: [
            {
              label: 'Retry',
              onClick: async () => {
                // Retry turns the toast into Loading (stays open), then resolves in place.
                toast.update(id, {
                  state: TOAST_STATE.LOADING,
                  description: 'Downloading statement…',
                  actions: undefined,
                });
                await wait(2500);
                toast.update(id, { state: TOAST_STATE.SUCCESS, description: 'Statement downloaded' });
              },
            },
          ],
        });
      },
    },
    {
      label: 'Multiple (3 events)',
      run: async () => {
        toast.info('Account number copied');
        await wait(400);
        toast.loading('You can keep working.', { title: 'Uploading 3 files…' });
        await wait(400);
        toast.success('The beneficiary was removed from your list.', {
          title: 'Beneficiary deleted',
          actions: [{ label: 'Undo' }],
        });
      },
    },
    { label: 'Same message twice', run: () => toast.success('Link copied') },
    { label: 'Dismiss all', run: () => toast.dismiss() },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, maxWidth: 720 }}>
      {cases.map(({ label, run }) => (
        <Button key={label} type="secondary" size="medium" buttonText={label} onClick={() => run()} />
      ))}
      <Toaster
        position={position}
        device={device}
        offset={position === 'top-right' ? { top: offsetTop } : offsetLeft ? { left: offsetLeft } : undefined}
      />
    </div>
  );
};

export const Toast = ToasterTemplate.bind({});
Toast.args = { position: 'bottom-center', device: 'auto', offsetLeft: 0, offsetTop: 12 };
