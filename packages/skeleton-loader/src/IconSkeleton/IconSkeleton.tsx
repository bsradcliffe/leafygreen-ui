import React from 'react';

import { Size, sizeMap } from '@leafygreen-ui/icon';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import { getIconSkeletonBaseStyles } from './IconSkeleton.styles';
import { IconSkeletonProps } from './IconSkeleton.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

export function IconSkeleton({
  darkMode: darkModeProp,
  enableAnimations = false,
  size = Size.Default,
  className,
  style,
  ...rest
}: IconSkeletonProps) {
  const { theme } = useDarkMode(darkModeProp);
  const renderedSize = typeof size === 'number' ? size : sizeMap[size];
  return (
    <div
      {...rest}
      aria-hidden
      className={cn(
        getIconSkeletonBaseStyles(theme, enableAnimations),
        className,
      )}
      style={{
        ...style,
        height: `${renderedSize}px`,
        width: `${renderedSize}px`,
      }}
    />
  );
}

IconSkeleton.displayName = 'IconSkeleton';
