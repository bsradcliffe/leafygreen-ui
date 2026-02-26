import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  borderRadius,
  color,
  InteractionState,
  spacing,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

const getBaseContainerStyles = (theme: Theme) =>
  [
    'relative',
    'max-w-full',
    'w-full',
    'whitespace-pre-line',
    'break-words',
    'flex',
    'flex-col',
    `gap-[${spacing[200]}px]`,
    `text-[${color[theme].text[Variant.Primary][InteractionState.Default]}]`,
  ].join(' ');

const getSenderContainerStyles = (theme: Theme) =>
  [
    'w-auto',
    `rounded-tl-[${borderRadius[300]}px]`,
    `rounded-tr-[${borderRadius[300]}px]`,
    'rounded-bl-none',
    `bg-[${palette.gray[theme === Theme.Dark ? 'dark2' : 'light2']}]`,
    `p-[${spacing[300]}px]`,
    'self-end',
  ].join(' ');

export const getContainerStyles = ({
  className,
  isSender,
  theme,
}: {
  className?: string;
  isSender: boolean;
  theme: Theme;
}) =>
  cn(
    getBaseContainerStyles(theme),
    {
      [getSenderContainerStyles(theme)]: isSender,
    },
    className,
  );
