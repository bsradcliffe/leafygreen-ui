import { spacing } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

const baseContainerStyles = [
  'flex',
  'items-center',
  `gap-[${spacing[200]}px]`,
].join(' ');

export const getContainerStyles = (className?: string) =>
  cn(baseContainerStyles, className);

export const buttonContainerStyles = [
  'flex',
  'items-center',
  `gap-[${spacing[100]}px]`,
].join(' ');

const baseHiddenStyles = 'hidden';

export const getHiddenStyles = (isHidden: boolean) =>
  cn({
    [baseHiddenStyles]: isHidden,
  });
