import { cn } from '../cn';

export const baseStyles = [
  'flex',
  'justify-between',
  'w-full',
  '[&>div:first-child]:justify-start',
  '[&>div:last-child]:justify-end',
].join(' ');

export const getSectionStyles = ({ className }: { className?: string }) =>
  cn(
    'flex-1 flex gap-[4px] items-center justify-center',
    className,
  );
