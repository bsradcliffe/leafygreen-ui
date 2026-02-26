import { Theme } from '@leafygreen-ui/lib';

import { Size } from './IconButton.types';

function cn(
  ...classes: Array<string | false | undefined | null>
): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Pre-computed transparent color values (replaces polished transparentize)
 * transparentize(0.9, palette.gray.dark2) = rgba(61, 79, 88, 0.1)
 * transparentize(0.9, palette.gray.light2) = rgba(232, 237, 235, 0.1)
 */
const grayDark2_10 = 'rgba(61,79,88,0.1)';
const grayLight2_10 = 'rgba(232,237,235,0.1)';

// palette.gray.dark1 = #5C6C75
// palette.gray.light1 = #C1C7C6
// palette.gray.light3 = #F9FBFA
// palette.black = #001E2B
// focusRing.light.default = 0 0 0 2px #FFFFFF, 0 0 0 4px #016BF8
// focusRing.dark.default = 0 0 0 2px #001E2B, 0 0 0 4px #0498EC
const focusRingLightDefault = '0_0_0_2px_#FFFFFF,0_0_0_4px_#016BF8';
const focusRingDarkDefault = '0_0_0_2px_#001E2B,0_0_0_4px_#0498EC';

export const removeButtonStyle = [
  'border-none',
  '[appearance:unset]',
  '[-webkit-appearance:unset]',
  'p-0',
].join(' ');

export const baseIconButtonStyle = [
  'inline-block',
  'rounded-full',
  'relative',
  'cursor-pointer',
  'shrink-0',
  '[transition:150ms_ease-in-out]',
  '[transition-property:color,box-shadow]',
  // Safari-compatible transparent background
  'bg-[rgba(255,255,255,0)]',
  // Pseudo-element ::before for hover background
  "before:content-['']",
  'before:[transition:150ms_all_ease-in-out]',
  'before:absolute',
  'before:inset-0',
  'before:rounded-full',
  'before:scale-[0.8]',
  // Scale up on interactions
  'active:before:scale-100',
  'hover:before:scale-100',
  'focus:before:scale-100',
  '[&[data-hover=true]]:before:scale-100',
  '[&[data-focus=true]]:before:scale-100',
  // Remove outline on focus
  'focus:outline-none',
].join(' ');

export const iconButtonSizes: Record<Size, string> = {
  [Size.Default]: 'h-[28px] w-[28px]',
  [Size.Large]: 'h-[36px] w-[36px]',
  [Size.XLarge]: 'h-[42px] w-[42px]',
};

export const iconButtonMode: Record<Theme, string> = {
  [Theme.Light]: [
    'text-[#5C6C75]',
    // hover/active
    'active:text-[#001E2B]',
    'hover:text-[#001E2B]',
    '[&[data-hover=true]]:text-[#001E2B]',
    `active:before:bg-[${grayDark2_10}]`,
    `hover:before:bg-[${grayDark2_10}]`,
    `[&[data-hover=true]]:before:bg-[${grayDark2_10}]`,
  ].join(' '),
  [Theme.Dark]: [
    'text-[#C1C7C6]',
    // hover/active
    'active:text-[#F9FBFA]',
    'hover:text-[#F9FBFA]',
    '[&[data-hover=true]]:text-[#F9FBFA]',
    `active:before:bg-[${grayLight2_10}]`,
    `hover:before:bg-[${grayLight2_10}]`,
    `[&[data-hover=true]]:before:bg-[${grayLight2_10}]`,
  ].join(' '),
};

export const focusStyle: Record<Theme, string> = {
  [Theme.Light]: [
    'focus-visible:text-[#001E2B]',
    `focus-visible:shadow-[${focusRingLightDefault}]`,
    `focus-visible:before:bg-[${grayDark2_10}]`,
    '[&[data-focus=true]]:text-[#001E2B]',
    `[&[data-focus=true]]:shadow-[${focusRingLightDefault}]`,
    `[&[data-focus=true]]:before:bg-[${grayDark2_10}]`,
  ].join(' '),
  [Theme.Dark]: [
    'focus-visible:text-[#F9FBFA]',
    `focus-visible:shadow-[${focusRingDarkDefault}]`,
    `focus-visible:before:bg-[${grayLight2_10}]`,
    '[&[data-focus=true]]:text-[#F9FBFA]',
    `[&[data-focus=true]]:shadow-[${focusRingDarkDefault}]`,
    `[&[data-focus=true]]:before:bg-[${grayLight2_10}]`,
  ].join(' '),
} as const;

export const disabledStyle: Record<Theme, string> = {
  [Theme.Light]: [
    'cursor-not-allowed',
    'text-[#C1C7C6]',
    'bg-[rgba(255,255,255,0)]',
    // Override hover/active/focus colors
    'active:text-[#C1C7C6]',
    'hover:text-[#C1C7C6]',
    '[&[data-hover=true]]:text-[#C1C7C6]',
    'active:before:bg-[rgba(255,255,255,0)]',
    'hover:before:bg-[rgba(255,255,255,0)]',
    '[&[data-hover=true]]:before:bg-[rgba(255,255,255,0)]',
    'focus:text-[#C1C7C6]',
    '[&[data-focus=true]]:text-[#C1C7C6]',
    'focus:before:bg-[rgba(255,255,255,0)]',
    '[&[data-focus=true]]:before:bg-[rgba(255,255,255,0)]',
  ].join(' '),
  [Theme.Dark]: [
    'cursor-not-allowed',
    'text-[#5C6C75]',
    'bg-[rgba(255,255,255,0)]',
    // Override hover/active/focus colors
    'active:text-[#5C6C75]',
    'hover:text-[#5C6C75]',
    '[&[data-hover=true]]:text-[#5C6C75]',
    'active:before:bg-[rgba(255,255,255,0)]',
    'hover:before:bg-[rgba(255,255,255,0)]',
    '[&[data-hover=true]]:before:bg-[rgba(255,255,255,0)]',
    'focus:text-[#5C6C75]',
    '[&[data-focus=true]]:text-[#5C6C75]',
    'focus:before:bg-[rgba(255,255,255,0)]',
    '[&[data-focus=true]]:before:bg-[rgba(255,255,255,0)]',
  ].join(' '),
} as const;

export const activeStyle: Record<Theme, string> = {
  [Theme.Light]: cn(
    'text-[#001E2B]',
    `before:bg-[${grayDark2_10}]`,
    'before:scale-100',
  ),
  [Theme.Dark]: cn(
    'text-[#F9FBFA]',
    `before:bg-[${grayLight2_10}]`,
    'before:scale-100',
  ),
} as const;

export const iconStyle = [
  'absolute',
  'inset-0',
  'flex',
  'items-center',
  'justify-center',
].join(' ');
