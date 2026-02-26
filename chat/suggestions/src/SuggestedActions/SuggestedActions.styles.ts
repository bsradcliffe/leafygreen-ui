import { Theme } from '@leafygreen-ui/lib';
import {
  borderRadius,
  color,
  spacing,
  typeScales,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

export const baseContainerStyles = [
  'w-full',
  'flex',
  'flex-col',
  `gap-[${spacing[400]}px]`,
].join(' ');

export const getContainerStyles = (className?: string) =>
  cn(baseContainerStyles, className);

export const getSuggestedActionsWrapperStyles = (theme: Theme) =>
  [
    `bg-[${color[theme].background.secondary.default}]`,
    'border',
    `border-[${color[theme].border.secondary.default}]`,
    `rounded-[${borderRadius[300]}px]`,
    'w-full',
    `p-[${spacing[300]}px]`,
    'flex',
    'flex-col',
    `gap-[${spacing[200]}px]`,
  ].join(' ');

export const tableStyles = [
  'w-full',
  `gap-[${spacing[200]}px]`,
  `leading-[${typeScales.body1.lineHeight}px]`,
].join(' ');

export const tableHeaderStyles = [
  'text-left',
  `py-[${spacing[50]}px]`,
  'px-0',
].join(' ');

export const tableCellStyles = [
  'text-right',
  `py-[${spacing[50]}px]`,
  'px-0',
].join(' ');
