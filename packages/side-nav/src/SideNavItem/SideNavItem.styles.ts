import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';

/**
 * Pre-computed transparent values (replaces polished transparentize)
 * transparentize(100, palette.gray.light3) = fully transparent
 * transparentize(0.1, palette.blue.light3) = rgba(225, 247, 255, 0.9)
 * transparentize(0.1, palette.blue.dark3) = rgba(12, 38, 87, 0.9)
 */

export const sideNavItemClassName = createUniqueClassName('side-nav-item');

export const liStyle = 'w-full list-none';

export const baseStyle = [
  // Unset defaults
  'm-0',
  'appearance-none',
  'bg-none',
  'border-none',
  'cursor-pointer',
  // Layout
  'relative',
  'w-full',
  'min-h-[32px]',
  'px-[16px]',
  'py-[6px]',
  'box-border',
  'flex',
  'items-center',
  // Typography
  'font-[var(--font-family-default)]',
  'font-normal',
  'text-left',
  'no-underline',
  'capitalize',
  // Stateful transitions
  'transition-[background-color]',
  'duration-[var(--transition-duration-faster)]',
  'ease-in-out',
  // Hover
  'hover:bg-[#E8EDEB]',
  'hover:no-underline',
  // Focus
  'focus:no-underline',
  'focus:outline-none',
  // Active wedge pseudo-element setup
  'before:content-[""]',
  'before:absolute',
  'before:bg-transparent',
  'before:left-0',
  'before:top-[6px]',
  'before:bottom-[6px]',
  'before:w-[4px]',
  'before:rounded-r-[6px]',
  'before:transition-transform',
  'before:duration-[var(--transition-duration-default)]',
  'before:ease-in-out',
  'before:scale-y-[0.3]',
].join(' ');

export const themeStyle: Record<Theme, string> = {
  [Theme.Light]: [
    'text-[#001E2B]',
    'bg-transparent',
    'hover:bg-[#E8EDEB]',
  ].join(' '),
  [Theme.Dark]: [
    'text-[#E8EDEB]',
    'bg-transparent',
    'hover:bg-[#1C2D38]',
  ].join(' '),
};

export const activeBaseStyle = [
  'cursor-default',
  'font-semibold',
  'no-underline',
  // The active wedge
  'before:scale-y-100',
].join(' ');

export const activeThemeStyle: Record<Theme, string> = {
  [Theme.Light]: [
    'text-[#00684A]',
    'bg-[#E3FCF7]',
    'hover:bg-[#E3FCF7]',
    'before:bg-[#00A35C]',
  ].join(' '),
  [Theme.Dark]: [
    'text-white',
    'bg-[#023430]',
    'hover:bg-[#023430]',
    'before:bg-[#00ED64]',
  ].join(' '),
};

export const disabledStyle = [
  'bg-transparent',
  'font-normal',
  'cursor-not-allowed',
  'text-[#889397]',
  'hover:text-[#889397]',
  'hover:bg-transparent',
].join(' ');

export const focusedStyle = [
  'relative',
  // The focus wedge
  'focus:no-underline',
  'focus:before:scale-y-100',
].join(' ');

export const focusedThemeStyle: Record<Theme, string> = {
  [Theme.Light]: [
    'focus:text-[#083C90]',
    'focus:bg-[#E1F7FF]',
    'focus:before:bg-[#016BF8]',
  ].join(' '),
  [Theme.Dark]: [
    'focus:text-[#E1F7FF]',
    'focus:bg-[#0C2657]',
    'focus:before:bg-[#0498EC]',
  ].join(' '),
};

export const focusedDisabledStyle = [
  'focus:before:content-[unset]',
].join(' ');

export const focusedDisabledThemeStyle: Record<Theme, string> = {
  [Theme.Light]: [
    'focus:text-[#0498EC]',
    'focus:bg-[rgba(225,247,255,0.9)]',
  ].join(' '),
  [Theme.Dark]: [
    'focus:text-[#0498EC]',
    'focus:bg-[rgba(12,38,87,0.9)]',
  ].join(' '),
};

export const glyphWrapperStyle = [
  'mr-[8px]',
  'inline-flex',
  'items-center',
].join(' ');

export const nestedChildrenStyles = [
  'flex',
  'flex-col',
  'items-start',
].join(' ');

export const nestedUlStyle = [
  'list-none',
  '[padding-inline-start:0]',
].join(' ');
