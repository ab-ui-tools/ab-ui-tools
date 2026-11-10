import type { TToastDevice, TToasterProps } from '../types';

import { useScreenSize } from '../../../hooks';

/** `auto` → mobile layout on small screens (library breakpoint `SCREEN_SIZES.SMALL`). */
export const useToasterDevice = (device: TToasterProps['device'] = 'auto'): TToastDevice => {
  const screenSize = useScreenSize();

  if (device !== 'auto') {
    return device;
  }
  return screenSize === 'small' ? 'mobile' : 'desktop';
};
