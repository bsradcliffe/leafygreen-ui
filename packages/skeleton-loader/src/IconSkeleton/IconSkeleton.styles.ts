import { Theme } from '@leafygreen-ui/lib';

import { getSkeletonBaseStyles, themeStyles } from '../Skeleton';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Returns combined class string for the icon skeleton.
 * Size-specific dimensions are applied via inline styles since they depend on a runtime value.
 */
export const getIconSkeletonBaseStyles = (
  theme: Theme,
  enableAnimations = false,
) =>
  cn(
    getSkeletonBaseStyles({ enableAnimations }),
    themeStyles[theme],
    'rounded-full',
  );
