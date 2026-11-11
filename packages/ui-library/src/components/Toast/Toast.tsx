import type { ReactElement } from 'react';

import { ToastContainer, Slide } from 'react-toastify';
import { useRef } from 'react';
import classNames from 'classnames';

import type { TToastContainerProps } from './types';

import { useResetWhenEmpty, useStackFront } from './hooks';
import { TOAST_SWIPE_PERCENT } from './consts';
import { useScreenSize } from '../../hooks';

export const Toast = ({
  duration = 1000,
  position = 'bottom-center',
  stacked = true,
  className,
}: TToastContainerProps): ReactElement => {
  const rootRef = useRef<HTMLDivElement>(null);
  const isMobile = useScreenSize() === 'small';
  const resetKey = useResetWhenEmpty();

  useStackFront(rootRef, stacked);

  return (
    <div ref={rootRef} className="toast-root">
      <ToastContainer
        key={resetKey}
        className={classNames('toast-wrapper', className)}
        position={isMobile ? 'bottom-center' : position}
        stacked={stacked}
        autoClose={duration}
        hideProgressBar
        closeButton={false}
        icon={false}
        transition={Slide}
        draggablePercent={TOAST_SWIPE_PERCENT}
      />
    </div>
  );
};

/** @deprecated Use `Toast`. */
export const Snackbar = Toast;
