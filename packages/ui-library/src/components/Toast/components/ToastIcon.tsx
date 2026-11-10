import type { ReactElement } from 'react';

import type { TToastState } from '../types';

import { TOAST_STATE } from '../consts';
import IconWifiOff from '../../SVGIcons/IconWifiOff';
import IconWifi from '../../SVGIcons/IconWifi';
import IconWarningFilled from '../../SVGIcons/IconWarningFilled';
import IconInfoFilled from '../../SVGIcons/IconInfoFilled';
import IconErrorCircleFilled from '../../SVGIcons/IconErrorCircleFilled';
import IconCheckmarkCircleFilled from '../../SVGIcons/IconCheckmarkCircleFilled';
import { Spinner } from '../../Spinner';

const TOAST_ICONS: Record<TToastState, ReactElement | null> = {
  [TOAST_STATE.SUCCESS]: <IconCheckmarkCircleFilled size="medium" />,
  [TOAST_STATE.ERROR]: <IconErrorCircleFilled size="medium" />,
  [TOAST_STATE.WARNING]: <IconWarningFilled size="medium" />,
  [TOAST_STATE.INFO]: <IconInfoFilled size="medium" />,
  [TOAST_STATE.INFO_BLUE]: <IconInfoFilled size="medium" />,
  [TOAST_STATE.LOADING]: <Spinner size="small" type="inverse" mode="light" isFullScreen={false} />,
  [TOAST_STATE.WIFI_OFF]: <IconWifiOff size="medium" />,
  [TOAST_STATE.WIFI_ON]: <IconWifi size="medium" />,
  [TOAST_STATE.PENDING]: null,
};

export const ToastIcon = ({ state }: { state: TToastState }): ReactElement | null => {
  const icon = TOAST_ICONS[state];

  return icon ? <div className="toast__icon">{icon}</div> : null;
};
