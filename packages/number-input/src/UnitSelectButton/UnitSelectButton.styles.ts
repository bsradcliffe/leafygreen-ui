import { Theme } from '@leafygreen-ui/lib';
import { Size } from '@leafygreen-ui/tokens';

export const wrapperStyles = 'relative';

export const baseStyles = [
  'rounded-tl-none',
  'rounded-bl-none',
].join(' ');

// Light:
//   bg = #F9FBFA (gray.light3)
//   hover/focus-visible bg = #FFFFFF (white)
//   focus: box-shadow inherit
//   focus-visible: focusRing.light.input = 0 0 0 3px #016BF8, border = #FFFFFF (white)
// Dark:
//   bg = #3D4F58 (gray.dark2)
//   hover/focus-visible bg = #5C6C75 (gray.dark1)
//   focus: box-shadow inherit
//   focus-visible: focusRing.dark.input = 0 0 0 3px #0498EC, border = #112733 (gray.dark4)
export const themeStyles: Record<Theme, string> = {
  [Theme.Light]: [
    'bg-[#F9FBFA]',
    'focus-visible:bg-[#FFFFFF]',
    'hover:bg-[#FFFFFF]',
    'focus:shadow-[inherit]',
    'focus-visible:shadow-[0_0_0_3px_#016BF8]',
    'focus-visible:border-[#FFFFFF]',
  ].join(' '),
  [Theme.Dark]: [
    'bg-[#3D4F58]',
    'focus-visible:bg-[#5C6C75]',
    'hover:bg-[#5C6C75]',
    'focus:shadow-[inherit]',
    'focus-visible:shadow-[0_0_0_3px_#0498EC]',
    'focus-visible:border-[#112733]',
  ].join(' '),
};

// spacing[100] = 4, spacing[200] = 8, spacing[300] = 12
export const sizeStyles: Record<Size, string> = {
  [Size.XSmall]: '[&>*:last-child]:py-0 [&>*:last-child]:pr-[4px] [&>*:last-child]:pl-[8px]',
  [Size.Small]: '[&>*:last-child]:py-0 [&>*:last-child]:pr-[4px] [&>*:last-child]:pl-[8px]',
  [Size.Default]: '[&>*:last-child]:py-0 [&>*:last-child]:pr-[8px] [&>*:last-child]:pl-[12px]',
  [Size.Large]: '[&>*:last-child]:py-0 [&>*:last-child]:pr-[8px] [&>*:last-child]:pl-[12px]',
};

// Light disabled:
//   hover: box-shadow unset
//   focus: focusRing.light.input = 0 0 0 3px #016BF8, border = #FFFFFF (white)
//   focus-visible/hover bg = #E8EDEB (gray.light2)
// Dark disabled:
//   hover: box-shadow unset, bg = #1C2D38 (gray.dark3), border = #3D4F58 (gray.dark2)
//   focus: bg = #112733 (gray.dark4), focusRing.dark.input = 0 0 0 3px #0498EC, border = #112733 (gray.dark4)
export const themeDisabledStyles: Record<Theme, string> = {
  [Theme.Light]: [
    'hover:shadow-none',
    'focus:shadow-[0_0_0_3px_#016BF8]',
    'focus:border-[#FFFFFF]',
    'focus-visible:bg-[#E8EDEB]',
    'hover:bg-[#E8EDEB]',
  ].join(' '),
  [Theme.Dark]: [
    'hover:shadow-none',
    'hover:bg-[#1C2D38]',
    'hover:border-[#3D4F58]',
    'focus:bg-[#112733]',
    'focus:shadow-[0_0_0_3px_#0498EC]',
    'focus:border-[#112733]',
  ].join(' '),
};
