import { transitionDuration } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

export const transitionDurations = {
  expand: transitionDuration.slower,
  focusOrHover: transitionDuration.faster,
};

const containerStyles = 'w-full';

export const getStyles = (className?: string) => cn(containerStyles, className);
