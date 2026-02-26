import React from 'react';

import CheckmarkIcon from '@leafygreen-ui/icon/dist/Checkmark';
import EllipsisIcon from '@leafygreen-ui/icon/dist/Ellipsis';
import { fontWeights } from '@leafygreen-ui/tokens';
import { Overline } from '@leafygreen-ui/typography';

import { StepStates } from '../types';

import { StepIconProps } from './StepIcon.types';

const stepIconGlyphOverlineStyles = [
  `font-[${fontWeights.medium}]`,
  'text-[color:inherit]',
].join(' ');

export const StepIconGlyph = ({ state, children }: StepIconProps) => {
  if (state === StepStates.Completed) {
    return <CheckmarkIcon />;
  } else if (
    state === StepStates.UpcomingMultiple ||
    state === StepStates.CompletedMultiple
  ) {
    return <EllipsisIcon />;
  } else {
    // if Current (single) or Upcoming (single)
    return (
      <Overline className={stepIconGlyphOverlineStyles}>
        {children}
      </Overline>
    );
  }
};
