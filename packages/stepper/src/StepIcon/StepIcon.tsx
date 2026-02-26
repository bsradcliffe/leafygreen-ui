import React from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import { stepIconClassName } from '../constants';

import { getStepIconStyles } from './StepIcon.styles';
import { StepIconProps } from './StepIcon.types';
import { StepIconGlyph } from './StepIconGlyph';

export const StepIcon = ({
  state,
  size,
  className,
  ...rest
}: StepIconProps) => {
  const { theme } = useDarkMode();

  return (
    <div
      className={getStepIconStyles({
        theme,
        state,
        size,
        className: `${stepIconClassName} ${className ?? ''}`.trim(),
      })}
    >
      <StepIconGlyph state={state} {...rest} />
    </div>
  );
};
