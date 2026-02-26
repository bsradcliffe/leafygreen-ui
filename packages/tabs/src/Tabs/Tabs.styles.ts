import type { CSSProperties } from 'react';

import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';

import { cn } from '../cn';

export const tabContainerClassName = createUniqueClassName('tab-container');
export const tabListElementClassName = createUniqueClassName('tab-list');
export const inlineChildrenContainerClassName = createUniqueClassName(
  'tabs-inline_children',
);
export const tabPanelsElementClassName = createUniqueClassName('tab-panels');

/**
 * Border color values for the tab container bottom border.
 * Light: gray.light2, Dark: gray.dark2
 */
const tabContainerBorderColor: Record<Theme, string> = {
  [Theme.Light]: '#E8EDEB',
  [Theme.Dark]: '#3D4F58',
};

const baseTabContainerStyles = [
  'flex',
  'items-stretch',
  'justify-between',
].join(' ');

export const getTabContainerStyles = (theme: Theme) =>
  cn(
    baseTabContainerStyles,
    tabContainerClassName,
  );

/**
 * Inline style for the gradient border, since it requires a dynamic color token.
 */
export const getTabContainerInlineStyle = (
  theme: Theme,
): CSSProperties => ({
  background: `linear-gradient(0deg, ${tabContainerBorderColor[theme]} 1px, rgb(255 255 255 / 0%) 1px)`,
});

const baseTabListStyles = [
  'list-none',
  'p-0',
  'flex',
  'w-full',
  'overflow-x-auto',
  // Hide scrollbar
  'scrollbar-none',
  '[&::-webkit-scrollbar]:hidden',
  '[-ms-overflow-style:none]',
].join(' ');

export const tabListStyles = cn(baseTabListStyles, tabListElementClassName);

const baseInlineChildrenContainerStyles = [
  'flex',
  'items-center',
  'gap-[8px]',
].join(' ');

export const inlineChildrenContainerStyles = cn(
  baseInlineChildrenContainerStyles,
  inlineChildrenContainerClassName,
);
