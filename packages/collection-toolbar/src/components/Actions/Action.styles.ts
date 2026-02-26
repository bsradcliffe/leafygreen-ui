import {
  breakpoints,
  spacing,
  transitionDuration,
} from '@leafygreen-ui/tokens';

import { cn } from '../../cn';
import { Variant } from '../../shared.types';
import { CUSTOM_BREAKPOINT } from '../constants';

export const baseStyles = [
  'flex',
  'flex-row',
  'items-center',
  `gap-[${spacing[100]}px]`,
  `ml-[${spacing[1800]}px]`,
  `[@media_only_screen_and_(max-width:${CUSTOM_BREAKPOINT}px)]:ml-0`,
].join(' ');

const iconBaseStyles = [
  `transition-transform`,
  `duration-[${transitionDuration.default}ms]`,
  'ease-in-out',
].join(' ');

const iconExpandedStyles = 'rotate-180';

export const getIconStyles = ({ isExpanded }: { isExpanded: boolean }) =>
  cn(iconBaseStyles, {
    [iconExpandedStyles]: isExpanded,
  });

const compactStyles = `[@media_only_screen_and_(max-width:${breakpoints.Desktop}px)]:ml-0`;

export const getActionStyles = ({
  className,
  variant,
}: {
  className?: string;
  variant?: Variant;
}) =>
  cn(
    baseStyles,
    {
      [compactStyles]: variant === Variant.Compact,
    },
    className,
  );
