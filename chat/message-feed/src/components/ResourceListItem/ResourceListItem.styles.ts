import { Theme } from '@leafygreen-ui/lib';
import { color, spacing, typeScales } from '@leafygreen-ui/tokens';

import { cn } from '../../cn';

export const getListItemStyles = ({ className }: { className?: string }) =>
  cn(
    [
      'flex',
      `gap-[${spacing[200]}px]`,
      'items-center',
      `text-[${typeScales.body1.fontSize}px]`,
      `leading-[${typeScales.body1.lineHeight}px]`,
    ].join(' '),
    className,
  );

export const iconWrapperStyles = 'flex';

export const getIconStyles = ({ theme }: { theme: Theme }) =>
  `text-[${color[theme].icon.primary.default}]`;
