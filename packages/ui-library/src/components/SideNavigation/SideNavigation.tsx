import type { JSX } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { TSideNavigationPropTypes } from './types';

import IconPanelRight from '../SVGIcons/IconPanelRight';
import IconPanelLeft from '../SVGIcons/IconPanelLeft';
import IconDismiss from '../SVGIcons/IconDismiss';
import { Link } from '../Link';
import { Image } from '../Image';
import { ButtonIcon } from '../ButtonIcon';
import { isMobile } from '../../utils/helpers';

export const SideNavigation = (props: TSideNavigationPropTypes): JSX.Element => {
  const {
    children,
    className = '',
    logo,
    logoClosed,
    logoUrl,
    headerChildren: HeaderChildren,
    isOpen,
    isPined,
    onMouseEnter,
    onMouseLeave,
    onPin,
    onClose,
  } = props;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classNames(
        'side-navigation',
        isOpen ? 'side-navigation--opened' : null,
        !isMobile() && isPined ? 'side-navigation--pin' : null,
        className
      )}
    >
      <header>
        <Link url={logoUrl} className={'side-navigation__logo'}>
          <Image imagePath={isOpen ? logo : logoClosed} isBackgroundImage={false} />
        </Link>
        {HeaderChildren && isOpen ? <HeaderChildren isOpen={!!isOpen} /> : null}
        <ButtonIcon
          iconProps={{
            Component: isMobile() ? IconDismiss : isPined ? IconPanelLeft : IconPanelRight,
          }}
          size={'large'}
          className={'side-navigation__btn'}
          onClick={isMobile() ? onClose : onPin}
        />
      </header>
      {children}
    </div>
  );
};
