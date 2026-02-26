import { bannerChildrenContainerClassName } from '@leafygreen-ui/banner';
import { spacing } from '@leafygreen-ui/tokens';

import { cn } from '../../../cn';

/**
 * These base styles override the default styles of the LG Banner component.
 */
export const baseStyles = [
  // Remove the Banner's left border wedge
  "before:content-['']",
  'before:bg-transparent',
  // Customize the border
  `border-[${spacing[25]}px]`,
  `rounded-[${spacing[600]}px]`,

  'max-w-fit',
  `py-[${spacing[150]}px]`,
  `px-[${spacing[200]}px]`,

  'flex',
  `gap-[${spacing[150]}px]`,

  `[&_.${bannerChildrenContainerClassName}]:m-0`,
].join(' ');

export const multilineStyles = `rounded-[${spacing[300]}px]`;

export const getBannerStyles = ({
  className,
  isMultiline,
}: {
  className?: string;
  isMultiline: boolean;
}) =>
  cn(
    baseStyles,
    {
      [multilineStyles]: isMultiline,
    },
    className,
  );
