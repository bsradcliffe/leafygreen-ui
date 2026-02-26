import { injectStyles, Theme } from '@leafygreen-ui/lib';
import { color, Size } from '@leafygreen-ui/tokens';

import {
  DASH_DURATION,
  getHorizontalGap,
  getPadding,
  getSpinnerSize,
  getStrokeWidth,
  getVerticalGap,
  ROTATION_DURATION,
} from './constants';
import { SpinnerDirection } from './Spinner.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Injects the outer SVG rotation keyframes (static, size-independent).
 */
injectStyles(
  'lg-spinner-rotate',
  `
@keyframes lg-spinner-rotate {
  0% { transform: rotate(-90deg); }
  100% { transform: rotate(270deg); }
}
`,
);

/**
 * Injects the SVG circle dash keyframes for a given size.
 * Keyed by the computed size in px so each distinct size is injected once.
 */
function injectDashKeyframes(size: Size | number): string {
  const sizeInPx = getSpinnerSize(size);
  const strokeWidth = getStrokeWidth(size);
  const circumference = (sizeInPx - strokeWidth) * Math.PI;

  const percentToPx = (pct: number) => (pct / 100) * circumference;

  const animationName = `lg-spinner-dash-${sizeInPx}`;
  const id = animationName;

  injectStyles(
    id,
    `
@keyframes ${animationName} {
  0% {
    stroke-dasharray: ${percentToPx(0)}px, ${percentToPx(100)}px;
    stroke-dashoffset: 0;
  }
  12.5% {
    stroke-dasharray: ${percentToPx(25)}px, ${percentToPx(75)}px;
    stroke-dashoffset: 0;
  }
  25% {
    stroke-dasharray: ${percentToPx(0)}px, ${percentToPx(100)}px;
    stroke-dashoffset: -${percentToPx(25)}px;
  }
  37.5% {
    stroke-dasharray: ${percentToPx(25)}px, ${percentToPx(75)}px;
    stroke-dashoffset: -${percentToPx(25)}px;
  }
  50% {
    stroke-dasharray: ${percentToPx(0)}px, ${percentToPx(100)}px;
    stroke-dashoffset: -${percentToPx(50)}px;
  }
  62.5% {
    stroke-dasharray: ${percentToPx(25)}px, ${percentToPx(75)}px;
    stroke-dashoffset: -${percentToPx(50)}px;
  }
  75% {
    stroke-dasharray: ${percentToPx(0)}px, ${percentToPx(100)}px;
    stroke-dashoffset: -${percentToPx(75)}px;
  }
  87.5% {
    stroke-dasharray: ${percentToPx(25)}px, ${percentToPx(75)}px;
    stroke-dashoffset: -${percentToPx(75)}px;
  }
  100% {
    stroke-dasharray: ${percentToPx(0)}px, ${percentToPx(100)}px;
    stroke-dashoffset: -${percentToPx(100)}px;
  }
}
`,
  );

  return animationName;
}

/**
 * Inject size-specific SVG styles and return the class name.
 * Keyed by size so each distinct size is injected once.
 */
function injectSvgSizeStyles(size: Size | number): string {
  const sizeInPx = getSpinnerSize(size);
  const padding = getPadding(size);
  const id = `lg-spinner-svg-${sizeInPx}`;

  injectStyles(
    id,
    `
.${id} {
  width: ${sizeInPx}px;
  height: ${sizeInPx}px;
  padding: ${padding}px;
}
`,
  );

  return id;
}

/**
 * Inject SVG animation styles and return the class name.
 */
const svgAnimatedClassName = 'lg-spinner-svg-animated';
injectStyles(
  svgAnimatedClassName,
  `
.${svgAnimatedClassName} {
  animation: lg-spinner-rotate ${ROTATION_DURATION}ms linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .${svgAnimatedClassName} {
    animation: unset;
  }
}
`,
);

/**
 * Returns the outer SVG element class names
 */
export const getSvgStyles = ({
  size,
  disableAnimation,
}: {
  size: Size | number;
  disableAnimation?: boolean;
}): string => {
  const sizeClass = injectSvgSizeStyles(size);
  return cn(sizeClass, !disableAnimation && svgAnimatedClassName);
};

/**
 * Inject circle styles for a specific size and return the animated/static class names.
 */
function injectCircleAnimationStyles(
  size: Size | number,
  disableAnimation?: boolean,
): string {
  const sizeInPx = getSpinnerSize(size);
  const strokeWidth = getStrokeWidth(size);
  const circumference = (sizeInPx - strokeWidth) * Math.PI;
  const percentToPx = (pct: number) => (pct / 100) * circumference;

  if (disableAnimation) {
    const id = `lg-spinner-circle-static-${sizeInPx}`;
    injectStyles(
      id,
      `
.${id} {
  stroke-dasharray: ${percentToPx(75)}px, ${percentToPx(25)}px;
}
`,
    );
    return id;
  }

  const dashAnimationName = injectDashKeyframes(size);
  const id = `lg-spinner-circle-animated-${sizeInPx}`;

  injectStyles(
    id,
    `
.${id} {
  animation: ${dashAnimationName} ${DASH_DURATION}ms linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .${id} {
    stroke-dasharray: ${percentToPx(75)}px, ${percentToPx(25)}px;
    animation: unset;
  }
}
`,
  );

  return id;
}

/**
 * Inject circle base styles (stroke, fill, stroke-width) per theme/size combo.
 */
function injectCircleBaseStyles(
  size: Size | number,
  theme: Theme,
  colorOverride?: string,
): string {
  const strokeWidth = getStrokeWidth(size);
  const sizeInPx = getSpinnerSize(size);
  const strokeColor = colorOverride ?? color[theme].icon.success.default;
  // Include colorOverride in the key to handle different overrides for the same size/theme
  const colorKey = colorOverride ? colorOverride.replace(/[^a-zA-Z0-9]/g, '') : 'default';
  const id = `lg-spinner-circle-base-${sizeInPx}-${theme}-${colorKey}`;

  injectStyles(
    id,
    `
.${id} {
  stroke: ${strokeColor};
  stroke-linecap: round;
  fill: none;
  stroke-width: ${strokeWidth};
}
`,
  );

  return id;
}

/**
 * Returns the SVG Circle class names
 */
export const getCircleStyles = ({
  size,
  theme,
  colorOverride,
  disableAnimation,
}: {
  size: Size | number;
  theme: Theme;
  colorOverride?: string;
  disableAnimation?: boolean;
}): string => {
  const baseClass = injectCircleBaseStyles(size, theme, colorOverride);
  const animClass = injectCircleAnimationStyles(size, disableAnimation);
  return cn(baseClass, animClass);
};

/**
 * Returns the SVG Circle args (`cx`, `cy`, `r`)
 */
export const getCircleSVGArgs = (size: Size | number) => {
  const sizeInPx = getSpinnerSize(size);
  const strokeWidth = getStrokeWidth(size);

  return {
    cx: sizeInPx / 2,
    cy: sizeInPx / 2,
    r: (sizeInPx - strokeWidth) / 2,
  };
};

/**
 * Inject wrapper styles for each direction+size combo.
 */
function injectWrapperBaseStyles(): string {
  const id = 'lg-spinner-wrapper-base';
  injectStyles(
    id,
    `
.${id} {
  display: flex;
  align-items: center;
}
`,
  );
  return id;
}

function injectWrapperDirectionStyles(
  direction: SpinnerDirection,
  size: Size | number,
): string {
  const sizeInPx = getSpinnerSize(size);

  if (direction === SpinnerDirection.Vertical) {
    const gap = getVerticalGap(size);
    const id = `lg-spinner-wrapper-vertical-${sizeInPx}`;
    injectStyles(
      id,
      `
.${id} {
  flex-direction: column;
  gap: ${gap}px;
}
`,
    );
    return id;
  }

  const gap = getHorizontalGap(size);
  const id = `lg-spinner-wrapper-horizontal-${sizeInPx}`;
  injectStyles(
    id,
    `
.${id} {
  flex-direction: row;
  gap: ${gap}px;
}
`,
  );
  return id;
}

/**
 * Returns the wrapper div class names based on direction and size
 */
export const getWrapperStyles = ({
  direction,
  size,
}: {
  direction: SpinnerDirection;
  size: Size | number;
}): string => {
  const baseClass = injectWrapperBaseStyles();
  const directionClass = injectWrapperDirectionStyles(direction, size);
  return cn(baseClass, directionClass);
};
