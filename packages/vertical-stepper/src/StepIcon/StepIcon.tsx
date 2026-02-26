import React from 'react';

import CheckmarkIcon from '@leafygreen-ui/icon/dist/Checkmark';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import { cn } from '../cn';

import {
  getStepWrapperStyles,
  getThemedStateStyles,
  stepIconClassName,
  stepStyles,
} from './StepIcon.styles';
import { StepIconProps } from './StepIcon.types';

/**
 *
 * @internal
 */
export const StepIcon = ({ isCompleted, state, index }: StepIconProps) => {
  const { theme } = useDarkMode();

  return (
    <div className={cn(stepIconClassName, getStepWrapperStyles(isCompleted))}>
      <div className={cn(stepStyles, getThemedStateStyles(theme, state))}>
        {isCompleted ? <CheckmarkIcon /> : index + 1}
      </div>
    </div>
  );
};

StepIcon.displayName = 'StepIcon';
