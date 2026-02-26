import { Theme } from '@leafygreen-ui/lib';

export const baseStyles = [
  'flex',
  'items-center',
  'justify-center',
  'h-[40px]',
].join(' ');

export const themeStyle: Record<Theme, string> = {
  [Theme.Light]: [
    'border-b',
    'border-b-[#E8EDEB]',
    'text-[#00684A]',
    'first-of-type:border-t',
    'first-of-type:border-t-[#E8EDEB]',
  ].join(' '),
  [Theme.Dark]: [
    'border-b',
    'border-b-[#3D4F58]',
    'text-[#C1C7C6]',
    'first-of-type:border-t',
    'first-of-type:border-t-[#3D4F58]',
  ].join(' '),
};

export const activeThemeStyle: Record<Theme, string> = {
  [Theme.Light]: 'bg-[#E3FCF7]',
  [Theme.Dark]: 'text-[#71F6BA] bg-[#023430]',
};
