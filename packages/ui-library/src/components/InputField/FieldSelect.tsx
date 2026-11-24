import type { JSX } from 'react';

import { useState } from 'react';
import classNames from 'classnames';

import type { TInputFieldContentProps } from './types';

import { IconChevronUp } from '../SVGIcons/IconChevronUp';
import { IconChevronDown } from '../SVGIcons/IconChevronDown';
import { Menu } from '../Menu';

type TFieldSelectProps = Omit<Extract<TInputFieldContentProps, { type: 'select' }>, 'type'> & {
  side: 'left' | 'right';
};

export const FieldSelect = ({
  side,
  id,
  options,
  value,
  onValueChange,
  'aria-label': ariaLabel,
  disabled = false,
  dataId = '',
}: TFieldSelectProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [wrapper, setWrapper] = useState<HTMLDivElement | null>(null);
  const [trigger, setTrigger] = useState<HTMLButtonElement | null>(null);
  const selected = options.find(option => option.value === value);
  const selectedText = [selected?.label, selected?.meta].filter(Boolean).join(' ');
  const Chevron = isOpen ? IconChevronUp : IconChevronDown;

  return (
    <div ref={setWrapper} className={`input-field__select input-field__select--${side}`}>
      <button
        ref={setTrigger}
        id={id}
        type="button"
        className={classNames('input-field__select-trigger', { 'input-field__select-trigger--open': isOpen })}
        aria-label={selectedText ? `${ariaLabel}: ${selectedText}` : ariaLabel}
        aria-haspopup="true"
        aria-expanded={isOpen}
        disabled={disabled}
        data-id={dataId || undefined}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected?.icon ? <selected.icon size="small" className="input-field__select-icon" /> : null}
        {selected?.triggerLabel ?? selected?.label}
        <Chevron size="small" type={disabled ? 'disabled' : 'primary'} />
      </button>
      <Menu
        parentRef={wrapper}
        additionalRef={trigger}
        isOpen={isOpen && !disabled}
        onClose={() => setIsOpen(false)}
        position={side === 'left' ? 'bottom-right' : 'bottom-left'}
        className={`input-field__select-menu input-field__select-menu--${side}`}
        menuItems={options.map(option => ({
          label: option.label,
          value: option.value,
          meta: option.meta,
          iconProps: option.icon ? { Component: option.icon, size: 'small' as const } : undefined,
          disabled: option.disabled,
          isSelected: option.value === value,
          dataId: dataId ? `${dataId}-option-${option.value}` : undefined,
          handler: () => {
            if (option.value !== value) {
              onValueChange(option.value);
            }
          },
        }))}
      />
    </div>
  );
};
