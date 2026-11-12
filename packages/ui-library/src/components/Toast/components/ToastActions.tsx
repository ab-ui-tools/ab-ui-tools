import type { ReactElement } from 'react';

import type { TToastAction } from '../types';

import { Button } from '../../Button';

type TToastActionsProps = {
  actions: TToastAction[];
  onClose: () => void;
};

export const ToastActions = ({ actions, onClose }: TToastActionsProps): ReactElement | null => {
  if (!actions.length) {
    return null;
  }

  return (
    <div className="toast__actions">
      {actions.map(({ closeOnClick = true, onClick, ...buttonProps }, index) => (
        <Button
          key={index}
          type="secondary"
          size="medium"
          className="toast__button"
          {...buttonProps}
          onClick={event => {
            onClick?.(event);
            if (closeOnClick) {
              onClose();
            }
          }}
        />
      ))}
    </div>
  );
};
