import type { TToastDevice, TToasterProps } from '../types';

import { useScreenSize } from '../../../hooks';

export const useToasterDevice = (device: TToasterProps['device'] = 'auto'): TToastDevice => {
  const screenSize = useScreenSize();

  if (device !== 'auto') {
    return device;
  }
  return screenSize === 'small' ? 'mobile' : 'desktop';
};
