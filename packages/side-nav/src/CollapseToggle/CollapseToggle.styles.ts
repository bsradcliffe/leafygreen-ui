import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';

export const iconClassName = createUniqueClassName('collapse-menu');

/**
 * Pre-computed transparent shadow values (replaces polished transparentize)
 * transparentize(0.9, palette.black) = rgba(0, 30, 43, 0.1)
 * transparentize(0.8, palette.black) = rgba(0, 30, 43, 0.2)
 */

export const buttonBaseStyles = [
  'absolute',
  'bottom-[16px]',
  'right-[-16px]',
  'w-[32px]',
  'h-[32px]',
  'flex',
  'items-center',
  'justify-center',
  'rounded-full',
  'cursor-pointer',
  'transition-[color,border-color,box-shadow]',
  'duration-[var(--transition-duration-default)]',
  'ease-in-out',
  'focus:outline-none',
  'focus-visible:border-transparent',
].join(' ');

export const buttonThemeStyles: Record<Theme, string> = {
  [Theme.Light]: [
    'text-[#00684A]',
    'shadow-[0_3px_4px_rgba(0,30,43,0.1)]',
    'bg-white',
    'border',
    'border-solid',
    'border-[#E8EDEB]',
    'hover:bg-[#F9FBFA]',
    'hover:shadow-[0_2px_2px_rgba(0,30,43,0.2)]',
    'focus-visible:text-[#016BF8]',
    'focus-visible:shadow-[0_0_0_2px_#FFFFFF,0_0_0_4px_#016BF8]',
    'focus-visible:bg-[#F9FBFA]',
  ].join(' '),
  [Theme.Dark]: [
    'text-[#C1C7C6]',
    'shadow-[0_3px_4px_rgba(0,30,43,0.1)]',
    'bg-[#112733]',
    'border',
    'border-solid',
    'border-[#3D4F58]',
    'hover:bg-[#3D4F58]',
    'hover:shadow-[0_2px_2px_rgba(0,30,43,0.2)]',
    'focus-visible:text-[#C3E7FE]',
    'focus-visible:shadow-[0_0_0_2px_#001E2B,0_0_0_4px_#0498EC]',
    'focus-visible:bg-[#3D4F58]',
  ].join(' '),
};

export const buttonCollapsedStyles = '';
// Note: The original hover effect on .iconClassName (translate3d) is handled
// via group-hover in the component

export const iconWrapper = [
  'transition-transform',
  'duration-[80ms]',
  'ease-in-out',
  'inline-block',
  'h-[16px]',
  'motion-reduce:[transition-property:none]',
].join(' ');

export const keyboardShortcut = [
  'px-[3px]',
  'pb-[2px]',
  'pl-[2px]',
  'leading-[1em]',
  'ml-[8px]',
].join(' ');
