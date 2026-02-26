import { CSSProperties } from 'react';

import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import { color, spacing } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

export const canvasHeaderClassname = createUniqueClassName('canvas-header');

export const canvasHeaderBaseStyles = [
  'flex',
  'flex-col',
  `gap-[${spacing[100]}px]`,
  `my-[${spacing[400]}px]`,
].join(' ');

export const titleWrapperStyles = [
  'flex',
  'items-center',
  `gap-[${spacing[300]}px]`,
].join(' ');

export const getTitleStyles = (theme: Theme): { className: string; style: CSSProperties } => ({
  className: cn(
    'overflow-hidden',
    'whitespace-nowrap',
    'text-ellipsis',
  ),
  style: {
    color: color[theme].text.primary?.default,
  },
});

export const backLinkStyles = 'flex';

export const actionsStyles = [
  'flex',
  'flex-nowrap',
  'shrink-0',
  `gap-[${spacing[200]}px]`,
  'justify-end',
  'grow',
  `ps-[${spacing[300]}px]`,
  '[&_button]:whitespace-nowrap',
].join(' ');

export const badgesStyles = [
  'flex',
  'flex-nowrap',
  `gap-[${spacing[200]}px]`,
  'shrink-0',
  'relative',
  'top-[3px]',
].join(' ');
