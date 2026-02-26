import { CSSProperties } from 'react';

import { Theme } from '@leafygreen-ui/lib';
import {
  borderRadius,
  color,
  fontWeights,
  spacing,
  typeScales,
} from '@leafygreen-ui/tokens';

import { cn } from '../../cn';
import { transitionDurations } from '../Accordion.styles';

const BORDER_OVERFLOW_SPACING = spacing[150];
export const HORIZONTAL_SPACING = spacing[400];
export const VERTICAL_SPACING = spacing[200];

const baseStyles = [
  '[all:unset]',
  'cursor-pointer',
  `rounded-[${borderRadius[150]}px]`,
  `py-[${VERTICAL_SPACING}px]`,
  `px-[${spacing[400]}px]`,
  `text-[${typeScales.body2.fontSize}px]`,
  `leading-[${typeScales.body2.lineHeight}px]`,
  `[transition-property:background-color,border-color,color,font-size,font-weight]`,
  `[transition-duration:${transitionDurations.focusOrHover}ms]`,
  '[transition-timing-function:ease-out]',
].join(' ');

const expandedStyles = [
  'cursor-default',
  `text-[${typeScales.large.fontSize}px]`,
  `font-[${fontWeights.bold}]`,
].join(' ');

export const getStyles = (
  theme: Theme,
  isExpanded: boolean,
  className?: string,
): { className: string; style: CSSProperties } => {
  return {
    className: cn(
      baseStyles,
      {
        [expandedStyles]: isExpanded,
      },
      className,
    ),
    style: {
      margin: `0 -${BORDER_OVERFLOW_SPACING}px`,
      borderColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: `0 ${BORDER_OVERFLOW_SPACING}px`,
      color: color[theme].text.primary.default,
    } as CSSProperties,
  };
};

export const getHoverStyle = (theme: Theme, isExpanded: boolean): CSSProperties => {
  if (isExpanded) {
    return {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    };
  }
  return {
    backgroundColor: color[theme].background.secondary.hover,
    borderColor: color[theme].border.secondary.hover,
  };
};

export const getFocusVisibleStyle = (theme: Theme): CSSProperties => ({
  backgroundColor: color[theme].background.info.focus,
  borderColor: color[theme].background.info.focus,
  color: color[theme].text.primary.focus,
});
