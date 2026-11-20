import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { TToastId, TToastProps } from '../types';

import { ToastTitle } from './ToastTitle';
import { ToastIcon } from './ToastIcon';
import { ToastActions } from './ToastActions';
import { isToastClosable } from '../utils';
import { useCountdown } from '../hooks';
import { TOAST_CLOSE_LABEL, TOAST_MAX_ACTIONS, TOAST_TYPE } from '../consts';
import { Text } from '../../Text';
import IconDismiss from '../../SVGIcons/IconDismiss';
import { ButtonIcon } from '../../ButtonIcon';
import { useScreenSize } from '../../../hooks';

type TToastContentProps = TToastProps & {
  id: TToastId;
  countdown: number;
  isPaused: boolean;
  onClose: () => void;
};

export const ToastContent = (props: TToastContentProps): ReactElement => {
  const {
    id,
    type = TOAST_TYPE.INFORMATION,
    title,
    text,
    actionProps,
    actions = [],
    closeLabel = TOAST_CLOSE_LABEL,
    countdown,
    isPaused,
    onClose,
    onCommit,
  } = props;
  const isMobile = useScreenSize() === 'small';

  const remaining = useCountdown(countdown, isPaused, () => {
    onCommit?.(id);
    onClose();
  });

  const allActions = actionProps ? [actionProps, ...actions] : actions;
  const visibleActions = allActions.slice(0, TOAST_MAX_ACTIONS[isMobile ? 'mobile' : 'desktop']);
  const actionsNode = <ToastActions actions={visibleActions} onClose={onClose} />;

  return (
    <div
      data-id={`${type}-toast-message`}
      className={classNames('toast', `toast--${type}`, {
        'toast--mobile': isMobile,
      })}
    >
      {countdown ? (
        <div className="toast__progress" style={{ transform: `scaleX(${1 - remaining / countdown})` }} />
      ) : null}

      <div className="toast__content">
        <ToastIcon type={type} />

        <div className="toast__body">
          <ToastTitle title={title} remaining={countdown ? remaining : undefined} />
          <Text className="toast__text" type="inverse">
            {text}
          </Text>
        </div>

        <div className={'toast__content__right'}>
          {!isMobile ? actionsNode : null}

          {isToastClosable(props) ? (
            <ButtonIcon
              className="toast__close"
              aria-label={closeLabel}
              iconProps={{ Component: IconDismiss }}
              onClick={onClose}
            />
          ) : null}
        </div>
      </div>

      {isMobile ? actionsNode : null}
    </div>
  );
};
