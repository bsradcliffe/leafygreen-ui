import { TransitionStatus } from 'react-transition-group';

import { Theme } from '@leafygreen-ui/lib';
import { transitionDuration as transitionDurationToken } from '@leafygreen-ui/tokens';

export const transitionDuration = transitionDurationToken.slower;

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Styles
 */

export const cardStyles: Record<Theme, string> = {
  [Theme.Dark]:
    'block w-full p-0 text-[#E8EDEB] [--card-divider-color:#3D4F58]',
  [Theme.Light]:
    'block w-full p-0 text-[#001E2B] [--card-divider-color:#E8EDEB]',
};

export const summaryStyle =
  'grid grid-cols-[auto_24px] p-[24px] gap-x-[8px] cursor-pointer text-inherit items-center';

export const summaryHeader = 'inline-block text-inherit';

const summaryTextBase = 'text-inherit mt-[4px]';

export const summaryTextThemeStyle: Record<Theme, string> = {
  [Theme.Dark]: cn(summaryTextBase, 'text-[#C1C7C6]'),
  [Theme.Light]: cn(summaryTextBase, 'text-[#001E2B]'),
};

export const flagTextStyle = [
  'italic',
  'text-[12px]',
  'tracking-[0.2px]',
  "before:content-['\\a0(']",
  "after:content-[')']",
].join(' ');

export const iconStyle = [
  'col-start-2',
  'row-start-1',
  'text-[#889397]',
  `transition-transform`,
  `duration-[${transitionDuration}ms]`,
  'ease-in-out',
].join(' ');

export const iconThemeStyle: Record<Theme, string> = {
  [Theme.Dark]: [
    'hover:text-[#C1C7C6]',
    'active:text-[#C1C7C6]',
    'focus-visible:text-[#C1C7C6]',
    'hover:before:bg-[#3D4F58]',
    'active:before:bg-[#3D4F58]',
    'focus-visible:before:bg-[#3D4F58]',
  ].join(' '),
  [Theme.Light]: [
    'hover:text-[#5C6C75]',
    'active:text-[#5C6C75]',
    'focus-visible:text-[#5C6C75]',
    'hover:before:bg-[#E8EDEB]',
    'active:before:bg-[#E8EDEB]',
    'focus-visible:before:bg-[#E8EDEB]',
  ].join(' '),
};

export const iconTransitionStyle: Record<TransitionStatus, string> = {
  entering: 'rotate-180',
  entered: 'rotate-180',
  exiting: 'rotate-0',
  exited: 'rotate-0',
  unmounted: '',
};

export const childrenWrapperStyle = [
  'overflow-hidden',
  `transition-all`,
  `duration-[${transitionDuration}ms]`,
  'ease-in-out',
  'origin-top-left',
  'px-[24px]',
  'box-content',
  'border-t',
  'border-solid',
  'border-transparent',
  'visible',
].join(' ');

export const childrenWrapperTransitionStyle = (
  state: TransitionStatus,
  height?: number,
): string => {
  switch (state) {
    case 'entering':
      return `max-h-[${height || 9999}px] py-[24px] border-[color:var(--card-divider-color)]`;
    case 'entered':
      return `max-h-[${height || 9999}px] py-[24px] border-[color:var(--card-divider-color)]`;
    case 'exiting':
      return 'max-h-0 py-0';
    case 'exited':
      return 'max-h-0 py-0 invisible';
    default:
      return '';
  }
};
