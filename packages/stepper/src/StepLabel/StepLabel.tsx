import React from 'react';
import { PropsWithChildren } from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { Body } from '@leafygreen-ui/typography';

import { cn } from '../cn';
import { stepLabelClassName } from '../constants';
import { StepStates } from '../types';

import { getStepLabelStyles } from './StepLabel.styles';
import { StepLabelProps } from './StepLabel.types';

export const StepLabel = ({
  children,
  state,
}: PropsWithChildren<StepLabelProps>) => {
  const isCurrent = state === StepStates.Current;
  const { theme } = useDarkMode();

  return (
    <Body
      className={cn(
        getStepLabelStyles({ theme, state }),
        stepLabelClassName,
      )}
      weight={isCurrent ? 'medium' : 'regular'}
      as="div"
    >
      {children}
    </Body>
  );
};
