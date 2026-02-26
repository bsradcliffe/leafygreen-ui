import { spacing } from '@leafygreen-ui/tokens';

import { cn } from '../../../cn';

const baseStyles = [
  'w-max',
  `ml-[${spacing[500]}px]`,
].join(' ');

export const getPaginationStyles = ({ className }: { className?: string }) =>
  cn(baseStyles, className);
