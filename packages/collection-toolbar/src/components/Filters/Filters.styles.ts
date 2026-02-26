import { breakpoints, spacing } from '@leafygreen-ui/tokens';

import { cn } from '../../cn';
import { Variant } from '../../shared.types';

export const baseStyles = [
  'flex-[100%]',
  'flex',
  'flex-row',
  'flex-wrap',
  'items-end',
  `gap-[${spacing[200]}px]`,
].join(' ');

const compactStyles = [
  'flex-1',
  `[@media_only_screen_and_(max-width:${breakpoints.Tablet}px)]:flex-[100%]`,
].join(' ');

export const getFiltersStyles = ({
  className,
  variant,
}: {
  className?: string;
  variant?: Variant;
}) =>
  cn(
    baseStyles,
    {
      [compactStyles]: variant === Variant.Compact,
    },
    className,
  );
