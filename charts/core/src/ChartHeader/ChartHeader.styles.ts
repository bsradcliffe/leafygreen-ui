import { Theme } from '@leafygreen-ui/lib';
import {
  color,
  InteractionState,
  spacing,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

export const getContainerStyles = (theme: Theme, showDivider?: boolean) =>
  cn(
    [
      `border-b border-solid border-b-[${color[theme].border[Variant.Disabled][InteractionState.Default]}]`,
      'grid',
      '[grid-area:chartHeader]',
      'grid-cols-[auto_1fr]',
      'h-[36px]',
      `py-[${spacing[100]}px] px-[${spacing[300]}px]`,
      'w-full',
    ].join(' '),
    showDivider &&
      `border-t border-solid border-t-[${color[theme].border[Variant.Disabled][InteractionState.Default]}]`,
  );

export const titleStyles = [
  'flex',
  'items-center',
  `gap-[${spacing[100]}px]`,
].join(' ');
