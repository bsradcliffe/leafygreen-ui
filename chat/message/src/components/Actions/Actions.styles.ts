import { Theme } from '@leafygreen-ui/lib';
import {
  color,
  InteractionState,
  spacing,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../../cn';

/** divider sizes from design specs */
const dividerSizes = {
  height: 24,
  width: 1,
} as const;

const baseContainerStyles = [
  'flex',
  'flex-col',
  `gap-[${spacing[200]}px]`,
].join(' ');

const submittedContainerStyles = 'flex-row items-center';

export const getContainerStyles = ({
  className,
  isSubmitted,
}: {
  className?: string;
  isSubmitted: boolean;
}) =>
  cn(
    baseContainerStyles,
    {
      [submittedContainerStyles]: isSubmitted,
    },
    className,
  );

export const actionBarStyles = [
  'flex',
  'items-center',
  `gap-[${spacing[100]}px]`,
].join(' ');

export const primaryActionsContainerStyles = [
  'flex',
  `gap-[${spacing[100]}px]`,
].join(' ');

export const getDividerStyles = (theme: Theme) =>
  [
    `h-[${dividerSizes.height}px]`,
    `w-[${dividerSizes.width}px]`,
    `bg-[${color[theme].border[Variant.Secondary][InteractionState.Default]}]`,
  ].join(' ');
