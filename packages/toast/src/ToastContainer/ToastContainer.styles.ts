import { TransitionStatus } from 'react-transition-group';

import { Theme } from '@leafygreen-ui/lib';

import { TOAST_CONSTANTS } from '../constants';
import { toastBGColor } from '../InternalToast';

/**
 * Keeping this to ease future debugging.
 * Set `DEBUG` to true,
 * and set the attribute `data-debug` to any data you want to debug
 */
const DEBUG = false;

/**
 * Replaces polished `mix()` with CSS `color-mix()`.
 * mix(weight, color1, color2) mixes color1 at `weight` proportion.
 */
function mixColor(weight: number, color1: string, color2: string): string {
  return `color-mix(in srgb, ${color1} ${Math.round(weight * 100)}%, ${color2})`;
}

export const portalStyles = 'relative';

export const toastContainerStyles = [
  'fixed',
  'flex',
  'flex-col-reverse',
  `left-[${16 - TOAST_CONSTANTS.inset}px]`,
  `bottom-[${16 - TOAST_CONSTANTS.inset}px]`,
  `w-[${TOAST_CONSTANTS.maxWidth + 2 * TOAST_CONSTANTS.inset}px]`,
  'max-h-[calc(100vh-16px)]',
  'z-0',
  'overflow-visible',
  // Hide the toast initially
  'min-h-0',
  'opacity-0',
  'invisible',
  // 3D perspective
  '[perspective:1600px]',
  '[perspective-origin:bottom]',
  '[transform-style:preserve-3d]',
  'transition-[transform,bottom,opacity]',
  'ease-in-out',
  'duration-[var(--transition-duration-slower)]',
  // Scrollbar hiding
  '[scroll-behavior:unset]',
  '[scrollbar-width:none]',
  '[-ms-overflow-style:none]',
  '[&::-webkit-scrollbar]:hidden',
].join(' ');

export const toastContainerVisibleStyles = 'opacity-100 visible';

export function getContainerStatefulStyles({
  recentToastsLength,
  topToastHeight,
}: {
  recentToastsLength: number;
  topToastHeight: number;
}) {
  return [
    `h-[${topToastHeight + TOAST_CONSTANTS.inset * 2}px]`,
    `[transform:translateY(-${TOAST_CONSTANTS.yOffset * (recentToastsLength - 1)}px)]`,
  ].join(' ');
}

export const getContainerInteractedStyles = ({
  totalStackHeight,
  bottomOffset,
}: {
  totalStackHeight: number;
  bottomOffset: number;
}) => {
  const height = bottomOffset + totalStackHeight + TOAST_CONSTANTS.inset * 2;

  return [
    `h-[${height}px]`,
    '[transform:translateY(0)]',
  ].join(' ');
};

export const containerExpandedStyles = [
  'h-screen',
  'bottom-0',
  '[transform:translateY(0)]',
  'overflow-auto',
].join(' ');

/** Styles applied when `isExpanded` but `!shouldExpand` */
export const containerCollapsingStyles =
  `bottom-[${16 - TOAST_CONSTANTS.inset}px]`;

/**
 * Scroll Container
 */
export const scrollContainerStyles = [
  'relative',
  'w-full',
  'h-full',
  'm-0',
  '[transform-style:inherit]',
  'transition-[margin]',
  'duration-[var(--transition-duration-default)]',
  'ease-in-out',
].join(' ');

export function scrollContainerExpandedStyles(totalStackHeight: number) {
  return [
    'my-[16px]',
    'mx-0',
    `h-[${totalStackHeight}px]`,
  ].join(' ');
}

/** Styles applied when `isExpanded` but `!shouldExpand` */
export const scrollContainerTransitionOutStyles = 'm-0';

/**
 * Stateful Toast styling
 */
export function getToastTransitionStyles({
  state,
  theme,
  index,
}: {
  state: TransitionStatus;
  theme: Theme;
  index: number;
}) {
  switch (state) {
    case 'entered': {
      const y = index * TOAST_CONSTANTS.yOffset;
      const z = -index * TOAST_CONSTANTS.zOffset;
      const bgColor = mixColor(1 - index * 0.2, toastBGColor[theme], '#FFFFFF');

      return [
        'opacity-100',
        `z-[${3 - index}]`,
        `[transform:translate3d(0,${y}px,${z}px)_scale(1)]`,
        `[background-color:${bgColor}]`,
        'duration-[var(--transition-duration-slower)]',
      ].join(' ');
    }

    case 'exiting': {
      return 'opacity-0';
    }

    default:
      return [
        `[transform:translate3d(0,${TOAST_CONSTANTS.yOffset}px,-${TOAST_CONSTANTS.zOffset}px)_scale(0.9)]`,
        'opacity-0',
      ].join(' ');
  }
}

export function getToastUnhoveredStyles({
  theme,
  index,
  topToastHeight,
}: {
  theme: Theme;
  index: number;
  topToastHeight: number;
}) {
  return [
    index === 0 ? '[max-height:unset]' : `max-h-[${topToastHeight}px]`,
    index > 0 ? `!text-[${toastBGColor[theme]}]` : '[color:initial]',
  ].join(' ');
}

export function getToastHoverStyles({
  positionY,
  height,
  theme,
}: {
  positionY: number;
  height: number;
  theme: Theme;
}) {
  return [
    `max-h-[${height * 2}px]`,
    `[background-color:${toastBGColor[theme]}]`,
    `[transform:translate3d(0,-${positionY}px,0)]`,
  ].join(' ');
}
