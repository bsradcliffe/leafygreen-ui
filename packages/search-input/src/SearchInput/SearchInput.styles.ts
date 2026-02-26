import { Theme } from '@leafygreen-ui/lib';
import { Size } from '@leafygreen-ui/tokens';

/**
 * Resolved token values:
 *
 * fontFamilies.default = 'Euclid Circular A', 'Helvetica Neue', Helvetica, Arial, sans-serif
 * fontWeights.regular = 400
 * transitionDuration.default = 150ms
 *
 * typeScales.body1.fontSize = 13px, lineHeight = 20px
 * typeScales.large.fontSize = 18px, lineHeight = 24px
 *
 * Palette:
 * palette.white = #FFFFFF
 * palette.black = #001E2B
 * palette.gray.dark4 = #112733
 * palette.gray.dark2 = #3D4F58
 * palette.gray.dark1 = #5C6C75
 * palette.gray.base = #889397
 * palette.gray.light1 = #C1C7C6
 * palette.gray.light2 = #E8EDEB
 * palette.gray.light3 = #F9FBFA
 *
 * focusRing.light.input = 0 0 0 3px #016BF8
 * focusRing.dark.input = 0 0 0 3px #0498EC
 * hoverRing.light.gray = 0 0 0 3px #E8EDEB
 * hoverRing.dark.gray = 0 0 0 3px #3D4F58
 */

/**
 * Adds an inset box shadow to hide the UA background styles for autofilled inputs
 */
const autofillShadowOverride = (color: string) => `0_0_0_100px_${color}_inset`;

export const formStyle = 'outline-none';

export const inputWrapperStyle = [
  'relative',
  'grid',
  'grid-flow-col',
  'items-center',
  'justify-items-center',
  'border',
  'border-solid',
  'rounded-[6px]',
  'z-0',
  '[transition:150ms_ease-in-out]',
  '[transition-property:border-color,box-shadow]',
].join(' ');

export const inputWrapperSizeStyle: Record<Size, string> = {
  [Size.XSmall]: 'text-[13px] leading-[20px] h-[22px] grid-cols-[28px_1fr_36px]',
  [Size.Small]: 'text-[13px] leading-[20px] h-[28px] grid-cols-[32px_1fr_36px]',
  [Size.Default]: 'text-[13px] leading-[20px] h-[36px] grid-cols-[36px_1fr_36px]',
  [Size.Large]: 'text-[18px] leading-[24px] h-[48px] grid-cols-[36px_1fr_44px]',
};

export const inputWrapperThemeStyle: Record<Theme, string> = {
  [Theme.Light]: 'text-[#001E2B] bg-[#FFFFFF] border-[#889397]',
  [Theme.Dark]: 'text-[#E8EDEB] bg-[#112733] border-[#889397]',
};

export const inputWrapperInteractiveStyles: Record<Theme, string> = {
  [Theme.Light]: [
    'hover:not-disabled:not-focus-within:shadow-[0_0_0_3px_#E8EDEB]',
    'active:not-disabled:not-focus-within:shadow-[0_0_0_3px_#E8EDEB]',
  ].join(' '),
  [Theme.Dark]: [
    'hover:not-disabled:not-focus-within:shadow-[0_0_0_3px_#3D4F58]',
    'active:not-disabled:not-focus-within:shadow-[0_0_0_3px_#3D4F58]',
  ].join(' '),
};

export const inputWrapperFocusStyles: Record<Theme, string> = {
  [Theme.Light]: 'not-disabled:focus-within:shadow-[0_0_0_3px_#016BF8] not-disabled:focus-within:border-[#FFFFFF]',
  [Theme.Dark]: 'not-disabled:focus-within:shadow-[0_0_0_3px_#0498EC] not-disabled:focus-within:border-[#112733]',
};

export const inputWrapperDisabledStyle: Record<Theme, string> = {
  [Theme.Light]: 'cursor-not-allowed text-[#889397] bg-[#E8EDEB] border-[#C1C7C6]',
  [Theme.Dark]: 'cursor-not-allowed text-[#3D4F58] bg-[#1C2D38] border-[#3D4F58]',
};

export const baseInputStyle = [
  'text-[inherit]',
  'leading-[inherit]',
  'text-inherit',
  'bg-inherit',
  "font-[family-name:'Euclid_Circular_A','Helvetica_Neue',Helvetica,Arial,sans-serif]",
  'w-full',
  'h-[1.5em]',
  'font-normal',
  'z-[1]',
  'outline-none',
  'border-none',
  'p-0',
  // disabled via aria
  "[&[aria-disabled='true']]:cursor-not-allowed",
  "[&[aria-disabled='true']]:hover:shadow-none",
  "[&[aria-disabled='true']]:active:shadow-none",
  // placeholder
  'placeholder:text-[inherit]',
  'placeholder:leading-[inherit]',
  // Hide MS clear/reveal buttons
  '[&::-ms-clear]:hidden',
  '[&::-ms-clear]:w-0',
  '[&::-ms-clear]:h-0',
  '[&::-ms-reveal]:hidden',
  '[&::-ms-reveal]:w-0',
  '[&::-ms-reveal]:h-0',
  // Hide webkit search decorations
  '[&::-webkit-search-decoration]:hidden',
  '[&::-webkit-search-cancel-button]:hidden',
  '[&::-webkit-search-results-button]:hidden',
  '[&::-webkit-search-results-decoration]:hidden',
].join(' ');

export const inputThemeStyle: Record<Theme, string> = {
  [Theme.Light]: [
    // placeholder
    'placeholder:text-[#889397]',
    'placeholder:font-normal',
    // disabled placeholder
    "[&[aria-disabled='true']]:placeholder:text-[#889397]",
  ].join(' '),
  [Theme.Dark]: [
    // placeholder
    'placeholder:text-[#5C6C75]',
    'placeholder:font-normal',
    // disabled placeholder
    "[&[aria-disabled='true']]:placeholder:text-[#5C6C75]",
  ].join(' '),
};

export const searchIconThemeStyle: Record<Theme, string> = {
  [Theme.Light]: 'text-[#5C6C75]',
  [Theme.Dark]: 'text-[#C1C7C6]',
};

export const searchIconSizeStyle: Record<Size, string> = {
  [Size.XSmall]: 'ml-[2px]',
  [Size.Small]: 'ml-0',
  [Size.Default]: 'ml-[8px]',
  [Size.Large]: 'ml-[8px]',
};

export const searchIconDisabledStyle: Record<Theme, string> = {
  [Theme.Light]: 'text-[#889397]',
  [Theme.Dark]: 'text-[#5C6C75]',
};

export const clearButtonSizeStyle: Record<Size, string> = {
  [Size.XSmall]: 'h-[22px] w-[22px]',
  [Size.Small]: 'h-[28px] w-[28px]',
  [Size.Default]: 'h-[28px] w-[28px]',
  [Size.Large]: 'h-[28px] w-[28px]',
};
