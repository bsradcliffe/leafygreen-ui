import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { transitionDuration } from '@leafygreen-ui/tokens';

import { cn } from '../cn';
import { type StepState, StepStates } from '../types';

export const baseStyles = [
  'box-content',
  'mb-[4px]',
  'rounded-full',
  'flex',
  'items-center',
  'justify-center',
  'border',
  'border-solid',
  `transition-shadow`,
  `duration-[${transitionDuration.slower}ms]`,
  'ease-[ease]',
  'z-[1]',
  '[&_svg]:w-full',
].join(' ');

export const themedStateColor = {
  [Theme.Dark]: {
    [StepStates.CompletedMultiple]: palette.black,
    [StepStates.Completed]: palette.black,
    [StepStates.Current]: palette.green.base,
    [StepStates.Upcoming]: palette.gray.light1,
    [StepStates.UpcomingMultiple]: palette.gray.light1,
  },
  [Theme.Light]: {
    [StepStates.CompletedMultiple]: palette.white,
    [StepStates.Completed]: palette.white,
    [StepStates.Current]: palette.green.dark2,
    [StepStates.Upcoming]: palette.gray.dark1,
    [StepStates.UpcomingMultiple]: palette.gray.dark1,
  },
};

export const themedStateBgColor = {
  [Theme.Dark]: {
    [StepStates.CompletedMultiple]: palette.green.base,
    [StepStates.Completed]: palette.green.base,
    [StepStates.Current]: palette.black,
    [StepStates.Upcoming]: palette.black,
    [StepStates.UpcomingMultiple]: palette.black,
  },
  [Theme.Light]: {
    [StepStates.CompletedMultiple]: palette.green.dark1,
    [StepStates.Completed]: palette.green.dark1,
    [StepStates.Current]: palette.white,
    [StepStates.Upcoming]: palette.white,
    [StepStates.UpcomingMultiple]: palette.white,
  },
};

export const themedStateBorderColor = {
  [Theme.Dark]: {
    [StepStates.CompletedMultiple]: palette.green.base,
    [StepStates.Completed]: palette.green.base,
    [StepStates.Current]: palette.green.base,
    [StepStates.Upcoming]: palette.gray.light1,
    [StepStates.UpcomingMultiple]: palette.gray.light1,
  },
  [Theme.Light]: {
    [StepStates.CompletedMultiple]: palette.green.dark1,
    [StepStates.Completed]: palette.green.dark1,
    [StepStates.Current]: palette.green.dark1,
    [StepStates.Upcoming]: palette.gray.dark1,
    [StepStates.UpcomingMultiple]: palette.gray.dark1,
  },
};

export const getThemedStateStyles = (theme: Theme, state: StepState) =>
  [
    `text-[${themedStateColor[theme][state]}]`,
    `bg-[${themedStateBgColor[theme][state]}]`,
    `border-[${themedStateBorderColor[theme][state]}]`,
  ].join(' ');

export const getStepIconStyles = ({
  theme,
  state,
  size,
  className,
}: {
  theme: Theme;
  state: StepState;
  size: number;
  className?: string;
}) =>
  cn(
    baseStyles,
    `w-[${size}px]`,
    `h-[${size}px]`,
    getThemedStateStyles(theme, state),
    className,
  );
