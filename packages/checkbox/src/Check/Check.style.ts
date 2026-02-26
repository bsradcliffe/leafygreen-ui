import React from 'react';
import { TransitionStatus } from 'react-transition-group';

import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';

import {
  checkAnimationDuration,
  checkBoxSize,
  insetPct,
  rippleScale,
  rippleTransitionDelay,
  rippleTransitionScale,
} from '../constants';

export const rippleClassName = createUniqueClassName('ripple');
export const checkBorderSizePx = 2;

/**
 * Disables all transition animations on the element and its ::before pseudo-element.
 * Applied as inline style because Tailwind cannot target `&::before` transition properties
 * alongside the element's own transitions in a single utility class string.
 */
export const disableAnimationStyle: React.CSSProperties = {
  transition: 'unset',
  transitionDelay: '0ms',
  transitionDuration: '0ms',
};

/**
 * Base wrapper styles for the checkbox box.
 * Complex transition timing, pseudo-element animations, and calculated inset values
 * require inline styles rather than Tailwind utilities.
 */
export const wrapperBaseClassName = [
  '[grid-area:check]',
  'relative',
  'flex',
  'z-[1]',
  `h-[${checkBoxSize}px]`,
  `w-[${checkBoxSize}px]`,
  'items-center',
  'justify-center',
  'rounded-[3px]',
  `border-[${checkBorderSizePx}px]`,
  'border-solid',
  'overflow-hidden',
  'bg-transparent',
].join(' ');

/**
 * Inline styles for the wrapper base that cannot be expressed as Tailwind utilities.
 * Includes multi-value transitions with individual delays and ::before pseudo-element styles.
 */
export const wrapperBaseInlineStyle: React.CSSProperties = {
  transition: `box-shadow 100ms ease-in-out, background-color 0ms linear, border-color 0ms linear`,
  transitionDelay: `0ms, 0ms, ${checkAnimationDuration}ms`,
};

/**
 * CSS for the ::before pseudo-element on the wrapper.
 * This must be applied via a <style> tag since Tailwind cannot fully control
 * pseudo-element transitions, transforms, and calculated inset values.
 */
export const wrapperBeforeBaseCSS = `
  content: '';
  position: absolute;
  inset: ${insetPct}%;
  z-index: 1;
  border-radius: 100%;
  transform: scale(0);
  transform-origin: center center;
  transition: transform ${checkAnimationDuration}ms ease-in-out;
  transition-delay: ${checkAnimationDuration / 2}ms;
`;

export const wrapperThemeStyle: Record<Theme, string> = {
  [Theme.Light]: 'border-[#3D4F58]',
  [Theme.Dark]: 'border-[#889397]',
};

export const wrapperBeforeThemeCSS: Record<Theme, string> = {
  [Theme.Light]: 'background-color: #016BF8;',
  [Theme.Dark]: 'background-color: #0498EC;',
};

export const wrapperCheckedBaseInlineStyle: React.CSSProperties = {
  transitionDelay: `0ms, ${checkAnimationDuration}ms, 0ms`,
};

export const wrapperCheckedBeforeCSS = `
  transform: scale(1);
  transition-delay: 0ms;
`;

export const wrapperCheckedThemeStyle: Record<Theme, string> = {
  [Theme.Light]: 'bg-[#016BF8] border-[#016BF8]',
  [Theme.Dark]: 'bg-[#0498EC] border-[#0498EC]',
};

export const wrapperDisabledStyle: Record<Theme, string> = {
  [Theme.Light]: 'border-[#E8EDEB] bg-[#F9FBFA] shadow-none',
  [Theme.Dark]: 'border-[#3D4F58] bg-[#1C2D38] shadow-none',
};

export const wrapperDisabledBeforeCSS: Record<Theme, string> = {
  [Theme.Light]: 'background-color: #F9FBFA;',
  [Theme.Dark]: 'background-color: #1C2D38;',
};

export const wrapperCheckedDisabledStyle: Record<Theme, string> = {
  [Theme.Light]: 'bg-[#E8EDEB]',
  [Theme.Dark]: 'bg-[#3D4F58]',
};

export const wrapperCheckedDisabledBeforeCSS: Record<Theme, string> = {
  [Theme.Light]: 'background-color: #E8EDEB;',
  [Theme.Dark]: 'background-color: #3D4F58;',
};

export const rippleBaseClassName = [
  '[grid-area:check]',
  'relative',
  `top-[${checkBorderSizePx}px]`,
  `h-[${checkBoxSize}px]`,
  `w-[${checkBoxSize}px]`,
  'z-0',
  'rounded-full',
  'opacity-100',
  'scale-0',
  'origin-center',
  '[transition:0ms_ease-in-out]',
  '[transition-property:transform,opacity]',
].join(' ');

export const rippleThemeStyles: Record<Theme, string> = {
  [Theme.Light]: 'bg-[#1254B7]',
  [Theme.Dark]: 'bg-[#C3E7FE]',
};

const rippleDuration = rippleTransitionScale * checkAnimationDuration;
const rippleDelay = rippleTransitionDelay * checkAnimationDuration;

export const rippleCheckedInlineStyle: React.CSSProperties = {
  transitionDuration: `${rippleDuration}ms`,
  transitionDelay: `${rippleDelay}ms`,
  transform: `scale(${rippleScale})`,
  opacity: 0,
};

export const checkIconClassName = [
  'z-[1]',
  'origin-center',
  `[transition:transform_${checkAnimationDuration}ms_ease-in-out]`,
].join(' ');

const checkInClassName = `scale-100 rotate-0 [transition-delay:${checkAnimationDuration / 8}ms]`;

const checkOutClassName = 'scale-0 -rotate-45';

export const checkIconTransitionStyles: Record<TransitionStatus, string> = {
  entering: checkOutClassName,
  entered: checkInClassName,
  exiting: checkOutClassName,
  exited: checkOutClassName,
  unmounted: checkOutClassName,
};
