import type { CSSProperties, ReactElement } from 'react';

import { createPortal } from 'react-dom';
import { useMemo } from 'react';
import classNames from 'classnames';

import type { TToasterProps } from './types';

import { orderFrontFirst } from './utils';
import { useStackInteraction, useStackLayout, useToasterDevice, useToasts } from './hooks';
import { TOASTER_ARIA_LABEL, TOASTER_DEFAULT_OFFSETS } from './consts';
import { ToastItem } from './components';

/** Renders the toasts*/
export const Toaster = ({
  position = 'bottom-center',
  device: deviceProp = 'auto',
  offset,
  ariaLabel = TOASTER_ARIA_LABEL,
  closeLabel,
  className,
}: TToasterProps): ReactElement => {
  const records = useToasts();
  const device = useToasterDevice(deviceProp);
  const active = useMemo(() => orderFrontFirst(records.filter(record => !record.dismissed)), [records]);
  const { stackRef, isExpanded, isPaused, handlers } = useStackInteraction(device, active.length);
  const { height, frontHeight, onHeight, getPosition } = useStackLayout(records, active, isExpanded);

  const isMobile = device === 'mobile';
  const anchor = isMobile || position === 'bottom-center' ? 'bottom' : 'top';
  const { top, right, bottom, left } = { ...TOASTER_DEFAULT_OFFSETS[isMobile ? 'mobile' : position], ...offset };

  const rootStyle = {
    '--ds-toaster-top': `${top}px`,
    '--ds-toaster-right': `${right}px`,
    '--ds-toaster-bottom': `${bottom}px`,
    '--ds-toaster-left': `${left}px`,
  } as CSSProperties;

  return createPortal(
    <section
      className={classNames('toaster', `toaster--${device}`, { [`toaster--${position}`]: !isMobile }, className)}
      style={rootStyle}
      aria-label={ariaLabel}
      aria-live="polite"
      aria-relevant="additions text"
    >
      <ol
        ref={stackRef}
        className={classNames('toaster__stack', { 'toaster__stack--expanded': isExpanded })}
        style={{ height: `${height}px` }}
        {...handlers}
      >
        {records.map(record => {
          const { index, offset: itemOffset } = getPosition(record);

          return (
            <ToastItem
              key={record.id}
              record={record}
              index={index}
              total={records.length}
              offset={itemOffset}
              frontHeight={frontHeight}
              isExpanded={isExpanded}
              isPaused={isPaused}
              device={device}
              anchor={anchor}
              closeLabel={closeLabel}
              onHeight={onHeight}
            />
          );
        })}
      </ol>
    </section>,
    document.body
  );
};
