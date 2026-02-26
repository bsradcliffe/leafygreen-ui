import { cn } from '../../../cn';

const baseComboboxStyles = 'w-fit';

export const getComboboxStyles = ({ className }: { className?: string }) =>
  cn(baseComboboxStyles, className);
