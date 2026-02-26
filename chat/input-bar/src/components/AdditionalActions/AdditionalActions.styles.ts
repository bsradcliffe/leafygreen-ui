import { cn } from '../../cn';

export const baseContainerStyles = 'w-full flex items-center';

export const getContainerStyles = (className?: string) =>
  cn(baseContainerStyles, className);
