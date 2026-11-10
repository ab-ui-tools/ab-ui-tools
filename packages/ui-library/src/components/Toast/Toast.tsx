import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { TToastProps } from './types';

import { clampProgress, isToastClosable } from './utils';
import { TOAST_CLOSE_LABEL, TOAST_MAX_ACTIONS, TOAST_STATE } from './consts';
import { ToastActions, ToastIcon, ToastLabel } from './components';
import { Text } from '../Text';
import IconDismiss from '../SVGIcons/IconDismiss';

export const Toast = ({
  state = TOAST_STATE.INFO,
  title,
  description,
  actions = [],
  closable,
  onClose,
  device = 'desktop',
  countdown,
  progress,
  closeLabel = TOAST_CLOSE_LABEL,
  className,
  dataId,
}: TToastProps): ReactElement => {
  const isMobile = device === 'mobile';
  const isPending = state === TOAST_STATE.PENDING;
  const visibleActions = actions.slice(0, TOAST_MAX_ACTIONS[device]);

  return (
    <div
      className={classNames('toast', `toast--${state}`, `toast--${device}`, className)}
      data-id={dataId ? `${dataId}-toast` : undefined}
    >
      {isPending && progress !== undefined ? (
        <div className="toast__progress" style={{ transform: `scaleX(${clampProgress(progress)})` }} />
      ) : null}

      <div className="toast__content">
        <ToastIcon state={state} />

        <div className="toast__body">
          <ToastLabel title={title} countdown={isPending ? countdown : undefined} />
          {description ? (
            <Text as="div" className="toast__description" size="standard" type="inverse">
              {description}
            </Text>
          ) : null}
        </div>

        {!isMobile ? <ToastActions actions={visibleActions} /> : null}

        {isToastClosable(state, closable) ? (
          <div className="toast__close">
            <button type="button" className="toast__close-button" aria-label={closeLabel} onClick={onClose}>
              <IconDismiss size="small" />
            </button>
          </div>
        ) : null}
      </div>

      {isMobile ? <ToastActions actions={visibleActions} /> : null}
    </div>
  );
};
