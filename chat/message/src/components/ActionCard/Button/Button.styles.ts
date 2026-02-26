import { cn } from '../../../cn';

const baseButtonStyles = 'flex-1';

export const getButtonStyles = (className?: string) =>
  cn(baseButtonStyles, className);
