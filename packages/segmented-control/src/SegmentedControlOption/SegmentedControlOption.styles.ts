import React from 'react';

import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  focusRing,
  fontFamilies,
  fontWeights,
  spacing,
  transitionDuration,
} from '@leafygreen-ui/tokens';

import { Size } from '../SegmentedControl/SegmentedControl.types';

/**
 * CSS custom property values per theme
 */
const optionThemeVars: Record<Theme, Record<string, string>> = {
  [Theme.Light]: {
    '--base-text-color': palette.gray.dark1,
    '--base-background-color': 'rgba(255, 255, 255, 0)',
    '--base-shadow-color': 'rgba(255, 255, 255, 0)',
    '--hover-text-color': palette.gray.dark3,
    '--active-text-color': palette.white,
    '--disabled-text-color': palette.gray.light1,
    '--divider-background-color': palette.gray.light1,
  },
  [Theme.Dark]: {
    '--base-text-color': palette.gray.light1,
    '--base-background-color': 'rgba(255, 255, 255, 0)',
    '--base-shadow-color': 'rgba(255, 255, 255, 0)',
    '--hover-text-color': palette.gray.light2,
    '--active-text-color': palette.black,
    '--disabled-text-color': palette.gray.dark2,
    '--divider-background-color': palette.gray.dark2,
  },
};

const optionSizeVars: Record<Size, Record<string, string>> = {
  [Size.XSmall]: {
    '--font-size': '12px',
    '--line-height': '16px',
    '--padding-inline': `${spacing[300]}px`,
    '--text-transform': 'uppercase',
    '--font-weight': `${fontWeights.semiBold}`,
    '--divider-height': '12px',
    '--padding-block': '3px',
  },
  [Size.Small]: {
    '--font-size': '13px',
    '--line-height': '20px',
    '--padding-inline': `${spacing[300]}px`,
    '--text-transform': 'none',
    '--font-weight': `${fontWeights.medium}`,
    '--divider-height': '18px',
    '--padding-block': '3px',
  },
  [Size.Default]: {
    '--font-size': '13px',
    '--line-height': '24px',
    '--padding-inline': `${spacing[300]}px`,
    '--text-transform': 'none',
    '--font-weight': `${fontWeights.medium}`,
    '--divider-height': '18px',
    '--padding-block': '3px',
  },
  [Size.Large]: {
    '--font-size': '16px',
    '--line-height': '28px',
    '--padding-inline': `${spacing[300]}px`,
    '--text-transform': 'none',
    '--font-weight': `${fontWeights.medium}`,
    '--divider-height': '20px',
    '--padding-block': `${spacing[100]}px`,
  },
};

export const containerClassName = [
  'relative',
  'flex',
  'w-full',
  'items-center',
  'justify-center',
  'z-[3]',
].join(' ');

export const getContainerInlineStyle = ({
  theme,
  size = 'default',
  baseFontSize = 14,
}: {
  theme: Theme;
  size: Size;
  baseFontSize: 14 | 16;
}): React.CSSProperties =>
  ({
    ...optionThemeVars[theme],
    ...optionSizeVars[size],
    // Update font size according to baseFontSize
    ...(size === 'default' && baseFontSize === 16
      ? { '--font-size': '16px' }
      : {}),
  }) as React.CSSProperties;

/**
 * Divider pseudo-element style.
 * Applied as a dedicated element instead of ::before.
 */
export const getDividerStyle = (): React.CSSProperties => ({
  content: '""',
  position: 'absolute',
  height: 'var(--divider-height)',
  width: `${spacing[25]}px`,
  left: `calc(0px - (var(--segment-gap) + ${spacing[25]}px) / 2)`,
  top: `calc((var(--line-height) + var(--padding-block) * 2 - var(--divider-height)) / 2)`,
  transition: `background-color ${transitionDuration.default}ms ease-in-out`,
  backgroundColor: 'var(--divider-background-color)',
});

export const boxClassName = 'w-full h-full no-underline';

export const buttonClassName = 'flex relative w-full h-full items-center justify-center text-center cursor-pointer outline-none border-none no-underline';

export const getButtonInlineStyle = (): React.CSSProperties => ({
  fontFamily: fontFamilies.default,
  padding: 'var(--padding-block) var(--padding-inline)',
  backgroundColor: 'var(--base-background-color)',
  borderRadius: 'var(--indicator-radius)',
  fontSize: 'var(--font-size)',
  lineHeight: 'var(--line-height)',
  textTransform: 'var(--text-transform, none)' as string,
  fontWeight: 'var(--font-weight)' as string,
  color: 'var(--base-text-color)',
  boxShadow: '0px 1px 2px var(--base-shadow-color)',
  transition: `${transitionDuration.default}ms ease-in-out`,
  transitionProperty: 'color, box-shadow',
  textDecoration: 'none',
});

export const getButtonFocusStyle = (theme: Theme): React.CSSProperties => ({
  boxShadow: focusRing[theme].default,
});

/**
 * Color override for SVG icons in unselected, non-disabled, non-hovered state.
 * Must be applied conditionally in the component.
 */
export const unselectedIconColor = palette.gray.base;

export const labelClassName = 'flex items-center min-w-0';

export const labelInlineStyle: React.CSSProperties = {
  minHeight: 'var(--line-height)',
  gap: 'calc(var(--font-size) / 2)',
};

export const labelTextClassName = 'overflow-hidden whitespace-nowrap text-ellipsis';

export const labelSvgStyle: React.CSSProperties = {
  flexShrink: 0,
};
