import type { ReactElement, ReactNode } from 'react';

import { formatCountdown } from '../utils';
import { Text } from '../../Text';

type TToastLabelProps = {
  title?: ReactNode;
  remaining?: number;
};

export const ToastTitle = ({ title, remaining }: TToastLabelProps): ReactElement | null => {
  if (!title) {
    return null;
  }

  return (
    <Text className="toast__title" size="medium" weight="bold" type="inverse">
      {title}
      {remaining !== undefined ? (
        <span className="toast__countdown">
          <span className="toast__dot" aria-hidden="true" />
          <time>{formatCountdown(remaining)}</time>
        </span>
      ) : null}
    </Text>
  );
};
