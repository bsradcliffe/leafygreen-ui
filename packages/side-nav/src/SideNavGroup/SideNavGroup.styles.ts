import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';

import { cn } from '../cn';
import { getIndentLevelStyle } from '../SideNav';

export const buttonClassName = createUniqueClassName('side-nav-group-button');

export const listItemStyle = [
  'flex',
  'flex-col',
  'relative',
].join(' ');
// Note: The original sibling selector `& ~ & > .${buttonClassName}` for padding
// adjustments cannot be expressed in Tailwind. The buttonClassName is still
// exported for identification, and spacing is handled by the base group styles.

export const baseStyle = [
  'relative',
  'flex',
  'items-center',
  'justify-between',
  'mt-0',
  'mb-0',
  'pt-[16px]',
  'px-[16px]',
  'pb-[8px]',
].join(' ');

export const themeStyle: Record<Theme, string> = {
  [Theme.Light]: 'text-[#00684A]',
  [Theme.Dark]: 'text-[#71F6BA]',
};

export const indentedStyle = (indentLevel: number, darkMode: boolean) =>
  cn(
    getIndentLevelStyle(indentLevel, darkMode),
    'pt-[16px] pb-[8px]',
  );
