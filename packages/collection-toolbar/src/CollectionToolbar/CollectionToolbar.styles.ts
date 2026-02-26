import { spacing } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

export const baseStyles = [
  'flex',
  'flex-row',
  'flex-wrap',
  'items-start',
  'justify-between',
  `gap-[${spacing[200]}px]`,
  `py-[${spacing[200]}px]`,
  `px-[${spacing[600]}px]`,
].join(' ');

export const collapsibleContentStyles = [
  'flex-[100%]',
  'grid',
  `gap-[${spacing[200]}px]`,
].join(' ');

export const getCollectionToolbarStyles = ({
  className,
}: {
  className?: string;
}) => cn(baseStyles, className);
