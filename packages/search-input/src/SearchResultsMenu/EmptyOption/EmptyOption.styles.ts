import { Theme } from '@leafygreen-ui/lib';

/**
 * spacing[2] = 8px (deprecated, same as spacing[200])
 * spacing[1] = 4px (deprecated, same as spacing[100])
 */

export const emptyOptionStyles = [
  'flex',
  'items-center',
  'gap-[8px]',
  'italic',
  'font-light',
  'py-[4px]',
].join(' ');

export const emptyOptionThemeStyles: Record<Theme, string> = {
  [Theme.Light]: 'text-[#5C6C75]',
  [Theme.Dark]: 'text-[#C1C7C6]',
};
