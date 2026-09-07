import type { StoryFn } from '@storybook/react';
import type { TMenuItem, TMenuProps } from '@ab.uitools/ui-library/components/Menu/types';

import { useState } from 'react';
import {
  IconArrowExit,
  IconCheckmark,
  IconSettings,
  IconPeople,
  IconBeach,
  IconEdit,
  IconAddFilled,
  IconMore,
} from '@ab.uitools/ui-library/components/SVGIcons';
import { Menu as _Menu, NestedMenu as _NestedMenu } from '@ab.uitools/ui-library/components/Menu';
import { Button } from '@ab.uitools/ui-library/components/Button';

export default {
  title: 'Menu',
  component: _Menu,
  argTypes: {
    position: {
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      control: { type: 'radio' },
    },
    withSelectedOption: {
      control: { type: 'boolean' },
    },
  },
};

const items: TMenuItem[] = [
  {
    label: 'Edit',
    iconProps: {
      Component: IconEdit,
    },
    handler: () => {
      console.log('edit');
    },
    value: 1,
    meta: 'meta',
  },
  {
    label: 'Save changes',
    iconProps: {
      Component: IconAddFilled,
    },
    handler: () => {
      console.log('add');
    },
    value: 2,
  },
  {
    label: 'Delete',
    iconProps: {
      Component: IconCheckmark,
    },
    handler: () => {
      console.log('delete');
    },
    value: 3,
  },
  {
    label: 'logout',
    value: 4,
    iconProps: {
      Component: IconArrowExit,
    },
    handler: () => {},
  },
];

const Template: StoryFn<TMenuProps> = args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedVal, setSelectedVal] = useState<number | string>(2);

  const menuItems = items.map(item => ({
    ...item,
    isSelected: item.value === selectedVal,
    handler: () => {
      // @ts-ignore
      setSelectedVal(item.value);
      item.handler?.();
    },
  }));

  return (
    <div>
      <div
        style={{
          position: 'relative',
          width: 'fit-content',
          margin: '300px 300px',
        }}
        ref={setRef}
      >
        <Button onClick={() => setOpen(!open)} iconProps={{ Component: IconMore }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={menuItems} isOpen={open} />
      </div>
    </div>
  );
};

export const Menu = Template.bind({});
Menu.args = {
  withSelectedOption: true,
};

const NestedItems = [
  {
    title: 'People',
    value: 1,
    iconProps: {
      Component: IconPeople,
      size: 'medium',
    },
    isOpen: true,
    subItems: [
      {
        label: 'Libraries',
        value: 1,
        iconProps: {
          Component: IconSettings,
          size: 'medium',
        },
        handler: () => {
          console.log('libraries');
        },
        disabled: true,
      },
      {
        label: 'Users and permissions',
        value: 2,
        iconProps: {
          Component: IconSettings,
          size: 'medium',
        },
        handler: () => {
          console.log('libraries');
        },
      },
    ],
  },
  {
    title: 'Attendance and absence management',
    value: 2,
    iconProps: {
      Component: IconBeach,
    },
    subItems: [
      {
        label: 'Libraries',
        value: 1,
        iconProps: {
          Component: IconSettings,
          size: 'medium',
        },
        handler: () => {
          console.log('libraries');
        },
      },
    ],
  },
];

const NestedMenuTemplate = (args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{ position: 'relative', width: 'fit-content' }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{ Component: IconSettings }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} />
      </div>
    </div>
  );
};

export const NestedMenu = NestedMenuTemplate.bind({});
