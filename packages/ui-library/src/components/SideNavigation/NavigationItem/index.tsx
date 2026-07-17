import type { ReactElement } from 'react';

import { useState } from 'react';
import classNames from 'classnames';

import type { TActionItemProps, TNavigationLinkPropTypes } from './types';

import { ExpandIconPosition, NavigationItemTypes } from './types';
import IconChevronDown from '../../SVGIcons/IconChevronDown';
import { ButtonIcon } from '../../ButtonIcon';
import IconDynamicComponent from '../../../helperComponents/IconDynamicComponent/IconDynamicComponent';

export const NavigationItem = (props: TNavigationLinkPropTypes): ReactElement => {
  const {
    As,
    type,
    isOpen,
    iconName,
    expandable = false,
    showAction = false,
    actionElm,
    active = false,
    expandIconProps = {
      Component: IconChevronDown,
      size: 'medium',
    },
    expandIconPosition = ExpandIconPosition.RIGHT,
    children,
    actionsList,
    className = '',
    rightContent,
  } = props;

  const [childOpen, setChildOpen] = useState(false);

  const displayNavigationItem = () => {
    if (type === NavigationItemTypes.HEADER && !isOpen) {
      return null;
    }
    return As();
  };

  const displayHeader = isOpen && type === NavigationItemTypes.HEADER && showAction && actionElm && actionElm;

  return (
    <>
      <div
        className={classNames(
          'navigation-item',
          `navigation-item--${type}`,
          `${expandable ? 'navigation-item--expandable' : ''}`,
          expandable && expandIconPosition === ExpandIconPosition.LEFT && 'navigation-item--expand-left',
          className
        )}
        onClick={() => setChildOpen(!childOpen)}
      >
        <div className={classNames('navigation-item__inner', active && 'active')}>
          {expandable || actionsList?.length ? (
            <div className={'navigation-item__actions'}>
              {expandable && expandIconPosition === ExpandIconPosition.LEFT && (
                <span
                  className={classNames(
                    'navigation-item__actions__expand_mobile',
                    'navigation-item__actions__expand_mobile--left',
                    childOpen && 'opened'
                  )}
                >
                  {expandIconProps.Component && <expandIconProps.Component size={expandIconProps.size || 'medium'} />}
                </span>
              )}
              {(actionsList?.length || (expandable && expandIconPosition === ExpandIconPosition.RIGHT)) && (
                <div className={'navigation-item__actions__right'}>
                  {actionsList?.map((item: TActionItemProps, index) => {
                    return (
                      <div key={index} className={'navigation-item__actions__action'}>
                        <ButtonIcon
                          iconProps={{ Component: item.iconProps }}
                          size={'small'}
                          onClick={event => {
                            event.stopPropagation();
                            item.onClick?.();
                          }}
                        />
                      </div>
                    );
                  })}
                  {expandable && expandIconPosition === ExpandIconPosition.RIGHT && (
                    <span className={classNames('navigation-item__actions__expand_mobile', childOpen && 'opened')}>
                      {expandIconProps.Component && (
                        <expandIconProps.Component size={expandIconProps.size || 'small'} className={'mr-12'} />
                      )}
                    </span>
                  )}
                </div>
              )}
            </div>
          ) : null}
          <>
            {displayHeader}
            {displayNavigationItem()}
            {type === NavigationItemTypes.USER && iconName && isOpen && (
              <IconDynamicComponent componentName={iconName} />
            )}
          </>
          {rightContent ? <div className={'navigation-item__right-content'}>{rightContent}</div> : null}
        </div>
        {children && <div className={classNames('navigation-item__child', childOpen && 'active')}>{children}</div>}
      </div>
    </>
  );
};
