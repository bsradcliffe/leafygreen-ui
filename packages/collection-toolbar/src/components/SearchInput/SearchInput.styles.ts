import { cn } from '../../cn';
import { Variant } from '../../shared.types';
import { CUSTOM_BREAKPOINT } from '../constants';

export const baseStyles = [
  'flex-1',
  'min-w-[280px]',
  `[@media_only_screen_and_(max-width:${CUSTOM_BREAKPOINT}px)]:flex-[100%]`,
].join(' ');

const compactStyles = [
  'max-w-[280px]',
  `[@media_only_screen_and_(max-width:${CUSTOM_BREAKPOINT}px)]:max-w-full`,
].join(' ');

export const getSearchInputStyles = ({
  className,
  variant,
}: {
  className?: string;
  variant?: Variant;
}) => {
  return cn(
    baseStyles,
    {
      [compactStyles]: variant === Variant.Compact,
    },
    className,
  );
};
