import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  color,
  InteractionState,
  spacing,
  transitionDuration,
  Variant as TokenVariant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

import { Variant } from './GalleryIndicator.types';

const TRANSITION_DURATION_SLOW = transitionDuration.slower;
const TRANSITION_DURATION_DEFAULT = transitionDuration.default;
const DOT_SIZE = 6;
const ACTIVE_DOT_SIZE = 20;

export const getGalleryIndicatorStyles = ({
  className,
}: {
  className?: string;
}) =>
  cn(
    [
      '[all:unset]',
      'p-0',
      'm-0',
      'list-none',
      'flex',
      `gap-[${spacing[100]}px]`,
    ].join(' '),
    className,
  );

const baseColorSet: Record<Theme, Record<Variant, string>> = {
  [Theme.Light]: {
    [Variant.Default]:
      color[Theme.Light].icon[TokenVariant.Secondary][InteractionState.Default],
    [Variant.BaseGreen]: palette.green.dark2,
  },
  [Theme.Dark]: {
    [Variant.Default]:
      color[Theme.Dark].icon[TokenVariant.Secondary][InteractionState.Default],
    [Variant.BaseGreen]: palette.green.light3,
  },
};

const activeColorSet: Record<Theme, Record<Variant, string>> = {
  [Theme.Light]: {
    [Variant.Default]:
      color[Theme.Light].icon[TokenVariant.Primary][InteractionState.Default],
    [Variant.BaseGreen]: palette.green.base,
  },
  [Theme.Dark]: {
    [Variant.Default]:
      color[Theme.Dark].icon[TokenVariant.Primary][InteractionState.Default],
    [Variant.BaseGreen]: palette.green.base,
  },
};

export const getIndicatorStyles = ({
  theme,
  isActive,
  variant,
}: {
  theme: Theme;
  isActive: boolean;
  variant: Variant;
}): string => {
  const baseColor = baseColorSet[theme][variant];
  const activeColor = activeColorSet[theme][variant];
  const dotColor = isActive ? activeColor : baseColor;

  const baseClasses = [
    "after:content-['']",
    'after:block',
    `after:h-[${DOT_SIZE}px]`,
    `after:bg-[${dotColor}]`,
    'after:rounded-full',
    `after:[transition-property:background-color,width,border-radius]`,
    `after:[transition-duration:${TRANSITION_DURATION_SLOW}ms,${TRANSITION_DURATION_DEFAULT}ms,${TRANSITION_DURATION_DEFAULT}ms]`,
    'after:[transition-timing-function:ease-in-out]',
  ].join(' ');

  const sizeClasses = isActive
    ? `after:w-[${ACTIVE_DOT_SIZE}px] after:rounded-[100px]`
    : `after:w-[${DOT_SIZE}px]`;

  return cn(baseClasses, sizeClasses);
};
