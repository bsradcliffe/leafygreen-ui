import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  breakpoints,
  fontWeights,
  spacing,
  transitionDuration,
  typeScales,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';
import { stepIconClassName } from '../StepIcon';

import { State } from './VerticalStep.types';

export const contentClassName = createUniqueClassName('content');

export const baseStyles = [
  'flex',
  `gap-[${spacing[200]}px]`,
  // This adds the line between steps
  `[&:not(:last-of-type)_.${stepIconClassName}]:after:content-['']`,
  // Remove margin on last step content
  `[&:last-of-type_.${contentClassName}]:m-0`,
].join(' ');

export const getWrapperStyles = (hasMedia = false) =>
  cn(
    [
      'overflow-hidden',
      `ps-[${spacing[200]}px]`,
    ].join(' '),
    hasMedia &&
      [
        `[@media(min-width:${breakpoints.Tablet}px)]:grid`,
        `gap-x-[${spacing[400]}px]`,
        `[grid-template:_'desc_img'_'cta_img'_'cta_img']`,
        '[grid-template-columns:minmax(370px,1fr)_auto]',
      ].join(' '),
  );

export const mediaStyles = [
  '[grid-area:img]',
  `mt-[${spacing[200]}px]`,
  'max-w-[800px]',
  'w-full',
  `[@media(min-width:${breakpoints.Tablet}px)]:mt-0`,
  '[&_img]:max-w-full',
  '[&_img]:align-middle',
  '[&_svg]:max-w-full',
  '[&_svg]:align-middle',
].join(' ');

export const titleStyles: Record<Theme, Record<State, string>> = {
  [Theme.Dark]: {
    [State.Current]: palette.white,
    [State.Completed]: palette.green.base,
    [State.Future]: palette.gray.light1,
  },
  [Theme.Light]: {
    [State.Current]: palette.black,
    [State.Completed]: palette.green.dark2,
    [State.Future]: palette.gray.dark1,
  },
};

export const getTitleStyles = (theme: Theme, state: State) =>
  cn(
    [
      `text-[${titleStyles[theme][state]}]`,
      `ps-[${spacing[200]}px]`,
      `leading-[${typeScales.body1.lineHeight}px]`,
      `transition-[font-weight]`,
      `duration-[${transitionDuration.default}ms]`,
      'ease-in-out',
    ].join(' '),
    state !== State.Completed && `font-[${fontWeights.bold}]`,
  );

export const getContentStyles = (isOpen = false, hasButtons = false) =>
  cn(
    [
      `mb-[${spacing[400]}px]`,
      `transition-[margin-block-end]`,
      `duration-[${transitionDuration.slowest}ms]`,
      'ease-in-out',
      'w-full',
    ].join(' '),
    isOpen && hasButtons && `mb-[${spacing[200]}px]`,
  );
