import { spacing } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

const baseContainerStyles = [
  'flex',
  'flex-wrap',
  `gap-x-[${spacing[300]}px]`,
  `gap-y-[${spacing[200]}px]`,
].join(' ');

export const getContainerStyles = (className?: string) =>
  cn(baseContainerStyles, className);
