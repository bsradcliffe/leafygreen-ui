import { spacing } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

const baseLegendStyles = [
  'flex',
  'flex-wrap',
  `gap-[${spacing[100]}px]`,
].join(' ');

export const getLegendStyles = ({ className }: { className?: string }) =>
  cn(baseLegendStyles, className);
