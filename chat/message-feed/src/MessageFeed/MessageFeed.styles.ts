import { Theme } from '@leafygreen-ui/lib';
import { addOverflowShadow, Side, spacing } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

const baseWrapperStyles = [
  'max-h-full',
  'w-full',
  'flex',
  'justify-center',
  'relative',
  'overflow-hidden',
].join(' ');

export const getWrapperStyles = ({
  className,
  hasBottomShadow,
  hasTopShadow,
  theme,
}: {
  className?: string;
  hasBottomShadow: boolean;
  hasTopShadow: boolean;
  theme: Theme;
}) =>
  cn(
    baseWrapperStyles,
    {
      [addOverflowShadow({ side: Side.Top, theme, isInside: true })]:
        hasTopShadow,
      [addOverflowShadow({ side: Side.Bottom, theme, isInside: true })]:
        hasBottomShadow,
    },
    className,
  );

export const scrollContainerStyles = [
  'w-full',
  'h-full',
  'overflow-y-scroll',
  'scroll-smooth',
  'relative',
  `px-[${spacing[400]}px]`,
  'py-0',
  'flex',
  'flex-col',
  `gap-[${spacing[400]}px]`,
].join(' ');

// Ensures the intercept element is visible and considered by the browser
export const interceptStyles = 'min-h-px';
