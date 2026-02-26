import { Theme } from '@leafygreen-ui/lib';

export const collapsibleBaseStyle = [
  'bg-transparent',
  'border-none',
  'm-0',
  'transition-[border-color,background-color,color]',
  'duration-[var(--transition-duration-faster)]',
  'ease-in-out',
  'cursor-pointer',
  'focus:outline-none',
].join(' ');

export const collapsibleThemeStyle: Record<Theme, string> = {
  [Theme.Light]: [
    'border-b',
    'border-b-[#E8EDEB]',
    'hover:bg-[#E8EDEB]',
    'hover:border-[#00A35C]',
  ].join(' '),
  [Theme.Dark]: [
    'border-b',
    'border-b-[#5C6C75]',
    'hover:bg-[#3D4F58]',
    'hover:border-[#00ED64]',
  ].join(' '),
};

export const collapsibleFocusThemeStyle: Record<Theme, string> = {
  [Theme.Light]: [
    'focus:text-[#083C90]',
    'focus:border-[#016BF8]',
    'focus:bg-[#E1F7FF]',
    'focus:[&_svg]:text-[#016BF8]',
  ].join(' '),
  [Theme.Dark]: [
    'focus:text-[#E1F7FF]',
    'focus:border-[#0498EC]',
    'focus:bg-[#0C2657]',
    'focus:[&_svg]:text-[#0498EC]',
  ].join(' '),
};

export const expandIconStyle = [
  'transition-all',
  'duration-[var(--transition-duration-default)]',
  'ease-in-out',
  'ml-[8px]',
  'motion-reduce:transition-none',
].join(' ');

export const openExpandIconStyle = 'rotate-90';

export const collapsibleGroupBaseStyles = [
  'max-h-0',
  'overflow-hidden',
  'opacity-100',
  'transition-[opacity,max-height]',
  'duration-[var(--transition-duration-default)]',
  'ease-in-out',
  'motion-reduce:[transition-property:opacity]',
].join(' ');

export const transitionStyles: Record<string, string | undefined> = {
  entering: 'opacity-0',
  entered: '',
  exiting: 'opacity-0',
  exited: 'opacity-0',
  unmounted: undefined,
};

export const ulStyles = [
  'transition-opacity',
  'duration-[var(--transition-duration-default)]',
  'ease-in-out',
  'opacity-0',
].join(' ');

export const ulTransitionStyles = 'opacity-100';
