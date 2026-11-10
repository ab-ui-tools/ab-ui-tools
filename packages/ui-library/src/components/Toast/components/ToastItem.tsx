import type { CSSProperties, KeyboardEvent, ReactElement } from 'react';

import { useCallback, useRef } from 'react';
import classNames from 'classnames';

import type { TToastAnchor, TToastDevice, TToastId, TToastRecord } from '../types';

import { getStackDepth, getToastDuration, isToastClosable } from '../utils';
import { Toast } from '../Toast';
import { toast } from '../store';
import { useSwipeToDismiss, useToastActions, useToastTimer } from '../hooks';
import { TOAST_MAX_STACK, TOAST_PEEK_INSET, TOAST_STATE } from '../consts';
import { useElementHeight, useInert } from '../../../hooks';

type TToastItemProps = {
  record: TToastRecord;
  index: number;
  total: number;
  offset: number;
  frontHeight: number;
  isExpanded: boolean;
  isPaused: boolean;
  device: TToastDevice;
  anchor: TToastAnchor;
  closeLabel?: string;
  onHeight: (id: TToastId, height: number) => void;
};

/** One toast in the Toaster stack: timer, measurements, stacking, keyboard and swipe. */
export const ToastItem = ({
  record,
  index,
  total,
  offset,
  frontHeight,
  isExpanded,
  isPaused,
  device,
  anchor,
  closeLabel,
  onHeight,
}: TToastItemProps): ReactElement => {
  const {
    id,
    state = TOAST_STATE.INFO,
    title,
    description,
    actions,
    closable,
    dataId,
    version,
    dismissed,
    onCommit,
  } = record;
  const itemRef = useRef<HTMLLIElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const isPending = state === TOAST_STATE.PENDING;
  const isBehind = !isExpanded && index > 0;
  const isHidden = !isExpanded && index >= TOAST_MAX_STACK;
  const isInteractive = !dismissed && !isBehind && !isHidden;
  const depth = getStackDepth(index);
  const duration = getToastDuration(record);

  const close = useCallback(() => toast.dismiss(id), [id]);
  const handleExpire = () => {
    if (isPending) {
      onCommit?.(id);
    }
    close();
  };

  const remaining = useToastTimer({
    duration,
    paused: isPaused || dismissed,
    version,
    onExpire: handleExpire,
    trackRemaining: isPending,
  });
  const wrappedActions = useToastActions(id, actions, close);
  const { offsetX, handlers: swipeHandlers } = useSwipeToDismiss(
    device === 'mobile' && !isPending && isInteractive,
    close
  );

  useElementHeight(innerRef, height => onHeight(id, height));
  useInert(itemRef, !isInteractive);

  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Escape' && isToastClosable(state, closable)) {
      event.stopPropagation();
      close();
    }
  };

  const style = {
    '--ds-toast-item-y': `${(anchor === 'bottom' ? -1 : 1) * offset}px`,
    '--ds-toast-item-x': `${offsetX}px`,
    '--ds-toast-item-inset': `${isBehind ? depth * TOAST_PEEK_INSET : 0}px`,
    height: isBehind && frontHeight ? `${frontHeight}px` : undefined,
    zIndex: total - index,
  } as CSSProperties;

  return (
    <li
      ref={itemRef}
      className={classNames('toaster__item', `toaster__item--${anchor}`, {
        'toaster__item--exiting': dismissed,
        'toaster__item--behind': isBehind,
        [`toaster__item--depth-${depth}`]: isBehind,
        'toaster__item--hidden': isHidden,
        'toaster__item--swiping': offsetX !== 0,
      })}
      style={style}
      role={state === TOAST_STATE.ERROR ? 'alert' : 'status'}
      aria-hidden={!isInteractive || undefined}
      onKeyDown={handleKeyDown}
      {...swipeHandlers}
    >
      <div ref={innerRef} className="toaster__inner">
        <Toast
          state={state}
          title={title}
          description={description}
          actions={wrappedActions}
          closable={closable}
          onClose={close}
          device={device}
          dataId={dataId}
          closeLabel={closeLabel}
          countdown={isPending && duration !== null ? remaining / 1000 : undefined}
          progress={isPending && duration ? 1 - remaining / duration : undefined}
        />
      </div>
    </li>
  );
};
