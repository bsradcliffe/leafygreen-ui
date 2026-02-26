import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';

import { cn } from '../cn';
import { StepState, StepStates } from '../Stepper';

export const themedStateColor = {
  [Theme.Dark]: {
    [StepStates.CompletedMultiple]: palette.green.base,
    [StepStates.Completed]: palette.green.base,
    [StepStates.Current]: palette.gray.light2,
    [StepStates.Upcoming]: palette.gray.light1,
    [StepStates.UpcomingMultiple]: palette.gray.light1,
  },
  [Theme.Light]: {
    [StepStates.CompletedMultiple]: palette.green.dark2,
    [StepStates.Completed]: palette.green.dark2,
    [StepStates.Current]: palette.green.dark3,
    [StepStates.Upcoming]: palette.gray.dark1,
    [StepStates.UpcomingMultiple]: palette.gray.dark1,
  },
};

export const getThemedStateColorStyles = (
  theme: Theme,
  state: StepState,
) => `text-[${themedStateColor[theme][state]}]`;

export const multipleStyles = [
  'underline',
  'decoration-dotted',
  'underline-offset-[under]',
].join(' ');

export const getStepLabelStyles = ({
  theme,
  state,
}: {
  theme: Theme;
  state: StepState;
}) =>
  cn(getThemedStateColorStyles(theme, state), {
    [multipleStyles]:
      state === StepStates.CompletedMultiple ||
      state === StepStates.UpcomingMultiple,
  });
