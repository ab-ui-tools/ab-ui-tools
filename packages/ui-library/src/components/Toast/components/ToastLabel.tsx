import type { ReactElement, ReactNode } from 'react';

import { formatCountdown } from '../utils';
import { Text } from '../../Text';

type TToastLabelProps = {
  title?: ReactNode;
  /** Seconds left (Pending action), shown after a dot as mm:ss. */
  countdown?: number;
};

/** Title 16/24 SemiBold, optionally followed by the Pending action countdown. */
export const ToastLabel = ({ title, countdown }: TToastLabelProps): ReactElement | null => {
  if (!title && countdown === undefined) {
    return null;
  }

  return (
    <div className="toast__label">
      {title ? (
        <Text as="span" className="toast__title" size="medium" weight="bold" type="inverse">
          {title}
        </Text>
      ) : null}
      {countdown !== undefined ? (
        <span className="toast__countdown">
          <span className="toast__dot" aria-hidden="true" />
          <Text as="span" className="toast__title" size="medium" weight="bold" type="inverse">
            <time>{formatCountdown(countdown)}</time>
          </Text>
        </span>
      ) : null}
    </div>
  );
};
