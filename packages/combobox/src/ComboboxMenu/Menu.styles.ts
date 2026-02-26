import { type CSSProperties } from 'react';

import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  boxShadows,
  color,
  fontFamilies,
  spacing,
} from '@leafygreen-ui/tokens';

import { fontSize, lineHeight } from '../ComboboxChip/ComboboxChip.styles';
import { ComboboxSize as Size } from '../types';

export const menuItemPadding: Record<Size, { x: number; y: number }> = {
  [Size.XSmall]: { x: 12, y: 8 },
  [Size.Small]: { x: 12, y: 8 },
  [Size.Default]: { x: 12, y: 8 },
  [Size.Large]: { x: 12, y: 8 },
};

/** Util that returns the height of a menu item (in px) */
export const getMenuItemHeight = (size: Size) => {
  return lineHeight[size] + 2 * menuItemPadding[size].y;
};

/**
 * Menu styles
 */

export const popoverClassName = 'overflow-hidden rounded-[12px] border border-solid';

export const popoverStyle = (width = 384): CSSProperties => ({
  width: `${width}px`,
});

export const popoverThemeStyle: Record<Theme, CSSProperties> = {
  [Theme.Light]: {
    boxShadow: boxShadows[Theme.Light][1],
    borderColor: palette.gray.light2,
  },
  [Theme.Dark]: {
    boxShadow: boxShadows[Theme.Dark][1],
    borderColor: palette.gray.dark2,
  },
};

export const autoWidthStyle: CSSProperties = {
  width: 'max-content',
};

export const menuBaseClassName = 'relative w-full m-0 rounded-[inherit] overflow-y-auto';

export const menuBaseStyle: CSSProperties = {
  padding: `${spacing[2]}px 0`,
  fontFamily: fontFamilies.default,
  scrollBehavior: 'smooth',
};

export const getMenuThemeStyle = (theme: Theme): CSSProperties => ({
  backgroundColor: color[theme].background.primary.default,
});

export const menuListClassName = 'relative m-0 p-0';

export const menuMessageBaseClassName =
  'inline-flex items-center';

export const menuMessageBaseStyle: CSSProperties = {
  fontFamily: 'inherit',
  gap: '8px',
};

export const menuMessageThemeStyle: Record<Theme, CSSProperties> = {
  [Theme.Light]: {
    color: palette.gray.dark3,
  },
  [Theme.Dark]: {
    color: palette.gray.light3,
  },
};

export const menuMessageSizeStyle = (size: Size): CSSProperties => ({
  fontSize: `${fontSize[size]}px`,
  lineHeight: `${lineHeight[size]}px`,
  padding: `${menuItemPadding[size].y}px ${menuItemPadding[size].x}px`,
});

/**
 * Stylesheet for keyframes animation that cannot be expressed inline.
 */
export const menuStyleTag = `
@keyframes lg-combobox-loading-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.lg-combobox-loading-icon {
  animation: lg-combobox-loading-spin 1.5s linear infinite;
}
`;

export const loadingIconClassName = 'lg-combobox-loading-icon';
