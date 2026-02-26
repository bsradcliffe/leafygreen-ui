import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { transitionDuration } from '@leafygreen-ui/tokens';

import { State } from '../VerticalStep/VerticalStep.types';

export const stepIconClassName = createUniqueClassName('step');

const STEP_SIZE = 20;

export const getStepWrapperStyles = (isCompleted: boolean) =>
  [
    'relative',
    `after:bg-[${isCompleted ? palette.green.dark1 : palette.gray.base}]`,
    'after:absolute',
    'after:w-px',
    `after:h-[calc(100%-${STEP_SIZE}px)]`,
    'after:left-1/2',
    `after:transition-[background]`,
    `after:duration-[${transitionDuration.default}ms]`,
    'after:ease-[ease]',
  ].join(' ');

export const stepStyles = [
  'rounded-full',
  'flex',
  'items-center',
  'justify-center',
  'border',
  'border-solid',
  `transition-all`,
  `duration-[${transitionDuration.default}ms]`,
  'ease-[ease]',
  `w-[${STEP_SIZE}px]`,
  `h-[${STEP_SIZE}px]`,
  'relative',
  'text-xs',
  'font-medium',
].join(' ');

export const themedStateColor = {
  [Theme.Dark]: {
    [State.Future]: palette.gray.light1,
    [State.Completed]: palette.black,
    [State.Current]: palette.green.base,
  },
  [Theme.Light]: {
    [State.Future]: palette.gray.dark1,
    [State.Completed]: palette.white,
    [State.Current]: palette.green.dark2,
  },
};

export const themedStateBgColor = {
  [Theme.Dark]: {
    [State.Future]: 'rgba(255,255,255,0)',
    [State.Completed]: palette.green.base,
    [State.Current]: 'rgba(255,255,255,0)',
  },
  [Theme.Light]: {
    [State.Future]: 'rgba(255,255,255,0)',
    [State.Completed]: palette.green.dark1,
    [State.Current]: 'rgba(255,255,255,0)',
  },
};

export const themedStateBorderColor = {
  [Theme.Dark]: {
    [State.Future]: palette.gray.light1,
    [State.Completed]: palette.green.base,
    [State.Current]: palette.green.base,
  },
  [Theme.Light]: {
    [State.Future]: palette.gray.base,
    [State.Completed]: palette.green.dark1,
    [State.Current]: palette.green.dark1,
  },
};

export const getThemedStateStyles = (theme: Theme, state: State) =>
  [
    `text-[${themedStateColor[theme][state]}]`,
    `bg-[${themedStateBgColor[theme][state]}]`,
    `border-[${themedStateBorderColor[theme][state]}]`,
  ].join(' ');
