import type { TModalConfirmationPropTypes, TModalPropTypes } from 'ab-ui-library/components/Modal/types';
import type { StoryFn } from '@storybook/react';

import React, { useState } from 'react';
import IconDelete from 'ab-ui-library/components/SVGIcons/IconDelete';
import { Modal as _Modal } from 'ab-ui-library/components/Modal';
import { ModalConfirmation as _ModalConfirmation } from 'ab-ui-library/components/Modal';

export default {
  title: 'Modal',
  component: _Modal,
  argTypes: {
    size: {
      options: ['xlarge', 'large', 'medium', 'small'],
      control: { type: 'radio' },
    },
  },
};

const Template: StoryFn<TModalPropTypes> = args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <div>
      <p onClick={openModal}>click here </p>
      <_Modal
        {...args}
        onClose={closeModal}
        isOpen={isOpen}
        onSubmit={() => {
          closeModal();
          console.log('submit');
        }}
        buttonProps={{
          confirm: {
            buttonText: 'Save',
            buttonActionType: 'submit',
          },
          cancel: { buttonText: 'Cancel' },
        }}
      >
        <div>Modal content</div>
      </_Modal>
    </div>
  );
};
export const Modal = Template.bind({});

Modal.args = {
  size: 'medium',
  title: 'Title',
  subtitle: 'Subtitle',
  closeIcon: true,
  withFooter: true,
  confirmBtnTooltipText: 'Confirm',
};

const ModalConfirmationTemplate: StoryFn<TModalConfirmationPropTypes> = args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <div>
      <p onClick={openModal}>click here </p>
      <_ModalConfirmation
        {...args}
        iconProps={{
          Component: IconDelete,
          type: 'warning',
        }}
        onClose={closeModal}
        isOpen={isOpen}
        onSubmit={() => {
          closeModal();
          console.log('submit');
        }}
        buttonProps={{
          confirm: {
            buttonText: 'Delete the card',
            buttonActionType: 'submit',
          },
          cancel: { buttonText: 'Cancel' },
        }}
      />
    </div>
  );
};
export const ModalConfirmation = ModalConfirmationTemplate.bind({});

ModalConfirmation.args = {
  size: 'small',
  title: 'Title text',
  subtitle: 'This is your subtitle that will give you more context',
};
