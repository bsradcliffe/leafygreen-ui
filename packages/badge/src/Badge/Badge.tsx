import React from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import { badgeVariants, baseStyle } from './Badge.styles';
import { BadgeProps, Variant } from './Badge.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Badges can be used to highlight information or the status of something.
 */
function Badge({
  children,
  variant = Variant.LightGray,
  className,
  darkMode: darkModeProp,
  ...rest
}: BadgeProps) {
  const { theme } = useDarkMode(darkModeProp);
  return (
    <div
      {...rest}
      className={cn(baseStyle, badgeVariants[theme][variant], className)}
    >
      {children}
    </div>
  );
}

Badge.displayName = 'Badge';

export default Badge;
