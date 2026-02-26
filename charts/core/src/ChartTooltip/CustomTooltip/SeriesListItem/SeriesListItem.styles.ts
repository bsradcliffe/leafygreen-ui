import { fontFamilies, fontWeights, spacing } from '@leafygreen-ui/tokens';

export const containerStyle = [
  'grid',
  'grid-cols-[1fr_auto]',
  `gap-[${spacing[500]}px]`,
].join(' ');

export const nameStyle = [
  'grid',
  'grid-cols-[auto_1fr]',
  'text-left',
  'overflow-hidden',
].join(' ');

export const valueStyle = [
  'text-right',
  `font-[${fontFamilies.default}]`,
  `font-[${fontWeights.semiBold}]`,
].join(' ');
