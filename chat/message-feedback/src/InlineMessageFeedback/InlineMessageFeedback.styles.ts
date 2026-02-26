import { Theme } from '@leafygreen-ui/lib';
import {
  borderRadius,
  color,
  InteractionState,
  spacing,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

/** match height of the close IconButton which may not render */
const HEADER_CONTAINER_HEIGHT = 28;

export const getFormContainerStyles = (theme: Theme) =>
  [
    'w-full',
    'border',
    `border-[${color[theme].border[Variant.Primary][InteractionState.Default]}]`,
    `rounded-[${borderRadius[200]}px]`,
    'flex',
    'flex-col',
    `gap-x-[${spacing[300]}px]`,
    `gap-y-[${spacing[200]}px]`,
  ].join(' ');

// Alternate padding used to align close IconButton with submit Button
export const headerContainerStyles = [
  `h-[${HEADER_CONTAINER_HEIGHT}px]`,
  `pt-[${spacing[200]}px]`,
  `pr-[${spacing[200]}px]`,
  'pb-0',
  `pl-[${spacing[400]}px]`,
  'flex',
  'items-center',
].join(' ');

export const labelStyles = 'flex-1';

export const bodyContainerStyles = [
  `px-[${spacing[400]}px]`,
  `pb-[${spacing[400]}px]`,
  'pt-0',
  'flex',
  `gap-[${spacing[300]}px]`,
].join(' ');

const baseTextAreaStyles = 'w-full';

export const getTextAreaStyles = (className?: string) =>
  cn(baseTextAreaStyles, className);

export const actionContainerStyles = [
  'flex',
  `gap-[${spacing[200]}px]`,
  'justify-end',
  'items-end',
].join(' ');
