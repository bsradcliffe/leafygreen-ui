import { Theme } from '@leafygreen-ui/lib';
import { Size } from '@leafygreen-ui/tokens';

import { wrapperClassName } from '../Input/Input.styles';

// transitionDuration.default = 150ms
export const arrowsBaseStyles = [
  'flex',
  'flex-col',
  'absolute',
  'top-0',
  'h-full',
  'justify-center',
  'transition-[translate]',
  'duration-150',
  'ease-in-out',
].join(' ');

// spacing[200] = 8, spacing[300] = 12, spacing[400] = 16, spacing[600] = 24
export const arrowsSizeStyles: Record<Size, string> = {
  [Size.XSmall]: 'right-[8px] translate-x-[16px]',
  [Size.Small]: 'right-[8px] translate-x-[16px]',
  [Size.Default]: 'right-[12px] translate-x-[24px]',
  [Size.Large]: 'right-[12px] translate-x-[24px]',
};

// .${wrapperClassName}:hover &, .${wrapperClassName}:focus-within &
export const arrowsAnimateStyles = [
  `[.${wrapperClassName}:hover_&]:translate-x-0`,
  `[.${wrapperClassName}:focus-within_&]:translate-x-0`,
].join(' ');

export const arrowDisabledStyles = 'pointer-events-none';

// icon.primary.default: light = #5C6C75, dark = #C1C7C6
// icon.primary.hover: light = #001E2B, dark = #F9FBFA
export const arrowBaseStyles = [
  '[all:unset]',
  'flex',
  'relative',
  'h-[12px]',
  'w-[8px]',
  'hover:cursor-pointer',

  // svg positioning
  '[&_svg]:absolute',
  '[&_svg]:-translate-x-1/2',
  '[&_svg]:-translate-y-1/2',
  '[&_svg]:top-1/2',
  '[&_svg]:left-1/2',
].join(' ');

export const getArrowThemeStyles = (theme: Theme) =>
  theme === Theme.Light
    ? [
        'text-[#5C6C75]',
        'hover:text-[#001E2B]',
        'active:text-[#001E2B]',
      ].join(' ')
    : [
        'text-[#C1C7C6]',
        'hover:text-[#F9FBFA]',
        'active:text-[#F9FBFA]',
      ].join(' ');

export const downArrowRotateStyles = 'rotate-180';
