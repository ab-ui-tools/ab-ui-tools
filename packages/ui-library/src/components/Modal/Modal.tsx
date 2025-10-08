import type { ReactElement } from 'react';

import React, { useId, useState } from 'react';
import { motion } from 'framer-motion';
import classnames from 'classnames';

import type { TModalPropTypes } from './types';

import { Positions } from '../Tooltip/types';
import { Tooltip } from '../Tooltip';
import { Text } from '../Text';
import IconDismiss from '../SVGIcons/IconDismiss';
import { Checkbox } from '../Checkbox';
import { ButtonIcon } from '../ButtonIcon';
import { Button } from '../Button';
import { useHideBodyScroll, useOnOutsideClick } from '../../hooks';
import { AnimatePresenceWrapper } from '../../helperComponents/AnimatePresenceWrapper';

const DESKTOP_ANIMATION = {
  initial: { opacity: 0.5, scale: 0.65 },
  animate: { opacity: 1, scale: [0.95, 1] },
  exit: {
    opacity: 0,
    scale: 0.7,
    transition: {
      duration: 0.2,
    },
  },
  transition: {
    duration: 0.4,
    type: 'spring',
    damping: 55,
    stiffness: 700,
  },
};

export const Modal = (props: TModalPropTypes): ReactElement => {
  const {
    isOpen,
    onClose,
    onSubmit,
    titleProps,
    subtitle,
    closeIcon,
    className = '',
    size = 'medium',
    buttonProps,
    checkProps,
    children,
    dataIdPrefix,
    closeOnOutsideClick = true,
    confirmBtnTooltipText,
  } = props;

  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  useOnOutsideClick(containerRef, onClose, closeOnOutsideClick && isOpen, useId());
  useHideBodyScroll(isOpen);

  const checkbox = checkProps ? <Checkbox {...checkProps} /> : null;

  const buttons = buttonProps ? (
    <div className={`flexbox ${checkProps ? '' : 'full-width justify-content--end'}`}>
      <Button
        type="tertiary"
        className="modal__footer__btn mr-16"
        onClick={onClose}
        dataId={dataIdPrefix ? `${dataIdPrefix}-modal-cancel-button` : ''}
        {...(buttonProps.cancel || {})}
      />
      {confirmBtnTooltipText ? (
        <Tooltip text={confirmBtnTooltipText as string} id={'confirm-btn-tooltip'} position={Positions.TOP_CENTER} />
      ) : null}
      <Button
        id={'confirm-btn-tooltip'}
        className={'modal__footer__btn'}
        type="primary"
        onClick={onSubmit}
        dataId={dataIdPrefix ? `${dataIdPrefix}-modal-confirm-button` : ''}
        {...buttonProps.confirm}
      />
    </div>
  ) : null;

  return (
    <AnimatePresenceWrapper>
      {isOpen ? (
        <motion.div
          className={classnames('modal', `modal--${size}`, className)}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="modal__container" ref={setContainerRef} {...DESKTOP_ANIMATION}>
            {titleProps?.title ? (
              <div className="modal__header">
                <div>
                  <Text
                    size={titleProps.size}
                    className={`modal__title-${titleProps.size || 'small'}`}
                    weight={'bold'}
                    dataId={dataIdPrefix ? `${dataIdPrefix}-modal-title` : ''}
                  >
                    {titleProps.title}
                  </Text>
                  {subtitle ? (
                    <Text
                      className={'mt-12'}
                      type={'secondary'}
                      dataId={dataIdPrefix ? `${dataIdPrefix}-modal-title` : ''}
                    >
                      {subtitle}
                    </Text>
                  ) : null}
                </div>
                {closeIcon ? (
                  <ButtonIcon
                    className={'modal__close ml-16'}
                    size={'large'}
                    dataId={dataIdPrefix ? `${dataIdPrefix}-modal-close-button` : ''}
                    iconProps={{ Component: IconDismiss }}
                    onClick={onClose}
                  />
                ) : null}
              </div>
            ) : null}

            <div className="modal__content scrollbar scrollbar--vertical">{children}</div>
            {buttons || checkbox ? (
              <div className={`modal__footer ${checkbox ? 'justify-content--between' : 'justify-content--end'}`}>
                {checkbox}
                {buttons}
              </div>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresenceWrapper>
  );
};
