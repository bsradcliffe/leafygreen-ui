import { fontWeights, spacing, typeScales } from '@leafygreen-ui/tokens';

export const bannerWrapperStyles = [
  'w-full',
  `gap-[${spacing[200]}px]`,
  `text-[${typeScales.body1.fontSize}px]`,
  `leading-[${typeScales.body1.lineHeight}px]`,
  'justify-between',
].join(' ');

export const boldedTextStyle = `font-[${fontWeights.bold}]`;

export const listStyles = [
  `pl-[${spacing[500]}px]`,
  `leading-[${typeScales.body1.lineHeight}px]`,
  `m-[${spacing[100]}px]`,
].join(' ');
