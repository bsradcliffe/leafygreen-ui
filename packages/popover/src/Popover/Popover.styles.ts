import { CSSProperties } from 'react';
import { TransitionStatus } from 'react-transition-group';

import { createUniqueClassName } from '@leafygreen-ui/lib';
import { transitionDuration } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

import { ExtendedPlacement, TransformAlign } from './Popover.types';

const TRANSFORM_INITIAL_SCALE = 0.8;
export const TRANSITION_DURATION = transitionDuration.default;

/**
 * CSS property names that we assign during the `size` callback of `useFloating`.
 * This is done since the `size` middleware is run immediately and does not return values.
 * @see https://floating-ui.com/docs/size#apply
 */
export const popoverCSSProperties = {
  maxHeight: '--lg-popover-max_height',
  maxWidth: '--lg-popover-max_width',
} as const;

export const contentClassName = createUniqueClassName('popover-content');

export const hiddenPlaceholderStyle: CSSProperties = {
  display: 'none',
};

const transformOriginMap: Record<ExtendedPlacement, string> = {
  top: 'bottom',
  'top-start': 'bottom left',
  'top-end': 'bottom right',
  bottom: 'top',
  'bottom-start': 'top left',
  'bottom-end': 'top right',
  left: 'right',
  'left-start': 'right top',
  'left-end': 'right bottom',
  right: 'left',
  'right-start': 'left top',
  'right-end': 'left bottom',
  center: 'center',
  'center-start': 'top',
  'center-end': 'bottom',
};

const getClosedTransform = (
  spacing: number,
  transformAlign: TransformAlign,
): string => {
  switch (transformAlign) {
    case TransformAlign.Top:
      return `translate3d(0, ${spacing}px, 0) scale(${TRANSFORM_INITIAL_SCALE})`;
    case TransformAlign.Bottom:
      return `translate3d(0, -${spacing}px, 0) scale(${TRANSFORM_INITIAL_SCALE})`;
    case TransformAlign.Left:
      return `translate3d(${spacing}px, 0, 0) scale(${TRANSFORM_INITIAL_SCALE})`;
    case TransformAlign.Right:
      return `translate3d(-${spacing}px, 0, 0) scale(${TRANSFORM_INITIAL_SCALE})`;
    case TransformAlign.Center:
    default:
      return `scale(${TRANSFORM_INITIAL_SCALE})`;
  }
};

const getOpenTransform = (transformAlign: TransformAlign): string => {
  switch (transformAlign) {
    case TransformAlign.Top:
    case TransformAlign.Bottom:
      return 'translateY(0) scale(1)';
    case TransformAlign.Left:
    case TransformAlign.Right:
      return 'translateX(0) scale(1)';
    case TransformAlign.Center:
    default:
      return 'scale(1)';
  }
};

export const getPopoverStyles = ({
  className,
  left,
  placement,
  popoverZIndex,
  position,
  spacing,
  state,
  top,
  transformAlign,
}: {
  className?: string;
  left: number;
  placement: ExtendedPlacement;
  popoverZIndex?: number;
  position: 'absolute' | 'fixed';
  spacing: number;
  state: TransitionStatus;
  top: number;
  transformAlign: TransformAlign;
}): { className: string; style: CSSProperties } => {
  const isOpen = state === 'entered';

  const style: CSSProperties = {
    // Base popover styles
    margin: 0,
    border: 'none',
    padding: 0,
    overflow: 'visible',
    backgroundColor: 'transparent',
    width: 'max-content',

    // Transition properties
    transitionProperty: 'opacity, transform, overlay',
    transitionDuration: `${TRANSITION_DURATION}ms`,
    transitionTimingFunction: 'ease-in-out',
    // @ts-expect-error - `transitionBehavior` is not yet in CSSProperties
    transitionBehavior: 'allow-discrete',

    // Position styles
    left: `${left}px`,
    position,
    top: `${top}px`,
    maxHeight: `var(${popoverCSSProperties.maxHeight}, unset)`,
    maxWidth: `var(${popoverCSSProperties.maxWidth}, unset)`,

    // Transform origin based on placement
    transformOrigin: transformOriginMap[placement],

    // Open/closed state styles
    opacity: isOpen ? 1 : 0,
    transform: isOpen
      ? getOpenTransform(transformAlign)
      : getClosedTransform(spacing, transformAlign),
    pointerEvents: isOpen ? 'initial' : undefined,

    // Optional z-index
    ...(typeof popoverZIndex === 'number' ? { zIndex: popoverZIndex } : {}),
  };

  return {
    className: cn(className),
    style,
  };
};
