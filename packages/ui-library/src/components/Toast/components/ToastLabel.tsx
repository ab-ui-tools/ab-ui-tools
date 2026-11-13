import type { ReactElement, ReactNode } from 'react';

import { formatCountdown } from '../utils';
import { Text } from '../../Text';

type TToastLabelProps = {
  title?: ReactNode;
  remaining?: number;
};

export const ToastLabel = ({ title, remaining }: TToastLabelProps): ReactElement | null => {
  if (!title && remaining === undefined) {
    return null;
  }

  return (
    <div className="toast__label">
      {title ? (
        <Text as="span" className="toast__title" size="medium" weight="bold" type="inverse">
          {title}
        </Text>
      ) : null}
      {remaining !== undefined ? (
        <span className="toast__countdown">
          <span className="toast__dot" aria-hidden="true" />
          <Text as="span" className="toast__title" size="medium" weight="bold" type="inverse">
            <time>{formatCountdown(remaining)}</time>
          </Text>
        </span>
      ) : null}
    </div>
  );
};
