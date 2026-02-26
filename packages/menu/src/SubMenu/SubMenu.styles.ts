import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import { spacing, transitionDuration } from '@leafygreen-ui/tokens';

import { cn } from '../cn';
import { menuItemContainerStyles } from '../MenuItem/MenuItem.styles';
import { menuColor } from '../styles';
import { getLgIds } from '../utils';

const TRANSITION_DURATION = transitionDuration.default; // 150

const lgIds = getLgIds();

export const subMenuContainerClassName = createUniqueClassName(lgIds.submenu);
export const subMenuToggleClassName = createUniqueClassName(
  lgIds.submenu + '-trigger',
);

export const subMenuContainerStyles = cn(
  menuItemContainerStyles,
  'relative',
);

export const getSubmenuToggleStyles = (theme: Theme, open: boolean) =>
  cn(
    subMenuToggleClassName,
    'absolute',
    `right-[${spacing[300]}px]`,
    'top-1/2',
    '[translate:0_-50%]',
    'rotate-0',
    `text-[${menuColor[theme].icon.default}]`,
    `[transition:rotate_${TRANSITION_DURATION}ms_ease-in-out]`,
    `hover:text-[${menuColor[theme].icon.hover}]`,
    `hover:[&::before]:bg-[${menuColor[theme].background.hover}]`,
    open && 'rotate-180',
  );

export const submenuListStyles = cn(
  'list-none',
  'm-0',
  'p-0',
  'max-h-0',
  'h-max',
  'overflow-hidden',
  `[transition:max-height_${TRANSITION_DURATION}ms_ease-in-out]`,
  'relative',
);
