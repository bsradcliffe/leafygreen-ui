import React from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import {
  getSkeletonBaseStyles,
  sizeStyles,
  themeStyles,
} from './Skeleton.styles';
import { Size } from './Skeleton.types';
import { SkeletonProps } from '.';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

export function Skeleton({
  enableAnimations = true,
  size = Size.Default,
  darkMode,
  className,
  ...rest
}: SkeletonProps) {
  const { theme } = useDarkMode(darkMode);
  return (
    <div
      className={cn(
        getSkeletonBaseStyles({ enableAnimations }),
        sizeStyles[size],
        themeStyles[theme],
        className,
      )}
      aria-hidden
      {...rest}
    />
  );
}

Skeleton.displayName = 'Skeleton';
