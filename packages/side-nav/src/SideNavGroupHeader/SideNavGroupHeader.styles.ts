import { Theme } from '@leafygreen-ui/lib';

export const iconBaseStyles = [
  'inline-flex',
  'items-center',
  'gap-[8px]',
].join(' ');

export const iconCustomStyle = 'inline-flex';

export const iconCustomThemeStyle: Record<Theme, string> = {
  [Theme.Light]: 'text-[#00684A]',
  [Theme.Dark]: 'text-[#71F6BA]',
};

export const overlineStyle = 'text-inherit';
