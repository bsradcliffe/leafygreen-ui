import { Theme } from '@leafygreen-ui/lib';

import { TOAST_CONSTANTS } from '../../constants';

export const progressBarBackgroundStyle = [
  'absolute',
  'bottom-0',
  'left-0',
  'right-0',
  `h-[${TOAST_CONSTANTS.progressBarHeight}px]`,
  'bg-[#E8EDEB]',
].join(' ');

export const progressBarBackgroundThemeStyle: Record<Theme, string> = {
  [Theme.Dark]: 'bg-[#C1C7C6]',
  [Theme.Light]: 'bg-[#3D4F58]',
};

/**
 * The shimmer animation keyframes are defined via a global CSS class
 * using Tailwind's `animate-` utility with a custom keyframe name.
 * Since Tailwind v4 supports arbitrary keyframes, we use inline animation.
 */
export const progressBarStyle = [
  'overflow-hidden',
  `h-[${TOAST_CONSTANTS.progressBarHeight}px]`,
  `[background-size:${TOAST_CONSTANTS.maxWidth * 2}px]`,
  `[animation:progress-shimmer_4s_infinite_linear]`,
  'transition-[width]',
  'duration-[var(--transition-duration-slower)]',
  'ease-in-out',
].join(' ');

export const progressBarThemeStyle: Record<Theme, string> = {
  [Theme.Light]: [
    'bg-[#083c90]',
    `[background-image:linear-gradient(90deg,#083c90_0px,#c3e7fe_${TOAST_CONSTANTS.maxWidth / 2}px,#083c90_${TOAST_CONSTANTS.maxWidth}px)]`,
  ].join(' '),
  [Theme.Dark]: [
    'bg-[#0498ec]',
    `[background-image:linear-gradient(90deg,#0498ec_0px,#c3e7fe_${TOAST_CONSTANTS.maxWidth / 2}px,#0498ec_${TOAST_CONSTANTS.maxWidth}px)]`,
  ].join(' '),
};
