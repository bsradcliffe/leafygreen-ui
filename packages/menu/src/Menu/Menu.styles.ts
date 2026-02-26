import { Theme } from '@leafygreen-ui/lib';
import { spacing } from '@leafygreen-ui/tokens';

import { cn } from '../cn';
import { menuColor } from '../styles';

import { MenuVariant } from './Menu.types';

export interface MenuStyleArgs {
  theme: Theme;
  variant: MenuVariant;
}

export const DEFAULT_MAX_HEIGHT = 344;
export const DEFAULT_WIDTH = 210;
const DEFAULT_MENU_PADDING = spacing[300]; // 12
const COMPACT_MENU_PADDING = spacing[150]; // 6

/**
 * Box shadow for light mode menu.
 * Equivalent to `boxShadows[Theme.Light][1]`: `0px 2px 4px 1px color-mix(in srgb, #001E2B 15%, transparent)`
 */
const LIGHT_BOX_SHADOW =
  '0px_2px_4px_1px_color-mix(in_srgb,#001E2B_15%,transparent)';

export const getMenuStyles = ({ theme, variant }: MenuStyleArgs) => {
  const padding =
    variant === MenuVariant.Default
      ? DEFAULT_MENU_PADDING
      : COMPACT_MENU_PADDING;

  return cn(
    `w-[${DEFAULT_WIDTH}px]`,
    `max-h-[var(--lg-popover-max_height,${DEFAULT_MAX_HEIGHT})]`,
    `rounded-[${spacing[300]}px]`,
    'overflow-auto',
    `[padding:${padding}px_0]`,
    `bg-[${menuColor[theme].background.default}]`,
    `border`,
    'border-solid',
    `border-[${menuColor[theme].border.default}]`,
    theme === 'light' && `shadow-[${LIGHT_BOX_SHADOW}]`,
  );
};

export const scrollContainerStyle = [
  'overflow-auto',
  '[margin-block-start:0px]',
  '[margin-block-end:0px]',
  '[padding-inline-start:0px]',
  'p-0',
].join(' ');

// TODO: Remove dark-in-light mode styles
// after https://jira.mongodb.org/browse/LG-3974
export const darkInLightModeMenuStyles = [
  'shadow-none',
  'bg-[#001E2B]',
  'border',
  'border-solid',
  'border-[#889397]',
].join(' ');
