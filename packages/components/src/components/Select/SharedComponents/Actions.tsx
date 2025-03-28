import type { JSX } from 'react';

import React, { useState } from 'react';

import type { TMenuItem } from '../../Menu/types';

import { Text } from '../../Text';
import IconMore from '../../SVGIcons/IconMore';
import { Menu } from '../../Menu';
import { Button } from '../../Button';

type TProps = {
  selectActions: TMenuItem[];
  innerLabel?: string;
};
export const Actions = (props: TProps): JSX.Element | null => {
  const { selectActions, innerLabel } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [buttonRef, setButtonRef] = useState<HTMLDivElement | null>(null);

  const open = () => setIsMenuOpen(true);
  const close = () => setIsMenuOpen(false);

  return selectActions.length ? (
    <div className="action-bar">
      {innerLabel ? (
        <Text size="xsmall" type="secondary" className="action-bar__label">
          {innerLabel}
        </Text>
      ) : null}
      <div ref={setButtonRef} className="action-bar__right">
        <Button type="tertiary" onClick={open} iconProps={{ Component: IconMore }} size="small" />
        {buttonRef ? (
          <Menu
            menuItems={selectActions}
            parentRef={buttonRef}
            onClose={close}
            position="bottom-left"
            isOpen={isMenuOpen}
          />
        ) : null}
      </div>
    </div>
  ) : null;
};
