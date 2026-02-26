import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';

import { cn } from '../../cn';

import { avatarColors, avatarSizeMap } from './Avatar.constants';
import { AvatarSize, AvatarStyleArgs, Format } from './Avatar.types';

export const getAvatarStyles = ({
  format,
  theme = Theme.Light,
  size = AvatarSize.Default,
  sizeOverride,
}: AvatarStyleArgs) => {
  const sizePx = sizeOverride ?? avatarSizeMap[size];

  const baseStyles = [
    `h-[${sizePx}px]`,
    `w-[${sizePx}px]`,
    `min-h-[${sizePx}px]`,
    `min-w-[${sizePx}px]`,
    'rounded-full',
    `border-[${spacing[50]}px]`,
    'border-solid',

    'flex',
    'items-center',
    'justify-center',

    `bg-[${avatarColors[theme].background}]`,
    `text-[${avatarColors[theme].text}]`,
    `border-[${avatarColors[theme].border}]`,
  ].join(' ');

  const mongoDbStyles =
    format === Format.MongoDB
      ? [
          `bg-[${theme === Theme.Dark ? palette.green.dark3 : palette.black}]`,
          `text-[${palette.green.base}]`,
          'border-0',
        ].join(' ')
      : undefined;

  return cn(baseStyles, mongoDbStyles);
};
