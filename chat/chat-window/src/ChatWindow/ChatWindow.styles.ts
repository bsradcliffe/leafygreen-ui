import { spacing } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

const baseContainerStyles = [
  'overflow-hidden',
  'relative',
  'w-full',
  'h-full',
  'max-h-full',
  'justify-self-center',
  'flex',
  'flex-col',
  'items-center',
].join(' ');

export const getContainerStyles = ({ className }: { className?: string }) =>
  cn(baseContainerStyles, className);

export const hiddenSpacerStyles = 'flex-1';

export const inputBarWrapperStyles = [
  'w-full',
  'flex',
  'justify-center',
  `px-[${spacing[400]}px]`,
  `pb-[${spacing[400]}px]`,
  'pt-0',
].join(' ');
