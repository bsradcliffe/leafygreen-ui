import React from 'react';

import { Portal } from '@leafygreen-ui/portal';

import { cn } from '../cn';
import { useSideNavContext } from '../SideNav';

import {
  activeThemeStyle,
  baseStyles,
  themeStyle,
} from './CollapedSideNavItem.styles';
import { CollapsedSideNavItemProps } from './CollapsedSideNavItem.types';

export function CollapsedSideNavItem({
  children,
  active = false,
  className,
}: CollapsedSideNavItemProps) {
  const { portalContainer, theme } = useSideNavContext();

  return (
    <Portal container={portalContainer}>
      <li
        className={cn(
          baseStyles,
          themeStyle[theme],
          {
            [activeThemeStyle[theme]]: active,
          },
          className,
        )}
      >
        {children}
      </li>
    </Portal>
  );
}
