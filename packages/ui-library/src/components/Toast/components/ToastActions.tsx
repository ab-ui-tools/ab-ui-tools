import type { ReactElement } from 'react';

import type { TToastAction } from '../types';

import { Button } from '../../Button';

export const ToastActions = ({ actions }: { actions: TToastAction[] }): ReactElement | null => {
  if (!actions.length) {
    return null;
  }

  return (
    <div className="toast__actions">
      {actions.map(({ label, onClick }, index) => (
        <Button
          key={`${label}-${index}`}
          type="secondary"
          size="medium"
          className="toast__button"
          buttonText={label}
          onClick={() => onClick?.()}
        />
      ))}
    </div>
  );
};
