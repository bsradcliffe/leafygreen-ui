import { spacing } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

const CONTAINER_MAX_WIDTH = 1040;

export const cardStyles = [
  `max-w-[${CONTAINER_MAX_WIDTH}px]`,
  'w-full',
  `p-[${spacing[800]}px]`,
].join(' ');

const baseSectionStyles = [
  `max-w-[${CONTAINER_MAX_WIDTH}px]`,
  'flex',
  'flex-col',
  `gap-[${spacing[400]}px]`,
].join(' ');

export const getSectionStyles = (className?: string) =>
  cn(baseSectionStyles, className);
