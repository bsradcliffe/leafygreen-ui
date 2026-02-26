import { TransitionStatus } from 'react-transition-group';

import { Theme } from '@leafygreen-ui/lib';

import { TOAST_CONSTANTS } from '../../constants';

export const notificationBarStyles = [
  'border-0',
  'outline-0',
  'absolute',
  `left-[${TOAST_CONSTANTS.inset}px]`,
  `bottom-[${TOAST_CONSTANTS.inset}px]`,
  `w-[${TOAST_CONSTANTS.maxWidth}px]`,
  `h-[${TOAST_CONSTANTS.notificationBarHeight}px]`,
  'z-0',
  'font-[var(--font-family-default)]',
  'text-[13px]',
  'leading-[20px]',
  'rounded-[8px]',
  'cursor-pointer',
  'opacity-0',
  `[transform:translate3d(0,${TOAST_CONSTANTS.yOffset}px,-400px)]`,
  'transition-[background-color,opacity,transform]',
  'duration-[var(--transition-duration-slower)]',
  'ease-in-out',
].join(' ');

export const notificationBarThemeStyles: Record<Theme, string> = {
  [Theme.Light]: [
    'bg-[#3D4F58]',
    'text-white',
    'hover:bg-[#1C2D38]',
  ].join(' '),
  [Theme.Dark]: [
    'bg-[#C1C7C6]',
    'text-[#001E2B]',
    'hover:bg-[#E8EDEB]',
  ].join(' '),
};

export const notificationBarTransitionStyles: Partial<
  Record<TransitionStatus, string>
> = {
  entered: '[transform:translate3d(0,0,0)] opacity-100',
  entering: '[transform:translate3d(0,0,0)] opacity-100',
  exited: `[transform:translate3d(0,${TOAST_CONSTANTS.shortStackCount * TOAST_CONSTANTS.yOffset}px,-${(TOAST_CONSTANTS.shortStackCount + 1) * TOAST_CONSTANTS.zOffset}px)] opacity-0`,
  exiting: `[transform:translate3d(0,${TOAST_CONSTANTS.shortStackCount * TOAST_CONSTANTS.yOffset}px,-${(TOAST_CONSTANTS.shortStackCount + 1) * TOAST_CONSTANTS.zOffset}px)] opacity-0`,
};
