import type { ReactElement } from 'react';

import type { TToastTypes } from '../types';

import { TOAST_TYPE } from '../consts';
import IconWifiOff from '../../SVGIcons/IconWifiOff';
import IconWifi from '../../SVGIcons/IconWifi';
import IconWarningFilled from '../../SVGIcons/IconWarningFilled';
import IconInfoFilled from '../../SVGIcons/IconInfoFilled';
import IconErrorCircleFilled from '../../SVGIcons/IconErrorCircleFilled';
import IconCheckmarkCircleFilled from '../../SVGIcons/IconCheckmarkCircleFilled';
import { Spinner } from '../../Spinner';

const TOAST_ICONS: Record<TToastTypes, ReactElement | null> = {
  [TOAST_TYPE.SUCCESS]: <IconCheckmarkCircleFilled size="medium" />,
  [TOAST_TYPE.ERROR]: <IconErrorCircleFilled size="medium" />,
  [TOAST_TYPE.WARNING]: <IconWarningFilled size="medium" />,
  [TOAST_TYPE.INFORMATION]: <IconInfoFilled size="medium" />,
  [TOAST_TYPE.INFORMATION_BLUE]: <IconInfoFilled size="medium" />,
  [TOAST_TYPE.LOADING]: <Spinner size="small" type="inverse" mode="light" isFullScreen={false} />,
  [TOAST_TYPE.OFFLINE]: <IconWifiOff size="medium" />,
  [TOAST_TYPE.ONLINE]: <IconWifi size="medium" />,
  [TOAST_TYPE.PENDING]: null,
};

export const ToastIcon = ({ type }: { type: TToastTypes }): ReactElement | null => {
  const icon = TOAST_ICONS[type];
  return icon ? <div className="toast__icon">{icon}</div> : null;
};
