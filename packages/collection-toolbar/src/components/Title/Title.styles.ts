import { cn } from '../../cn';
import { Variant } from '../../shared.types';

const collapsibleTitleStyles = 'flex-1';

export const getTitleStyles = ({
  className,
  variant,
}: {
  className?: string;
  variant?: Variant;
}) => {
  return cn(className, {
    [collapsibleTitleStyles]: variant === Variant.Collapsible,
  });
};
