import type { FC, JSX, ReactNode } from 'react';
import type { AnimatePresenceProps } from 'framer-motion';

import { AnimatePresence } from 'framer-motion';

interface NewAnimatePresenceProps extends Omit<AnimatePresenceProps, 'children'> {
  children: ReactNode;
}

//  This component is for exit animation
export function AnimatePresenceWrapper({
  children,
  initial = true,
}: {
  children: ReactNode;
  initial?: boolean;
}): JSX.Element {
  const NewAnimatePresence: FC<NewAnimatePresenceProps> = AnimatePresence;

  return <NewAnimatePresence initial={initial}>{children}</NewAnimatePresence>;
}
