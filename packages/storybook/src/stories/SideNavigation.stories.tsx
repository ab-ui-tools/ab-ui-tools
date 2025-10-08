import type { StoryFn } from '@storybook/react';
import type { TSideNavigationPropTypes } from '@ab.uitools/ui-library/components/SideNavigation/types';

import React, { ReactElement, useEffect, useState } from 'react';
import { isMobile } from '@ab.uitools/ui-library/utils/helpers';
import { useSideNavigationControls } from '@ab.uitools/ui-library/hooks/useSideNavigation';
import { Text } from '@ab.uitools/ui-library/components/Text';
import IconWallet from '@ab.uitools/ui-library/components/SVGIcons/IconWallet';
import IconSavings from '@ab.uitools/ui-library/components/SVGIcons/IconSavings';
import IconNavigation from '@ab.uitools/ui-library/components/SVGIcons/IconNavigation';
import IconMore from '@ab.uitools/ui-library/components/SVGIcons/IconMore';
import IconLockClosed from '@ab.uitools/ui-library/components/SVGIcons/IconLockClosed';
import IconHome from '@ab.uitools/ui-library/components/SVGIcons/IconHome';
import IconDocumentFilled from '@ab.uitools/ui-library/components/SVGIcons/IconDocumentFilled';
import IconDocument from '@ab.uitools/ui-library/components/SVGIcons/IconDocument';
import { NavigationItemTypes } from '@ab.uitools/ui-library/components/SideNavigation/NavigationItem/types';
import { Block } from '@ab.uitools/ui-library/components/SideNavigation/Block';
import { NavigationItem, SideNavigation as _SideNavigation } from '@ab.uitools/ui-library/components/SideNavigation';
import { ButtonIcon } from '@ab.uitools/ui-library/components/ButtonIcon';
import { Badge } from '@ab.uitools/ui-library/components/Badge';

import logoImg from '../assets/images/logo.svg';
import logoClosedImg from '../assets/images/logo-closed.svg';
// @ts-ignore
import avatar from '../assets/images/avatar.jpg';

export default {
  title: 'Side Navigation',
  component: _SideNavigation,
  argTypes: {},
};
const Template: StoryFn<TSideNavigationPropTypes> = args => {
  const { onOpen, isOpen, onClose, onMouseEnter, onMouseLeave, onPin, isPined } = useSideNavigationControls();

  const [isNavigationItemOpen, setNavigationItemOpen] = useState(false);

  useEffect(() => {
    if (!isMobile()) {
      onPin?.();
      onOpen?.(true);
    }
  }, []);

  return (
    <div>
      {isMobile() ? <ButtonIcon iconProps={{ Component: IconNavigation }} onClick={() => onOpen?.(true)} /> : null}

      <_SideNavigation
        {...args}
        logo={logoImg}
        isOpen={isOpen}
        logoClosed={logoClosedImg}
        onClose={onClose}
        onOpen={onOpen}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onPin={onPin}
        isPined={isPined}
      >
        <main className={'scrollbar scrollbar--vertical'}>
          <Block isOpen={isOpen} label="Finance">
            <>
              <NavigationItem
                As={() => (
                  <a href="/https://ameriabank.am">
                    <IconDocumentFilled />
                    <Text weight={'semibold'}>Accounts</Text>
                  </a>
                )}
                type={NavigationItemTypes.MAIN}
                isOpen={isNavigationItemOpen}
                active
              />
              <NavigationItem
                As={() => (
                  <a href="/https://ameriabank.am">
                    <IconLockClosed />
                    <Text weight={'semibold'}>Test</Text>
                  </a>
                )}
                type={NavigationItemTypes.MAIN}
                isOpen={isNavigationItemOpen}
                showAction={args.showAction}
              />
              <NavigationItem
                As={() => (
                  <a>
                    <IconHome />
                    <Text weight={'semibold'}>Cards</Text>
                  </a>
                )}
                type={NavigationItemTypes.MAIN}
                isOpen={isNavigationItemOpen}
                expandable
                actionsList={[{ iconProps: IconMore }]}
              >
                <>
                  <NavigationItem
                    As={() => (
                      <a href="/https://ameriabank.am">
                        <IconDocument />
                        <Text weight={'semibold'}>Accounts</Text>
                      </a>
                    )}
                    type={NavigationItemTypes.SUB}
                    isOpen={isNavigationItemOpen}
                  />
                  <NavigationItem
                    As={() => (
                      <a href="/https://ameriabank.am">
                        <IconSavings />
                        <Text weight={'semibold'}>Savings</Text>
                      </a>
                    )}
                    type={NavigationItemTypes.SUB}
                    isOpen={isNavigationItemOpen}
                  />
                  <NavigationItem
                    As={() => (
                      <a href="/https://ameriabank.am">
                        <IconWallet />
                        <Text weight={'semibold'}>Overdraft</Text>
                      </a>
                    )}
                    type={NavigationItemTypes.SUB}
                    isOpen={isNavigationItemOpen}
                  />
                </>
              </NavigationItem>
              <NavigationItem
                As={() => (
                  <a href="/https://ameriabank.am">
                    <IconSavings />
                    <Text weight={'semibold'}>Savings</Text>
                  </a>
                )}
                type={NavigationItemTypes.MAIN}
                isOpen={isNavigationItemOpen}
                rightContent={<Badge type={'red'} size={'small'} text={'+999'} />}
              />
            </>
          </Block>
          <Block isOpen={isOpen} label="Finance">
            <>
              <NavigationItem
                As={() => (
                  <a href="/https://ameriabank.am">
                    <IconWallet />
                    <Text weight={'semibold'}>Overdraft</Text>
                  </a>
                )}
                type={NavigationItemTypes.MAIN}
                isOpen={isNavigationItemOpen}
              />
              <NavigationItem
                As={() => (
                  <a href="/https://ameriabank.am">
                    <IconHome />
                    <Text weight={'semibold'}>Mortgage</Text>
                  </a>
                )}
                type={NavigationItemTypes.MAIN}
                isOpen={isNavigationItemOpen}
              />
              <NavigationItem
                As={() => (
                  <a href="/https://ameriabank.am">
                    <IconWallet />
                    <Text weight={'semibold'}>Overdraft</Text>
                  </a>
                )}
                type={NavigationItemTypes.MAIN}
                isOpen={isNavigationItemOpen}
              />

              <NavigationItem
                As={() => (
                  <a href="/https://ameriabank.am">
                    <IconHome />
                    <Text weight={'semibold'}>Mortgage</Text>
                  </a>
                )}
                type={NavigationItemTypes.MAIN}
                isOpen={isNavigationItemOpen}
              />
              <NavigationItem
                As={() => (
                  <a>
                    <IconSavings />
                    <Text weight={'semibold'}>Car Leon</Text>
                  </a>
                )}
                type={NavigationItemTypes.MAIN}
                isOpen={isNavigationItemOpen}
                expandable
                actionsList={[{ iconProps: IconMore }]}
              >
                <>
                  <NavigationItem
                    As={() => (
                      <a href="/https://ameriabank.am">
                        <IconSavings />
                        <Text weight={'semibold'}>Savings</Text>
                      </a>
                    )}
                    type={NavigationItemTypes.SUB}
                    isOpen={isNavigationItemOpen}
                  />
                  <NavigationItem
                    As={() => (
                      <a href="/https://ameriabank.am">
                        <IconDocument />
                        <Text weight={'semibold'}>Accounts</Text>
                      </a>
                    )}
                    type={NavigationItemTypes.SUB}
                    isOpen={isNavigationItemOpen}
                  />
                </>
              </NavigationItem>
            </>
          </Block>
        </main>
        {/*<footer></footer>*/}
      </_SideNavigation>
    </div>
  );
};

export const SideNavigation = Template.bind({});

// @ts-ignore
SideNavigation.args = {};
