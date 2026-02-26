import React from 'react';

import clamp from 'lodash/clamp';

import { Align, ElementPosition, Justify } from '@leafygreen-ui/popover';

import { TooltipVariant } from './Tooltip.types';
import {
  borderRadiuses,
  CONTAINER_SIZE,
  NOTCH_OVERLAP,
} from './tooltipConstants';

interface NotchPositionStylesArgs {
  align: Align;
  justify: Justify;
  triggerRect: ElementPosition | DOMRect | ClientRect | null;
  isCompact: boolean;
}

interface NotchPositionResult {
  notchContainerStyle: React.CSSProperties;
  notchContainerClassName: string;
  notchStyle: React.CSSProperties;
  notchClassName: string;
  tooltipStyle: React.CSSProperties;
}

const emptyResult: NotchPositionResult = {
  notchContainerStyle: {},
  notchContainerClassName: '',
  notchStyle: {},
  notchClassName: '',
  tooltipStyle: {},
};

/**
 * Base class names for the notch container (non-dynamic properties).
 */
const notchContainerBaseClassName = [
  'absolute',
  'overflow-hidden',
  'm-auto',
  'pointer-events-none',
].join(' ');

/**
 * Base class names for the notch SVG (non-dynamic properties).
 * Width/height set to NOTCH_WIDTH (26px) to keep the notch square.
 */
const notchBaseClassName = 'absolute m-0 w-[26px] h-[26px]';

export function notchPositionStyles({
  align,
  justify,
  triggerRect,
  isCompact,
}: NotchPositionStylesArgs): NotchPositionResult {
  if (!align || !justify || !triggerRect || isCompact) {
    return emptyResult;
  }

  const notchStyle: React.CSSProperties = {};
  const containerStyle: React.CSSProperties = {
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
  };

  /**
   * The bounds used to clamp the notchOffset value.
   * Should match the border-radius of the tooltip
   */
  const notchOffsetLowerBound = borderRadiuses[TooltipVariant.Default];

  /**
   * This number is somewhat "magical", but adjusted for the Tooltip alignment.
   * Calculating the exact value needed here requires setting a ref on the Tooltip content wrapper, and getting the height / width of it.
   * The problem was that the height / width changes when the open prop is set, causing the notch to lose its positioning before the tooltip transitions out in some cases.
   */
  let notchOffsetUpperBound = notchOffsetLowerBound * 2;

  /**
   * The un-clamped value that would exactly center the tooltip notch relative to the trigger.
   */
  let notchOffsetActual: number;

  /**
   * The clamped value that makes a best-attempt to center the notch relative to the trigger,
   * while also ensuring that the notch is positioned within the bounds of the tooltip itself,
   * and still has the appearance of an alignment.
   */
  let notchOffset = 0;

  /**
   * Boolean derived from the notchOffsetActual and notchOffsetLowerBound that determines if the trigger
   * is small enough to make a transformation of the tooltip itself necessary.
   */
  let shouldTransformPosition: boolean;

  /**
   * When the trigger is smaller than the minimum offset we require to position the notch over the trigger,
   * we calculate a transformation to apply to the entire tooltip so that the notch centers on that element.
   * This is particularly important for things like icons, and icon buttons where without this transformation,
   * the tooltip's notch could be positioned entirely off of the trigger.
   */
  let tooltipOffsetTransform = '';

  switch (align) {
    case 'top':
    case 'bottom':
      notchOffsetUpperBound = notchOffsetLowerBound * 3;
      notchOffsetActual = triggerRect.width / 2 - CONTAINER_SIZE / 2;
      notchOffset = clamp(
        notchOffsetActual,
        notchOffsetLowerBound,
        notchOffsetUpperBound,
      );
      shouldTransformPosition = notchOffsetActual <= notchOffsetLowerBound;

      notchStyle.left = 0;
      notchStyle.right = 0;

      if (align === 'top') {
        containerStyle.top = 'calc(100% - 1px)';
        notchStyle.top = NOTCH_OVERLAP;
      } else {
        containerStyle.bottom = 'calc(100% - 1px)';
        notchStyle.bottom = NOTCH_OVERLAP;
        notchStyle.transform = 'rotate(180deg)';
      }

      switch (justify) {
        case Justify.Start:
          containerStyle.left = notchOffset;

          if (shouldTransformPosition) {
            tooltipOffsetTransform = `translateX(-${
              notchOffsetLowerBound - notchOffsetActual
            }px)`;
          }

          break;

        case Justify.Middle:
          containerStyle.left = 0;
          containerStyle.right = 0;

          break;

        case Justify.End:
          containerStyle.right = notchOffset;

          if (shouldTransformPosition) {
            tooltipOffsetTransform = `translateX(${
              notchOffsetLowerBound - notchOffsetActual
            }px)`;
          }

          break;
      }

      break;

    case 'left':
    case 'right':
      notchOffsetUpperBound = notchOffsetLowerBound * 2;
      notchOffsetActual = triggerRect.height / 2 - CONTAINER_SIZE / 2;
      notchOffset = clamp(
        notchOffsetActual,
        notchOffsetLowerBound,
        notchOffsetUpperBound,
      );
      shouldTransformPosition = notchOffsetActual <= notchOffsetLowerBound;

      notchStyle.top = 0;
      notchStyle.bottom = 0;

      if (align === 'left') {
        containerStyle.left = 'calc(100% - 1px)';
        notchStyle.left = NOTCH_OVERLAP;
        notchStyle.transform = 'rotate(-90deg)';
      } else {
        containerStyle.right = 'calc(100% - 1px)';
        notchStyle.right = NOTCH_OVERLAP;
        notchStyle.transform = 'rotate(90deg)';
      }

      switch (justify) {
        case Justify.Start:
          containerStyle.top = notchOffset;

          if (shouldTransformPosition) {
            tooltipOffsetTransform = `translateY(-${
              notchOffsetLowerBound - notchOffsetActual
            }px)`;
          }

          break;

        case Justify.Middle:
          containerStyle.top = 0;
          containerStyle.bottom = 0;
          break;

        case Justify.End:
          containerStyle.bottom = notchOffset;

          if (shouldTransformPosition) {
            tooltipOffsetTransform = `translateY(${
              notchOffsetLowerBound - notchOffsetActual
            }px)`;
          }

          break;
      }

      break;
  }

  const tooltipStyle: React.CSSProperties = {
    minWidth: notchOffset * 2 + CONTAINER_SIZE,
    transform: tooltipOffsetTransform || undefined,
  };

  return {
    notchContainerStyle: containerStyle,
    notchContainerClassName: notchContainerBaseClassName,
    notchStyle,
    notchClassName: notchBaseClassName,
    tooltipStyle,
  };
}
