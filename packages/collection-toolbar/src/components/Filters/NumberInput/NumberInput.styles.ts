import { cn } from '../../../cn';

export const baseInputStyles = 'w-auto';

export const getInputStyles = ({ className }: { className?: string }) =>
  cn(baseInputStyles, className);
