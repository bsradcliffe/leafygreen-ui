import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';

import { GraphicStyle } from '../MarketingModal/MarketingModal.types';

const centeredContainerStyle = [
  'pt-[48px]',
  `pb-[${spacing[4]}px]`,
].join(' ');

const filledContainerStyle = [
  `pb-[${spacing[4]}px]`,
  'relative',
].join(' ');

export const containerStyleStyles: Record<GraphicStyle, string> = {
  [GraphicStyle.Center]: centeredContainerStyle,
  [GraphicStyle.Fill]: filledContainerStyle,
};

export const containerBaseStyle = [
  'flex',
  'items-center',
  'justify-center',
].join(' ');

export const filledStyle = 'w-full';

export const baseStyle = 'block';

export const curvedSVGBaseStyles = [
  'absolute',
  'left-0',
  `bottom-[${spacing[4]}px]`,
].join(' ');

export const curvedSVGThemeStyles: Record<Theme, string> = {
  [Theme.Light]: `text-[${palette.white}]`,
  [Theme.Dark]: `text-[${palette.black}]`,
};
