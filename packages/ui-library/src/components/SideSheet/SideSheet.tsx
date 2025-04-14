import type { JSX } from 'react';

import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import classnames from 'classnames';

import type { TSideSheetPropTypes } from './types';

import { Footer } from './Footer/Footer';
import { Tab } from '../Tab';
import IconDismiss from '../SVGIcons/IconDismiss';
import IconCaretUp from '../SVGIcons/IconCaretUp';
import { Heading } from '../Heading';
import { ButtonIcon } from '../ButtonIcon';
import { Button } from '../Button';
import { useDispatchEventOnScroll } from '../../hooks/useDispatchEventOnScroll';
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
    position = 'right',
    shouldRemoveCallback,
    className = '',
    tabItemsProps,
    footerButtons,
    scrollToTopOptions,
    children,
    closeOnOutsideClick = true,
    checkboxInfo,
    headerContent,
    isPositioned = false,
    withOverlay = false,
  } = props;
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const [isShownScrollIcon, setIsShownScrollIcon] = useState<boolean>(false);
  const scrollbarContainerRef = useRef<HTMLDivElement>(null);

  useOnOutsideClick(containerRef, onClose, isOpen && closeOnOutsideClick, useId(), shouldRemoveCallback);

  useHideBodyScroll(isOpen);
  const dispatchScrollEvent = useDispatchEventOnScroll();

  useEffect(() => {
    if (isOpen && scrollToTopOptions) {
      const handleOnScroll = (e: Event) => {
        dispatchScrollEvent();
        if (isOpen) {
          setIsShownScrollIcon((e.currentTarget as HTMLDivElement).scrollTop > scrollToTopOptions.onPixel);
        }
      };
      scrollbarContainerRef.current?.addEventListener('scroll', handleOnScroll);
    }
    if (!isOpen) {
      handleScrollToTop();
    }
  }, [isOpen, scrollToTopOptions]);

  const handleScrollToTop = useCallback(() => {
    setIsShownScrollIcon(false);
    scrollbarContainerRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const isFromLeft = position === 'left';

  return (
    <AnimatePresenceWrapper>
      {isOpen ? (
        <motion.div
          className={classnames('side-sheet', {
            'side-sheet--positioned': isPositioned,
            'side-sheet--with-overlay': withOverlay,
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
            initial={isFromLeft ? { left: '-100%' } : { right: '-100%' }}
            animate={isFromLeft ? { left: 0 } : { right: 0 }}
            exit={{
              ...(isFromLeft ? { left: '-100%' } : { right: '-100%' }),
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
                  <Heading className="side-sheet__title" weight="bold" lineHeight="medium" size="xsmall">
                    {title}
                  </Heading>
                </div>
                <div>
                  <ButtonIcon size="medium" iconProps={{ Component: IconDismiss }} onClick={onClose} />
                </div>
                {isShownScrollIcon && (
                  <Button
                    size="large"
                    type="secondary"
                    iconProps={{ Component: IconCaretUp }}
                    className={`side-sheet__header__scroll-top side-sheet__header__scroll-top__${size}`}
                    onClick={handleScrollToTop}
                  />
                )}
              </div>
              {headerContent ? <div className="side-sheet__header__content"> {headerContent} </div> : null}
              {tabItemsProps?.tabItems ? (
                <Tab type={'primary'} size={'small'} {...tabItemsProps} className={'side-sheet__tabs'} />
              ) : null}
            </div>
            <div className="side-sheet__content scrollbar scrollbar--vertical" ref={scrollbarContainerRef}>
              {children}
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
