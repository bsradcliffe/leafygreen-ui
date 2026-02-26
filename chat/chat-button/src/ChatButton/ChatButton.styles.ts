import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  color,
  InteractionState,
  Variant as ColorVariant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';
import { SHIMMER_TRANSITION_DURATION } from '../shared.styles';

import { Variant } from './ChatButton.types';

/** non-palette blue used for Chat branding */
const ALT_BLUE_COLOR = '#00D2FF';
const GRADIENT_BORDER_WIDTH = 1;

const getGradientStartColor = (darkMode: boolean) => {
  return palette.green[darkMode ? 'base' : 'dark1'];
};

const getGradientEndColor = (darkMode: boolean) => {
  return darkMode ? ALT_BLUE_COLOR : palette.blue.base;
};

const getBaseDefaultButtonStyles = (theme: Theme) => {
  const darkMode = theme === Theme.Dark;
  const gradientStart = getGradientStartColor(darkMode);
  const gradientEnd = getGradientEndColor(darkMode);

  return [
    'relative',
    'isolate',
    'border-none',
    `bg-[${color[theme].background[ColorVariant.Primary][InteractionState.Default]}]`,
    `text-[${darkMode ? palette.white : palette.green.dark2}]`,
    'overflow-hidden',

    // &:active, &:hover
    `hover:bg-[${color[theme].background[ColorVariant.Primary][InteractionState.Default]}]`,
    `active:bg-[${color[theme].background[ColorVariant.Primary][InteractionState.Default]}]`,
    `hover:text-[${darkMode ? palette.white : palette.green.dark2}]`,
    `active:text-[${darkMode ? palette.white : palette.green.dark2}]`,
    `hover:shadow-[0_0_0_3px_${color[theme].border[ColorVariant.OnSuccess][InteractionState.Hover]}]`,
    `active:shadow-[0_0_0_3px_${color[theme].border[ColorVariant.OnSuccess][InteractionState.Hover]}]`,

    // &:focus-visible
    `focus-visible:bg-[${color[theme].background[ColorVariant.Primary][InteractionState.Default]}]`,
    `focus-visible:text-[${darkMode ? palette.white : palette.green.dark2}]`,

    // &::before - gradient border
    "before:content-['']",
    'before:absolute',
    'before:inset-0',
    'before:rounded-[inherit]',
    `before:bg-[linear-gradient(135deg,${gradientStart},${gradientEnd})]`,
    `before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`,
    'before:[mask-composite:exclude]',
    `before:p-[${GRADIENT_BORDER_WIDTH}px]`,
    'before:pointer-events-none',
  ].join(' ');
};

const getShimmerStyles = (showAnimation: boolean) =>
  [
    // &::after
    "after:content-['']",
    'after:absolute',
    'after:inset-0',
    'after:rounded-[inherit]',
    'after:bg-[linear-gradient(110deg,transparent_0%,transparent_35%,rgba(255,255,255,0.8)_50%,transparent_65%,transparent_100%)]',
    'after:pointer-events-none',
    'after:z-[1]',
    `after:[mask-image:linear-gradient(white,white),linear-gradient(white,white)]`,
    `after:[mask-position:0_0,${GRADIENT_BORDER_WIDTH}px_${GRADIENT_BORDER_WIDTH}px]`,
    `after:[mask-size:100%_100%,calc(100%-${GRADIENT_BORDER_WIDTH * 2}px)_calc(100%-${GRADIENT_BORDER_WIDTH * 2}px)]`,
    'after:[mask-repeat:no-repeat]',
    'after:[mask-composite:exclude]',
    'after:-translate-x-full',
    showAnimation ? 'after:opacity-100' : 'after:opacity-0',
    `after:animate-[shimmer_${SHIMMER_TRANSITION_DURATION}ms_ease-in-out_infinite]`,
  ].join(' ');

const getDefaultButtonStyles = ({
  showAnimation,
  theme,
}: {
  showAnimation: boolean;
  theme: Theme;
}) => cn(getBaseDefaultButtonStyles(theme), getShimmerStyles(showAnimation));

export const getButtonStyles = ({
  className,
  disabled,
  showAnimation,
  theme,
  variant,
}: {
  className?: string;
  disabled: boolean;
  showAnimation: boolean;
  theme: Theme;
  variant: Variant;
}) =>
  cn(
    {
      [getDefaultButtonStyles({ showAnimation, theme })]:
        variant === Variant.Default && !disabled,
    },
    className,
  );
