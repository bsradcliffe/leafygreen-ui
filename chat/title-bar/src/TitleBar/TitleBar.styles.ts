import { Theme } from '@leafygreen-ui/lib';
import {
  color,
  InteractionState,
  spacing,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

const getBaseTitleBarStyles = (theme: Theme) =>
  [
    'w-full',
    `border-b`,
    `border-b-[${color[theme].border[Variant.Secondary][InteractionState.Default]}]`,
    `bg-[${color[theme].background[Variant.Primary][InteractionState.Default]}]`,
    `py-[14px]`,
    `px-[${spacing[400]}px]`,
    'flex',
    'justify-center',
    'items-center',
    `gap-[${spacing[200]}px]`,
  ].join(' ');

export const getTitleBarStyles = ({
  className,
  theme,
}: {
  theme: Theme;
  className?: string;
}) => {
  return cn(getBaseTitleBarStyles(theme), className);
};
