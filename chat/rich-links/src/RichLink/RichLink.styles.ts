import { Theme } from '@leafygreen-ui/lib';
import { createUniqueClassName } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';

export const richLinkTextClassName = createUniqueClassName('lg-chat-rich-link');

export const baseStyles = [
  'shadow-none',
  `p-[${spacing[100]}px_${spacing[200]}px]`,
  `rounded-[${spacing[200]}px]`,
  'no-underline',
  'min-h-[initial]',
  'max-w-full',
  'flex',
  'items-center',
  `gap-[${spacing[200]}px]`,

  `[&_.${richLinkTextClassName}]:whitespace-nowrap`,
  `[&_.${richLinkTextClassName}]:overflow-hidden`,
  `[&_.${richLinkTextClassName}]:text-ellipsis`,
].join(' ');

export const themeStyles = {
  [Theme.Dark]: [
    `bg-[${palette.gray.dark4}]`,
    `hover:shadow-[0_0_0_3px_${palette.gray.dark2}]`,
  ].join(' '),
  [Theme.Light]: [
    `bg-[${palette.gray.light3}]`,
    `hover:shadow-[0_0_0_3px_${palette.gray.light2}]`,
  ].join(' '),
};
