import { cn } from '../../../cn';

const baseStyles = [
  'flex-col',
  'items-start',
].join(' ');

export const getSegmentedControlStyles = ({
  className,
}: {
  className?: string;
}) => cn(baseStyles, className);
