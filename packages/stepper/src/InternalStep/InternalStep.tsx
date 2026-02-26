import React from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import { StepIcon } from '../StepIcon';
import { StepLabel } from '../StepLabel';
import { StepStates } from '../types';

import { getInternalStepStyles } from './InternalStep.styles';
import { InternalStepProps } from '.';

export const InternalStep = ({
  children,
  index,
  state,
  ariaLabel = `step${index || ''}`,
  shouldDisplayLine = true,
  iconSize = 20,
  className,
  ...rest
}: InternalStepProps) => {
  const { darkMode, theme } = useDarkMode();
  const isCurrent = state === StepStates.Current;
  const isCompleted =
    state === StepStates.Completed || state === StepStates.CompletedMultiple;

  return (
    <div
      className={getInternalStepStyles({
        shouldDisplayLine,
        isCompleted,
        iconSize,
        darkMode,
        theme,
        className,
      })}
      aria-label={ariaLabel}
      aria-current={isCurrent && 'step'}
      {...rest}
    >
      <StepIcon state={state} size={iconSize}>
        {index}
      </StepIcon>
      <StepLabel state={state}>{children}</StepLabel>
    </div>
  );
};
