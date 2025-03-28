import type { TSideNavigationPropTypes } from 'ab-ui-library/components/SideNavigation/types';
import type { StoryFn } from '@storybook/react';

import React, { ReactElement, useState } from 'react';
import { Text } from 'ab-ui-library/components/Text';
import IconWallet from 'ab-ui-library/components/SVGIcons/IconWallet';
import IconSignOut from 'ab-ui-library/components/SVGIcons/IconSignOut';
import IconSavings from 'ab-ui-library/components/SVGIcons/IconSavings';
import IconLockClosed from 'ab-ui-library/components/SVGIcons/IconLockClosed';
import IconHome from 'ab-ui-library/components/SVGIcons/IconHome';
import IconDocumentFilled from 'ab-ui-library/components/SVGIcons/IconDocumentFilled';
import IconDocument from 'ab-ui-library/components/SVGIcons/IconDocument';
import { NavigationItemTypes } from 'ab-ui-library/components/SideNavigation/NavigationItem/types';
import { Block } from 'ab-ui-library/components/SideNavigation/Block';
import { NavigationItem, SideNavigation as _SideNavigation } from 'ab-ui-library/components/SideNavigation';
import { Image } from 'ab-ui-library/components/Image';
import { Avatar } from 'ab-ui-library/components/Avatar';

// @ts-ignore
import logo from '../assets/images/logo.svg';
// @ts-ignore
import logoClosed from '../assets/images/logo-closed.svg';
// @ts-ignore
import avatar from '../assets/images/avatar.jpg';

export default {
  title: 'Side Navigation',
  component: _SideNavigation,
  argTypes: {},
};

const Template: StoryFn<TSideNavigationPropTypes> = args => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <_SideNavigation {...args} setOpen={setIsOpen} isOpen={isOpen}>
      <header>
        {/*<NavigationItem*/}
        {/*  As={() => (*/}
        {/*    <div>*/}
        {/*      <IconHandOpenHeart />*/}
        {/*      <Text>Welcome</Text>*/}
        {/*    </div>*/}
        {/*  )}*/}
        {/*  type={NavigationItemTypes.MAIN}*/}
        {/*  isOpen={isOpen}*/}
        {/*/>*/}
        <NavigationItem
          As={() => (
            <div>
              <Image imagePath={isOpen ? logo : logoClosed} isBackgroundImage={false} />
            </div>
          )}
          type={NavigationItemTypes.MAIN}
          isOpen={isOpen}
        />
      </header>
      <main>
        <Block isOpen={isOpen} label="Finance">
          <>
            <NavigationItem
              As={() => (
                <a href="/https://ameriabank.am">
                  <IconDocumentFilled />
                  <Text>Accounts</Text>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              active
            />
            <NavigationItem
              As={() => (
                <a href="/https://ameriabank.am">
                  <IconLockClosed />
                  <Text>Test</Text>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              showAction={args.showAction}
            />
            <NavigationItem
              As={() => (
                <a>
                  <IconHome />
                  <Text>Cards</Text>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              expandable
            >
              <>
                <NavigationItem
                  As={() => (
                    <a href="/https://ameriabank.am">
                      <IconDocument />
                      <Text>Accounts</Text>
                    </a>
                  )}
                  type={NavigationItemTypes.SUB}
                  isOpen={isOpen}
                />
                <NavigationItem
                  As={() => (
                    <a href="/https://ameriabank.am">
                      <IconSavings />
                      <Text>Savings</Text>
                    </a>
                  )}
                  type={NavigationItemTypes.SUB}
                  isOpen={isOpen}
                />
                <NavigationItem
                  As={() => (
                    <a href="/https://ameriabank.am">
                      <IconWallet />
                      <Text>Overdraft</Text>
                    </a>
                  )}
                  type={NavigationItemTypes.SUB}
                  isOpen={isOpen}
                />
              </>
            </NavigationItem>
            <NavigationItem
              As={() => (
                <a href="/https://ameriabank.am">
                  <IconSavings />
                  <Text>Savings</Text>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              showBadge
              badgeContent={'888+'}
            />
          </>
        </Block>
        <Block isOpen={isOpen} label="Finance">
          <>
            <NavigationItem
              As={() => (
                <a href="/https://ameriabank.am">
                  <IconWallet />
                  <Text>Overdraft</Text>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
            />
            <NavigationItem
              As={() => (
                <a href="/https://ameriabank.am">
                  <IconHome />
                  <Text>Mortgage</Text>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
            />
            <NavigationItem
              As={() => (
                <a>
                  <IconSavings />
                  <Text>Car Leon</Text>
                </a>
              )}
              type={NavigationItemTypes.MAIN}
              isOpen={isOpen}
              expandable
            >
              <>
                <NavigationItem
                  As={() => (
                    <a href="/https://ameriabank.am">
                      <IconSavings />
                      <Text>Savings</Text>
                    </a>
                  )}
                  type={NavigationItemTypes.SUB}
                  isOpen={isOpen}
                />
                <NavigationItem
                  As={() => (
                    <a href="/https://ameriabank.am">
                      <IconDocument />
                      <Text>Accounts</Text>
                    </a>
                  )}
                  type={NavigationItemTypes.SUB}
                  isOpen={isOpen}
                />
              </>
            </NavigationItem>
          </>
        </Block>
      </main>
      <footer>
        <Block>
          <NavigationItem
            type={NavigationItemTypes.USER}
            isOpen={isOpen}
            expandable
            As={() => (
              <div className={'flexbox align-items--center'}>
                <Avatar imagePath={avatar} size={'xsmall'} />
                {isOpen ? (
                  <Text className={'flexbox align-items--center justify-content--between profile-text'}>
                    <>
                      Zhorzhik Grigoryan
                      <a href="https://ameriabank.am">
                        <IconSignOut />
                      </a>
                    </>
                  </Text>
                ) : null}
              </div>
            )}
          >
            <>
              <NavigationItem
                As={() => (
                  <a href="/">
                    <Text className={'text-truncate'}> Zhorzhik Grigoryan</Text>
                  </a>
                )}
                type={NavigationItemTypes.SUB}
                isOpen={isOpen}
              />
              <NavigationItem
                As={() => (
                  <a href="/https://ameriabank.am">
                    <IconSignOut />
                    <Text>Logout</Text>
                  </a>
                )}
                type={NavigationItemTypes.SUB}
                isOpen={isOpen}
              />
            </>
          </NavigationItem>
          {/*<NavigationItem*/}
          {/*  type={NavigationItemTypes.MAIN}*/}
          {/*  isOpen={isOpen}*/}
          {/*  As={() => (*/}
          {/*    <a href="https://ameriabank.am">*/}
          {/*      <IconSignOut />*/}
          {/*      <Text>Logout</Text>*/}
          {/*    </a>*/}
          {/*  )}*/}
          {/*/>*/}
        </Block>
      </footer>
    </_SideNavigation>
  );
};

export const SideNavigation = Template.bind({});

// @ts-ignore
SideNavigation.args = {};
