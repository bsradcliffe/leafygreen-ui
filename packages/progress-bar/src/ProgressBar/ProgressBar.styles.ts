import React from 'react';

import { injectStyles, Theme } from '@leafygreen-ui/lib';

import {
  barColorStyles,
  barSizeStyles,
  getDeterminateAnimatedGradient,
  getIndeterminateGradient,
  INDETERMINATE_ANIMATION_DURATION_MS,
  indeterminateLeftOffset,
  indeterminateWidth,
  SHIMMER_ANIMATION_DURATION_MS,
  TEXT_ANIMATION_DURATION,
  TRANSITION_ANIMATION_DURATION,
} from './constants';
import { AnimationMode, Size, Variant } from './ProgressBar.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Inject keyframe animations once at module load.
 * These are referenced by name in inline animation style properties below.
 */
injectStyles(
  'lg-progress-bar-keyframes',
  `
@keyframes lg-pb-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
@keyframes lg-pb-cycle {
  0% { left: ${indeterminateLeftOffset.start}; width: ${indeterminateWidth.narrow}; }
  25% { left: ${indeterminateLeftOffset.quarter}; width: ${indeterminateWidth.narrow}; }
  47% { left: ${indeterminateLeftOffset.half}; width: ${indeterminateWidth.wide}; }
  50% { left: ${indeterminateLeftOffset.half}; width: ${indeterminateWidth.wide}; }
  53% { left: ${indeterminateLeftOffset.half}; width: ${indeterminateWidth.wide}; }
  75% { left: ${indeterminateLeftOffset.threeQuarters}; width: ${indeterminateWidth.narrow}; }
  100% { left: ${indeterminateLeftOffset.end}; width: ${indeterminateWidth.narrow}; }
}
@keyframes lg-pb-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@media (prefers-reduced-motion: reduce) {
  .lg-pb-animated-text { animation: none !important; opacity: 1 !important; }
  .lg-pb-fill { transition: none !important; }
  .lg-pb-fill-overlay { animation: none !important; }
  .lg-pb-indeterminate-overlay { animation: none !important; left: ${indeterminateLeftOffset.half} !important; }
}
`,
);

export const getContainerStyles = (className?: string) =>
  cn('flex flex-col gap-[4px] w-full', className);

export const headerStyles = 'flex justify-between gap-[4px]';

export const truncatedTextStyles =
  'overflow-hidden text-ellipsis whitespace-nowrap w-full';

export const hiddenStyles =
  'absolute w-0 h-0 overflow-hidden whitespace-nowrap [clip:rect(0,0,0,0)]';

export const getHeaderValueClassName = 'flex items-center gap-[4px] whitespace-nowrap';

/**
 * Returns inline color style for header value text.
 */
export const getHeaderValueColor = ({
  theme,
  disabled,
}: {
  theme: Theme;
  disabled?: boolean;
}): string => {
  // colorToken[theme].text.disabled.default / text.secondary.default
  const colorMap = {
    [Theme.Light]: { disabled: '#889397', normal: '#5C6C75' },
    [Theme.Dark]: { disabled: '#5C6C75', normal: '#C1C7C6' },
  };
  return disabled ? colorMap[theme].disabled : colorMap[theme].normal;
};

export const headerIconBaseClassName = 'mb-[2px]';

/**
 * Returns inline color style for header icon.
 */
export const getHeaderIconColor = ({
  theme,
  variant,
  disabled,
}: {
  theme: Theme;
  variant: Variant;
  disabled?: boolean;
}): string => {
  // colorToken[theme].icon.disabled.default
  // Light: gray.light1 = #C1C7C6, Dark: gray.dark1 = #5C6C75
  const disabledColor = theme === Theme.Light ? '#C1C7C6' : '#5C6C75';
  return disabled ? disabledColor : barColorStyles[theme][variant].icon;
};

/**
 * Class name for animated text (description fade-in).
 * Relies on injected keyframes and prefers-reduced-motion overrides.
 */
export const animatedTextClassName = 'lg-pb-animated-text';

/**
 * Inline style for animated text (fade-in on new description).
 */
export const animatedTextStyle: React.CSSProperties = {
  opacity: 0,
  animation: `lg-pb-fade-in ${TEXT_ANIMATION_DURATION}ms ease-in-out forwards`,
};

/**
 * Returns className and inline style for the bar track element.
 */
export const getBarTrackStyles = ({
  theme,
  size,
}: {
  theme: Theme;
  size: Size;
}): { className: string; style: React.CSSProperties } => ({
  className: 'w-full',
  style: {
    height: barSizeStyles[size].height,
    borderRadius: barSizeStyles[size].borderRadius,
    backgroundColor: barColorStyles[theme].track,
  },
});

/**
 * Returns className and inline style for the bar fill element.
 * The pseudo-element overlay (::before) used by emotion is replaced
 * by a separate child <span> element — see `getBarFillOverlayStyle`.
 */
export const getBarFillStyles = ({
  animationMode,
  theme,
  variant,
  disabled,
}: {
  animationMode: AnimationMode;
  theme: Theme;
  variant: Variant;
  disabled?: boolean;
}): { className: string; style: React.CSSProperties } => {
  const selectedColorStyle = barColorStyles[theme][variant];
  const style: React.CSSProperties = {};
  const classes: Array<string | false> = ['relative overflow-hidden h-full rounded-[inherit] lg-pb-fill'];

  switch (animationMode) {
    case AnimationMode.Transition: {
      // Transitioning from indeterminate -> determinate: fade out then shrink
      classes.push('w-full');
      style.backgroundColor = 'transparent';
      style.opacity = 0;
      style.width = '0%';
      style.transition = `opacity ${TRANSITION_ANIMATION_DURATION}ms ease-out, width 100ms ease-out ${TRANSITION_ANIMATION_DURATION - 100}ms`;
      break;
    }
    case AnimationMode.Indeterminate: {
      classes.push('w-full');
      style.backgroundColor = 'transparent';
      break;
    }
    case AnimationMode.DeterminateAnimated: {
      const hasAnimation = !disabled && 'shimmerFade' in selectedColorStyle;
      style.width = 'var(--width)';
      style.transition = 'var(--width-animation-duration) ease';

      if (hasAnimation) {
        style.backgroundColor = 'transparent';
      } else {
        style.backgroundColor = disabled
          ? barColorStyles[theme].disabledBar
          : selectedColorStyle.bar;
      }
      break;
    }
    case AnimationMode.DeterminatePlain:
    default: {
      style.width = 'var(--width)';
      style.transition = 'var(--width-animation-duration) ease';
      style.backgroundColor = disabled
        ? barColorStyles[theme].disabledBar
        : selectedColorStyle.bar;
      break;
    }
  }

  return {
    className: cn(...classes),
    style,
  };
};

/**
 * Returns inline styles for the overlay element that replaces the ::before pseudo-element.
 * This overlay handles shimmer and indeterminate animations.
 * Returns null when no overlay is needed.
 */
export const getBarFillOverlayStyle = ({
  animationMode,
  theme,
  variant,
  disabled,
}: {
  animationMode: AnimationMode;
  theme: Theme;
  variant: Variant;
  disabled?: boolean;
}): React.CSSProperties | null => {
  const selectedColorStyle = barColorStyles[theme][variant];

  const overlayBase: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    height: '100%',
  };

  switch (animationMode) {
    case AnimationMode.Indeterminate:
    case AnimationMode.Transition: {
      return {
        ...overlayBase,
        left: indeterminateLeftOffset.start,
        width: indeterminateWidth.narrow,
        background: getIndeterminateGradient(selectedColorStyle),
        animation: `lg-pb-cycle ${INDETERMINATE_ANIMATION_DURATION_MS}ms linear infinite`,
      };
    }
    case AnimationMode.DeterminateAnimated: {
      const hasAnimation = !disabled && 'shimmerFade' in selectedColorStyle;
      if (!hasAnimation) return null;

      return {
        ...overlayBase,
        width: '100%',
        background: getDeterminateAnimatedGradient(
          selectedColorStyle as { bar: string; shimmerFade: string },
        ),
        backgroundSize: '200% 100%',
        animation: `lg-pb-shimmer ${SHIMMER_ANIMATION_DURATION_MS}ms linear infinite`,
      };
    }
    default:
      return null;
  }
};
