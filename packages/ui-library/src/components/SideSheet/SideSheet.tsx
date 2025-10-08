import type { JSX } from 'react';

import React, { useId, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import classnames from 'classnames';

import type { TSideSheetPropTypes } from './types';

import { Footer } from './Footer/Footer';
import { Tab } from '../Tab';
import IconDismiss from '../SVGIcons/IconDismiss';
import { Heading } from '../Heading';
import { Divider } from '../Divider';
import { ButtonIcon } from '../ButtonIcon';
import { isMobile } from '../../utils/helpers';
import { useHideBodyScroll, useOnOutsideClick } from '../../hooks';
import { AnimatePresenceWrapper } from '../../helperComponents/AnimatePresenceWrapper';

export const SideSheet = (props: TSideSheetPropTypes): JSX.Element | null => {
  const {
    size = 'small',
    isLoading,
    isOpen,
    onClose,
    onSubmit,
    title,
    topLeftActions,
    topRightActions,
    position = 'right',
    shouldRemoveCallback,
    className = '',
    tabItemsProps,
    footerButtons,
    children,
    closeOnOutsideClick = true,
    checkboxInfo,
    headerContent,
    isWithDivider = false,
    isPositioned = false,
    isBodyHidden = true,
    withOverlay = false,
  } = props;
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const scrollbarContainerRef = useRef<HTMLDivElement>(null);

  useOnOutsideClick(containerRef, onClose, isOpen && closeOnOutsideClick, useId(), shouldRemoveCallback);

  useHideBodyScroll(isOpen && isBodyHidden);

  const isFromLeft = position === 'left';
  const isFromRight = position === 'right';

  return (
    <AnimatePresenceWrapper>
      {isOpen ? (
        <motion.div
          className={classnames('side-sheet', {
            'side-sheet--positioned': isPositioned || isMobile(),
            'side-sheet--with-overlay': withOverlay || isMobile(),
          })}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.1,
              delay: 0.3,
            },
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            initial={isFromLeft ? { left: '-100%' } : isFromRight ? { right: '-100%' } : { bottom: '-100%' }}
            animate={isFromLeft ? { left: 0 } : isFromRight ? { right: 0 } : { bottom: 0 }}
            exit={{
              ...(isFromLeft ? { left: '-100%' } : isFromRight ? { right: '-100%' } : { bottom: '-100%' }),
              transition: {
                duration: 0.5,
              },
            }}
            transition={{ duration: 0.5 }}
            className={classnames(
              'side-sheet__container',
              `side-sheet__container--${position}`,
              `side-sheet__container--${size}`,
              className
            )}
            ref={setContainerRef}
          >
            <div className="side-sheet__header">
              <div className="side-sheet__header__top">
                <div className="side-sheet__header__top__left pr-16">
                  <Heading className="side-sheet__title" weight="bold" size="xsmall">
                    {title}
                  </Heading>
                  {topLeftActions}
                </div>
                <div className="flexbox align-items--center">
                  {topRightActions}
                  <ButtonIcon size="medium" iconProps={{ Component: IconDismiss }} onClick={onClose} />
                </div>
              </div>
              {headerContent ? <div className="side-sheet__header__content"> {headerContent} </div> : null}
              {tabItemsProps?.tabItems ? (
                <Tab type={'primary'} size={'small'} {...tabItemsProps} className={'side-sheet__tabs'} />
              ) : null}
              {isWithDivider && <Divider isHorizontal />}
            </div>
            <div className="side-sheet__content scrollbar scrollbar--vertical" ref={scrollbarContainerRef}>
              {typeof children === 'function' ? children({ scrollbarContainerRef }) : children}
            </div>
            {footerButtons ? (
              <Footer
                footerButtons={footerButtons}
                isLoading={isLoading}
                onClose={onClose}
                onSubmit={onSubmit}
                checkboxInfo={checkboxInfo}
              />
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresenceWrapper>
  );
};
