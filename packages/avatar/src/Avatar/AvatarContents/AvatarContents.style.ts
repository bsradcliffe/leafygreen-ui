import { cn } from '../../../cn';
import {
  avatarFontSizeMap,
  avatarMultiCharacterFontSizeMap,
} from '../Avatar.constants';
import { AvatarProps, AvatarSize, AvatarStyleArgs } from '../Avatar.types';

const SINGLE_CHAR_FONT_SCALE = 0.5; // Scale factor for `sizeOverride` to font-size
const MULTI_CHAR_FONT_SCALE = 0.375; // Scale factor for `sizeOverride` to font-size
const LOGO_SCALE = 0.625; // Scale factor for `sizeOverride` to Logo size
const ICON_SCALE = 0.5; // Scale factor for `sizeOverride` to icon size

interface AvatarTextStyleArgs {
  size: AvatarProps['size'];
  sizeOverride: AvatarProps['sizeOverride'];
  isSingleCharacter: boolean;
}

export const getAvatarTextStyles = ({
  size = AvatarSize.Default,
  sizeOverride,
  isSingleCharacter,
}: AvatarTextStyleArgs) => {
  const FONT_SCALE = isSingleCharacter
    ? SINGLE_CHAR_FONT_SCALE
    : MULTI_CHAR_FONT_SCALE;

  const overriddenSize = sizeOverride ? sizeOverride * FONT_SCALE : undefined;
  const defaultFontSize = isSingleCharacter
    ? avatarFontSizeMap[size]
    : avatarMultiCharacterFontSizeMap[size];
  const fontSize = overriddenSize ?? defaultFontSize;

  const isBold = isSingleCharacter || size === AvatarSize.XLarge;

  return cn(
    'select-none',
    `text-[${fontSize}px]`,
    isBold ? 'font-bold' : 'font-normal',
  );
};

export const getAvatarLogoStyles = (_: AvatarStyleArgs) =>
  // set to percentage to keep it responsive to all sizeOverride values
  `h-[${LOGO_SCALE * 100}%] w-[${LOGO_SCALE * 100}%]`;

export const getAvatarIconStyles = ({ sizeOverride }: AvatarStyleArgs) => {
  if (sizeOverride) {
    return `h-[${ICON_SCALE * sizeOverride}px] w-[${ICON_SCALE * sizeOverride}px]`;
  }
};
