import React from 'react';

import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  borderRadius,
  color,
  fontFamilies,
  spacing,
  transitionDuration,
} from '@leafygreen-ui/tokens';

import { Size } from './SegmentedControl.types';

export const wrapperStyle = [
  'relative',
  'flex',
  `gap-[${spacing[200]}px]`,
  'items-center',
  'z-0',
].join(' ');

export const wrapperInlineStyle: React.CSSProperties = {
  fontFamily: fontFamilies.default,
};

export const getLabelStyles = (theme: Theme) => ({
  className: 'whitespace-nowrap',
  style: { color: color[theme].text.secondary.default } as React.CSSProperties,
});

export const optionsWrapperStyleSize: Record<Size, Record<string, string>> = {
  [Size.XSmall]: {
    '--indicator-height': '100%',
    '--indicator-radius': `${borderRadius[150]}px`,
    '--outer-radius': `${borderRadius[150]}px`,
    '--segment-gap': `${spacing[25]}px`,
    '--wrapper-padding': `${spacing[0]}px`,
  },
  [Size.Small]: {
    '--indicator-height': 'calc(100% - 2 * var(--wrapper-padding))',
    '--indicator-radius': `${borderRadius[150]}px`,
    '--outer-radius': `${borderRadius[150]}px`,
    '--segment-gap': `${spacing[25]}px`,
    '--wrapper-padding': `${spacing[50]}px`,
  },
  [Size.Default]: {
    '--indicator-height': 'calc(100% - 2 * var(--wrapper-padding))',
    '--indicator-radius': `${borderRadius[150]}px`,
    '--outer-radius': `${borderRadius[200]}px`,
    '--segment-gap': `${spacing[25]}px`,
    '--wrapper-padding': '3px',
  },
  [Size.Large]: {
    '--indicator-height': 'calc(100% - 2 * var(--wrapper-padding))',
    '--indicator-radius': `${borderRadius[150]}px`,
    '--outer-radius': `${borderRadius[200]}px`,
    '--segment-gap': `${spacing[25]}px`,
    '--wrapper-padding': '3px',
  },
};

export const optionsWrapperStyleTheme: Record<Theme, Record<string, string>> = {
  [Theme.Light]: {
    '--background-color': palette.gray.light3,
    '--inner-shadow': `0px 1px 2px rgba(0, 0, 0, 0.3) inset`,
    '--outer-shadow': `0px 1px 1px ${palette.gray.light2}`,
    '--hover-background-color': palette.white,
    '--indicator-background-color': palette.black,
    '--indicator-border-color': palette.black,
  },
  [Theme.Dark]: {
    '--background-color': palette.gray.dark4,
    '--border-color': 'rgba(255, 255, 255, 0)',
    '--inner-shadow': `0px 0px 0px 1px ${palette.gray.dark1} inset`,
    '--outer-shadow': '0px 0px 0px 0px rgba(255, 255, 255, 0)',
    '--hover-background-color': palette.gray.dark3,
    '--indicator-background-color': palette.gray.light2,
    '--indicator-border-color': palette.gray.light2,
  },
};

export const optionsWrapperClassName = [
  'relative',
  'grid',
  'grid-flow-col',
  'items-center',
  'focus:outline-none',
].join(' ');

export const getOptionsWrapperInlineStyle = ({
  theme,
  size,
}: {
  theme: Theme;
  size: Size;
}): React.CSSProperties =>
  ({
    ...optionsWrapperStyleSize[size],
    ...optionsWrapperStyleTheme[theme],
    gridAutoColumns: 'minmax(0, 1fr)',
    gap: 'var(--segment-gap)',
    padding: 'var(--wrapper-padding)',
    borderRadius: 'var(--outer-radius)',
    backgroundColor: 'var(--background-color)',
  }) as React.CSSProperties;

/**
 * Inline style for the ::after pseudo-element of optionsWrapper.
 * This must be applied via a dedicated element instead.
 */
export const frameShadowStyle: React.CSSProperties = {
  content: '""',
  position: 'absolute',
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
  boxShadow: 'var(--inner-shadow), var(--outer-shadow)',
  zIndex: 1,
  pointerEvents: 'none',
  inset: 0,
};

export const selectionIndicatorClassName = 'absolute z-[2]';

export const selectionIndicatorInlineStyle: React.CSSProperties = {
  width: '100%',
  height: 'var(--indicator-height)',
  borderRadius: 'var(--indicator-radius)',
  backgroundColor: 'var(--indicator-background-color)',
  transition: `transform ${transitionDuration.default}ms ease-in-out`,
};

export const hoverIndicatorClassName = 'absolute z-0 opacity-0';

export const hoverIndicatorInlineStyle: React.CSSProperties = {
  height: 'var(--indicator-height)',
  width: '100%',
  borderRadius: 'var(--indicator-radius)',
  backgroundColor: 'var(--hover-background-color)',
  transition: 'opacity 100ms ease-in-out',
};

/**
 * Returns inline styles for the dynamic indicator position.
 */
export const getIndicatorDynamicStyle = (
  index: number | null,
  childCount: number,
): React.CSSProperties => {
  if (index === null) {
    return { width: 0 };
  }

  const widthPct = (1 / childCount) * 100;
  const transformPct = index * 100;

  return {
    opacity: 1,
    width: `calc(${widthPct}% - 2 * var(--wrapper-padding))`,
    transform: `translateX(calc(${transformPct}% + ${2 * index + 1} * var(--wrapper-padding)))`,
  };
};
